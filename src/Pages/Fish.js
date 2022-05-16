import React from 'react'
import FishList from './Fishies/FishList'
import AddFish from './Fishies/AddFish'
import { useTranslation } from 'react-i18next';
export default function Fish() {
  const { t } = useTranslation();
  return (
    <div>
      <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">{t('fishpage')}</h1>
            <p className="lead text-muted">{t('fishmessage')}</p>
            <p>
              <div className="container">
                <AddFish />
              </div>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
        <FishList />
        </div>
      </div>
    </main>
    </div>
  )
}
