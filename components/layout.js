import ImageGallery from 'react-image-gallery';
// https://github.com/xiaolin/react-image-gallery

import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

// // generalize this too? pass css name as prop? 

// export function TestLayout({ children }){
//     return <div className = {styles.test}>{children}</div>;
// }

// export function AboutMeLayout ({ children }){
//     return <div className = {styles.about}>{children}</div>;
// }

export function Project({type, title, briefSum, fullDesc, codeLink, images}){
    return(
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{title}</title>
            </Head>

            <h2>
                <Link href= {type == "p" ? "/personal" : "/school"}>
                    <a>Back to {type == "p" ? "Personal" : "School"} Projects</a>
                </Link>
            </h2>

            {/* place navbar here */}


            <h1 className={styles.header}>{title}</h1>

            <h2>{briefSum}</h2>

            <h3>
                View this project's repo on Github:
                <div className ={styles.codeLinkWrapper}>
                    <a href={codeLink}>Link</a>
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

export function SchoolProject({title, briefSum, fullDesc}){
    return(
        <>
            <h2>
                <Link href= "/school">
                    <a>Back to School Projects</a>
                </Link>
            </h2>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{title}</title>
            </Head>
            <h2>{briefSum}</h2>
            <p>
                {fullDesc}
            </p>

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