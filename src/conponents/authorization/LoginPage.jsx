import "./LoginPage.css";

//API
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { authAPI } from "conponents/API/authService";
import { setCredentials } from "conponents/app/authSlice";

//Comp
import { Loader } from "../../shared/loader/Loader";

export const LoginPage = ({ switchSign }) => {
  const [login, { data, isLoading, isError }] = authAPI.useLoginMutation();

  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setCredentials({ token: data.access_token }));
    }
  }, [data]);

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          login({ userName, password: pass });
        }}
      >
        <div className="head">АВТОРИЗАЦИЯ</div>
        <div>
          <div className="inputName">
            <label>
              Login
              {isError ? <span style={{ color: "red" }}>failed</span> : <></>}
            </label>
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
  }
};
