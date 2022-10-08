import './style.css';
import base from './modules/base.js';

base();

if (module.hot) {
  module.hot.accept();
}
