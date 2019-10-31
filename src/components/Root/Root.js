import {Root as DevRoot} from './Root.dev';
import {Root as ProdRoot} from './Root.prod';

export const Root = process.env.NODE_ENV === 'production' ? ProdRoot : DevRoot;
