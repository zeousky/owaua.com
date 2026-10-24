import { createFileRoute, Link } from "@tanstack/react-router";
import { DISCORD, EMAIL, Site } from "@/components/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "terms · owaua" },
      {
        name: "description",
        content: "The plain agreement for inviting and talking to the official owaua Discord bot.",
      },
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
        <p>Last updated October 24, 2026. If you invite owaua, talk to it, or keep it in a server, you agree to this.</p>
      </header>

      <section className="section">
        <h2>what this covers</h2>
        <div className="body">
          <p>
            This is the agreement for the official owaua Discord bot, the one you invite from this site. Client id 1442127404607737999. The website and the Discord server are run by the same person.
          </p>
          <p>
            Discord has its own terms, and you have to follow those too. If you run a copy of the code yourself, you are the operator of that copy. These terms are for the official bot.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>who can use it</h2>
        <div className="body">
          <p>You need a Discord account, and you need to be old enough for Discord. That means 13 or older. Please don’t use the bot if you’re under 13.</p>
          <p>If you add it to a server, you’re saying you have permission to do that, and that people there may be talking to a bot that stores recent chat.</p>
        </div>
      </section>

      <section className="section">
        <h2>what the bot is</h2>
        <div className="body">
          <p>
            owaua is a Discord bot you can chat with, ask to look things up, or use for voice, documents, images, videos, and music. Ping it, reply to it, use /ask or .ask, or send a DM. Your style and language choices are personal. Memories are separate for each server, channel, and person.
          </p>
          <p>Use slash commands or the same commands with a dot. Music uses .music with a song name or supported SoundCloud track link. You review the prompt and settings before a paid image or video generation starts. A confirmation is permission for that request, not for later requests.</p>
          <p>It isn’t a person, and it isn’t a moderator. It can help, and it can be wrong. Don’t treat what it says as medical, legal, or financial advice, and don’t hand it a decision that matters.</p>
        </div>
      </section>

      <section className="section">
        <h2>talking to it</h2>
        <div className="body">
          <p>
            Messages you send it and its replies can be stored locally. Relevant history, notes, preferences, and attachments can go to xAI to answer you. By default, history lasts up to 180 days and 1,000 exchanges per scope. Saved notes last until deleted. /memory pause stops reading and saving conversation memory here, and /reset or /memory clear erases your history and notes here.
          </p>
          <p>
            Please don’t send passwords, tokens, or anything you wouldn’t want saved. /knowledge add deliberately stores a document at xAI until you remove it with /knowledge forget or /knowledge clear. Clearing conversation history does not remove that library, your persona, or your language setting.
          </p>
          <p>
            There are ceilings: by default, a five-second cooldown per person and up to three AI requests at once. Each person gets two images and one video a day; each server shares five images and three videos. The owner is exempt. Allowances reset at midnight Budapest time. Edits count too. Hitting a limit is not a ban. Trying to break the limit, spamming a channel, or burning the API on junk is.
          </p>
          <p>
            More on storage is in the <Link to="/privacy">privacy policy</Link>.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>please don’t waste it</h2>
        <div className="body">
          <p>AI replies and generated media cost real money. owaua is for useful conversations and things you actually want to make. It is not a benchmark or a toy for burning tokens.</p>
          <p>
            Using it to waste that money is abuse. That includes looping it, farming it, pinging it for nothing, dumping huge pastes, jailbreak marathons, filler, scripts, extra accounts, and turning on expensive modes just to spam them. “I was just testing” doesn’t change that.
          </p>
          <p>I can ignore you, wipe memory, remove the bot from the server, and stop answering, with no warning. A rate limit is not permission to keep doing it.</p>
        </div>
      </section>

      <section className="section">
        <h2>if you run a server</h2>
        <div className="body">
          <p>
            If you own or moderate a server with owaua in it, you’re responsible for how it’s used there. Let people know that their requests can be stored and sent to providers. Language and persona choices belong to each person. Memory controls affect the requester’s own scope. There is no kick, ban, or other moderation command.
          </p>
          <p>Please don’t use the bot to harass people, raid, spam, or dodge Discord’s rules.</p>
        </div>
      </section>

      <section className="section">
        <h2>please don’t</h2>
        <ul className="list">
          <li>
            <strong>break the rules</strong>
            <span>The law, Discord’s terms, or these ones.</span>
          </li>
          <li>
            <strong>waste the API</strong>
            <span>No looping, farming, junk prompts, scripts, or extra accounts to burn money or dodge allowances.</span>
          </li>
          <li>
            <strong>ask for unsafe content</strong>
            <span>Don’t use the bot to request or pass around illegal, abusive, or otherwise unsafe material.</span>
          </li>
          <li>
            <strong>attack the service</strong>
            <span>No scraping, flooding, or trying to knock the host or other people over.</span>
          </li>
          <li>
            <strong>pretend</strong>
            <span>Don’t pretend to be owaua, the person running it, or someone else.</span>
          </li>
          <li>
            <strong>dump other people’s data</strong>
            <span>Don’t feed it private things they didn’t choose to share with a bot.</span>
          </li>
          <li>
            <strong>steal media</strong>
            <span>Don’t ask it to fetch or share audio or files you don’t have the right to use.</span>
          </li>
          <li>
            <strong>ask for real harm</strong>
            <span>No malware, exploits, or instructions for hurting people or breaking systems in the real world.</span>
          </li>
        </ul>
        <p className="note">I can ignore messages, reset memory, pull the bot from a server, or stop answering you.</p>
      </section>

      <section className="section">
        <h2>what it says</h2>
        <div className="body">
          <p>
            Replies are generated. They can be biased, outdated, or simply false. Please don’t treat them as medical, legal, financial, or crisis help. If you need a person, talk to a person.
          </p>
          <p>
            The bot has safety checks, but they can miss things or block a harmless request. They are not a substitute for professional help or emergency services.
          </p>
          <p>You’re responsible for what you do with an answer. If you paste it somewhere, that’s on you.</p>
        </div>
      </section>

      <section className="section">
        <h2>the official bot, and running it yourself</h2>
        <div className="body">
          <p>
            If you self-host, you’re responsible for your keys, your database, your users, and your own terms. The official bot is the one invited from this site. I can change features, limits, models, and availability. I can turn the official bot off.
          </p>
          <p>
            owaua runs on Discord and uses xAI for AI features. Music uses SoundCloud. Searches and integrations can involve other services. Their terms apply to what passes through them. Partnerships listed on this site are separate projects, with their own rules.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>no warranty</h2>
        <div className="body">
          <p>
            The bot is provided as it is. I don’t promise it will be up, correct, or a good fit for your server. To the extent the law allows, I’m not liable for what the bot says, stores, deletes, or fails to do, including lost messages, bad advice, or a command that did something you didn’t want.
          </p>
          <p>If the place you live doesn’t allow some of that, those parts don’t apply there. The rest still does.</p>
        </div>
      </section>

      <section className="section">
        <h2>if this page changes</h2>
        <div className="body">
          <p>
            The new text applies once it’s up. The date at the top is when that happened. Keeping the bot after that means you agree to the new terms. Questions go to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>, Discord <code>ckazros</code>, or the <a href={DISCORD}>Discord server</a>.
          </p>
        </div>
      </section>
    </Site>
  );
}
