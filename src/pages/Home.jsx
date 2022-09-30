import { useNavigate } from "react-router-dom";
import Reveal, { Zoom } from "react-awesome-reveal";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fadeInUp } from "./utils";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="voults">
      <section className="main-page">
        <Header />

        <section className="banner">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <Reveal
                  keyframes={fadeInUp}
                  className="header-logo onStep"
                  delay={0}
                  duration={800}
                  triggerOnce
                >
                  <div className="left-banner">
                    <a
                      href="https://docs.friktion.fi/protocol/security"
                      target="blank"
                      className="left-top"
                    >
                      <p>AUDITED BY</p>
                      <img src="/images/banner-logo.png" alt="banner-logo" />
                    </a>
                    <h1>Smarter returns on your crypto</h1>
                    <p>
                      Diversify your portfolio with strategies powered by
                      Friktion.
                    </p>
                    <a href="/" className="primarybtn">
                      Get Started
                    </a>
                  </div>
                </Reveal>
              </div>
              <div
                className="col-sm-6"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  style={{
                    width: "350px",
                    height: "350px",
                    position: "relative",
                  }}
                  className="rotating_animations"
                >
                  <Zoom
                    className="logo-wrapper align-items-center"
                    delay={600}
                    duration={1000}
                    triggerOnce
                  >
                    <div className="crypto-logo">
                      <div id="ripple"></div>
                      <div id="ripple2"></div>
                      <div id="ripple3"></div>
                      <img
                        src="/images/favicon-white.png"
                        className="crypto-logo-img rounded mx-auto d-block pulse2"
                        alt="MAGIC"
                      />
                    </div>
                  </Zoom>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-botton">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="content">
                    <h4>$2.7 billion</h4>
                    <p>Total Traded Volume</p>
                  </div>
                </div>{" "}
                <div className="col">
                  <div className="content">
                    <h4>$42M+</h4>
                    <p>Total Value Locked</p>
                  </div>
                </div>
                <div className="col">
                  <div className="content">
                    <h4>17K+</h4>
                    <p>Users</p>
                  </div>
                </div>
                <div className="col">
                  <div className="content">
                    <h4>21.2%</h4>
                    <p>Average APY</p>
                  </div>
                </div>
                <div className="col">
                  <div className="content">
                    <h4>$10.3M+</h4>
                    <p>Total Premium Generated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-two">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="section-content">
                  <h3>RISK-AWARE</h3>
                  <h2>
                    Capture <span>edge</span>, fully automated
                  </h2>
                  <p>
                    Friktion is the first DeFi platform built with risk
                    management as our main focus. Don't be scared by volatile
                    markets - monetize them.
                  </p>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="icon-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="265"
                    fill="none"
                    viewBox="0 0 856 265"
                    class="css-2srku0"
                  >
                    <path
                      stroke="#74747D"
                      stroke-width="3"
                      d="M23.969 262.831L823.969 262.831"
                    ></path>
                    <path
                      fill="#74747D"
                      d="M434.032 0l-8.66 15h17.32l-8.66-15zm-1.5 13.5V264h3V13.5h-3z"
                    ></path>
                    <path
                      fill="url(#paint0_radial_3754_8319)"
                      fill-rule="evenodd"
                      d="M619.999 240.5c43.779 19.09 161.973 20.151 211.973 20.151l-287.917.846c-33.553-5.952-51.006-63.615-66.687-115.423C464.001 101.91 451.921 62 432.253 62c-18.954 0-29.099 37.066-40.654 79.285-14.21 51.914-30.551 111.62-68.026 119.775l-226.48-1.6c69.009-3.388 135.226-11.233 155.406-17.96 44.909-14.97 80.921-67.128 111.592-111.551C389.764 92.765 411.695 61 431.972 61c20.83 0 44.516 31.115 72.64 68.062 31.956 41.982 69.644 91.492 115.387 111.438zM97.092 259.46c-21.886 1.075-44.052 1.701-65.12 1.701L31.968 259l65.124.46zm324.796 2.294l-98.315-.694a40.973 40.973 0 01-4.934.76L32.003 262H314.68a43.25 43.25 0 003.959-.18l103.249-.066zm43.718-.027l78.449-.23c.375.066.752.126 1.132.18l-79.581.05zm79.581-.05l286.816-.181S617.369 262 549.827 262c-1.58 0-3.127-.109-4.64-.323zm-79.581.05l-33.636.099-10.082-.072 43.718-.027z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      stroke="#74747D"
                      stroke-width="3"
                      d="M831.999 260s-214.967.5-282.467.5c-67.5 0-73.5-198.5-117.5-198.5s-40.5 198.5-117.5 198.5h-282.5"
                    ></path>
                    <path
                      stroke="url(#paint1_radial_3754_8319)"
                      stroke-width="3"
                      d="M832.032 257c-50 0-158 8.484-212.5-17.5-85.121-40.583-143-178.5-187.5-178.5s-90.264 142.687-177.5 178.5c-47.5 19.5-135 18-222.5 18"
                    ></path>
                    <g filter="url(#filter0_d_3754_8319)">
                      <rect
                        width="30.888"
                        height="32.001"
                        x="417.032"
                        y="45"
                        fill="#fff"
                        rx="15.444"
                        shape-rendering="crispEdges"
                      ></rect>
                      <path
                        fill="url(#paint2_linear_3754_8319)"
                        d="M425.032 64.585L439.92 51l-4.056 10.48-10.832 3.105z"
                      ></path>
                      <path
                        fill="url(#paint3_linear_3754_8319)"
                        d="M437.322 62.16L427.634 71l2.632-6.813 7.056-2.027z"
                      ></path>
                      <rect
                        width="28.888"
                        height="30.001"
                        x="418.032"
                        y="46"
                        stroke="url(#paint4_linear_3754_8319)"
                        stroke-width="2"
                        rx="14.444"
                        shape-rendering="crispEdges"
                      ></rect>
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_3754_8319"
                        width="54.889"
                        height="56.001"
                        x="405.032"
                        y="35"
                        color-interpolation-filters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset dy="2"></feOffset>
                        <feGaussianBlur stdDeviation="6"></feGaussianBlur>
                        <feComposite
                          in2="hardAlpha"
                          operator="out"
                        ></feComposite>
                        <feColorMatrix values="0 0 0 0 0.938167 0 0 0 0 0.558333 0 0 0 0 1 0 0 0 0.5 0"></feColorMatrix>
                        <feBlend
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_3754_8319"
                        ></feBlend>
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_3754_8319"
                          result="shape"
                        ></feBlend>
                      </filter>
                      <filter
                        id="filter1_d_3754_8319"
                        width="16"
                        height="16"
                        x="457"
                        y="194"
                        color-interpolation-filters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset dy="4"></feOffset>
                        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                        <feComposite
                          in2="hardAlpha"
                          operator="out"
                        ></feComposite>
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                        <feBlend
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_3754_8319"
                        ></feBlend>
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_3754_8319"
                          result="shape"
                        ></feBlend>
                      </filter>
                      <filter
                        id="filter2_d_3754_8319"
                        width="216"
                        height="118"
                        x="640"
                        y="117"
                        color-interpolation-filters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feMorphology
                          in="SourceAlpha"
                          radius="4"
                          result="effect1_dropShadow_3754_8319"
                        ></feMorphology>
                        <feOffset dy="4"></feOffset>
                        <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                        <feComposite
                          in2="hardAlpha"
                          operator="out"
                        ></feComposite>
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
                        <feBlend
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_3754_8319"
                        ></feBlend>
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_3754_8319"
                          result="shape"
                        ></feBlend>
                      </filter>
                      <filter
                        id="filter3_d_3754_8319"
                        width="16"
                        height="16"
                        x="382"
                        y="117"
                        color-interpolation-filters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset dy="4"></feOffset>
                        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                        <feComposite
                          in2="hardAlpha"
                          operator="out"
                        ></feComposite>
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                        <feBlend
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_3754_8319"
                        ></feBlend>
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_3754_8319"
                          result="shape"
                        ></feBlend>
                      </filter>
                      <filter
                        id="filter4_d_3754_8319"
                        width="216"
                        height="118"
                        x="0"
                        y="37"
                        color-interpolation-filters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feMorphology
                          in="SourceAlpha"
                          radius="4"
                          result="effect1_dropShadow_3754_8319"
                        ></feMorphology>
                        <feOffset dy="4"></feOffset>
                        <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                        <feComposite
                          in2="hardAlpha"
                          operator="out"
                        ></feComposite>
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
                        <feBlend
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_3754_8319"
                        ></feBlend>
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_3754_8319"
                          result="shape"
                        ></feBlend>
                      </filter>
                      <radialGradient
                        id="paint0_radial_3754_8319"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="rotate(122.76 445.499 111.698) scale(905.529 447.859)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#383C8B"></stop>
                        <stop offset="0.281" stop-color="#3067F4"></stop>
                        <stop
                          offset="0.781"
                          stop-color="#F077D8"
                          stop-opacity="0"
                        ></stop>
                        <stop
                          offset="1"
                          stop-color="#DBB4D3"
                          stop-opacity="0"
                        ></stop>
                      </radialGradient>
                      <radialGradient
                        id="paint1_radial_3754_8319"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="rotate(166.144 412.31 81.05) scale(823.976 387.206)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#383C8B"></stop>
                        <stop offset="0.281" stop-color="#3067F4"></stop>
                        <stop offset="0.822" stop-color="#F077D8"></stop>
                        <stop offset="0.977" stop-color="#DBB4D3"></stop>
                      </radialGradient>
                      <linearGradient
                        id="paint2_linear_3754_8319"
                        x1="425.032"
                        x2="440.199"
                        y1="51"
                        y2="51.47"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.089" stop-color="#806EE8"></stop>
                        <stop offset="1" stop-color="#C073DF"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_3754_8319"
                        x1="427.634"
                        x2="437.503"
                        y1="62.16"
                        y2="62.466"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.089" stop-color="#806EE8"></stop>
                        <stop offset="1" stop-color="#C073DF"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint4_linear_3754_8319"
                        x1="417.032"
                        x2="448.504"
                        y1="45"
                        y2="45.858"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.089" stop-color="#806EE8"></stop>
                        <stop offset="1" stop-color="#C073DF"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-three">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="left">
                  <h4>OUR GROWTH</h4>
                  <h2>The numbers speak for themselves</h2>
                  <p>
                    Access optimized portfolio management with a click of a
                    button.
                  </p>
                  <a href="/" className="primarybtn">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="row right">
                  <div className="col-sm-6">
                    <div className="content">
                      <h3>$2.7B+</h3>
                      <p>Total Traded Volume</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="content">
                      <h3>$2.7B+</h3>
                      <p>Total Traded Volume</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="content">
                      <h3>$2.7B+</h3>
                      <p>Total Traded Volume</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="content">
                      <h3>$2.7B+</h3>
                      <p>Total Traded Volume</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-four">
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <h3>OUR PRODUCTS</h3>
                <h2>
                  Volts are Friktion's native <br /> structured products
                </h2>
              </div>
            </div>
            <div className="row second-row">
              <div className="col-sm-6 col-lg-4 column">
                <div className="card" onClick={() => navigate("/volts#volt1")}>
                  <div className="card-top">
                    {/* <div className="zigzag"></div> */}
                    <h5 className="top-head">Volt 1</h5>
                  </div>
                  <div className="card-body">
                    <h3>Generate Income</h3>
                    <p>
                      Automated call options selling strategy built to enhance
                      returns on volatile assets with algorithmic strike and
                      expiry.
                    </p>
                  </div>
                  <div className="card-bottom">
                    <div className="left">
                      <h3>24</h3>
                      <span>
                        % <br />
                        AVG APY
                      </span>
                    </div>
                    <div className="right">
                      <img src="/images/btc.png" alt="btc" />
                      <img src="/images/sol.png" alt="sol" />
                      <img src="/images/eth.png" alt="eth" />
                      <img
                        src="/images/bnb.svg"
                        alt="bnb"
                        className="bnb-svg"
                      />
                      <img src="/images/avax.png" alt="avax" />
                    </div>
                  </div>
                  <div className="card-goto-explore">
                    <a href="/" className="explore">
                      Explore Volt
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 column">
                <div className="card" onClick={() => navigate("/volts#volt2")}>
                  <div className="card-top">
                    <h5 className="top-head">Volt 2</h5>
                  </div>
                  <div className="card-body">
                    <h3>Generate Income</h3>
                    <p>
                      Automated call options selling strategy built to enhance
                      returns on volatile assets with algorithmic strike and
                      expiry.
                    </p>
                  </div>
                  <div className="card-bottom">
                    <div className="left">
                      <h3>24</h3>
                      <span>
                        % <br />
                        AVG APY
                      </span>
                    </div>
                    <div className="right">
                      <img src="/images/btc.png" alt="btc" />
                      <img src="/images/sol.png" alt="sol" />
                      <img src="/images/eth.png" alt="eth" />
                      <img
                        src="/images/bnb.svg"
                        alt="bnb"
                        className="bnb-svg"
                      />
                      <img src="/images/avax.png" alt="avax" />
                    </div>
                  </div>
                  <div className="card-goto-explore">
                    <a href="/" className="explore">
                      Explore Volt
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 column">
                <div className="card" onClick={() => navigate("/volts#volt3")}>
                  <div className="card-top">
                    <h5 className="top-head">Volt 3</h5>
                  </div>
                  <div className="card-body">
                    <h3>Generate Income</h3>
                    <p>
                      Automated call options selling strategy built to enhance
                      returns on volatile assets with algorithmic strike and
                      expiry.
                    </p>
                  </div>
                  <div className="card-bottom">
                    <div className="left">
                      <h3>24</h3>
                      <span>
                        % <br />
                        AVG APY
                      </span>
                    </div>
                    <div className="right">
                      <img src="/images/btc.png" alt="btc" />
                      <img src="/images/sol.png" alt="sol" />
                      <img src="/images/eth.png" alt="eth" />
                      <img
                        src="/images/bnb.svg"
                        alt="bnb"
                        className="bnb-svg"
                      />
                      <img src="/images/avax.png" alt="avax" />
                    </div>
                  </div>
                  <div className="card-goto-explore">
                    <a href="/" className="explore">
                      Explore Volt
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 column">
                <div className="card" onClick={() => navigate("/volts#volt4")}>
                  <div className="card-top">
                    <h5 className="top-head">Volt 4</h5>
                  </div>
                  <div className="card-body">
                    <h3>Generate Income</h3>
                    <p>
                      Automated call options selling strategy built to enhance
                      returns on volatile assets with algorithmic strike and
                      expiry.
                    </p>
                  </div>
                  <div className="card-bottom">
                    <div className="left">
                      <h3>24</h3>
                      <span>
                        % <br />
                        AVG APY
                      </span>
                    </div>
                    <div className="right">
                      <img src="/images/btc.png" alt="btc" />
                      <img src="/images/sol.png" alt="sol" />
                      <img src="/images/eth.png" alt="eth" />
                      <img
                        src="/images/bnb.svg"
                        alt="bnb"
                        className="bnb-svg"
                      />
                      <img src="/images/avax.png" alt="avax" />
                    </div>
                  </div>
                  <div className="card-goto-explore">
                    <a href="/" className="explore">
                      Explore Volt
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 column">
                <div className="card" onClick={() => navigate("/volts#volt5")}>
                  <div className="card-top">
                    <h5 className="top-head">Volt 5</h5>
                  </div>
                  <div className="card-body">
                    <h3>Generate Income</h3>
                    <p>
                      Automated call options selling strategy built to enhance
                      returns on volatile assets with algorithmic strike and
                      expiry.
                    </p>
                  </div>
                  <div className="card-bottom">
                    <div className="left">
                      <h3>24</h3>
                      <span>
                        % <br />
                        AVG APY
                      </span>
                    </div>
                    <div className="right">
                      <img src="/images/btc.png" alt="btc" />
                      <img src="/images/sol.png" alt="sol" />
                      <img src="/images/eth.png" alt="eth" />
                      <img
                        src="/images/bnb.svg"
                        alt="bnb"
                        className="bnb-svg"
                      />
                      <img src="/images/avax.png" alt="avax" />
                    </div>
                  </div>

                  <div className="card-goto-explore">
                    <a href="/" className="explore">
                      Explore Volt
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 column">
                <div className="card" onClick={() => navigate("/volts#volt6")}>
                  <div className="card-top">
                    <h5 className="top-head">Volt 6</h5>
                  </div>
                  <div className="card-body">
                    <h3>Generate Income</h3>
                    <p>
                      Automated call options selling strategy built to enhance
                      returns on volatile assets with algorithmic strike and
                      expiry.
                    </p>
                  </div>
                  <div className="card-bottom">
                    <div className="left">
                      <h3>24</h3>
                      <span>
                        % <br />
                        AVG APY
                      </span>
                    </div>
                    <div className="right">
                      <img src="/images/btc.png" alt="btc" />
                      <img src="/images/sol.png" alt="sol" />
                      <img src="/images/eth.png" alt="eth" />
                      <img
                        src="/images/bnb.svg"
                        alt="bnb"
                        className="bnb-svg"
                      />
                      <img src="/images/avax.png" alt="avax" />
                    </div>
                  </div>
                  <div className="card-goto-explore">
                    <a href="/" className="explore">
                      Explore Volt
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="team">
          <div className="container">
            <div className="row">
              <h2>The MetaVersus Team</h2>
              <h4>
                We Have A Can-Do Attitude Backed Up By Many Years Of Experience
                Delivering High-End Creative Solutions
              </h4>
            </div>
            <div className="row team-card-row">
              <div className="team-card">
                <img src="/images/avax.png" alt="avax" />
                <h3>Moray Hickes</h3>
                <h5>Chief Excutive Officer And Co-Founder</h5>
              </div>
              <div className="team-card">
                <img src="/images/btc.png" alt="avax" />
                <h3>Moray Hickes</h3>
                <h5>Chief Excutive Officer And Co-Founder</h5>
              </div>
              <div className="team-card">
                <img src="/images/eth.png" alt="avax" />
                <h3>Moray Hickes</h3>
                <h5>Chief Excutive Officer And Co-Founder</h5>
              </div>
              <div className="team-card">
                <img src="/images/sol.png" alt="avax" />
                <h3>Moray Hickes</h3>
                <h5>Chief Excutive Officer And Co-Founder</h5>
              </div>
            </div>
          </div>
        </section>
      </section>

      <div className="bg-gradient">
        <div className="main"></div>
      </div>

      <Footer />

      <div className="bg-ripple-animation d-md-block">
        <div className="left-bottom-ripples">
          <div className="ripples"></div>
        </div>
        <div className="top-right-ripples">
          <div className="ripples"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
