import React, { Component } from 'react';
import './index.css';
import 'antd/dist/antd.css';
import store from './store/index.js';
import {
  getInitDataAction,
  getChangeInputValueAction,
  getClickAddButtonAction,
  getDeleteItemListAction
} from './store/actionCreators';
import TodolistUI from './TodolistUI';
import axios from 'axios';

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();

    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleInitData = this.handleInitData.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);

    // subscribe 方法用于监听 store：每当 store 中数据改变，都会执行 subscribe 的参数方法
    store.subscribe(this.handleStoreChange);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleInitData(data) {
    const action = getInitDataAction(data);
    store.dispatch(action);
  }

  handleInputChange(e) {
    const action = getChangeInputValueAction(e.target.value);
    store.dispatch(action);
  }

  handleBtnClick() {
    const action = getClickAddButtonAction();
    store.dispatch(action);
  }

  handleDeleteClick(index) {
    const action = getDeleteItemListAction(index);
    store.dispatch(action);
  }

  componentDidMount() {
    axios
      .get('/todolist.json')
      .then(res => {
        var data = res.data;

        this.handleInitData(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <TodolistUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleDeleteClick={this.handleDeleteClick}
      />
    );
  }
}

export default Todolist;
