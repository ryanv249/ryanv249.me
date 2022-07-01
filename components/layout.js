import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import ImageGallery from 'react-image-gallery';
// https://github.com/xiaolin/react-image-gallery

import { NavList } from '../pages';

import { SiC, SiPython, SiOcaml, SiReact, SiGithub, SiJupyter, SiNextdotjs, SiJava, SiGitlab } from 'react-icons/si'

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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Ryan Velez Online Portfolio" />
                <meta name="author" content="Ryan Velez" />
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
                <a href="mailto:ryanv2468@hotmail.com">Contact Me</a>
            </div>
        </nav>
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

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/profile.jpg"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    );
}