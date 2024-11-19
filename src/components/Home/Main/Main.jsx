import React from "react";
import "./Main.scss";
import "animate.css";
import { useTranslation } from "react-i18next";

const Main = () => {

  const {t, i18n} = useTranslation();
  const handelChange = (event) => {
    const selectedLanugage = event.target.value;

    i18n.changeLanguage(selectedLanugage);
  }
  
  return (
    <>
    <div className="main">

      <div className="container-home">
        <div className="home-parent">
          <div className="home-parent-text">
            <h3 className="animate__animated animate__fadeInLeft animate__delay-0.9s text-h3">
              {t("Ishonchlilik va sifat")}
            </h3>

            <h1 className="animate__animated animate__fadeInLeft animate__delay-0.9s text-h1">
              {t("Kartrijni ta'mirlash va to'ldirish. Mutaxassisning uyingizga yoki ofisingizga tezkor tashrifi!")}
            </h1>

            <p className="animate__animated animate__fadeInUp animate__delay-1.9s text-p">
             {t("Printerlar, kompyuterlar, monobloklar va boshqa orgtexnika jihozlarini sifatli ta’mirlash, shuningdek, kartridjlarni kafolat bilan to‘ldirishni taklif etamiz.")}
            </p>

            <div className="home-parent-button">
              <button className="animate__animated animate__fadeInLeft animate__delay-1.1s">{t("Ta'mirlashga buyurtma bering")}</button>
              <button className="animate__animated animate__fadeInRight animate__delay-1.1s">{t("Batafsil ma'lumot oling")}</button>
            </div>
          </div>

          <div className="home-parent-img">
            <div className="img-clon">
            <img src="public/introimages-BtPiIBjT.png" alt="" />

            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Main;
