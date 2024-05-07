import Navigation from "../components/navigation"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies", // %s: 각 페이지 title
    default: "Next Movies", // 기본값
  },
  description: 'The Best Movies',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}