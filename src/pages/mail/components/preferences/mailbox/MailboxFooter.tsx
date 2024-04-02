import { useCallback, useState } from 'react';

import Icon from '@asany/icons';

import type { Mailbox } from '@/types';

import MailboxFolderModal from './MailboxFolderModal';

type FooterProps = {
  user: string;
  selectedKey?: string;
  onSuccess: (mailbox?: Mailbox) => void;
};

function Footer(props: FooterProps) {
  const { user, onSuccess, selectedKey } = props;

  const [state, setState] = useState<string | undefined>();

  const handleClose = useCallback(() => {
    setState(undefined);
  }, []);
  // const handleAction = useCallback((e) => {
  //   if (e.key === 'smart') {
  //     setState('new-smart');
  //   } else if (e.key === 'custom') {
  //     setState('new-folder');
  //   }
  // }, []);

  const handleNewCustomFolder = useCallback(async () => {
    // const { data } = await createCalendarSet();
    // onSuccess(data?.createCalendarSet as any);
    setState('#custom');
    onSuccess();
  }, [onSuccess]);

  const handleDeleteFolder = useCallback(async () => {
    console.log(selectedKey);
    /*    await deleteCalendarSet({
      variables: {
        id: selectedKey,
      },
    }); */
    onSuccess();
  }, [selectedKey, onSuccess]);

  return (
    <div className="settings-mailbox-footer">
      {/* <Dropdown
        overlay={
          <Menu
            className="menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-2"
            dropdown={true}
            onClick={handleAction}
          >
            <Menu.Item className="px-2" key="smart">
              智能文件夹
            </Menu.Item>
            <Menu.Separator className="mx-1" />
            <Menu.Item className="px-2" key="custom">
              文件夹
            </Menu.Item>
          </Menu>
        }
        placement="topLeft"
      > */}
      <a onClick={handleNewCustomFolder}>
        <Icon name="Duotune/arr087" className="svg-icon-2" />
      </a>
      {/* </Dropdown> */}
      <a onClick={handleDeleteFolder}>
        <Icon name="Duotune/arr089" className="svg-icon-2" />
      </a>
      <MailboxFolderModal
        mode="create"
        visible={!!state}
        user={user}
        namespace={state!}
        onClose={handleClose}
      />
    </div>
  );
}

export default Footer;
