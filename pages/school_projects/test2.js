import Link from "next/link"

export default function SchoolProject(){
    return(
        <>
            <h1>School thing!</h1>
            <h2>
                <Link href= "/school">
                    <a>Back to School Projects</a>
                </Link>
            </h2>
        </>
    );
}