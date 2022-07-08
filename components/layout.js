import Head from 'next/head';
import Link from 'next/link';

import { 
    TextContainer, 
    NavContainer, NavPagesBox,  NavPages, NavLink, NavContactBox, NavContact,
    FootContainer, FootPagesBox, FootPages, FootLink, FootContactBox, FootContact, LinkContainer 
} from './wrappers';

import { SiGithub, SiLinkedin } from 'react-icons/si';
import { IoIosMail } from 'react-icons/io'


function Header({ pageTitle }) {
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
            <NavContainer>
                {/* page links */}
                <NavPagesBox>
                    <NavPages>
                        <NavLink linkTo = "Home" currPage = {currPage} >
                            <Link href = "/">
                                <a>Home</a>
                            </Link>
                        </NavLink>

                        <NavLink linkTo = "About" currPage = {currPage} >
                            <Link href = "/about">
                                <a>About</a>
                            </Link>
                        </NavLink>

                        <NavLink linkTo = "Projects" currPage = {currPage} >
                            <Link href = "/projects">
                                <a>Projects</a>
                            </Link>
                        </NavLink>
                    </NavPages>
                </NavPagesBox>

                {/* email link */}
                <NavContactBox>
                    <NavContact>
                        <LinkContainer>
                            <a href="mailto:ryanv249@bu.edu">Contact Me</a>
                        </LinkContainer>
                    </NavContact>
                </NavContactBox>
            </NavContainer>
        </nav>
    )
}

function Footer ({ onProjectPage }){
    return(
        <footer>
            <FootContainer shift = {onProjectPage}>
                {/* page links */}
                <FootPagesBox>
                    <FootPages>
                        <FootLink>
                            <Link href = "/">
                                <a>Home</a>
                            </Link>
                        </FootLink>

                        <FootLink>
                            <Link href = "/about">
                                <a>About</a>
                            </Link>
                        </FootLink>

                        <FootLink>
                            <Link href = "/projects">
                                <a>Projects</a>
                            </Link>
                        </FootLink>
                    </FootPages>
                </FootPagesBox>

                {/* external and email links
                    LinkContainers not necessary because links are icons
                 */}
                <FootContactBox>
                        <FootContact>
                            <a href={"https://github.com/ryanv249"} target="_blank" rel="noopener noreferrer">
                                <SiGithub/>
                            </a>
                            
                            <a href={"https://www.linkedin.com/in/ryan-velez-054b0b207/"} target="_blank" rel="noopener noreferrer">
                                <SiLinkedin/>
                            </a>

                            <a href="mailto:ryanv249@bu.edu">
                                <IoIosMail />
                            </a>
                        </FootContact>
                </FootContactBox>

                <TextContainer>
                    <p>
                        © 2022 Ryan Velez
                    </p>
                </TextContainer>
            </FootContainer>
        </footer>
    )
}


export default function Layout({ children, page, onProjectPage }) {
    return (
        <>
            <Header pageTitle={page + " - Ryan Velez"}/>

            <NavBar currPage = {page} />

            <main>{children}</main>

            <Footer onProjectPage = {onProjectPage} />
        </>
    );
}