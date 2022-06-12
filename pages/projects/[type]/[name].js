import { ProjectPage } from "../../../components/layout"
import { getPage} from "../../../notion"

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
    // because using serverside, can use query params to get specific page 
    // select the project that this page is for
    const data = await getPage(query.id);
    
    // convert data from notion into easier format
    const cleanProject = {
        name: params.name,
        desc: data.properties.fullDesc.rich_text[0].plain_text,
        link: data.properties.link.url,
        images: data.properties.imageList.files.map(
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