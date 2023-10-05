
import Header from '../../components/header/header'
import Footer from '../../components/foolder/fooder'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination,Autoplay, 
    Manipulation } from 'swiper/modules'
import { useState, useRef } from 'react'
import { Helmet } from 'react-helmet'
import './home.css'
import 'swiper/css'


import sofa from '../../components/img/sofa.jpg'
import almoa from '../../components/img/almofada1.png'
import almoas from '../../components/img/almofa.png'
import img1 from '../../components/img/img1.jpeg';
import img2 from '../../components/img/chair.jpg';
import img3 from '../../components/img/img3.jpeg';
import img4 from '../../components/img/img4.jpeg';
import 'swiper/css/pagination';

function Slide(){
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    const slides = [ almoas, sofa,almoa,]

return(
    <Swiper modules={[Navigation,Pagination,Autoplay, 
        Manipulation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      
        navigation={true}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
    
    
        {slides.map( Swai => (
            <SwiperSlide><img id='pass' src={Swai}/></SwiperSlide>
        ))}

<div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>

    </Swiper>

    
);

}




function Nome(){
    let [mudar,settitle] = useState('ONE ROSE')
    
    
    function Mnome(){
settitle('Roupas, Capas & Muito Mais !!!');

    }

    return(

<h1 onClick={Mnome}>{mudar}</h1>

);

}






function Home(){
    return(
        <>
        <Header/>
        <Helmet>
            <title>ONE ROSE - Corte & Costura</title>
        </Helmet>
        <main>

        <div className='slide'> <Slide /> </div>

        <div id='title'><Nome /></div>

    <div className='produtoshome'>

        <div> <img src={img1} /></div>
        <div> <img src={img2} /></div>
        <div> <img src={img3} /></div>
        <div> <img src={img4} /></div>
        
        </div>

        </main>

        <Footer/>

        
        </>
    );
}


export default Home;