import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Key Pair',
    default:
      'Key Pair - Two developers exploring Bitcoin, Lightning, and Nostr to build user-empowering apps',
  },
  description:
    'Two developers exploring Bitcoin, Lightning, and Nostr to build user-empowering apps',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-white antialiased">
      <head>
        <link 
          rel="alternate" 
          type="application/rss+xml" 
          title="RSS" 
          href="https://media.keypair.fm/feed.xml?title=Key+Pair+Podcast"
        />
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap"
        />
      </head>
      <body className="flex min-h-full">
        <div className="w-full">{children}</div>
      </body>
    </html>
  )
}
