import { loading } from "../assets";
import Typewriter from "typewriter-effect";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img
        src={loading}
        alt="Loading"
        className="w-5 h-5 mr-4 animate-spin pointer-events-none select-none"
      />
      <span className="animate-pulse">
        <Typewriter
          options={{
            strings: [
              " Developing highly interactive websites",
              "Progressive Web Applications",
              "Integration of third party services",
              "FrontEnd",
              "Backend",
              "Logical Algos",
              "Data Structure",
            ],
            autoStart: true,
            loop: true,
            delay: 25,
          }}
        />
      </span>
    </div>
  );
};

export default Generating;
