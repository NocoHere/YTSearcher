import React, { useState, useEffect } from 'react';
import fire from '../firebase';
import "firebase/database";
import { useHistory } from 'react-router-dom';
import FavoritesModal from './modal2';
import { Button, Spin } from 'antd';

function Favorites(props) {
    const [input, setInput] = useState('');
    const [maxResult, setMaxResult] = useState(12);
    const [namez, setNamez] = useState('');
    const [sortBy, setSortBy] = useState('relevance');
    const [rKey, setRKey] = useState('');
    const [loader, setLoader] = useState('');
    const [getRequests, setGetRequests] = useState('');

    useEffect(() => {
        getRequest();
    }, []);

    const getRequest = () => {
        setLoader('block');
        setTimeout(() => {setLoader('none')}, 1000);
        const database = fire.database();
        const user = fire.auth().currentUser;
        database.ref('users/' + user.uid).get().then(function(snapshot) {
            if (snapshot.exists()) {
                const rqArray = [];
                console.log(snapshot.val());
                for (let key in snapshot.val()) {
                    rqArray.push(<div key={key} className={'favorites__request'}>
                        <div style={{ paddingTop: '3px'}}>{snapshot.val()[key].name}</div>
                        <div style={{ float: 'right' }}>
                            <Button onClick={() => runRequest({key})}>Выполнить</Button>
                            <Button style={{ margin: '0 20px' }} onClick={() => editRequest({key}, snapshot.val()[key].input, snapshot.val()[key].maxResult, snapshot.val()[key].name, snapshot.val()[key].sortBy)}>Редактровать</Button>
                            <Button onClick={() => deleteRequest({key})}>Удалить</Button>
                        </div>
                    </div>);
                } 
                setGetRequests(rqArray);
            }
            else {
                setGetRequests('Нет сохраненных запросов');
            }
          }).catch(function(error) {
            console.error(error);
        });
    }

    const editRequest = (obj, inputF, maxResultF, nameF, sortByF) => {
        const modal = document.querySelector('.modal2');
        modal.style.display = 'block';
        setRKey(obj.key);
        setInput(inputF);
        setMaxResult(maxResultF);
        setNamez(nameF);
        setSortBy(sortByF);
    }

    const deleteRequest = (obj) => {
        console.log('dadaya',obj.key)
        const database = fire.database();
        const user = fire.auth().currentUser;  
        database.ref('users/' + user.uid + `/${obj.key}`).remove();
    }

    let history = useHistory();
    const runRequest = (obj) => {
        props.onChange(obj.key);
        history.push('/');
    }
  
    return (
        <section>
            <FavoritesModal rkey={rKey} input={input} maxResult={maxResult} namez={namez} sortBy={sortBy}/>
            <h1 className={'favorites__title'}>Избранное</h1>
            <Button type="primary" onClick={getRequest} style={{float: 'left'}}>Обновить</Button>
            <div className={'favorites__requests-block'}>
                <div style={{ zIndex: '1', display: loader }} className={'loader__video'}><Spin/></div>
                {getRequests}
            </div>
        </section>
    );
}

export default Favorites;