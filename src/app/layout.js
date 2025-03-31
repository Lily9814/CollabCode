import "./globals.css";

export const metadata = {
  title: "CollabCode",
  description: "Real-time collaborative coding platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
