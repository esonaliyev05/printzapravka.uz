import React from "react";
import "./Customer.scss";
import { useTranslation } from "react-i18next";
// import Swiper from "swiper";

const Customer = () => {
  const { t, i18n } = useTranslation();
  const handelChange = (event) => {
    const selectedLanugage = event.target.value;

    i18n.changeLanguage(selectedLanugage);
  };
  return (
    <div className="Customer">
      <div className="container">
        <div className="Concet-master">
          <h1>{t("Biz bilan bog‘lanish")}</h1>

          <div className="Concet-master-form">
            <form>
              <input type="text" placeholder="Имя" />
              <input type=" text" placeholder="Фамила" />
              <input type="text" placeholder="94 140 14 90" />

              <button type="submit">Отправить</button>
            </form>

            <div className="maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11960.483246752573!2d69.2350!3d41.3195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3b4c7085e85%3A0xdeb7632ec6801b88!2sQo'qon%20City!5e0!3m2!1sen!2s!4v1699700000000"
                width="350px"
                height="280px"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* <Swiper/> */}
    </div>
  );
};

export default Customer;
