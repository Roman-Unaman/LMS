import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import {
  Divider, 
  Layout,
  Image,
  Menu,
  Timeline,

} from "antd";
import { 
  UnorderedListOutlined,
  TableOutlined,
} from '@ant-design/icons';


const TimelinePage = () => {
  const { Header, Sider, Content } = Layout;
  const { SubMenu } = Menu;

  const [currentTab, setCurrentTab] = useState("achievements");

  return (
    <>
    <div className="page-container" style={{ "display": "flex" }}>
      <div id="timeline-page" style={{ "display": "flex", "flexGrow": 1 }}>
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
                defaultSelectedKeys={['4']}
                defaultOpenKeys={[]}
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
              <Menu 
                onClick={(e) => setCurrentTab(e.key)}
                selectedKeys={[currentTab]}
                mode="horizontal"
                style={{ "border": "none", "justifyContent": "center" }}
              >
                <Menu.Item key="tests">
                  Мои тесты
                </Menu.Item>
                <Menu.Item key="achievements">
                  Мои достижения
                </Menu.Item>
                <Menu.Item key="profile">
                  Моя страница
                </Menu.Item>
              </Menu>
              <div style={{ "marginBottom": "35px" }} />
              <div className="filters-container">
                <div className="tags-container">
                  <p className="tag active">Все события</p>
                  <p className="tag">Тесты</p>
                  <p className="tag">Видео</p>
                  <p className="tag">Оценки</p>
                  <p className="tag">Комментарии</p>
                </div>
                <div className="modes-container">
                  <div className="mode active">
                    <UnorderedListOutlined />
                  </div>
                  <div className="mode">
                    <TableOutlined />
                  </div>
                </div>
              </div>
              <div style={{ "marginBottom": "45px" }} />
              <Timeline 
                mode="left"
                style={{ "width": 360 }}
              >
                <Timeline.Item 
                  color="gray" 
                  label="Сегодня"
                  position="left"
                >
                  <div className="timeline-item-card">
                    <p className="text" style={{ "fontSize": "12px", "lineHeight": "22px" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas magna urna, vitae eleifend dui.
                    </p>
                  </div>
                </Timeline.Item>
                <Timeline.Item 
                  color="gray" 
                  label="Вчера"
                  position="left"
                >
                  <div className="timeline-item-card">
                    <p className="text" style={{ "fontSize": "12px", "lineHeight": "22px" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas magna urna, vitae eleifend dui.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas magna urna, vitae eleifend dui.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas magna urna, vitae eleifend dui.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas magna urna, vitae eleifend dui.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas magna urna, vitae eleifend dui.
                    </p>
                  </div>
                </Timeline.Item>
                <Timeline.Item 
                  color="gray" 
                  label="15.10.2021"
                  position="left"
                >
                  <div className="timeline-item-card">
                    <p className="text" style={{ "fontSize": "12px", "lineHeight": "22px" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas magna urna, vitae eleifend dui.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas magna urna, vitae eleifend dui.
                    </p>
                  </div>
                </Timeline.Item>
                <Timeline.Item 
                  color="gray" 
                  label="05.09.2021"
                  position="left"
                >
                  <div className="timeline-item-card">
                    <p className="text" style={{ "fontSize": "12px", "lineHeight": "22px" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas magna urna, vitae eleifend dui.
                    </p>
                  </div>
                </Timeline.Item>
              </Timeline>
            </Content>
          </Layout>
        </Layout>
      </div>
    </div>
    </>
  );
};

export default TimelinePage;