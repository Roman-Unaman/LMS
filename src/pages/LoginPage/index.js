import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { 
  Input, 
  Button,

} from "antd";

const LoginPage = () => {

  return (
    <>
      <div className="page-container">
        <div id="login-page">
          <div className="login-page-content">
            <div className="login-page-header">
              <h3 className="medium">Добро пожаловать</h3>
            </div>
            <main>
              <div className="input-field-container">
                <p className="text input-field-label">Логин/email</p>
                <Input placeholder="example@site.com" />
              </div>
              <div className="input-field-container">
                <p className="text input-field-label">Пароль</p>
                <Input.Password placeholder="Пароль" />
              </div>
              <div className="actions-container">
                <Button type="primary">Войти</Button>
                <div style={{ "marginRight": "24px" }} />
                <Button type="link">Забыли пароль?</Button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;