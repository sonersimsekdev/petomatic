import React from 'react'
import CatList from './Cats/CatList'
import AddCat from './Cats/AddCat'
export default function Cat() {
  return (
    <div>
      <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Cat's Page</h1>
            <p className="lead text-muted">You can manage all cat's your own</p>
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
