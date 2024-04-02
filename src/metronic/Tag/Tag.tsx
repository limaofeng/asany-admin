type TagProps = {
  children: React.ReactNode;
};

function Tag(props: TagProps) {
  const { children } = props;
  return <span className="btn btn-light-warning">{children}</span>;
}

export default Tag;
