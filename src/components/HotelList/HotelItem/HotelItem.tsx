import React, { FC } from "react";
import { PlusCircleOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { OrderingForm } from "../../OrderingForm/OrderingForm";
import style from "./HotelItem.module.css";
const { Meta } = Card;


interface IHotels {
    hotel: {
        room: string;
        price: number;
        places: number;
    }
}

export const HotelItem: FC<IHotels> = ({ hotel }) => {
    return (
        <Card
            className={style.hotel_item}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }

            actions={[
                <PlusCircleOutlined />,
            ]}
        >

            <div className={style.places}>Количество свободные мест: {hotel.places}</div>
            <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={`Название номера: ${hotel.room}`}
                description={`Цена за день проживания: ${hotel.price}₽`}
            />
            <OrderingForm hotel={hotel} modalTitle={"Оформить заказ"} />
        </Card>
    )
}