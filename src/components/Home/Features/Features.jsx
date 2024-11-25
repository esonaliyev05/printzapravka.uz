import React from "react";
import "./Features.scss";
import { FaTruckFast } from "react-icons/fa6";
import { TbClockHour5Filled } from "react-icons/tb";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaTools } from "react-icons/fa";

const Features = () => {
  return (
    <div className="Features">
      <div className="container">
        <div className="text">
          <h1 data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-duration="3500">
            Наши Перемущество

          </h1>
        </div>
         
         <div className="Features-app">
            
               <div className="Feartures-app-img">
                <img src="./public/Print/fon-viezd-BvJlsXsK.png" alt="" />
               </div>
               
               <div className="Parent-app">
               <div className="chiled-app"><div data-aos="fade-right"  data-aos-duration="3500" className="app"> <div className="icon"> <FaTruckFast/> </div> <div className="text-app"> <h2>Быстрый выезд</h2>  <p> Можете доверять мы Приедем к вам в течение</p> </div> </div> </div>
               <div className="chiled-app"><div data-aos="fade-right"  data-aos-duration="3800" className="app"> <div className="icon"> <TbClockHour5Filled/> </div> <div className="text-app"> <h2> Заправка картриджей</h2> <p>Максимально быстрая заправка картриджа</p> </div> </div> </div>
               <div className="chiled-app"><div data-aos="fade-right"  data-aos-duration="4000" className="app"> <div className="icon"> <AiFillCheckCircle/> </div> <div className="text-app"> <h2>Гарантия на товар</h2> <p> Используем только оригинальные картриджи и тонеры</p> </div> </div> </div>
               <div className="chiled-app"><div data-aos="fade-right"  data-aos-duration="4200" className="app"> <div className="icon"> <FaTools/> </div> <div className="text-app"> <h2> Оперативная поддержка</h2>  <p>Быстро решаем вопросы и устраняем неполадки</p> </div> </div> </div>

               </div>

         </div>

      </div>
    </div>
  );
};

export default Features;

