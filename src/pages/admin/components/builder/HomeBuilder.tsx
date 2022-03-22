import { useState } from 'react';

import { Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import SunmaoEditor from 'sunmao-editor';

import { ContentWrapper } from '@/pages/Metronic/components/page/Content';

function RanderSunmaoEditor() {
  return ReactDOM.createPortal(
    <div className="fullscreen">
      <SunmaoEditor
        id="0"
        name="测试"
        onSave={() => {}}
        data={{
          id: '',
          template: 'cn.asany.ui.theme.startp.BasicLayout',
          blocks: [
            {
              key: 'xxx',
              props: { title: '观自在菩萨' },
            },
          ],
        }}
      />
    </div>,
    document.body,
  );
}

function HomeBuilder() {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <ContentWrapper
      header={{
        title: '首页配置',
      }}
    >
      <Button onClick={handleClick}>配置首页</Button>
      {visible && <RanderSunmaoEditor />}
    </ContentWrapper>
  );
}

export default HomeBuilder;
