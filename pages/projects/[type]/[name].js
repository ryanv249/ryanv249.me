import Link from 'next/link';

import Layout from '../../../components/layout';
import {
    FlexContainer,  
    ProjectContainer, ProjectHead, ProjectButton, ProjectBody, ProjectFoot} from '../../../components/wrappers';

import { getDatabase } from '../../../notion';
import ImageGallery from 'react-image-gallery';
// https://github.com/xiaolin/react-image-gallery
import useScrollbarSize from 'react-scrollbar-size';
// https://github.com/shawnmcknight/react-scrollbar-size

import { BsArrowLeft } from 'react-icons/bs'
import { useEffect, useState } from 'react';

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
    /* 
       notion has url and normal 'versions' of name.  (e.g., url has - while normal has ' ')
       url version used to route, so we need to pick correct data based on it (params.name contains url version)
       normal version used in all displays. (e.g., project previews, page title)
       it's params.name because the slug is [name].js
    */
    const rawProject = data.filter(page => page.properties.urlName.rich_text[0].plain_text === params.name)[0]
    
    // convert data from notion into easier format
    const cleanProject = {
        normalName: rawProject.properties.name.title[0].plain_text,
        urlName: params.name,
        desc: rawProject.properties.fullDesc.rich_text[0].plain_text,
        git: rawProject.properties.git.url,
        showcase: rawProject.properties.showcase.url,
        images: rawProject.properties.imageList.files.map(
            (item) => {return ({original: item.file.url, thumbnail: item.file.url})}
        ),
        tech: rawProject.properties.techList.rich_text[0].plain_text,
    }

    return{
        props: {project: cleanProject}
    }
}

export default function ProjectPage({project}){
    const { height, width } = useScrollbarSize();

    // on mobile, disable page scrolling while in fullscreen 
    // no effect on computer (thanks scrollbarsize)
    const [ inFullScreen, setInFullScreen ] = useState(false);

    useEffect(() => {
        if(width === 0){
            inFullScreen
            ? 
                document.body.style.overflow = 'hidden' 
            : 
                document.body.style.overflow = null 
        }

    });

    // if this project has a live webpage, display the link 
    let hasLink = project.showcase !== null
          
    return(
        <Layout pageName = {project.normalName}>
            <ProjectContainer>
                <ProjectHead>
                    <ProjectButton>
                        <Link href = "/projects">
                            <a>
                                <BsArrowLeft />
                            </a>
                        </Link>
                    </ProjectButton>
                    
                    <FlexContainer>
                        <h1>{project.normalName}</h1>
                    </FlexContainer>
                </ProjectHead>

                <ProjectBody>
                    <FlexContainer>
                        <p>
                            {project.desc} 
                        </p>
                    </FlexContainer>

                    <FlexContainer>
                        <h2>
                            TECHNOLOGIES UTILIZED
                        </h2>
                    </FlexContainer>

                    <FlexContainer>
                        <h3>
                            {project.tech}
                        </h3>
                    </FlexContainer>

                    <FlexContainer>
                        <a href={project.git} target="_blank" rel="noopener noreferrer">
                            View Git Repo
                        </a>
                    </FlexContainer>

                    {hasLink && 
                        <FlexContainer>
                            <a href={project.showcase} target="_blank" rel="noopener noreferrer">
                                View Project
                            </a>
                        </FlexContainer>
                    }
                </ProjectBody>

                <ProjectFoot>
                    <div>
                        <ImageGallery
                            items={project.images}
                            showPlayButton={false}
                            // don't display nav buttons on mobile 
                            showNav={width > 0}
                            onScreenChange = {() => {setInFullScreen(!inFullScreen)}}
                            // on mobile, don't use browser fullscreen
                            useBrowserFullscreen = {width > 0}
                        />
                    </div>
                </ProjectFoot>
            </ProjectContainer>
        </Layout>
    );
}

