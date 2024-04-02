import type { IComponentDefinition } from '@asany/sunmao';
import { component, library } from '@asany/sunmao';

import LoadingComponent from '@/components/PageLoading';
import dynamic from '@/utils/dynamic';

import { generateUUID } from './GridLayout/utils';

@library({
  name: 'metronic',
  description: '',
  namespace: 'cn.asany.ui.admin.metronic',
})
class Metronic {
  @component({
    name: 'Dashboard',
    title: '仪表盘',
    tags: ['门户'],
    symbols: [
      {
        title: '卡片小部件',
        type: 'widgets/card',
        selector: '小部件/卡片小部件',
        object: (_component: IComponentDefinition) => {
          return {
            id: generateUUID(),
            type: 'widgets/card',
            name: _component.title!,
            component: _component.name,
            layout: _component.layout || { w: 6, h: 3 },
          };
        },
      },
      {
        title: '图表小部件',
        type: 'widgets/chart',
        selector: '小部件/图表小部件',
        object: (_component: IComponentDefinition) => {
          return {
            id: generateUUID(),
            type: 'widgets/chart',
            name: _component.title!,
            component: _component.name,
            layout: _component.layout || { w: 6, h: 3 },
          };
        },
      },
      {
        title: '表格小部件',
        type: 'widgets/tables',
        selector: '小部件/表格小部件',
        object: (_component: IComponentDefinition) => {
          return {
            id: generateUUID(),
            type: 'widgets/tables',
            name: _component.title!,
            component: _component.name,
            layout: _component.layout || { w: 6, h: 3 },
          };
        },
      },
      {
        title: '参与小部件',
        type: 'widgets/engage',
        selector: '小部件/参与小部件',
        object: (_component: IComponentDefinition) => {
          return {
            id: generateUUID(),
            type: 'widgets/engage',
            name: _component.title!,
            component: _component.name,
            layout: _component.layout || { w: 6, h: 3 },
          };
        },
      },
      {
        title: '地图小部件',
        type: 'widgets/maps',
        selector: '小部件/地图小部件',
        object: (_component: IComponentDefinition) => {
          return {
            id: generateUUID(),
            type: 'widgets/maps',
            name: _component.title!,
            component: _component.name,
            layout: _component.layout || { w: 6, h: 3 },
          };
        },
      },
    ],
  })
  Dashboard = dynamic({
    loader: () => import('./Dashboard'),
    loading: LoadingComponent,
  });

  @component({
    tags: ['小部件/表格小部件'],
    title: 'Widget2',
    layout: { w: 12, h: 6 },
    moveable: {
      draggable: true,
      resizable: true,
    },
  })
  TableWidget2 = dynamic({
    loader: () => import('./widgets/table/Widget2'),
    loading: LoadingComponent,
  });

  @component({
    tags: ['小部件/图表小部件'],
    title: 'Widget3',
    layout: { w: 12, h: 6 },
    moveable: {
      draggable: true,
      resizable: true,
    },
  })
  ChartWidget3 = dynamic({
    loader: () => import('./widgets/chart/Widget3'),
    loading: LoadingComponent,
  });

  @component({
    tags: ['小部件/图表小部件'],
    title: 'ChartWidget5',
    layout: { w: 8, h: 6 },
    moveable: {
      draggable: true,
      resizable: true,
    },
  })
  ChartWidget5 = dynamic({
    loader: () => import('./widgets/chart/ChartWidget5'),
    loading: LoadingComponent,
  });

  @component({
    tags: ['小部件/卡片小部件'],
    title: 'Widget4',
    layout: { w: 6, h: 3 },
    moveable: {
      draggable: true,
      resizable: true,
    },
  })
  CardWidget4 = dynamic({
    loader: () => import('./widgets/card/Widget4'),
    loading: LoadingComponent,
  });

  @component({
    tags: ['小部件/卡片小部件'],
    title: 'Widget5',
    layout: { w: 6, h: 3 },
    moveable: {
      draggable: true,
      resizable: true,
    },
  })
  CardWidget5 = dynamic({
    loader: () => import('./widgets/card/Widget5'),
    loading: LoadingComponent,
  });

  @component({
    tags: ['小部件/卡片小部件'],
    title: 'Widget6',
    layout: { w: 6, h: 3 },
    moveable: {
      draggable: true,
      resizable: true,
    },
  })
  CardWidget6 = dynamic({
    loader: () => import('./widgets/card/Widget6'),
    loading: LoadingComponent,
  });

  @component({
    tags: ['小部件/卡片小部件'],
    title: 'Widget7',
    layout: { w: 6, h: 3 },
    moveable: {
      draggable: true,
      resizable: true,
    },
  })
  CardWidget7 = dynamic({
    loader: () => import('./widgets/card/Widget7'),
    loading: LoadingComponent,
  });

  @component({
    tags: ['小部件/卡片小部件'],
    title: 'CardWidget8',
    layout: { w: 6, h: 3 },
    moveable: {
      draggable: true,
      resizable: true,
    },
  })
  CardWidget8 = dynamic({
    loader: () => import('./widgets/card/CardWidget8'),
    loading: LoadingComponent,
  });

  @component({
    tags: ['小部件/参与小部件'],
    title: 'EngageWidget1',
    layout: { w: 8, h: 7 },
    moveable: {
      draggable: true,
      resizable: true,
    },
  })
  EngageWidget1 = dynamic({
    loader: () => import('./widgets/engage/EngageWidget1'),
    loading: LoadingComponent,
  });

  @component({
    tags: ['小部件/表格小部件'],
    title: 'TableWidget4',
    layout: { w: 16, h: 7 },
    moveable: {
      draggable: true,
      resizable: true,
    },
  })
  TableWidget4 = dynamic({
    loader: () => import('./widgets/table/TableWidget4'),
    loading: LoadingComponent,
  });

  @component({
    tags: ['小部件/地图小部件'],
    title: 'MapsWidget1',
    layout: { w: 12, h: 6 },
    moveable: {
      draggable: true,
      resizable: true,
    },
  })
  MapsWidget1 = dynamic({
    loader: () => import('./widgets/maps/MapsWidget1'),
    loading: LoadingComponent,
  });
}

export default new Metronic();
