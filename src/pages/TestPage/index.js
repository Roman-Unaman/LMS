import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { 
  Input, 
  Button, 
  Divider, 
  Layout,
  Image,
  Tree,
  Switch,
  List,
} from "antd";
import { PlusCircleOutlined } from '@ant-design/icons';

const TestPage = () => {
  const { Header, Sider, Content } = Layout;
  const { TextArea } = Input;
  const [ isTimeLimited, setIsTimeLimited ] = useState(false);

  const treeData = [
    {
      title: 'Математика 9 класс',
      key: '0-0',
      children: [
        {
          title: 'Материал',
          key: '0-0-0',
          children: [
            {
              title: 'leaf',
              key: '0-0-0-0',
            },
          ],
        },
        {
          title: 'Тест',
          key: '0-0-1',
          children: [
            {
              title: 'leaf',
              key: '0-0-1-0',
            },
          ],
        },
        {
          title: 'Задача',
          key: '0-0-2',
          children: [
            {
              title: 'leaf',
              key: '0-0-2-0',
            },
          ],
        },
      ],
    },
  ];

  const data = [
    {
      description: "Вдоль оси Ох дви­жет­ся тело мас­сой...",
      points: 5,
    },
    {
      description: "Вдоль оси Ох дви­жет­ся тело мас­сой...",
      points: 10,
    },
    {
      description: "Вдоль оси Ох дви­жет­ся тело мас­сой...",
      points: 5,
    },
    {
      description: "Вдоль оси Ох дви­жет­ся тело мас­сой...",
      points: 15,
    },
    {
      description: "Вдоль оси Ох дви­жет­ся тело мас­сой...",
      points: 20,
    },
  ];

  return (
    <>
      <div className="page-container">
        <div id="test-page">
          <Layout
            style={{ "background": "none" }}
          >
            <Header
              className="header"
            >
              <Image
                width={80}
                height={24}
                src="error"
                fallback="data:image/png;base64,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"
              />
              <div className="profile-container">
                <p className="text username">
                  Имя Пользователя
                </p>
                <div style={{ "marginRight": "6px" }} />
                <Image
                  width={24}
                  height={24}
                  src={require("../../assets/test-page/default.png")}
                />
              </div>
            </Header>
            <Divider style={{ margin: 0 }}/>
            <Layout
              className="main"
            >
              <Sider
                className="sider"
              >
                <Tree
                  treeData={treeData}
                  defaultExpandedKeys={['0-0']}
                  // showIcon
                  // showLine
                />
                <div className="controls-container">
                  <Button
                    type="primary"
                    icon={<PlusCircleOutlined />}
                    onClick={console.log}
                  >
                    Создать материал
                  </Button>
                  <div style={{ "marginBottom": "8px" }} />
                  <Button
                    type="primary"
                    icon={<PlusCircleOutlined />}
                    onClick={console.log}
                  >
                    Создать папку
                  </Button>
                </div>
              </Sider>
              <Content
                className="content"
              >
                <h3 className="text" style={{ "marginBottom": "40px" }}>
                  Тест
                </h3>
                <p className="text" style={{ "marginBottom": "20px" }}>
                  Вступительное слово
                </p>
                <div style={{ "marginRight": "7px" }}>
                  <TextArea 
                    className="text intro"
                    autoSize
                    value={"Привет, дорогой друг!\nСегодня тебя ждет увлекательное путешествие в мир Химии.\nТебе нужно решать задачи и набрать как можно больше баллов.\nЧем больше баллов — тем выше итоговая оценка!\nВперёд!"}
                  />
                </div>
                <div style={{ "marginBottom": "50px" }} />
                <div style={{ "display": "flex" }}>
                  <Switch onChange={() => setIsTimeLimited(!isTimeLimited)} />
                  <div style={{ "marginRight": "11px" }}/>
                  <div>
                    <p className="text">Ограничен во времени</p>
                    <div style={{ "marginBottom": "18px" }}/>
                    <div  className="time-limit-container">
                      <div className="input-container">
                        <Input
                          disabled={!isTimeLimited}
                          type="number"
                          defaultValue={15}
                        />
                      </div>
                      <p className="text">минут</p>
                    </div>
                  </div>
                </div>
                <div style={{ "marginBottom": "50px" }} />
                <p className="text" style={{ "fontSize": "18px" }}>Список задач</p>
                <div style={{ "marginBottom": "22px" }} />
                <List
                  footer={
                    <Button className="list-item" type="link">+ добавить задачу</Button>
                  }
                  dataSource={data}
                  renderItem={(item, index) => (
                    <List.Item>
                      <div className="list-item">
                        <div>
                          <span className="list-item-index">{index + 1}</span>{item.description}
                        </div>
                        <div className="list-item-points">
                          {item.points}
                        </div>
                      </div>
                    </List.Item>
                  )}
                />
                <div style={{ "marginBottom": "30px" }} />
                <p className="text" style={{ "fontSize": "14px" }}>Всего баллов за этап: {data.reduce(function(total,item){return total+item.points;},0)}</p>
                <div style={{ "marginBottom": "40px" }} />
                <Button type="primary">Сохранить</Button>
              </Content>
            </Layout>
          </Layout>
        </div>
      </div>
    </>
  );
};

export default TestPage;