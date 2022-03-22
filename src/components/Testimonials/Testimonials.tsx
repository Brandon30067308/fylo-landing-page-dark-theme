import { FC } from "react";
import profileImg1 from "../../images/profile-1.jpg";
import profileImg2 from "../../images/profile-2.jpg";
import profileImg3 from "../../images/profile-3.jpg";
import quotesBg from "../../images/bg-quotes.png";

const Testimonials: FC = () => {
  return (
    <div
      className="Testimonials w-full flex items-start justify-center md:pb-20 sm:pb-14 pb-10
        pt-[75px] sm:pt-[91px] md:pt-[115px]"
    >
      <div className="w-full max-w-full lg:max-w-[94vw] mx-auto">
        <div
          className="min-w-full sm:min-w-fit w-full mx-auto sm:w-fit lg:w-full max-w-[82vw] relative flex flex-col
            lg:flex-row lg:justify-between items-center lg:items-start px-3 sm:px-8"
        >
          {/* quotes bg */}
          <div className="absolute left-[20px] -top-[35px]">
            <img src={quotesBg} alt="quotes_bg" />
          </div>
          <div
            className="min-h-[175px] max-w-[410px] bg-primaryTestimonials rounded-[.3rem] py-5 sm:py-8
              lg:mr-8 px-3 xs:px-5 sm:px-7 flex mb-6 lg:mb-0 flex-col justify-start items-start shadow z-10"
          >
            <p className="font-openSans mb-6 text-left text-[15px] sm:text-base">
              {" "}
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex justify-start items-center">
              <img
                src={profileImg1}
                alt="profile_image_1"
                className="rounded-[50%] w-9 sm:w-10 h-9 sm:h-10 mr-3 sm:mr-4"
              />
              <div>
                <h3 className="text-sm font-semibold font-raleway mb-0.5">
                  Satish Patel
                </h3>
                <p className="font-raleway text-sm tracking-wide">
                  Founder {"&"} CEO, Huddle
                </p>
              </div>
            </div>
          </div>
          <div
            className="min-h-[175px] max-w-[410px] bg-primaryTestimonials rounded-[.3rem] py-5 sm:py-8
              lg:mr-8 px-3 xs:px-5 sm:px-7 flex mb-6 lg:mb-0 flex-col justify-start items-start shadow"
          >
            <p className="font-openSans mb-6 text-left text-[15px] sm:text-base">
              {" "}
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex justify-start items-center">
              <img
                src={profileImg2}
                alt="profile_image_2"
                className="rounded-[50%] w-9 sm:w-10 h-9 sm:h-10 mr-3 sm:mr-4"
              />
              <div>
                <h3 className="text-sm font-semibold font-raleway mb-0.5">
                  Bruce McKenzie
                </h3>
                <p className="font-raleway text-sm tracking-wide">
                  Founder {"&"} CEO, Huddle
                </p>
              </div>
            </div>
          </div>
          <div
            className="min-h-[175px] max-w-[410px] bg-primaryTestimonials rounded-[.3rem] py-5 sm:py-8
              px-3 xs:px-5 sm:px-7 flex flex-col justify-start items-start shadow"
          >
            <p className="font-openSans mb-6 text-left text-[15px] sm:text-base">
              {" "}
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex justify-start items-center">
              <img
                src={profileImg3}
                alt="profile_image_3"
                className="rounded-[50%] w-9 sm:w-10 h-9 sm:h-10 mr-3 sm:mr-4"
              />
              <div>
                <h3 className="text-sm font-semibold font-raleway mb-0.5">
                  Iva Boyd
                </h3>
                <p className="font-raleway text-sm tracking-wide">
                  Founder {"&"} CEO, Huddle
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
