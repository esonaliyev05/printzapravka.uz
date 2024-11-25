import React from "react";
import "./Plotter.scss";

const Plotter = () => {
  return (
    <div className="Plotter">
      <div className="container">
        <div className="Plotter-parent">
          {/* <img src="" alt="" /> */}

          <div className="ploter-backed">
            <div className="blur"></div>

            <div className="bac1">
              <img src="./public/Plotter/fourthbanner-nAd0r_eJ.png" alt="" />
            </div>
            <div className="bac2">
              <img
                src="./public/Plotter/fourthbannerprint-MywiEDUR.png"
                alt=""
              />
            </div>
          </div>
          <div className="ploter-frond">
            <h1>
              Ремонт Plotter принтеров с <br /> гарантией качества!{" "}
            </h1>

            <p>
              Мы обеспечим надежный ремонт и обслуживание вашего Plotter
              принтера, чтобы он снова работал как новый.
            </p>
          </div>
        </div>
       
      </div>
       <div className="Plotter-backed-img">
         <img src="public/Plotter/fixed-fon-CsSjUvgT.jpg" alt="" />

               <div className="Plotter-box">
                 
                 <div data-aos="fade-right"  data-aos-duration="3500" className="boxt"> <h1>6</h1> <h2>ЛЕТ НА РЫНКЕ</h2> <p>Огромный опыт в ремонте и обслуживании принтеров</p> </div>
                 <div data-aos="fade-right"  data-aos-duration="3500" className="boxt"> <h1>140000</h1> <h2>ПРИНТЕРОВ ОТРЕМОНТИРОВАНО</h2> <p>Выполнено более 20 000 ремонтов принтеров</p> </div>
                 <div data-aos="fade-right"  data-aos-duration="3500" className="boxt"><h1> 2500</h1> <h2>ОТЗЫВОВ</h2> <p> Наши клиенты довольны качеством работы</p> </div>

               </div>

        </div>
    </div>
  );
};

export default Plotter;
