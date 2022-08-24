import type { ConversationItem } from 'open-im-sdk/types';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import CveItem from './CveItem';

import { Card } from '@/metronic';

type CveListProps = {
  loading: boolean;
  cves: ConversationItem[];
  onItemClick: (item: ConversationItem) => void;
  curCve: ConversationItem | null;
};

function CveList(props: CveListProps) {
  const { curCve, cves, onItemClick } = props;

  return (
    <OverlayScrollbarsComponent
      className="d-flex flex-column custom-scrollbar px-2 cve-list"
      options={{
        scrollbars: { autoHide: 'scroll' },
      }}
    >
      <Card
        flush
        className="py-0 px-2 background-transparent"
        bodyClassName="pt-5 pb-0 px-1 cve-list"
      >
        {cves.map((item) => (
          <CveItem
            onClick={onItemClick}
            cveList={cves}
            data={item}
            curCve={curCve}
            key={item.conversationID}
          />
        ))}
      </Card>
    </OverlayScrollbarsComponent>
  );
}

export default CveList;
