import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: "Haodong Liang's homepage",
  description: 'Haodong Liang is a Ph.D. candidate at UC Davis studying the theory and mechanisms of in-context learning, reinforcement learning, and differential privacy.',
  icons: {
    icon: [
      { url: '/favicon.ico?v=hl-1', type: 'image/x-icon', sizes: '16x16 32x32 48x48' },
      { url: '/favicon-32.png?v=hl-1', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico?v=hl-1',
    apple: { url: '/apple-touch-icon.png?v=hl-1', type: 'image/png', sizes: '180x180' },
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
