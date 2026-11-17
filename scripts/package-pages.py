"""Package the public website at the mount point configured for GitHub Pages."""

import argparse
import base64
import hashlib
import os
from pathlib import Path
import re
import shutil

SITE = Path(__file__).resolve().parent.parent / "site"
PUBLIC_ORIGIN = "https://owaua.com"
PUBLIC_EXTENSIONS = {".css", ".html", ".jpg", ".js", ".png", ".svg", ".ttf", ".txt", ".webp"}
ROOT_URL = re.compile(r"""(\b(?:href|src|poster|action|srcset|content)=["'])/(?!/)""", re.IGNORECASE)
CSS_URL = re.compile(r"""(url\(\s*["']?)/(?!/)""")
APP_URL = re.compile(r"""(["'`])(/secret)(?=[/"'`])""")
KIRK_URL = re.compile(r"""(["'])(/kirk)(?=[/"'])""")
NOT_FOUND_SCRIPT = re.compile(r"(<script>)(.*?)(</script>)", re.DOTALL)


def hash_script(script):
    return base64.b64encode(hashlib.sha256(script.encode()).digest()).decode()


def mount_html(text, name, mount, url):
    if name == Path("404.html"):
        original = NOT_FOUND_SCRIPT.search(text)
        if original:
            script = original[2]
            patched = KIRK_URL.sub(rf"\g<1>{mount}\g<2>", script)
            patched = APP_URL.sub(rf"\g<1>{mount}\g<2>", patched)
            text = text.replace(script, patched)
            text = text.replace("sha256-" + hash_script(script), "sha256-" + hash_script(patched))

    text = ROOT_URL.sub(rf"\g<1>{mount}/", text)
    if name.parts[0] == "secret":
        text = APP_URL.sub(rf"\g<1>{mount}\g<2>", text)
    return text.replace(PUBLIC_ORIGIN + "/", url + "/")


def package(output, mount, base_url):
    output.mkdir(parents=True, exist_ok=False)
    for source in SITE.rglob("*"):
        name = source.relative_to(SITE)
        if source.suffix not in PUBLIC_EXTENSIONS or not source.is_file() or source.is_symlink():
            continue
        if name.parts[:2] in {("assets", "archive"), ("assets", "editorial")}:
            continue

        target = output / name
        target.parent.mkdir(parents=True, exist_ok=True)
        if source.suffix == ".html":
            target.write_text(mount_html(source.read_text(), name, mount, base_url))
        elif mount and source.suffix == ".css":
            target.write_text(CSS_URL.sub(rf"\g<1>{mount}/", source.read_text()))
        elif mount and name.parts[0] == "secret" and source.suffix == ".js":
            target.write_text(APP_URL.sub(rf"\g<1>{mount}\g<2>", source.read_text()))
        else:
            shutil.copyfile(source, target)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    mount = os.environ.get("PAGES_BASE_PATH", "").rstrip("/")
    base_url = os.environ.get("PAGES_BASE_URL", PUBLIC_ORIGIN).rstrip("/")
    package(args.output, mount, base_url)
