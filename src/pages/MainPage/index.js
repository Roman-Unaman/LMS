import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { 
  Input,
  Divider, 
  Layout,
  Image,
  List,
  Menu,

} from "antd";


const MainPage = () => {
  const { Header, Sider, Content } = Layout;
  const { Search } = Input;
  const { SubMenu } = Menu;

  const data = [
    {
      title: "Название материала",
      username: "Имя Пользователя",
    },
    {
      title: "Название теста",
      username: "Имя Пользователя",
    },
    {
      title: "Название материала",
      username: "Имя Пользователя",
    },
    {
      title: "Название теста",
      username: "Имя Пользователя",
    },
    {
      title: "Название материала",
      username: "Имя Пользователя",
    },
    {
      title: "Название теста",
      username: "Имя Пользователя",
    },
    {
      title: "Название материала",
      username: "Имя Пользователя",
    },
  ];

  return (
    <>
      <div className="page-container" style={{ "display": "flex" }}>
        <div id="main-page" style={{ "display": "flex", "flexGrow": 1 }}>
          <Layout
            style={{ "background": "none", "flexGrow": 1 }}
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
                <Menu
                  className="menu"
                  onClick={console.log}
                  defaultSelectedKeys={['3']}
                  defaultOpenKeys={['sub1']}
                  mode="inline"
                >
                  <SubMenu key="sub1" title="Учебный план">
                    <Menu.Item key="1">Задачи</Menu.Item>
                    <Menu.Item key="2">Календарь</Menu.Item>
                    <Menu.Item key="3">Материалы</Menu.Item>
                  </SubMenu>
                  <Menu.Item key="4">Лента</Menu.Item>
                  <Menu.Item key="5">Пользователи</Menu.Item>
                  <Menu.Item key="6">Звонки</Menu.Item>
                  <Menu.Item key="7">Мои настройки</Menu.Item>
                </Menu>
              </Sider>
              <Content
                className="content"
              >
                <div className="filters-container">
                  <div className="filters">
                    <p className="filter">Классы</p>
                    <p className="filter">Предметы</p>
                    <p className="filter">Автор</p>
                    <p className="filter">Тип</p>
                  </div>
                  <Search 
                    placeholder="Поиск" 
                    allowClear 
                    onSearch={console.log} 
                    style={{ width: 264 }}
                  />
                </div>
                <div style={{ "marginBottom": "20px" }} />
                <div className="result-list-container">
                <List
                  dataSource={data}
                  renderItem={item => (
                    <List.Item className="card-container">
                      <div className="card">
                        <p className="card-title">{item.title}</p>
                        <div className="tags-container">
                          <div className="text tag green">Математика</div>
                          <div className="text tag gray">9 класс</div>
                        </div>
                        <div className="user-container">
                          <div className="avatar"/>
                          <p className="text username">{item.username}</p>
                        </div>
                      </div>
                    </List.Item>
                  )}
                />
                </div>
              </Content>
            </Layout>
          </Layout>
        </div>
      </div>
    </>
  );
};

export default MainPage;