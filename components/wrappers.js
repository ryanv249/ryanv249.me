import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

export function BackButton({ children }){
    return(
        <div className={styles.backButton}>
            {children}
        </div>
    );
}

export function Project({ children }){
    return(
        <div className ={styles.project}>
            {children}
        </div>
    );
}

export function PreviewGroup({ children }){
    return(
        <div className={styles.previewContainer}>
            {children}
        </div>
    );
}

export function Preview({ mapKey, children }) {
    return(
        <div key = {mapKey} className={styles.preview}>
            {children}
        </div>
    );
}

export function MyFace({ children }){
    return(
        <div className={utilStyles.face}>
            {children}
        </div>
    );
}

export function HomeContentTop({ children }){
    return(
        <div className={styles.homeTop}>
            {children}
        </div>
    );
}

export function HomeContentBottom({ children }){
    return(
        <div className={styles.homeBottom}>
            {children}
        </div>
    );
}

export function AboutBio({ children }){
    return(
        <div className={styles.aboutBio}>
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
