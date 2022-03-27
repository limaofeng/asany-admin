import React from 'react';

import { Tabs } from '@/pages/Metronic/components';

function Transfers() {
  return (
    <Tabs tabPosition="left">
      <Tabs.TabPane key="upload" tab="文件上传">
        <ul>
          <li>
            <div className="file-icon">x</div>
            <div className="file-details">
              <div className="file-title">xxxx</div>
              <div className="file-transfer-progress" />
              <div className="file-size" />
              <div className="file-transfer-rate" />
            </div>
            <div className="file-actions">{/** 暂停 / 取消 / 继续上传 / 恢复  */}</div>
          </li>
        </ul>
      </Tabs.TabPane>
      <Tabs.TabPane key="download" tab="文件下载">
        ssss
      </Tabs.TabPane>
    </Tabs>
  );
}

export default Transfers;
