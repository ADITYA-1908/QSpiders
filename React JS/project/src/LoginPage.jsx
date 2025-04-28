import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import Buttons from "./components/LoginPage/Buttons";
import InputField from "./components/LoginPage/InputField";
import SocialIcons from "./components/LoginPage/SocialMedia";
import "./LoginPage.css";
const LoginPage = () => {
  return (
    <div className="fluid-container p-0 m-0">
      <div className="row g-0">
        <div className="col-md-8 p-4">
          <div className="logo mb-5">
            <div className="d-flex align-items-center">
              <svg
                width="45px"
                height="44px"
                viewBox="0 0 45 44"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="elements/logotype/1"
                    transform="translate(0.000000, -0.645322)"
                  >
                    <g id="Group-4">
                      <path
                        d="M11.7210155,30.598312 C10.2432663,30.598312 9.04085934,31.8046527 9.04085934,33.2872364 C9.04085934,34.7698202 10.2432663,35.9755681 11.7210155,35.9755681 C13.1987648,35.9755681 14.4005809,34.7698202 14.4005809,33.2872364 C14.4005809,31.8046527 13.1987648,30.598312 11.7210155,30.598312 Z M11.7210155,37.7539572 C9.26597828,37.7539572 7.26826926,35.7503054 7.26826926,33.2872364 C7.26826926,30.8235746 9.26597828,28.8199228 11.7210155,28.8199228 C14.1760528,28.8199228 16.1731709,30.8235746 16.1731709,33.2872364 C16.1731709,35.7503054 14.1760528,37.7539572 11.7210155,37.7539572 Z"
                        id="Fill-2"
                        fill="#1A1E1D"
                      ></path>
                      <path
                        d="M33.0457469,14.6596769 C32.5021526,14.6596769 31.9733299,14.8256599 31.5183651,15.1433988 C30.9310469,15.5542067 30.5387136,16.1701221 30.4128597,16.8773282 C30.1534707,18.3367929 31.1260318,19.7357924 32.5813283,19.99603 C34.0324887,20.2562676 35.4304714,19.2811176 35.6904512,17.8210601 C35.8157143,17.113854 35.6597264,16.4001271 35.2496672,15.8108875 C34.8401989,15.2222407 34.2262918,14.8280311 33.5213919,14.7017654 C33.3624496,14.6733112 33.2035074,14.6596769 33.0457469,14.6596769 M33.0534281,21.8165077 C32.7946299,21.8165077 32.5334683,21.7939815 32.2705341,21.7471505 C29.8533121,21.315002 28.23671,18.9900545 28.6680402,16.5649245 C28.876615,15.3905949 29.5289281,14.3674283 30.5038527,13.6851196 C31.4799589,13.002811 32.6605039,12.7431662 33.8327768,12.9512377 C35.0032772,13.1604948 36.0231073,13.814942 36.703191,14.7936489 C37.3844565,15.7723557 37.6438455,16.9585413 37.4352707,18.132871 C37.0512096,20.2942066 35.1693098,21.8165077 33.0534281,21.8165077"
                        id="Fill-4"
                        fill="#1A1E1D"
                      ></path>
                      <polygon
                        id="Fill-6"
                        fill="#F5A623"
                        points="25.6573551 21.6632106 18.3666921 15.3001341 19.5295112 13.9586359 26.8201742 20.3217123"
                      ></polygon>
                      <path
                        d="M22.6641004,12.6639093 C18.6781362,12.6639093 16.3873589,9.63294135 16.2544147,6.76973478 L18.0246413,6.68674329 C18.1032261,8.37858419 19.4037164,10.8855201 22.6623278,10.8855201 L22.6948253,10.8855201 C24.1944365,10.8778138 25.6065999,9.81374425 27.1020751,8.6874311 C28.8563484,7.36549515 30.6708898,5.99791388 32.9853015,5.98368677 C33.0059817,5.98368677 33.026662,5.98309397 33.0473422,5.98309397 C34.9936461,5.98309397 36.537572,6.55632808 37.6383505,7.6867908 C39.3376735,9.43316896 39.2850867,11.8565206 39.2815415,11.9590744 L37.5101331,11.9057227 C37.5101331,11.8914956 37.5331768,10.1136992 36.3591313,8.9180289 C35.6051897,8.15095037 34.4908214,7.76148314 33.0467513,7.76148314 C33.0302071,7.76148314 33.013663,7.76207594 32.9959371,7.76207594 C31.2676617,7.77274627 29.7609602,8.90795136 28.16622,10.1095496 C26.5064848,11.3597572 24.7900267,12.653239 22.7036882,12.6639093 L22.6641004,12.6639093 Z"
                        id="Fill-8"
                        fill="#1A1E1D"
                      ></path>
                      <path
                        d="M2,42.6453221 L43,42.6453221 L43,2.64532208 L2,2.64532208 L2,42.6453221 Z M0,44.6453221 L45,44.6453221 L45,0.645322078 L0,0.645322078 L0,44.6453221 Z"
                        id="Fill-10"
                        fill="#3BB497"
                      ></path>
                      <path
                        d="M38.9353546,31.5222445 C38.9353546,27.5884476 35.7594641,24.3873471 31.8449943,24.3594857 L31.8449943,24.3505937 L29.0927528,24.3505937 L29.0927528,26.1289829 L31.7935892,26.1289829 L31.7935892,26.1355037 C34.7544055,26.1355037 37.1627646,28.5517418 37.1627646,31.5222445 C37.1627646,34.4797057 34.7744949,36.886459 31.8314045,36.9066141 L29.1075244,36.9066141 L29.1075244,38.6850033 L31.7935892,38.6850033 L31.7935892,38.6873744 C31.8065882,38.6873744 31.8184055,38.6850033 31.8314045,38.6850033 L31.8597659,38.6850033 L31.8597659,38.6838177 C35.7671453,38.6476571 38.9353546,35.4501134 38.9353546,31.5222445"
                        id="Fill-12"
                        fill="#3BB497"
                      ></path>
                      <polygon
                        id="Fill-13"
                        fill="#3BB497"
                        points="12.8577776 25.5631588 15.6094282 25.5631588 15.6094282 23.7847696 12.8577776 23.7847696"
                      ></polygon>
                      <path
                        d="M13.5305346,6.6354664 L11.7579445,6.6354664 L11.7579445,11.2871397 C8.36638882,11.8419971 5.76659004,14.7935303 5.76659004,18.3509015 C5.76659004,22.3012966 8.97025117,25.5160314 12.9083555,25.5160314 L12.9083555,23.7376423 C9.94813003,23.7376423 7.53918011,21.3208114 7.53918011,18.3509015 C7.53918011,15.3803988 9.94813003,12.9641607 12.9083555,12.9641607 L12.9083555,12.9582327 L13.5305346,12.9582327 L13.5305346,6.6354664 Z"
                        id="Fill-14"
                        fill="#3BB497"
                      ></path>
                      <path
                        d="M21,36.6453221 L25,36.6453221 L25,25.6453221 L21,25.6453221 L21,36.6453221 Z M19,38.6453221 L27,38.6453221 L27,23.6453221 L19,23.6453221 L19,38.6453221 Z"
                        id="Fill-1"
                        fill="#1A1E1D"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              <span className="ms-2 fw-bold text-secondary">Diprella</span>
            </div>
          </div>

          <div className="login-form mt-5 pt-1">
            <h1 className="text-center mb-4 fw-bold">Login to Your Account</h1>
            <p className="text-center text-secondary mb-4">
              Login using social networks
            </p>

            <div className="d-flex justify-content-center gap-3 mb-4">
              <SocialIcons icon={<FaFacebook />} color="#3b5998" />
              <SocialIcons icon={<FaGoogle />} color="#dd4b39" />
              <SocialIcons icon={<FaLinkedin />} color="#0077b5" />
            </div>

            <div className="text-center mb-4">
              <span className="text-secondary">
                <span className="line"></span> OR <span className="line"></span>
              </span>
            </div>

            <form>
              <InputField
                type="email"
                placeholder="Email"
                name="email"
                className="mb-3"
              />

              <InputField
                type="password"
                placeholder="Password"
                name="password"
                className="mb-6"
              />

              <div className="d-flex align-content-center justify-content-center">
                <Buttons
                  text="Sign In"
                  bgcolor={"#28b498"}
                  Tcolor={"#ffffff"}
                />
              </div>
            </form>
          </div>
        </div>

        <div className="right-section col-md-4 d-flex flex-column justify-content-center align-items-center text-center text-white">
          <div className="background-shapes">
            <div className="circle small-circle"></div>
            <div className="circle big-circle"></div>
            <div className="triangle"></div>
          </div>

          <div className="inner-right">✕</div>

          <div className="p-2">
            <h1 className="mb-4">New Here?</h1>
            <p className="mb-3">Sign up and discover a great amount</p>
            <p className="mt-3"> of new opportunities!</p>
            <Buttons text="Sign Up" bgcolor={"white"} Tcolor={"black"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
