import { createFileRoute, Link } from "@tanstack/react-router";
import { DISCORD, INVITE, LanguageRow, Site } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "owaua · a discord bot you can talk to" },
      {
        name: "description",
        content: "Mention owaua when you want a reply. It can remember, look things up, make a picture or a short video, talk in voice, and play a song.",
      },
    ],
  }),
  component: Home,
});

const features = [
  ["you start it", "Mention it, reply to it, or DM it. Otherwise it stays quiet."],
  ["it remembers you", "Your chat in that channel is yours, for about six months. Notes stay until you delete them. Other people have their own."],
  ["your voice", "Casual, and it swears, unless you change that with /persona. .language picks the language of your replies."],
  ["more than chat", "It can search, read a file, make a picture or short video after you say yes, talk in voice, or play a SoundCloud song."],
];

const commands = [
  ["/ask or .ask", "Ask. Attach a picture, file, recording, or video if you want."],
  ["/persona and .language", "How it talks, just for you."],
  ["/memory and /reset", "Your notes and history in this channel."],
  ["/knowledge", "Save a document here for later."],
  [".music", "A song name or SoundCloud link."],
  ["/voice, /speak, /transcribe", "A voice chat, or text and audio turned into each other."],
];

const limits = [
  ["a short pause", "About five seconds between requests. Only a few chats at once."],
  ["pictures and video", "Two images and one video a day for you. A server shares five and three. Resets at midnight in Budapest. You confirm first."],
  ["music and voice", "One player per server. SoundCloud, under an hour. Voice chats last up to ten minutes."],
];

function Home() {
  return (
    <Site>
      <header className="hero">
        <div className="hero-id">
          <img src="/pfp.webp" width={52} height={52} alt="" />
          <div>
            <strong>owaua</strong>
            <span>a discord bot you can talk to</span>
          </div>
        </div>
        <h1>mention it when you want a reply</h1>
        <p className="lede">
          It remembers your chat, not everyone else’s. It can look something up, make a picture or a short video, talk in voice, or put a song on.
        </p>
        <div className="actions">
          <a className="button" href={DISCORD}>Discord</a>
          <a className="button ghost" href={INVITE}>invite owaua</a>
        </div>
        <p className="note">
          Slash commands, or a dot: <code>.ask</code>. Private answers come by DM.
        </p>
        <LanguageRow />
      </header>

      <section className="section" id="what">
        <h2>what it does</h2>
        <ul className="list">
          {features.map(([title, body]) => (
            <li key={title}><strong>{title}</strong><span>{body}</span></li>
          ))}
        </ul>
      </section>

      <section className="section" id="commands">
        <h2>commands</h2>
        <p>Every slash command also works with a dot.</p>
        <div className="commands">
          {commands.map(([cmd, help]) => (
            <div className="command" key={cmd}><code>{cmd}</code><p>{help}</p></div>
          ))}
        </div>
      </section>

      <section className="section" id="limits">
        <h2>limits</h2>
        <ul className="list">
          {limits.map(([title, body]) => (
            <li key={title}><strong>{title}</strong><span>{body}</span></li>
          ))}
        </ul>
        <p className="note">It can be wrong. If it matters, check it.</p>
      </section>

      <section className="section" id="faq">
        <h2>a few answers</h2>
        <div className="faq">
          <details>
            <summary>Does it reply to every message?</summary>
            <p>No. Ping it, reply to it, or DM it.</p>
          </details>
          <details>
            <summary>Can I trust every reply?</summary>
            <p>No. It can sound sure and still be wrong.</p>
          </details>
          <details>
            <summary>Who runs it, and where do I report a problem?</summary>
            <p>
              I do. I’m ckazros. The <a href={DISCORD}>Discord</a>, or <a href="mailto:ckazros@owaua.com">email</a>. Don’t paste tokens or private chats in public. What it stores is in the <Link to="/privacy">privacy policy</Link>. Inviting it means the <Link to="/terms">terms</Link>.
            </p>
          </details>
        </div>
      </section>
    </Site>
  );
}
