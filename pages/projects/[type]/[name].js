import { ProjectPage } from "../../../components/layout"
import { getDatabase, getPage} from "../../../notion"

/*
    since notion urls to files expire after 1 hour, I cant use static paths/props 
    need to use serverside to ensure that the link used in the webpage is still live 
    this solves the issue of needing to pull the database twice here, funnily enough 
*/

export async function getServerSideProps({res, params, query}){
    // image url dies after an hour. 59 minutes and 50 seconds before it gets replaced
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


export default function DisplayProjectInfo({project}){
    return(
        <ProjectPage
            name = {project.name}
            desc = {project.fullDesc}
            link = {project.link}
            images = {project.images}
        />
    )
}