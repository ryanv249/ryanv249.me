import Link from "next/link"
import Head from "next/Head"

export default function SchoolProject(){
    return(
        <>
            <Head>
                <title>S Project 1</title>
            </Head>
            <h1>School thing!</h1>
            <h2>
                <Link href= "/school">
                    <a>Back to School Projects</a>
                </Link>
            </h2>
        </>
    );
}