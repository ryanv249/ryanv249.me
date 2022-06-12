import ImageGallery from 'react-image-gallery';
// https://github.com/xiaolin/react-image-gallery

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

// use this as template for something maybe at some point???

export function TestLayout({ children }){
    return <div className = {styles.test}>{children}</div>;
}

export function AboutMeLayout ({ children }){
    return <div className = {styles.about}>{children}</div>;
}

export function Header({pageTitle}){
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="https://ryanvelez.vercel.app/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="https://ryanvelez.vercel.app/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="https://ryanvelez.vercel.app/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#b91d47"/>
        <meta name="theme-color" content="#cecece"></meta>
      </Head>
    </>
  )
}

export function ProjectPage({name, fullDesc, link, images}){
    return(
        <>
            <Header title = {name}/>
            <h2>
                <Link href= "/projects">
                    <a>Back to Projects</a>
                </Link>
            </h2>

            {/* place navbar here ? */}


            <h1 className={styles.header}>{name}</h1>

            <h3>
                View this project's repo on Github:
                <div className ={styles.codeLinkWrapper}>
                    {/* "_blank" =  opens link in a new tab
                    "noopener noreferrer" = protection from tabnabbing*/}
                    <a href={link} target = "_blank" rel = "noopener noreferrer">Link</a>
                </div>
            </h3>

            <p>{fullDesc}</p>

            <div className={styles.gallery}>
                <ImageGallery 
                    items = {images} 
                    showPlayButton = {false}  
                />
            </div>
        </>

    );
}

export function ProjectPreviews({school_list, personal_list}){
    return(
        <>
            <h2>School Projects:</h2>
            <h3>
                {school_list.map((prev) =>(
                    <div key = {prev.name}>
                        <Link href= {"/projects/school/" + prev.name}>
                            <a>{prev.name}</a>
                        </Link>
                        <p>{prev.altDesc}</p>
                    </div>
                ))}
            </h3>
            <h2>Personal Projects:</h2>
            <h3>
                {personal_list.map((prev) =>(
                    <div key = {prev.name}>
                        <Link href= {"/projects/personal/" + prev.name}>
                            <a>{prev.name}</a>
                        </Link>
                        <p>{prev.altDesc}</p>
                    </div>
                ))}
            </h3>
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