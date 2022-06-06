import Link from "next/link"
import Image from "next/image"

function MyFace(){
    return(
        <Image
            src = "/images/the_man_himself.jpg"
            height = {317}
            width = {214}
            alt = "me"
        />
    );
}

export default function MyDescription(){
    return(
        <>
            <h1>My name is Ryan</h1>
            <p>
                <Link href = "/">
                    <a>Back to Home</a>
                </Link>
            </p>
            <MyFace/>
        </>
    );
}