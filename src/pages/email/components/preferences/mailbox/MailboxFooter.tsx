import { useCallback } from 'react';

import Icon from '@asany/icons';

import type { Mailbox } from '@/types';

type FooterProps = {
  selectedKey: string;
  onSuccess: (mailbox?: Mailbox) => void;
};

function Footer(props: FooterProps) {
  const { onSuccess, selectedKey } = props;

  const handleNewCalendarSetNew = useCallback(async () => {
    // const { data } = await createCalendarSet();
    // onSuccess(data?.createCalendarSet as any);
    onSuccess();
  }, [onSuccess]);

  const handleDeleteCalendarSet = useCallback(async () => {
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
      <a onClick={handleNewCalendarSetNew}>
        <Icon name="Duotune/arr087" className="svg-icon-2" />
      </a>
      <a onClick={handleDeleteCalendarSet}>
        <Icon name="Duotune/arr089" className="svg-icon-2" />
      </a>
    </div>
  );
}

export default Footer;
