import { createStore } from 'redux'; // 创建一个仓库
import reducer from './reducer'; // 引入笔记本

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
