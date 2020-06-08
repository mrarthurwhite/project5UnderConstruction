const fetchAWordReducer = (state = [],
                      action) => {
    switch(action.type) {
        case 'LOADING_A_WORD':
            return [...state];
        case 'A_WORD':
            console.log("fetchAWordReducer.js action.word " + action.word ) ;
            debugger;
            return state.concat(action.word);
        default:
            return state;
    }
}


