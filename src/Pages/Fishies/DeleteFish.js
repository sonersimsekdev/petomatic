import React from 'react'
import { useDispatch } from "react-redux";
import { deletefish } from '../../redux/FishSlice';
import { useTranslation } from 'react-i18next';

export default function DeleteFish({id}) {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deletefish({id}));
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
