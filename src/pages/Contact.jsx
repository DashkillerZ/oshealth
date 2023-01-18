import Form from "../components/Form";
import Static from "../static/Static.js"
import "../css/contact.css";
export default function Contact(){
    return ( 
        <div className="contact">           
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.5280130442734!2d-84.0807577!3d39.772704399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88409cc1dd40d127%3A0xf11920a3962a209b!2sOne%20Smarter!5e0!3m2!1sen!2sin!4v1672823558505!5m2!1sen!2sin"  allowFullScreen={true} title="map" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="flex">
                <Form title={true} />
                <div className="info">
                    <div>CONTACT INFO</div>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit odit dolore mollitia repellendus ex natus necessitatibus, voluptatem assumenda beatae dolorem, esse rem officia debitis alias est cum totam ipsa quas illum dolorum laborum enim numquam. Libero nesciunt iure voluptates dolorem voluptatum sunt a necessitatibus, dolore quod corporis similique nostrum! Voluptatem?</div>
                    <div>
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
                    </div>
                    <div className="list">
                        <div><span>EMERGENCY CONTACT</span> <span>(Free call 24/7)</span><span >+1234567789</span></div>
                        <div><span>HOME VISIT</span> <span>(Chargable call 24/7)</span><span >+1234567789</span></div>
                        <div><span>PHONE CONTACT</span> <span>(Within Working Hours)</span><span >+1234567789</span></div>
                        <div><span>FAX CONTACT</span> <span>(Within Working Hours)</span><span >+1234567789</span></div>
                        <div><span>EMAIL</span> <span></span><span >mediagroup@qodeinteractive.com</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 