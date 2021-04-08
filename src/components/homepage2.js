import React from 'react';
import { Input, Row, Col } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

const { Search } = Input;  
const suffix = (
    <HeartOutlined
        style={{
        fontSize: 16,
        color: '#1890ff',
        }}
    />
);

class Homepage extends React.Component {

    constructor(props, videoCount) {
      super(props);
      this.state = {
        getResults: false,
      };
      this.videoCount = videoCount;
    }

    videos = '122222222222';


    onSearch = () => {
        this.setState({ getResults: true });
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('GET', 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=арма три&key=AIzaSyAen93UpT7_3IPJS451UvvCyERjtJcEvyk');

        xhr.send();
        this.videoCount = '888888';
        console.log('vne: ', this.videoCount)

        xhr.onload = function() {
            if (xhr.status !== 200) {
                console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
                this.videoCount = 'error404';
                console.log('vne: ',this.videoCount)
            } else {
                console.log('v do: ', this.videoCount)
                this.videoCount = '99999999999';
                console.log('v: ',this.videoCount)
                for (let i = 0; i < xhr.response.items.length; i++) {
                    console.log(xhr.response.items[i].snippet.thumbnails.medium.url)
                    console.log(xhr.response.items[i].snippet.title)
                    videos.push(
                    <Col className="gutter-row" span={6}>
                        <div key={i} style={{width: '100%', padding: '8px 0'}}>
                            <img style={{width: '100%'}} src={xhr.response.items[i].snippet.thumbnails.medium.url}></img>
                            <p className={'video-card__title'}>{xhr.response.items[i].snippet.title}</p>
                            <p className={'video-card__description'}>{xhr.response.items[i].snippet.channelTitle}
                            <p>{(xhr.response.items[i].snippet.publishTime).split('').splice(0,10).join('')}</p>
                            </p>
                        </div>
                    </Col>
                    ); 
                }
            }
        };

        xhr.onerror = function() {
            console.log("Запрос не удался");
        };
    }
    render() {
        return (
            <section>
                <div className={this.state.getResults ? 'on-search-block' : 'search-block'}>
                <h1 className={this.state.getResults ? 'on-search-block__title' : 'search-block__title'}>Поиск видео</h1>
                <Search
                placeholder="Что хотите посмотреть?"
                allowClear
                enterButton="Найти"
                size="large"
                suffix={suffix}
                onSearch={this.onSearch}
                className={this.state.getResults ? '' : 'search-block__input'}
                />
                </div>
                {this.state.getResults ? 
                    <div>
                        <div className={'breadcrumbs'}>
                        <p className={'breadcrumbs__title'}>Видео по запросу  «чем кормить кота»</p>
                        <p className={'breadcrumbs__number'}>{this.videoCount}</p>
                        </div>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>{console.log(this.videos)}</Row>
                    </div>
                    : ''
                }
                
            </section>
        )
    }    
}

export default Homepage;