import { useState } from "react";
//import { useDispatch } from "react-redux/es/exports";
import "./LoginPage.css";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  //const dispatch = useDispatch();

  return (
    <form className="form">
      <div className="head">АВТОРИЗАЦИЯ</div>
      <div>
        <div>
          <input
            placeholder={"Имя пользователя"}
            value={userName}
            onChange={setUserName}
            className="inputname"
          />
        </div>
        <div>
          <input
            placeholder={"Пароль"}
            value={pass}
            onChange={setPass}
            className="inputpass"
          />
        </div>
        <div>
          <button className="login" type="submit" children={"Войти"} />
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
