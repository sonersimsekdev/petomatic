import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: "Paoblo",
        food: "Low",
        weight: 1,
        health: "Good",
        age: 2,
        img: "https://dxcgs7v732qty.cloudfront.net/k%C3%B6pekler.jpg"
    },
    {
        id: 2,
        name: "Maoblo",
        food: "Medium",
        weight: 2,
        health: "Good",
        age: 3,
        img: "https://images.petlebi.com/v7/ptlb/up/gallery/sibirya-kurdu-527.jpg"
    },
    {
        id: 3,
        name: "Faoblo",
        food: "High",
        weight: 3,
        health: "Good",
        age: 4,
        img: "https://cdnntr1.img.sputniknews.com/img/07e5/06/05/1044664307_0:0:1280:720_1920x0_80_0_0_90cb504ef646ebd6a79d4eca101ea2b5.jpg"
    },
    {
        id: 4,
        name: "Nemo",
        food: "High",
        weight: 4,
        health: "Good",
        age: 5,
        img: "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1728000/pitbul-aa-1729066_2.jpg"
    },
    {
        id: 5,
        name: "Zaoblo",
        food: "Low",
        weight: 5,
        health: "Good",
        age: 6,
        img: "https://i4.hurimg.com/i/hurriyet/75/750x422/5e5771550f254405d052eb10.jpg"
    },
    
];

const dogsSlice = createSlice({
    name: "dogs",
    initialState,
    reducers: {
        dogAdded(state, action) {
            state.push(action.payload);
        },
        dogUpdated(state, action) {
            const {name, food, weight, health, age , img } = action.payload;
            const existingDog = state.find((dog) => dog.name === name);
            if (existingDog) {
                existingDog.name = name;
                existingDog.food = food;
                existingDog.weight = weight;
                existingDog.health = health;
                existingDog.age = age;
                existingDog.img = img;
            }
        },
        deletedog: (state, action) =>{
            const { id } = action.payload;
            const existingDog = state.find((dog) => dog.id === id);
            if (existingDog) {
              return state.filter((dog) => dog.id !== id);
            }
        },
    },
});
export const { dogAdded, deletedog ,dogUpdated } = dogsSlice.actions;

export default dogsSlice.reducer;