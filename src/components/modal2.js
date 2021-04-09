import React, { useState } from 'react';
import fire from '../firebase';
import "firebase/database";
import { Form, Input, Button, Typography, Select, Slider, InputNumber, Row, Col } from 'antd';

const { Title } = Typography;
const { Option } = Select;

function FavoritesModal(props) {
    const [maxVideos2, setMaxVideos2] = useState('');

    const onChange2 = value => {
        setMaxVideos2(value)
    }

    const closeModal2 = () => {
        const modal = document.querySelector('.modal2')
        modal.style.display = 'none';
        const form = document.getElementById('modal2');
        setMaxVideos2('');
        form.reset();
    }

    const writeUserData2 = () => {
        let name = document.getElementById('name2').value;
        let form = document.getElementById('modal2');
        let input  = form.querySelector('#input2').value;
        let maxResult = maxVideos2;
        if (name === '') {
            name = props.namez;
        }
        if (input === '') {
            input = props.input;
        }
        if (maxVideos2 === '') {
            maxResult = props.maxResult;
        }
        let sortBy = '';
        if (form.querySelector('.ant-select-selection-item') !== null) {
            sortBy = form.querySelector('.ant-select-selection-item').title;
        } else {
            sortBy = form.querySelector('.ant-select-selection-placeholder').textContent;
        }    
        console.log('here',sortBy);
        switch(sortBy) {
            case "Релевантности":
                sortBy = "relevance";
                break;
            case "Просмотрам":
                sortBy = "rating";
                break;  
            case "Дате":
                sortBy = "date";
                break;
            default :    
        }
        const database = fire.database();
        const user = fire.auth().currentUser;
        database.ref('users/' + user.uid + `/${props.rkey}`).set({
            name: name,
            input: input,
            maxResult: maxResult,
            sortBy: sortBy
        });
        closeModal2();
        form.reset();
    }

    return(
        <section>
            <div id={props.rkey} className={'modalBg modal2'}>
                <Form
                    name="basic"
                    id="modal2"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={writeUserData2}
                    layout="vertical"
                    className={'auth-form favorites-form'}
                >
                    <Title className={'auth-form__title'}>Редактровать запрос</Title>
                    <Form.Item
                        label="Запрос"
                    >
                        <Input id="input2" placeholder={props.input}/>
                    </Form.Item>
                    <Form.Item
                        label="Название"
                    >
                        <Input id="name2" placeholder={props.namez}/>
                    </Form.Item>
        
                    <Form.Item label="Сортировать по:" name="sort2">
                        <Select id="sort2" placeholder={props.sortBy}>
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
                            onChange={onChange2}
                            value={typeof maxVideos2 === 'number' ? maxVideos2 : props.maxResult}
                        />
                        </Col>
                        <Col span={4}>
                        <InputNumber
                            min={1}
                            max={50}
                            style={{ margin: '0 16px' }}
                            placeholder={props.maxResult}
                            value={maxVideos2}
                            onChange={onChange2}
                        />
                        </Col>
                    </Row>
                    </Form.Item>
        
                    <Form.Item>
                        <Button className={ 'auth-form__btn' } onClick={closeModal2} style={{ float: 'left', color: '#1390e5' }} htmlType="submit">
                            Не сохранять
                        </Button>
                        <Button className={ 'auth-form__btn' } style={{ float: 'right' }} type="primary" htmlType="submit">
                            Сохранить
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </section>
    );
}

export default FavoritesModal
