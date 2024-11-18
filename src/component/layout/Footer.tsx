import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="main">
      <section className="newsletter p-30 text-white wow fadeIn animated">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-md-3 mb-lg-0">
              <div className="row align-items-center">
                <div className="col flex-horizontal-center">
                  <Image
                    className="icon-email"
                    src="/imgs/theme/icons/icon-email.svg"
                    alt="Email icon"
                    width={30} 
                    height={30}
             
                  />
                  <h4 className="font-size-20 mb-0 ml-3">
                    Sign up to Newsletter
                  </h4>
                </div>
                <div className="col my-4 my-md-0 des">
                  <h5 className="font-size-15 ml-4 mb-0">
                    ...and receive{" "}
                    <strong>£25 coupon for first shopping.</strong>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              {/* Subscribe Form */}
              <form className="form-subcriber d-flex wow fadeIn animated">
                <input
                  type="email"
                  className="form-control bg-white font-small"
                  placeholder="Enter your email"
                />
                <button className="btn bg-dark text-white" type="submit">
                  Subscribe
                </button>
              </form>
              {/* End Subscribe Form */}
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding footer-mid">
        <div className="container pt-15 pb-20">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="widget-about font-md mb-md-5 mb-lg-0">
                <div className="logo logo-width-1 wow fadeIn animated">
                  <Link href="index.html">
                    <Image
                      src="/imgs/theme/logo.svg"
                      alt="logo"
                      width={120}
                      height={33}
                    />
                  </Link>
                </div>
                <h5 className="mt-20 mb-10 fw-600 text-grey-4 wow fadeIn animated">
                  Contact
                </h5>
                <p className="wow fadeIn animated">
                  <strong>Address: </strong>562 Wellington Road, Street 32, San
                  Francisco
                </p>
                <p className="wow fadeIn animated">
                  <strong>Phone: </strong>+01 2222 365 /(+91) 01 2345 6789
                </p>
                <p className="wow fadeIn animated">
                  <strong>Hours: </strong>10:00 - 18:00, Mon - Sat
                </p>
                <h5 className="mb-10 mt-30 fw-600 text-grey-4 wow fadeIn animated">
                  Follow Us
                </h5>
                <div
                  className="mobile-social-icon wow fadeIn animated mb-sm-5 mb-md-0"
                  style={{ display: "flex", justifyContent: "flex-start" }}
                >
                  {/* links to social media icons */}
                  <Link href="#">
                    <Image
                      src="/imgs/theme/icons/icon-facebook.svg"
                      alt="Facebook"
                      width={24}
                      height={24}
                     
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imgs/theme/icons/icon-twitter.svg"
                      alt="Twitter"
                      width={24}
                      height={24}
                     
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imgs/theme/icons/icon-instagram.svg"
                      alt="Instagram"
                      width={24}
                      height={24}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imgs/theme/icons/icon-pinterest.svg"
                      alt="Pinterest"
                      width={24}
                      height={24}
                   
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imgs/theme/icons/icon-youtube.svg"
                      alt="YouTube"
                      width={24}
                      height={24}
                
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3">
              <h5 className="widget-title wow fadeIn animated">About</h5>
              <ul className="footer-list wow fadeIn animated mb-sm-5 mb-md-0">
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Delivery Information</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
                <li>
                  <Link href="#">Support Center</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3">
              <h5 className="widget-title wow fadeIn animated">My Account</h5>
              <ul className="footer-list wow fadeIn animated">
                <li>
                  <Link href="#">Sign In</Link>
                </li>
                <li>
                  <Link href="#">View Cart</Link>
                </li>
                <li>
                  <Link href="#">My Wishlist</Link>
                </li>
                <li>
                  <Link href="#">Track My Order</Link>
                </li>
                <li>
                  <Link href="#">Help</Link>
                </li>
                <li>
                  <Link href="#">Order</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5 className="widget-title wow fadeIn animated">Install App</h5>
              <div className="row">
                <div className="col-md-8 col-lg-12">
                  <p className="wow fadeIn animated">
                    From App Store or Google Play
                  </p>
                  <div className="download-app wow fadeIn animated">
                    <Link href="#" className="hover-up mb-sm-4 mb-lg-0">
                      <Image
                        src="/imgs/theme/app-store.jpg"
                        alt="App Store"
                        width={135}
                        height={40}
                   
                      />
                    </Link>
                    <Link href="#" className="hover-up">
                      <Image
                        src="/imgs/theme/google-play.jpg"
                        alt="Google Play"
                        width={135}
                        height={40}
                        
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 col-lg-12 mt-md-3 mt-lg-0">
                  <p className="mb-20 wow fadeIn animated">
                    Secured Payment Gateways
                  </p>
                  <Image
                    className="wow fadeIn animated"
                    src="/imgs/theme/payment-method.png"
                    alt="Payment methods"
                    width={224}
                    height={32}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container pb-20 wow fadeIn animated">
        <div className="row">
          <div className="col-12 mb-20">
            <div className="footer-bottom"></div>
          </div>
          <div className="col-lg-6">
            <p className="float-md-left font-sm text-muted mb-0">
              &copy; 2022, <strong className="text-brand">Evara</strong> - HTML
              Ecommerce Template
            </p>
          </div>
          <div className="col-lg-6">
            <p className="text-lg-end text-start font-sm text-muted mb-0">
              Designed by{" "}
              <Link href="http://alithemes.com/" rel="noopener noreferrer">
                Alithemes.com
              </Link>
              . All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
