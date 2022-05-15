import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { catAdded } from "..//..//redux/CatSlice";

export default function AddCat() {

    const dispatch = useDispatch();
    const cats = useSelector((state) => state.cats.length);

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
                catAdded({
                    id: Number(cats + 1),
                    name: name,
                    food: food,
                    weight: weight,
                    health: health,
                    age: age,
                    img: img
                })
            )
        } else {

            alert("Fill in all fields");
            console.log(name)
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
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button onClick={handleClick} className="btn btn-success">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}