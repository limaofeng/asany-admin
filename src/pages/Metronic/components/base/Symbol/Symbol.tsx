import type { AvatarProps } from './Avatar';
import Avatar from './Avatar';

export type SymbolProps = AvatarProps;

function Symbol(props: SymbolProps) {
  return <Avatar {...props} />;
}

export default Symbol;
