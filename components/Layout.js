import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import nprogress from 'nprogress'
import s from '../styles/Home.module.css'




Router.onRouteChangeStart = (url) => {
    console.log(url)
    nprogress.start()
}
Router.onRouteChangeComplete = () => nprogress.done()

Router.onRouteChangeError = () => nprogress.done()

const Layout = ({ children, title }) => (
    <div className='root'>
        <Head>
            <title>R_Mi Mangoes</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            
                <Link href='/' >
                    <a>Home</a>
                </Link>
                
                <Link href="/about">
                    <a>About us</a>
                </Link>
                
                <Link href="/gallary">
                    <a>gallary</a>
                </Link>
            
        </header>
        <h1 className={s.title}>{title}</h1>
        {children}
        <footer>&copy; {new Date().getFullYear()}</footer>
        
        
        
    </div>
)
export default Layout
