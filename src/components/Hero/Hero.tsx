import { FC } from "react";
import Nav from "../Nav/Nav";
import illustrationIntro from "../../images/illustration-intro.png";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import breakpoints from "../../breakpoints/breakpoints";

const Hero: FC = () => {
  const { width } = useWindowDimensions();

  return (
    <div
      className="Hero relative w-full bg-primaryIntro flex items-center justify-center
      pb-10 sm:pb-14 md:pb-20"
    >
      <div
        className="w-full max-w-[2160px] flex flex-col items-center justify-start z-10 lg:px-14
      sm:px-6 px-3"
      >
        <Nav />
        <main className="w-full flex flex-col items-center justify-center min-h-[600px] px-3 sm:px-8 mt-6">
          <img
            className="sm:max-w-[400px] md:max-w-[575px]"
            src={illustrationIntro}
            alt="illustration_intro"
          />
          <div className="w-full font-raleway text-white">
            <h1 className="max-w-[38rem] font-bold text-[1.6rem] sm:text-[2rem] my-4 sm:my-7 text-center mx-auto">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p
              className="md:max-w-[32rem] tracking-[0.015em] font-openSans text-[15px] sm:text-base text-center
              mx-auto my-2.5 sm:my-4"
            >
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers.
            </p>
            <div className="w-full text-center">
              <button
                className="group bg-gradient-to-r from-cyan to-blue font-raleway text-[15px] sm:text-base
                  font-bold rounded-[5rem] text-center w-[90%] max-w-[300px] h-[55px] mx-auto mt-4"
              >
                Get Started
              </button>
            </div>
          </div>
        </main>
      </div>
      {/* wave pattern */}
      <div className="absolute bottom-0 left-0">
        {width >= breakpoints["3xl"] ? (
          <></>
        ) : width <= breakpoints["2xl"] ? (
          width <= breakpoints.md ? (
            width <= breakpoints.sm ? (
              <svg
                width="480"
                height="500"
                viewBox="0 0 480 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_102_8)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 460.974C30.2787 455.006 58.7353 404.877 85.3703 310.588C125.323 169.154 116.67 117.109 183.002 165.575C249.333 214.039 243.683 182.293 286.333 70.3008C328.983 -41.6925 356.667 -16.0622 382.667 120.041C408.667 256.146 433 301.439 477.333 351.42C506.889 384.74 508.01 1296.06 480.697 3085.37H0V460.976V460.974Z"
                    fill="#181F2B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_102_8">
                    <rect width="480" height="500" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                width="960"
                height="450"
                viewBox="0 0 960 450"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_102_8)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 414.876C60.5573 409.505 117.471 364.389 170.741 279.529C250.645 152.238 233.34 105.398 366.003 149.017C498.667 192.635 487.367 164.064 572.667 63.2707C657.967 -37.5233 713.333 -14.456 765.333 108.037C817.333 230.531 866 271.295 954.667 316.278C1013.78 346.266 1016.02 1166.45 961.394 2776.84H0V414.878V414.876Z"
                    fill="#181F2B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_102_8">
                    <rect width="960" height="450" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )
          ) : (
            <svg
              width="1600"
              height="449"
              viewBox="0 0 1600 449"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_102_8)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 413.954C100.929 408.595 195.784 363.579 284.568 278.908C417.742 151.9 388.9 105.164 610.006 148.686C831.111 192.207 812.278 163.699 954.444 63.13C1096.61 -37.44 1188.89 -14.424 1275.56 107.797C1362.22 230.019 1443.33 270.692 1591.11 315.575C1689.63 345.496 1693.37 1163.86 1602.32 2770.67H0V413.956V413.954Z"
                  fill="#181F2B"
                />
              </g>
              <defs>
                <clipPath id="clip0_102_8">
                  <rect width="1600" height="449" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )
        ) : (
          <svg
            width="4250"
            height="449"
            viewBox="0 0 4250 449"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_102_8)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 413.954C268.092 408.595 520.052 363.579 755.883 278.908C1109.63 151.9 1033.02 105.164 1620.33 148.686C2207.64 192.207 2157.61 163.699 2535.24 63.13C2912.87 -37.44 3157.99 -14.424 3388.19 107.797C3618.4 230.019 3833.85 270.692 4226.39 315.575C4488.08 345.496 4498 1163.86 4256.17 2770.67H0V413.956V413.954Z"
                fill="#181F2B"
              />
            </g>
            <defs>
              <clipPath id="clip0_102_8">
                <rect width="4250" height="449" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </div>
    </div>
  );
};

export default Hero;
