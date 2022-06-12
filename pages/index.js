import Link from "next/link"
import Head from "next/head"


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
        <Head>
            <title>Ryan Velez Portfolio</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <NavList></NavList>
        

        </>
    )
}
