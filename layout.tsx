export const metadata = {
  title: "Aravind Thiruppathi — Portfolio",
  description: "Logistics with clarity, speed, and trust.",
  openGraph: {
    title: "Aravind Thiruppathi — Portfolio",
    description: "Logistics with clarity, speed, and trust.",
    url: "https://your-live-domain.com",
    siteName: "Aravind Thiruppathi",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    type: "website"
  },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
