import { useEffect } from "react";
import gsap from "gsap";
import "./OfferSection.css" ;

const OfferSection = () => {
    useEffect(()=>{
        gsap.from(".float-img", {
    // rotation: 5,
    x: "-10",
    repeat: -1,
    yoyo: true,
    duration:3,
    ease: "bounce.in",

})
    })
    
    return (
        <>
            {/* <!-- -------------------------------Offer ki 3 Images ka section--------------------------> */}
            <div className="offerSection1">
                <div className="offercontainer1">

                    <div className="offer-card1 offer-card">
                        <div className="offer-card-content">
                            <h6>ON THIS WEEK</h6>
                            <h3>MUST BUY COMBO </h3>
                            <p>#Limited Time Offer</p>
                            <button className="offer1-card-btn" type="button">Order Now</button>
                        </div>
                        <div className="offer-card-thumb">
                            <img className="thumbimg" src="/assets/images/offerThumb1.png" alt="" />
                            <div className="offer-float-img">
                                <img className="float-img" src="/assets/images/offerShape1_4.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="offer-card2 offer-card">
                        <div className="offer-card-content">
                            <h6>ON THIS WEEK</h6>
                            <h3>MOST ORDERED BURGER</h3>
                            <p>#Limited Time Offer</p>
                            <button className="offer1-card-btn" type="button">Order Now</button>
                        </div>
                        <div className="offer-card-thumb">
                            <img className="thumbimg" src="/assets/images/offerThumb1_2.png" alt="" />
                            <div className="offer-float-img">
                                <img className="float-img" src="/assets/images/offerShape1_4.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="offer-card3 offer-card">
                        <div className="offer-card-content">
                            <h6>#SipNcruch</h6>
                            <h3>SPECIAL CHICKEN ROLL</h3>
                            <p>#Limited Time Offer</p>
                            <button className="offer1-card-btn" type="button">Order Now</button>
                        </div>
                        <div className="offer-card-thumb">
                            <img className="thumbimg" src="/assets/images/offerThumb1_3.png" alt="" />
                            <div className="offer-float-img">
                                <img className="float-img" src="/assets/images/offerShape1_4.png" alt="" />
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </>
    )
}

export default OfferSection