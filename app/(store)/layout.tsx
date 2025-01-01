import type { Metadata } from "next";

import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";
import { draftMode } from "next/headers";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { VisualEditing } from "next-sanity";

export const metadata: Metadata = {
  title: "Shopr | E-Commerce Store",
  description: "E-Commerce Store",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="en">
        <body>
          {(await draftMode()).isEnabled && (
            <>
              <DisableDraftMode />
              <VisualEditing />
            </>
          )}

          <main>
            <Header />
            {children}
          </main>

          <SanityLive />
        </body>
      </html>
    </ClerkProvider>
  );
}
