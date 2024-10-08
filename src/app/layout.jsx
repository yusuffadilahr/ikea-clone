import localFont from "next/font/local";
import "./globals.css";
import NavbarCustom from "@/components/navbar";
import FooterCustom from "@/components/footer";
import TanstackProviders from "@/providers/tanstackProviders";
// import ReduxProvider from "@/providers/reduxProviders";
// import GlobalLoading from "@/components/hocLoading";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "IKEA",
  description: "&copy; cloned by Yusuf Fadilah Rukmana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TanstackProviders>
          {/* <GlobalLoading> */}
          {/* <ReduxProvider> */}
          <NavbarCustom />
          {children}
          <FooterCustom />
          {/* </ReduxProvider> */}
          {/* </GlobalLoading> */}
        </TanstackProviders>
      </body>
    </html>
  );
}
