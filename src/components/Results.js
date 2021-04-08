import { Input } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

const suffix = (
  <HeartOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const { Search } = Input;
const onSearch = value => console.log(value);



function Result() {
    return (
        <div>
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
        </div>
    )
}

export default Result;