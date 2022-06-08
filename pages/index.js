import Link from "next/link"
import Head from "next/head"
import {ProjectPreviewList} from "../components/layout"
import { p_projects, s_projects } from "../data";

export async function getStaticProps(){

    // right here can use await fetch (data url) and then await res.json() to get data
    // set up database later?

    return{
        props: {
            personal_projects: p_projects,
            school_projects: s_projects
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


export default function HomePage({personal_projects, school_projects}) {
    return (
        <>
        <Head>
            <title>Ryan Velez Portfolio</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <NavList>hello </NavList>
        <ProjectPreviewList
            personal_list={personal_projects}
            school_list={school_projects}
        />
        

        </>
    )
}
