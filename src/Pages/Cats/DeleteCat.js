import React from 'react'
import { useDispatch } from "react-redux";
import { deleteCat } from "..//..//redux/CatSlice";

export default function DeleteCat({id}) {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteCat({id}));
    };
    
    return (
        <div>
            <button type="button" className="btn btn-outline-danger ms-1" onClick={() => handleDelete(id)} >
                Delete
            </button>
        </div>
    )
}
