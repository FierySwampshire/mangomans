import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import nprogress from 'nprogress'
import s from '../styles/Home.module.css'
import { Navbar } from 'react-bootstrap'
import { Button, Nav } from 'reactstrap'




Router.onRouteChangeStart = (url) => {
    console.log(url)
    nprogress.start()
}
Router.onRouteChangeComplete = () => nprogress.done()

Router.onRouteChangeError = () => nprogress.done()

const Layout = ({ children, title, footnote }) => (
    <div className='root'>
        <Head>
            <title>R_Mi Mangoes</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"></link>
        </Head>
        <header className='navflex'>
            <div className='logoflex'>
                <Link href='/' >
                    <div className='logo'>
                        <img src='mangologo.jpg' alt='R_Mi' />
                        <h2>R_Mi</h2>
                    </div>

                </Link>
            </div>


            <Link href="/contact">
                <a>Contact</a>
            </Link>

            <Link href="/gallary">
                <a>gallery</a>
            </Link>

        </header>


        <h1 className={s.title}>{title}</h1>
        {children}
        <div className='footer-basic'>
            <footer>
                {/* <div>

                    <p>Instagram : <a href='www.instagram.com'>www.instagram.com</a></p>

                </div> */}
                <p>{footnote}</p>
                <div className="social">
                    <a href="https://instagram.com/r_mi_mangoes?r=nametag"><i className="icon ion-social-instagram"></i></a>
                    {/* <a href="#"><i className="icon ion-social-snapchat"></i></a> */}
                    {/* <a href="#"><i className="icon ion-social-twitter"></i></a> */}
                    {/* <a href="#"><i className="icon ion-social-facebook"></i></a> */}
                    <a href="https://wa.me/917447555454"><i className="icon ion-social-whatsapp"></i></a>

                </div>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="/">Home</a></li>
                    {/* <li class="list-inline-item"><a href="#">Services</a></li> */}
                    <li className="list-inline-item"><a href="/contact">Contact</a></li>
                    {/* <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li> */}
                </ul>
                <p className="copyright">&copy; R_Mi Mangoes {new Date().getFullYear()}</p>
            </footer>

        </div>

    </div>
)
export default Layout
