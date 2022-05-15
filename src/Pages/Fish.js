import React from 'react'
import FishList from './Fishies/FishList'
import AddFish from './Fishies/AddFish'
export default function Fish() {
  return (
    <div>
      <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Fish Page</h1>
            <p className="lead text-muted">You can manage all fish on your own</p>
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
