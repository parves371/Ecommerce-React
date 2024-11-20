import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/imgs/theme/logo.svg";
import CartDropdown from "../CartDropdown";
import heart from "@/imgs/theme/icons/icon-heart.svg";
import cart from "@/imgs/theme/icons/icon-cart.svg";

const HeaderMiddle = () => {
  return (
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
  );
};

export default HeaderMiddle;
