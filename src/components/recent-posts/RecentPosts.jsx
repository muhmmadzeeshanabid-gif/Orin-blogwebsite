"use client";

import Link from "next/link";
import Image from "next/image";
import useRecentPostsUi from "./useRecentPostsUi";

const POSTS = [
  {
    id: 76,
    format: "image",
    isSticky: true,
    className: "bwp-width-2x",
    category: "Minimalism",
    title: "How Minimalism Helps Me Stay Calm",
    excerpt: "In ac felis quis tortor malesuada pretium. Pellentesque auctor neque nec urna. Aenean viverra rhoncus pede. Pellentesque habitant morbi tristique senectus et netus et […]",
    views: "4795",
    comments: "3",
    image: "/images/bench-accounting-h51-unsplash.jpg",
    imgWidth: 1920,
    imgHeight: 1280,
  },
  {
    id: 74,
    format: "gallery",
    category: "Lifestyle",
    title: "What Will Help You Be Happy?",
    excerpt: "Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Donec interdum, metus et hendrerit aliquet, dolor diam […]",
    views: "1786",
    comments: "2",
    images: [
      {
        src: "/images/jan-pictures-cIDdZYoSeJ4-unsplash.jpg",
        alt: "Woman in white sleeveless top with white flower.",
        title: "Woman in white sleeveless top with white flower. * Caption example."
      },
      {
        src: "/images/aiony-haust-760593-unsplash.jpg",
        alt: "Happy woman is sitting on the stairs, raising her right hand.",
        title: "Happy woman is sitting on the stairs, raising her right hand. * Caption example."
      },
      {
        src: "/images/florencia-potter-QCRdeq27OEU-unsplash.jpg",
        alt: "Woman looking down.",
        title: "Woman looking down. * Caption example."
      }
    ]
  },
  {
    id: 72,
    format: "image",
    category: "Workflow",
    title: "Simple Ways To Stay Focused",
    excerpt: "Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor […]",
    views: "756",
    comments: "0",
    image: "/images/evie-s-v220-unsplash.jpg",
    imgWidth: 1920,
    imgHeight: 2324,
  },
  {
    id: 70,
    format: "image",
    category: "Lifestyle",
    title: "Does This Thing Bring Me Balance?",
    excerpt: "Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante […]",
    views: "1402",
    comments: "0",
    image: "/images/diana-schroder-bode-7UeIi0gLezM-unsplash.jpg",
    imgWidth: 1920,
    imgHeight: 1280,
  },
  {
    id: 68,
    format: "video",
    category: "Photography",
    title: "The Best National Parks On Our Planet",
    excerpt: "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, […]",
    views: "3366",
    comments: "2",
    image: "/images/clayton-chapman-1094203-unsplash.jpg",
    imgWidth: 1920,
    imgHeight: 1280,
  },
  {
    id: 66,
    format: "image",
    category: "Lifestyle",
    title: "What To Do If There Is No Inspiration",
    excerpt: "Quisque id odio. Praesent venenatis metus at tortor pulvinar varius. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean […]",
    views: "5352",
    comments: "4",
    image: "/images/sincerely-media-h140-unsplash.jpg",
    imgWidth: 1920,
    imgHeight: 1280,
  },
  {
    id: 64,
    format: "image",
    category: "Minimalism",
    title: "Useful Things For Better Productivity",
    excerpt: "Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Fusce neque. Suspendisse faucibus, nunc et pellentesque […]",
    views: "1470",
    comments: "0",
    image: "/images/jocelyn-morales-h86-unsplash.jpg",
    imgWidth: 1920,
    imgHeight: 1280,
  },
  {
    id: 62,
    format: "image",
    category: "Minimalism",
    title: "How Has Minimalism Affected Your Life?",
    excerpt: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Pellentesque dapibus hendrerit tortor. Praesent egestas tristique nibh. Sed a libero. […]",
    views: "1039",
    comments: "0",
    image: "/images/ina-carolino-jOoEo2GvZvg-unsplash.jpg",
    imgWidth: 1920,
    imgHeight: 1280,
  }
];

function RecentPostArticle({ post, extraClassName = "" }) {
  return (
    <article
      id={`bwp-post-${post.id}`}
      className={`post-${post.id} post type-post status-publish format-${post.format} has-post-thumbnail ${post.isSticky ? "sticky" : ""} hentry category-${post.category.toLowerCase()} bwp-masonry-item bwp-col-3 bwp-post-has-title ${post.className || ""} ${extraClassName}`.trim()}
    >
      <div className="bwp-post-wrap">
        {post.format === "image" && (
          <figure className="bwp-post-media">
            <a href={post.image} className="bwp-popup-image" title={`${post.title} * Caption example.`}>
              <Image width={post.imgWidth} height={post.imgHeight} src={post.image} className="attachment-full size-full wp-post-image" alt={post.title} priority={post.isSticky} />
              <div className="bwp-post-media-overlay"></div>
              <span className="bwp-post-hover-icon bwp-expand-image">
                <i className="fas fa-images"></i>
              </span>
            </a>
          </figure>
        )}
        {post.format === "video" && (
          <figure className="bwp-post-media">
            <a href={post.image} className="bwp-popup-image" title={`${post.title} * Caption example.`}>
              <Image width={post.imgWidth} height={post.imgHeight} src={post.image} className="attachment-full size-full wp-post-image" alt={post.title} priority={post.isSticky} />
              <div className="bwp-post-media-overlay"></div>
              <span className="bwp-post-hover-icon bwp-expand-image">
                <i className="fas fa-images"></i>
              </span>
              <span className="bwp-post-format-icon">
                <i className="fas fa-video"></i>
              </span>
            </a>
          </figure>
        )}
        {post.format === "gallery" && (
          <div className="bwp-post-media-slider bwp-popup-gallery">
            <div id={`bwp-post-slider-${post.id}`} className="bwp-post-slider">
              {post.images.map((img, idx) => (
                <figure key={idx} className="bwp-post-slider-item">
                  <a href={img.src} className="bwp-popup-gallery-item" title={img.title}>
                    <Image width={900} height={600} src={img.src} alt={img.alt} priority />
                    <div className="bwp-post-media-overlay"></div>
                    <span className="bwp-post-hover-icon bwp-expand-image">
                      <i className="fas fa-images"></i>
                    </span>
                  </a>
                </figure>
              ))}
            </div>
          </div>
        )}
        <div className="bwp-post-content">
          {post.isSticky && (
            <div className="bwp-post-sticky-mark">
              <i className="fas fa-thumbtack"></i>
            </div>
          )}
          <ul className="bwp-post-metadata list-unstyled">
            <li className="bwp-author bwp-hidden">
              <Link href="/" rel="author">
                <span className="vcard author">
                  <span className="fn">
                    {"Alexey Trofimov"}
                  </span>
                </span>
              </Link>
            </li>
            <li className="bwp-date bwp-hidden">
              <Link href="/">
                <span className="date updated">
                  {"August 22, 2021"}
                </span>
              </Link>
            </li>
            <li className="bwp-categories bwp-visible">
              <Link href="/" rel="category tag">
                {post.category}
              </Link>
            </li>
          </ul>
          <h3 className="bwp-post-title entry-title">
            <Link href="/">
              {post.title}
            </Link>
          </h3>
          <div className="bwp-post-excerpt entry-content">
            <p>{post.excerpt}</p>
          </div>
          <div className="clearfix">
            <div className="bwp-post-read-more">
              <Link href="/">
                {"Read More"}
              </Link>
            </div>
            <div className="bwp-post-counters">
              <Link href="/" className="bwp-views-counter">
                <span className="bwp-counter-number">
                  {post.views}
                </span>
              </Link>
              <Link href="/" className="bwp-comments-counter">
                <span className="bwp-counter-number">
                  {post.comments}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function RecentPosts() {
  useRecentPostsUi();
  const featuredPost = POSTS.find((post) => post.isSticky) ?? POSTS[0];

  return (
    <>
    <section className="bwp-recent-posts-section bwp-site-section bwp-section-has-header">
      <div className="bwp-separator bwp-gradient">
        <span className="bwp-rhomb"></span>
      </div>
      <header className="bwp-section-header">
        <h2 className="bwp-section-title">
          {" Recent Articles "}
          <span className="bwp-page-number">
            {" Page №1 "}
          </span>
        </h2>
        <p>
          {" All My Posts With Interesting Stories "}
        </p>
        <div className="bwp-section-header-separator"></div>
      </header>
      <div className="bwp-posts" role="main">
        <div className="bwp-posts-wrap">
          <RecentPostArticle post={featuredPost} extraClassName="bwp-recent-post-featured-mobile" />
          <div id="bwp-masonry" className="bwp-col-3-layout clearfix">
            <div className="bwp-col-size"></div>
            {POSTS.map((post) => (
              <RecentPostArticle
                key={post.id}
                post={post}
                extraClassName={post.id === featuredPost.id ? "bwp-recent-post-featured-desktop" : ""}
              />
            ))}
          </div>
        </div>
      </div>
      <nav className="navigation pagination" aria-label="Posts pagination">
        <h2 className="screen-reader-text">
          {"Posts pagination"}
        </h2>
        <div className="nav-links">
          <span aria-current="page" className="page-numbers current">
            {"1"}
          </span>
          <Link className="page-numbers" href="/">
            {"2"}
          </Link>
          <Link className="next page-numbers" href="/">
            <i className="fas fa-chevron-right"></i>
          </Link>
        </div>
      </nav>
    </section>
    </>
  );
}
