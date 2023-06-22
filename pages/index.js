import Link from 'next/link';
import Image from 'next/image';

import Layout  from '../components/layout';
import { FlexContainer, HomeContainer, HomeHead, HomeFace, HomeBody, HomeFoot } from '../components/wrappers';


export default function HomePage() {
    return (
        <Layout pageName = "Home">
            <HomeContainer>
                <HomeHead>
                    <HomeFace>
                        <Image
                            src = "/images/face.jpg"
                            alt = "Ryan Velez"
                            fill =  {true}
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
                            I&apos;m a recent graduate of Boston University, full of energy and the drive to succeed.
                        </p>
                    </FlexContainer>

                    <FlexContainer>    
                        <Link href = "/about">
                            More about me
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
                        <a href="mailto:ryanvelez249@gmail.com">Contact Me</a>
                    </FlexContainer>
                </HomeFoot>
            </HomeContainer>
        </Layout>
    )
}
