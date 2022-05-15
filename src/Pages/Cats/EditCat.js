import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { catUpdated } from "..//..//redux/CatSlice";

export default function EditCat({ catid_ , name_, food_, weight_, health_, age_, img_}) {

  const cat = useSelector((state) =>
  state.cats.find((cats) => cats.name === name_)
);


  const dispatch = useDispatch();
 //propları verirsem hep tekir çıkıyo

  const [name, setName] = useState("");
  const [food, setFood] = useState("");
  const [weight, setWeight] = useState("");
  const [health, setHealth] = useState("");
  const [age, setAge] = useState("");
  const [img, setImg] = useState("");

  
  function handleName(e) { setName(e.target.value) };
  function handleFood(e) { setFood(e.target.value) };
  function handleWeight(e) { setWeight(Number(e.target.value)) };
  function handleHealth(e) { setHealth(e.target.value) };
  function handleImg(e) { setImg(e.target.value) };
  function handleAge(e) { setAge(Number(e.target.value)) };

  


  const handleClick = () => {
    if (name && food && weight && health && age && img) {
      dispatch(
        catUpdated({
          name: name,
          food: food,
          weight: weight,
          health: health,
          age: age,
          img: img,
        })
      );
    }
    setName("");
    setFood("");
    setWeight("");
    setHealth("");
    setImg("");
    setAge("");
  };

  const handleClose = () => {
    setName("");
    setFood("");
    setWeight("");
    setHealth("");
    setImg("");
    setAge("");
  };

  return (
    <>

      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Edit
      </button>


      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Cat</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                                <div className="row">
                                    <div className="col-3 mb-3">
                                        <label className="form-label">Name
                                            <input type="text" value={name} onChange={handleName} className="form-control" />
                                        </label>
                                    </div>
                                    <div className="col-3 mb-3">
                                        <label className="form-label">Food
                                            <select class="form-select" aria-label="Default select example" onChange={handleFood}>
                                                <option selected>Choose food level</option>
                                                <option value="Low">Low</option>
                                                <option value="Middle">Middle</option>
                                                <option value="High">High</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className="col-3 mb-3">
                                        <label className="form-label">Weight
                                            <input type="number" value={weight} min={0} max={100} onChange={handleWeight} className="form-control" />
                                        </label>
                                    </div>
                                    <div className="col-3 mb-3">
                                        <label className="form-label">Health
                                        <select class="form-select" aria-label="Default select example" onChange={handleHealth}>
                                                <option selected>Choose health level</option>
                                                <option value="Low">Low</option>
                                                <option value="Middle">Middle</option>
                                                <option value="High">High</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 mb-3">
                                        <label className="form-label">Age
                                            <input type="number" value={age} min={0} max={100} onChange={handleAge} className="form-control" />
                                        </label>
                                    </div>
                                    <div className="col-6  mb-3">
                                        <label className="form-label">Img Link
                                            <input type="text" value={img} onChange={handleImg} className="form-control" />
                                        </label>
                                    </div>
                                </div>
                            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}