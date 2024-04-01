import "./Brands.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Brands() {
    var settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500    ,
        slidesToShow: 5,
        slidesToScroll: 1,
      };
  return (
   <div className="fullcontainer">
    <p className="brands_title">Brands</p>
    <div className="container_brands">
         <Slider {...settings}>
        {data.map((d) =>(
            <div className="brands_name">
                <img src={d.img} alt="" className="brandsimg"></img>
                
            </div>
        ))}
        </Slider>
    </div>
    </div>
    
  )
}
const data=[
    {
        img : './images/Tata.JPG',
        car_name: 'Tata',
    },
    {
        img : './images/volks.JPG',
        car_name : 'Volkswagen',
    },
    {
        img: './images/skoda.JPG',
        car_name: 'Skoda',
    },
    {
        img: './images/toyota.JPG',
        car_name: 'Toyota',
    },
    {
        img: './images/renault.JPG',
        car_name: 'Renault',
    },
    {
        img: './images/nissan.JPG',
        car_name: 'Nissan',
    },
    {
        img: './images/maruti.JPG',
        car_name: 'Maruti Suzuki',
    },
    {
        img: './images/kia.JPG',
        car_name: 'Kia',
    },
    {
        img: './images/ford.JPG',
        car_name: 'Ford',
    },
    {
        img: './images/honda.JPG',
        car_name: 'Honda',
    },
    {
        img: './images/hyundai.JPG',
        car_name: 'Hyundai',
    }

]
export default Brands