import "../css/slider.css";
import { useState,useEffect } from "react";

export default function Slider(props){
    let interval = 8;
    if(props.interval){
        interval = props.interval;
    }
    let sliderData=[
        {
            src:"https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            title:"Healthy Lifestyle",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem temporibus accusantium sunt neque architecto magnam omnis eveniet modi ducimus cupiditate!",
            buttons:<div>
                <a href="/" className="btn1">purchase</a>
                <a href="/" className="btn2">read more</a>
            </div>,

    
        },
        {
            src:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            title:"the best doctors",
            description:"Ipsum dolor sit amet consectetur, adipisicing elit. Quidem temporibus accusantium sunt neque architecto magnam omnis eveniet modi ducimus cupiditate!",
            buttons:<div>
                <a href="/" className="btn1">purchase</a>
                <a href="/" className="btn2">read more</a>
            </div>,
    
        },
        {
            src:"https://plus.unsplash.com/premium_photo-1661281397737-9b5d75b52beb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            title:"modern medicine",
            description:"adipisicing elit. Quidem temporibus accusantium sunt neque architecto magnam omnis eveniet modi ducimus cupiditate!",
            buttons:<div>
                <a href="/" className="btn1">purchase</a>
                <a href="/" className="btn2">read more</a>
            </div>,
    
        },
        {
            src:"https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
            title:"modern medicals",
            description:"temporibus accusantium sunt neque architecto magnam omnis eveniet modi ducimus cupiditate!temporibus accusantium sunt neque architecto magnam omni.",
            buttons:<div>
                <a href="/" className="btn1">purchase</a>
                <a href="/" className="btn2">read more</a>
            </div>,
    
        },
    ]
    if(props.sliderData){
        sliderData = props.sliderData;
    }
    let [currentSlide,setCurrentSlide] = useState(0);
    const prevSlide = ()=>{
        setCurrentSlide(currentSlide-1);
        if(currentSlide===0){
            setCurrentSlide(sliderData.length-1);
        }
    }
    const nextSlide = ()=>{
        setCurrentSlide(currentSlide+1);
        if(currentSlide===sliderData.length-1){
            setCurrentSlide(0);
        }
    }
    useEffect(()=>{
        const interval = setInterval(nextSlide,interval*1000);
        return()=>{
            clearInterval(interval)
        }

    })
    // let counter =0;
    // function animate(){
    //     requestAnimationFrame(animate);
    //     counter++;
    //     if(counter%60==0){
    //         console.log(counter);
    //     }
    // }
    // animate();
    return(
        <div className="slider-container">
            {
                sliderData.map((slide,index)=>{
                    return(
                        <div className={currentSlide===index?"slide active":"slide"} style={{backgroundImage:"url("+slide.src+")"}}  key={index}>
                            {slide.title && <div className="title">{slide.title}</div>}
                            {slide.description && <div className="desc">{slide.description}</div>}
                            {slide.buttons}
                            
                        </div>
                            )
                        })
                    }
            <div className="next" onClick={nextSlide} >&#9002;</div>
            <div className="prev" onClick={prevSlide} >&#9001;</div>
        </div>
    )
}
