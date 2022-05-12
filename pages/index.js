import React,{useState,useEffect} from 'react'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import LinkList from '../components/LinkList';
import UserCarousel from "../components/UserCarousel";
import Brandcarousel from "../components/Brandcarousel";
import UserNavbar from '../components/UserNavbar';
import beautyproducts from "../json_data/beautyproducts.json"
import bookslist from "../json_data/bookslist.json"
import earphones from "../json_data/earphones.json"
import menfashion from "../json_data/menfashion.json"
import powerbanks from "../json_data/powerbank.json"
import smartwatch from "../json_data/smartwatch.json"
import womenfashion from "../json_data/womenfashion.json"


export default function Home() {

  const [state,setState] = useState(0);
  const [visual, setVisual] = useState(1980);
//   if (visual!==visualViewport.width) {
//     setVisual(visualViewport.width)
// }
  return (
    <>
      {/* <UserNavbar/> */}
      <UserCarousel/>
      <Brandcarousel visual={visual} setVisual={setVisual}/>
      <LinkList deals={smartwatch} iden="smartwatch" Title="Smart Watches" visual={visual} setVisual={setVisual} />
      <LinkList deals={powerbanks} iden="powerbank" Title="Power Banks" visual={visual} setVisual={setVisual} />
      <LinkList deals={earphones} iden="earphones" Title="Earphones" visual={visual} setVisual={setVisual} />
      <LinkList deals={bookslist} iden="books" Title="Top Selling Books" visual={visual} setVisual={setVisual} />
      <LinkList deals={menfashion} iden="menfashion" Title="Men fashion" visual={visual} setVisual={setVisual} />
      <LinkList deals={womenfashion} iden="womenfashion" Title="Women fashion" visual={visual} setVisual={setVisual} />
      <LinkList deals={beautyproducts} iden="beauty" Title="Beauty Products" visual={visual} setVisual={setVisual} />
    </>
    
    // <div className={styles.container}>
    //   <Head>
    //     <title>Brendan's First Next App</title>
    //     <meta name="description" content="Made by Brendan Lucas" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <h1>Hello world</h1>
    //   <h2>{state}</h2>
    //   <button onClick={()=>setState(state=> state+1)}>One Up</button>
    //   <button onClick={()=>setState(state=>state-1)}>One Down</button>
      
    // </div>

    
  )
}
