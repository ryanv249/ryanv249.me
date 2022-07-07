import Layout from '../components/layout';
import { AboutContainer, AboutHead, AboutBody, AboutFoot, AboutIcons  } from '../components/wrappers';

import { SiC, SiPython, SiOcaml, SiReact, SiGithub, SiGitlab, SiJupyter, SiNextdotjs, SiJava} from 'react-icons/si'

export default function AboutPage(){
    return(
        <Layout page = "About" onProjectPage={false}>
            <AboutContainer>
                <AboutHead>
                    <h1>Focused & Passionate</h1>

                    <p>
                        I'm a senior studying Computer Science at Boston University.
                    </p>
                </AboutHead>

                <AboutBody>
                    <p>
                        I am an avid gamer, proud cat person, and am happily the weirdest child. 
                        My brother and sister are both successful in their own way, and now it's my turn. 
                        
                        My time at BU has taught me that the only way to fail is to give up; even if I need to ask for help, I finish what I start.
                    </p>
                </AboutBody>

                <AboutFoot>
                    <h1>languages/technologies i've used </h1>
                    {/* this is an ugly solution to wrapping these, but it works. */}
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
                </AboutFoot>

                {/* job experience section ?
                    eventually, add this as foot, place bio paragraph into head and place tech into body */}
            </AboutContainer>
        </Layout>
    );
}