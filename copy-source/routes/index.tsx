import { createFileRoute, Link } from "@tanstack/react-router";
import { DISCORD, INVITE, LanguageRow, Site } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "owaua · a discord bot you can talk to" },
      {
        name: "description",
        content: "Mention owaua, reply to it, or send a DM. It remembers your chat, can look things up, make a picture or a short video, talk in voice, and play a song.",
      },
    ],
  }),
  component: Home,
});

const features = [
  { title: "it waits until you talk to it", body: "It doesn’t jump into every message. Ping it, reply to something it said, or send a DM. A mention, /ask, or .ask all work. It leaves other bots alone, and it doesn’t keep a running log of everyone else in the channel." },
  { title: "it remembers your conversation", body: "In that channel, your chat with it stays yours. Recent messages are right there. Older ones it can look back through, for about six months. If you tell it something worth keeping, a project or a preference, it can save a note until you delete it. The person next to you has their own memory. /memory view shows yours, just to you." },
  { title: "it can sound like you want", body: "Out of the box it talks like a friend. Casual, and it swears. If that’s not the mood, change it: pirate, robot, wizard, detective, teacher, or a short description of your own, up to 120 characters. You can also ask it to be calmer, briefer, or more direct. That choice follows you. It doesn’t change the bot for everyone else." },
  { title: "your language, not the whole server’s", body: "Try .language Hungarian. From then on, replies to you use that language, in other servers, in DMs, and in the next voice chat. .language list shows names it knows. .language auto goes back to matching how you wrote. It won’t swap the server’s picture or banner." },
  { title: "a song, if you want one", body: "Hop into a voice channel and try .music with a song name, or paste a SoundCloud link. More requests wait in line, up to 20. Pause, resume, skip, or stop from that same channel. No playlists, livestreams, or YouTube links. If the track isn’t available, it’ll say so." },
  { title: "it can look things up, and read what you send", body: "A small question can get a small answer. A bigger one can get a real explanation. It can search the web and X, look at a picture, read a PDF or a text or code file, and hand back a file or a simple chart when that’s what you asked for." },
  { title: "pictures, video, and an actual voice", body: "Ask for an image or a short video, or send one and say what to change. It shows you the prompt and the settings first. Nothing is generated until you press yes. /speak reads text out loud. /transcribe writes down a recording. /voice join is a real conversation in the voice channel: it hears the person who started it, and everyone there can hear the replies." },
];

const commands = [
  ["/help or .help", "The short version, when you forget. It also attaches a longer guide."],
  ["/ask or .ask", "Ask something. You can attach a picture, a document, a recording, or a video you want changed. A mention, a reply, or a DM works too."],
  ["/persona set", "Pick a character, or describe the voice you want. /persona view shows your choice, privately. /persona reset brings the usual voice back."],
  [".language Hungarian", "Replies to you, in that language. .language list for the names. .language auto to match your message again."],
  [".music <song or SoundCloud link>", "Put a song on. Then .music queue, pause, resume, skip, or stop."],
  ["/memory view", "See your notes here. remember saves one, forget removes one, pause stops memory without deleting it, and resume turns it back on."],
  ["/reset or .reset", "Wipe your own history and notes in this channel. Your voice, your language, and any saved documents stay until you change those separately."],
  ["/knowledge add", "Keep a PDF, text, or code file for later questions in this channel. /ask library:true is how you use it. forget and clear take files back down."],
  ["/voice join", "Start a voice conversation. leave ends it. Only the person who started it can steer it, and it listens only to them."],
  ["/speak and /transcribe", "Turn text into an audio file, or a recording into text. /ask spoken:true speaks the answer as well."],
  ["/jobs", "Your recent pictures and videos in this server or DM, including a link if one is still up."],
  ["/integrations", "A private list of optional, read-only lookups you can turn on for one question."],
];

const limits = [
  { title: "give it a second", body: "There’s about a five-second pause between your requests, and only a few conversations can be going at once. If you’re already mid-chat with it, the next message waits its turn." },
  { title: "pictures and videos are limited", body: "You get two images and one video a day, across servers and DMs. A server shares five images and three videos. That resets at midnight in Budapest. A batch counts each image, and an edit counts too. You confirm before any of it is spent. The person who runs the bot isn’t counted against those numbers." },
  { title: "music and voice stay small on purpose", body: "One music player per server. SoundCloud tracks under an hour. A voice chat lasts up to ten minutes, and it ends if nobody talks for a couple of minutes. Stop the music before you start a voice chat, and the other way around. There’s one of those per server." },
];

const questions = [
  { q: "Does it reply to every message?", a: "No. Ping it, reply to it, use a command, or DM it. It stays quiet the rest of the time." },
  { q: "Why didn’t it answer?", a: "Check that you actually pinged it, or used a command, then give it a moment. A moving bar means it’s working. If it’s still quiet, look at the limits above. It also ignores other bots." },
  { q: "Can I change how it sounds?", a: "Yes. /persona set description:Talk like a pirate, or pick a built-in character. It’s only for you. /persona reset brings back the usual voice, swearing and all." },
  { q: "Does the music actually play?", a: "Yes, for a SoundCloud track it can reach. Join voice, then .music and a song name or a track link. If the source is blocked or missing, it tells you and you can try another. YouTube links and playlists won’t play." },
  { q: "Can I trust every reply?", a: "No. It can sound sure and still be wrong. If it matters, check it, or ask a person." },
  { q: "Where do I say something is broken?", a: "placeholder" },
];

function Home() {
  return (
    <Site note="The site is small. The bot is the part that matters.">
      <header className="hero">
        <div className="hero-id">
          <img src="/pfp.webp" width={52} height={52} alt="" />
          <div>
            <strong>owaua</strong>
            <span>a discord bot you can talk to</span>
          </div>
        </div>
        <h1>the bot that hangs out in your server</h1>
        <p className="status">It stays quiet until you talk to it. Then it can actually help.</p>
        <p className="lede">
          Mention it, reply to it, or just DM it. It remembers your conversation in that channel, not everyone else’s. It can change how it sounds, answer in your language, look something up, make a picture or a short video, talk with you in voice, or put a song on.
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
          Slash commands work. So does a dot, like <code>.ask what time is it</code>. If a command is private, the answer comes to your DMs, so leave those open. The message you typed in the server stays visible there.
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
        <figcaption>a reply, in the wild</figcaption>
      </figure>

      <section className="section" id="what">
        <h2>what it does</h2>
        <p>Talk to it the way you’d talk to someone in the server. The voice and the language are yours, not the room’s.</p>
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
          Every slash command also works with a dot, no mention needed. Your voice, language, memory, and saved files are yours. Music controls only work if you’re in the same voice channel.
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
          These exist so one person can’t run up the bill, and so I can leave it on. They’re limits. Using it still costs money on my side.
        </p>
        <ul className="list">
          {limits.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.body}</span>
            </li>
          ))}
        </ul>
        <p className="note">It gets things wrong. If a reply matters, check it, or ask a person.</p>
      </section>

      <section className="section" id="data">
        <h2>what it keeps</h2>
        <p>Your chats with it, notes you asked it to keep, and settings like your voice and language. That lives on the machine that runs the bot. When it answers, the useful parts go to xAI. A document you choose to save stays there until you delete it. None of this is sold, and there are no ads.</p>
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

      <section className="section" id="who">
        <h2>who runs it</h2>
        <div className="body">
          <p>
            I do. I’m ckazros, and I run owaua in my spare time. There’s no company behind it. If something breaks, the <a href={DISCORD}>Discord server</a> or <a href="mailto:ckazros@owaua.com">email</a> is the fastest way to reach me. The <Link to="/partnerships">partners page</Link> is other bots I’d vouch for. They aren’t this one.
          </p>
        </div>
      </section>
    </Site>
  );
}
