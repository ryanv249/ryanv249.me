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
    // can do the await fetch thing shown net ninja tutorial?


    const paths = projects.map(proj =>{
        return{
            params: {ind: proj.ind, type: proj.type, name: proj.name}
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

    // make fetch request here instead

    const project = projects.filter(p => p.id === params.id)[0]

    const images = project.imageList.map((img) =>{
        return {original: img, thumbnail: img}
    })

    return{
        props: {project, images}
    }
}


export default function DisplayProjectInfo({project, images}){
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