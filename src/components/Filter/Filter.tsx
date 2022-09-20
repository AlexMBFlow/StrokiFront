import React, { useState, useEffect, FC } from "react";
import { Button, Modal, RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import Store from "../../mobx/store";
import { observer } from 'mobx-react-lite';

interface IFilter {
    label?: string;
    title: string;
}

export const Filter: FC<IFilter> = observer(({ label, title }) => {
    // Состояние модалки
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Функции управления модалкой
    const showModal = () => {
        setIsModalOpen(true);
    };

    //Нажатие на OK
    const handleOk = () => {
        setIsModalOpen(false);
    };

    // Нажатие отмены
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const footer = [
        <Button key="back" onClick={handleCancel}>
            Закрыть
        </Button>
    ]


    const [radioValue, setRadioValue] = useState(0);
    const onChange = (e: RadioChangeEvent) => {
        setRadioValue(e.target.value);
    };

    // Фильтры
    useEffect(() => {
        switch (radioValue) {
            case 1:
                Store.hotels.sort((a, b) => b.price - a.price);
                break
            case 2:
                Store.hotels.sort((a, b) => a.price - b.price);
                break
            case 3:
                Store.hotels.sort((a, b) => a.places - b.places);
                break
        }
    }, [radioValue])

    return (
        <>
            <Button type="primary" onClick={showModal}>
                {label}
            </Button>
            <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={footer}>
                <Radio.Group onChange={onChange} value={radioValue}>
                    <Radio value={1}>По убыванию цены</Radio>
                    <Radio value={2}>По возрастанию цены</Radio>
                    <Radio value={3}>По возрастанию мест в номерах</Radio>
                </Radio.Group>
            </Modal>
        </>
    )
})