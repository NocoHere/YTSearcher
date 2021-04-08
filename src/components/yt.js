import { Row, Col } from 'antd';

const videos = [];

xhr.responseType = 'json';
xhr.open('GET', 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=реакт хуки&key=AIzaSyAen93UpT7_3IPJS451UvvCyERjtJcEvyk');
xhr.send();
xhr.onload = function() {
    if (xhr.status !== 200) {
        console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
        for (let i = 0; i < xhr.response.items.length; i++) {
            console.log(xhr.response.items[i].snippet.thumbnails.medium.url)
            console.log(xhr.response.items[i].snippet.title)
            videos.push(<div key={i} style={{width: '320px'}}>
                <img src={xhr.response.items[i].snippet.thumbnails.medium.url}></img>
                <p style={{width: '300px'}}>{xhr.response.items[i].snippet.title}</p>
            </div>);
        }
    }
};

xhr.onerror = function() {
    console.log("Запрос не удался");
};

const dano = {
    "kind": "youtube#searchListResponse",
    "etag": "KNGnWL_liOu3MkknfjbOqsQ2fns",
    "nextPageToken": "CA8QAA",
    "regionCode": "RU",
    "pageInfo": {
      "totalResults": 1000000,
      "resultsPerPage": 15
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "ECNYQ0AKT3xXd5MC-CwyAYG-mlM",
        "id": {
          "kind": "youtube#video",
          "videoId": "MTJBU7sdI5A"
        },
        "snippet": {
          "publishedAt": "2021-03-28T08:00:08Z",
          "channelId": "UCeQaO-78YXDSf4omYOdYhBw",
          "title": "Спецназ РФ попал в засаду Бундесвера. Немцы не ожидали такого исхода… (ARMA 3 Тушино)",
          "description": "В этом ролике показаны события вымышленного конфликта между ВС России и силами Бундесвера. Моя должность - командир отделения ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/MTJBU7sdI5A/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/MTJBU7sdI5A/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/MTJBU7sdI5A/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Jumbo",
          "liveBroadcastContent": "none",
          "publishTime": "2021-03-28T08:00:08Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "LW8Gg9FjxD-2WjLobp3ygSZIKTY",
        "id": {
          "kind": "youtube#video",
          "videoId": "dr054tmML98"
        },
        "snippet": {
          "publishedAt": "2021-03-21T09:00:24Z",
          "channelId": "UCeQaO-78YXDSf4omYOdYhBw",
          "title": "РФ вторгается в Норвегию! Бой за опорный пункт НАТО (ARMA 3 ТУШИНО)",
          "description": "В этом ролике показаны события вымышленного конфликта между ВС России и Норвегией. Моя должность - старший стрелок пехотного отделения.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/dr054tmML98/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/dr054tmML98/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/dr054tmML98/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Jumbo",
          "liveBroadcastContent": "none",
          "publishTime": "2021-03-21T09:00:24Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "EU_4Cbwq7q8Z4vocXfK-Hwu-Oh8",
        "id": {
          "kind": "youtube#video",
          "videoId": "eEdnWqfJ8x8"
        },
        "snippet": {
          "publishedAt": "2020-05-14T09:00:22Z",
          "channelId": "UCeQaO-78YXDSf4omYOdYhBw",
          "title": "ВДВ ведет бой в горах. Как мы выходили из засады (ARMA 3 ТУШИНО)",
          "description": "Миссия Малденская кампания. В качестве противника выступает Армия Греции. Отряд TT на Тушино. Я играю в роли командира отделения десантных ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/eEdnWqfJ8x8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/eEdnWqfJ8x8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/eEdnWqfJ8x8/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Jumbo",
          "liveBroadcastContent": "none",
          "publishTime": "2020-05-14T09:00:22Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "OwIfL9lG52nUpgU2X2nf7T90eKA",
        "id": {
          "kind": "youtube#video",
          "videoId": "q4oEoVGkLSw"
        },
        "snippet": {
          "publishedAt": "2021-01-15T14:00:33Z",
          "channelId": "UCw_qmA7POX7J_y6te_XYiWQ",
          "title": "120 ИГРОКОВ В АФГАНИСТАНЕ ПОПАЛИ В СЛОЖНУЮ ЗАСАДУ В ARMA 3",
          "description": "В этом ролике я покажу что происходит с вашими войсками в Hearts of Iron 4, когда вы им даете совершенно невообразимые задания, например в этом ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/q4oEoVGkLSw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/q4oEoVGkLSw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/q4oEoVGkLSw/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kachanov",
          "liveBroadcastContent": "none",
          "publishTime": "2021-01-15T14:00:33Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "4qY9BxfaVN-_AwGtq0w7oTD420M",
        "id": {
          "kind": "youtube#video",
          "videoId": "eaEhD5weAjM"
        },
        "snippet": {
          "publishedAt": "2021-03-28T15:00:10Z",
          "channelId": "UCvyZzIKOEKnFxNoi9YfYxmQ",
          "title": "Спецназ КГБ СССР во Вьетнаме против США - Моменты Арма 3. Солидные Игры [Arma 3 Solid Games]",
          "description": "Характеристики ПК: • процессор AMD Ryzen 5 3600 • материнская плата Asus TUF B450-Pro • оперативная память HyperX DDR4-2666 32GB ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/eaEhD5weAjM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/eaEhD5weAjM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/eaEhD5weAjM/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Captain Parker",
          "liveBroadcastContent": "none",
          "publishTime": "2021-03-28T15:00:10Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "jwW7aIWKBXwE6ljcN23pU5DMB_c",
        "id": {
          "kind": "youtube#video",
          "videoId": "sr-EvW1Jfuw"
        },
        "snippet": {
          "publishedAt": "2021-02-04T13:00:31Z",
          "channelId": "UCeQaO-78YXDSf4omYOdYhBw",
          "title": "Сирия. ССО РФ действует в тылу боевиков (ARMA 3 ТУШИНО)",
          "description": "В этом бою я покажу вам события городского боя между YPG (курдским ополчением) и САА (Сирийской Арабской армией) в одном из городов на севере ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/sr-EvW1Jfuw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/sr-EvW1Jfuw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/sr-EvW1Jfuw/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Jumbo",
          "liveBroadcastContent": "none",
          "publishTime": "2021-02-04T13:00:31Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "5ApcYTvbQLXJM_wOToSNzN9hVBU",
        "id": {
          "kind": "youtube#video",
          "videoId": "cbjpShSQd9s"
        },
        "snippet": {
          "publishedAt": "2021-03-29T13:00:26Z",
          "channelId": "UCNGvU4dRoaWZ9_x3h31-0BQ",
          "title": "Т-34 в ожесточенном бою с немецкими танками Arma 3 Iron Front",
          "description": "В этом видео будет показан Т-34 в ожесточенном бою с немецкими танками в Arma 3 Iron Front (самая реалистичная игра про Вторую Мировую). Т-34 в ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/cbjpShSQd9s/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/cbjpShSQd9s/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/cbjpShSQd9s/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Termitok",
          "liveBroadcastContent": "none",
          "publishTime": "2021-03-29T13:00:26Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "_ZwHeN8Ul_eATGiXvKu5Kkbvm4c",
        "id": {
          "kind": "youtube#video",
          "videoId": "_hbVjrYgeT0"
        },
        "snippet": {
          "publishedAt": "2020-12-31T09:00:09Z",
          "channelId": "UCeQaO-78YXDSf4omYOdYhBw",
          "title": "Оператор ударного БПЛА! Зрелищные моменты Тушино (ARMA 3)",
          "description": "Подборка наиболее зрелищных боевых ситуаций за последние месяцы. Среди них - участие в экипаже Weasel с ПТРК TOWII за парашютистов ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/_hbVjrYgeT0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/_hbVjrYgeT0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/_hbVjrYgeT0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Jumbo",
          "liveBroadcastContent": "none",
          "publishTime": "2020-12-31T09:00:09Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "sUcrD0Zcc4pR_hxFEuOqew6qrkA",
        "id": {
          "kind": "youtube#video",
          "videoId": "FZMiAF1FEL8"
        },
        "snippet": {
          "publishedAt": "2021-03-24T05:50:06Z",
          "channelId": "UCcBp-39p0nYHX-vlTs_2Nyg",
          "title": "ARMA 3 Серьезные Игры на Тушино SG Moments #56 &quot;Соригор&quot;",
          "description": "МИ-24 и работа с больших высот по большим высотам.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/FZMiAF1FEL8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/FZMiAF1FEL8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/FZMiAF1FEL8/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "WARfrago",
          "liveBroadcastContent": "none",
          "publishTime": "2021-03-24T05:50:06Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "KD568D177IBs1iQit39fjqZZzio",
        "id": {
          "kind": "youtube#video",
          "videoId": "SL9LRs1f-JU"
        },
        "snippet": {
          "publishedAt": "2019-12-28T22:57:10Z",
          "channelId": "UC1c0rmoEBuHsEoOdbW_ZBnw",
          "title": "ДОНЕЦЬКИЙ АЕРОПОРТ в ARMA 3 | Арма 3 Україна",
          "description": "▻ Контакти для ділових пропозицій - alexd20job@gmail.com Війна на Донбасі в Arma 3. Місія про Україну в Арма 3. Місія української тематики: ВІЙНА ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/SL9LRs1f-JU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/SL9LRs1f-JU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/SL9LRs1f-JU/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Alex_D20",
          "liveBroadcastContent": "none",
          "publishTime": "2019-12-28T22:57:10Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "dCzp2gW-pq-EB7F5Jvr7iHeLi_Y",
        "id": {
          "kind": "youtube#video",
          "videoId": "mFrRCJkq5fE"
        },
        "snippet": {
          "publishedAt": "2020-10-29T13:00:27Z",
          "channelId": "UCeQaO-78YXDSf4omYOdYhBw",
          "title": "РФ против США. Сирийский конфликт перерос в боестолкновение (ARMA 3 ТУШИНО)",
          "description": "Видео с миссии Американское наступление. Это эксперементальное видео, в котором я покажу вам наступательную операцию США в черте одного из ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/mFrRCJkq5fE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/mFrRCJkq5fE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/mFrRCJkq5fE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Jumbo",
          "liveBroadcastContent": "none",
          "publishTime": "2020-10-29T13:00:27Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "NoefI2HgRNCxRi4Mznhr1DRmIHA",
        "id": {
          "kind": "youtube#video",
          "videoId": "PfdlNARKaH0"
        },
        "snippet": {
          "publishedAt": "2020-11-11T12:40:59Z",
          "channelId": "UCw_qmA7POX7J_y6te_XYiWQ",
          "title": "ARMA 3: КАК 20 РУССКИХ ДЕСАНТНИКОВ ДЕРЖАЛИ 1000 БОЕВИКОВ В ЧЕЧНЕ",
          "description": "В этом ролике я покажу что происходит с вашими войсками в Hearts of Iron 4, когда вы им даете совершенно невообразимые задания, например в этом ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/PfdlNARKaH0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/PfdlNARKaH0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/PfdlNARKaH0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kachanov",
          "liveBroadcastContent": "none",
          "publishTime": "2020-11-11T12:40:59Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "C1T9XOANJxK-dmL8H7Yq4Oq9cag",
        "id": {
          "kind": "youtube#video",
          "videoId": "gbQs9JUuvd8"
        },
        "snippet": {
          "publishedAt": "2020-08-14T09:00:29Z",
          "channelId": "UCeQaO-78YXDSf4omYOdYhBw",
          "title": "РАБОТАЕТ СПЕЦНАЗ! Зрелищные моменты Тушино (ARMA 3 TUSHINO)",
          "description": "Нарезка с большого числа миссий на Арма Тушино. Играл за командира отделения одного из силовых ведомств РФ, номера расчета ПТРК Фагот, ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/gbQs9JUuvd8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/gbQs9JUuvd8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/gbQs9JUuvd8/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Jumbo",
          "liveBroadcastContent": "none",
          "publishTime": "2020-08-14T09:00:29Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "v_25sW8_Uckd5nZDZZQrf5NzqzI",
        "id": {
          "kind": "youtube#video",
          "videoId": "cjiRwYmC-I0"
        },
        "snippet": {
          "publishedAt": "2019-04-01T17:57:41Z",
          "channelId": "UCeQaO-78YXDSf4omYOdYhBw",
          "title": "Бои за пригород Грозного. Аэродром ЧРИ (ARMA 3 mTSG Тушино)",
          "description": "Миссия City, играю за командира отделения . Отряд 75th на Тушино. Сайт сервера - серьёзныеигры.рф Музыка: ДДТ - Осенняя; Halo 3 Soundtrack The ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/cjiRwYmC-I0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/cjiRwYmC-I0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/cjiRwYmC-I0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Jumbo",
          "liveBroadcastContent": "none",
          "publishTime": "2019-04-01T17:57:41Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "kVUKzGTr4iswGqFgDFi5ATeb8pU",
        "id": {
          "kind": "youtube#video",
          "videoId": "JgqKVlxuRMY"
        },
        "snippet": {
          "publishedAt": "2021-03-17T15:01:13Z",
          "channelId": "UCw_qmA7POX7J_y6te_XYiWQ",
          "title": "80 ИГРОКОВ ПЫТАЮТСЯ СПАСТИ ЮГОСЛАВИЮ ОТ РАЗВАЛА В ARMA 3",
          "description": "В этом ролике я покажу что происходит с вашими войсками в Hearts of Iron 4, когда вы им даете совершенно невообразимые задания, например в этом ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/JgqKVlxuRMY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/JgqKVlxuRMY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/JgqKVlxuRMY/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kachanov",
          "liveBroadcastContent": "none",
          "publishTime": "2021-03-17T15:01:13Z"
        }
      }
    ]
  }
  

for (let i = 0; i < dano.items.length; i++) {
    videos.push(
    <Col className="gutter-row" span={6}>
        <div style={{width: '100%', padding: '8px 0'}}>
            <img style={{width: '100%'}} src={dano.items[i].snippet.thumbnails.medium.url}></img>
            <p className={'video-card__title'}>{dano.items[i].snippet.title}</p>
            <p className={'video-card__description'}>{dano.items[i].snippet.channelTitle}
            <p>{(dano.items[i].snippet.publishTime).split('').splice(0,10).join('')}</p>
            </p>
        </div>
    </Col>
    );
}


function Yt() {
    return (
        <div>
            <div className={'breadcrumbs'}>
                <p className={'breadcrumbs__title'}>Видео по запросу  «чем кормить кота»</p>
                <p className={'breadcrumbs__number'}>7230</p>
            </div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>{videos}</Row>
        </div>
    )
}

export default Yt;



{/* <div>
            <h1 style={{fontSize: '36px', lineHeight: '52px' }}>Поиск видео</h1>
            <Search
            placeholder="Что хотите посмотреть?"
            enterButton="Найти"
            size="large"
            suffix={suffix}
            onSearch={onSearch}
            style={{marginBottom: '40px'}}
            />
            <div className={'breadcrumbs'}>
                <p className={'breadcrumbs__title'}>Видео по запросу  «чем кормить кота»</p>
                <p className={'breadcrumbs__number'}>7230</p>
            </div>
            <div id="grid">
                <div className={'video-card'}>
                    <div className={'video-card__img'}></div>
                    <p className={'video-card__title'}>Как кормить кошку натуралкой |<br/>Перечень полезных для кош...</p>
                    <p className={'video-card__description'}>Ветеринария и Кормление соб... <br/>786 тыс. просмотров</p>
                </div>
            </div>
        </div> */}