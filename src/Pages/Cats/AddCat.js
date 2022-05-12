import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { catAdded } from "..//..//redux/CatSlice";

export default function AddUser() {

    const dispatch = useDispatch();
    const usersAmount = useSelector((state) => state.cats.length);

    const [name, setName] = useState("");
    const [food, setFood] = useState("");
    const [weight, setWeight] = useState("");
    const [health, setHealth] = useState("");
    const [age, setAge] = useState("");
    const [img, setImg] = useState("");


    function handleName  (e) { setName(e.target.value) };
    function handleFood  (e) { setFood(e.target.value)};
    function handleWeight  (e) { setWeight(Number(e.target.value))};
    function handleHealth  (e) { setHealth(e.target.value)};
    function handleImg  (e) { setImg(e.target.value)};
    function handleAge  (e) { setAge(Number(e.target.value))};

    const handleClick = () => {
        if (name && food && weight && health && age && img) {
          dispatch(
            catAdded({
              id: Number(usersAmount + 1),
              name,
              food,
              weight,
              health,
              age,
              img,
            })
          )
        } else {
          alert("Fill in all fields"+usersAmount);
          console.log("name"+name+usersAmount)
        }
    
        setName("");
        setFood("");
        setWeight("");
        setHealth("");
        setImg("");
        setAge("");

      };

    return (
        <>
            <div>
                <button type="button" className="btn btn-primary me-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    AddCat
                </button>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Add Cat</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        <div class="col-3 mb-3">
                                            <label class="form-label">Name
                                                <input type="text" onchange={(e) => setName(e.target.value)}class="form-control" />
                                            </label>
                                        </div>
                                        <div class="col-3 mb-3">
                                            <label class="form-label">Food
                                                <input type="text" onchange={handleFood} class="form-control" />
                                            </label>
                                        </div>
                                        <div class="col-3 mb-3">
                                            <label class="form-label">Weight
                                                <input type="number"  onchange={handleWeight} class="form-control" />
                                            </label>
                                        </div>
                                        <div class="col-3 mb-3">
                                            <label class="form-label">Health
                                                <input type="text"  onchange={handleHealth} class="form-control" />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div class="col-6 mb-3">
                                            <label class="form-label">Age
                                                <input type="number" onchange={handleAge} class="form-control" />
                                            </label>
                                        </div>
                                        <div class="col-6  mb-3">
                                            <label class="form-label">Img Link
                                                <input type="text" onchange={handleImg} class="form-control" />
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button  onClick={handleClick}  className="btn btn-success">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}