import type { ReactNode } from 'react';

export const INVITE = 'https://discord.com/oauth2/authorize?client_id=1442127404607737999&permissions=4503599630609408&integration_type=0&scope=bot%20applications.commands';
export const DISCORD = 'https://discord.gg/CNbpwtE9HS';
export const EMAIL = 'ckazros@owaua.com';

export function LanguageRow() {
  return <p className="langs-label">This site is in English. <code>.language</code> picks yours.</p>;
}

export function Site({ children, note }: { children: ReactNode; note?: string }) {
  return <>{note && <aside className="corner-note">{note}</aside>}{children}</>;
}
