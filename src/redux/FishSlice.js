import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: "balık1",
        food: "Low",
        weight: 1,
        health: "Good",
        age: 2,
        img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Discus_fish.jpg"
    },
    {
        id: 2,
        name: "balık2",
        food: "Medium",
        weight: 2,
        health: "Good",
        age: 3,
        img: "https://iatkv.tmgrup.com.tr/318b6c/616/321/0/49/800/466?u=https://itkv.tmgrup.com.tr/2019/02/01/ruyada-balik-yemek-neye-isarettir-1549004356635.jpg"
    },
    {
        id: 3,
        name: "balık3",
        food: "High",
        weight: 3,
        health: "Good",
        age: 4,
        img: "https://i2.milimaj.com/i/milliyet/75/0x410/6165478d86b2451ed054b32f.jpg"
    },
    {
        id: 4,
        name: "balık4",
        food: "High",
        weight: 4,
        health: "Good",
        age: 5,
        img: "https://cdn.evrimagaci.org/FW24qEKFsyZNGueueIYarpkC7g8=/evrimagaci.org%2Fpublic%2Fcontent_media%2F00401bed255973ed744ef834471292d3.jpg"
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
            const {name, food, weight, health, age , img } = action.payload;
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