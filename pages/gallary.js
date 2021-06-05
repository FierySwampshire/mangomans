import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import React from "react";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const items = [
    {
        source: '/mango1.jpg',
    },
    {
        source: '/mango2.jpg',
    },
    {
        source: '/mango3.jpg',
    },
    {
        source: 'mangovid1.mp4'
    }, {
        source: 'brochure.jpg'
    }
]

const Slider1 = () => (
    <AwesomeSlider
        media={items}
        className='sliderclass'
    />
);


function gallary() {
    return (
        <Layout >
            <Slider1 />
            <div className={styles.container}>
                <Head>
                    <meta name="description" content="R_Mi mangoes, taste the alphonso" />
                </Head>

                <main className={styles.main}>
                    <h1 className={styles.description}>
                        Enjoy beautiful visuals of organic alphonso mangoes
                    </h1>



                </main>

            </div>



        </Layout>
    )
}

export default gallary


// import Layout from '../components/Layout'
// import styles from '../styles/Home.module.css'
// import AwesomeSlider from 'react-awesome-slider'


// const items = [
//     {
//         source: '/mango1.jpg',
//     },
//     {
//         source: '/mango2.jpg',
//     },
//     {
//         source: '/mango3.jpg',
//     },
//     {
//         source: 'mangovid1.mp4'
//     }, {
//         source: 'brochure.jpg'
//     }
// ]

// const Slider = () => (
//     <AwesomeSlider
//         media={items}
//         className='sliderclass'
//     />
// );


// // let f = 'this is a footnote'
// function gallary() {
//     return (
//         <Layout title='Gallary'>
//             <br />
//             <Slider />

//             <div className={styles.container}>


//                 <main className={styles.main}>

//                     <h1 className={styles.description}>
//                     Enjoy beautiful visuals of organic alphonso mangoes
//                     </h1>



//                 </main>

//             </div>

//         </Layout>
//     )
// }
// export default gallary