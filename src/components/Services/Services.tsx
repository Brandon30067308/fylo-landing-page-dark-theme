import { FC } from "react";
import breakpoints from "../../breakpoints/breakpoints";
import useWindowDimensions from "../../hooks/useWindowDimensions";
/* icons */
import iconAccessAnywhere from "../../images/icon-access-anywhere.svg";
import iconAnyFile from "../../images/icon-any-file.svg";
import iconSecurity from "../../images/icon-security.svg";
import iconCollaboration from "../../images/icon-collaboration.svg";

const Services: FC = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="Services w-full flex flex-col items-center justify-start py-10 sm:py-14 md:py-20">
      <main
        className="grid justify-center gap-x-[15vw] gap-y-14 sm:gap-y-20 lg:px-14 md:px-6 px-3"
        style={{
          gridTemplateColumns: width <= breakpoints.md ? "1fr" : "1fr 1fr"
        }}
      >
        <div className="w-fit flex flex-col items-center justify-start">
          <div className="mb-4 min-h-[88px]">
            <img
              src={iconAccessAnywhere}
              alt="access_anywhere"
              className="max-w-xs"
            />
          </div>
          <h2 className="max-w-sm font-raleway font-bold my-1 sm:my-2 text-center text-xl text-[1.35rem]">
            Access your files, anywhere
          </h2>
          <p
            className="max-w-sm font-openSans my-0.5 sm:my-1 text-center text-[15px] sm:text-base
            tracking-[0.015]"
          >
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
        <div className="w-fit flex flex-col items-center justify-start">
          <div className="mb-4 min-h-[88px]">
            <img src={iconSecurity} alt="security" className="max-w-xs" />
          </div>
          <h2 className="max-w-sm font-raleway font-bold my-1 sm:my-2 text-center text-xl text-[1.35rem]">
            Security you can trust
          </h2>
          <p
            className="max-w-sm font-openSans my-0.5 sm:my-1 text-center text-[15px] sm:text-base
            tracking-[0.015]"
          >
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>
        <div className="w-fit flex flex-col items-center justify-start">
          <div className="mb-4 min-h-[88px]">
            <img
              src={iconCollaboration}
              alt="real_time_collaboration"
              className="max-w-xs"
            />
          </div>
          <h2 className="max-w-sm font-raleway font-bold my-1 sm:my-2 text-center text-xl text-[1.35rem]">
            Real-time collaboration
          </h2>
          <p
            className="max-w-sm font-openSans my-0.5 sm:my-1 text-center text-[15px] sm:text-base
            tracking-[0.015]"
          >
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <div className="w-fit flex flex-col items-center justify-start">
          <div className="mb-4 min-h-[88px]">
            <img src={iconAnyFile} alt="store_any_file" className="max-w-xs" />
          </div>
          <h2 className="max-w-sm font-raleway font-bold my-1 sm:my-2 text-center text-xl text-[1.35rem]">
            Store any type of file
          </h2>
          <p
            className="max-w-sm font-openSans my-0.5 sm:my-1 text-center text-[15px] sm:text-base
            tracking-[0.015]"
          >
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Services;
