import { useSelector } from "react-redux";
import EditCat from "./EditCat";
import DeleteCat from "./DeleteCat";
import "..//..//styles/_card.scss"
import Hoc from "..//..//Components/Hoc"
export const  CatList = () => {
  const cats = useSelector((state) => state.cats);


  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {cats.map(({ id, name, food, weight, health, age, img }) => (
        <div className="col" key={id} >
          <div className="card shadow-sm card2" >
            <img
              src={img}
              className=" card-img-top "
              width="100%"
              height="250"

              alt={name}
            />
            <div className="card-body">
              <p className="card-text">Name: {name}</p>
              <div className="d-flex flex-row flex-wrap gap-2 mb-1">
                <button type="button" className="btn btn-primary disabled">Food : {food}</button>
                <button type="button" className="btn btn-secondary disabled">Weight: {weight} kg</button>
                <button type="button" className="btn btn-info disabled">Health: {health}</button>
                <button type="button" className="btn btn-dark disabled">Age : {age}</button>
              </div>
              <div className="d-flex justify-content-end">
                <div> <EditCat catid_={id} name_={name} food_={food} weight_={weight} health_={health} age_={age} img_={img} /></div>
                <div><DeleteCat id={id} /></div>
              </div>
            </div>
          </div>
        </div>
      ))
      }
    </div >
  );
}

export default Hoc(CatList)