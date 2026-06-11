export default function Header() {
  return (
    <>
    <header id="bwp-header">
      <div className="container">
        <div className="bwp-header-container clearfix">
          <div className="bwp-header-menu">
            <nav className="menu-demo-header-container">
              <ul id="menu-demo-header" className="sf-menu">
                <li id="menu-item-243" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-243">
                  <a href="#" aria-current="page">
                    {"Homepage"}
                  </a>
                </li>
                <li id="menu-item-244" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-244">
                  <a href="#">
                    {"Categories"}
                  </a>
                  <ul className="sub-menu">
                    <li id="menu-item-246" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-246">
                      <a href="#">
                        {"Archive By Day"}
                      </a>
                    </li>
                    <li id="menu-item-308" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-308">
                      <a href="#">
                        {"Category Page"}
                      </a>
                    </li>
                    <li id="menu-item-307" className="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-307">
                      <a href="#">
                        {"Tag Page"}
                      </a>
                    </li>
                    <li id="menu-item-309" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-309">
                      <a href="#">
                        {"Author Page"}
                      </a>
                    </li>
                    <li id="menu-item-257" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-257">
                      <a href="#">
                        {"Search Results"}
                      </a>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-251" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-251">
                  <a href="#">
                    {"Single Posts"}
                  </a>
                  <ul className="sub-menu">
                    <li id="menu-item-258" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-258">
                      <a href="#">
                        {"Image Post"}
                      </a>
                    </li>
                    <li id="menu-item-259" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-259">
                      <a href="#">
                        {"Gallery Post"}
                      </a>
                    </li>
                    <li id="menu-item-261" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-261">
                      <a href="#">
                        {"Video Post"}
                      </a>
                    </li>
                    <li id="menu-item-260" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-260">
                      <a href="#">
                        {"Audio Post"}
                      </a>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-268" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-268">
                  <a href="#about-us">
                    {"About Us"}
                  </a>
                </li>
                <li id="menu-item-271" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-271">
                  <a href="#contact-us">
                    {"Contact Us"}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="bwp-header-mobile-menu">
            <button type="button" id="bwp-toggle-mobile-menu" className="bwp-button">
              <i className="fas fa-bars"></i>
              <span className="bwp-button-text">
                {"Menu"}
              </span>
            </button>
            <div id="bwp-dropdown-mobile-menu" className="bwp-hidden">
              <nav className="menu-demo-header-container">
                <ul id="menu-demo-header-1" className="bwp-mobile-menu list-unstyled">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-243">
                    <a href="#" aria-current="page">
                      {"Homepage"}
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-244">
                    <a href="#">
                      {"Categories"}
                    </a>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-246">
                        <a href="#">
                          {"Archive By Day"}
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-308">
                        <a href="#">
                          {"Category Page"}
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-307">
                        <a href="#">
                          {"Tag Page"}
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-309">
                        <a href="#">
                          {"Author Page"}
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-257">
                        <a href="#">
                          {"Search Results"}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-251">
                    <a href="#">
                      {"Single Posts"}
                    </a>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-258">
                        <a href="#">
                          {"Image Post"}
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-259">
                        <a href="#">
                          {"Gallery Post"}
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-261">
                        <a href="#">
                          {"Video Post"}
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-260">
                        <a href="#">
                          {"Audio Post"}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-268">
                    <a href="#about-us">
                      {"About Us"}
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-271">
                    <a href="#contact-us">
                      {"Contact Us"}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="bwp-header-icons clearfix">
            <div className="bwp-header-search">
              <button type="button" id="bwp-toggle-dropdown-search" className="bwp-button">
                <i className="fas fa-search"></i>
              </button>
              <div id="bwp-dropdown-search" className="bwp-hidden">
                <form id="searchform" role="search" method="get" href="#">
                  <div className="input-group">
                    <input type="text" name="s" id="s" className="bwp-search-field form-control" autoComplete="off" placeholder="Enter your search query..." />
                    <span className="input-group-btn">
                      <button type="submit" className="btn bwp-search-submit">
                        <i className="fas fa-search"></i>
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
            <button type="button" id="bwp-toggle-color" className="bwp-button">
              <i className="fas fa-sun"></i>
            </button>
            <a href="/dashboard" id="bwp-toggle-dashboard" className="bwp-button" title="Dashboard">
              <i className="fas fa-tachometer-alt"></i>
            </a>
            <div className="bwp-font-types">
              <button type="button" id="bwp-show-font-types" className="bwp-button">
                <i className="fas fa-font"></i>
              </button>
              <div id="bwp-dropdown-font-types" className="bwp-hidden">
                <div className="bwp-font-type bwp-active" data-font-type="sans-serif">
                  {" Sans-serif fonts "}
                </div>
                <div className="bwp-font-type" data-font-type="serif">
                  {" Serif fonts "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}
