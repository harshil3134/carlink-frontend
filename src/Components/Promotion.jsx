import "./Promotion.css"

let Promotion = ()=>{
    return(
        <div className="pro_main">
            <div className="ecar_img">
                <img src="./images/nexoncar.png" className="evcar"></img>
            </div>
            <div className="text">
                <p className="text_ev">"Empowering journeys, electrifying the future."</p>
                <p className="offers">Special Offers On EV</p>
                <p className="offers_ev1">
"Unlock your first EV adventure with 10% off! Book now!"</p>
                <p className="offers_ev2">
"Rev up your savings! Enjoy 20% off all EV bookings now!"</p>
<button type="button" className="clickbtn">Get Stared</button>
            </div>
        </div>
    );
}
export default Promotion;