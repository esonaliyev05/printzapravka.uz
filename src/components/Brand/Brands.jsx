import React, { useState } from "react";
import "./Brands.scss";

const Brands = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="Reand-parent">
      <div className="container">
        <div className="text">
          <h3> Продажа и Бренды</h3>
        </div>

        <div className={open ? "Brents-boxses active" : "Brents-boxses"}>
          <div className="box">
            {" "}
            <div className="box-img">
              {" "}
              <img src="./public/Brend/brand-canon-DilBFEjc.png" alt="" />{" "}
            </div>

              <div className="box-text">
                {" "}
                <h3>
                  Партнерство с <span>Canon</span>
                </h3>
                <p>
                  {" "}
                  Мы уже более 10 лет предоставляем услуги по ремонту принтеров
                  и заправке картриджей <span>Canon.</span> Работаем с
                  оригинальными комплектующими и знаем все нюансы продукции{" "}
                  <span>Canon</span>, что позволяет нам обеспечивать надежность
                  и высокое качество ремонта.
                </p>
              </div>
          </div>
          <div className="box">
            {" "}
            <div className="box-img">
               <img src="./public/Brend/brand-epson-Dx9ZIMvV.png" alt="" />
            </div>
              <div className="box-text">
                <h3>Партнерство с <span>Epson</span> </h3>

                <p>Специалисты нашей компании имеют большой опыт в обслуживании и ремонте принтеров <span>Epson.</span> Мы выполняем диагностику, ремонт и заправку картриджей, предлагая качественное обслуживание и оригинальные расходные материалы.

</p>

              </div>
          </div>
          <div className="box">
            {" "}
            <div className="box-img">
              <img src="./public/Brend/brand-hewlett-CB9e-dkd (1).png" alt="" />
            </div>
              <div className="box-text">
                <h3>Партнерство с <span>HP</span> </h3>

              <p>Мы являемся экспертами в ремонте принтеров и заправке картриджей <span>HP.</span> В нашей практике – сотни успешных ремонтов, что позволяет нам предложить надежные и быстрые решения для принтеров <span>HP.</span></p>
              </div>
          </div>
          <div className="box">
            {" "}
            <div className="box-img">
              
              <img src="./public/Brend/brand-kyocera-BCl3Ylt3.png" alt="" />

            </div>
              <div className="box-text">
                
                <h3>Партнерство с <span>KYOCERA</span> </h3>

                <p>Специализируясь на ремонте принтеров <span>KYOCERA</span>, мы гарантируем качественное и профессиональное обслуживание. Мы используем проверенные комплектующие и тщательно диагностируем каждое устройство для наилучшего результата.</p>

              </div>
          </div>
          <div className="box">
            {" "}
            <div className="box-img">
              <img src="./public/Brend/brand-oki-DRAmekg1.png" alt="" />
            </div>
              <div className="box-text">
                <h3>Партнерство с <span> OKI</span> </h3>

                <p>Уже много лет мы работаем с принтерами <span>OKI</span>, предоставляя качественные услуги по ремонту и заправке картриджей. Наш опыт позволяет восстанавливать устройства <span> OKI</span> до заводских стандартов, обеспечивая надежную и долговечную работу.</p>

              </div>
          </div>
          <div className="box">
            {" "}
            <div className="box-img">
              <img style={{width: "150px"}} src="./public/Brend/brand-samsung-vFraPuwF.png" alt="" />
            </div>
              <div className="box-text">
                <h3>Партнерство с <span>Samsung</span></h3>
                <p> Мы успешно работаем с принтерами <span>Samsung</span> , предлагая полный спектр услуг по их ремонту и обслуживанию. Благодаря использованию качественных деталей и нашему опыту мы гарантируем долговечность каждого отремонтированного устройства.</p>
              </div>
          </div>
          <div className="box">
            {" "}
            <div className="box-img">
              <img src="./public/Brend/brand-xerox-DKfsA-Rx.png" alt="" />
            </div>
              <div className="box-text">
                <h3> Партнерство с <span> Xerox</span></h3>
                <p>Более десяти лет мы работаем с принтерами <span>Xerox</span> , предоставляя услуги по их ремонту и заправке картриджей. Наша команда справляется с любыми неисправностями, возвращая устройствам высокое качество печати.</p>
              </div>
          </div>
          <div className="box">
            {" "}
            <div className="box-img">
              <img src="./public/Brend/brand-pantum-Bl_hCuJh.png" alt="" />
            </div>
              <div className="box-text">
                <h3>Партнерство с <span>Pantum</span></h3>

                <p> Мы также предлагаем услуги по ремонту и заправке картриджей принтеров <span>Pantum</span>. Благодаря нашим знаниям и оригинальным деталям мы помогаем продлить срок службы устройств и сохранить их эффективность.</p>

              </div>
          </div>
          <div className="box">
            {" "}
            <div className="box-img">
              <img src="./public/Brend/brand-ricoh-_wgxdrKi.png" alt="" />
            </div>
              <div className="box-text">
                <h3>Партнерство с <span>Ricoh</span> </h3>
                <p>Наша компания успешно обслуживает принтеры <span>Ricoh</span>, выполняя полную диагностику и ремонт. Мы знаем все тонкости техники <span>Ricoh</span> и обеспечиваем надежное обслуживание, которое возвращает устройствам высокое качество печати.</p>
              </div>
          </div>
      
        </div>

        <button onClick={() => setOpen(!open)} className="brent-btn">
          {open ? "Скрыть" : "Показать все"}
        </button>
      </div>
    </div>
  );
};

export default Brands;
