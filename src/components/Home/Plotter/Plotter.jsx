import React from "react";
import "./Plotter.scss";
import { useTranslation } from "react-i18next";

const Plotter = () => {

  const { t, i18n } = useTranslation();
  const handelChange = (event) => {
    const selectedLanugage = event.target.value;

    i18n.changeLanguage(selectedLanugage);
  };
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
               {t("Plotter printerlarni ta'mirlash") } <br /> {t("Sifat kafolati bilan!")}
            </h1>

            <p>
              {t("Biz sizning Plotter printeringizni yana yangidek ishlashi uchun ishonchli ta'mirlash va xizmat ko'rsatishni ta'minlaymiz.")}
            </p>
          </div>
        </div>
       
      </div>
       <div className="Plotter-backed-img">
         <img src="public/Plotter/fixed-fon-CsSjUvgT.jpg" alt="" />

               <div className="Plotter-box">
                 
                 <div data-aos="fade-right"  data-aos-duration="3500" className="boxt"> <h1>6</h1> <h2>{t("YILLARDAN BERI BOZORDA")}</h2> <p>{t("Printerlarni ta'mirlash va xizmat ko'rsatishda katta tajriba")} </p> </div>
                 <div data-aos="fade-right"  data-aos-duration="3500" className="boxt"> <h1>140000</h1> <h2>{t("TA'MIRLANGAN PRINTERLAR")}</h2> <p>{t("20 000 dan ortiq printerlar ta'mirlandi")}</p> </div>
                 <div data-aos="fade-right"  data-aos-duration="3500" className="boxt"><h1> 2500</h1> <h2>{t("FIKRLAR")}</h2> <p> {t("Mijozlarimiz ish sifatidan mamnun")} </p> </div>

               </div>

        </div>
        
    </div>
  );
};

export default Plotter;
