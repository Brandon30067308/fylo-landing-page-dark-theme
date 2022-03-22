import { FC, useState, FormEvent } from "react";
import Logo from "../common/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import breakpoints from "../../breakpoints/breakpoints";

const Footer: FC = () => {
  const { width } = useWindowDimensions();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    }, 3500);
  };

  return (
    <footer
      className="Footer bg-primaryFooter relative w-full min-h-[550px] flex justify-center items-center
      mt-[265px] sm:mt-[241px] md:mt-[230px]"
    >
      <div
        className="w-full h-full max-w-full lg:max-w-[94vw] flex flex-col items-center justify-center
        pb-8 pt-[257px] sm:pt-[217px] md:pt-[182px] px-3 sm:px-8"
      >
        <div
          className="flex flex-col items-center justify-center absolute shadow bg-primaryIntro
            rounded-lg left-[3%] sm:left-[7%] lg:left-[27.5vw] -top-[225px] sm:-top-[185px] md:-top-[150px] h-[450px] sm:h-[370px] md:h-[300px]
            w-full max-w-[94%] sm:max-w-[86%] lg:max-w-[50vw] p-3.5 sm:p-6 md:p-8"
        >
          <h3 className="font-raleway text-[1.6rem] sm:text-3xl font-semibold mb-2.5 sm:mb-4 text-center">
            Get early access today
          </h3>
          <p className="font-openSans text-[15px] sm:text-base mb-5 sm:mb-8 text-center">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <form
            onSubmit={handleFormSubmit}
            className="w-full flex md:flex-row flex-col justify-center"
          >
            <input
              type="email"
              placeholder="email@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className="md:max-w-[464px] font-bold md:flex-[0.7] font-raleway min-h-[55px] w-full
                text-primary text-[15px] sm:text-base outline-none md:mr-4 rounded-[5rem] px-4 py-3
                mb-3 sm:mb-4 md:mb-0"
            />
            <button
              disabled={email === "" || loading || success}
              className="md:flex-[0.3] flex justify-center items-center relative w-full md:w-fit
                bg-gradient-to-r from-cyan to-blue font-raleway text-[15px] sm:text-base
                font-bold rounded-[5rem] min-w-[180px] md:max-w-[210px] min-h-[55px] overflow-hidden
                p-2 transition-a px-transition-all 3 py-0.5 disabled:pointer-events-none"
            >
              <span
                className={`font-raleway font-bold transition-opaicty ease-linear ${
                  loading || success
                    ? "duration-150 delay-0"
                    : "delay-300 duration-[450ms]"
                } ${
                  loading || success
                    ? "opacity-0 pointer-events-none"
                    : "opacity-100"
                }`}
              >
                Get Started For Free
              </span>
              <span
                className={`font-raleway font-bold absolute w-1/2 left-0 right-0 transition-all duration-[450ms]
                ${success ? "translate-x-1/2" : "-translate-x-full"}`}
              >
                Success!
              </span>
              <span
                className={`font-raleway font-bold absolute w-1/2 left-0 right-0 transition-all duration-[450ms]
                ${loading ? "translate-x-1/2" : "translate-x-[200%]"}`}
              >
                Loading...
              </span>
            </button>
          </form>
        </div>
        <div className="w-full md:w-[95%] lg:w-full text-left mt-6 mb-12">
          <Logo />
        </div>
        <div
          className="w-full md:w-[95%] lg:w-full grid justify-start lg:justify-between flex-wrap
            lg:flex-nowrap gap-y-14 sm:gap-y-16 gap-x-10"
          style={{
            gridTemplateColumns:
              width <= breakpoints.lg
                ? width <= breakpoints.md
                  ? "1fr"
                  : "1fr 1fr 1fr"
                : "1fr 1fr 1fr 1fr 1fr"
          }}
        >
          <div className="min-w-[150px] max-w-[300px] flex items-start w-fit mx-0 lg:mx-auto">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-white mr-3.5 pt-[.3rem] text-[17px] sm:text-xl"
            />
            <p className="text-[15px] sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="w-fit mx-0 lg:mx-auto">
            <ul className="flex flex-col">
              <li className="flex items-center text-[15px] sm:text-base text-white mb-3.5">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-[17px] sm:text-xl text-white mr-3.5"
                />
                +1-543-123-4567
              </li>
              <li className=" flex items-center text-[15px] sm:text-base text-white mb-3.5">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-[17px] sm:text-xl text-white mr-3.5"
                />
                example@fylo.com
              </li>
            </ul>
          </div>
          <div className="w-fit mx-0 lg:mx-auto">
            <ul className="flex flex-col">
              <li className="w-[112px] text-white mb-3.5">
                <a
                  className="cursor-pointer text-[15px] sm:text-base transition-all
                    hover:font-semibold"
                >
                  About Us
                </a>
              </li>
              <li className="w-[112px] text-white mb-3.5">
                <a
                  className="cursor-pointer text-[15px] sm:text-base transition-all
                    hover:font-semibold"
                >
                  Jobs
                </a>
              </li>
              <li className="w-[112px] text-white mb-3.5">
                <a
                  className="cursor-pointer text-[15px] sm:text-base transition-all
                    hover:font-semibold"
                >
                  Press
                </a>
              </li>
              <li className="w-[112px] text-white mb-3.5">
                <a
                  className="cursor-pointer text-[15px] sm:text-base transition-all
                    hover:font-semibold"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div className="w-fit mx-0 lg:mx-auto">
            <ul className="flex flex-col">
              <li className="w-[112px] text-white mb-3.5">
                <a
                  className="cursor-pointer text-[15px] sm:text-base transition-all
                    hover:font-semibold"
                >
                  Contact Us
                </a>
              </li>
              <li className="w-[112px] text-white mb-3.5">
                <a
                  className="cursor-pointer text-[15px] sm:text-base transition-all
                    hover:font-semibold"
                >
                  Teams
                </a>
              </li>
              <li className="w-[112px] text-white mb-3.5">
                <a
                  className="cursor-pointer text-[15px] sm:text-base transition-all
                    hover:font-semibold"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex w-full justify-center md:justify-start md:w-fit mx-0 lg:mx-auto">
            <a className="group cursor-pointer mr-6">
              <span
                className="flex justify-center items-center w-9 h-9 border-2 border-white
                rounded-[50%] transition-all group-hover:border-cyan"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-[17px] sm:text-xl text-white transition-all group-hover:text-cyan"
                />
              </span>
            </a>
            <a className="group cursor-pointer mr-6">
              <span
                className="flex justify-center items-center w-9 h-9 border-2 border-white
                rounded-[50%] transition-all group-hover:border-cyan"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-[17px] sm:text-xl text-white transition-all group-hover:text-cyan"
                />
              </span>
            </a>
            <a className="group cursor-pointer mr-6">
              <span
                className="flex justify-center items-center w-9 h-9 border-2 border-white
                rounded-[50%] transition-all group-hover:border-cyan"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[17px] sm:text-xl text-white transition-all group-hover:text-cyan"
                />
              </span>
            </a>
          </div>
        </div>
        <div className="w-full text-white text-center text-[13px] sm:text-[14px] mt-12">
          Challenge by{" "}
          <a
            className="text-attribution"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            className="text-attribution"
            href="https://chikezieobinna.herokuapp.com"
          >
            Brandon
          </a>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
