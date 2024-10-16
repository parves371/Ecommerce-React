"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";

const LoginRegister: React.FC = () => {
  // State to handle form inputs (optional, you can also handle without state if needed)
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleLoginSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Login form submitted", loginData);
    // Add your login logic here
  };

  const handleRegisterSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Register form submitted", registerData);
    // Add your registration logic here
  };

  return (
    <main className="main">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/" rel="nofollow">
              Home
            </Link>
            <span></span> Pages
            <span></span> Login / Register
          </div>
        </div>
      </div>
      <section className="pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="row">
                {/* Login Form */}
                <div className="col-lg-5">
                  <div className="login_wrap widget-taber-content p-30 background-white border-radius-10 mb-md-5 mb-lg-0 mb-sm-5">
                    <div className="padding_eight_all bg-white">
                      <div className="heading_s1">
                        <h3 className="mb-30">Login</h3>
                      </div>
                      <form method="post" onSubmit={handleLoginSubmit}>
                        <div className="form-group">
                          <input
                            type="text"
                            required
                            name="email"
                            placeholder="Your Email"
                            value={loginData.email}
                            onChange={(e) =>
                              setLoginData({
                                ...loginData,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="form-group">
                          <input
                            required
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={loginData.password}
                            onChange={(e) =>
                              setLoginData({
                                ...loginData,
                                password: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="login_footer form-group">
                          <div className="chek-form">
                            <div className="custome-checkbox">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="checkbox"
                                id="exampleCheckbox1"
                                checked={loginData.rememberMe}
                                onChange={(e) =>
                                  setLoginData({
                                    ...loginData,
                                    rememberMe: e.target.checked,
                                  })
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheckbox1"
                              >
                                <span>Remember me</span>
                              </label>
                            </div>
                          </div>
                          <Link className="text-muted" href="#">
                            Forgot password?
                          </Link>
                        </div>
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-fill-out btn-block hover-up"
                            name="login"
                          >
                            Log in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Registration Form */}
                <div className="col-lg-1"></div>
                <div className="col-lg-6">
                  <div className="login_wrap widget-taber-content p-30 background-white border-radius-5">
                    <div className="padding_eight_all bg-white">
                      <div className="heading_s1">
                        <h3 className="mb-30">Create an Account</h3>
                      </div>
                      <p className="mb-50 font-sm">
                        Your personal data will be used to support your
                        experience throughout this website, to manage access to
                        your account, and for other purposes described in our
                        privacy policy
                      </p>
                      <form method="post" onSubmit={handleRegisterSubmit}>
                        <div className="form-group">
                          <input
                            type="text"
                            required
                            name="username"
                            placeholder="Username"
                            value={registerData.username}
                            onChange={(e) =>
                              setRegisterData({
                                ...registerData,
                                username: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            required
                            name="email"
                            placeholder="Email"
                            value={registerData.email}
                            onChange={(e) =>
                              setRegisterData({
                                ...registerData,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="form-group">
                          <input
                            required
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={registerData.password}
                            onChange={(e) =>
                              setRegisterData({
                                ...registerData,
                                password: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="form-group">
                          <input
                            required
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            value={registerData.confirmPassword}
                            onChange={(e) =>
                              setRegisterData({
                                ...registerData,
                                confirmPassword: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="login_footer form-group">
                          <div className="chek-form">
                            <div className="custome-checkbox">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="checkbox"
                                id="exampleCheckbox12"
                                checked={registerData.agreeToTerms}
                                onChange={(e) =>
                                  setRegisterData({
                                    ...registerData,
                                    agreeToTerms: e.target.checked,
                                  })
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheckbox12"
                              >
                                <span>I agree to terms & Policy.</span>
                              </label>
                            </div>
                          </div>
                          <Link href="page-privacy-policy.html">
                            <i className="fi-rs-book-alt mr-5 text-muted"></i>
                            Lean more
                          </Link>
                        </div>
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-fill-out btn-block hover-up"
                            name="login"
                          >
                            Submit & Register
                          </button>
                        </div>
                      </form>
                      <div className="divider-text-center mt-15 mb-15">
                        <span> or</span>
                      </div>
                      <ul className="btn-login list_none text-center mb-15">
                        <li>
                          <Link
                            href="#"
                            className="btn btn-facebook hover-up mb-lg-0 mb-sm-4"
                          >
                            Login With Facebook
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="btn btn-google hover-up">
                            Login With Google
                          </Link>
                        </li>
                      </ul>
                      <div className="text-muted text-center">
                        Already have an account?{" "}
                        <Link href="#">Sign in now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginRegister;
