import { createFileRoute, Link } from "@tanstack/react-router";
import { DISCORD, EMAIL, Site } from "@/components/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "terms · owaua" },
      { name: "description", content: "The short agreement for the official owaua Discord bot." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Site>
      <header className="page-head">
        <p className="kicker">terms</p>
        <h1>the agreement</h1>
        <p>Last updated October 24, 2026. If you invite owaua or talk to it, you agree to this. Client id 1442127404607737999. Discord’s rules still apply. A copy you run yourself is yours.</p>
      </header>

      <section className="section">
        <h2>using it</h2>
        <div className="body">
          <p>You need to be 13 or older. If you add it to a server, you have permission to, and people there may be talking to a bot that stores recent chat. Storage is in the <Link to="/privacy">privacy policy</Link>.</p>
          <p>It can help, and it can be wrong. Don’t treat a reply as medical, legal, financial, or crisis help. You’re responsible for what you do with an answer.</p>
          <p>Replies and media cost real money. Don’t loop it, farm it, spam it, or burn the API on junk. I can stop answering, wipe memory, or remove the bot, with no warning.</p>
        </div>
      </section>

      <section className="section">
        <h2>please don’t</h2>
        <ul className="list">
          <li><strong>break the rules</strong><span>The law, Discord’s terms, or these.</span></li>
          <li><strong>hurt people</strong><span>No harassment, raids, illegal or abusive material, or instructions for real-world harm.</span></li>
          <li><strong>dump private data</strong><span>Don’t feed it secrets, or other people’s private stuff.</span></li>
          <li><strong>break the service</strong><span>No scraping, flooding, or pretending to be me or the bot.</span></li>
        </ul>
      </section>

      <section className="section">
        <h2>no warranty</h2>
        <div className="body">
          <p>The bot is provided as it is. I don’t promise it will be up or correct. To the extent the law allows, I’m not liable for what it says, stores, deletes, or fails to do. If a local law blocks part of that, the rest still applies.</p>
          <p>I can change or turn off the official bot. New text here applies once it’s up. Questions: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>, Discord <code>ckazros</code>, or the <a href={DISCORD}>Discord</a>.</p>
        </div>
      </section>
    </Site>
  );
}
