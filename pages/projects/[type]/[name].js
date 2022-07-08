import Link from 'next/link';

import Layout from '../../../components/layout';
import { ProjectContainer, ProjectHead, ProjectBody, ProjectFoot } from '../../../components/wrappers';

import { getDatabase } from '../../../notion';
import ImageGallery from 'react-image-gallery';
// https://github.com/xiaolin/react-image-gallery

/*
    since notion urls to files expire after 1 hour, I cant use static paths/props 
    need to use serverside to ensure that the link used in the webpage is still live 
    this solves the issue of needing to pull the database twice here, funnily enough 
*/

export async function getServerSideProps({res, params}){
    // image url dies after an hour. wait 59 minutes to fetch new and allow 50s of uptime before force refresh
    res.setHeader(
        'Cache-Control',
        'public, s-maxage= 3540, stale-while-revalidate=50'
    )
    // unfortunately, if i use query params, im stuck with an ugly url.
    // there might be a way to fix it, but id rather move on.. 
    // just grabbing whole database instead of specific page 

    // get the data from notion
    const data = await getDatabase()

    // select the project that this page is for
    const rawProject = data.filter(page => page.properties.name.title[0].plain_text === params.name)[0]
    
    // convert data from notion into easier format
    const cleanProject = {
        name: params.name,
        desc: rawProject.properties.fullDesc.rich_text[0].plain_text,
        link: rawProject.properties.link.url,
        images: rawProject.properties.imageList.files.map(
            (item) => {return ({original: item.file.url, thumbnail: item.file.url})}
        )
    }

    return{
        props: {project: cleanProject}
    }
}

export default function ProjectPage({project}){
    return(
        <Layout page = {project.name} onProjectPage={true}>
            <ProjectContainer>
                <ProjectHead>
                    <Link href = "/projects">
                        <a>Back to Projects</a>
                    </Link>
                
                    <h1>{project.name}</h1>

                </ProjectHead>

                <ProjectBody>
                    <h3>View this project&apos;s repo on Github:</h3>

                    <a href={project.link} target="_blank" rel="noopener noreferrer">Link</a>

                    <p>{project.desc}</p>
                </ProjectBody>

                <ProjectFoot>
                    <div>
                        <ImageGallery
                            items={project.images}
                            showPlayButton={false}
                        />
                    </div>
                </ProjectFoot>
            </ProjectContainer>
        </Layout>
    );
}

