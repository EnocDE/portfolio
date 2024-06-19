import { ReactNode } from "react"

interface Props {
  children: ReactNode;
  url: string
}

export default function ProjectButton({children, url} : Props) {
  return (
    <a
          className="shadow-animated mt-2 px-3 py-2 border-2 border-[#242424] hover:translate-x-[10px] hover:translate-y-[10px] hover:shadow-animated-reverse transition-all ease-linear rounded-lg dark:shadow-neutral-300 dark:border-neutral-300 font-semibold active:scale-95"
          href={url}
        >
          {children}
        </a>
  )
}
