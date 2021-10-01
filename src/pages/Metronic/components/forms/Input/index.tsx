import type React from 'react';

import type { InputProps } from './Input';
import Input from './Input';
import TextArea from './TextArea';
import Password from './Password';

Input.Password = Password;
Input.TextArea = TextArea;

interface InputWrapper
  extends React.ForwardRefExoticComponent<
    InputProps & React.RefAttributes<HTMLInputElement | null>
  > {
  TextArea: typeof TextArea;
  Password: typeof Password;
}

export default Input as InputWrapper;
