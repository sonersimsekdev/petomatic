import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { dogAdded } from "../../redux/DogSlice";
import { useTranslation } from 'react-i18next';
export default function AddDog() {

    const dispatch = useDispatch();
    const dogs = useSelector((state) => state.dogs.length);
    const { t } = useTranslation();

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
            dogAdded({
              id: Number(dogs + 1),
              name:name,
              food:food,
              weight:weight,
              health:health,
              age:age,
              img:img
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
                {t('addDog')}
                </button>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <span className="modal-title" id="staticBackdropLabel">{t('addDog')}</span>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-3 col-sm-8 mb-3">
                                    <label className="form-label">{t('name')}
                                        <input type="text" value={name} onChange={handleName} className="form-control" />
                                    </label>
                                </div>
                                <div className="col-lg-3 col-sm-8 mb-3">
                                    <label className="form-label">{t('foodLevel')}
                                        <select className="form-select" aria-label="Default select example" onChange={handleFood}>
                                            <option value={t('low')}>{t('low')}</option>
                                            <option value={t('medium')}>{t('medium')}</option>
                                            <option value={t('high')}>{t('high')}</option>
                                        </select>
                                    </label>
                                </div>
                                <div className="col-lg-3 col-sm-8 mb-3">
                                    <label className="form-label">{t('weight')}
                                        <input type="number" value={weight} min={0} max={100} onChange={handleWeight} className="form-control" />
                                    </label>
                                </div>
                                <div className="col-lg-3 col-sm-8 mb-3">
                                    <label className="form-label">{t('healthLevel')}
                                        <select className="form-select" aria-label="Default select example" onChange={handleHealth}>
                                        <option value={t('low')}>{t('low')}</option>
                                            <option value={t('medium')}>{t('medium')}</option>
                                            <option value={t('high')}>{t('high')}</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-sm-8">
                                    <label className="form-label">{t('age')}
                                        <input type="number" value={age} min={0} max={100} onChange={handleAge} className="form-control" />
                                    </label>
                                </div>
                                <div className="col-lg-6 col-sm-8">
                                    <label className="form-label">{t('Imglink')}
                                        <input type="text" value={img} onChange={handleImg} className="form-control" />
                                    </label>
                                </div>
                            </div>
                        </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{t('cancel')}</button>
                                <button onClick={handleClick} className="btn btn-success">{t('add')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}