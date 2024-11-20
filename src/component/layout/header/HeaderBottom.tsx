import React from "react";
import Link from "next/link";

const HeaderBottom = () => {
  return (
    <div className="header-bottom header-bottom-bg-color sticky-bar">
      <div className="container">
        <div className="header-wrap header-space-between position-relative">
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
                  <Link href="/page-contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
