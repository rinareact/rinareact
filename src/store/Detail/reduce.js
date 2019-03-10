const reducer = (state = {
    number: 1,
    cartnumber: 0,
    detailinfo: {},
}, action) => {
    //解出action中的type和payload选项
    let {type, payload} = action;
    switch (type) {
        case "Detail_data":
            return {
                ...state, banner: state.data = payload
            };
        default:
            return state;
    }
};
export default reducer;