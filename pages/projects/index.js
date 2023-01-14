import Link from 'next/link';

import Layout from '../../components/layout';
import { 
    FlexContainer, 
    PreviewContainer, PreviewHead, PreviewBody, PreviewList, PreviewGroup, Preview,
} from '../../components/wrappers';

import { getDatabase } from '../../notion';

import useScrollbarSize from 'react-scrollbar-size';
// https://github.com/shawnmcknight/react-scrollbar-size

export async function getStaticProps(){
    // get data from notion to display all previews 
    const data = await getDatabase();

    // build the preview object array
    // see projects/[type]/[name].js for info on normalName vs urlName
    const previews = (data.map((page) => {return({
                id: page.properties.id.number,
                normalName: page.properties.name.title[0].plain_text,
                urlName: page.properties.urlName.rich_text[0].plain_text,
                altDesc: page.properties.altDesc.rich_text[0].plain_text,
                pageId: page.id
            }
        )
    }))

    return{
        props: {
            // even IDs are solo projects
            // checking bit instead of using modulus because of internet nerds 
            // sort by ID, newest projects first
            solo_previews: previews.filter(prev => ~prev.id & 1).sort((a,b) => b.id - a.id),
            group_previews: previews.filter(prev => prev.id & 1).sort((a,b) => b.id - a.id),
        },
        // make sure this is up-to-date every 60 seconds
        revalidate: 60,
    };

}

export default function PreviewPage({group_previews, solo_previews}){   
    // used to make sure previews are centered on all devices
    const { height, width } = useScrollbarSize();
    
    return(
        <Layout pageName = "Projects">
            <PreviewContainer>
                <PreviewHead>
                    <FlexContainer>
                        <h1>My Work</h1>
                    </FlexContainer>

                    <FlexContainer>
                        <p>
                            These are the various projects which I&apos;ve worked on.
                            For more information on one, click its name!
                        </p>
                    </FlexContainer>
                </PreviewHead>

                <PreviewBody>
                    <PreviewGroup>
                        <FlexContainer>
                            <h2>Group Projects</h2> 
                        </FlexContainer>

                        <PreviewList>
                            {group_previews.map((prev) => (
                                <Preview key = {prev.normalName} scrollShift = {width}>
                                    <FlexContainer>
                                        <Link href={"/projects/group/" + prev.urlName}>
                                            <a>{prev.normalName}</a>
                                        </Link>
                                    </FlexContainer>

                                    <FlexContainer>
                                        <p>{prev.altDesc}</p> 
                                    </FlexContainer>
                                </Preview>
                            ))}
                        </PreviewList>
                    </PreviewGroup>

                    <PreviewGroup>
                        <FlexContainer>
                            <h2>Solo Projects</h2>
                        </FlexContainer>

                        <PreviewList>
                            {solo_previews.map((prev) => (
                                <Preview key = {prev.normalName} scrollShift = {width}>
                                    <FlexContainer>
                                        <Link href={"/projects/solo/" + prev.urlName}>
                                            <a>{prev.normalName}</a>
                                        </Link>
                                    </FlexContainer>

                                    <FlexContainer>
                                        <p>{prev.altDesc}</p>
                                    </FlexContainer>
                                </Preview>
                            ))}
                        </PreviewList>
                    </PreviewGroup>
                </PreviewBody>
            </PreviewContainer>
        </Layout>
    )
}