import React from 'react';

import { useBlock } from '@asany/sunmao';

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

const defaultProps = {
  layout: 'creative',
  title: '欢迎使用',
  logo: '/assets/media/logos/custom-3.svg',
};

function SignIn() {
  const { props, Provider } = useBlock({
    key: 'signin',
    title: '登录',
    icon: '',
    props: defaultProps,
    customizer: {
      fields: [
        {
          name: 'layout',
          label: '布局',
          type: 'Enumeration',
          enumeration: {
            values: [
              { value: 'creative', name: '创意' },
              { value: 'overlay', name: '覆盖' },
            ],
          },
        },
        {
          name: 'title',
          label: '标题',
          type: 'String',
        },
        {
          name: 'logo',
          label: 'Logo',
          type: 'String',
        },
      ],
    },
  });

  return (
    <Provider as={layouts[props.layout] as any} {...props}>
      <SignInForm />
    </Provider>
  );
}

export default SignIn;
