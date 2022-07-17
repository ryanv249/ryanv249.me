import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';


import { 
    FlexContainer, PageLink,
    MenuContainer, MenuButton, MenuContactBox, MenuContact, MenuPagesBox, MenuPages,
    BarContainer, BarPagesBox,  BarPages, BarContactBox, BarContact,
    FootContainer, FootPagesBox, FootPages, FootContactBox, FootContact
} from './wrappers';

import { SiGithub, SiLinkedin } from 'react-icons/si';
import { IoIosMail, IoMdMenu, IoIosClose } from 'react-icons/io'



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

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="msapplication-TileColor" content="#b91d47" />
                <meta name="theme-color" content="#cecece" />
                <meta name="author" content="Ryan Velez" />
                <meta name="title" content="Ryan Velez" />
                <meta name="description" content="I studied computer science at Boston University. This is my online portfolio." />                <meta property="og:type" content="website" />
                
                <meta property="og:title" content="Ryan Velez Portfolio" />
                <meta property="og:description" content="I studied computer science at Boston University. This is my online portfolio." />
                <meta proprety="og:url" content="https://ryanvelez.vercel.app" />
                <meta property="og:type" content="website" />
                {/* add my face here too! */}
                <meta property="og:image" content="" />
                
            </Head>
        </>
    )
}


function NavMenu ({currPage, open, setOpen}){
    return(
        <>
            <MenuContainer>
                <MenuButton>
                    {
                        open
                        ?
                        (<IoIosClose onClick={() => setOpen(false)}/>)
                        :
                        (<IoMdMenu onClick={() => setOpen(true)}/>)
                    }
                </MenuButton>

                <MenuContactBox>
                    <MenuContact>
                        <a href="mailto:ryanv249@bu.edu">Contact Me</a>
                    </MenuContact>
                </MenuContactBox>
                
                {/* 
                    open also toggles display of page content and footer links,
                    but only while screen is small enough to not use NavBar
                 */}
                { open && (
                    <>
                        <MenuPagesBox>
                            <MenuPages>
                                <PageLink type = "menu" linkTo = "Home" currPage = {currPage}>
                                    <Link href = "/">
                                        <a style = {currPage === "Home" ? {color: 'black'} : {}}>Home</a>
                                    </Link>
                                </PageLink>

                                <PageLink type = "menu" linkTo = "About" currPage = {currPage}>
                                    <Link href = "/about">
                                        <a style = {currPage === "About" ? {color: 'black'} : {}}>About</a>
                                    </Link>
                                </PageLink>

                                <PageLink type = "menu" linkTo = "Projects" currPage = {currPage}>
                                    <Link href = "/projects">
                                        <a style = {currPage === "Projects" ? {color: 'black'} : {}}>Projects</a>
                                    </Link>
                                </PageLink>
                            </MenuPages>
                        </MenuPagesBox>
                    </>
                )}
            </MenuContainer>
        </>
    )
}

function NavBar ({ currPage }){
    return(
        <>
            <BarContainer>
                {/* page links */}
                <BarPagesBox>
                    <BarPages>
                        <PageLink type = "bar" linkTo = "Home" currPage = {currPage} >
                            <Link href = "/">
                                <a style = {currPage === "Home" ? {color: 'black'} : {}}>Home</a>
                            </Link>
                        </PageLink>

                        <PageLink type = "bar" linkTo = "About" currPage = {currPage} >
                            <Link href = "/about">
                                <a style = {currPage === "About" ? {color: 'black'} : {}}>About</a>
                            </Link>
                        </PageLink>

                        <PageLink type = "bar" linkTo = "Projects" currPage = {currPage} >
                            <Link href = "/projects">
                                <a style = {currPage === "Projects" ? {color: 'black'} : {}}>Projects</a>
                            </Link>
                        </PageLink>
                    </BarPages>
                </BarPagesBox>

                {/* email link */}
                <BarContactBox>
                    <BarContact>
                        <a href="mailto:ryanv249@bu.edu">Contact Me</a>
                    </BarContact>
                </BarContactBox>
            </BarContainer>
        </>
    )
}

function Footer ({menuDisplayed, currPage}){
    return(
        <footer>
            {/*
                if NavMenu is visible and open, don't display page links
                doing this because 2 links to every page is quite redundant
              */}
            <FootContainer >
            {!menuDisplayed && 
                <FootPagesBox>
                    <FootPages>
                        <PageLink type = "foot" linkTo = "Home" currPage = {currPage} >
                            <Link href = "/">
                                <a style = {currPage === "Home" ? {color: 'black'} : {}}>Home</a>
                            </Link>
                        </PageLink>

                        <PageLink type = "foot" linkTo = "About" currPage = {currPage} >
                            <Link href = "/about">
                                <a style = {currPage === "About" ? {color: 'black'} : {}}>About</a>
                            </Link>
                        </PageLink>

                        <PageLink type = "foot" linkTo = "Projects" currPage = {currPage} >
                            <Link href = "/projects">
                                <a style = {currPage === "Projects" ? {color: 'black'} : {}}>Projects</a>
                            </Link>
                        </PageLink>
                    </FootPages>
                </FootPagesBox>
            }
                {/* external and email links*/}
                <FootContactBox>
                        <FootContact>
                            <a href={"https://github.com/ryanv249"} target="_blank" rel="noopener noreferrer">
                                <SiGithub/>
                            </a>

                            <a href="mailto:ryanv249@bu.edu">
                                <IoIosMail />
                            </a>
                            
                            <a href={"https://www.linkedin.com/in/ryan-velez-054b0b207/"} target="_blank" rel="noopener noreferrer">
                                <SiLinkedin/>
                            </a>
                        </FootContact>
                </FootContactBox>

                <FlexContainer>
                    <p>
                        © 2022 Ryan Velez
                    </p>
                </FlexContainer>
            </FootContainer>
        </footer>
    )
}


export default function Layout({ children, page, onProjectPage }) {
    // true if menu is open
    // starts false because never open on page load
    const [open, setOpen] = useState(false);
    // true if menu is on screen 
    // starts true because visible on small screen page load
    const [menuVisible, setMenuVisible] = useState(true);

    // both hooks have no effect on NavBar (and larger screens in general)
    
    /* 
        Heres how this works: 

        useEffect is looking for... something to change.  (not sure what exactly)       

        when the screen size changes, we generate an event listener that checks to see if the width is <= 501px     ***i think
        if the size is now <= or > 519px it registers and calls setMenuVisible with the new value (need ! because of how e.matches works)
        
        we then make sure to call a cleanup function to remove the listener if its not already gone. 

        need this to allow for page content to be displayed on screen re-size, since page content should always be visible with bar
        menu is not changed so if menu is open and screen is made larger and then smaller, page content is removed again
    */

    useEffect(() => {
        window
        .matchMedia("(min-width: 519px)")
        .addEventListener('change', e => setMenuVisible(!e.matches));

        return () => window.removeEventListener('change', e => setMenuVisible(!e.matches));
    }, []);

    return (
        <>
            <Header pageTitle={page + " - Ryan Velez"}/>

            <nav>
                {/* bar for large screens, menu for small-medium */}
                <NavMenu 
                    currPage = {page} 
                    open = {open} 
                    setOpen = {setOpen} 
                />
                <NavBar currPage = {page} />      
            </nav>

            {/* 
                if using bar, always display page content. 
                if using menu, only display if menu closed. 
                menu and bar display managed through CSS   (doing it here caused mismatch between server and client render)
            */}

            { (!menuVisible || (menuVisible && (open === false)))  && 
                (
                    <main>{children}</main>
                )
            }

            <Footer 
                menuDisplayed = {menuVisible && (open === true)}
                onProjectPage = {onProjectPage}
                currPage = {page} 
            />
        </>
    );
}