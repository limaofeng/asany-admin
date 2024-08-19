import React from 'react';

import SignInForm from './components/SignInForm';

import Creative from '../layouts/creative/SignIn';
import Overlay from '../layouts/overlay/SignIn';
import { SignInLayoutProps } from '../layouts/typings';

const layouts: {
  [key: string]: React.ComponentType<SignInLayoutProps>;
} = {
  creative: Creative,
  overlay: Overlay,
};

function SignIn() {
  const layout = 'creative';
  return React.createElement(
    layouts[layout],
    {
      title: '欢迎使用',
      logo: '/assets/media/logos/coffee_machine.svg',
    },
    <SignInForm />,
  );
}

export default SignIn;
