import Link from "next/link"
import Head from "next/Head"

export default function PersonalList(){
    return(
        <>
            <Head>
                <title>My Personal Projects</title>
            </Head>
            <h1>Personal Projects:</h1>
            <h2>
                <Link href= "/personal_projects/RyanDotCom">
                    <a>RyanDotCom</a>
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