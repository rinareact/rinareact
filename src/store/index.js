import {createStore, combineReducers, applyMiddleware} from 'redux';
import DetailStore from './Detail/reducer';
//允许action返回一个函数
import thunk from 'redux-thunk';

//合并分类的reducer
let reducer = combineReducers({
    DetailStore
});
//创建store实例
let store = createStore(reducer, applyMiddleware(thunk));

export default store;