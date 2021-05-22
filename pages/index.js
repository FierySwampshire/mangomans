import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
const PgCards = ()=> (
  <div className={styles.grid}>
          <a  className={styles.card}>
            <h2>Mango1</h2>
            <p>Mango1</p>
          </a>

          <a  className={styles.card}>
            <h2>Mango2 </h2>
            <p>Mango2</p>
          </a>

          <a
            
            className={styles.card}
          >
            <h2>Mango3 </h2>
            <p>Mango3</p>
          </a>

          <a
            
            className={styles.card}
          >
            <h2>Mango4 </h2>
            <p>
              Mango4
            </p>
          </a>
        </div>
)
const items = [
  {
    src: "/mango1.jpg",
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: "/mango2.jpg",
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: "/mango3.jpg",
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
];

const Example = () => (
  <Row>
    <Col md="8" className="mx-auto">
      <UncontrolledCarousel items={items} />
    </Col>
  </Row>
);
const Slider1 = ()=>(
  <AwesomeSlider
    media={[
      {
        source: '/mango1.jpg',
      },
      {
        source: '/mango2.jpg',
      },
      {
        source: '/mango3.jpg',
      },
    ]}
  />
);
export default function Home() {
  return (
    <Layout title="R_Mi Mangoes">
    <div className={styles.container}>
      <Head>
        <meta name="description" content="R_Mi mangoes, taste the alphonso" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.description}>
          Taste the true sweetness of the king of fruits with Organic Alphonso
        </h1>

        
        
      </main>

      
    </div>
          <Slider1 />
          

          
          
    </Layout>
  )
}
