import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: "Paoblo",
        food: "Low",
        weight: 1,
        health: "Good",
        age: 2,
        img: "https://iaftm.tmgrup.com.tr/65f129/1200/627/0/36/855/483?u=https://iftm.tmgrup.com.tr/2021/12/07/kopek-bakimi-nasil-yapilir-ev-kopekleri-nasil-beslenir-evde-kopek-bakmak-zor-mu-1638862993469.jpeg"
    },
    {
        id: 2,
        name: "Maoblo",
        food: "Medium",
        weight: 2,
        health: "Good",
        age: 3,
        img: "https://petokulu.com/wp-content/uploads/2020/11/yavru-kopek-mamasi-nasil-secilir.jpg"
    },
    {
        id: 3,
        name: "Faoblo",
        food: "High",
        weight: 3,
        health: "Good",
        age: 4,
        img: "https://oyhaber.net/d/gallery/55_s.jpg"
    },
    {
        id: 4,
        name: "Taoblo",
        food: "High",
        weight: 4,
        health: "Good",
        age: 5,
        img: "https://st1.myideasoft.com/shop/ar/09/myassets/blogs/yavru-kopek.jpg?revision=1558388492"
    },
    {
        id: 5,
        name: "Zaoblo",
        food: "Low",
        weight: 5,
        health: "Good",
        age: 6,
        img: "https://images.petlebi.com/v7/ptlb/up/gallery/sibirya-kurdu-527.jpg"
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
            const {id, name, food, weight, health, age , img } = action.payload;
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