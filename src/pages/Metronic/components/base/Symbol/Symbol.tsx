import type { AvatarProps } from './Avatar';
import Avatar from './Avatar';

import './style.scss';

export type SymbolProps = AvatarProps;

function Symbol(props: SymbolProps) {
  return <Avatar {...props} />;
}

export default Symbol;
