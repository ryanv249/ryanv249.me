import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import { IconContext } from 'react-icons'


// navbar wrappers
export function NavContainer({ children }){
    return(
        <div className ={utilStyles.navContainer}>
            {children}
        </div>
    );
}

export function NavPages({ children }){
    return(
        <div className ={utilStyles.navPages}>
            {children}
        </div>
    );
}

// linkTo is destination, currPage is page on screen
// highlight link to current page
export function NavLink({ linkTo, currPage, children }){
    return(
        <div className ={linkTo === currPage ? utilStyles.navLinkFocused : utilStyles.navLink}>
            {children}
        </div>
    );
}

export function NavContact({ children }){
    return(
        <div className ={utilStyles.navContact}>
            {children}
        </div>
    );
}



// footer wrappers
// shifts down by 150px on project page
export function FootContainer({ shift, children }){
    return(
        <div className ={utilStyles.footContainer} style = {shift ? {top: 150} : {}}>
            {children}
        </div>
    );
}

export function FootPages({ children }){
    return(
        <div className ={utilStyles.footPages}>
            {children}
        </div>
    );
}

export function FootLink({ children }){
    return(
        <div className ={utilStyles.footLink}>
            {children}
        </div>
    );
}

export function FootContact({ children }){
    return(
        <div className ={utilStyles.footContact}>
            {children}
        </div>
    );
}


// define styling for footer icons here (cant pass css class)
export function FootIcons({ children }){
    return(
        <IconContext.Provider value={{size: 30}}>
            <div className = {utilStyles.footIcons}>
                {children}
            </div>
        </IconContext.Provider>
    );
}



// project page wrappers
export function ProjectContainer({ children }){
    return(
        <div className ={styles.projectContainer}>
            {children}
        </div>
    );
}

export function ProjectHead({ children }){
    return(
        <div className ={styles.projectHead}>
            {children}
        </div>
    );
}

export function ProjectBody({ children }){
    return(
        <div className ={styles.projectBody}>
            {children}
        </div>
    );
}

export function ProjectFoot({ children }){
    return(
        <div className ={styles.projectFoot}>
            {children}
        </div>
    );
}



// preview page wrappers
export function PreviewContainer({ children }){
    return(
        <div className={styles.previewContainer}>
            {children}
        </div>
    );
}

export function PreviewBody({ children }){
    return(
        <div className={styles.previewBody}>
            {children}
        </div>
    );
}

export function PreviewGroup({ children }){
    return(
        <div className={styles.previewGroup}>
            {children}
        </div>
    );
}

export function Preview({ children }) {
    return(
        <div className={styles.preview}>
            {children}
        </div>
    );
}



// home page wrappers
export function HomeContainer({ children}){
    return(
        <div className={styles.homeContainer}>
            {children}
        </div>
    );
}

export function HomeHead({ children }){
    return(
        <div className={styles.homeHead}>
            {children}
        </div>
    );
}


export function HomeFace({ children }){
    return(
        <div className={styles.homeFace}>
            {children}
        </div>
    );
}

export function HomeBody({ children }){
    return(
        <div className={styles.homeBody}>
            {children}
        </div>
    );
}

export function HomeFoot({ children }){
    return(
        <div className={styles.homeFoot}>
            {children}
        </div>
    );
}



// about page wrappers
export function AboutContainer({ children }){
    return(
        <div className={styles.aboutContainer}>
            {children}
        </div>
    );
}

export function AboutHead({ children }){
    return(
        <div className={styles.aboutHead}>
            {children}
        </div>
    );
}

export function AboutBody({ children }){
    return(
        <div className={styles.aboutBody}>
            {children}
        </div>
    );
}

export function AboutFoot({ children }){
    return(
        <div className={styles.aboutFoot}>
            {children}
        </div>
    );
}

export function AboutTech({ children }){
    return(
        <div className={styles.aboutTech}>
            {children}
        </div>
    );
}

// define styling for aboutTech icons here (cant pass css class)
export function AboutIcons({ children }){
    return(
        <IconContext.Provider value={{size: 40}}>
            {children}
        </IconContext.Provider>
    );
}