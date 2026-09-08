import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Haodong Liang | Machine Learning Research · UC Davis',
  description: 'Haodong Liang is a Ph.D. candidate at UC Davis studying the theory and mechanisms of in-context learning, reinforcement learning, and differential privacy.',
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
