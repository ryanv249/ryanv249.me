import Link from "next/link"

export default function PersonalList(){
    return(
        <>
            <h1>Personal Projects:</h1>
            <h2>
                <Link href= "/personal_projects/test1">
                    <a>Project 1</a>
                </Link>
            </h2>
            <p>
                <Link href = "/">
                    <a>Back to Home</a>
                </Link>
            </p>
        </>
    );
}