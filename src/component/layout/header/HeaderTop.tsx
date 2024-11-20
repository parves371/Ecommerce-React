import React from "react";
import Image from "next/image";
import Link from "next/link";

import flagFr from "@/imgs/theme/flag-fr.png";
import flagDt from "@/imgs/theme/flag-dt.png";
import flagRu from "@/imgs/theme/flag-ru.png";

const HeaderTop = () => {
  return (
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
                    Get great devices up to 50% off{" "}
                    <Link href="/shop-grid-right">View details</Link>
                  </li>
                  <li>Supper Value Deals - Save more with coupons</li>
                  <li>
                    Trendy 25silver jewelry, save up 35% off today{" "}
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
                  <a className="language-dropdown-active" href="#">
                    <i className="fi-rs-world"></i> English{" "}
                    <i className="fi-rs-angle-small-down"></i>
                  </a>
                  <ul className="language-dropdown">
                    <li>
                      <Link href="#">
                        <Image
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
  );
};

export default HeaderTop;
