import { useSelector} from "react-redux";
import EditDog from "./EditDog";
import DeleteDog from "./DeleteDog";
import "..//..//styles/_card.scss"
import Hoc from "..//..//Components/Hoc"
export const DogList = () => {
  const dogs = useSelector((state) => state.dogs);
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {dogs.map(({ id, name, food, weight, health, age, img }) => (
        <div className="col" key={id} >
          <div className="card shadow-sm card2">
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
                <div> <EditDog dogid_={id} name_={name} food_={food} weight_={weight} health_={health} age_={age} img_={img} /></div>
                <div><DeleteDog id={id} /></div>
              </div>
            </div>
          </div>
        </div>
      ))
      }
    </div >
  );
}

export default  Hoc(DogList)