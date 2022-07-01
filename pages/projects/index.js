import Link from 'next/link';

import Layout from '../../components/layout';
import { PreviewGroup, Preview } from '../../components/wrappers';

import { getDatabase } from '../../notion';

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

export default function PreviewPage({school_previews, personal_previews}){   
    return(
        <Layout page = "Projects" onProjectPage={false}>
            <PreviewGroup>
                <h2>School Projects:</h2>
                {school_previews.map((prev) => (
                    <Preview mapKey = {prev.name}>
                        <Link href={"/projects/school/" + prev.name}>
                            <a>{prev.name}</a>
                        </Link>
                        <p>{prev.altDesc}</p>
                    </Preview>
                ))}
            </PreviewGroup>

            <PreviewGroup>
                <h2>Personal Projects:</h2>
                {personal_previews.map((prev) => (
                    <Preview mapKey = {prev.name}>
                        <Link href={"/projects/personal/" + prev.name}>
                            <a>{prev.name}</a>
                        </Link>
                        <p>{prev.altDesc}</p>
                    </Preview>
                ))}
            </PreviewGroup>

        </Layout>
    )
}