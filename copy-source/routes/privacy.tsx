import { createFileRoute, Link } from "@tanstack/react-router";
import { DISCORD, EMAIL, Site } from "@/components/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "privacy · owaua" },
      { name: "description", content: "What owaua remembers, who else sees it, and how to delete it." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Site>
      <header className="page-head">
        <p className="kicker">privacy</p>
        <h1>what it remembers</h1>
        <p>Last updated October 24, 2026. Official bot only, client id 1442127404607737999. Using it also means the <Link to="/terms">terms</Link>.</p>
      </header>

      <section className="section">
        <h2>what it keeps</h2>
        <ul className="list">
          <li><strong>your chat</strong><span>Messages you send it, and its replies, for that server, channel, and you. Not other people’s chats, and not a log of the room.</span></li>
          <li><strong>notes and settings</strong><span>Notes you save, your persona, and your language. History lasts up to 180 days or 1,000 exchanges. Notes stay until you delete them.</span></li>
          <li><strong>files and media</strong><span>Things you attach go to xAI for that request. A saved document stays there until you remove it. Picture and video jobs are recorded so the daily limits hold.</span></li>
        </ul>
      </section>

      <section className="section">
        <h2>who else sees it</h2>
        <div className="body">
          <p>Discord already has the message. To answer, owaua sends the prompt, useful context, and attachments to xAI. It asks xAI not to store text replies. That is not a promise about every log they keep. Music sends a song name or SoundCloud link to SoundCloud. A voice chat sends only the starter’s microphone. I don’t sell any of this.</p>
        </div>
      </section>

      <section className="section">
        <h2>deleting it</h2>
        <div className="body">
          <p><code>/reset</code> clears your history and notes here. It does not clear your persona, language, saved documents, or media jobs. Use <code>/knowledge clear</code> for documents. Leaving a server does not wipe what’s already stored. Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> with your Discord user id if you need more deleted. Don’t send passwords.</p>
          <p>The site is static and doesn’t use a tracking tag. Write me at that email, Discord <code>ckazros</code>, or the <a href={DISCORD}>Discord</a>. You need to be 13 or older. The default voice swears. There is no adult mode.</p>
        </div>
      </section>
    </Site>
  );
}
