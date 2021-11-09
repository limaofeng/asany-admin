import type { InputProps, InputRef } from './Input';
import { internalInput as Input } from './Input';
import TextArea from './TextArea';
import Password from './Password';
import Search from './Search';

Input.Password = Password;
Input.TextArea = TextArea;
Input.Search = Search;
interface InputWrapper
  extends InputRef,
    React.ForwardRefExoticComponent<InputProps & React.RefAttributes<InputRef | null>> {
  TextArea: typeof TextArea;
  Password: typeof Password;
  Search: typeof Search;
}

export { InputRef } from './Input';

export default Input as InputWrapper;
