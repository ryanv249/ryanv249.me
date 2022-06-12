import { ProjectPage } from "../../../components/layout"
import { getDatabase, getProject } from "../../../notion"
import { useRouter } from "next/router"
import { useEffect } from "react"

export async function getStaticPaths(){
    // get data from notion to build paths
    const data = await getDatabase();

    // build pathnames from the project id and name
    const paths = data.map(page => {return{
        params: {
                // even id === personal project
                type: (~page.properties.id.number & 1 ? "personal" : "school"),
                name: page.properties.name.title[0].plain_text
            }
        }
    })
    
    return{
        paths,
        fallback: false 
        // fallback pages unimportant for now?
    }

}

export async function getStaticProps({params}){
    /*
        all my data is in the page properties, not blocks. change eventually?


        OKAY. so after a couple hours of trying things out, I surrender.
        Instead of breaking my back to find some workaround to avoid pulling all data again,
        I will simply pull the entire database and access the page properties directly like I did with the previews

        Next does not support passing data between getStaticPaths and getStaticProps. 

        I was trying to do some weird hacky methods to get around this, but to be honest,
        it seriously doesn't matter; my database is pretty small. 

        !!! change this if next ever allows me to pass page id through params directly !!!
    */
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

    console.log(project)

    return(
        <ProjectPage
            name = {project.name}
            desc = {project.fullDesc}
            link = {project.link}
            images = {project.images}
        />
    )
}