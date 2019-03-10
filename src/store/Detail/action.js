import api from "../../api/detail";
//异步action是一个函数并返回一个新的函数

const requestDetail = (id) => (dispatch) => {
    api.requestDetail(id).then(data => {
        dispatch({type: "Detail_data", payload: data})
    })
};

export default {requestDetail};