import classnames from 'classnames';

type GroupProps = {
  solid?: boolean;
  className?: string;
  children: React.ReactNode;
};

function Group(props: GroupProps) {
  const { solid, children, className } = props;
  return (
    <div
      className={classnames('input-group', className, {
        'input-group-solid': !!solid,
      })}
    >
      {children}
    </div>
  );
}

type GroupTextProps = {
  children: React.ReactNode;
};

function GroupText(props: GroupTextProps) {
  return <span className="input-group-text">{props.children}</span>;
}

Group.Text = GroupText;

export default Group;
