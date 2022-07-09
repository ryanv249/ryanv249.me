import Link from 'next/link';
import Image from 'next/image';

import Layout  from '../components/layout';
import { TextContainer, LinkContainer, HomeContainer, HomeHead, HomeFace, HomeBody, HomeFoot } from '../components/wrappers';


export default function HomePage() {
    return (
        <Layout page = "Home">
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

                    <TextContainer>
                        <h1>Ryan Velez</h1>
                    </TextContainer>
                    
                    <TextContainer>
                        <h3>Working on things!</h3>
                    </TextContainer>
                </HomeHead>

                <HomeBody>
                    <TextContainer>
                        <p>
                            I&apos;m a soon-to-be graduate of Boston University, full of energy and the drive to succeed.
                        </p>
                    </TextContainer>

                    <LinkContainer>    
                        <Link href = "/about">
                            <a>More about me</a>
                        </Link>
                    </LinkContainer>
                </HomeBody>
                        
                <HomeFoot>
                    <TextContainer>
                        <h2>Get in touch</h2>
                    </TextContainer>
                    
                    <TextContainer>
                        <p>
                            From job offers to feedback on my website and anything else in-between, my inbox is always open!
                            Feel free to say anything. 
                        </p>
                    </TextContainer>
                    
                    <LinkContainer>
                        <a href="mailto:ryanv249@bu.edu">Contact Me</a>
                    </LinkContainer>
                </HomeFoot>
            </HomeContainer>
        </Layout>
    )
}
