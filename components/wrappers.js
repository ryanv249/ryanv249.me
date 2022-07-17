import pageStyles from '../styles/pages.module.css';
import layoutStyles from './layout.module.css';

import { IconContext } from 'react-icons'

// generic wrappers to reduce repeated lines   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~     
export function FlexContainer({ children }){
    return(
        <div className ={layoutStyles.flexContainer}>
            {children}
        </div>
    );
}

/*
    stylized link container (applies 'highlight' if wrapped link connects to current page)
        type        - which class and highlight color to apply 
        linkTo      - destination page 
        currPage    - page being displayed 
*/
export function PageLink({ type, linkTo, currPage, children }){
    var cName
    var cStyle
    switch (type){
        case "menu":
            cName = layoutStyles.menuLink
            cStyle = {backgroundColor: 'rgb(187,187,187)'}
            break;

        case "bar":
            cName = layoutStyles.barLink
            cStyle = {backgroundColor: 'rgb(187,187,187)'}
            break;

        case "foot":
            cName = layoutStyles.footLink
            cStyle = {backgroundColor: 'rgb(187,187,187)'}
            break;
    }

    return(
        <div className ={cName} style = {linkTo === currPage ? cStyle : {}}>
            {children}
        </div>
    );
}



// navmenu wrappers     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export function MenuContainer({ children }){
    return(
        <div className ={layoutStyles.menuContainer}>
            {children}
        </div>
    );
}

// need to define size for menu icon here
export function MenuButton({ children }){
    return(
        <IconContext.Provider value={{size: 55}}>
            <div className={layoutStyles.menuButton}>
                {children}
            </div>
        </IconContext.Provider>
    );
}

export function MenuPagesBox({ children }){
    return(
        <div className ={layoutStyles.menuPagesBox}>
            {children}
        </div>
    );
}

export function MenuPages({ children }){
    return(
        <div className ={layoutStyles.menuPages}>
            {children}
        </div>
    );
}

export function MenuContactBox({ children }){
    return(
        <div className ={layoutStyles.menuContactBox}>
            {children}
        </div>
    );
}

export function MenuContact({ children }){
    return(
        <div className ={layoutStyles.menuContact}>
            {children}
        </div>
    );
}




// navbar wrappers     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export function BarContainer({ children }){
    return(
        <div className ={layoutStyles.barContainer}>
            {children}
        </div>
    );
}

export function BarPagesBox({ children }){
    return(
        <div className ={layoutStyles.barPagesBox}>
            {children}
        </div>
    );
}

export function BarPages({ children }){
    return(
        <div className ={layoutStyles.barPages}>
            {children}
        </div>
    );
}

export function BarContactBox({ children }){
    return(
        <div className ={layoutStyles.barContactBox}>
            {children}
        </div>
    );
}

export function BarContact({ children }){
    return(
        <div className ={layoutStyles.barContact}>
            {children}
        </div>
    );
}



// footer wrappers    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// on project page, shifted down to fit gallery. applied in layout.module
export function FootContainer({ children }){
    return(
        <div className ={layoutStyles.footContainer}>
            {children}
        </div>
    );
}

export function FootPagesBox({ children }){
    return(
        <div className ={layoutStyles.footPagesBox}>
            {children}
        </div>
    );
}

export function FootPages({ children }){
    return(
        <div className ={layoutStyles.footPages}>
            {children}
        </div>
    );
}

export function FootContactBox({ children }){
    return(
        <div className ={layoutStyles.footContactBox}>
            {children}
        </div>
    );
}

// need to define size for foot link icons here
export function FootContact({ children }){
    return(
        <IconContext.Provider value={{size: 50}}>
            <div className = {layoutStyles.footContact}>
                {children}
            </div>
        </IconContext.Provider>
    );
}



// home page wrappers        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export function HomeContainer({ children}){
    return(
        <div className={pageStyles.homeContainer}>
            {children}
        </div>
    );
}

export function HomeHead({ children }){
    return(
        <div className={pageStyles.homeHead}>
            {children}
        </div>
    );
}


export function HomeFace({ children }){
    return(
        <div className={pageStyles.homeFace}>
            {children}
        </div>
    );
}

export function HomeBody({ children }){
    return(
        <div className={pageStyles.homeBody}>
            {children}
        </div>
    );
}

export function HomeFoot({ children }){
    return(
        <div className={pageStyles.homeFoot}>
            {children}
        </div>
    );
}



// about page wrappers          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export function AboutContainer({ children }){
    return(
        <div className={pageStyles.aboutContainer}>
            {children}
        </div>
    );
}

export function AboutHead({ children }){
    return(
        <div className={pageStyles.aboutHead}>
            {children}
        </div>
    );
}

export function AboutBody({ children }){
    return(
        <div className={pageStyles.aboutBody}>
            {children}
        </div>
    );
}

export function AboutFoot({ children }){
    return(
        <div className={pageStyles.aboutFoot}>
            {children}
        </div>
    );
}

export function AboutIconsBox({ children }){
    return(
        <div className={pageStyles.aboutIconsBox}>
            {children}
        </div>
    );
}

// need to define size for tech icons here 
export function AboutIcons({ children }){
    return(
        <IconContext.Provider value={{size: 45}}>
            <div className={pageStyles.aboutIcons}>
                {children}
            </div>
        </IconContext.Provider>
    );
}



// preview page wrappers      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export function PreviewContainer({ children }){
    return(
        <div className={pageStyles.previewContainer}>
            {children}
        </div>
    );
}

export function PreviewHead({ children }){
    return(
        <div className={pageStyles.previewHead}>
            {children}
        </div>
    );
}

export function PreviewBody({ children }){
    return(
        <div className={pageStyles.previewBody}>
            {children}
        </div>
    );
}

export function PreviewGroup({ children }){
    return(
        <div className={pageStyles.previewGroup}>
            {children}
        </div>
    );
}

export function PreviewList({ children }){
    return(
        <div className={pageStyles.previewList}>
            {children}
        </div>
    );
}

// uses react-scrollbar-size to center previews properly (not all scrollbars take up space)
export function Preview({ scrollShift, children }) {
    return(
        <div className={pageStyles.preview} style={{marginLeft: scrollShift}}>
            {children}
        </div>
    );
}



// project page wrappers    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export function ProjectContainer({ children }){
    return(
        <div className ={pageStyles.projectContainer}>
            {children}
        </div>
    );
}

export function ProjectHead({ children }){
    return(
        <div className ={pageStyles.projectHead}>
            {children}
        </div>
    );
}

// need to define size for back-button icon here
export function ProjectButton({ children }){
    return(
        <IconContext.Provider value={{size: 55}}>
            <div className ={pageStyles.projectButton}>
                {children}
            </div>
        </IconContext.Provider>
    );
}

export function ProjectBody({ children }){
    return(
        <div className ={pageStyles.projectBody}>
            {children}
        </div>
    );
}

export function ProjectFoot({ children }){
    return(
        <div className ={pageStyles.projectFoot}>
            {children}
        </div>
    );
}