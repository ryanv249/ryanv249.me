import Link from "next/link"
import Head from "next/head"
import { ProjectPreviews } from "../components/layout"
import { previews, projects } from "../data";

export async function getStaticProps(){

    // right here can use await fetch (data url) and then await res.json() to get data
    // set up database later?

    return{
        // maybe set up data differently to avoid pulling images here? 
        props: {
            personal_previews: previews.filter(prev => prev.type === "personal"),
            school_previews: previews.filter(prev => prev.type === "school"),
            projects
        }
    }

}

function NavList(){
    return (
        <>
            <p>
                <Link href = "/personal">
                    <a>Go to personal projects</a>
                </Link>
            </p>
            <p>
                <Link href = "/school">
                    <a>Go to school projects</a>
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


export default function HomePage({personal_previews, school_previews}) {


    return (
        <>
        <Head>
            <title>Ryan Velez Portfolio</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <NavList>hello </NavList>
        <ProjectPreviews
            personal_list={personal_previews}
            school_list={school_previews}
        />
        

        </>
    )
}
