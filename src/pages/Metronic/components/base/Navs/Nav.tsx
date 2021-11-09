import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Nav as BsNav } from 'react-bootstrap';
import classnames from 'classnames';
import { useHistory } from 'react-router';

type NavItemProps = {
  key: string;
  children: React.ReactNode;
  href?: string;
  className?: string;
  linkClassName?: string;
};

function NavItem(props: NavItemProps) {
  const { children, href, className, linkClassName } = props;
  const { eventKey } = props as any;

  const history = useHistory();

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      href && history.push(href);
    },
    [history, href],
  );

  return (
    <BsNav.Item as="li" className={className}>
      <BsNav.Link
        eventKey={eventKey}
        className={classnames('text-active-primary me-6 px-3 ls-4', linkClassName)}
        href={href}
        onClick={handleClick}
      >
        {children}
      </BsNav.Link>
    </BsNav.Item>
  );
}

type NavProps = {
  className?: string;
  selectedKey?: string;
  children: React.ReactElement<NavItemProps>[];
  onSelect?: (selectedKey: string | null, e: React.SyntheticEvent<any>) => void;
};

function Nav(props: NavProps) {
  const { onSelect, className } = props;
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
      as="ul"
    >
      {children}
    </BsNav>
  );
}

Nav.Item = NavItem;

export default Nav;
