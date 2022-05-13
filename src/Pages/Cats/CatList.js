import { useSelector} from "react-redux";
import EditCat from "./EditCat";
import DeleteCat from "./DeleteCat";

export default function CatList() {
  const cats = useSelector((state) => state.cats);



  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {cats.map(({ id, name, food, weight, health, age, img }) => (
        <div className="col" key={id} >
          <div className="card shadow-sm">
            <img
              src={img}
              className=" card-img-top "
              width="100%"
              height="250"
            
              alt={name}
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
              <div className="d-flex">
                <div> <EditCat id_={id} name_={name} food_={food} weight_={weight} health_={health} age_={age} img_={img} /></div>
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
