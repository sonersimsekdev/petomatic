import React from 'react'
import DogList from './Dog/DogList'
import AddDog from './Dog/AddDog'
export default function Dog() {
  return (
    <div>
      <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Dog's Page</h1>
            <p className="lead text-muted">You can manage all dogs on your own</p>
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
