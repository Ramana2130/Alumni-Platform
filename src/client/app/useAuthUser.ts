import { useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"

interface TokenPayload {
  id: number
  email: string
  role: string
  exp: number
}

export function useAuthUser() {
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      try {
        const decoded = jwtDecode<TokenPayload>(token)
        setEmail(decoded.email)
      } catch (err) {
        console.error("Invalid token", err)
      }
    }
  }, [])

  return email
}
