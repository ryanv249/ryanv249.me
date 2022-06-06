import Link from "next/link"

export default function PersonalProject(){
    return(
        <>
            <h1>Personal thing!</h1>
            <h2>
                <Link href= "/personal">
                    <a>Back to Personal Projects</a>
                </Link>
            </h2>
        </>
    );
}