import {ProjectPage} from "../../components/layout";

export default function ChefDoe(){
    return(
        <ProjectPage
            type = "s"
            title = "ChefDoe"
            briefSum = "Website used to order ingredients needed for specific recipes"
            fullDesc = "FULL DESCRIPTION HERE"
            codeLink = "https://github.com/rkulskis/ChefDoe"
            images = 
            {
                [
                {
                    original: "/images/ChefDoeNew.png",
                    thumbnail: "/images/ChefDoeNew.png",
                },
                {
                    original: "/images/ChefDoeLib.png",
                    thumbnail: "/images/ChefDoeLib.png",
                },
                {
                    original: "/images/ChefDoeView.png",
                    thumbnail: "/images/ChefDoeView.png",
                },
                {
                    original: "/images/ChefDoeOrder.png",
                    thumbnail: "/images/ChefDoeOrder.png",
                },
                {
                    original: "/images/ChefDoeReview.png",
                    thumbnail: "/images/ChefDoeReview.png",
                },
                {
                    original: "/images/ChefDoeConf.png",
                    thumbnail: "/images/ChefDoeConf.png",
                },

                
                ]
            }
        />
    );
}