import React from 'react'
import { useDispatch } from "react-redux";
import { deletefish } from '../../redux/FishSlice';

export default function DeleteFish({id}) {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deletefish({id}));
    };
    
    return (
        <div>
            <button type="button" className="btn btn-outline-danger ms-1" onClick={() => handleDelete(id)} >
                Delete
            </button>
        </div>
    )
}
