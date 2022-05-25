import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: "Pastel",
        food: "Low",
        weight: 1,
        health: "Good",
        age: 2,
        img: "https://i2.milimaj.com/i/milliyet/75/0x0/61749dad86b24704903f611d.jpg"
    },
    {
        id: 2,
        name: "Luna",
        food: "Medium",
        weight: 2,
        health: "Good",
        age: 3,
        img: "https://img-s1.onedio.com/id-615c662a631fb4050b54ff3e/rev-0/w-620/f-jpg/s-86104d67a28b62e8d211d63c6b48424c69ace7e2.jpg"
    },
    {
        id: 3,
        name: "Maviş",
        food: "High",
        weight: 3,
        health: "Good",
        age: 4,
        img: "https://st2.myideasoft.com/idea/cm/75/myassets/blogs/mavi-muhhabbet-kusu.jpg?revision=1625951523"
    },
   
];

const birdsSlice = createSlice({
    name: "birds",
    initialState,
    reducers: {
        birdAdded(state, action) {
            state.push(action.payload);
        },
        birdUpdated(state, action) {
            const {name, food, weight, health, age , img } = action.payload;
            const existingBird = state.find((bird) => bird.name === name);
            if (existingBird) {
                existingBird.name = name;
                existingBird.food = food;
                existingBird.weight = weight;
                existingBird.health = health;
                existingBird.age = age;
                existingBird.img = img;
            }
        },
        deleteBird: (state, action) =>{
            const { id } = action.payload;
            const existingBird = state.find((bird) => bird.id === id);
            if (existingBird) {
              return state.filter((bird) => bird.id !== id);
            }
        },
    },
});
export const { birdAdded, deleteBird ,birdUpdated } = birdsSlice.actions;

export default birdsSlice.reducer;