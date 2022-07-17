import Link from 'next/link';
import Image from 'next/image';

import Layout  from '../components/layout';
import { FlexContainer, HomeContainer, HomeHead, HomeFace, HomeBody, HomeFoot } from '../components/wrappers';


export default function HomePage() {
    return (
        <Layout page = "Home">
            <HomeContainer>
                <HomeHead>
                    <HomeFace>
                        <Image
                            src = "/images/the_man_himself.jpg"
                            alt = "Ryan Velez"
                            layout='fill'
                            priority= {true}
                        />
                    </HomeFace>

                    <FlexContainer>
                        <h1>Ryan Velez</h1>
                    </FlexContainer>
                    
                    <FlexContainer>
                        <h3>Working on things!</h3>
                    </FlexContainer>
                </HomeHead>

                <HomeBody>
                    <FlexContainer>
                        <p>
                            I&apos;m a soon-to-be graduate of Boston University, full of energy and the drive to succeed.
                        </p>
                    </FlexContainer>

                    <FlexContainer>    
                        <Link href = "/about">
                            <a>More about me</a>
                        </Link>
                    </FlexContainer>
                </HomeBody>
                        
                <HomeFoot>
                    <FlexContainer>
                        <h2>Get in touch</h2>
                    </FlexContainer>
                    
                    <FlexContainer>
                        <p>
                            From job offers to feedback on my website and anything else in-between, my inbox is always open!
                            Feel free to say anything. 
                        </p>
                    </FlexContainer>
                    
                    <FlexContainer>
                        <a href="mailto:ryanv249@bu.edu">Contact Me</a>
                    </FlexContainer>
                </HomeFoot>
            </HomeContainer>
        </Layout>
    )
}
