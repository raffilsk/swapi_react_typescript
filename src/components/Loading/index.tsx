import { Spinner } from "./styles"

export function Loading({children}: {children: string}) {
   return (
      <Spinner>
         <div className="textArea">{children}</div>
      </Spinner>
   )
}