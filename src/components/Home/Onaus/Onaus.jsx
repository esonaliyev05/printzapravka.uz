import React from "react";
import "./Onaus.scss";
import "aos/dist/aos.css";
import "aos/dist/aos.css"; // CSS
import AOS from "aos"; // JS
import { useTranslation } from "react-i18next";
AOS.init();
const Onaus = () => {
  const { t, i18n } = useTranslation();
  const handelChange = (event) => {
    const selectedLanugage = event.target.value;

    i18n.changeLanguage(selectedLanugage);
  };
  return (
    <>
      <div className="container">
        <div className="Onaus-parent">
          <div className="Onaus-boxs">
            <div data-aos="fade-right" data-aos-duration="3500" className="box">
              <img
                src="public/Onous/photo-1-wbPSPgqC.jpg"
                alt="Printer Image"
                class="card-image"
              />
              <div class="card-overlay">Связаться с нами</div>
              <div class="box-title">
              {t("Monoxromli lazerli kartridjlarni to'ldirish")}
                
              </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="3500" className="box">
              <img
                src="public/Onous/photo-1-wbPSPgqC.jpg"
                alt="Printer Image"
                class="card-image"
              />
              <div class="card-overlay">Связаться с нами</div>
              <div class="box-title">
              {t("Biz bilan bog'lanish")}

              </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="3500" className="box">
              <img
                src="public/Onous/photo-1-wbPSPgqC.jpg"
                alt="Printer Image"
                class="card-image"
              />
              <div class="card-overlay">Связаться с нами</div>
              <div class="box-title">
              {t("Rangli siyohli kartridjlarni to'ldirish")}
                
              </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="3500" className="box">
              <img
                src="public/Onous/photo-1-wbPSPgqC.jpg"
                alt="Printer Image"
                class="card-image"
              />
              <div class="card-overlay">Связаться с нами</div>
              <div class="box-title">
              {t("Rangli lazerli kartridjlarni to'ldirish")}

              </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="3500" className="box">
              <img
                src="public/Onous/photo-1-wbPSPgqC.jpg"
                alt="Printer Image"
                class="card-image"
              />
              <div class="card-overlay">Связаться с нами</div>
              <div class="box-title">
              {t("Kartridjlarni sotish")}

              </div>
            </div>
            {/* <div data-aos="fade-right"  data-aos-duration="3500" className="box">
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
          */}
          </div>
        </div>
        <div className="Onaus-text">
          <div className="Onaus-text-chiled">
            <div className="text1">
              <h1>{t("Biz haqimizda")}</h1>

              <p data-aos="fade-right" data-aos-duration="1150">
                {t("TAFAKKUR XIZMAT SAMARASI MChJ — bu bir necha yil davomida ofis texnikasini xizmat ko'rsatish sohasida muvaffaqiyatli faoliyat yuritayotgan, mijozlarga ishonchli va sifatli xizmatlarni taqdim etayotgan rivojlanayotgan kompaniya. Biz kartridjlarni to'ldirish va tiklash, printerlar va boshqa ofis texnikasini ta'mirlash va texnik xizmat ko'rsatishda ixtisoslashganmiz. Bizning jamoamiz murakkab vazifalarni hal qilishga tayyor bo'lgan tajribali mutaxassislardan iborat bo'lib, mijozlarimizga chiqimlarni kamaytirish va uskunalarni xizmat ko'rsatishda yordam beradi.")}
              </p>
            </div>
            <div className="text2">
              <h1>{t("Bizning qadriyatlarimiz va yondashuvimiz")}</h1>

              <p data-aos="fade-right" data-aos-duration="1150">
                {t("Biz bilamizki, ofis texnikasining to'g'ri ishlashi har qanday kompaniyaning muvaffaqiyatli faoliyatida muhim rol o'ynaydi. Bizning maqsadimiz — sizning printerlaringiz va boshqa qurilmalarinigiz uzluksiz va sifatli ishlashini ta'minlash. Har bir mijozga individual yondashuvni qadrlaymiz va bizning hamkorlarimizning ehtiyojlari va talablarini to'liq qondiradigan yechimlarni topishga intilamiz. Ishlashning yuqori standartlariga amal qilib, biz faqat sinovdan o'tgan materiallar va zamonaviy texnologiyalardan foydalanamiz, xizmatlarimizning uzoq muddatli va samarali bo'lishini kafolatlaymiz.")}
              </p>

              <button
                data-aos="fade-left"
                data-aos-duration="4000"
                type="submit"
                className="text-button"
              >
                {" "}
                {t("Batafsil ma'lumot olish")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Onaus;
