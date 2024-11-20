import React from "react";
import "./Onaus.scss";
import "aos/dist/aos.css";
import "aos/dist/aos.css"; // CSS
import AOS from "aos"; // JS
AOS.init();
const Onaus = () => {
  return (
    <>
      <div className="container">
        <div className="Onaus-parent">
          <div className="Onaus-boxs">
            <div data-aos="fade-right"  data-aos-duration="3500" className="box">
            <img
    src="public/Onous/photo-1-wbPSPgqC.jpg"
    alt="Printer Image"
    class="card-image"
  />
  <div class="card-overlay">
    Связаться с нами
  </div>
  <div class="box-title">ЗАПРАВКА МОНОХРОМНЫЕ ЛАЗЕРНЫЕ КАРТРИДЖЕЙ</div>
            </div>
            <div data-aos="fade-right"  data-aos-duration="3500" className="box">
            <img
    src="printer.jpg"
    alt="Printer Image"
    class="card-image"
  />
  <div class="card-overlay">
    Связаться с нами
  </div>
            </div>
            <div data-aos="fade-right"  data-aos-duration="3500" className="box">
            <img
    src="printer.jpg"
    alt="Printer Image"
    class="card-image"
  />
  <div class="card-overlay">
    Связаться с нами
  </div>
            </div>
            <div data-aos="fade-right"  data-aos-duration="3500" className="box">
            <img
    src="printer.jpg"
    alt="Printer Image"
    class="card-image"
  />
  <div class="card-overlay">
    Связаться с нами
  </div>
            </div>
            <div data-aos="fade-right"  data-aos-duration="3500" className="box">
            <img
    src="printer.jpg"
    alt="Printer Image"
    class="card-image"
  />
  <div class="card-overlay">
    Связаться с нами
  </div>
            </div>
         
          </div>
          
        </div>
        <div className="Onaus-text">

          <div className="Onaus-text-chiled">

            <div className="text1">
              <h1>О нас</h1>

              <p data-aos="fade-right"    data-aos-duration="1150" > <span>"TAFAKKUR XIZMAT SAMARASI"</span> MChJ — это динамично развивающаяся компания, которая уже несколько лет успешно работает в сфере обслуживания офисной техники, обеспечивая клиентов надежными и качественными услугами. Мы специализируемся на заправке и восстановлении картриджей, ремонте и техническом обслуживании принтеров и другой оргтехники. Наша команда состоит из опытных специалистов, готовых решать самые сложные задачи и помогать нашим клиентам оптимизировать свои затраты на печать и обслуживание оборудования. </p>
            </div>
            <div className="text2">
              <h1>Наши ценности и подход</h1>

              <p data-aos="fade-right"    data-aos-duration="1150" >Мы понимаем, что исправная работа офисной техники играет важную роль в успешной работе любой компании. Наша цель — обеспечить бесперебойную и качественную работу ваших принтеров и других устройств. Мы гордимся индивидуальным подходом к каждому клиенту и стремимся находить решения, которые полностью удовлетворяют потребности и требования наших партнеров. Придерживаясь высоких стандартов работы, мы используем только проверенные материалы и современные технологии, чтобы гарантировать долговечность и эффективность наших услуг.</p>

              <button data-aos="fade-left"  data-aos-duration="4000" type="submit" className="text-button"> Узнать больше</button>
            </div>

          </div>
               

               </div>  

      </div>
    </>
  );
};

export default Onaus;
