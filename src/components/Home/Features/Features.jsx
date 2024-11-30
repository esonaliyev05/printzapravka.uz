import React, { useTransition } from "react";
import "./Features.scss";
import { FaTruckFast } from "react-icons/fa6";
import { TbClockHour5Filled } from "react-icons/tb";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t, i18n } = useTranslation();
  const handelChange = (event) => {
    const selectedLanugage = event.target.value;

    i18n.changeLanguage(selectedLanugage);
  };
  return (
    <div className="Features">
      <div className="container">
        <div className="text">
          <h1 data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-duration="3500">
            {t("Bizning Afzalliklarimiz")}
          </h1>
        </div>
         
         <div className="Features-app">
            
               <div className="Feartures-app-img">
                <img src="./public/Print/fon-viezd-BvJlsXsK.png" alt="" />
               </div>
               
               <div className="Parent-app">
               <div className="chiled-app"><div data-aos="fade-right"  data-aos-duration="3500" className="app"> <div className="icon"> <FaTruckFast/> </div> <div className="text-app"> <h2>{t("Tezkor chiqish")}</h2>  <p>{t("Ishonishingiz mumkin, biz sizga kerakli vaqtda kelamiz.")}</p> </div> </div> </div>
               <div className="chiled-app"><div data-aos="fade-right"  data-aos-duration="3800" className="app"> <div className="icon"> <TbClockHour5Filled/> </div> <div className="text-app"> <h2>{t("Kartiridjlarga to‘ldirish")}</h2> <p> {t("Kartiridjlarni maksimal tezlikda to‘ldiramiz.")} </p> </div> </div> </div>
               <div className="chiled-app"><div data-aos="fade-right"  data-aos-duration="4000" className="app"> <div className="icon"> <AiFillCheckCircle/> </div> <div className="text-app"> <h2> {t("Mahsulotga kafolat")} </h2> <p> {t("Faqat original kartiridjlar va tonerlardan foydalanamiz.")} </p> </div> </div> </div>
               <div className="chiled-app"><div data-aos="fade-right"  data-aos-duration="4200" className="app"> <div className="icon"> <FaTools/> </div> <div className="text-app"> <h2> {t("Tezkor yordam")} </h2>  <p> {t("Savollarni tez hal qilamiz va nosozliklarni bartaraf etamiz.")} </p> </div> </div> </div>

               </div>

         </div>

      </div>
    </div>
  );
};

export default Features;

