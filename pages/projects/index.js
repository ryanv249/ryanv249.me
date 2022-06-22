import { getDatabase } from "../../notion";
import { PreviewPageLayout } from "../../components/layout";

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
            // sort by ID, newest projects first
            personal_previews: previews.filter(prev => ~prev.id & 1).sort((a,b) => b.id - a.id),
            school_previews: previews.filter(prev => prev.id & 1).sort((a,b) => b.id - a.id),
        },
        // make sure this is up-to-date every 60 seconds
        revalidate: 60,
    };

}

export default function PreviewPage({personal_previews, school_previews}){   
    return(
        <PreviewPageLayout
            personal_list={personal_previews}
            school_list={school_previews}
        />
    )
}