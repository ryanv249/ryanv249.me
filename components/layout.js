import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import ImageGallery from 'react-image-gallery';
// https://github.com/xiaolin/react-image-gallery

import { SiC, SiPython, SiOcaml, SiReact, SiGithub, SiJupyter, SiNextdotjs, SiJava, SiGitlab, SiLinkedin } from 'react-icons/si'

export function Header({ pageTitle }) {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#b91d47" />
                <meta name="theme-color" content="#cecece" />
                <meta name="author" content="Ryan Velez" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Ryan Velez" />
                <meta property="og:title" content="I studied computer science at Boston University. This is my online portfolio." />
                <meta property="og:type" content="website" />
                {/* add my face here too! */}
                <meta property="og:image" content="" />
                
            </Head>
        </>
    )
}

function NavBar ({ currPage }){
    return(
        <nav>
            {/* page links */}
            {/* depending on page, 'highlight' that link */}
            <div>
                <div className={currPage === "home" ? utilStyles.highlight : ""}>
                    <Link href = "/">
                        <a>Home</a>
                    </Link>
                </div>
                <div className={currPage === "about" ? utilStyles.highlight : ""}>
                    <Link href = "/about">
                        <a>About</a>
                    </Link>
                </div>
                <div className={currPage === "projects" ? utilStyles.highlight : ""}>
                    <Link href = "/projects">
                        <a>Projects</a>
                    </Link>
                </div>
            </div>
            {/* contact link */}
            <div>
                <a href="mailto:ryanv249@bu.edu">Contact Me</a>
            </div>
        </nav>
    )
}

function Footer (){
    return(
        <footer>
            {/* page links & email */}
            <div>
                <div>
                    <Link href = "/">
                        <a>Home</a>
                    </Link>
                </div>
                <div>
                    <Link href = "/about">
                        <a>About</a>
                    </Link>
                </div>
                <div>
                    <Link href = "/projects">
                        <a>Projects</a>
                    </Link>
                </div>
                <div>
                    <a href="mailto:ryanv249@bu.edu">Contact</a>
                </div>
            </div>

            {/* external links */}
            <div>
                <SiGithub/>
                <SiLinkedin/>
            </div>

            <p>
                © 2022 Ryan Velez
            </p>
        </footer>
    )
}

function Project({ children }){
    return(
        <div className ={styles.project}>
            {children}
        </div>
    );
}

export function ProjectPageLayout({ project }) {
    return (
        <>
            <Header pageTitle={project.name} />

            {/*      navbar stuff  */}
            <NavBar currPage=""/>

            {/* content    make into a main?*/}

            <Project>
                <h1>{project.name}</h1>

                <h3>View this project's repo on Github:</h3>

                <a href={project.link} target="_blank" rel="noopener noreferrer">Link</a>

                <p>{project.desc}</p>

                <div>
                    <ImageGallery
                        items={project.images}
                        showPlayButton={false}
                    />
                </div>
            </Project>

             {/* footer    ?*/}

        </>
    );
}

function PreviewGroup({ children }){
    return(
        <div className={styles.previewContainer}>
            {children}
        </div>
    );
}

function Preview({ mapKey, children }) {
    return(
        <div key = {mapKey} className={styles.preview}>
            {children}
        </div>
    );
}

export function PreviewPageLayout({ school_list, personal_list }) {
    return (
        <>
            <Header pageTitle={"Projects - Ryan Velez"} />

            {/*      navbar stuff  */}
            <NavBar currPage="projects"/>

            {/* content    make into a main*/}

            <PreviewGroup>
                <h2>School Projects:</h2>
                {school_list.map((prev) => (
                    <Preview mapKey = {prev.name}>
                        <Link href={"/projects/school/" + prev.name}>
                            <a>{prev.name}</a>
                        </Link>
                        <p>{prev.altDesc}</p>
                    </Preview>
                ))}
            </PreviewGroup>
            
            <PreviewGroup>
                <h2>Personal Projects:</h2>
                {personal_list.map((prev) => (
                    <Preview mapKey = {prev.name}>
                        <Link href={"/projects/personal/" + prev.name}>
                            <a>{prev.name}</a>
                        </Link>
                        <p>{prev.altDesc}</p>
                    </Preview>
                ))}
            </PreviewGroup>

            {/* footer      */}
        </>
    );
}

function MyFace({ children }){
    return(
        <div className={utilStyles.face}>
            {children}
        </div>
    );
}

function HomeContentTop({ children }){
    return(
        <div className={styles.homeTop}>
            {children}
        </div>
    );
}

function HomeContentBottom({ children }){
    return(
        <div className={styles.homeBottom}>
            {children}
        </div>
    );
}

export function HomePageLayout(){
    return(
        <>
            <Header pageTitle={"Home - Ryan Velez"}/>

            {/* this will be in a nav, use display grid */}
            <NavBar currPage="home"/>

            {/* this will all be in a main */}

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
            {/* this will be in a footer */}
                {/* alternate navbar (use display grid), list of platforms, and copyright notice*/}
            <Footer/>
        </>
    );
}

function AboutBio({ children }){
    return(
        <div className={styles.aboutBio}>
            {children}
        </div>
    );
}

function AboutTech({ children }){
    return(
        <div className={styles.aboutTech}>
            {children}
        </div>
    );
}


export function AboutPageLayout(){
    return(
        <>
            <Header pageTitle={"About - Ryan Velez"}/>

            {/* navbar stuff */}
            <NavBar currPage="about"/>

            {/* content    put into main? */}

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

            {/* footer stuff */}
        </>
    );
}


export default function Layout({ children, page }) {
    return (
        <div>
            <Header/>

            <NavBar currPage = {page} />

            <main>{children}</main>

            <Footer/>
        </div>
    );
}