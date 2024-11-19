import React from 'react'
// import { useTransition } from 'react-i18next'
import { useTranslation } from "react-i18next";
import "./Navbar.scss"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const {t, i18n} = useTranslation();
  const handelChange = (event) => {
    const selectedLanugage = event.target.value;

    i18n.changeLanguage(selectedLanugage);
  }
  
  return (
    <>
    <nav>
      <div className="container">
         <div className="Nav-logo">
          <NavLink to={"/"}>
          <img src="public/logo-print-BsJKyGnY.png" alt="Massanges" />
          </NavLink>
         </div>

         <div className="Nav-ul-concet">
          <ul>

           <li><NavLink to={"/"}>{t('Uy')}</NavLink></li>
           <li><NavLink to={"about"}>{t('Biz haqmizda')}</NavLink></li>
           <li><NavLink to={"uslug"}>{t('Xizmatlar')}</NavLink></li>
           <li><NavLink to={"brand"}>{t('Sotish va brendlar')}</NavLink></li>
           <li className='Nav-ul-button'><NavLink to={"mastercall"}>{t('Mutaxassisni chaqiring')}</NavLink></li>
          </ul>

          <select name="SelectionLenguech" id="lng" style={{cursor:"pointer"}} onChange={handelChange}>

          <option value="ru">ru</option>
          <option value="uz">uz</option>
          <option value="en">en</option>

          </select>

          {/* <button type='submit'> Yaxshi mastera</button> */}
         </div>

      </div>
    </nav>
    </>
  )
}

export default Navbar