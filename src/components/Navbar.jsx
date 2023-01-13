import logo from "../static/logo.svg";
import location from "../static/location.svg";
import mobile from "../static/mobile.svg";
import pointer from "../static/pointer.svg";
import time from "../static/time.svg";
import facebook from "../static/facebook.svg";
import twitter from "../static/twitter.svg";
import linkedin from "../static/linkedin.svg";
import googlePlus from "../static/googleplus.svg";
import angleDown from "../static/angleDown.svg";
import search from "../static/search.svg";
import bag from "../static/bag.svg";
import "../css/navbar.css";
import Form from "../components/Form";
import { Link } from "react-router-dom";
import { useEffect, useRef} from "react";
import gsap from "gsap";


export default function Navbar(){
    const modalRef = useRef(null);
    const modalButtonRef = useRef(null);
    const closeButtonRef = useRef(null);
    const toastRef = useRef(null);
    useEffect(()=>{
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
        <div className="navbar">
            <div className="top">
                <Link to="/" style={{textDecoration:"none"}} className="logo">
                    <img src={logo} alt="" />
                    <span>
                        <div>ONESMARTER</div>
                        <div>HEALTH</div>
                    </span>
                </Link>
                <div className="right">
                    <div className="status">
                        <img src={time} alt="" />
                        <span>
                            <div>Monday - Friday , 08:00 - 20:00</div>
                            <div>Saturday and Sunday - CLOSED </div>
                        </span>
                    </div>
                    <div className="contact-info">
                        <img src={mobile} alt="" />
                        <span>
                            <div>+ 0800 2466 7921</div>
                            <div>mediagroup@qode.com</div>
                        </span>
                    </div>
                    <div className="location">
                        <img src={location} alt="" />
                        <span>
                            <div>34th Avenue</div>
                            <div>New York, W2 3XE</div>
                        </span>
                    </div>
                    <div className="social">
                        <img src={pointer} alt="" />
                        <span>
                            <div>Follow Us</div>
                            <div className="social-nav" >
                                <a href="/"><img src={facebook} alt="" /></a>
                                <a href="/"><img src={twitter} alt="" /></a>
                                <a href="/"><img src={linkedin} alt="" /></a>
                                <a href="/"><img src={googlePlus} alt="" /></a>
                            </div>
                        </span>
                    </div>
                </div>

            </div>
            <div className="bottom">
                <div className="nav">
                    <div className="nav-elements">HOME</div>
                    <div className="nav-elements">PAGES</div>
                    <div className="nav-elements">PORTFOLIO</div>
                    <div className="nav-elements">BLOG</div>
                    <div className="nav-elements">ELEMENTS</div>
                    <div className="nav-elements">SHOP</div>
                </div>
                <div className="right">
                    <div className="lang">EN <img src={angleDown} alt="" /></div>
                    <div className="search"><img src={search} alt="Search" /></div>
                    <div className="bag" data-count="5" ><img src={bag} alt="" /></div>
                    <div className="appointment" ref={modalButtonRef} >BOOK APPOINMENT</div>
                    
                    <div className="menu-btn">
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
    );
}