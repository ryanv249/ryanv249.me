import Link from 'next/link';
import Image from 'next/image';

import Layout  from '../components/layout';
import { MyFace, HomeContentTop, HomeContentBottom } from '../components/wrappers';


export default function HomePage() {
    return (
        <Layout page = "Home" onProjectPage={false}>
            <HomeContentTop>
                    <MyFace>
                        <Image
                            src = "/images/the_man_himself.jpg"
                            height = {317 *.5}
                            width = {214 * .5}
                            alt = "me"
                        />
                    </MyFace>

                    <h1>Ryan Velez</h1>

                    <h3>Working on things!</h3>

                    <p>
                        I'm a soon-to-be graduate of Boston University, untested but full of energy and the drive to succeed.
                    </p>

                    <Link href = "/about">
                        <a>More about me</a>
                    </Link>
                </HomeContentTop>

                <HomeContentBottom>
                    <h2>Get in touch</h2>

                    <p>
                        From job offers to feedback on my website and anything else in-between, my inbox is always open!
                        Feel free to say anything. 
                    </p>

                    <a href="mailto:ryanv2468@hotmail.com">Contact Me</a>
                </HomeContentBottom>
        </Layout>
    )
}
