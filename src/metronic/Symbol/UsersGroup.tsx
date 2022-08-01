import Avatar from './Avatar';
import type { MoreSymbol } from './SymbolGroup';
import SymbolGroup from './SymbolGroup';
import type { SymbolSize } from './typings';

type User = {
  id?: string;
  name: string;
  avatar?: string;
};

type UsersGroupProps = {
  shape?: 'circle' | 'square';
  maxCount?: number;
  className?: string;
  size?: SymbolSize;
  more?: React.ReactElement<typeof MoreSymbol>;
  users: User[];
};

function UsersGroup(props: UsersGroupProps) {
  const { className, users, shape, size, maxCount, more } = props;
  return (
    <SymbolGroup className={className} size={size} shape={shape} more={more} maxCount={maxCount}>
      {users.map((item) => (
        <Avatar key={item.id || item.name} alt={item.name} src={item.avatar} />
      ))}
    </SymbolGroup>
  );
}

export default UsersGroup;
