import Layout from '../components/layout';
import { AboutBio, AboutTech } from '../components/wrappers';

import { SiC, SiPython, SiOcaml, SiReact, SiGithub, SiGitlab, SiJupyter, SiNextdotjs, SiJava} from 'react-icons/si'

export default function AboutPage(){
    return(
        <Layout page = "About" onProjectPage={false}>
            {/* bio */}
            <AboutBio>
                <h1>Focused & Passionate</h1>

                <p>
                    I'm a senior studying Computer Science at Boston University.
                </p>

                <p>
                    I am an avid gamer, proud cat person, and am happily the weirdest child. 
                    My brother and sister are both successful in their own way, and now it's my turn. 
                    
                    My time at BU has taught me that the only way to fail is to give up; even if I need to ask for help, I finish what I start.
                </p>
            </AboutBio>

            {/* things I know */}
            <AboutTech>
                <h1>languages/technologies i've used </h1>
                {/* figure out styling for these eventually */}
                <SiJava/>
                <SiC/>
                <SiPython/>
                <SiOcaml/>
                <SiReact/>
                <SiNextdotjs/>
                <SiGithub/>
                <SiGitlab/>
                <SiJupyter/>
            </AboutTech>

            {/* job experience section ? */}

        </Layout>
    );
}