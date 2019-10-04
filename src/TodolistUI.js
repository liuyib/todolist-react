import React, { Fragment } from 'react';
import { Input, Button, List } from 'antd';

const TodolistUI = (props) => {
  return (
    <Fragment>
        <Input
          placeholder='placeholder'
          value={props.inputValue}
          onChange={props.handleInputChange}
          style={{ width: '300px', marginRight: '10px' }}
        />
        <Button
          type="primary"
          onClick={props.handleBtnClick}
        >提交</Button>

        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                props.handleDeleteClick(index)
              }}
            >
              {item}
            </List.Item>
          )}
          style={{ width: '300px', marginTop: '10px' }}
        />
      </Fragment>
  );
}

export default TodolistUI;