import { ReactNode } from "react";

export default function TitleSection({children} : {children: ReactNode}) {
  return (
    <h2 className="py-10 text-6xl font-bold text-center">
      {children}
    </h2>
  )
}
