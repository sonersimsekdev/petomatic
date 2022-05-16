import React from 'react'
import DogList from './Dog/DogList'
import AddDog from './Dog/AddDog'
import { useTranslation } from 'react-i18next';
export default function Dog() {
  const { t } = useTranslation();
  return (
    <div>
      <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">{t('dogspage')}</h1>
            <p className="lead text-muted">{t('dogsmessage')}</p>
            <p>
              <div className="container">
                <AddDog />
              </div>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
        <DogList />
        </div>
      </div>
    </main>
    </div>
  )
}
