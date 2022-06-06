import Link from "next/link"
import Head from "next/Head"

export default function PersonalProject({title, briefSum, fullDesc}){
    return(
        <>
            <h2>
                <Link href= "/personal">
                    <a>Back to Personal Projects</a>
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