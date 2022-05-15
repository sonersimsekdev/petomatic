import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: "balık1",
        food: "Low",
        weight: 1,
        health: "Good",
        age: 2,
        img: "https://ichef.bbci.co.uk/news/640/cpsprodpb/16FA9/production/_92712149_gettyimages-480164327.jpg"
    },
    {
        id: 2,
        name: "balık2",
        food: "Medium",
        weight: 2,
        health: "Good",
        age: 3,
        img: "https://i.cnnturk.com/i/cnnturk/75/740x416/602d00735cf3b01e7cb045c0.jpg"
    },
    {
        id: 3,
        name: "balık3",
        food: "High",
        weight: 3,
        health: "Good",
        age: 4,
        img: "https://petify-cdn.s3.eu-west-1.amazonaws.com/ehs/media/82/c0633fc0f5e95d589aed13bd727f46f3.jpg"
    },
    {
        id: 4,
        name: "balık4",
        food: "High",
        weight: 4,
        health: "Good",
        age: 5,
        img: "https://cunkubaskasenyok.com/wp-content/uploads/2021/10/En-Cok-Tercih-Edilen-Kedi-Cinsleri-.jpg"
    },
   
];

const fishiesSlice = createSlice({
    name: "fishies",
    initialState,
    reducers: {
        fishAdded(state, action) {
            state.push(action.payload);
        },
        fishUpdated(state, action) {
            const {id, name, food, weight, health, age , img } = action.payload;
            const existingFish = state.find((fish) => fish.name === name);
            if (existingFish) {
                existingFish.name = name;
                existingFish.food = food;
                existingFish.weight = weight;
                existingFish.health = health;
                existingFish.age = age;
                existingFish.img = img;
            }
        },
        deletefish: (state, action) =>{
            const { id } = action.payload;
            const existingFish = state.find((fish) => fish.id === id);
            if (existingFish) {
              return state.filter((fish) => fish.id !== id);
            }
        },
    },
});
export const { fishAdded, deletefish ,fishUpdated } = fishiesSlice.actions;

export default fishiesSlice.reducer;