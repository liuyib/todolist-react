import {
  INIT_DATA,
  CHANGE_INPUT_VALUE,
  CLICK_ADD_BUTTON,
  DELETE_LIST_ITEM
} from './actionTypes';

const defaultState = {
  inputValue: '',
  list: []
};

export default (state = defaultState, action) => {
  // state 是 store 里的数据
  if (action.type === INIT_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = [...action.data];

    return newState;
  }

  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));

    newState.inputValue = action.value;

    return newState;
  }

  if (action.type === CLICK_ADD_BUTTON) {
    const newState = JSON.parse(JSON.stringify(state));

    if (newState.inputValue !== '') {
      // 防止输入框空的时候提交
      newState.list.push(newState.inputValue);
      newState.inputValue = '';

      return newState;
    } else {
      alert('请输入字符');

      return newState;
    }
  }

  if (action.type === DELETE_LIST_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));

    newState.list.splice(action.index, 1);

    return newState;
  }

  return state;
};
