import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import MenuSvg from "../assets/svg/MenuSvg";
import { navigation } from "../constants";
import useActiveSection from "../hooks/useActiveSection";
import Button from "./Button";
import { HambugerMenu } from "./design/Header";
import ScrollProgress from "./ScrollProgress";

const SECTION_IDS = ["about", "experience", "featured-work", "skills", "contact"];

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:bg-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <ScrollProgress />

      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] text-[24px]" href="#hero">
          Junaid Nayeem
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => {
              const isActive = !item.external && item.url === `#${activeId}`;

              return (
                <a
                  key={item.id}
                  href={item.url}
                  target={item.external ? "_blank" : "_self"}
                  rel={item.external && "noreferrer noopener"}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile && "lg:hidden"
                  } px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold ${
                    isActive ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                  {isActive && (
                    <span
                      className="hidden lg:block absolute left-1/2 -bottom-1 w-1.5 h-1.5 -translate-x-1/2 rounded-full bg-color-1"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </div>

          <HambugerMenu />
        </nav>

        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
          className="hidden lg:flex items-center gap-2 px-3 py-1.5 font-code text-xs text-n-3 border border-n-6 rounded-lg transition-colors hover:text-n-1 hover:border-n-5"
          aria-label="Open command palette"
        >
          <span>Search</span>
          <kbd className="px-1.5 py-0.5 bg-n-7 rounded text-[0.625rem] text-n-2">
            ⌘K
          </kbd>
        </button>

        <Button
          onClick={toggleNavigation}
          className="ml-auto lg:hidden"
          px="px-3"
          magnetic={false}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
