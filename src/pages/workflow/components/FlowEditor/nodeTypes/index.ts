import React from 'react';

import type { NodeTypes } from 'react-flow-renderer';

import EndNoneEvent from './EndNoneEvent';
import ExclusiveGateway from './ExclusiveGateway';
import ServiceTask from './ServiceTask';
import StartNoneEvent from './StartNoneEvent';
import UserTask from './UserTask';

const nodeTypes = {
  StartNoneEvent,
  UserTask,
  ServiceTask,
  EndNoneEvent,
  ExclusiveGateway,
} as NodeTypes;

export const nodeTypeGroups = {
  simple: [StartNoneEvent.info, EndNoneEvent.info],
  classics: [
    StartNoneEvent.info,
    EndNoneEvent.info,
    UserTask.info,
    ServiceTask.info,
    ExclusiveGateway.info,
  ],
  quick: [UserTask.info, ServiceTask.info, ExclusiveGateway.info],
};

export const renderNodeTypeDragPreview = (nodeType: string) => {
  return React.createElement(nodeTypes[nodeType], {
    data: { label: '拖拽预览' },
  } as any);
};

export default nodeTypes;
