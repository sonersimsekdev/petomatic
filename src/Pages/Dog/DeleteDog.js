import React from 'react'
import { useDispatch } from "react-redux";
import { deletedog } from '../../redux/DogSlice';

export default function DeleteDog({id}) {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deletedog({id}));
    };
    
    return (
        <div>
            <button type="button" className="btn btn-outline-danger ms-1" onClick={() => handleDelete(id)} >
                Delete
            </button>
        </div>
    )
}
