import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Spin } from "antd";
import { v4 as uuidv4 } from "uuid";
import { getHotels } from '../../api/getHotels';
import Store from "../../mobx/store";
import { HotelItem } from './HotelItem/HotelItem';

export const HotelList = observer(() => {
    const getData = async () => {
        const data: string = await getHotels();
        Store.setHotels(JSON.parse(data));
        Store.setIsLoading(false);
    }

    useEffect(() => {
        getData();
        return () => {
            Store.setIsLoading(true);
        }
    }, [])
    return (
        <>
            {Store.isLoading ? <Spin /> : Store.hotels.map(hotel => <HotelItem hotel={hotel} key={uuidv4()} />)}
        </>
    )
})