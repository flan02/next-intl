import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const metadata: Metadata = {
  title: 'Multi-language | Curriculum',
  description: 'Built with nextjs by Dan Chanivet',
  metadataBase: new URL('https://www.danchanivet.me'),
  openGraph: {
    title: 'Mi Proyecto en Open Graph',
    description: 'Descripción para Open Graph',
    images: [
      {
        url: '/opengraph-image.png',
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mi Project on Twitter',
    description: 'Twitter',
    images: ['/opengraph-image.png'],
  },
};

export { metadata };

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}