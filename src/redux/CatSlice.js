import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: "tekir",
        food: "Low",
        weight: 1,
        health: "Good",
        age: 2,
        img: "https://ichef.bbci.co.uk/news/640/cpsprodpb/16FA9/production/_92712149_gettyimages-480164327.jpg"
    },
    {
        id: 2,
        name: "mıcır",
        food: "Medium",
        weight: 2,
        health: "Good",
        age: 3,
        img: "https://i.cnnturk.com/i/cnnturk/75/740x416/602d00735cf3b01e7cb045c0.jpg"
    },
    {
        id: 3,
        name: "gıcır",
        food: "High",
        weight: 3,
        health: "Good",
        age: 4,
        img: "https://petify-cdn.s3.eu-west-1.amazonaws.com/ehs/media/82/c0633fc0f5e95d589aed13bd727f46f3.jpg"
    },
    {
        id: 4,
        name: "cenk",
        food: "High",
        weight: 4,
        health: "Good",
        age: 5,
        img: "https://cunkubaskasenyok.com/wp-content/uploads/2021/10/En-Cok-Tercih-Edilen-Kedi-Cinsleri-.jpg"
    },
    {
        id: 5,
        name: "sulugöz",
        food: "Low",
        weight: 5,
        health: "Good",
        age: 6,
        img: "https://i.pinimg.com/736x/45/ac/1a/45ac1ab28930ed8f7ac553b56d55708e.jpg"
    },
    {
        id: 6,
        name: "maho",
        food: "Low",
        weight: 6,
        health: "Good",
        age: 7,
        img: "https://www.trthaber.com/resimler/1174000/1174272.jpg"
    }
];

const catsSlice = createSlice({
    name: "cats",
    initialState,
    reducers: {
        catAdded(state, action) {
            state.push(action.payload);
        },
        catUpdated(state, action) {
            const {name, food, weight, health, age , img } = action.payload;
            const existingCat = state.find((cat) => cat.name === name);
            if (existingCat) {
                existingCat.name = name;
                existingCat.food = food;
                existingCat.weight = weight;
                existingCat.health = health;
                existingCat.age = age;
                existingCat.img = img;
            }
        },
        deleteCat: (state, action) =>{
            const { id } = action.payload;
            const existingCat = state.find((cat) => cat.id === id);
            if (existingCat) {
              return state.filter((cat) => cat.id !== id);
            }
        },
    },
});
export const { catAdded, deleteCat ,catUpdated } = catsSlice.actions;

export default catsSlice.reducer;