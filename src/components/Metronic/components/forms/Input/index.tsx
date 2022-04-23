import type { InputProps, InputRef } from './Input';
import { internalInput as InternalInput } from './Input';
import TextArea from './TextArea';
import Password from './Password';
import Search from './Search';

InternalInput.Password = Password;
InternalInput.TextArea = TextArea;
InternalInput.Search = Search;
interface InputWrapper
  extends InputRef,
    React.ForwardRefExoticComponent<InputProps & React.RefAttributes<InputRef | null>> {
  TextArea: typeof TextArea;
  Password: typeof Password;
  Search: typeof Search;
}

export type { InputRef } from './Input';

export const Input = InternalInput as InputWrapper;
