import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link, Outlet } from "react-router-dom"
export default function Navbar() {

  const { t } = useTranslation();
  const { i18n } = useTranslation();

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark " aria-label="Ninth navbar example" >
        <div className="container-xl">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample07XL">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">{t('home')}</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/bird">{t('bird')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dog">{t('dog')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cat">{t('cat')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fish">{t('fish')}</Link>
              </li>
            </ul>
            <button className="btn btn-light "> <Link className="nav-link" to="/login">{t('login')}</Link></button>
          </div>
          <div>
            <div class="dropdown m-2">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              {t('language')}
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><button class="dropdown-item" onClick={changeLanguage} value='tr'>TR</button></li>
                <li><button class="dropdown-item" onClick={changeLanguage} value='en'>EN</button></li>
              </ul>
            </div>
          </div>

        </div>
      </nav>
      <Outlet />
    </>
  )
}