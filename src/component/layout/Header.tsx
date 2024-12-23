import Image from "next/image";
import Link from "next/link";

import flagDt from "@/imgs/theme/flag-dt.png";
import flagFr from "@/imgs/theme/flag-fr.png";
import flagRu from "@/imgs/theme/flag-ru.png";
import cart from "@/imgs/theme/icons/icon-cart.svg";
import heart from "@/imgs/theme/icons/icon-heart.svg";
import logo from "@/imgs/theme/logo.svg";
import CartDropdown from "./CartDropdown";

const Header = () => {
  return (
    <header className="header-area header-style-1 header-height-2">
      <div className="header-top header-top-ptb-1 d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-4">
              <div className="header-info">
                <ul>
                  <li>
                    <i className="fi-rs-smartphone"></i>

                    <Link href="#">(+01) - 2345 - 6789</Link>
                  </li>
                  <li>
                    <i className="fi-rs-marker"></i>
                    <Link href="/page-contact">Our location</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4">
              <div className="text-center">
                <div id="news-flash" className="d-inline-block">
                  <ul>
                    <li>
                      Get great devices up to 50% off
                      <Link href="/shop-grid-right">View details</Link>
                    </li>
                    <li>Supper Value Deals - Save more with coupons</li>
                    <li>
                      Trendy 25silver jewelry, save up 35% off today
                      <Link href="/shop-grid-right">Shop now</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="header-info header-info-right">
                <ul>
                  <li>
                    <a
                      href="#"
                      className="language-dropdown-active"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fi-rs-world"></i> English
                    </a>

                    <ul className="language-dropdown">
                      <li>
                        <Link href="#">
                          <Image
                            // src="/assets/imgs/theme/flag-fr.png"
                            src={flagFr}
                            alt="French"
                            width={20}
                            height={15}
                          />{" "}
                          Français
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <Image
                            src={flagDt}
                            alt="German"
                            width={20}
                            height={15}
                          />{" "}
                          Deutsch
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <Image
                            src={flagRu}
                            alt="Russian"
                            width={20}
                            height={15}
                          />{" "}
                          Pусский
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <i className="fi-rs-user"></i>
                    <Link href="/login-register">Log In / Sign Up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
        <div className="container">
          <div className="header-wrap">
            <div className="logo logo-width-1">
              <Link href="/">
                <Image src={logo} alt="logo" width={120} height={33} />
              </Link>
            </div>
            <div className="header-right">
              <div className="search-style-2">
                <form action="#">
                  <select className="select-active">
                    <option>All Categories</option>
                    <option>Womens</option>
                    <option>Mens</option>
                    <option>Cellphones</option>
                    <option>Computer</option>
                    <option>Electronics</option>
                    <option>Accessories</option>
                    <option>Home & Garden</option>
                    <option>Luggage</option>
                    <option>Shoes</option>
                    <option>Mother & Kids</option>
                  </select>
                  <input type="text" placeholder="Search for items..." />
                </form>
              </div>
              <div className="header-action-right">
                <div className="header-action-2">
                  <div className="header-action-icon-2">
                    <Link href="/shop-wishlist">
                      <Image
                        alt="Wishlist"
                        src={heart}
                        width={24}
                        height={24}
                      />
                      <span className="pro-count blue">4</span>
                    </Link>
                  </div>
                  <div className="header-action-icon-2">
                    <Link href="/shop-cart">
                      <Image alt="Cart" src={cart} width={24} height={24} />
                      <span className="pro-count blue">2</span>
                    </Link>
                    <CartDropdown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom header-bottom-bg-color sticky-bar">
        <div className="container">
          <div className="header-wrap header-space-between position-relative">
            <div className="logo logo-width-1 d-block d-lg-none">
              <Link href="/">
                <Image src={logo} alt="logo" width={100} height={50} />
              </Link>
            </div>
            <div className="header-nav d-none d-lg-flex">
              <div className="main-categori-wrap d-none d-lg-block">
                <Link className="categori-button-active" href="#">
                  <span className="fi-rs-apps"></span> Browse Categories
                </Link>
                <div className="categori-dropdown-wrap categori-dropdown-active-large">
                  <ul>
                    <li className="has-children">
                      <Link href="/shop-grid-right">Women&apos;s Clothing</Link>
                      <div className="dropdown-menu">
                        <ul className="mega-menu d-lg-flex">
                          <li className="mega-menu-col col-lg-7">
                            <ul className="d-lg-flex">
                              <li className="mega-menu-col col-lg-6">
                                <ul>
                                  <li>
                                    <span className="submenu-title">
                                      Hot & Trending
                                    </span>
                                  </li>
                                  <li>
                                    <Link href="#">Dresses</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Blouses & Shirts</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Hoodies & Sweatshirts</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Women&apos;s Sets</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Suits & Blazers</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Bodysuits</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Tanks & Camis</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Coats & Jackets</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-menu-col col-lg-6">
                                <ul>
                                  <li>
                                    <span className="submenu-title">
                                      Bottoms
                                    </span>
                                  </li>
                                  <li>
                                    <Link href="#">Leggings</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Skirts</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Shorts</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Jeans</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Pants & Capris</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Bikini Sets</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Cover-Ups</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Swimwear</Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-menu-col col-lg-5">
                            <div className="header-banner2">
                              <Image
                                src="/assets/imgs/banner/menu-banner-2.jpg"
                                alt="menu_banner1"
                                width={400}
                                height={200}
                              />
                              <div className="banne_info">
                                <h6>10% Off</h6>
                                <h4>New Arrival</h4>
                                <Link href="#">Shop now</Link>
                              </div>
                            </div>
                            <div className="header-banner2">
                              <Image
                                src="/assets/imgs/banner/menu-banner-3.jpg"
                                alt="menu_banner2"
                                width={400}
                                height={200}
                              />
                              <div className="banne_info">
                                <h6>15% Off</h6>
                                <h4>Hot Deals</h4>
                                <Link href="#">Shop now</Link>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="has-children">
                      <Link href="/shop-grid-right">Men&apos;s Clothing</Link>
                      <div className="dropdown-menu">
                        <ul className="mega-menu d-lg-flex">
                          <li className="mega-menu-col col-lg-7">
                            <ul className="d-lg-flex">
                              <li className="mega-menu-col col-lg-6">
                                <ul>
                                  <li>
                                    <span className="submenu-title">
                                      Jackets & Coats
                                    </span>
                                  </li>
                                  <li>
                                    <Link href="#">Down Jackets</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Jackets</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Parkas</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Faux Leather Coats</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Trench</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Wool & Blends</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Vests & Waistcoats</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Leather Coats</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-menu-col col-lg-6">
                                <ul>
                                  <li>
                                    <span className="submenu-title">
                                      Suits & Blazers
                                    </span>
                                  </li>
                                  <li>
                                    <Link href="#">Blazers</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Suit Jackets</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Suit Pants</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Suits</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Vests</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Tailor-made Suits</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Cover-Ups</Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-menu-col col-lg-5">
                            <div className="header-banner2">
                              <Image
                                src="/assets/imgs/banner/menu-banner-4.jpg"
                                alt="menu_banner1"
                                width={400}
                                height={200}
                              />
                              <div className="banne_info">
                                <h6>10% Off</h6>
                                <h4>New Arrival</h4>
                                <Link href="#">Shop now</Link>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="has-children">
                      <Link href="/shop-grid-right">Cellphones</Link>
                      <div className="dropdown-menu">
                        <ul className="mega-menu d-lg-flex">
                          <li className="mega-menu-col col-lg-7">
                            <ul className="d-lg-flex">
                              <li className="mega-menu-col col-lg-6">
                                <ul>
                                  <li>
                                    <span className="submenu-title">
                                      Hot & Trending
                                    </span>
                                  </li>
                                  <li>
                                    <Link href="#">Cellphones</Link>
                                  </li>
                                  <li>
                                    <Link href="#">iPhones</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Refurbished Phones</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Mobile Phone</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Mobile Phone Parts</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Phone Bags & Cases</Link>
                                  </li>
                                  <li>
                                    <Link href="#">
                                      Communication Equipments
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="#">Walkie Talkie</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-menu-col col-lg-6">
                                <ul>
                                  <li>
                                    <span className="submenu-title">
                                      Accessories
                                    </span>
                                  </li>
                                  <li>
                                    <Link href="#">Screen Protectors</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Wire Chargers</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Wireless Chargers</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Car Chargers</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Power Bank</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Armbands</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Dust Plug</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Signal Boosters</Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-menu-col col-lg-5">
                            <div className="header-banner2">
                              <Image
                                src="/assets/imgs/banner/menu-banner-5.jpg"
                                alt="menu_banner1"
                                width={400}
                                height={200}
                              />
                              <div className="banne_info">
                                <h6>10% Off</h6>
                                <h4>New Arrival</h4>
                                <Link href="#">Shop now</Link>
                              </div>
                            </div>
                            <div className="header-banner2">
                              <Image
                                src="/assets/imgs/banner/menu-banner-6.jpg"
                                alt="menu_banner2"
                                width={400}
                                height={200}
                              />
                              <div className="banne_info">
                                <h6>15% Off</h6>
                                <h4>Hot Deals</h4>
                                <Link href="#">Shop now</Link>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <Link href="/shop-grid-right">Computer & Office</Link>
                    </li>
                    <li>
                      <Link href="/shop-grid-right">Consumer Electronics</Link>
                    </li>
                    <li>
                      <Link href="/shop-grid-right">Jewelry & Accessories</Link>
                    </li>
                    <li>
                      <Link href="/shop-grid-right">Home & Garden</Link>
                    </li>
                    <li>
                      <Link href="/shop-grid-right">Shoes</Link>
                    </li>
                    {/* <li><Link href="/shop-grid-right"><FontAwesomeIcon icon={faTeddyBear} /> Mother & Kids</Link></li> */}
                    <li>
                      <Link href="/shop-grid-right">Outdoor fun</Link>
                    </li>
                  </ul>
                  {/* Dropdown content here */}
                </div>
              </div>
              <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block">
                <nav>
                  <ul>
                    <li>
                      <Link className="active" href="/">
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link href="/about-page">About</Link>
                    </li>

                    <li>
                      <Link href="/shop">Shop</Link>
                    </li>

                    <li>
                      <Link href="#">
                        Pages <i className="fi-rs-angle-down"></i>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/about-page">About Us</Link>
                        </li>
                        <li>
                          <Link href="/page-contact">Contact</Link>
                        </li>
                        <li>
                          <Link href="/account">My Account</Link>
                        </li>
                        <li>
                          <Link href="/login-register">Login/Register</Link>
                        </li>
                        <li>
                          <Link href="/purchase-guide">Purchase Guide</Link>
                        </li>
                        <li>
                          <Link href="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link href="/page-terms">Terms of Service</Link>
                        </li>
                        <li>
                          <Link href="/page-404">404 Page</Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link href="page-contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="hotline d-none d-lg-block">
              <p>
                <i className="fi-rs-headset"> </i>
                <span>Hotline</span> 1900 - 888
              </p>
            </div>
            <p className="mobile-promotion">
              Happy <span className="text-brand">Mother&apos;s Day</span>. Big
              Sale Up to 40%
            </p>
            <div className="header-action-right d-block d-lg-none">
              <div className="header-action-2">
                <div className="header-action-icon-2">
                  <Link href="/shop-wishlist">
                    <Image alt="Wishlist" src={heart} width={24} height={24} />
                    <span className="pro-count white">4</span>
                  </Link>
                </div>
                <div className="header-action-icon-2">
                  <Link className="mini-cart-icon" href="/shop-cart">
                    <Image alt="Cart" src={cart} width={24} height={24} />
                    <span className="pro-count white">2</span>
                  </Link>
                  {/* Cart dropdown */}
                </div>
              </div>
              <div className="header-action-icon-2 d-block d-lg-none">
                <div className="burger-icon burger-icon-white">
                  <span className="burger-icon-top"></span>
                  <span className="burger-icon-mid"></span>
                  <span className="burger-icon-bottom"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
