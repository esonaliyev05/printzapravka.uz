// import React from "react";
// import "./Call.scss";
// import axios from "axios";

// const Call = () => {
 
//   const SendMassamges = (event) => {
//     event.preventDefault();
//     const token = "8014119539:AAEkEiT-5aYGSUVI2F7VbIt1F2jN1M_aM5Q";
//     const chat_id = 1271362249;
//     const url = `https://api.telegram.org/bot${token}/sendMessage`;
//     const name = document.getElementById("name").value;
//     const surname = document.getElementById("surname").value;
//     const number = document.getElementById("number").value;
//     const massageContent = `ismi ${name} \n Familyasi ${surname} \n Nomeri${number}`;
      
//     https://core.telegram.org/bots/api

//     axios({
//       url: url,
//       method: 'POST',
//       data:{
//         "chat_id":chat_id,
//         "text" : massageContent,
//       }
//     }).then((res)=>{
//       alert("Mufaqyatli yuborldi")

//     }).catch((error) => {
//       console.log("Yuborishda xatolik" , error);

//     })



//   }

//   return (
//     <>
//       <div className="Masster-call">
//         <div className="container">
//           <div className="Masster-call-concet">
//             <h1 className="concet-h1"> Связаться с нами</h1>

//             <div className="concet-parent">
//               <div className="concet-chiled">
//                 <form id="myForm" onSubmit={SendMassamges}>
//                   <input type="name" id="name" placeholder="Имя" />
//                   <input type="text" id="surname" placeholder="фамилиа" />
//                   <input type="number" id="number" placeholder="94 599 93 38" />

//                   <button type="submit" id="submit">Отправит</button>
//                 </form>
//               </div>
//               <div className="concet-chiled">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11960.483246752573!2d69.2350!3d41.3195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3b4c7085e85%3A0xdeb7632ec6801b88!2sQo'qon%20City!5e0!3m2!1sen!2s!4v1699700000000"
//                   width="350px"
//                   height="260"

//                   //   style="border:0;"
//                   //   allowfullscreen=""
//                   //   loading="lazy"

//                   ></iframe>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Call;
import React from "react";
import "./Call.scss";
import axios from "axios";

const Call = () => {
  const SendMassamges = (event) => {
    event.preventDefault();
    const token = "8014119539:AAEkEiT-5aYGSUVI2F7VbIt1F2jN1M_aM5Q";
    const chat_id = 6992354984;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const number = document.getElementById("number").value.trim();
       
      
    // Bo'sh maydonlarni tekshirish
    if (!name || !surname || !number) {
      alert("Iltimos, barcha maydonlarni to'ldiring.");
      return;

    }

    const massageContent = `Ismi: ${name}\n Familyasi: ${surname}\n Nomeri: ${number}`;

    axios
      .post(url, {
        url: url,
        chat_id: chat_id,
        text: massageContent,
      })
      .then((res) => {
        alert("Xabar muvaffaqiyatli yuborildi!");
      })
      .catch((error) => {
        console.log("Yuborishda xatolik: ", error.response?.data || error.message);
        alert("Xabar yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
        
      });
  };

  return (
    <>
      <div className="Masster-call">
        <div className="container">
          <div className="Masster-call-concet">
            <h1 className="concet-h1">Связаться с нами</h1>
            <div className="concet-parent">
              <div className="concet-chiled">
                <form id="myForm" onSubmit={SendMassamges}>
                  <input type="text" id="name" placeholder="Имя" />
                  <input type="text" id="surname" placeholder="Фамилия" />
                  <input type="text" id="number" placeholder="94 599 93 38" />
                  <button type="submit" id="submit">
                    Отправить
                  </button>
                </form>
              </div>
              <div className="concet-chiled">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11960.483246752573!2d69.2350!3d41.3195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3b4c7085e85%3A0xdeb7632ec6801b88!2sQo'qon%20City!5e0!3m2!1sen!2s!4v1699700000000"
                  width="350px"
                  height="260"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Call;

