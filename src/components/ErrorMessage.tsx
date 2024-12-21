import { ReactNode } from "react"

type ErrorMessageProps = {
  children: ReactNode
}

function ErrorMessage({children}: ErrorMessageProps) {
  return (
    <p>
      {children}
    </p>
  )
}

export default ErrorMessage