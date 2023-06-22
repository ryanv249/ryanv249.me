import Link from 'next/link';

import Layout from '../components/layout';
import { FlexContainer, 
    AboutContainer, AboutHead, AboutBody, AboutFoot, AboutIconsBox, AboutIcons
} from '../components/wrappers';

import { SiC, SiPython, SiOcaml, SiReact, SiGithub, SiGitlab, SiJupyter, SiNextdotjs, SiJava} from 'react-icons/si'

export default function AboutPage(){
    return(
        <Layout pageName = "About">
            <AboutContainer>
                <AboutHead>
                    <FlexContainer>
                        <h1>Focused & Passionate</h1>
                    </FlexContainer>
                    
                    <FlexContainer>
                        <p style={{textAlign:'center'}}>
                            I am a Computer Science graduate of Boston University.
                        </p>
                    </FlexContainer>
                </AboutHead>

                <AboutBody>
                    <FlexContainer>
                        <p>
                            I am an avid gamer, proud cat person, and am happily the weirdest child. 
                            My brother and sister are both successful in their own way, and now it&apos;s my turn! 
                            My time at BU proved to me that the only way to fail is to give up. So even if I need to ask for help, I always finish what I start.
                        </p>
                    </FlexContainer>

                    <FlexContainer>
                        <Link href = "/projects">
                            See my work
                        </Link>
                    </FlexContainer>
                </AboutBody>

                <AboutFoot>
                    <FlexContainer>
                        <h1>Languages/Tech I&apos;ve used </h1>
                    </FlexContainer>

                    {/* this is an ugly solution to wrapping these, but it works. */}
                    <AboutIconsBox>
                        <AboutIcons>
                            <div>
                                <SiJava/>
                            </div>
                            <div>
                                <SiC/>
                            </div>
                            <div>
                                <SiPython/>
                            </div>
                            <div>
                                <SiOcaml/>
                            </div>
                            <div>
                                <SiReact/>
                            </div>
                            <div>
                                <SiNextdotjs/>
                            </div>
                            <div>
                                <SiGithub/>
                            </div>
                            {/* <div>
                                <SiGitlab/>
                            </div> */}
                            <div>
                                <SiJupyter/>
                            </div>
                        </AboutIcons>
                    </AboutIconsBox>
                </AboutFoot>

                {/* job experience section ?
                    eventually, add this as foot, place bio paragraph into head and place tech into body */}
            </AboutContainer>
        </Layout>
    );
}