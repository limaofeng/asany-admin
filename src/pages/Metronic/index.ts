import { component, library } from 'sunmao';

import Layout from './components/Layout/Demo7';
import SignIn from './authentication/SignIn';

import './style/index.scss';

@library({
  name: 'Metronic',
  description: '',
  namespace: 'cn.asany.ui.theme.metronic',
})
class Metronic {
  @component()
  Layout = Layout;
  @component({ name: 'authentication.SignIn' })
  SignIn = SignIn;
}

export default new Metronic();