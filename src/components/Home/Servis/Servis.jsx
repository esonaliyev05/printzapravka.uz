import React from 'react'
import "./Servis.scss"
import Call from '../../master-call/Call'
import { useTranslation } from 'react-i18next'

const Servis = () => {
  const { t, i18n } = useTranslation();
  const handelChange = (event) => {
    const selectedLanugage = event.target.value;

    i18n.changeLanguage(selectedLanugage);
  };

  return (
    <>
    <div className='Servis'>
        <div className="container">
             <div className="text">
                <h1>{t("Bizning Xizmatlar")}</h1>
             </div>


             <div className="Servis-parent">
               
               <div className="boxses1"> <img src="./Servis/remont-mfu-CYPp7AR7.png" alt="" /> <div className="card-content"> <h3>{t("Barcha brendlar")}</h3> <p>{t("MFP printerlarni ta'mirlash")} </p> <button>{t("Batafsil")} </button> </div> </div>
               <div className="boxses2"> <img src="./Servis/remont-nout-Dy4yGOJ8.png" alt="" /> <div className="card-content"> <h3>{t("Har qanday brend va modeldagi noutbuklarni ta'mirlash.")}</h3> <p> {t("Noutbuklarni ta'mirlash")} </p> <button> {t("Batafsil")}</button> </div> </div>
               <div className="boxses3"> <img src="./Servis/remont-shreder-CN7808_L.png" alt="" />  <div className="card-content"> <h3> {t("Har qanday brend va modeldagi noutbuklarni ta'mirlash.")} </h3> <p> {t("Noutbuklarni ta'mirlash")} </p> <button> {t("Batafsil")} </button> </div> </div>
               <div className="boxses4"> <img src="./Servis/remont-termoprint-CM0XruvH.png" alt="" /> <div className="card-content"> <h3> {t("Kafolat bilan")} </h3> <p> {t("Termoprinterlarni ta'mirlash")} </p> <button> {t("Batafsil")}</button> </div> </div>
               <div className="boxses5"> <img src="./Servis/remont-plotter-DPXAMF5a.png" alt="" /> <div className="card-content"> <h3>{t("Har qanday murakkablik")} </h3> <p> {t("Plotterlarni ta'mirlash")} </p> <button> {t("Batafsil")} </button> </div> </div>
               <div className="boxses6"> <img src="./Servis/remont-pk-BhH4St5V.png" alt="" /> <div className="card-content"> <h3> {t("Windows va dasturlarni o‘rnatish.")} </h3> <p> {t("Kompyuterlarni ta'mirlash")} </p> <button> {t("Batafsil")} </button> </div> </div>

             </div>

             <div className="Servis-brend">
                 <div className="text">
                  <h1>{t("Bizning Brendlar")}</h1>
                 </div>

                 <div className="Brend-parent">
                     
                     <div data-aos="fade-right" className="brend"> <img src="./Brend/brand-canon-DilBFEjc.png" alt="" /> </div>
                     <div data-aos="fade-right" className="brend"> <img src="./Brend/brand-epson-Dx9ZIMvV.png" alt="" /> </div>
                     <div data-aos="fade-right" className="brend"> <img src="./Brend/brand-hewlett-CB9e-dkd (1).png" alt="" /> </div>
                     <div data-aos="fade-right"   data-aos-duration="500" className="brend"> <img src="./Brend/brand-kyocera-BCl3Ylt3.png" alt="" /> </div>
                     <div data-aos="fade-right"   data-aos-duration="500" className="brend"> <img src="./Brend/brand-oki-DRAmekg1.png" alt="" /> </div>
                     <div data-aos="fade-right"   data-aos-duration="500" className="brend"> <img src="./Brend/brand-samsung-vFraPuwF.png" alt="" /> </div>
                     <div data-aos="fade-right"  className="brend"> <img src="./Brend/brand-xerox-DKfsA-Rx.png" alt="" /> </div>
                     <div data-aos="fade-right" className="brend"> <img src="./Brend/brand-pantum-Bl_hCuJh.png" alt="" /></div>
                     <div data-aos="fade-right" className="brend"> <img src="./Brend/brand-ricoh-_wgxdrKi.png" alt="" /></div>

                 </div>

             </div>

        </div>
    </div>
    {/* <Call/> */}
    </>
  )
}

export default Servis