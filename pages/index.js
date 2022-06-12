import Link from "next/link"
import { Header } from "../components/layout";


export function NavList({home}){
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
                <Link href = "/aboutMe">
                    <a>About Me</a>
                </Link>
            </p>

        </>
    );
}


export default function HomePage() {


    return (
        <>
        <Header pageTitle={"Ryan Velez Portfolio"}/>
        <NavList></NavList>
        

        </>
    )
}
