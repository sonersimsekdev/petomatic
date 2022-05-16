import React from 'react'
import CatList from './Cats/CatList'
import AddCat from './Cats/AddCat'
import { useTranslation } from 'react-i18next';
export default function Cat() {
  const { t } = useTranslation();
  return (
    <div>
      <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">{t('catspage')}</h1>
            <p className="lead text-muted">{t('catsmessage')}</p>
            <p>
              <div className="container">
                <AddCat />
              </div>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
        <CatList />
        </div>
      </div>
    </main>
    </div>
  )
}
