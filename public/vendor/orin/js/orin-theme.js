/**
 * Theme name: Orin
 * orin-theme.js v1.0.4
 */

/**
 * Table of Contents:
 *
 * 1 - Superfish menu (jQuery menu plugin by Joel Birch)
 * 2 - Dropdown search form
 * 3 - Dropdown menu for mobile devices
 * 4 - Sidebar (hidden right sidebar)
 * 5 - Color switch (switching between two color schemes: light scheme and dark scheme)
 * 6 - Font types (switching between two types of fonts: sans-serif or serif fonts)
 * 7 - Homepage slider
 * 8 - Masonry layout
 * 9 - Gallery format: Slider
 * 10 - Popup windows (magnificPopup)
 * 11 - "Back to top" button
 * 12 - Cookie: set cookie, get cookie, and delete cookie
 * 13 - Other functions
 */

( function( $ ) {
	'use strict';
	$( document ).ready( function() {

		var $html = $( 'html' ),
			$body = $( 'body' ),
			$stickyHeaderContainer = $( '#bwp-header .bwp-header-container' ),
			$scrollTopButton = $( '#bwp-scroll-top .bwp-scroll-top-button' ),
			hiddenCssClass = 'bwp-hidden',
			visibleCssClass = 'bwp-visible',
			activeCssClass = 'bwp-active',
			cookieSiteStyle = 'orin_site_style', // cookie name; this cookie is used to store the site style value: light style or dark style
			cookieFontType = 'orin_font_type', // cookie name; this cookie is used to store the type of fonts: sans-serif fonts or serif fonts
			currentOpenContainer = ''; // variable to store the name of the currently open dropdown container (mobile menu, font types or search)

		// theme data: string -> boolean
		orinData.isSingular = 'true' === orinData.isSingular;
		orinData.postsHorizontalOrder = 'on' === orinData.postsHorizontalOrder;


		/**
		 * 1 - Superfish menu (jQuery menu plugin by Joel Birch)
		 * ----------------------------------------------------
		 */
		$( 'ul.sf-menu' ).superfish( {
			delay: 400,
			animation: {
				opacity: 'show',
				marginTop: '0',
			},
			animationOut: {
				opacity: 'hide',
				marginTop: '10',
			},
			speed: 300,
			speedOut: 150,
		} );


		/**
		 * 2 - Dropdown search form
		 * ----------------------------------------------------
		 */

		// variables
		var $searchButton = $( '#bwp-toggle-dropdown-search' ),
			$searchButtonIcon = $( '#bwp-toggle-dropdown-search i' ),
			$searchContainer = $( '#bwp-dropdown-search' ),
			$searchField = $( '#bwp-dropdown-search .bwp-search-field' );

		// function: show dropdown search form
		function showDropdownSearchForm() {

			// change button style and show search
			$searchButton.addClass( activeCssClass );
			$searchButtonIcon.hide().attr( 'class', 'fas fa-times' ).fadeIn( 300 );
			$searchContainer.removeClass( hiddenCssClass ).addClass( visibleCssClass );

			// search field: add focus after animation is complete (300 milliseconds)
			if ( $( window ).width() > 991 ) {
				setTimeout( function() {
					$searchField.trigger( 'focus' );
				}, 300 );
			}

			// current open container is search
			currentOpenContainer = 'search';

		}

		// function: hide dropdown search form
		function hideDropdownSearchForm() {

			// change button style and hide search
			$searchButton.removeClass( activeCssClass );
			$searchButtonIcon.hide().attr( 'class', 'fas fa-search' ).fadeIn( 300 );
			$searchContainer.removeClass( visibleCssClass ).addClass( hiddenCssClass );

			// clear the "currentOpenContainer" variable
			currentOpenContainer = '';

		}

		// function: show/hide dropdown search form
		function showHideDropdownSearchForm() {

			// search button: click
			$searchButton.on( 'click', function() {

				// if the container with the search form is hidden
				if ( $searchContainer.hasClass( hiddenCssClass ) ) {

					// hide other dropdown containers
					hideOtherDropdownContainers();

					// show search
					showDropdownSearchForm();

				} else {

					// hide search
					hideDropdownSearchForm();

				}

			} );

		}

		// show/hide dropdown search form
		if ( 'on' === orinData.dropdownSearch ) {
			showHideDropdownSearchForm();
		}


		/**
		 * 3 - Dropdown menu for mobile devices
		 * ----------------------------------------------------
		 */

		// variables
		var $mobileMenuButton = $( '#bwp-toggle-mobile-menu' ),
			$mobileMenuButtonIcon = $( '#bwp-toggle-mobile-menu i' ),
			$mobileMenuContainer = $( '#bwp-dropdown-mobile-menu' ),
			$mobileMenuLink = $( '#bwp-dropdown-mobile-menu a' );

		// function: show dropdown menu for mobile devices
		function showDropdownMobileMenu() {

			// change button style and show mobile menu
			$mobileMenuButton.addClass( activeCssClass );
			$mobileMenuButtonIcon.hide().attr( 'class', 'fas fa-times' ).fadeIn( 300 );
			$mobileMenuContainer.removeClass( hiddenCssClass ).addClass( visibleCssClass );

			// current open container is mobile menu
			currentOpenContainer = 'mobile-menu';

		}

		// function: hide dropdown menu for mobile devices
		function hideDropdownMobileMenu() {

			// change button style and hide mobile menu
			$mobileMenuButton.removeClass( activeCssClass );
			$mobileMenuButtonIcon.hide().attr( 'class', 'fas fa-bars' ).fadeIn( 300 );
			$mobileMenuContainer.removeClass( visibleCssClass ).addClass( hiddenCssClass );

			// clear the "currentOpenContainer" variable
			currentOpenContainer = '';

		}

		// function: show/hide dropdown menu for mobile devices
		function showHideDropdownMobileMenu() {

			// menu button: click
			$mobileMenuButton.on( 'click', function() {

				// if the container with the mobile menu is hidden
				if ( $mobileMenuContainer.hasClass( hiddenCssClass ) ) {

					// hide other dropdown containers
					hideOtherDropdownContainers();

					// show mobile menu
					showDropdownMobileMenu();

				} else {

					// hide mobile menu
					hideDropdownMobileMenu();

				}

			} );

		}

		// show/hide dropdown menu for mobile devices
		showHideDropdownMobileMenu();

		// function: show/hide dropdown submenus in the mobile menu
		function showHideMobileSubmenus() {

			// add an arrow icon to every link that has a submenu
			$mobileMenuLink.each( function( i, elem ) {
				if ( $( elem ).next().is( 'ul' ) ) {
					$( elem ).append( '<span class="bwp-toggle-mobile-submenu"><i class="fas fa-angle-down"></i></span>' );
				}
			} );

			// variables
			var $toggleMobileSubmenu = $( '#bwp-dropdown-mobile-menu .bwp-toggle-mobile-submenu' ),
				submenuVisibleCssClass = 'bwp-submenu-visible';

			// show or hide submenu
			$toggleMobileSubmenu.on( 'click', function() {

				var $thisButton = $( this ),
					$currentMenuItem = $thisButton.closest( 'li' ),
					$currentSubmenu = $thisButton.parent().next();

				// show submenu
				if ( $currentSubmenu.is( 'ul' ) && ! $currentMenuItem.hasClass( submenuVisibleCssClass ) ) {
					$currentMenuItem.addClass( submenuVisibleCssClass );
					$currentSubmenu.slideDown( 300 );
					$thisButton.html( '<i class="fas fa-angle-up"></i>' );
					return false;
				}

				// hide submenu
				if ( $currentSubmenu.is( 'ul' ) && $currentMenuItem.hasClass( submenuVisibleCssClass ) ) {
					$currentMenuItem.removeClass( submenuVisibleCssClass );
					$currentSubmenu.slideUp( 300 );
					$thisButton.html( '<i class="fas fa-angle-down"></i>' );
					return false;
				}

				return false;

			} );

		}

		// show/hide dropdown submenus in the mobile menu
		showHideMobileSubmenus();


		/**
		 * 4 - Sidebar (hidden right sidebar)
		 * ----------------------------------------------------
		 */
		function showHideSidebar() {

			var viewportHasVerticalScrollbar = function() {
				return $html[0].scrollHeight > $html[0].clientHeight; // true or false
			};

			var $showSidebar = $( '#bwp-show-sidebar' ),
				$hideSidebar = $( '.bwp-hide-sidebar' ),
				sidebarHiddenCssClass = 'bwp-sidebar-hidden',
				sidebarVisibleCssClass = 'bwp-sidebar-visible',
				scrollbarWidth = getScrollbarWidth(),
				scrollbarHalfWidth = scrollbarWidth / 2;

			// show sidebar
			$showSidebar.on( 'click', function() {
				if ( $body.hasClass( sidebarHiddenCssClass ) ) {
					$body.removeClass( sidebarHiddenCssClass ).addClass( sidebarVisibleCssClass );
					if ( viewportHasVerticalScrollbar() ) {
						$body.css( {
							'overflow-y': 'hidden', // remove scrollbar
							'margin-right': scrollbarWidth,
						} );
						$stickyHeaderContainer.css( {
							'margin-left': '-' + scrollbarHalfWidth + 'px',
							'padding-right': scrollbarHalfWidth,
						} );
						$scrollTopButton.css( 'margin-right', scrollbarWidth );
					}
				}
			} );

			// function: hide sidebar
			var hideVisibleSidebar = function() {
				$body.removeClass( sidebarVisibleCssClass ).addClass( sidebarHiddenCssClass );
				if ( viewportHasVerticalScrollbar() ) {
					// remove additional styles after animation is complete (300 milliseconds)
					setTimeout( function() {
						$body.css( {
							'overflow-y': 'auto', // show scrollbar
							'margin-right': 0,
						} );
						$stickyHeaderContainer.css( {
							'margin-left': 0,
							'padding-right': 0,
						} );
						$scrollTopButton.css( 'margin-right', 0 );
					}, 300 );
				}
			};

			// hide sidebar (clicking the Close button)
			$hideSidebar.on( 'click', function() {
				if ( $body.hasClass( sidebarVisibleCssClass ) ) {
					hideVisibleSidebar();
				}
			} );

			// hide sidebar (pressing the Escape key)
			$( document ).on( 'keyup', function( e ) {
				if ( 'Escape' === e.key ) {
					if ( $body.hasClass( sidebarVisibleCssClass ) ) {
						hideVisibleSidebar();
					}
				}
			} );

		}

		if ( 'on' === orinData.hiddenSidebar ) {
			showHideSidebar();
		}


		/**
		 * 5 - Color switch (switching between two color schemes: light scheme and dark scheme)
		 * ----------------------------------------------------
		 */
		function changeThemeColor() {

			var $colorSwitch = $( '#bwp-toggle-color' ),
				$colorSwitchIcon = $( '#bwp-toggle-color i' ),
				darkStyleCssClass = 'bwp-dark-style';

			if ( 'image' === orinData.logoType ) {
				var	$customLogo = $( '#bwp-custom-logo' ),
					$customLogoLink = $( '#bwp-custom-logo .custom-logo-link' ),
					logoUrl = $customLogo.data( 'logoUrl' ), // logo for light style
					darkLogoUrl = $customLogo.data( 'darkLogoUrl' ), // logo for dark style
					logoAlt = $customLogo.data( 'logoAlt' ); // alt attribute
			}

			$colorSwitch.on( 'click', function() {

				// switching between light and dark styles
				if ( ! $body.hasClass( darkStyleCssClass ) ) {
					// switch to dark style:

					// change icon (moon -> sun)
					$colorSwitchIcon.hide().attr( 'class', 'fas fa-sun' ).fadeIn( 300 );

					// add a class for the dark version to the body element
					$body.addClass( darkStyleCssClass );

					// change logo (image for light version -> image for dark version)
					if ( 'image' === orinData.logoType && 'none' !== darkLogoUrl ) {
						$customLogoLink.html( '<img src="' + darkLogoUrl + '" class="custom-logo" alt="' + logoAlt + '">' );
					}

					// set cookie
					if ( 'on' === orinData.colorSwitchCookies ) {
						setCookie( cookieSiteStyle, 'dark' ); // dark color scheme
					}

				} else {
					// switch to light style:

					// change icon (sun -> moon)
					$colorSwitchIcon.hide().attr( 'class', 'fas fa-moon' ).fadeIn( 300 );

					// remove the dark version CSS class
					$body.removeClass( darkStyleCssClass );

					// change logo (image for dark version -> image for light version)
					if ( 'image' === orinData.logoType && 'none' !== darkLogoUrl ) {
						$customLogoLink.html( '<img src="' + logoUrl + '" class="custom-logo" alt="' + logoAlt + '">' );
					}

					// set cookie
					if ( 'on' === orinData.colorSwitchCookies ) {
						setCookie( cookieSiteStyle, 'light' ); // light color scheme
					}

				}

			} );

		}

		// if the color switch is on
		if ( 'on' === orinData.colorSwitch ) {
			changeThemeColor();
		} else {
			// delete cookie
			if ( getCookie( cookieSiteStyle ) ) {
				deleteCookie( cookieSiteStyle );
			}
		}

		// delete cookies with the current theme style if cookies are disabled
		if ( 'off' === orinData.colorSwitchCookies ) {
			if ( getCookie( cookieSiteStyle ) ) {
				deleteCookie( cookieSiteStyle );
			}
		}


		/**
		 * 6 - Font types (switching between two types of fonts: sans-serif or serif fonts)
		 * ----------------------------------------------------
		 */

		// variables
		var $fontButton = $( '#bwp-show-font-types' ),
			$fontButtonIcon = $( '#bwp-show-font-types i' ),
			$fontContainer = $( '#bwp-dropdown-font-types' );

		// function: show dropdown container with font types
		function showDropdownFontTypes() {

			// change button style and show font types
			$fontButton.addClass( activeCssClass );
			$fontButtonIcon.hide().attr( 'class', 'fas fa-times' ).fadeIn( 300 );
			$fontContainer.removeClass( hiddenCssClass ).addClass( visibleCssClass );

			// current open container is font-types
			currentOpenContainer = 'font-types';

		}

		// function: hide dropdown container with font types
		function hideDropdownFontTypes() {

			// change button style and hide font types
			$fontButton.removeClass( activeCssClass );
			$fontButtonIcon.hide().attr( 'class', 'fas fa-font' ).fadeIn( 300 );
			$fontContainer.removeClass( visibleCssClass ).addClass( hiddenCssClass );

			// clear the "currentOpenContainer" variable
			currentOpenContainer = '';

		}

		// function: show/hide dropdown container with font types
		function showHideDropdownFontTypes() {

			// font button: click
			$fontButton.on( 'click', function() {

				// if the container with font types is hidden
				if ( $fontContainer.hasClass( hiddenCssClass ) ) {

					// hide other dropdown containers
					hideOtherDropdownContainers();

					// show available font types
					showDropdownFontTypes();

				} else {

					// hide font types
					hideDropdownFontTypes();

				}

			} );

		}

		// show/hide dropdown container with font types
		showHideDropdownFontTypes();

		// function: change font type
		function changeFontType() {

			var $fontType = $( '#bwp-dropdown-font-types .bwp-font-type' ),
				$thisFontType,
				fontTypeValue,
				serifFontsCssClass = 'bwp-serif-fonts';

			// function: update masonry layout
			var $masonryGrid = $( '#bwp-masonry' );
			var updateMasonryLayout = function() {
				if ( ! orinData.isSingular ) {
					setTimeout( function() {
						$masonryGrid.masonry();
					}, 800 );
				}
			};

			// font type: click
			$fontType.on( 'click', function() {

				// we change the font type only if the selected type is different from the current one
				$thisFontType = $( this );
				if ( ! $thisFontType.hasClass( activeCssClass ) ) {

					// change the style for the selected font type
					$fontType.removeClass( activeCssClass );
					$thisFontType.addClass( activeCssClass );

					// get font type value (serif or sans-serif)
					fontTypeValue = $thisFontType.data( 'fontType' );

					// switch to a new font type
					if ( 'serif' === fontTypeValue ) {
						// switch to serif fonts:

						// add a class for serif fonts to the body element
						if ( ! $body.hasClass( serifFontsCssClass ) ) {
							$body.addClass( serifFontsCssClass );
						}

						// set cookie
						if ( 'on' === orinData.fontSwitchCookies ) {
							setCookie( cookieFontType, 'serif' );
						}

						// update masonry layout
						updateMasonryLayout();

					} else if ( 'sans-serif' === fontTypeValue ) {
						// switch to sans-serif fonts:

						// sans-serif fonts are used by default, so we just need to remove the serif font class from the body element
						if ( $body.hasClass( serifFontsCssClass ) ) {
							$body.removeClass( serifFontsCssClass );
						}

						// set cookie
						if ( 'on' === orinData.fontSwitchCookies ) {
							setCookie( cookieFontType, 'sans-serif' );
						}

						// update masonry layout
						updateMasonryLayout();

					}

				}

			} );

		}

		// if switching between font types is enabled
		if ( 'on' === orinData.fontSwitch ) {
			changeFontType();
		} else {
			// delete cookie
			if ( getCookie( cookieFontType ) ) {
				deleteCookie( cookieFontType );
			}
		}

		// delete cookies with the current font type if cookies are disabled
		if ( 'off' === orinData.fontSwitchCookies ) {
			if ( getCookie( cookieFontType ) ) {
				deleteCookie( cookieFontType );
			}
		}


		/**
		 * 7 - Homepage slider
		 * ----------------------------------------------------
		 */
		function initHomepageSlider() {

			// if there is no slider on the current page, stop the function
			var $homepageSlider = $( '#bwp-homepage-slider' );
			if ( 0 === $homepageSlider.length ) {
				return;
			}

			// the slider is on the current page, so we continue to execute the function...

			// slider elements
			var $homepageSliderBg = $( '#bwp-homepage-slider .bwp-homepage-slider-item-bg' ), // slide background (image or solid color)
				$homepageSliderOverlay = $( '#bwp-homepage-slider .bwp-homepage-slider-item-overlay' ), // dark overlay
				$homepageSliderZoomButton = $( '#bwp-homepage-slider .bwp-homepage-slider-zoom-image' ), // zoom button
				$homepageSliderText = $( '#bwp-homepage-slider .bwp-homepage-slider-content-text' ), // text (metadata, title, read more)
				$homepageSliderLoadingIcon = $( '#bwp-homepage-slider-loading-icon' ); // loading icon

			// function: show slider content
			var showHomepageSliderContent = function() {
				// show content after image upload
				$homepageSliderBg.imagesLoaded( { background: true }, function() {
					// hide loading icon
					$homepageSliderLoadingIcon.addClass( hiddenCssClass );
					// show content
					setTimeout( function() {
						$homepageSliderLoadingIcon.css( 'display', 'none' );
						$homepageSliderBg.css( 'opacity', 1 );
						$homepageSliderOverlay.addClass( visibleCssClass );
						$homepageSliderZoomButton.addClass( visibleCssClass );
						$homepageSliderText.addClass( visibleCssClass );
					}, 150 );
				} );
			};

			// slider options:
			// 1: rewind
			var rewindValue = 'on' === orinData.homepageSliderRewind;
			// 2: transition type for slides
			var modeValue = 'gallery',
				axisValue = 'horizontal';
			if ( 'slide_horizontal' === orinData.homepageSliderTransition ) {
				modeValue = 'carousel';
			} else if ( 'slide_vertical' === orinData.homepageSliderTransition ) {
				modeValue = 'carousel';
				axisValue = 'vertical';
			}
			// 3: speed of the slide animation
			var speedValue = Number( orinData.homepageSliderAnimationSpeed );
			// 4: controls (navigation buttons)
			var controlsValue = 'on' === orinData.homepageSliderControls;
			// 5: nav (dots)
			var navValue = 'on' === orinData.homepageSliderNav;

			// initialize slider (tiny slider)
			tns( {
				container: '#bwp-homepage-slider',
				mode: modeValue,
				axis: axisValue,
				items: 1,
				controls: controlsValue,
				controlsPosition: 'bottom',
				controlsText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ],
				nav: navValue,
				navPosition: 'bottom',
				speed: speedValue,
				autoplay: false,
				autoplayButtonOutput: false,
				loop: false,
				rewind: rewindValue,
				touch: false,
				mouseDrag: false,
				autoHeight: false,
				onInit: showHomepageSliderContent,
			} );

		}

		if ( ! orinData.isSingular ) {
			initHomepageSlider();
		}


		/**
		 * 8 - Masonry layout
		 * ----------------------------------------------------
		 */
		function initMasonryBlogLayout() {

			var $grid = $( '#bwp-masonry' ).imagesLoaded( function() {

				// init Masonry after all images have loaded
				$grid.masonry( {
					// set itemSelector so .bwp-col-size is not used in layout
					itemSelector: '.bwp-masonry-item',
					// set columnWidth (default column size)
					columnWidth: '.bwp-col-size',
					// enable percentPosition
					percentPosition: true,
					// horizontal order
					horizontalOrder: orinData.postsHorizontalOrder,
				} );

				// update masonry after a short period of time (800 milliseconds)
				setTimeout( function() {
					$grid.masonry( 'layout' );
				}, 800 );

			} );

		}

		if ( ! orinData.isSingular ) {
			initMasonryBlogLayout();
		}


		/**
		 * 9 - Gallery format: Slider
		 * ----------------------------------------------------
		 */
		function initGalleryFormatSlider() {

			// if there is no slider on the current page, stop the function
			var $galleryFormatSlider = $( '.bwp-post-slider' );
			if ( 0 === $galleryFormatSlider.length ) {
				return;
			}

			// one or more sliders are on the page, so we continue to execute the function...

			// after successful initialization of each slider, we need to update the masonry grid
			var $masonryGrid = $( '#bwp-masonry' );
			var updateMasonryLayout = function() {
				if ( ! orinData.isSingular ) {
					$masonryGrid.masonry();
				}
			};

			// slider options:
			// 1: rewind
			var rewindValue = 'on' === orinData.gallerySliderRewind;
			// 2: transition type for slides
			var modeValue = 'gallery',
				axisValue = 'horizontal';
			if ( 'slide_horizontal' === orinData.gallerySliderTransition ) {
				modeValue = 'carousel';
			} else if ( 'slide_vertical' === orinData.gallerySliderTransition ) {
				modeValue = 'carousel';
				axisValue = 'vertical';
			}
			// 3: speed of the slide animation
			var speedValue = Number( orinData.gallerySliderAnimationSpeed );

			// initialize each slider on the page (tiny slider)
			$galleryFormatSlider.each( function() {
				tns( {
					container: '#' + $( this ).attr( 'id' ),
					mode: modeValue,
					axis: axisValue,
					items: 1,
					controls: true,
					controlsPosition: 'bottom',
					controlsText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ],
					nav: false,
					speed: speedValue,
					autoplay: false,
					autoplayButtonOutput: false,
					loop: false,
					rewind: rewindValue,
					touch: false,
					mouseDrag: false,
					autoHeight: false,
					onInit: updateMasonryLayout,
				} );
			} );

		}

		initGalleryFormatSlider();


		/**
		 * 10 - Popup windows (magnificPopup)
		 * ----------------------------------------------------
		 */
		function initPopupMedia() {

			// scrollbar width
			var scrollbarWidth = getScrollbarWidth(),
				scrollbarHalfWidth = scrollbarWidth / 2;

			// callbacks: beforeOpen and afterClose
			var beforeOpenPopup = function() {
				// save scroll value
				this.container.data( 'scrollTop', parseInt( $( window ).scrollTop() ) );
				// add offset to sticky elements
				$stickyHeaderContainer.css( {
					'margin-left': '-' + scrollbarHalfWidth + 'px',
					'padding-right': scrollbarHalfWidth,
				} );
				$scrollTopButton.css( 'margin-right', scrollbarWidth );
			};
			var afterClosePopup = function() {
				// scroll page to saved scroll value
				$( 'html, body' ).scrollTop( this.container.data( 'scrollTop' ) );
				// remove offset from sticky elements
				$stickyHeaderContainer.css( {
					'margin-left': 0,
					'padding-right': 0,
				} );
				$scrollTopButton.css( 'margin-right', 0 );
			};

			// important note: popups only work when the sidebar is closed
			// popup type: image
			$( '.bwp-sidebar-hidden a.bwp-popup-image' ).magnificPopup( {
				type: 'image',
				closeOnContentClick: true,
				closeMarkup: '<button title="%title%" type="button" class="mfp-close bwp-mfp-close-button"></button>',
				fixedContentPos: true,
				fixedBgPos: true,
				overflowY: 'auto',
				removalDelay: 300,
				mainClass: 'bwp-popup-zoom-in',
				callbacks: {
					beforeOpen: beforeOpenPopup,
					afterClose: afterClosePopup,
				},
			} );

			// popup type: gallery
			$( '.bwp-sidebar-hidden .bwp-popup-gallery' ).each( function() {
				$( this ).magnificPopup( {
					delegate: 'a.bwp-popup-gallery-item',
					type: 'image',
					gallery: {
						enabled: true,
						navigateByImgClick: true,
						arrowMarkup: '<button title="%title%" type="button" class="bwp-mfp-arrow bwp-mfp-arrow-%dir%"></button>',
						tPrev: 'Previous',
						tNext: 'Next',
						tCounter: '%curr% of %total%',
					},
					closeMarkup: '<button title="%title%" type="button" class="mfp-close bwp-mfp-close-button"></button>',
					fixedContentPos: true,
					fixedBgPos: true,
					overflowY: 'auto',
					removalDelay: 300,
					mainClass: 'bwp-popup-zoom-in',
					callbacks: {
						beforeOpen: beforeOpenPopup,
						afterClose: afterClosePopup,
					},
				} );
			} );

			// popup type: gallery (block editor)
			$( '.bwp-sidebar-hidden .wp-block-gallery.bwp-block-editor-popup-gallery' ).each( function() {
				$( this ).magnificPopup( {
					delegate: 'figure > a',
					type: 'image',
					gallery: {
						enabled: true,
						navigateByImgClick: true,
						arrowMarkup: '<button title="%title%" type="button" class="bwp-mfp-arrow bwp-mfp-arrow-%dir%"></button>',
						tPrev: 'Previous',
						tNext: 'Next',
						tCounter: '%curr% of %total%',
					},
					closeMarkup: '<button title="%title%" type="button" class="mfp-close bwp-mfp-close-button"></button>',
					fixedContentPos: true,
					fixedBgPos: true,
					overflowY: 'auto',
					removalDelay: 300,
					mainClass: 'bwp-popup-zoom-in',
					callbacks: {
						beforeOpen: beforeOpenPopup,
						afterClose: afterClosePopup,
					},
				} );
			} );

		}

		initPopupMedia();


		/**
		 * 11 - "Back to top" button
		 * ----------------------------------------------------
		 */
		function backToTop() {

			var $scrollTopContainer = $( '#bwp-scroll-top' );

			// hide container with button
			if ( $scrollTopContainer.hasClass( visibleCssClass ) ) {
				$scrollTopContainer.removeClass( visibleCssClass );
			}

			// show/hide container when scrolling
			$( window ).on( 'scroll', function() {
				if ( $( window ).scrollTop() > 800 ) {
					$scrollTopContainer.addClass( visibleCssClass );
				} else {
					$scrollTopContainer.removeClass( visibleCssClass );
				}
			} );

			// smoothly scroll to the top of the page
			$scrollTopButton.on( 'click', function() {
				$( 'html:not(:animated), body:not(:animated)' ).animate( { scrollTop: 0 }, 400 );
			} );

		}

		if ( 'on' === orinData.backToTop ) {
			backToTop();
		}


		/**
		 * 12 - Cookie: set cookie, get cookie, and delete cookie
		 * ----------------------------------------------------
		 */

		// function: set cookie
		function setCookie( name, value ) {

			// cookie value
			value = encodeURIComponent( value );

			// expiration date (+60 days)
			var date = new Date;
			date.setDate( date.getDate() + 60 );

			// set cookie (** changed for TF iframe **)
			document.cookie = name + '=' + value + '; path=/; expires=' + date.toUTCString() + '; samesite=none; secure';

		}

		// function: get cookie
		function getCookie( name ) {

			var matches = document.cookie.match( new RegExp(
				"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
			) );

			return matches ? decodeURIComponent( matches[1] ) : undefined;

		}

		// function: delete cookie
		function deleteCookie( name ) {

			// set the date in the past
			var date = new Date;
			date.setDate( date.getDate() - 1 );

			// delete cookie
			document.cookie = name + '=; path=/; expires=' + date.toUTCString();

		}


		/**
		 * 13 - Other functions
		 * ----------------------------------------------------
		 */

		// initialize tooltips (bootstrap)
		$( '.bwp-tooltip' ).tooltip();

		// function: get scrollbar width
		function getScrollbarWidth() {

			var block1 = $( '<div>' ).css( { 'width': '50px', 'height': '50px' } ),
				block2 = $( '<div>' ).css( { 'height': '200px' } ),
				width1,
				width2,
				result;

			// scrollbar width calculation
			$body.append( block1.append( block2 ) );
			width1 = $( 'div', block1 ).innerWidth();
			block1.css( 'overflow-y', 'scroll' );
			width2 = $( 'div', block1 ).innerWidth();
			$( block1 ).remove();
			result = width1 - width2; // scrollbar width

			// return result
			return result;

		}

		// function: check and hide already open dropdown container
		function hideOtherDropdownContainers() {

			switch ( currentOpenContainer ) {
				case 'search':
					// hide search
					hideDropdownSearchForm();
					break;
				case 'mobile-menu':
					// hide mobile menu
					hideDropdownMobileMenu();
					break;
				case 'font-types':
					// hide font types
					hideDropdownFontTypes();
					break;
			}

		}

	} );
} )( jQuery );
