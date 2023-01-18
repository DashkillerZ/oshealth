import Static from "../static/Static.js";
import "../css/navbar.css";
import Form from "../components/Form";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState} from "react";
import gsap from "gsap";
import {motion } from "framer-motion";


export default function Navbar(){
    const modalRef = useRef(null);
    const modalButtonRef = useRef(null);
    const closeButtonRef = useRef(null);
    const toastRef = useRef(null);
    const [menuAction,setMenuAction] = useState(false);
    if(menuAction){
        document.body.style.overflowY = "hidden";
    }else{
        document.body.style.overflowY = "scroll";
    }
    useEffect(()=>{
        window.addEventListener("resize",function(){
            setMenuAction(false);
        })
        modalButtonRef.current.addEventListener("click",()=>{
            gsap.to(modalRef.current,{
                opacity: 1,
                duration: 0.5,
                pointerEvents:"all"
            });
            document.body.style.overflowY = "hidden";
        });
        closeButtonRef.current.addEventListener("click",()=>{
            gsap.to(modalRef.current,{
                opacity: 0,
                duration: 0.5,
                pointerEvents:"none"
            });
            document.body.style.overflowY = "scroll";

        });
    },[])
    function onFormSubmit(){
        gsap.to(modalRef.current,{
            opacity: 0,
            duration: 0.5,
            pointerEvents:"none"
        });
        document.body.style.overflowY = "scroll";
        const t1 =gsap.timeline()
        .to(toastRef.current,{
            opacity: 0.7,
            scale:1,
            y:0,
            duration: 0.5,
        })
        .to(toastRef.current,{
            opacity: 0,
            scale:0,
            y:-200,
            duration: 0.5,
        },"+=3");
    }
    return(
    <>
        <div className="navbar">
            <div className="top">
                <Link to="/" style={{textDecoration:"none"}} className="logo left  ">
                    <img src={Static.logo} alt="" />
                    <span>
                        <div>ONESMARTER</div>
                        <div>HEALTH</div>
                    </span>
                </Link>
                <div className="right">
                    <div className="status">
                        <img src={Static.time} alt="" />
                        <span>
                            <div>Monday - Friday , 08:00 - 20:00</div>
                            <div>Saturday and Sunday - CLOSED </div>
                        </span>
                    </div>
                    <div className="contact-info">
                        <img src={Static.mobile} alt="" />
                        <span>
                            <div>+ 0800 2466 7921</div>
                            <div>mediagroup@qode.com</div>
                        </span>
                    </div>
                    <div className="location">
                        <img src={Static.location} alt="" />
                        <span>
                            <div>34th Avenue</div>
                            <div>New York, W2 3XE</div>
                        </span>
                    </div>
                    <div className="social">
                        <img src={Static.pointer} alt="" />
                        <span>
                            <div>Follow Us</div>
                            <div className="social-nav" >
                                <a href="/"><img src={Static.facebook} alt="" /></a>
                                <a href="/"><img src={Static.twitter} alt="" /></a>
                                <a href="/"><img src={Static.linkedin} alt="" /></a>
                                <a href="/"><img src={Static.googlePlus} alt="" /></a>
                            </div>
                        </span>
                    </div>
                </div>

            </div>
            <div className="bottom">
                <div className="nav left">
                    <div className="nav-elements">HOME</div>
                    <div className="nav-elements">PAGES</div>
                    <div className="nav-elements">PORTFOLIO</div>
                    <div className="nav-elements">BLOG</div>
                    <div className="nav-elements">ELEMENTS</div>
                    <div className="nav-elements">SHOP</div>
                </div>
                <div className="right">
                    <div className="lang flex">EN <img src={Static.angleDown} alt="" /></div>
                    <div className="search flex"><img src={Static.search} alt="Search" /></div>
                    <div className="bag flex" data-count="5" ><img src={Static.bag} alt="" /></div>
                    <div className="appointment flex" ref={modalButtonRef} >BOOK&nbsp;APPOINMENT</div>
                    
                    <div className={menuAction?"menu-btn active flex":"menu-btn flex"} onClick={()=>setMenuAction(!menuAction)} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div ref={modalRef} className="modal" >
                <div className="close" ref={closeButtonRef} ></div>
                <Form onFormSubmit={onFormSubmit} />

            </div>
            <div className="toast" ref={toastRef}>
                Your response has been recorded, Please Take Care! <br />
                We will connect to you shortly
            </div>
        </div>
        <motion.div
        animate={menuAction?{x:0}:{x:-350}}
        transition= {{type:"linear"}}
        className="nav-responsive">
            <div className="nav-el">HOME</div>
            <div className="nav-el">PAGES</div>
            <div className="nav-el">PORTFOLIO</div>
            <div className="nav-el">BLOG</div>
            <div className="nav-el">ELEMENTS</div>
            <div className="nav-el">SHOP</div>
            <div className="right">
                <div className="status">
                    <img src={Static.time} alt="" />
                    <span>
                        <div>Monday - Friday , 08:00 - 20:00</div>
                        <div>Saturday and Sunday - CLOSED </div>
                    </span>
                </div>
                <div className="contact-info">
                    <img src={Static.mobile} alt="" />
                    <span>
                        <div>+ 0800 2466 7921</div>
                        <div>mediagroup@qode.com</div>
                    </span>
                </div>
                <div className="location">
                    <img src={Static.location} alt="" />
                    <span>
                        <div>34th Avenue</div>
                        <div>New York, W2 3XE</div>
                    </span>
                </div>
                <div className="social">
                    <img src={Static.pointer} alt="" />
                    <span>
                        <div>Follow Us</div>
                        <div className="social-nav" >
                            <a href="/"><img src={Static.facebook} alt="" /></a>
                            <a href="/"><img src={Static.twitter} alt="" /></a>
                            <a href="/"><img src={Static.linkedin} alt="" /></a>
                            <a href="/"><img src={Static.googlePlus} alt="" /></a>
                        </div>
                    </span>
                </div>
            </div>
        </motion.div>
    </>
    );
}