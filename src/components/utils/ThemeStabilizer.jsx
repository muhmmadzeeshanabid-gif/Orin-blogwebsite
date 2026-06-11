"use client";

import { useEffect } from "react";

const masonryOptions = {
  itemSelector: ".bwp-masonry-item",
  columnWidth: ".bwp-col-size",
  percentPosition: true,
  horizontalOrder: false,
};

export default function ThemeStabilizer() {
  useEffect(() => {
    const runMasonryLayout = () => {
      const { jQuery } = window;
      if (!jQuery) {
        return;
      }

      const $grid = jQuery("#bwp-masonry");
      if (!$grid.length || typeof $grid.masonry !== "function") {
        return;
      }

      try {
        if ($grid.data("masonry")) {
          $grid.masonry("layout");
          return;
        }

        if (typeof $grid.imagesLoaded === "function") {
          $grid.imagesLoaded(() => {
            $grid.masonry(masonryOptions);
            window.setTimeout(() => $grid.masonry("layout"), 250);
          });
          return;
        }

        $grid.masonry(masonryOptions);
      } catch {
      }
    };

    const scheduleRelayout = () => {
      window.requestAnimationFrame(runMasonryLayout);
      window.setTimeout(runMasonryLayout, 250);
      window.setTimeout(runMasonryLayout, 900);
      window.setTimeout(runMasonryLayout, 1600);
    };

    const imageNodes = Array.from(
      document.querySelectorAll("#bwp-masonry img, .bwp-post-slider img, .bwp-footer-widgets-section img")
    );

    const onImageLoad = () => scheduleRelayout();

    imageNodes.forEach((imageNode) => {
      imageNode.addEventListener("load", onImageLoad);
      imageNode.addEventListener("error", onImageLoad);
    });

    window.addEventListener("load", scheduleRelayout);
    window.addEventListener("resize", scheduleRelayout);

    scheduleRelayout();

    return () => {
      imageNodes.forEach((imageNode) => {
        imageNode.removeEventListener("load", onImageLoad);
        imageNode.removeEventListener("error", onImageLoad);
      });

      window.removeEventListener("load", scheduleRelayout);
      window.removeEventListener("resize", scheduleRelayout);
    };
  }, []);

  return null;
}
