import Link from "next/link";
import { Header } from "../components/layout";
import Image from "next/image";


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

function MyFace(){
    return(
        <Image
            src = "/images/the_man_himself.jpg"
            height = {317 *.5}
            width = {214 * .5}
            alt = "me"
        />
    );
}



export default function HomePage() {
    return (
        <>
        <Header pageTitle={"Home - Ryan Velez"}/>

        {/* this will be a navbar, use display grid */}
        <NavList></NavList>

        {/* this will be in a main */}
            {/* top */}

            <MyFace/>
            <h1>Ryan Velez</h1>
            <h3>Working on things!</h3>
            <p>
                I'm a soon-to-be graduate of Boston University, untested but full of energy and the drive to succeed.
            </p>
            <Link href = "/about">
                <button>More about me</button>
            </Link>

            {/* bottom */}

            <h2>Get in touch</h2>
            <p>
                From job offers to feedback on my website and anything else in-between, my inbox is always open!
                Feel free to say anything. 
            </p>
            <a href="mailto:ryanv2468@hotmail.com">
                <button>Contact Me</button>
            </a>
        
        {/* this will be in a footer */}
            {/* alternate navbar (use display grid), list of platforms, and copyright notice*/}
        </>
    )
}
