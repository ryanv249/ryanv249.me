import Link from 'next/link';
import Image from 'next/image';

import Layout  from '../components/layout';
import { HomeContainer, HomeHead, HomeFace, HomeBody, HomeFoot } from '../components/wrappers';


export default function HomePage() {
    return (
        <Layout page = "Home" onProjectPage={false}>
            <HomeContainer>
                <HomeHead>
                    <HomeFace>
                        <div>
                            <Image
                                src = "/images/the_man_himself.jpg"
                                alt = "Ryan Velez"
                                layout='fill'
                            />
                        </div>
                    </HomeFace>

                    <h1>Ryan Velez</h1>

                    <h3>Working on things!</h3>
                </HomeHead>

                <HomeBody>
                    <p>
                        I'm a soon-to-be graduate of Boston University, full of energy and the drive to succeed.
                    </p>

                    <Link href = "/about">
                        <a>More about me</a>
                    </Link>
                </HomeBody>
                        
                <HomeFoot>
                    <h2>Get in touch</h2>

                    <p>
                        From job offers to feedback on my website and anything else in-between, my inbox is always open!
                        Feel free to say anything. 
                    </p>

                    <a href="mailto:ryanv2468@hotmail.com">Contact Me</a>
                </HomeFoot>
            </HomeContainer>
        </Layout>
    )
}
