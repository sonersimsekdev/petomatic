import React from 'react'
import { useDispatch } from "react-redux";
import { deleteCat } from "..//..//redux/CatSlice";
import { useTranslation } from 'react-i18next';

export default function DeleteCat({id}) {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteCat({id}));
    };

    const { t } = useTranslation();

    
    return (
        <div>
            <button type="button" className="btn btn-outline-danger ms-1" onClick={() => handleDelete(id)} >
            {t('delete')}
            </button>
        </div>
    )
}
