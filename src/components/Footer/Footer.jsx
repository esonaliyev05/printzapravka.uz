import React from "react";
import "./Footer.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const handelChange = (event) => {
    const selectedLanugage = event.target.value;

    i18n.changeLanguage(selectedLanugage);
  };
  return (
    <div className="Footer">
      <div className="container">
        <div className="Footer-parent">
          <div className="Footer-logo">
            <img src="./public/Footer/logo-print-BsJKyGnY.png" alt="" />
          </div>
          <div className="Footer-text-1">
            <h3>{t("Kompaniya")}</h3>

            <a href="#"> {t("Biz haqimizda")} </a>
            <a href="#">{t("Bizning afzalliklarimiz")}</a>
            <a href="#">{t("Bizning xizmatlarimiz")}</a>
          </div>
          <div className="Footer-text-2">
            <h3>{t("Kontaktlar")}</h3>

            <a href="">tafakkurxizmatsamarasimchj@gmail.com</a>
            <a href="">+998940511494</a>
            <a href="">{t("Manzil")}</a>
            <a href="">{t("Sergeli tumani, Nomdanak mahallasi, Fayzli ko‘chasi, 11-uy.")}</a>
          </div>
          <div className="Footer-text-3">
           
           <h3> {t("Ustani chaqirish")} </h3>
               
               <p> {t("Sizning printeringiz yoki boshqa texnikangiz buzildimi? Agar uskunani ustaxonaga olib kelish imkoni bo‘lmasa, bizning mutaxassislarimiz yordam berishga tayyor! Sizdan talab qilinadigan narsa — qo‘ng‘iroq qilish, biz esa diagnostika va ta’mir uchun sizning oldingizga kelamiz.")}</p>
              
              <button type="submit"> {t("Joyida ta’mirlash")} </button>

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
