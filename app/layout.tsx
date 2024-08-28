'use client';

import '@mantine/core/styles.css';
import './globals.css';
import { MantineProvider } from '@mantine/core';
import ModalProvider from '@/providers/modal-provider';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/poller-one"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_CLIENT_ID as string}
        >
          <MantineProvider>
            <ModalProvider>{children}</ModalProvider>
          </MantineProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
