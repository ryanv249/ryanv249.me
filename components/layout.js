import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import ImageGallery from 'react-image-gallery';
// https://github.com/xiaolin/react-image-gallery

import { NavList } from '../pages';

// use this as template for something maybe at some point???

export function TestLayout({ children }) {
    return <div className={styles.test}>{children}</div>;
}

export function AboutMeLayout({ children }) {
    return <div className={styles.about}>{children}</div>;
}

export function Header({ pageTitle }) {
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
                <meta name="theme-color" content="#cecece"></meta>
            </Head>
        </>
    )
}

function Project({ children }){
    return(
        <div className ={styles.project}>
            {children}
        </div>
    );
}

export function ProjectPageLayout({ project }) {
    return (
        <>
            <Header title={project.name} />

            {/*      navbar stuff  */}
            <h2>
                <Link href="/projects">
                    <a>Back to Projects</a>
                </Link>
            </h2>

            {/* content */}

            <Project>
                <h1>{project.name}</h1>

                <h3>View this project's repo on Github:</h3>

                <a href={project.link} target="_blank" rel="noopener noreferrer">Link</a>

                <p>{project.desc}</p>

                <div>
                    <ImageGallery
                        items={project.images}
                        showPlayButton={false}
                    />
                </div>
            </Project>

        </>
    );
}

function PreviewGroup({ title, children }){
    return(
        <div className={styles.previewContainer}>
            <h2>{title}</h2>
            {children}
        </div>
    );
}

function Preview({ mapKey, children }) {
    return(
        <div key = {mapKey} className={styles.preview}>
            {children}
        </div>
    );
}

export function PreviewPageLayout({ school_list, personal_list }) {
    return (
        <>
            <Header pageTitle={"Projects - Ryan Velez"} />

            {/*      navbar stuff  */}
            <NavList></NavList>

            {/* content */}

            <PreviewGroup title = "School Projects:">
                {school_list.map((prev) => (
                    <Preview mapKey = {prev.name}>
                        <Link href={"/projects/school/" + prev.name}>
                            <a>{prev.name}</a>
                        </Link>
                        <p>{prev.altDesc}</p>
                    </Preview>
                ))}
            </PreviewGroup>
            
            <PreviewGroup title = "Personal Projects:">
                {personal_list.map((prev) => (
                    <Preview mapKey = {prev.name}>
                        <Link href={"/projects/personal/" + prev.name}>
                            <a>{prev.name}</a>
                        </Link>
                        <p>{prev.altDesc}</p>
                    </Preview>
                ))}
            </PreviewGroup>
        </>
    );
}


const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/profile.jpg"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    );
}