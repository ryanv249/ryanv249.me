import { projects } from "../../../data";
import { ProjectPage } from "../../../components/layout";
import Link from "next/link";

/*
    this file is inside an extra folder just for aesthetic purposes...
    i wanted the url to include 'projects' ex. projects/personal/RyanDotCom 
    if i can find a way to do that without needing this folder, then this comment 
    will cease to exist.
*/

export async function getStaticPaths(){

    // make fetch request here instead of using projects variable

    const paths = projects.map(proj =>{
        return{
            params: {type: proj.type, name: proj.name}
        }
        // array of params objects with type and name data used to generate routes 
    })

    return{
        paths,
        fallback: false 
        // fallback pages... unimportant for now?
    }

}

export async function getStaticProps({params}){

    // make fetch request here instead of this 
    const project = projects.filter(p => p.name === params.name)[0]

    // converts image data into format required for react-image-gallery
    const images = project.imageList.map((img) =>{
        return ({original: img, thumbnail: img})
    })

    return{
        props: {project, images}
    }
}


export default function DisplayProjectInfo({project, images}){
    console.log(project, images)
    // need to transform imageList into format for react-image-gallery 
    // now, instead of list of strings, now have list of objects with original and thumbnail vals 
    return(
        <ProjectPage
            type = {project.type}
            name = {project.name}
            briefSum = {project.briefSum}
            fullDesc = {project.fullDesc}
            codeLink = {project.codeLink}
            imageList = {images}
        />
    )
}