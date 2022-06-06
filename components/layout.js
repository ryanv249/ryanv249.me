import styles from "./layout.module.css"

export function TestLayout({ children }){
    return <div className = {styles.test}>{children}</div>;
}

export function AboutMeLayout ({ children }){
    return <div className = {styles.about}>{children}</div>;
}