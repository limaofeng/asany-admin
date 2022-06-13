import Group from './Group';
import type { InputProps, InputRef } from './Input';
import { internalInput as InternalInput } from './Input';
import Password from './Password';
import Search from './Search';
import TextArea from './TextArea';

InternalInput.Password = Password;
InternalInput.TextArea = TextArea;
InternalInput.Search = Search;
InternalInput.Group = Group;

interface InputWrapper
  extends InputRef,
    React.ForwardRefExoticComponent<InputProps & React.RefAttributes<InputRef | null>> {
  TextArea: typeof TextArea;
  Password: typeof Password;
  Search: typeof Search;
  Group: typeof Group;
}

export type { InputRef } from './Input';

export default InternalInput as InputWrapper;
