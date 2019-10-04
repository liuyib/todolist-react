import {
  INIT_DATA,
  CHANGE_INPUT_VALUE,
  CLICK_ADD_BUTTON,
  DELETE_LIST_ITEM
} from './actionTypes';

export const getChangeInputValueAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value: value
});

export const getClickAddButtonAction = () => ({
  type: CLICK_ADD_BUTTON
});

export const getDeleteItemListAction = (index) => ({
  type: DELETE_LIST_ITEM,
  index: index
});

export const getInitDataAction = (data) => ({
  type: INIT_DATA,
  data: data
});
