import {configureStore as devStore} from './configureStore.dev';
import {configureStore as prodStore} from './configureStore.prod';

const configureStore = process.env.NODE_ENV === 'production' ? prodStore : devStore;
export {configureStore};
