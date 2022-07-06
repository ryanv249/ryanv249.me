import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import { IconContext } from 'react-icons'


// navbar and footer wrappers
export function NavContainer({ children }){
    return(
        <div className ={utilStyles.navContainer}>
            {children}
        </div>
    );
}

export function FootContainer({ children }){
    return(
        <div className ={utilStyles.footContainer}>
            {children}
        </div>
    );
}

// define styling for footer icons here (cant pass css class)
export function FootIcons({ children }){
    return(
        <IconContext.Provider value={{size: 25}}>
            {children}
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

// need a key because used in map function, see /projects/index
export function Preview({ mapKey, children }) {
    return(
        <div key = {mapKey} className={styles.preview}>
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