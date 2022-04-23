import Avatar from './Avatar';
import SymbolGroup from './SymbolGroup';
import type { SymbolProps } from './typings';

import './style.scss';

function Symbol(props: SymbolProps) {
  return <Avatar {...props} />;
}

Symbol.Avatar = Avatar;
Symbol.Group = SymbolGroup;

export default Symbol;
