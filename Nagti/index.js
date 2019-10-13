/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import DanhSach from './component/home';
import App from './component/home';

AppRegistry.registerComponent(appName, () => App);
