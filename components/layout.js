import Head from 'next/head';
import Link from 'next/link';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import { NavContainer, FootContainer, FootIcons } from './wrappers';

import { SiGithub, SiLinkedin } from 'react-icons/si'


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
                {/* depending on page, 'highlight' that link */}
                <div>
                    <div className={currPage === "Home" ? utilStyles.highlight : ""}>
                        <Link href = "/">
                            <a>Home</a>
                        </Link>
                    </div>
                    <div className={currPage === "About" ? utilStyles.highlight : ""}>
                        <Link href = "/about">
                            <a>About</a>
                        </Link>
                    </div>
                    <div className={currPage === "Projects" ? utilStyles.highlight : ""}>
                        <Link href = "/projects">
                            <a>Projects</a>
                        </Link>
                    </div>
                </div>
                {/* contact link */}
                <div>
                    <a href="mailto:ryanv249@bu.edu">Contact Me</a>
                </div>
            </NavContainer>
        </nav>
    )
}

function Footer ({ onProjectPage }){
    return(
        <footer className={onProjectPage ? styles.galleryShift : ""}>
            <FootContainer>
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
                    <FootIcons>
                        <SiGithub/>
                        <SiLinkedin/>
                    </FootIcons>
                </div>

                <p>
                    © 2022 Ryan Velez
                </p>
            </FootContainer>
        </footer>
    )
}


export default function Layout({ children, page, onProjectPage }) {
    return (
        <div>
            <Header pageTitle={page + " - Ryan Velez"}/>

            <NavBar currPage = {page} />

            <main>{children}</main>

            <Footer onProjectPage = {onProjectPage} />
        </div>
    );
}