import React from "react";
import { List, InputItem, WingBlank, WhiteSpace, Button } from "antd-mobile";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/user";

@withRouter
@connect(null, { login })
class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "",
      pwd: ""
    };
  }
  handleTextChange(key, value) {
    this.setState({
      [key]: value
    });
  }
  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <WingBlank>
          <List>
            <InputItem onChange={v => this.handleTextChange("user", v)} placeholder="请输入用户名">
              用户名
            </InputItem>
            <WhiteSpace />
            <InputItem onChange={v => this.handleTextChange("pwd", v)} type="password" placeholder="****">
              密码
            </InputItem>
          </List>
          <WhiteSpace />
          <Button type="primary" onClick={() => this.props.login(this.state)}>
            登录
          </Button>
          <WhiteSpace />
          <div className="button-wrapper">
            <Button
              inline
              size="small"
              style={{ width: "100px" }}
              onClick={() => this.props.history.push("/register")}
            >
              注册
            </Button>
            <Button inline size="small" style={{ width: "100px" }}>
              忘记密码
            </Button>
          </div>
        </WingBlank>
      </div>
    );
  }
}

export default LoginForm;
