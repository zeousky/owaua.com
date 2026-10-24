import { createFileRoute } from "@tanstack/react-router";
import { EMAIL, Site } from "@/components/site";

export const Route = createFileRoute("/partnerships")({
  head: () => ({
    meta: [
      { title: "partners · owaua" },
      {
        name: "description",
        content: "Other bots owaua gets along with, and how to ask for a spot on the page.",
      },
    ],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <Site>
      <header className="page-head">
        <p className="kicker">partners</p>
        <h1>other bots I like</h1>
        <p>Other projects I get along with. They have their own rules.</p>
      </header>

      <article className="partner">
        <h2>E.R.G.O</h2>
        <p className="meta">the other bot · Discord</p>
        <p>
          owaua is the bot you talk to. E.R.G.O does the chores: a wallet, a shop, music, mods, fishing, news, and a little AI of its own. The long name is Executive Response & Governance Operator.
        </p>
        <p>
          Type <code>!menu</code> in Discord for the live list. Some of it is staff-only. It isn’t us, and it doesn’t share memory with owaua. If this page and the bot ever disagree, believe the bot.
        </p>
      </article>

      <article className="partner open-slot">
        <h2>maybe yours</h2>
        <p className="meta">four things, then write</p>
        <p>Want a spot? Send all four. A one-liner isn’t enough.</p>
        <ul className="list">
          <li>
            <strong>a clear README</strong>
            <span>What it is, who it’s for, and how someone would actually use it.</span>
          </li>
          <li>
            <strong>what it does</strong>
            <span>The features, in plain words.</span>
          </li>
          <li>
            <strong>the commands</strong>
            <span>The list people type. Names, arguments, and what each one does.</span>
          </li>
          <li>
            <strong>the bot’s picture</strong>
            <span>The avatar it wears. A png or webp is fine.</span>
          </li>
        </ul>
        <p className="note">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Please don’t send anyone’s private data.
        </p>
      </article>
    </Site>
  );
}
