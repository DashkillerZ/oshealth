
import Slider from "../components/Slider";
import  "../css/home.css";
import cardicClinic from "../static/cardic-clinic.png";
import dentalSurgery from "../static/dental-surgery.png";
import gynologicalClinic from "../static/gyneological-clinic.png";
import preciseDiagnosis from "../static/precise-diagnosis.png";
import primaryHealthCare from "../static/primary-health-care.png";
import rehabCenter from "../static/rehab-center.png";

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation"


export default function Home(){
    return(
        <div className="home">
            <div className="section0">
                <Slider/>
            </div>
            <div className="main">
                <div className="section1">
                    <div className="section-inner">
                        <div className="container">
                            <div className="subtitle">
                                Qualified Doctors
                            </div>
                            <div className="title">
                                where people come first
                            </div>
                            <div className="body">Lorem ipsum dolor molestias sequi quidem suscipit molestiae unde, temporibus perspiciatis sed necessitatibus quos?</div>
                        </div>
                        <div className="hr" />
                        <div className="container">
                            <div className="subtitle">
                                Qualified Doctors
                            </div>
                            <div className="title">
                                where people come first
                            </div>
                            <div className="body">Lorem ipsum dolor molestias sequi quidem suscipit molestiae unde, temporibus perspiciatis sed necessitatibus quos?</div>
                        </div>
                        <div className="hr" />
                        <div className="container">
                            <div className="subtitle">
                                Qualified Doctors
                            </div>
                            <div className="title">
                                where people come first
                            </div>
                            <div className="body">Lorem ipsum dolor molestias sequi quidem suscipit molestiae unde, temporibus perspiciatis sed necessitatibus quos?</div>
                        </div>
                    </div>
                </div>
                <div className="section2">
                    <div className="slider">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={1}
                        >
                            <SwiperSlide className="slide" >
                                <div className="title">CHOOSE CONFIDENTLY</div>
                                <div className="subtitle">A GREAT PLACE TO WORK A GREAT PLACE TO RECIEVE CARE</div>
                                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ratione totam voluptatem, minus natus molestiae aspernatur velit nobis officia quae, dolorem possimus magnam adipisci expedita odio saepe nisi fuga inventore.</div>
                            </SwiperSlide>
                            <SwiperSlide className="slide" >
                                <div className="title">CHOOSE CONFIDENTLY</div>
                                <div className="subtitle">A GREAT PLACE TO WORK A GREAT PLACE TO RECIEVE CARE</div>
                                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ratione totam voluptatem, minus natus molestiae aspernatur velit nobis officia quae, dolorem possimus magnam adipisci expedita odio saepe nisi fuga inventore.</div>
                            </SwiperSlide>
                            <SwiperSlide className="slide" >
                                <div className="title">CHOOSE CONFIDENTLY</div>
                                <div className="subtitle">A GREAT PLACE TO WORK A GREAT PLACE TO RECIEVE CARE</div>
                                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ratione totam voluptatem, minus natus molestiae aspernatur velit nobis officia quae, dolorem possimus magnam adipisci expedita odio saepe nisi fuga inventore.</div>
                            </SwiperSlide>
                            <SwiperSlide className="slide" >
                                <div className="title">CHOOSE CONFIDENTLY</div>
                                <div className="subtitle">A GREAT PLACE TO WORK A GREAT PLACE TO RECIEVE CARE</div>
                                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ratione totam voluptatem, minus natus molestiae aspernatur velit nobis officia quae, dolorem possimus magnam adipisci expedita odio saepe nisi fuga inventore.</div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="nav">
                            <button className="prev .swiper-btn-prev" >&lt;</button>
                            <button className="next  .swiper-btn-next">&gt;</button>
                        </div>
                    </div>
                    <div className="img"><img src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" /></div>
                    <div className="img"><img src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRvY3RvcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" /></div>
                </div>
                <div className="section3">
                    <div className="title">Choose Department</div>
                    <div className="desc">Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh vel velit auctor aliquetenean. Cum sociis Theme natoque penatibus et magnis dis parturient nascetur ridiculus mus</div>
                    <div className="grid">
                        <div className="container">
                            <img src={primaryHealthCare} alt="" />
                            <div className="title">PRIMARY HEALTH CARE</div>
                            <div className="desc">Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudi</div>
                        </div>
                        <div className="container">
                            <img src={gynologicalClinic} alt="" />
                            <div className="title">GYNEOLOGICAL CLINIC</div>
                            <div className="desc">Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudi</div>
                        </div>
                        <div className="container">
                            <img src={preciseDiagnosis} alt="" />
                            <div className="title">PRECISE DIAGNOSIS</div>
                            <div className="desc">Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudi</div>
                        </div>
                        <div className="container">
                            <img src={cardicClinic} alt="" />
                            <div className="title">CARDIAC CLINIC</div>
                            <div className="desc">Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudi</div>
                        </div>
                        <div className="container">
                            <img src={dentalSurgery} alt="" />
                            <div className="title">DENTAL SURGERY</div>
                            <div className="desc">Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudi</div>
                        </div>
                        <div className="container">
                            <img src={rehabCenter} alt="" />
                            <div className="title">REHABILITATION CENTER</div>
                            <div className="desc">Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudi</div>
                        </div>
                    </div>
                </div>
                <div className="section4">
                    <div className="title">Latest tips & News</div>
                    <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni debitis accusantium voluptatibus enim labore sequi quis repellendus similique officiis. Harum!</div>
                    <div className="slider">
                        <Swiper
                            modules={[Navigation]}                            
                            spaceBetween={50}
                            slidesPerView={3}
                        >
                            <SwiperSlide className="slide" >
                                <div className="date">June 11, 2023</div>
                                <div className="title">integrative mdeicine and cancer treatment</div>
                                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ratione totam voluptatem, minus natus molestiae aspernatur velit nobis officia quae.</div>
                            </SwiperSlide>
                            <SwiperSlide className="slide" >
                                <div className="date">June 11, 2023</div>
                                <div className="title">integrative mdeicine and cancer treatment</div>
                                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ratione totam voluptatem, minus natus molestiae aspernatur velit nobis officia quae.</div>
                            </SwiperSlide>
                            <SwiperSlide className="slide" >
                                <div className="date">June 11, 2023</div>
                                <div className="title">integrative mdeicine and cancer treatment</div>
                                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ratione totam voluptatem, minus natus molestiae aspernatur velit nobis officia quae.</div>
                            </SwiperSlide>
                            <SwiperSlide className="slide" >
                                <div className="date">June 11, 2023</div>
                                <div className="title">integrative mdeicine and cancer treatment</div>
                                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ratione totam voluptatem, minus natus molestiae aspernatur velit nobis officia quae.</div>
                            </SwiperSlide>
                            <SwiperSlide className="slide" >
                                <div className="date">June 11, 2023</div>
                                <div className="title">integrative mdeicine and cancer treatment</div>
                                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ratione totam voluptatem, minus natus molestiae aspernatur velit nobis officia quae.</div>
                            </SwiperSlide>
                            <SwiperSlide className="slide" >
                                <div className="date">June 11, 2023</div>
                                <div className="title">integrative mdeicine and cancer treatment</div>
                                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ratione totam voluptatem, minus natus molestiae aspernatur velit nobis officia quae.</div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="section6">
                    <div className="title">EXCELLENCE IS OUR SPECIALITY</div>
                    <div className="desc">Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh vel velit auctor aliquetenean. Cum sociis Theme natoque penatibus et magnis dis parturient nascetur ridiculus mus</div>
                    <div className="grid">
                        <div className="card">
                            <img src="https://medigroup.qodeinteractive.com/wp-content/uploads/2016/06/h-img-4.jpg" alt="" />
                            <div className="title">WITH US, IT’S ALWAYS PERSONAL.</div>
                            <div className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque id quos, nobis possimus minus ratione.</div>
                        </div>
                        <div className="card">
                            <img src="https://medigroup.qodeinteractive.com/wp-content/uploads/2016/06/h-img-5.jpg" alt="" />
                            <div className="title">WITH US, IT’S ALWAYS PERSONAL.</div>
                            <div className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque id quos, nobis possimus minus ratione.</div>
                        </div>
                        <div className="card">
                            lorem150

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}