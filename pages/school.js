import Link from "next/link"

export default function SchoolList(){
    return(
        <>
            <h1>School Projects:</h1>
            <h2>
                <Link href= "/school_projects/test2">
                    <a>School Project 1</a>
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