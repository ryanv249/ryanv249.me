import Link from "next/link"
import Head from "next/head"
import { Header, ProjectPreviews } from "../../components/layout"
import { getDatabase } from "../../notion"
import { NavList } from ".."

export async function getStaticProps(){
    // get data from notion to display all previews 
    const data = await getDatabase();

    // build the preview object array
    const previews = (data.map((page) => {return({
                id: page.properties.id.number,
                name: page.properties.name.title[0].plain_text,
                altDesc: page.properties.altDesc.rich_text[0].plain_text,
                pageId: page.id
            }
        )
    }))

    return{
        props: {
            // even IDs are personal projects
            // checking bit instead of using modulus because of internet nerds 
            personal_previews: previews.filter(prev => ~prev.id & 1),
            school_previews: previews.filter(prev => prev.id & 1),
        },
        // make sure this is up-to-date every 60 seconds
        revalidate: 60,
    };

}


export default function ProjectPreviewPage({personal_previews, school_previews}){   
    return(
        <>
            <Header pageTitle={"Projects - Ryan Velez"}/>
            <NavList></NavList>
            <ProjectPreviews
                personal_list={personal_previews}
                school_list={school_previews}
            />
        </>
    )
}