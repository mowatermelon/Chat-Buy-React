import React from "react";
import {
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Radio
} from "antd-mobile";
import { connect } from "react-redux";
import { register } from "../../actions/user";

@connect(null, { register })
class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "",
      pwd: "",
      type: "deliver"
    };
  }
  handleTextChange(key, value) {
    this.setState({
      [key]: value
    });
  }
  render() {
    const redioData = [
      { type: "deliver", text: "送货员" },
      { type: "customer", text: "顾客" }
    ];
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
            <WhiteSpace />
            {redioData.map(i => (
              <Radio.RadioItem
                key={i.type}
                checked={this.state.type === i.type}
                onChange={() => this.handleTextChange("type", i.type)}
              >
                {i.text}
              </Radio.RadioItem>
            ))}
          </List>
          <WhiteSpace />
          <Button
            type="primary"
            onClick={() => this.props.register(this.state)}
          >
            注册
          </Button>
        </WingBlank>
      </div>
    );
  }
}

export default RegisterForm;
