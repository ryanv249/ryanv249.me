import Link from 'next/link';

import Layout from '../components/layout';
import { TextContainer, LinkContainer,
    AboutContainer, AboutHead, AboutBody, AboutFoot, AboutIconsBox, AboutIcons
} from '../components/wrappers';

import { SiC, SiPython, SiOcaml, SiReact, SiGithub, SiGitlab, SiJupyter, SiNextdotjs, SiJava} from 'react-icons/si'

export default function AboutPage(){
    return(
        <Layout page = "About">
            <AboutContainer>
                <AboutHead>
                    <TextContainer>
                        <h1>Focused & Passionate</h1>
                    </TextContainer>
                    
                    <TextContainer>
                        <p>
                            I&apos;m a senior studying Computer Science at Boston University.
                        </p>
                    </TextContainer>
                </AboutHead>

                <AboutBody>
                    <TextContainer>
                        <p>
                            I am an avid gamer, proud cat person, and am happily the weirdest child. 
                            My brother and sister are both successful in their own way, and now it&apos;s my turn. 
                            
                            My time at BU has taught me that the only way to fail is to give up; even if I need to ask for help, I finish what I start.
                        </p>
                    </TextContainer>

                    <LinkContainer>
                        <Link href = "/projects">
                            <a>See my work</a>
                        </Link>
                    </LinkContainer>
                </AboutBody>

                <AboutFoot>
                    <TextContainer>
                        <h1>Languages/Tech I&apos;ve used </h1>
                    </TextContainer>

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