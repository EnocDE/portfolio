import { CgMenu } from "react-icons/cg";
import { SOCIAL_MEDIA } from "../data/index";
import useMenu from "../hooks/useMenu";

export default function ListSocialMedia() {
  const {changeShowMenu} = useMenu()
  return (
    <ul>
      <button onClick={changeShowMenu} className="block md:hidden bg-transparent">
        <CgMenu size={25} />
      </button>
      <div
        className={`bg-white dark:bg-[#242424] md:dark:bg-transparent md:bg-transparent w-fit h-auto hidden md:flex gap-5 delay-150 duration-300 ease-out`}
      >
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
          </li>
        ))}
      </div>
    </ul>
  );
}
