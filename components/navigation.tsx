// 클라이언트 컴포넌트 ("use client": Hydration을 사용하기 위해 추가)
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
    const path = usePathname();
    const[count,setCount] = useState(0);

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "★" : ""}
                </li>
                <li>
                    <Link href="/about-us">About Us</Link> {path === "/about-us" ? "★" : ""}
                </li>
                <li>
                    <Link href="/about-us/company/jobs/sales">Sales</Link> {path === "/about-us/company/jobs/sales" ? "★" : ""}
                </li>
                <li>
                    <button onClick={() => setCount((c) => c + 1)}>{count}</button>
                </li>
            </ul>
        </nav>
    );
}