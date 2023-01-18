import "../css/footer.css";
import logo from "../static/logo.svg";
import facebook from "../static/facebook.svg";
import twitter from "../static/twitter.svg";
import linkedin from "../static/linkedin.svg";
import googlePlus from "../static/googleplus.svg";
import { Link } from "react-router-dom";
import location from "../static/location.svg";
import mobile from "../static/mobile.svg";
// import pointer from "../static/pointer.svg";
import time from "../static/time.svg";
export default function Footer(options) {
    return(
        <div className="footer">
            <div className="flex top">
                <div className="first">
                    <Link to="/" style={{textDecoration:"none"}} className="logo">
                        <img src={logo} alt="" />
                        <span>
                            <div>ONESMARTER</div>
                            <div>HEALTH</div>
                        </span>
                    </Link>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laborum suscipit necessitatibus doloribus sequi ipsum. Laborum minus ex reprehenderit at!
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
                </div>
                <div className="second">
                    <div className="title">Latest Tweets</div>
                    <div>
                        <div className="flex">
                            <img src={twitter} alt="" />
                            <div>
                            @aliasadadm Hi @aliasadadm , can you please submit a ticket at https://t.co/JLV61aXG7d and one of our support agent… https://t.co/yk57k1S9bS
                            </div>
                        </div>
                        <div className="flex">
                            <img src={twitter} alt="" />
                            <div>
                            @aliasadadm Hi @aliasadadm , can you please submit a ticket at https://t.co/JLV61aXG7d and one of our support agent… https://t.co/yk57k1S9bS
                            </div>
                        </div><div className="flex">
                            <img src={twitter} alt="" />
                            <div>
                            @aliasadadm Hi @aliasadadm , can you please submit a ticket at https://t.co/JLV61aXG7d and one of our support agent… https://t.co/yk57k1S9bS
                            </div>
                        </div>
                    </div>
                </div>
                <div className="third" >
                    <div className="title">Latest Tweets</div>
                    <div>
                        <div className="flex">
                            <img src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                            <div>
                                Integrative Medicine And Cancer Treatment July 11, 2016
                            </div>
                        </div>
                        <div className="flex">
                            <img src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                            <div>
                                Integrative Medicine And Cancer Treatment July 11, 2016
                            </div>
                        </div><div className="flex">
                            <img src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                            <div>
                                Integrative Medicine And Cancer Treatment July 11, 2016
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fourth timings">
                    <div className="time"><img src={time} alt="" /></div>
                    <div className="list">
                        <div>Monday <span>08am - 12pm</span></div>
                        <div>Tuesday <span>01am - 5pm</span></div>
                        <div>Wednesday <span>Free day</span></div>
                        <div>Thursday <span>08am - 12pm</span></div>
                        <div>Friday <span>08am - 12pm</span></div>
                        <div>Saturday - Sunday <span>Closed</span></div>
                    </div>
                    <a className="make-an-appoinment">Make an Appointment</a>
                </div>
            </div>
            <div className="bottom">
                    <div className="left">&#169;&nbsp;2022&nbsp;OneSmarter&nbsp;Interactive, All&nbsp;Rights&nbsp;Reserved</div>
                    <div className="right">
                        <a href="">HOME</a>
                        <a href="">ABOUT US</a>
                        <a href="">BLOG</a>
                        <a href="">SHOP</a>
                        <a href="">CONTACT</a>
                        <a href=""><img src={facebook} alt="" /></a>
                        <a href=""><img src={twitter} alt="" /></a>
                        <a href=""><img src={linkedin} alt="" /></a>
                        <a href=""><img src={googlePlus} alt="" /></a>
                    </div>
            </div>
        </div>
    )
}