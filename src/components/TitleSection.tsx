import { ReactNode } from "react";

export default function TitleSection({children} : {children: ReactNode}) {
  return (
    <h2 className="py-10 text-4xl md:text-5xl font-bold text-center">
      {children}
    </h2>
  )
}
