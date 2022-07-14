import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';


import { 
    TextContainer, 
    MenuContainer, MenuButton, MenuContentBox, MenuContent, MenuLink,
    BarContainer, BarPagesBox,  BarPages, BarLink, BarContactBox, BarContact,
    FootContainer, FootPagesBox, FootPages, FootLink, FootContactBox, FootContact
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
                
                {/* 
                    open also toggles display of page content
                    note: link to current page styling applied here, unlike BarLink 
                 */}
                { open && (
                    <>
                        <MenuContentBox>
                            <MenuContent>
                                <MenuLink>
                                    <Link href = "/">
                                        <a style = {currPage === "Home" ? {color: 'cyan'} : {}}>Home</a>
                                    </Link>
                                </MenuLink>

                                <MenuLink>
                                    <Link href = "/about">
                                        <a style = {currPage === "About" ? {color: 'cyan'} : {}}>About</a>
                                    </Link>
                                </MenuLink>

                                <MenuLink>
                                    <Link href = "/projects" >
                                        <a style = {currPage === "Projects" ? {color: 'cyan'} : {}}>Projects</a>
                                    </Link>
                                </MenuLink>

                                <MenuLink>
                                    <a href="mailto:ryanv249@bu.edu">Contact Me</a>
                                </MenuLink>
                            </MenuContent>
                        </MenuContentBox>
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
                {/* 
                    page links 
                    link to current page styling handled in wrappers
                */}
                <BarPagesBox>
                    <BarPages>
                        <BarLink linkTo = "Home" currPage = {currPage} >
                            <Link href = "/">
                                <a>Home</a>
                            </Link>
                        </BarLink>

                        <BarLink linkTo = "About" currPage = {currPage} >
                            <Link href = "/about">
                                <a>About</a>
                            </Link>
                        </BarLink>

                        <BarLink linkTo = "Projects" currPage = {currPage} >
                            <Link href = "/projects">
                                <a>Projects</a>
                            </Link>
                        </BarLink>
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

function Footer (){
    return(
        <footer>
            <FootContainer >
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

                {/* external and email links*/}
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
        if the size is now <= or > 501px it registers and calls setMenuVisible with the new value (need ! because of how e.matches works)
        
        we then make sure to call a cleanup function to remove the listener if its not already gone. 

        need this to allow for page content to be displayed on screen re-size, since page content should always be visible with bar
        menu is not changed so if menu is open and screen is made larger and then smaller, page content is removed again
    */

    useEffect(() => {
        window
        .matchMedia("(min-width: 501px)")
        .addEventListener('change', e => setMenuVisible(!e.matches));

        return () => window.removeEventListener('change', e => setMenuVisible(!e.matches));
    }, []);

    return (
        <>
            <Header pageTitle={page + " - Ryan Velez"}/>

            <nav>
                {/* bar for large screens, menu for small-medium */}
                <NavMenu  currPage = {page} open = {open} setOpen = {setOpen} />
                <NavBar currPage = {page} />      
            </nav>

            {/* 
                if using bar, always display page content. 
                if using menu, only display if menu closed. 
                menu and bar display managed through CSS   (doing it here caused mismatch between server and client render)
            */}

            { (!menuVisible || (menuVisible && open === false))  && 
                (
                    <main>{children}</main>
                )
            }

            <Footer onProjectPage = {onProjectPage} />
        </>
    );
}