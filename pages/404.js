import React, { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const NotFound = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      router.push("/")
    }, 3000)
  }, [])

  return (
    <div className="not-found">
      <h1>Oooooops...</h1>
      <h2>Page cannot be found</h2>
      <p>
        Go back to{" "}
        <Link href="/">
          <a>Home Page</a>
        </Link>{" "}
      </p>
    </div>
  )
}

export default NotFound
