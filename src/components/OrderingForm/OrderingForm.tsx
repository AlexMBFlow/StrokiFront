import React, { useState } from "react";
import { Button, Modal } from 'antd';
import { Form, Input, DatePicker, notification } from 'antd';
import { v4 as uuidv4 } from "uuid"

interface IOrderingProps {
    hotel: {
        room: string
        price: number
        places: number
    }
    modalTitle: string
}

interface IChangeInputValue<T = string> {
    target: {
        value: React.SetStateAction<T>;
    }
}

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

// Правила валидации
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} обязательное поле!',
    types: {
        email: '${label} неверный email!',
    }
};


const { RangePicker } = DatePicker;
const { Item } = Form;
export const OrderingForm: React.FC<IOrderingProps> = ({ hotel, modalTitle }) => {
    const phoneReg = /^(\+7|8)(\(\d{3}\)|\d{3})\d{7}$/
    const [phone, setPhone] = useState("")

    const changePhone = (e: IChangeInputValue): void => {
        setPhone(e.target.value)
    }
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const onFinish = (values: unknown) => {
        try {
            if (!phoneReg.test(phone)) {
                notification.error({
                    message: "Внимание!",
                    description: "Неверно указан номер телефона",
                    placement: "bottomRight"
                })
                return
            }

            const data = {
                userInfo: values,
                hotel: hotel
            }
            console.log(data);
        } catch (e) {
            console.log(e)
        }

    };

    return (
        <div style={{ display: "flex", justifyContent: "center", padding: "1rem" }}>
            <Button type="primary" onClick={showModal}>
                Заказать
            </Button>
            <Modal
                title={modalTitle}
                open={open}
                onCancel={handleCancel}
                footer={
                    [
                        <Button key={uuidv4()} onClick={handleCancel}>
                            Закрыть
                        </Button>
                    ]
                }
            >
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>

                    <Item
                        name={['secondName', 'value']}
                        label="Фамилия"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Item>

                    <Item
                        name={['firstName', 'value']}
                        label="Имя"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Item>

                    <Item
                        name={['patronymicName', 'value']}
                        label="Отчество"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Item>

                    <Item
                        name={['userInfo', 'value']}
                        label="Email"
                        rules={[
                            {
                                type: "email",
                                required: true
                            },
                        ]}
                    >
                        <Input />
                    </Item>
                    <Item
                        name={["phone", "value"]}
                        label="Phone"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input onChange={changePhone} />
                    </Item>

                    <Item
                        name={["date", 'value']}
                        label="Период проживания"
                        rules={[
                            {
                                required: true
                            },
                        ]}
                    >
                        <RangePicker />
                    </Item>

                    <Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Отправить
                        </Button>
                    </Item>
                </Form>
            </Modal>
        </div>
    );
}