import React from 'react'
import BirdList from './Birds/BirdList'
import AddBird from './Birds/AddBird'
import { useTranslation } from 'react-i18next';
export default function Bird() {
  const { t } = useTranslation();

  return (
    <div>
      <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">{t('birdspage')}</h1>
            <p className="lead text-muted">{t('birdsmessage')}</p>
            <p>
              <div className="container">
                <AddBird />
              </div>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
        <BirdList />
        </div>
      </div>
    </main>
    </div>
  )
}
