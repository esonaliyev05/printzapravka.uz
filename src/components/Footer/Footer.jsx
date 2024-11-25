import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="Footer-parent">
          <div className="Footer-logo">
            <img src="./public/Footer/logo-print-BsJKyGnY.png" alt="" />
          </div>
          <div className="Footer-text-1">
            <h3>Компания</h3>

            <a href="#">О нас</a>
            <a href="#">Наши Перемущество</a>
            <a href="#">Наши Услуги</a>
          </div>
          <div className="Footer-text-2">
            <h3>Контакты</h3>

            <a href="">tafakkurxizmatsamarasimchj@gmail.com</a>
            <a href="">+998940511494</a>
            <a href="">Адрес</a>
            <a href="">Сиргалийский район, махалля Номданак, улица Файзли, дом 11.</a>
          </div>
          <div className="Footer-text-3">
           
           <h3> Вызов мастера</h3>
               
               <p> Сломался ли ваш принтер или другая техника? Если у вас нет возможности привезти оборудование в мастерскую, наши специалисты готовы помочь! Все, что вам нужно сделать — это позвонить, и мы приедем к вам для диагностики и ремонта.</p>
              
              <button type="submit">На Выезд</button>

          </div>
        </div>
          
          <div className="Footer-end">
           
           <h3> © 2022 "TAFAKKUR XIZMAT SAMARASI" MChJ </h3>
            
            <p>  Created By <span>LIMSA</span> </p>

          </div>

      </div>
    </div>
  );
};

export default Footer;
