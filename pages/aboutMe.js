import Link from "next/link"
import Image from "next/image"
import Head from "next/Head"
import {AboutMeLayout, TestLayout} from '../components/layout'

function MyFace(){
    return(
        <Image
            src = "/images/the_man_himself.jpg"
            height = {317}
            width = {214}
            alt = "me"
        />
    );
}

export default function MyDescription(){
    return(
        <TestLayout>
            <Head>
                <title>About Me</title>
            </Head>
            <h1>My name is Ryan</h1>
            <AboutMeLayout>
                <p>
                    <Link href = "/">
                        <a>Back to Home</a>
                    </Link>
                </p>
            </AboutMeLayout>
            <MyFace/>
        </TestLayout>
    );
}