const initialStore = {
    counter: 0,
    data: 'data',
};


export default function testReducer2(store = initialStore, action) {
    switch (action.type) {
        default:
            return store;
    }
}