import React from 'react'
import "./Plotter.scss"

const Plotter = () => {
  return (
    <div className='Plotter'>
       
       <div className="container">
          
          <div className="Plotter-parent">

            {/* <img src="" alt="" /> */}
             
             <div className="ploter-backed">
                <div className="blur">

                </div>

                <div className="bac1">
                    <img src="./Plotter/fourthbanner-nAd0r_eJ.png" alt="" />
                </div>
                <div className="bac2">
                    <img src="./Plotter/fourthbannerprint-MywiEDUR.png" alt="" />
                </div>
             </div>
             <div className="ploter-frond">
              
             <h1>Ремонт Plotter принтеровс гарантией качества!</h1>

             </div>
          </div>

       </div>

    </div>
  )
}

export default Plotter