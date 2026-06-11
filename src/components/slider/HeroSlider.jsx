"use client";

import Link from "next/link";
import Image from "next/image";
import useHeroSlider from "./useHeroSlider";

export default function HeroSlider() {
  useHeroSlider();

  return (
    <>
    <section className="bwp-homepage-slider-section bwp-site-section">
      <div className="bwp-separator bwp-gradient">
        <span className="bwp-rhomb"></span>
      </div>
      <header className="bwp-section-header">
        <h2 className="bwp-section-title">
          {" Must-Read Articles "}
        </h2>
        <p>
          {" My Best Articles That I Recommend To Everyone "}
        </p>
        <div className="bwp-section-header-separator"></div>
      </header>
      <div className="bwp-homepage-slider-wrap bwp-popup-gallery">
        <div id="bwp-homepage-slider">
          <div className="bwp-homepage-slider-item bwp-homepage-slider-post-50">
            <div className="bwp-homepage-slider-item-bg">
              <Image 
                src="/images/sincerely-media-ez9IPcFL5r8-unsplash.jpg" 
                alt="How To Feel Joy And Happiness" 
                fill 
                priority 
                sizes="100vw" 
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div className="bwp-homepage-slider-item-overlay"></div>
            <a href="/images/sincerely-media-ez9IPcFL5r8-unsplash.jpg" className="bwp-popup-gallery-item bwp-homepage-slider-zoom-image" title="How To Feel Joy And Happiness">
              <i className="fas fa-expand"></i>
            </a>
            <div className="bwp-homepage-slider-item-content">
              <div className="bwp-homepage-slider-content-alignment">
                <div className="bwp-homepage-slider-content-center">
                  <div className="bwp-homepage-slider-content-container">
                    <div className="bwp-homepage-slider-content-text">
                      <ul className="bwp-homepage-slider-post-metadata list-unstyled">
                        <li className="bwp-author">
                          <Link href="/" rel="author">
                            <span className="vcard author">
                              <span className="fn">Alexey Trofimov</span>
                            </span>
                          </Link>
                        </li>
                        <li className="bwp-date">
                          <Link href="/">
                            <span className="date updated">August 4, 2021</span>
                          </Link>
                        </li>
                        <li className="bwp-categories">
                          <Link href="/" rel="category tag">Photography</Link>
                        </li>
                      </ul>
                      <h3 className="bwp-homepage-slider-post-title">
                        <Link href="/">How To Feel Joy And Happiness</Link>
                      </h3>
                      <Link href="/" className="bwp-homepage-slider-read-more">
                        Read More
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bwp-homepage-slider-item bwp-homepage-slider-post-62">
            <div className="bwp-homepage-slider-item-bg">
              <Image 
                src="/images/ina-carolino-jOoEo2GvZvg-unsplash.jpg" 
                alt="How Has Minimalism Affected Your Life?" 
                fill 
                sizes="100vw" 
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div className="bwp-homepage-slider-item-overlay"></div>
            <a
              href="/images/ina-carolino-jOoEo2GvZvg-unsplash.jpg"
              className="bwp-popup-gallery-item bwp-homepage-slider-zoom-image"
              title="How Has Minimalism Affected Your Life?"
            >
              <i className="fas fa-expand"></i>
            </a>
            <div className="bwp-homepage-slider-item-content">
              <div className="bwp-homepage-slider-item-content">
                <div className="bwp-homepage-slider-content-alignment">
                  <div className="bwp-homepage-slider-content-center">
                    <div className="bwp-homepage-slider-content-container">
                      <div className="bwp-homepage-slider-content-text">
                        <ul className="bwp-homepage-slider-post-metadata list-unstyled">
                          <li className="bwp-author">
                            <Link href="/" rel="author">
                              <span className="vcard author">
                                <span className="fn">Alexey Trofimov</span>
                              </span>
                            </Link>
                          </li>
                          <li className="bwp-date">
                            <Link href="/">
                              <span className="date updated">August 12, 2021</span>
                            </Link>
                          </li>
                          <li className="bwp-categories">
                            <Link href="/" rel="category tag">Minimalism</Link>
                          </li>
                        </ul>
                        <h3 className="bwp-homepage-slider-post-title">
                          <Link href="/">How Has Minimalism Affected Your Life?</Link>
                        </h3>
                        <Link href="/" className="bwp-homepage-slider-read-more">
                          Read More
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bwp-homepage-slider-item bwp-homepage-slider-post-64">
            <div className="bwp-homepage-slider-item-bg">
              <Image 
                src="/images/jocelyn-morales-h86-unsplash.jpg" 
                alt="Useful Things For Better Productivity" 
                fill 
                sizes="100vw" 
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div className="bwp-homepage-slider-item-overlay"></div>
            <a
              href="/images/jocelyn-morales-h86-unsplash.jpg"
              className="bwp-popup-gallery-item bwp-homepage-slider-zoom-image"
              title="Useful Things For Better Productivity"
            >
              <i className="fas fa-expand"></i>
            </a>
            <div className="bwp-homepage-slider-item-content">
              <div className="bwp-homepage-slider-content-alignment">
                <div className="bwp-homepage-slider-content-center">
                  <div className="bwp-homepage-slider-content-container">
                    <div className="bwp-homepage-slider-content-text">
                      <ul className="bwp-homepage-slider-post-metadata list-unstyled">
                        <li className="bwp-author">
                          <Link href="/" rel="author">
                            <span className="vcard author">
                              <span className="fn">Alexey Trofimov</span>
                            </span>
                          </Link>
                        </li>
                        <li className="bwp-date">
                          <Link href="/">
                            <span className="date updated">August 12, 2021</span>
                          </Link>
                        </li>
                        <li className="bwp-categories">
                          <Link href="/" rel="category tag">Minimalism</Link>
                        </li>
                      </ul>
                      <h3 className="bwp-homepage-slider-post-title">
                        <Link href="/">Useful Things For Better Productivity</Link>
                      </h3>
                      <Link href="/" className="bwp-homepage-slider-read-more">
                        Read More
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bwp-homepage-slider-item bwp-homepage-slider-post-56">
            <div className="bwp-homepage-slider-item-bg">
              <Image 
                src="/images/sarah-dorweiler-7tFlUFGa7Dk-unsplash-v2.jpg" 
                alt="The Simple Joy Of Housekeeping" 
                fill 
                sizes="100vw" 
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div className="bwp-homepage-slider-item-overlay"></div>
            <a
              href="/images/sarah-dorweiler-7tFlUFGa7Dk-unsplash-v2.jpg"
              className="bwp-popup-gallery-item bwp-homepage-slider-zoom-image"
              title="The Simple Joy Of Housekeeping"
            >
              <i className="fas fa-expand"></i>
            </a>
            <div className="bwp-homepage-slider-item-content">
              <div className="bwp-homepage-slider-content-alignment">
                <div className="bwp-homepage-slider-content-center">
                  <div className="bwp-homepage-slider-content-container">
                    <div className="bwp-homepage-slider-content-text">
                      <ul className="bwp-homepage-slider-post-metadata list-unstyled">
                        <li className="bwp-author">
                          <Link href="/" rel="author">
                            <span className="vcard author">
                              <span className="fn">Alexey Trofimov</span>
                            </span>
                          </Link>
                        </li>
                        <li className="bwp-date">
                          <Link href="/">
                            <span className="date updated">August 6, 2021</span>
                          </Link>
                        </li>
                        <li className="bwp-categories">
                          <Link href="/" rel="category tag">Workflow</Link>
                        </li>
                      </ul>
                      <h3 className="bwp-homepage-slider-post-title">
                        <Link href="/">The Simple Joy Of Housekeeping</Link>
                      </h3>
                      <Link href="/" className="bwp-homepage-slider-read-more">
                        Read More
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="bwp-homepage-slider-loading-icon">
          <i className="fas fa-palette fa-spin"></i>
        </div>
      </div>
    </section>
    </>
  );
}
