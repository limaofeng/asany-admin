import type { EditorPlugin } from '@asany/sunmao';
import 'overlayscrollbars/css/OverlayScrollbars.css';

import Navigation from './components/Navigation';
import Workspace from './components/Workspace';
import reducer from './reducer';
import Sidebar from './components/Sidebar';
import ComponentPanel from './components/ComponentPanel';

import './style/index.less';

export default (): EditorPlugin => ({
  id: 'workflow',
  description: '',
  types: ['flow'],
  toolbar: {
    content: Navigation,
    tools: [
      {
        id: 'save',
        name: '保存',
        position: 'left',
        onClick: (editor) => {
          const { project } = editor.state;
          console.log('onClick  project', project);
          // const blocks = sketch.getComponentData(project.data.id);
          // const data = blocks.map(({ key, props }) => ({ key, props }));
          // const newProject = {
          //   ...project,
          //   data: {
          //     ...project.data,
          //     blocks: data
          //       .map(({ key, props: { blockTitle, ...props } = {} }) => ({ key, props }))
          //       .filter((item) => Object.keys(item.props).length),
          //   },
          // };
          editor.save({} as any);
        },
      },
    ],
  },
  reducer,
  sidebar: {
    minimizable: false,
    content: () => <Sidebar />,
    tools: [
      {
        id: 'components',
        icon: 'AsanyEditor/LayoutGrid',
        name: '组件',
        position: 'top',
        mutex: 'left',
        onClick: (editor) => {
          return editor.sidebar.open('components', '组件', ComponentPanel);
        },
      },
      {
        id: 'drag',
        name: '拖拽画布',
        icon: 'AsanyEditor/HandDrag',
        position: 'top',
        useSelector: (state) => state.features.drag,
        isSelected: (drag) => drag,
        onClick: (editor) => {
          editor.features.drag(true);
          return () => {
            editor.features.drag(false);
          };
        },
      },
      {
        id: 'selecto',
        name: '选择',
        icon: 'AsanyEditor/SelectFilled',
        position: 'top',
        mutex: 'icons-actions',
        useSelector: (state) => state.features.selecto,
        isSelected: (selecto) => selecto,
        onClick: (editor) => {
          editor.features.selecto(true);
          return () => {
            editor.features.selecto(false);
          };
          //   // const active = !editor.state.workspace.icon.selecto;
          //   // editor.dispatch({ type: IconActionType.SELECTO, payload: active });
        },
      },
      // {
      //   id: 'move',
      //   name: '选择',
      //   icon: 'AsanyEditor/Move',
      //   position: 'top',
      //   mutex: 'icons-actions',
      //   useSelector: (state) => state.workspace.sunmao.move,
      //   isSelected: (move) => move,
      //   onClick: (editor) => {
      //     return editor.sidebar.select('move');
      //   },
      // },
      // {
      //   id: 'bottom',
      //   icon: 'AsanyEditor/Layers',
      //   position: 'bottom',
      //   onClick: (editor) => {
      //     return editor.sidebar.open('bottom', '弹出面板', BlockLayers);
      //   },
      // },
    ],
  },
  scena: {
    screen: 'fullscreen',
    workspace: Workspace,
  },
  features: [],
});
