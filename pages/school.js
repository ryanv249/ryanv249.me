import Link from "next/link"
import Head from "next/Head"

export default function SchoolList(){
    return(
        <>
            <Head>
                <title>My School Projects</title>
            </Head>
            <h1>School Projects:</h1>
            <h2>
                <Link href= "/school_projects/ChefDoe">
                    <a>ChefDoe</a>
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