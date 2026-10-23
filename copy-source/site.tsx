import type { ReactNode } from 'react';

export const INVITE = 'https://discord.com/oauth2/authorize?client_id=1442127404607737999&permissions=4503599630609408&integration_type=0&scope=bot%20applications.commands';
export const DISCORD = 'https://discord.gg/CNbpwtE9HS';
export const EMAIL = 'ckazros@owaua.com';
const languages = ['english', 'français', 'deutsch', 'ελληνικά', 'magyar', 'italiano', 'polski', 'română', 'українська'];

export function LanguageRow() {
  return <><p className="langs-label">The site stays in English. The bot can answer in these:</p><ul className="langs" aria-label="Languages the bot can answer in">{languages.map(name => <li key={name}>{name}</li>)}</ul></>;
}

export function Site({ children, note }: { children: ReactNode; note?: string }) {
  return <>{note && <aside className="corner-note">{note}</aside>}{children}</>;
}
