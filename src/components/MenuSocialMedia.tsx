import React from "react";
import { useEffect } from "react";
import { SOCIAL_MEDIA } from "../data/index";
import useMenu from "../hooks/useMenu";

const trackWindowResize =
  (setShowMenu: React.Dispatch<React.SetStateAction<boolean>>) => () => {
    if (window.innerWidth > 768) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };

const disableScroll = () => {
  document.body.classList.add("overflow-y-hidden");
  document.body.classList.add("overflow-x-hidden");
  document.body.classList.add("h-screen");
};

const allowScroll = () => {
  document.body.classList.remove("overflow-y-hidden");
  document.body.classList.remove("overflow-x-hidden");
  document.body.classList.remove("h-screen");
};

export default function MenuSocialMedia() {
  const {showMenu, setShowMenu, changeShowMenu} = useMenu()
  useEffect(() => {
    if (window.innerWidth <= 768 && showMenu) {
      disableScroll();
    } else {
      allowScroll();
    }
    window.addEventListener("resize", trackWindowResize(setShowMenu));
    return () =>
      window.removeEventListener("resize", trackWindowResize(setShowMenu));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showMenu]);

  return (
    <ul>
      <div
        className={`fixed md:hidden z-20 bg-white dark:bg-[#242424] md:dark:bg-transparent md:bg-transparent h-screen inset-0 flex gap-10 justify-center items-center flex-col md:flex-row transition-transform delay-150 duration-300 ease-out transform-gpu ${
          showMenu ? "translate-x-0" : "translate-x-[150%]"
        } md:translate-x-0`}
      >
        <button
          onClick={changeShowMenu}
          className="block md:hidden absolute top-4 right-4 font-bold h-10 w-10 text-4xl bg-transparent"
        >
          ×
        </button>
        <h3 className="font-bold text-2xl block md:hidden">Mis Redes</h3>
        {SOCIAL_MEDIA.map((social) => (
          <li
            className="hover:cursor-pointer hover:scale-125 transition-all relative group flex flex-col"
            key={social.tag}
          >
            <a
              className="mx-auto text-center"
              href={social.href}
              target="_blank"
            >
              {social.icon}
            </a>
            <p className="inline-block transition-opacity opacity-0 group-hover:opacity-100 md:hidden">
              {social.tag}
            </p>
          </li>
        ))}
      </div>
    </ul>
  );
}
