"use client"

import { initItems } from '@/store/favoritesReducer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const AppWarpper = ({children}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const item = localStorage.getItem('favorites');
      
        if (item) {
            dispatch(initItems(JSON.parse(item)));
        }
    }, []);

    return (
        children
    )
}

export default AppWarpper;
