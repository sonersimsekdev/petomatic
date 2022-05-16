import React from 'react'
import { useDispatch } from "react-redux";
import { deleteBird } from "../../redux/BirdSlice";
import { useTranslation } from 'react-i18next';

export default function DeleteBird({id}) {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const handleDelete = (id) => {
        dispatch(deleteBird({id}));
    };
    
    return (
        <div>
            <button type="button" className="btn btn-outline-danger ms-1" onClick={() => handleDelete(id)} >
            {t('delete')}
            </button>
        </div>
    )
}
