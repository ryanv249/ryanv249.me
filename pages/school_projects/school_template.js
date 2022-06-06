import Link from "next/link"
import Head from "next/Head"

export default function SchoolProject({title, briefSum, fullDesc}){
    return(
        <>
            <h2>
                <Link href= "/school">
                    <a>Back to School Projects</a>
                </Link>
            </h2>
            <Head>
                <title>{title}</title>
            </Head>
            <h2>{briefSum}</h2>
            <p>
                {fullDesc}
            </p>

        </>

    );
}