// about-us 부분만 적용되는 Layout

export default function AboutUsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        
        <div>
            {children}
            &copy; Next JS!
        </div>
    )
  }