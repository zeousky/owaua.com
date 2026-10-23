import { createFileRoute, Link } from "@tanstack/react-router";
import { DISCORD, EMAIL, Site } from "@/components/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "privacy · owaua" },
      {
        name: "description",
        content: "What the owaua Discord bot remembers, why, and how to ask for it to be deleted.",
      },
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
        <p>Last updated October 23, 2026. This page follows the version of the bot running now.</p>
        <p>
          owaua remembers your conversations with it, useful notes, and your settings, so the next reply isn’t starting from nothing. It doesn’t keep a background log of the rest of the room.
        </p>
      </header>

      <section className="section">
        <h2>what this is for</h2>
        <div className="body">
          <p>
            This is for the official owaua Discord bot, the one you invite from this site. Client id 1442127404607737999. The website and the Discord server are run by the same person.
          </p>
          <p>
            Discord has its own privacy policy, and that still applies. If you run a copy of the code yourself, that copy is yours. This page is only about the official bot.
          </p>
          <p>
            Using the bot also means you agree to the <Link to="/terms">terms</Link>.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>who to write</h2>
        <div className="body">
          <p>
            Questions and deletion requests can go to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>, Discord <code>ckazros</code>, or the{" "}
            <a href={DISCORD}>Discord server</a>. If you want a specific account looked up, include your Discord user id. Please don’t paste private chats into a public channel.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>what it keeps</h2>
        <p>Only what it needs to answer you, and to remember a little so the next reply has something to go on.</p>
        <ul className="list">
          <li>
            <strong>who you are on Discord</strong>
            <span>Your user id, and the server and channel ids needed to keep conversations separate. DMs have their own conversation scope. Display names come with the message Discord already sent.</span>
          </li>
          <li>
            <strong>the conversation</strong>
            <span>Messages you send through mentions, replies, commands, or DMs, and the bot’s answers. Memory is separate for each server, channel, and person. It doesn’t save ordinary room chatter as shared context, and it ignores other bots.</span>
          </li>
          <li>
            <strong>attachments and saved documents</strong>
            <span>Images, documents, recordings, and video references you deliberately send can go to xAI for the feature you requested. A temporary document upload is deleted after use when cleanup succeeds, with a one-hour provider expiry as a fallback. /knowledge add deliberately saves a document at xAI until you remove it with /knowledge forget or /knowledge clear. Local library records keep the filename, size, and provider file id, not the document bytes.</span>
          </li>
          <li>
            <strong>your settings and notes</strong>
            <span>Your persona and reply language follow your account across servers and DMs. Notes, conversation memory controls, and document libraries belong to your own conversation scope. Notes stay until you delete them. These settings survive restarts.</span>
          </li>
          <li>
            <strong>a usage mark</strong>
            <span>Daily media reservations and job records include Discord scope ids, the request state, provider job ids when available, and temporary result links. They enforce allowances and let submitted video jobs resume checking after a restart. Ordinary AI requests have a short cooldown and a limit on simultaneous work.</span>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>why</h2>
        <div className="body">
          <p>
            So it can reply, remember what you told it, and keep the voice and language you asked for. So one person can’t wear it out. So it can play a song, speak, transcribe a recording, or make media you asked for.
          </p>
          <p>We don’t sell this. There are no ads. Your DMs are not a mailing list.</p>
        </div>
      </section>

      <section className="section">
        <h2>where it lives</h2>
        <div className="body">
          <p>
            On the machine that runs the bot, in a local database. Your history is keyed by server, channel, and you. Two people in the same channel have separate histories. The same person in two channels has two. Document library metadata and media job records are stored locally too.
          </p>
          <p>
            By default, up to 16 recent exchanges can be used as context, within a 32,000-character budget. The bot can also retrieve relevant older exchanges and your saved notes from that same scope. Other people’s conversations are not included.
          </p>
          <p>
            Conversation history is kept for up to 180 days, with up to 1,000 exchanges per scope by default. Notes stay until you forget or clear them. Persona and language settings stay until changed or reset. Saved library documents have their own deletion controls.
          </p>
          <p>
            Please don’t send passwords, tokens, or anything you wouldn’t want saved. If you already did, use <code>/reset</code> or <code>/memory clear</code> for your history and notes here, remove any saved library document separately, or write to us.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>who else sees it</h2>
        <div className="body">
          <p>Discord already has the message. That’s their platform.</p>
          <p>
            To write a reply, the bot sends your current prompt, relevant recalled context, saved style and language preferences, and requested attachments to xAI. Text requests ask xAI not to store the response; that is not a promise about every kind of provider retention. Web and X searches, hosted code execution, and read-only integrations you choose can send the request data those features need to the services involved. Local memory controls do not call a model.
          </p>
          <p>
            Music sends the song query or SoundCloud track link needed to find and play it. Media generation sends your confirmed prompt and references to xAI. We are not Discord, xAI, or SoundCloud. Their policies apply to what passes through them.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>voice and recordings</h2>
        <div className="body">
          <p>/voice join sends only the starter’s microphone audio to xAI. Everyone in the voice channel can hear the bot’s replies. These live voice sessions don’t read or save your conversation history or document library, and the bot doesn’t write raw microphone audio or realtime transcripts to its logs.</p>
          <p>A recording you attach to a chat request is different: it is transcribed, and that transcript becomes part of the conversation when used to ask a question. A standalone /transcribe request returns files without saving a conversation. Speech and transcription still involve xAI.</p>
        </div>
      </section>

      <section className="section">
        <h2>how long</h2>
        <div className="body">
          <p>
            History stays until it falls off the exchange limit, expires after 180 days, you clear it, or we delete it for you. Saved notes, persona and language settings, and library documents have separate deletion controls. Media request and quota records persist until the operator deletes them; temporary result links can expire earlier at the provider. Music queues disappear when the bot restarts.
          </p>
          <p>Backups of the host can hold a copy for as long as those backups exist. Treat that file like private chat, because it is.</p>
        </div>
      </section>

      <section className="section">
        <h2>your choices</h2>
        <div className="body">
          <p>If you don’t want a record, don’t talk to it. Leaving a server stops new memory for you there. It does not, by itself, wipe what’s already stored.</p>
          <p>
            <code>/memory pause</code> stops reading and saving conversation memory here until <code>/memory resume</code>. <code>/reset</code> or <code>/memory clear</code> deletes your history, archive, and notes in this scope. <code>/memory forget</code> removes a saved note and its recorded source exchanges; paraphrases in other answers may remain. These controls do not delete your persona, language choice, or document library. Use <code>/knowledge forget</code> or <code>/knowledge clear</code> for saved documents. These history controls do not erase media job records; write to us if you need those removed.
          </p>
          <p>
            If that isn’t enough, email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> with your Discord user id. Say whether you mean DMs, a server, or both. Messages still sitting in the Discord channel are Discord’s, not ours.
          </p>
          <p>You can also stop using the bot, or kick it. Kicking it stops new collection in that server. It does not automatically delete the file.</p>
        </div>
      </section>

      <section className="section">
        <h2>this website</h2>
        <div className="body">
          <p>
            These pages are static. The menu and contact link don’t set cookies, and this version no longer loads the former Pinterest tracking tag. The host still keeps ordinary request logs. Contact is just email.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>age</h2>
        <div className="body">
          <p>
            You need a Discord account, and you need to be old enough for Discord. That means 13 or older. Please don’t use the bot if you’re under 13. The voices are meant for ordinary servers. There is no adult mode.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>if you run it yourself</h2>
        <div className="body">
          <p>
            Self-hosting means your database, your keys, your users, and your own privacy page. The official bot is the one invited from this site. We can change models, limits, and where the file lives. If that changes what we collect in a way that matters, this page will say so.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>if this page changes</h2>
        <div className="body">
          <p>
            The new text applies once it’s up. The date at the top is when that happened. Keeping the bot after that means you agree to the new page. Questions go to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>, Discord <code>ckazros</code>, or the <a href={DISCORD}>Discord server</a>.
          </p>
        </div>
      </section>
    </Site>
  );
}
