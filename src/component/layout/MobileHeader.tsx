import Link from "next/link";
import Image from "next/image";

const MobileHeader = () => {
  return (
    <div className="mobile-header-active mobile-header-wrapper-style">
      <div className="mobile-header-wrapper-inner">
        <div className="mobile-header-top">
          <div className="mobile-header-logo">
            <Link href="/">
              <Image
                src="/assets/imgs/theme/logo.svg"
                alt="logo"
                width={120}
                height={60}
              />
            </Link>
          </div>
          <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
            <button className="close-style search-close">
              <i className="icon-top"></i>
              <i className="icon-bottom"></i>
            </button>
          </div>
        </div>
        <div className="mobile-header-content-area">
          <div className="mobile-search search-style-3 mobile-header-border">
            <form action="#">
              <input type="text" placeholder="Search for items…" />
              <button type="submit">
                <i className="fi-rs-search"></i>
              </button>
            </form>
          </div>
          <div className="mobile-menu-wrap mobile-header-border">
            <div className="main-categori-wrap mobile-header-border">
              <Link href="#">
                <span className="fi-rs-apps"></span> Browse Categories
              </Link>
              <div className="categori-dropdown-wrap categori-dropdown-active-small">
                <ul>
                  <li>
                    <Link href="/shop-grid-right">
                      <i className="evara-font-dress"></i>Women&apos;s Clothing
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop-grid-right">
                      <i className="evara-font-tshirt"></i>Men&apos;s Clothing
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop-grid-right">
                      <i className="evara-font-smartphone"></i> Cellphones
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop-grid-right">
                      <i className="evara-font-desktop"></i>Computer & Office
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop-grid-right">
                      <i className="evara-font-cpu"></i>Consumer Electronics
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop-grid-right">
                      <i className="evara-font-home"></i>Home & Garden
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop-grid-right">
                      <i className="evara-font-high-heels"></i>Shoes
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop-grid-right">
                      <i className="evara-font-teddy-bear"></i>Mother & Kids
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop-grid-right">
                      <i className="evara-font-kite"></i>Outdoor fun
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mobile menu start */}
            <nav>
              <ul className="mobile-menu">
                <li className="menu-item-has-children">
                  <span className="menu-expand"></span>
                  <Link href="/">Home</Link>
                  <ul className="dropdown">
                    <li>
                      <Link href="/">Home 1</Link>
                    </li>
                    <li>
                      <Link href="/index-2">Home 2</Link>
                    </li>
                    <li>
                      <Link href="/index-3">Home 3</Link>
                    </li>
                    <li>
                      <Link href="/index-4">Home 4</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <span className="menu-expand"></span>
                  <Link href="/shop-grid-right">Shop</Link>
                  <ul className="dropdown">
                    <li>
                      <Link href="/shop-grid-right">
                        Shop Grid – Right Sidebar
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop-grid-left">
                        Shop Grid – Left Sidebar
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop-list-right">
                        Shop List – Right Sidebar
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop-list-left">
                        Shop List – Left Sidebar
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop-fullwidth">Shop - Wide</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <span className="menu-expand"></span>
                      <Link href="#">Single Product</Link>
                      <ul className="dropdown">
                        <li>
                          <Link href="/shop-product-right">
                            Product – Right Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop-product-left">
                            Product – Left Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop-product-full">
                            Product – No sidebar
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop-filter">Shop – Filter</Link>
                    </li>
                    <li>
                      <Link href="/shop-wishlist">Shop – Wishlist</Link>
                    </li>
                    <li>
                      <Link href="/shop-cart">Shop – Cart</Link>
                    </li>
                    <li>
                      <Link href="/shop-checkout">Shop – Checkout</Link>
                    </li>
                    <li>
                      <Link href="/shop-compare">Shop – Compare</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <span className="menu-expand"></span>
                  <Link href="#">Mega Menu</Link>
                  <ul className="dropdown">
                    <li className="menu-item-has-children">
                      <span className="menu-expand"></span>
                      <Link href="#">Women&apos;s Fashion</Link>
                      <ul className="dropdown">
                        <li>
                          <Link href="/shop-product-right">Dresses</Link>
                        </li>
                        <li>
                          <Link href="/shop-product-right">
                            Blouses & Shirts
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop-product-right">
                            Hoodies & Sweatshirts
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop-product-right">Women&apos;s Sets</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <span className="menu-expand"></span>
                      <Link href="#">Men&apos;s Fashion</Link>
                      <ul className="dropdown">
                        <li>
                          <Link href="/shop-product-right">Jackets</Link>
                        </li>
                        <li>
                          <Link href="/shop-product-right">
                            Casual Faux Leather
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop-product-right">
                            Genuine Leather
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <span className="menu-expand"></span>
                      <Link href="#">Technology</Link>
                      <ul className="dropdown">
                        <li>
                          <Link href="/shop-product-right">Gaming Laptops</Link>
                        </li>
                        <li>
                          <Link href="/shop-product-right">
                            Ultraslim Laptops
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop-product-right">Tablets</Link>
                        </li>
                        <li>
                          <Link href="/shop-product-right">
                            Laptop Accessories
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop-product-right">
                            Tablet Accessories
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <span className="menu-expand"></span>
                  <Link href="/blog-category-fullwidth">Blog</Link>
                  <ul className="dropdown">
                    <li>
                      <Link href="/blog-category-grid">Blog Category Grid</Link>
                    </li>
                    <li>
                      <Link href="/blog-category-list">Blog Category List</Link>
                    </li>
                    <li>
                      <Link href="/blog-category-big">Blog Category Big</Link>
                    </li>
                    <li>
                      <Link href="/blog-category-fullwidth">
                        Blog Category Wide
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <span className="menu-expand"></span>
                      <Link href="#">Single Product Layout</Link>
                      <ul className="dropdown">
                        <li>
                          <Link href="/blog-post-left">Left Sidebar</Link>
                        </li>
                        <li>
                          <Link href="/blog-post-right">Right Sidebar</Link>
                        </li>
                        <li>
                          <Link href="/blog-post-fullwidth">No Sidebar</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <span className="menu-expand"></span>
                  <Link href="#">Pages</Link>
                  <ul className="dropdown">
                    <li>
                      <Link href="/page-about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/page-contact">Contact</Link>
                    </li>
                    <li>
                      <Link href="/page-account">My Account</Link>
                    </li>
                    <li>
                      <Link href="/page-login-register">Login/Register</Link>
                    </li>
                    <li>
                      <Link href="/page-purchase-guide">Purchase Guide</Link>
                    </li>
                    <li>
                      <Link href="/page-privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/page-terms">Terms of Service</Link>
                    </li>
                    <li>
                      <Link href="/page-404">404 Page</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <span className="menu-expand"></span>
                  <Link href="#">Language</Link>
                  <ul className="dropdown">
                    <li>
                      <Link href="#">English</Link>
                    </li>
                    <li>
                      <Link href="#">French</Link>
                    </li>
                    <li>
                      <Link href="#">German</Link>
                    </li>
                    <li>
                      <Link href="#">Spanish</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            {/* Mobile menu end */}
          </div>
          <div className="mobile-header-info-wrap mobile-header-border">
            <div className="single-mobile-header-info mt-30">
              <Link href="/page-contact"> Our location </Link>
            </div>
            <div className="single-mobile-header-info">
              <Link href="/page-login-register">Log In / Sign Up </Link>
            </div>
            <div className="single-mobile-header-info">
              <Link href="#">(+01) - 2345 - 6789 </Link>
            </div>
          </div>
          <div className="mobile-social-icon">
            <h5 className="mb-15 text-grey-4">Follow Us</h5>
            <Link href="#">
              <Image
                src="/assets/imgs/theme/icons/icon-facebook.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </Link>
            <Link href="#">
              <Image
                src="/assets/imgs/theme/icons/icon-twitter.svg"
                alt="Twitter"
                width={30}
                height={30}
              />
            </Link>
            <Link href="#">
              <Image
                src="/assets/imgs/theme/icons/icon-instagram.svg"
                alt="Instagram"
                width={30}
                height={30}
              />
            </Link>
            <Link href="#">
              <Image
                src="/assets/imgs/theme/icons/icon-pinterest.svg"
                alt="Pinterest"
                width={30}
                height={30}
              />
            </Link>
            <Link href="#">
              <Image
                src="/assets/imgs/theme/icons/icon-youtube.svg"
                alt="YouTube"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
