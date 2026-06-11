import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Orin - Minimal Blog For WordPress - Just another WordPress site",
  description: "Local-only Orin-inspired blog rendered from our own codebase.",
};

export default function RootLayout({ children }) {
  const bodyClassName = "home blog wp-embed-responsive wp-theme-orin bwp-body bwp-sidebar-hidden bwp-enable-sticky-header";

  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400;1,700&family=Noto+Serif:ital,wght@0,400;0,700;1,400&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,300;0,500;0,600;0,700;1,600;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,600;1,400&family=Yeseva+One&display=swap"
        />
        <link rel="stylesheet" href="/vendor/orin/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/vendor/orin/css/bootstrap-theme.min.css" />
        <link rel="stylesheet" href="/vendor/orin/css/ie10-viewport-bug-workaround.css" />
        <link rel="stylesheet" href="/vendor/orin/css/tiny-slider.css" />
        <link rel="stylesheet" href="/vendor/orin/css/magnific-popup.css" />
        <link rel="stylesheet" href="/vendor/orin/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/vendor/orin/fontawesome/css/v5-font-face.min.css" />
        <style>{`
          .bwp-post-wrap:hover .bwp-post-content::before { width: 30px; }
          .bwp-footer-widgets-col-3 .wpcf7 .bwp-demo-contact-msg { height: 93px; }
          .bwp-font-types,
          #bwp-show-font-types,
          #bwp-dropdown-font-types { display: none !important; }
          .mfp-title,
          .mfp-counter { text-shadow: none !important; }
          .mfp-bottom-bar {
            background: rgba(10, 10, 13, 0.92);
            padding: 8px 14px;
          }
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
      <body className={bodyClassName} suppressHydrationWarning>
        {children}
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
        <Script src="/vendor/orin/js/jquery.min.js" strategy="afterInteractive" />
        <Script src="/vendor/orin/js/jquery-migrate.min.js" strategy="afterInteractive" />
        <Script src="/vendor/orin/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/vendor/orin/js/superfish.min.js" strategy="afterInteractive" />
        <Script src="/vendor/orin/js/imagesloaded.min.js" strategy="afterInteractive" />
        <Script src="/vendor/orin/js/masonry.min.js" strategy="afterInteractive" />
        <Script src="/vendor/orin/js/jquery.masonry.min.js" strategy="afterInteractive" />
        <Script src="/vendor/orin/js/tiny-slider.js" strategy="afterInteractive" />
        <Script src="/vendor/orin/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/vendor/orin/js/ie10-viewport-bug-workaround.js" strategy="afterInteractive" />
        <Script id="orin-theme-data" strategy="afterInteractive">{`
          window.orinData = {
            isSingular: "false",
            fontSwitch: "off",
            colorSwitch: "on",
            dropdownSearch: "on",
            hiddenSidebar: "on",
            logoType: "text",
            homepageSliderRewind: "off",
            homepageSliderTransition: "slide_vertical",
            homepageSliderAnimationSpeed: "550",
            homepageSliderControls: "on",
            homepageSliderNav: "on",
            gallerySliderRewind: "off",
            gallerySliderTransition: "slide_vertical",
            gallerySliderAnimationSpeed: "550",
            postsHorizontalOrder: "off",
            fontSwitchCookies: "off",
            colorSwitchCookies: "on",
            backToTop: "on"
          };
        `}</Script>
        <Script src="/vendor/orin/js/orin-theme.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
