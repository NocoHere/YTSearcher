import React, { useState, useEffect } from 'react';
import fire from '../firebase';
import "firebase/database";
import { Input, Spin } from 'antd';
import { HeartTwoTone, MenuOutlined, AppstoreOutlined } from '@ant-design/icons';
import RequestModal from './modal';
import { Link } from 'react-router-dom';

const { Search } = Input;  

function Homepage(props) {
    const [getResults, setGetResults] = useState(false);
    const [videos, setVideos] = useState([]);
    const [videosCount, setVideosCount] = useState(0);
    const [view, setView] = useState(1);
    const [inputValue, setInputValue] = useState('');
    const [canRun, setCanRun] = useState('true');
    const [succes, setSucces] = useState('none');
    const [loader, setLoader] = useState('');

    useEffect(() => {
        if (props.rid !== '' && canRun === 'true') {
            const database = fire.database();
            const user = fire.auth().currentUser;
            database.ref('users/' + user.uid + `/${props.rid}`).get().then(function(snapshot) {
                if (snapshot.exists()) {
                    setInputValue(snapshot.val().input);
                    const request = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${snapshot.val().maxResult}&order=${snapshot.val().sortBy}&q=${snapshot.val().input}&type=video&key=AIzaSyAen93UpT7_3IPJS451UvvCyERjtJcEvyk`;
                    searcher(request);
    
                    setGetResults(true);
                }
                else {
                  console.log("No data available");
                }
              }).catch(function(error) {
                console.error(error);
            });
            setCanRun('false');
        }
        setLoader('block');
        setTimeout(() => {setLoader('none')}, 1000)
    }, []);

    const openModal = () => {
        const modal = document.querySelector('.modalBg');
        const request = document.getElementById('input-search')
        setInputValue(request.value);
        modal.style.display = 'block';
    }
    function handleChange(newSucces) {
        setSucces(newSucces);
    }

    const suffix = (
        <HeartTwoTone
            className={'favorites-icon'}
            onClick={openModal}
        />
    );
    
    const view1 = () => {
        if (view === 2) {
            setView(1);
            const view1 = document.getElementById('view1');
            const view2 = document.getElementById('view2');
            const img = document.querySelectorAll('.video-card__img-block2');
            const card = document.querySelectorAll('.video-card__block2');
            const text = document.querySelectorAll('.video-card__text-block2');

            view1.style.color = 'rgba(0, 0, 0, 1)';
            view2.style.color = 'rgba(23, 23, 25, 0.3)';
            for (let i = 0; i < img.length; i++) {
                img[i].classList.replace('video-card__img-block2', 'video-card__img-block1');
                card[i].classList.replace('video-card__block2', 'video-card__block1');
                text[i].classList.replace('video-card__text-block2', 'video-card__text-block1');
            }    
        }
    }

    const view2 = () => {
        if (view === 1) {
            setView(2);
            const view1 = document.getElementById('view1');
            const view2 = document.getElementById('view2');
            const img = document.querySelectorAll('.video-card__img-block1');
            const card = document.querySelectorAll('.video-card__block1');
            const text = document.querySelectorAll('.video-card__text-block1');

            view1.style.color = 'rgba(23, 23, 25, 0.3)';
            view2.style.color = 'rgba(0, 0, 0, 1)';
            for (let i = 0; i < img.length; i++) {
                img[i].classList.replace('video-card__img-block1', 'video-card__img-block2');
                card[i].classList.replace('video-card__block1', 'video-card__block2');
                text[i].classList.replace('video-card__text-block1', 'video-card__text-block2');
            }
        }    
    }

    const onSearch = () => {
        setLoader('block');
        setTimeout(() => {setLoader('none')}, 1000);
        const input = document.getElementById('input-search');
        setInputValue(input.value);
        const request = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${input.value}&type=video&key=AIzaSyAen93UpT7_3IPJS451UvvCyERjtJcEvyk`
        searcher(request);

        setGetResults(true);
    }

    const searcher = (request) => {
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('GET', request);
        xhr.send();
        xhr.onload = function() {
            if (xhr.status !== 200) {
                console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
            } else {
                if (xhr.response.items.length > 0) {
                    let newVideos = [];
                    for (let i = 0; i < xhr.response.items.length; i++) { 
                        newVideos.push(
                            <div key={i + 1} className={'video-card__block1'}>
                                <div className={'video-card__img-block1'}>
                                    <img style={{width: '100%'}} src={xhr.response.items[i].snippet.thumbnails.medium.url} alt={i}></img>
                                </div>
                                <div className={'video-card__text-block1'}>
                                    <p className={'video-card__title'}>{xhr.response.items[i].snippet.title}</p>
                                    <p className={'video-card__description'}>{xhr.response.items[i].snippet.channelTitle}
                                    <p>{(xhr.response.items[i].snippet.publishTime).split('').splice(0,10).join('')}</p>
                                    </p>
                                </div>
                            </div>
                        );
                    }
                    setVideosCount(xhr.response.items.length);
                    setVideos(newVideos);
                } else {
                    setVideosCount(0);
                    setVideos([<span style={{fontSize: "30px",color: "red"}}>Результатов не найдено</span>]);
                }    
            }
        };

        xhr.onerror = function() {
            console.log("Запрос не удался");
        };
    }

    return (
        <section>
            <RequestModal succes={handleChange} request={inputValue}/>
            <div className={getResults ? 'on-search-block' : 'search-block'}>
                <h1 className={getResults ? 'on-search-block__title' : 'search-block__title'}>Поиск видео</h1>
                <Search
                id={'input-search'}
                placeholder="Что хотите посмотреть?"
                enterButton="Найти"
                size="large"
                suffix={suffix}
                onSearch={onSearch}
                className={getResults ? '' : 'search-block__input'}
                />
                <div id="favorites-succes" className={'favorites_succes-block'} style={{display: succes}}>
                    <p className={'favorites_succes-title'}>Поиск сохранён в разделе «Избранное»‎</p>
                    <Link to={'/favorites'} className={'favorites_succes-link'}>Перейти в избранное</Link>
                </div>
            </div>
            {getResults ? 
                <div className={'result-block'}>
                    <div style={{ display: loader }} className={'loader__video'}><Spin/></div>
                    <div className={'breadcrumbs'}>
                        <div className={'breadcrumbs__result-info'}>
                            <p className={'breadcrumbs__title'}>Видео по запросу  «{inputValue}»</p>
                            <p className={'breadcrumbs__number'}>{videosCount}</p>
                        </div>
                        <div>
                            <MenuOutlined 
                                id='view1'
                                style={{
                                fontSize: 20,
                                marginRight: '8px',
                                color: 'rgba(0, 0, 0, 1)',
                                }}
                                onClick={view1}
                            />
                            <AppstoreOutlined 
                                id='view2'
                                style={{
                                fontSize: 20,
                                color: 'rgba(23, 23, 25, 0.3)',
                                }}
                                onClick={view2}
                            />
                        </div>
                    </div>
                    <div className={view === 2 ? 'video-cards-grid' : ''}>{videos}</div>
                </div>
                : ''
            }
        </section>
    )
}

export default Homepage;
