import update from 'react-addons-update';
import { TEST_TYPE } from '../actions/testActions';

const initialStore = {
    counter: 100,
    data: 'data',
};


export default function testReducer(store = initialStore, action) {
    switch (action.type) {
        case TEST_TYPE: {
            return update(store, {
                counter: { $set: store.counter + 1 },
                data: { $set: action.data },
            });
        }
        default:
            return store;
    }
}