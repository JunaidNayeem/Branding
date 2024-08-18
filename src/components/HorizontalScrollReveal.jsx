import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollingText = ({className}) => {
  useEffect(() => {
    gsap.to(".textItem", {
      xPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".wrapper",
        markers: false,
        scrub: true,
      },
    });
  }, []);

  return (
    <div className={`wrapper w-full bg-black z-10 ${className}`}>
      <div className="boxe">
        <div className="box">
          <p className="textItem inline-block text-[5vw] whitespace-nowrap">
            Here is some text Here is some text Here is some text
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;
