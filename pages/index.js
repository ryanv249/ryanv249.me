import Link from "next/link";
import { HomePageLayout } from "../components/layout";

export function NavList(){
    return (
        <>
            <p>
                <Link href = "/">
                    <a>Go to Home</a>
                </Link>
            </p>
            <p>
                <Link href = "/projects">
                    <a>Go to Projects</a>
                </Link>
            </p>
            <p>
                <Link href = "/about">
                    <a>About Me</a>
                </Link>
            </p>

        </>
    );
}




export default function HomePage() {
    return (
        <HomePageLayout/>
    )
}
