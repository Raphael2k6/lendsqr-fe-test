import React, { useState } from "react";
import styles from "./Login.module.scss";
import Icon from "../../assets/icons/icons";
import loginImg from "../../assets/images/loginImg.png";
import { useHistory } from "react-router-dom";
import { FormSubmit, InputChange } from "../../utils/typescript";

const initialState = { userName: "", password: "" };
const Login = () => {
  const [showPass, setShowPassword] = useState(true);
  const [userLogin, setUserLogin] = useState(initialState);
  const { userName, password } = userLogin;
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleInputChange = (e: InputChange) => {
    const { value, name } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    setLoading(true);
    if (password && userName) {
      history.push("/users");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftColumn}>
        <div className={styles.leftColumnWrapper}>
          <div className={styles.logo}>
            <Icon name="logo" />
          </div>
          <div className={styles.imgContainer}>
            <img src={loginImg} alt="login image" className={styles.img} />
          </div>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.rightColumnWrapper}>
          <h2>Welcome!</h2>
          <p>Enter details to login</p>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                name="userName"
                type="email"
                placeholder="Email"
                value={userName}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.password}>
              <input
                name="password"
                type={showPass ? "password" : "text"}
                placeholder="Password"
                value={password}
                onChange={handleInputChange}
              />
              <div
                className={styles.showPass}
                onClick={() => setShowPassword(!showPass)}
              >
                SHOW
              </div>
            </div>
            <span>FORGOT PASSWORD</span>
            <div>
              <button>LOG IN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
