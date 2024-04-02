import { useCallback, useMemo, useState } from 'react';

import { contrastTextColor, generateBackgroundColor } from '../utils/color';

type UserProps = {
  id?: string;
  avatar?: string;
  name: string;
  onClick?: (user: UserProps) => void;
};

function User(props: UserProps) {
  const { name, avatar, onClick, ...data } = props;

  const [isAvatar, setIsAvatar] = useState(!!avatar);

  const backgroundColor = useMemo(() => generateBackgroundColor(name), [name]);
  const color = useMemo(
    () => contrastTextColor(backgroundColor),
    [backgroundColor],
  );

  const handleError = useCallback(() => {
    setIsAvatar(false);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      onClick && onClick({ ...data, name, avatar });
    },
    [avatar, data, name, onClick],
  );

  return (
    <div
      className="symbol symbol-35px symbol-circle"
      onClick={handleClick}
      title={name}
    >
      {isAvatar ? (
        <img alt="Pic" src={avatar} onError={handleError} />
      ) : (
        <span
          style={{ backgroundColor, color }}
          className="symbol-label text-inverse-warning fw-bolder"
        >
          {name.substr(0, 1)}
        </span>
      )}
    </div>
  );
}

type MoreUsersProps = {
  count: number;
  onClick?: () => void;
};

function MoreUser(props: MoreUsersProps) {
  const { count, onClick } = props;

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      onClick && onClick();
    },
    [onClick],
  );

  return (
    <a
      href="#"
      onClick={handleClick}
      className="symbol symbol-35px symbol-circle"
      data-bs-toggle="modal"
      data-bs-target="#kt_modal_view_users"
    >
      <span
        className="symbol-label bg-dark text-inverse-dark fs-8 fw-bolder"
        data-bs-toggle="tooltip"
        data-bs-trigger="hover"
        title="View more users"
      >
        +{count}
      </span>
    </a>
  );
}

type UsersProps = {
  size: number;
  users: UserProps[];
  onClick?: (user: UserProps) => void;
  onMoreClick?: () => void;
};

function Users(props: UsersProps) {
  const { onClick, onMoreClick } = props;

  const users = useMemo(() => {
    if (props.users.length <= props.size) {
      return props.users;
    }
    const showUsers = props.users.slice(0, props.size - 1);
    const moreNumber = props.users.length - showUsers.length;
    return [
      ...showUsers.map((item) => (
        <User {...item} key={`${item.name}-${item.id}`} onClick={onClick} />
      )),
      <MoreUser key="more-user" count={moreNumber} onClick={onMoreClick} />,
    ];
  }, [props.users, props.size, onMoreClick, onClick]);

  return <div className="symbol-group symbol-hover mb-3">{users}</div>;
}

User.Users = Users;

export default User;
