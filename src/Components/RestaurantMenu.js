import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { swiggy_menu_api_URL } from '../constants';
import { MENU_URL } from '../constants';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [menu, setmenu] = useState(null);
    const [restaurant, setRestaurant] = useState({})

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        const data = await fetch(
            MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
        );
        const jData = await data.json();
        setmenu(jData);
    }


    return (
        <div>
            <h1>Restaurant id : {resId}</h1>

        </div>
    )
}

export default RestaurantMenu