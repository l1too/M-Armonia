import loginInReducer from './loginInReducer';
import tokenReducer from './tokenReducer';
import notasReducer from '../notasSlice';

const rootReducer = {
  loginInReducer,
  tokenReducer,
  notas: notasReducer,
};

export default rootReducer;