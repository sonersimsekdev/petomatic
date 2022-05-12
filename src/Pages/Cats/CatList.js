import { useSelector } from "react-redux";
import AddCat from "./AddCat";
export default function UserList() {
  const cats = useSelector((state) => state.cats);
  return (
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
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {cats.map(({ id, name, food, weight, health, age, img }, i) => (
              <div className="col" key={id}>
                <div className="card shadow-sm">
                  <img
                    src={img}
                    className=" card-img-top "
                    width="100%"
                    height="250"
                    role="img"
                  />
                  <div className="card-body">
                    <p className="card-text">Name: {name}</p>
                    <ul className="list-group list-group-flush mb-1">
                      <li className="list-group-item list-group-item-action">
                        Food : {food}
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Weight: {weight}kg
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Health: {health}
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Age : {age}
                      </li>
                    </ul>
                    <div className="d-flex justify-content-between align-items-end ">
                      <div></div>
                      {/*<div>
                        <button
                          type="button"
                          className="btn btn-warning me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          Edit
                        </button>
                        <div
                          className="modal fade"
                          id="staticBackdrop"
                          data-bs-backdrop="static"
                          data-bs-keyboard="false"
                          tabindex="-1"
                          aria-labelledby="staticBackdropLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="staticBackdropLabel"
                                >
                                  Update {name}'s info
                                </h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body"></div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Cancel
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-success"
                                >
                                  Update
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="btn btn-danger ms-1">Delete</button>
            </div>*/}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
