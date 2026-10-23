import type { ReactNode } from 'react';

export const createFileRoute = (_path: string) => (options: { component: () => ReactNode; head?: () => unknown }) => options;
export function Link({ to, hash, children, ...props }: { to: string; hash?: string; children?: ReactNode }) {
  return <a href={to + (hash ? '#' + hash : '')} {...props}>{children}</a>;
}
