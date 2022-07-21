import { useCallback } from 'react';

import SunmaoEditor from 'sunmao-editor';
import { history } from 'umi';

import project from '../../project.json';

function RanderSunmaoEditor() {
  const handleBack = useCallback(() => {
    history.goBack();
  }, []);

  const handleSave = useCallback((data: any) => {
    console.log(JSON.stringify(data), data);
  }, []);

  return (
    <SunmaoEditor
      id="0"
      name="测试"
      onSave={handleSave}
      onBack={handleBack}
      viewport={{ size: [1280, 2160] }}
      data={project}
    />
  );
}

function HomeBuilder() {
  return <RanderSunmaoEditor />;
}

export default HomeBuilder;
