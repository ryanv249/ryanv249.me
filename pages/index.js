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
            // projects
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

// function DisplayProjectDebug({p}){
//     console.log(p)

//     const images = p.imageList.map((img) =>{
//         return ({original: img, thumbnail: img})
//     })
//     console.log(p.imageList)
//     console.log(images)
    
//     return(
//         <>
            
//             <p>{p.type}</p>
//             <p>{p.name}</p>
//             <p>{p.briefSum}</p>
//             <p>{p.fullDesc}</p>
//             <p>{p.codeLink}</p>
//             <p>{p.imageList}</p>
//             {/* <p>{images}</p> */}
//         </>
//     );
// }


export default function HomePage({personal_previews, school_previews}) {
    // const p = projects.filter(pr => pr.id === 1)[0]
    // console.log(p)

    return (
        <>
        <Head>
            <title>Ryan Velez Portfolio</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <NavList>hello </NavList>
        {/* <DisplayProjectDebug p = {p}/>   */}
        <ProjectPreviews
            personal_list={personal_previews}
            school_list={school_previews}
        />
        

        </>
    )
}
