import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store";
import {
  changeInputValue,
  changeTodoItem,
  deleteItem,
} from "./store/actionCreater";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  handleInputChange(e) {
    const action = changeInputValue(e.target.value);
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleBtnClick() {
    const action = changeTodoItem();
    store.dispatch(action);
  }
  handleItemClick(index) {
    let action = deleteItem(index);
    store.dispatch(action);
  }
  render() {
    return (
      <div style={{ margin: "20px" }}>
        <div>
          <Input
            value={this.state.inputValue}
            placeholder="todo info"
            style={{ width: "500px" }}
            onChange={this.handleInputChange}
          ></Input>
          <Button
            type="primary"
            style={{ marginLeft: "10px" }}
            onClick={this.handleBtnClick}
          >
            提交
          </Button>
        </div>
        <List
          style={{ marginTop: "10px", width: "500px" }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemClick.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
export default TodoList;
