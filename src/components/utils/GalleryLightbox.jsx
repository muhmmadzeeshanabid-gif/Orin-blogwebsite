"use client";

import { useEffect } from "react";

function getScrollbarWidth($, $body) {
  const block1 = $("<div>").css({ width: "50px", height: "50px" });
  const block2 = $("<div>").css({ height: "200px" });

  $body.append(block1.append(block2));
  const width1 = $("div", block1).innerWidth();
  block1.css("overflow-y", "scroll");
  const width2 = $("div", block1).innerWidth();
  block1.remove();

  return width1 - width2;
}

export default function GalleryLightbox() {
  useEffect(() => {
    let pollId;
    let initialized = false;

    const initPopupMedia = () => {
      const $ = window.jQuery;
      if (!$ || !$.fn?.magnificPopup || initialized) {
        return false;
      }

      const $body = $("body");
      const $stickyHeaderContainer = $("#bwp-header .bwp-header-container");
      const $scrollTopButton = $("#bwp-scroll-top .bwp-scroll-top-button");
      const scrollbarWidth = getScrollbarWidth($, $body);
      const scrollbarHalfWidth = scrollbarWidth / 2;

      const beforeOpenPopup = function beforeOpenPopup() {
        this.container.data("scrollTop", parseInt($(window).scrollTop(), 10));
        $stickyHeaderContainer.css({
          "margin-left": `-${scrollbarHalfWidth}px`,
          "padding-right": scrollbarHalfWidth,
        });
        $scrollTopButton.css("margin-right", scrollbarWidth);
      };

      const afterClosePopup = function afterClosePopup() {
        $("html, body").scrollTop(this.container.data("scrollTop"));
        $stickyHeaderContainer.css({
          "margin-left": 0,
          "padding-right": 0,
        });
        $scrollTopButton.css("margin-right", 0);
      };

      $(".bwp-sidebar-hidden a.bwp-popup-image")
        .off(".magnificPopup")
        .magnificPopup({
          type: "image",
          closeOnContentClick: true,
          closeMarkup:
            '<button title="%title%" type="button" class="mfp-close bwp-mfp-close-button"></button>',
          fixedContentPos: true,
          fixedBgPos: true,
          overflowY: "auto",
          removalDelay: 300,
          mainClass: "bwp-popup-zoom-in",
          callbacks: {
            beforeOpen: beforeOpenPopup,
            afterClose: afterClosePopup,
          },
        });

      $(".bwp-sidebar-hidden .bwp-popup-gallery").each(function initEachGallery() {
        $(this)
          .off(".magnificPopup")
          .magnificPopup({
            delegate: "a.bwp-popup-gallery-item",
            type: "image",
            gallery: {
              enabled: true,
              navigateByImgClick: true,
              arrowMarkup:
                '<button title="%title%" type="button" class="bwp-mfp-arrow bwp-mfp-arrow-%dir%"></button>',
              tPrev: "Previous",
              tNext: "Next",
              tCounter: "%curr% of %total%",
              loop: false,
            },
            closeMarkup:
              '<button title="%title%" type="button" class="mfp-close bwp-mfp-close-button"></button>',
            fixedContentPos: true,
            fixedBgPos: true,
            overflowY: "auto",
            removalDelay: 300,
            mainClass: "bwp-popup-zoom-in",
            callbacks: {
              beforeOpen: beforeOpenPopup,
              afterClose: afterClosePopup,
            },
          });
      });

      initialized = true;
      return true;
    };

    if (!initPopupMedia()) {
      pollId = window.setInterval(() => {
        if (initPopupMedia()) {
          window.clearInterval(pollId);
        }
      }, 150);
    }

    return () => {
      window.clearInterval(pollId);

      const $ = window.jQuery;
      if (!$ || !$.fn?.magnificPopup) {
        return;
      }

      $(".bwp-sidebar-hidden a.bwp-popup-image").off(".magnificPopup");
      $(".bwp-sidebar-hidden .bwp-popup-gallery").each(function cleanupEachGallery() {
        $(this).off(".magnificPopup");
      });

      if ($.magnificPopup.instance?.isOpen) {
        $.magnificPopup.close();
      }
    };
  }, []);

  return null;
}
