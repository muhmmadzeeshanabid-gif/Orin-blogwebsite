import Script from "next/script";
import { Poppins, Lora, Noto_Serif, Open_Sans, Source_Sans_3, Yeseva_One } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

const lora = Lora({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const notoSerif = Noto_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-noto-serif",
  display: "swap",
});

const openSans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-open-sans",
  display: "swap",
});

const sourceSansPro = Source_Sans_3({
  weight: ["400", "600"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-source-sans-pro",
  display: "swap",
});

const yesevaOne = Yeseva_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-yeseva-one",
  display: "swap",
});

export const metadata = {
  title: "Orin - Minimal Blog For WordPress - Just another WordPress site",
  description: "Local-only Orin-inspired blog rendered from our own codebase.",
};

export default function RootLayout({ children }) {
  const bodyClassName = "home blog wp-embed-responsive wp-theme-orin bwp-body bwp-sidebar-hidden bwp-enable-sticky-header";

  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/vendor/orin/css/magnific-popup.css" />
        <link rel="stylesheet" href="/vendor/orin/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/vendor/orin/fontawesome/css/v5-font-face.min.css" />
        <style>{`
          .bwp-post-wrap:hover .bwp-post-content::before { width: 30px; }
          .bwp-footer-widgets-col-3 .wpcf7 .bwp-demo-contact-msg { height: 93px; }
          .bwp-font-types,
          #bwp-show-font-types,
          #bwp-dropdown-font-types { display: none !important; }
          .pagination .nav-links {
            display: flex;
            justify-content: center !important;
            align-items: center;
            flex-wrap: wrap;
            gap: 6px;
            text-align: center !important;
          }
          @media (max-width: 767px) {
            .pagination,
            .navigation.pagination,
            .pagination .nav-links {
              display: flex !important;
              justify-content: flex-start !important;
              text-align: left !important;
            }
            .pagination {
              padding-left: 30px !important;
            }
          }
          #bwp-toggle-dashboard {
            float: right;
            width: 34px;
            height: 70px;
            line-height: 70px;
            font-size: 13px;
            color: #393940;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
          }
          #bwp-toggle-dashboard:hover,
          #bwp-toggle-dashboard:focus {
            color: #6f6fff;
          }
          .bwp-dark-style #bwp-toggle-dashboard {
            color: #d6d6de;
          }
          .bwp-dark-style #bwp-toggle-dashboard:hover,
          .bwp-dark-style #bwp-toggle-dashboard:focus {
            color: #8585ff;
          }
        `}</style>
      </head>
      <body
        className={`${bodyClassName} ${poppins.variable} ${lora.variable} ${notoSerif.variable} ${openSans.variable} ${sourceSansPro.variable} ${yesevaOne.variable}`}
        suppressHydrationWarning
      >
        {children}
        <Script src="/vendor/orin/js/jquery.min.js" strategy="afterInteractive" />
        <Script src="/vendor/orin/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script id="orin-restore-style-cookie" strategy="beforeInteractive">{`
          (function () {
            var match = document.cookie.match(/(?:^|; )orin_site_style=([^;]*)/);
            var siteStyle = match ? decodeURIComponent(match[1]) : "";
            if (siteStyle === "dark") {
              if (document.body) document.body.classList.add("bwp-dark-style");
            } else {
              if (document.body) document.body.classList.remove("bwp-dark-style");
            }
          })();
        `}</Script>
      </body>
    </html>
  );
}
