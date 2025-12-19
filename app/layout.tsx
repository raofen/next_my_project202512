// layout.tsx
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
