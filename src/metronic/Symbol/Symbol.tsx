import Avatar from './Avatar';
import SymbolGroup, { MoreSymbol } from './SymbolGroup';
import type { SymbolProps } from './typings';
import UsersGroup from './UsersGroup';

import './style.scss';

function Symbol(props: SymbolProps) {
  return <Avatar {...props} />;
}

Symbol.Avatar = Avatar;
Symbol.Group = SymbolGroup;
Symbol.More = MoreSymbol;
Symbol.Users = UsersGroup;

export default Symbol;
