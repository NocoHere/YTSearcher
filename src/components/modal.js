import React, { useState } from 'react';
import fire from '../firebase';
import "firebase/database";
import { Form, Input, Button, Typography, Select, Slider, InputNumber, Row, Col } from 'antd';

const { Title } = Typography;
const { Option } = Select;


function RequestModal(props) {
    const [maxVideos, setMaxVideos] = useState(12);
    const [form] = Form.useForm();
    
    const onChange = value => {
        setMaxVideos(value)
    }

    const closeModal = () => {
        const modal = document.querySelector('.modalBg');
        form.resetFields();
        modal.style.display = 'none';
    }

    const writeUserData = () => {
        const name = document.getElementById('name');
        const form = document.getElementById('modal');
        let sortBy = document.querySelector('.ant-select-selection-item').title;
        const database = fire.database();
        const user = fire.auth().currentUser;
        database.ref('users/' + user.uid).push({
            name: name.value,
            input: props.request,
            maxResult: maxVideos,
            sortBy: sortBy
        });
        props.succes('block');
        setTimeout(() => { props.succes('none')}, 2000);
        closeModal();
        setMaxVideos(12)
        form.reset();
    }

    return(
        <section>
            <div className={'modalBg'}>
                <Form
                    form={form}
                    name="basic"
                    id="modal"
                    onFinish={writeUserData}
                    layout="vertical"
                    className={'auth-form favorites-form'}
                >
                    <Title className={'auth-form__title'}>Сохранить запрос</Title>
                    <Form.Item
                        label="Запрос"
                    >
                        <Input value={props.request} disabled/>
                    </Form.Item>
                    <Form.Item
                        label="Название*"
                        name="nametag"
                        rules={[
                        {
                            required: true,
                            message: 'Поле не заполнено',
                        },
                        ]}
                        className={'registration-form'}
                    >
                        <Input id="name" placeholder="Укажите название"/>
                    </Form.Item>
        
                    <Form.Item label="Сортировать по:">
                        <Select id="sort" defaultValue="relevance">
                            <Option value="relevance">Релевантности</Option>
                            <Option value="rating">Просмотрам</Option>
                            <Option value="date">Дате</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Максимальное количество:">
                    <Row>
                        <Col span={16}>
                        <Slider
                            min={1}
                            max={50}
                            onChange={onChange}
                            value={typeof maxVideos === 'number' ? maxVideos : 12}
                        />
                        </Col>
                        <Col span={4}>
                        <InputNumber
                            min={1}
                            max={50}
                            style={{ margin: '0 16px' }}
                            value={maxVideos}
                            onChange={onChange}
                        />
                        </Col>
                    </Row>
                    </Form.Item>
        
                    <Form.Item>
                        <Button className={ 'auth-form__btn' } onClick={closeModal} style={{ float: 'left', color: '#1390e5' }} htmlType="submit">
                            Не сохранять
                        </Button>
                        <Button className={ 'auth-form__btn' } onSubmit={writeUserData} style={{ float: 'right' }} type="primary" htmlType="submit">
                            Сохранить
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </section>
    );
}

export default RequestModal
