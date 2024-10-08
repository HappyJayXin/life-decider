import { Noto_Sans } from "next/font/google";
import "./globals.css";

import { dir } from "i18next";
import { languages } from "@/app/i18n/settings";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Toast from "@/app/components/Toast";

import { Providers } from "@/app/store/provider";
import { useTranslation } from "@/app/i18n";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});

export const generateStaticParams = async () => {
  return languages.map((lng) => ({ lng }));
};

export const generateMetadata = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng);
  return {
    title: t("app_title"),
    description: t("app_desc"),
    authors: [{ name: "Jay Chen", url: "https://github.com/HappyJayXin" }],
  };
};

const RootLayout = async ({ children, params: { lng } }) => {
  return (
    <html lang={lng} dir={dir(lng)} data-theme="cupcake">
      <head />
      <body className={`${notoSans.variable} flex h-screen flex-col`}>
        <Providers>
          <Header />
          <main className="flex-1 overflow-y-auto">{children}</main>
          <Footer lng={lng} />
          <Toast lng={lng} />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
