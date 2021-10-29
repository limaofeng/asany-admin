import type { InputProps } from './Input';
import { internalInput as Input } from './Input';
import TextArea from './TextArea';
import Password from './Password';
import Search from './Search';

Input.Password = Password;
Input.TextArea = TextArea;
Input.Search = Search;
interface InputWrapper
  extends React.ForwardRefExoticComponent<
    InputProps & React.RefAttributes<HTMLInputElement | null>
  > {
  TextArea: typeof TextArea;
  Password: typeof Password;
  Search: typeof Search;
}

export default Input as InputWrapper;
