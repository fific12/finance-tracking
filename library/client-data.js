'use client'

import { CookiesProvider } from "react-cookie"

function ClientCookiesProvider({children}) {
  return (
    <CookiesProvider>
      {children}
    </CookiesProvider>
  )
}

export default ClientCookiesProvider