import { FC } from "react";
import illustrationStayProductive from "../../images/illustration-stay-productive.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Banner: FC = () => {
  return (
    <div className="Banner w-full flex items-start justify-center py-10 sm:py-14 md:py-20">
      <div
        className="w-full max-w-[2160px] flex flex-col lg:flex-row justify-center
          items-center lg:px-14 sm:px-6 px-3"
      >
        <div className="mr-0 lg:mr-12">
          <img
            src={illustrationStayProductive}
            alt="stay_productive_illustration"
            className="max-w-[300px] sm:max-w-[380px] md:max-w-[625px]"
          />
        </div>
        <div className="flex flex-col justify-center max-w-[500px] lg:max-w-[30%]">
          <h1 className="font-raleway font-bold text-[1.6rem] sm:text-[2rem] sm:mt-4 mt-6 mb-2 sm:mb-4">
            Stay productive, wherever you are.
          </h1>
          <p className="my-1 font-openSans text-[15px] sm:text-base">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
            <span className="my-4" />
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <button
            className="group w-fit text-[15px] sm:text-base flex tracking-wide text-cyan
            border-b-[1px] border-b-cyan py-2 transition-all hover:border-white hover:text-white"
          >
            See how Fylo works
            <div
              className="flex items-center justify-center bg-cyan w-[25px] h-[25px]
                rounded-[50%] text-base ml-2 transition-all group-hover:bg-white"
            >
              <FontAwesomeIcon icon={faArrowRight} className="text-primary" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
