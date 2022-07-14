import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import { IconContext } from 'react-icons'

// generic wrappers to reduce repeated lines   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~     
export function TextContainer({ children }){
    return(
        <div className ={utilStyles.textContainer}>
            {children}
        </div>
    );
}

export function LinkContainer({ children }){
    return(
        <div className ={utilStyles.linkContainer}>
            {children}
        </div>
    );
}



// navmenu wrappers     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export function MenuContainer({ children }){
    return(
        <div className ={utilStyles.menuContainer}>
            {children}
        </div>
    );
}

// need to define size for menu icon here
export function MenuButton({ children }){
    return(
        <IconContext.Provider value={{size: 55}}>
            <div className={utilStyles.menuButton}>
                {children}
            </div>
        </IconContext.Provider>
    );
}

export function MenuContentBox({ children }){
    return(
        <div className ={utilStyles.menuContentBox}>
            {children}
        </div>
    );
}

export function MenuContent({ children }){
    return(
        <div className ={utilStyles.menuContent}>
            {children}
        </div>
    );
}

export function MenuLink({ children }){
    return(
        <div className ={utilStyles.menuLink}>
            {children}
        </div>
    );
}



// navbar wrappers     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export function BarContainer({ children }){
    return(
        <div className ={utilStyles.barContainer}>
            {children}
        </div>
    );
}

export function BarPagesBox({ children }){
    return(
        <div className ={utilStyles.barPagesBox}>
            {children}
        </div>
    );
}

export function BarPages({ children }){
    return(
        <div className ={utilStyles.barPages}>
            {children}
        </div>
    );
}

// highlight link to current page   linkTo - destination page   currPage - page being displayed
export function BarLink({ linkTo, currPage, children }){
    return(
        <div className ={utilStyles.barLink} style = {linkTo === currPage ? {backgroundColor: 'cyan'} : {}}>
            {children}
        </div>
    );
}

export function BarContactBox({ children }){
    return(
        <div className ={utilStyles.barContactBox}>
            {children}
        </div>
    );
}

export function BarContact({ children }){
    return(
        <div className ={utilStyles.barContact}>
            {children}
        </div>
    );
}



// footer wrappers    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// on project page, shifted down to fit gallery. applied in layout.module
export function FootContainer({ children }){
    return(
        <div className ={utilStyles.footContainer}>
            {children}
        </div>
    );
}

export function FootPagesBox({ children }){
    return(
        <div className ={utilStyles.footPagesBox}>
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

export function FootContactBox({ children }){
    return(
        <div className ={utilStyles.footContactBox}>
            {children}
        </div>
    );
}

// need to define size for foot link icons here
export function FootContact({ children }){
    return(
        <IconContext.Provider value={{size: 40}}>
            <div className = {utilStyles.footContact}>
                {children}
            </div>
        </IconContext.Provider>
    );
}



// home page wrappers        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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



// about page wrappers          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

export function AboutIconsBox({ children }){
    return(
        <div className={styles.aboutIconsBox}>
            {children}
        </div>
    );
}

// need to define size for tech icons here 
export function AboutIcons({ children }){
    return(
        <IconContext.Provider value={{size: 45}}>
            <div className={styles.aboutIcons}>
                {children}
            </div>
        </IconContext.Provider>
    );
}



// preview page wrappers      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export function PreviewContainer({ children }){
    return(
        <div className={styles.previewContainer}>
            {children}
        </div>
    );
}

export function PreviewHead({ children }){
    return(
        <div className={styles.previewHead}>
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

export function PreviewList({ children }){
    return(
        <div className={styles.previewList}>
            {children}
        </div>
    );
}

// uses react-scrollbar-size to center previews properly (not all scrollbars take up space)
export function Preview({ scrollShift, children }) {
    return(
        <div className={styles.preview} style={{marginLeft: scrollShift}}>
            {children}
        </div>
    );
}



// project page wrappers    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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