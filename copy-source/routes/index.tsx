import { createFileRoute, Link } from "@tanstack/react-router";
import { DISCORD, INVITE, LanguageRow, Site } from "@/components/site";

export const Route = createFileRoute("/")({
  component: Home,
});

const features = [
  { title: "it waits until you ask", body: "Ping it in a server and it answers. You can also reply to it, use /ask or .ask, or send a DM. It ignores other bots. It doesn’t collect the rest of the room’s chatter." },
  { title: "it remembers your chat", body: "Your history is just you, in that server and channel. It can use recent messages, look back through older exchanges, and save useful things you tell it. The person next to you has their own history, and their own voice. Use /memory view to see your saved notes." },
  { title: "a few ways it can sound", body: "Keep its usual casual voice, pick a pirate, robot, wizard, detective, or teacher, or describe a style of your own with /persona set description:.... That choice is yours. It follows you across servers and DMs until you change or reset it." },
  { title: "it can answer in your language", body: "Set a full language name, like .language Hungarian. It applies to your replies, across servers and DMs, and to new voice sessions. .language auto goes back to matching your message. It doesn’t change the whole server’s language or profile art." },
  { title: "a song in voice, if you ask", body: "Join a voice channel and try .music with a song name or a SoundCloud track link. More requests join the queue. You can pause, resume, skip, stop, or see what’s next. Controls work from the same voice channel as the bot." },
  { title: "more than a short reply", body: "Ask a quick thing and it can keep it short. Ask for an explanation and it can go longer. It can search the web and X, read images and PDF, text, or code files, and return files or charts when the work calls for them." },
  { title: "pictures, videos, and a voice", body: "Ask for an image or video, or send one and say what to change. You review the prompt and settings before a paid generation starts. /speak reads text aloud, /transcribe turns a recording into text, and /voice join starts a voice conversation." },
];

const commands = [
  ["/help  or  .help", "The list, when you forget."],
  ["/ask  or  .ask", "Ask something. Attach an image, document, recording, or a video you want edited. A mention, reply, or DM works too."],
  ["/persona set description:...", "Describe the voice you want, in up to 120 characters. /persona view shows it; /persona reset brings back the usual one."],
  [".language Hungarian", "Choose your reply language. .language list shows the choices; .language auto lets it match your message again."],
  [".music <song name or SoundCloud link>", "Put a song on. .music queue, pause, resume, skip, and stop are the controls."],
  ["/memory view|remember|forget|pause|resume|clear", "See or manage your notes here. Pause stops reading and saving conversation memory. It doesn’t delete it."],
  ["/reset  or  .reset", "Clear your own history, archive, and notes in this channel. Your persona, language, and saved documents have separate controls."],
  ["/knowledge add|list|forget|clear", "Save a PDF, text, or code document for later. /ask library:true uses your library here."],
  ["/voice join|leave|status|voices", "Talk in voice. It listens only to the person who started it, but everyone in the channel can hear the replies."],
  ["/speak  and  /transcribe", "Turn text into speech, or a recording into text. /ask spoken:true adds a spoken answer."],
  ["/jobs", "Your recent media requests and any finished video links in this server or DM."],
  ["/integrations", "The read-only connections you can choose for an /ask request."],
];

const limits = [
  { title: "a little breathing room", body: "AI requests have a five-second per-person cooldown by default. Up to three requests can be running at once. Another request in the same conversation waits until the current one finishes." },
  { title: "media has a daily allowance", body: "Each person gets two images and one video a day. Each server shares five images and three videos a day. The bot owner is exempt. They reset at midnight Budapest time. A batch uses one image allowance per image, and edits count too." },
  { title: "music and voice stay bounded", body: "One player per server, with up to 20 songs waiting. Choose recorded SoundCloud tracks shorter than an hour. A voice conversation lasts up to ten minutes, and only its starter can control it. Stop music before starting a voice conversation." },
];

const questions = [
  { q: "Does it reply to every message?", a: "No. Ping it, reply to it, use a command, or send a DM. It doesn’t join in on every line in the channel." },
  { q: "Why didn’t it answer?", a: "Make sure you pinged it or used a command, then give it a second. A moving bar means it’s working. If it’s quiet after that, check the limits above. It also ignores other bots." },
  { q: "Can I change how it sounds?", a: "Yes. Try /persona set description:Talk like a pirate, or choose a built-in character. The choice is just for you. /persona reset brings back the usual voice." },
  { q: "Does the music actually play?", a: "It plays supported SoundCloud tracks. Join voice, then try .music with a song name or track link. If a source is unavailable, it can fail. YouTube links and playlists aren’t supported by this version." },
  { q: "Can I trust every reply?", a: "No. It can sound sure and still be wrong. If something matters, check it yourself, or ask a person." },
  { q: "Where do I say something is broken?", a: "The Discord server, or me: Discord ckazros, or ckazros@owaua.com. Tell me what you tried and what happened. Please don’t paste tokens or private chats into a public channel." },
];

function Home() {
  return (
    <Site note="The site is small. The bot is the part that matters.">
      <header className="hero">
        <div className="hero-id">
          <img src="/pfp.webp" width={52} height={52} alt="" />
          <div>
            <strong>owaua</strong>
            <span>a small discord bot</span>
          </div>
        </div>
        <h1>the bot that hangs out in your server</h1>
        <p className="status">
          Chat, search, voice, and media, powered by Grok. Ask for what you need; it stays quiet until then.
        </p>
        <p className="lede">
          Ping it when you want it to talk. It remembers your conversations, not the whole channel. It can change how it sounds for you, answer in your language, look things up, make something, or play a song in voice.
        </p>
        <div className="actions">
          <a className="button" href={DISCORD}>
            come sit in the Discord
          </a>
          <a className="button ghost" href={INVITE}>
            invite owaua
          </a>
        </div>
        <p className="note">
          Use slash commands, or start with a dot, like <code>.ask Hello</code>. DMs work too. Private dot-command results arrive by DM; the command you typed in a server stays visible there.
        </p>
        <LanguageRow />
      </header>

      <figure className="shot">
        <img
          src="/shot.webp"
          width={738}
          height={408}
          alt="owaua replying in a Discord channel"
        />
        <figcaption>the screenshot I still like</figcaption>
      </figure>

      <section className="section" id="what">
        <h2>what it does</h2>
        <p>Ping it when you want it in the conversation. It answers in the voice and language you chose for yourself.</p>
        <ul className="list">
          {features.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.body}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" id="commands">
        <h2>how you talk to it</h2>
        <p>
          Every slash command also works with a dot. Your style, language, memory, and document library are your own. Music controls only work if you’re in the same voice channel as the bot.
        </p>
        <div className="commands">
          {commands.map(([cmd, help]) => (
            <div className="command" key={cmd}>
              <code>{cmd}</code>
              <p>{help}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="limits">
        <h2>the limits</h2>
        <p>
          So one person can’t wear it out, and so it stays cheap enough to leave on. These are caps. They aren’t a promise that using it is free.
        </p>
        <ul className="list">
          {limits.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.body}</span>
            </li>
          ))}
        </ul>
        <p className="note">It can be wrong with a straight face. If it matters, check it.</p>
      </section>

      <section className="section" id="data">
        <h2>what it keeps</h2>
        <p>Conversations, notes, and the settings you asked it to remember. Local memory stays on the host; relevant prompts and attachments go to xAI to answer you. Documents you deliberately save in a library stay at xAI until you remove them. It isn’t sold, and it isn’t used for ads.</p>
        <div className="body">
          <p>
            The longer version is the <Link to="/privacy">privacy policy</Link>. Inviting it also means the <Link to="/terms">terms</Link>.
          </p>
        </div>
      </section>

      <section className="section" id="faq">
        <h2>questions</h2>
        <div className="faq">
          {questions.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>
                {item.q.startsWith("Where") ? (
                  <>
                    The <a href={DISCORD}>Discord server</a>, or me: Discord <code>ckazros</code> ·{" "}
                    <a href="mailto:ckazros@owaua.com">ckazros@owaua.com</a>. Tell me what you tried and what happened. Please don’t paste tokens or private chats into a public channel.
                  </>
                ) : (
                  item.a
                )}
              </p>
            </details>
          ))}
        </div>
      </section>
    </Site>
  );
}
