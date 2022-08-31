import React from 'react';

import type { NodeTypes } from 'react-flow-renderer';

import EndNoneEvent, { DragNodeOfEndNoneEvent } from './EndNoneEvent';
import ExclusiveGateway, { DragNodeOfExclusiveGateway } from './ExclusiveGateway';
import ServiceTask, { DragNodeOfServiceTask } from './ServiceTask';
import StartNoneEvent, { DragNodeOfStartNoneEvent } from './StartNoneEvent';
import UserTask, { DragNodeOfUserTask } from './UserTask';

const nodeTypes = {
  StartNoneEvent,
  UserTask,
  ServiceTask,
  EndNoneEvent,
  ExclusiveGateway,
} as NodeTypes;

export const dragNodes = {
  simple: [DragNodeOfStartNoneEvent, DragNodeOfEndNoneEvent],
  classics: [
    DragNodeOfStartNoneEvent,
    DragNodeOfEndNoneEvent,
    DragNodeOfUserTask,
    DragNodeOfServiceTask,
    DragNodeOfExclusiveGateway,
  ],
};

export const renderNodeTypeDragPreview = (nodeType: string) => {
  return React.createElement(nodeTypes[nodeType], { data: { label: '拖拽预览' } } as any);
};

export default nodeTypes;
