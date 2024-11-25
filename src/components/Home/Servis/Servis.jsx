import React from 'react'
import "./Servis.scss"
import Call from '../../master-call/Call'


const Servis = () => {
  return (
    <>
    <div className='Servis'>
        <div className="container">
             <div className="text">
                <h1>Наши Услуги</h1>
             </div>


             <div className="Servis-parent">
               
               <div className="boxses1"> <img src="./public/Servis/remont-mfu-CYPp7AR7.png" alt="" /> <div className="card-content"> <h3>Все бренды</h3> <p>РЕМОНТ МФУ принтеров </p> <button>Подробнее </button> </div> </div>
               <div className="boxses2"> <img src="./public/Servis/remont-nout-Dy4yGOJ8.png" alt="" /> <div className="card-content"> <h3>Ремонт ноутбуков всех марок и моделей.</h3> <p> РЕМОНТ Ноутбуков </p> <button> Подробнее</button> </div> </div>
               <div className="boxses3"> <img src="./public/Servis/remont-shreder-CN7808_L.png" alt="" />  <div className="card-content"> <h3>Решение проблемы. Ремонт и обслуживание шредеров. </h3> <p> РЕМОНТ Шредеров</p> <button> РЕМОНТ Шредеров</button> </div> </div>
               <div className="boxses4"> <img src="./public/Servis/remont-termoprint-CM0XruvH.png" alt="" /> <div className="card-content"> <h3>С гарантией </h3> <p> РЕМОНТ Термопринт </p> <button> РЕМОНТ Шредеров</button> </div> </div>
               <div className="boxses5"> <img src="./public/Servis/remont-plotter-DPXAMF5a.png" alt="" /> <div className="card-content"> <h3>Любая сложность</h3> <p> РЕМОНТ Плоттеров </p> <button> РЕМОНТ Шредеров</button> </div> </div>
               <div className="boxses6"> <img src="./public/Servis/remont-pk-BhH4St5V.png" alt="" /> <div className="card-content"> <h3>Установка Windows программы. </h3> <p> РЕМОНТ КОМПЬЮТЕРОВ</p> <button> РЕМОНТ Шредеров</button> </div> </div>

             </div>

             <div className="Servis-brend">
                 <div className="text">
                  <h1>Наши Бренды</h1>
                 </div>

                 <div className="Brend-parent">
                     
                     <div data-aos="fade-right" className="brend"> <img src="./public/Brend/brand-canon-DilBFEjc.png" alt="" /> </div>
                     <div data-aos="fade-right" className="brend"> <img src="./public/Brend/brand-epson-Dx9ZIMvV.png" alt="" /> </div>
                     <div data-aos="fade-right" className="brend"> <img src="./public/Brend/brand-hewlett-CB9e-dkd (1).png" alt="" /> </div>
                     <div data-aos="fade-right"   data-aos-duration="500" className="brend"> <img src="./public/Brend/brand-kyocera-BCl3Ylt3.png" alt="" /> </div>
                     <div data-aos="fade-right"   data-aos-duration="500" className="brend"> <img src="./public/Brend/brand-oki-DRAmekg1.png" alt="" /> </div>
                     <div data-aos="fade-right"   data-aos-duration="500" className="brend"> <img src="./public/Brend/brand-samsung-vFraPuwF.png" alt="" /> </div>
                     <div data-aos="fade-right"  className="brend"> <img src="./public/Brend/brand-xerox-DKfsA-Rx.png" alt="" /> </div>
                     <div data-aos="fade-right" className="brend"> <img src="./public/Brend/brand-pantum-Bl_hCuJh.png" alt="" /></div>
                     <div data-aos="fade-right" className="brend"> <img src="./public/Brend/brand-ricoh-_wgxdrKi.png" alt="" /></div>

                 </div>

             </div>

        </div>
    </div>
    {/* <Call/> */}
    </>
  )
}

export default Servis