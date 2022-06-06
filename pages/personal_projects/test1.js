import Link from "next/link"
import Head from "next/Head"

export default function PersonalProject(){
    return(
        <>
            <Head>
                <title>P Project 1</title>
            </Head>
            <h1>Personal thing!</h1>
            <h2>
                <Link href= "/personal">
                    <a>Back to Personal Projects</a>
                </Link>
            </h2>
        </>

    );
}