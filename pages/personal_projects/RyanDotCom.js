import {Project} from "../../components/layout"

export default function RyanDotCom(){
    return(
        <Project
            type = "p"
            title = "RyanDotCom"
            briefSum = "This Website!"
            fullDesc = "FULL DESCRIPTION HERE"
            codeLink = "https://github.com/ryanv249/personal-site"
            images = 
            {
                [
                {
                    original: "/images/the_man_himself.jpg",
                    thumbnail: "/images/the_man_himself.jpg",
                },
                {
                    original: "/images/cards_gamer.jpg",
                    thumbnail: "/images/cards_gamer.jpg",
                },
                {
                    original: "/images/the_man_himself.jpg",
                    thumbnail: "/images/the_man_himself.jpg",
                },
                {
                    original: "/images/cards_gamer.jpg",
                    thumbnail: "/images/cards_gamer.jpg",
                }
                
                ]
            }

        />
    );
}