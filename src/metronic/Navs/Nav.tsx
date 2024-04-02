import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Nav as BsNav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import classnames from 'classnames';

type NavItemProps = {
  key: string;
  children: React.ReactElement | string;
  href?: string;
  as?: string | React.ReactElement;
  className?: string;
  linkClassName?: string;
};

function NavItem(props: NavItemProps) {
  const { as = 'li', children, href, className, linkClassName } = props;
  const { eventKey } = props as any;

  const navigate = useNavigate();

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      href && navigate(href);
    },
    [history, href],
  );

  return (
    <BsNav.Item as={as as any} className={className}>
      {typeof children === 'string' ? (
        <BsNav.Link
          eventKey={eventKey}
          className={classnames(
            'text-active-primary me-6 px-3 ls-4',
            linkClassName,
          )}
          href={href}
          onClick={handleClick}
        >
          {children}
        </BsNav.Link>
      ) : (
        React.cloneElement(children, {
          eventKey,
          onClick: handleClick,
        })
      )}
    </BsNav.Item>
  );
}

type NavProps = {
  className?: string;
  selectedKey?: string;
  children:
    | React.ReactElement<NavItemProps>[]
    | React.ReactElement<NavItemProps>;
  as?: string | React.ReactElement;
  onSelect?: (selectedKey: string | null, e: React.SyntheticEvent<any>) => void;
};

function Nav(props: NavProps) {
  const { as = 'ul', onSelect, className } = props;
  const [selectedKey, setSelectedKey] = useState(props.selectedKey);

  const children = useMemo(() => {
    return React.Children.map(props.children, (item) =>
      React.cloneElement(item, {
        eventKey: item.key,
      } as any),
    );
  }, [props.children]);

  const handleSelect = useCallback(
    (key: string | null, e: React.SyntheticEvent<any>) => {
      if (!key) {
        return;
      }
      // eslint-disable-next-line no-unused-expressions, @typescript-eslint/no-unused-expressions
      onSelect ? onSelect(key, e) : setSelectedKey(key);
    },
    [onSelect],
  );

  useEffect(() => setSelectedKey(props.selectedKey), [props.selectedKey]);

  return (
    <BsNav
      className={classnames(
        'nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent flex-nowrap',
        className,
      )}
      activeKey={selectedKey}
      onSelect={handleSelect}
      as={as as any}
    >
      {children}
    </BsNav>
  );
}

Nav.Item = NavItem;
Nav.Link = BsNav.Link;

export default Nav;
