import Link from 'next/link';

import Layout from '../../../components/layout';
import {
    TextContainer, LinkContainer, 
    ProjectContainer, ProjectHead, ProjectBody, ProjectFoot} from '../../../components/wrappers';

import { getDatabase } from '../../../notion';
import ImageGallery, {onScreenChange} from 'react-image-gallery';
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
    const rawProject = data.filter(page => page.properties.name.title[0].plain_text === params.name)[0]
    
    // convert data from notion into easier format
    const cleanProject = {
        name: params.name,
        desc: rawProject.properties.fullDesc.rich_text[0].plain_text,
        link: rawProject.properties.link.url,
        images: rawProject.properties.imageList.files.map(
            (item) => {return ({original: item.file.url, thumbnail: item.file.url})}
        ),
        tech: rawProject.properties.techList.rich_text[0].plain_text
    }

    return{
        props: {project: cleanProject}
    }
}

export default function ProjectPage({project}){
    const { height, width } = useScrollbarSize();

    // make fullscreen swipe harder on mobile
    // no effect on computer (uses mouse)
    const [ inFullScreen, setInFullScreen ] = useState(false);
    const [ swipeDifficulty, setSwipeDifficulty] = useState(30);

    // on mobile, disable page scrolling while in fullscreen 
    // also, make swiping more difficult (to make zoom easier)
    useEffect(() => {
        if(width === 0){
            inFullScreen
            ? 
                [
                    setSwipeDifficulty(60),
                    document.body.style.overflow = 'hidden' 
                ]
            : 
                [
                    setSwipeDifficulty(30),
                    document.body.style.overflow = null 
                ]
        }

    });

    return(
        <Layout page = {project.name}>
            <ProjectContainer>
                <ProjectHead>
                    <LinkContainer>
                        <Link href = "/projects">
                            <a>
                                <BsArrowLeft />
                            </a>
                        </Link>
                    </LinkContainer>
                    
                    <TextContainer>
                        <h1>{project.name}</h1>
                    </TextContainer>
                </ProjectHead>

                <ProjectBody>
                    <TextContainer>
                        <p>
                            {project.desc} 
                        </p>
                    </TextContainer>

                    <TextContainer>
                        <h2>
                            TECHNOLOGIES UTILIZED:
                        </h2>
                    </TextContainer>

                    <TextContainer>
                        <h3>
                            {project.tech}
                        </h3>
                    </TextContainer>

                    <LinkContainer>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            Go to project repo
                        </a>
                    </LinkContainer>
                </ProjectBody>

                <ProjectFoot>
                    <div>
                        <ImageGallery
                            items={project.images}
                            showPlayButton={false}
                            // don't display nav buttons on mobile 
                            showNav={width > 0}
                            swipeThreshold = {swipeDifficulty}
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

