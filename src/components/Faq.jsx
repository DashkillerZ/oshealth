import Accordion from "./Accordion";
import "../css/faq.css";
export default function Faq(props){
    let accordionData = [
        {
            title: 'accordion1',
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsum possimus dolorem obcaecati commodi, odit explicabo quod hic cupiditate. Quam."
        },
        {
            title: 'accordion2',
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsum possimus dolorem obcaecati commodi, odit explicabo quod hic cupiditate. Quam."
        },        
        {
            title: 'accordion3',
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsum possimus dolorem obcaecati commodi, odit explicabo quod hic cupiditate. Quam."
        },
        {
            title: 'accordion4',
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsum possimus dolorem obcaecati commodi, odit explicabo quod hic cupiditate. Quam."
        },
    ]
    return(
        <div className="faq">
            <div className="hero" style={{backgroundImage:"url('https://plus.unsplash.com/premium_photo-1668487827105-9139219cb19a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80')"}}>
                <div className="title">FAQ</div>
                <div className="breadcrumbs">MEDIAGROUP &gt; FAQ</div>
            </div>
            <div className="main">
                <div className="left">
                    <div className="title">FREQUENTLY ASKED QUESTIONS</div>
                    <div className="subtitle">A GREAT PLACE TO WORK. A GREAT PLACE TO RECEIVE CARE. LEADING MEDICINE.LOREM IPSUM PROIN GRAVIDA NIBH VEL VELIT AUCTOR ALIQUETENEAN SOLLICITUDIN, LOREM BIBENDUM</div>
                    <div className="accordion-list">
                    {
                        accordionData.map((accord,index)=>{
                            return (
                                <div key ={index}>
                                    <Accordion i={index} title={accord.title} body={accord.body} />
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                <div className="right">

                </div>
            </div>
        </div>
    )
}