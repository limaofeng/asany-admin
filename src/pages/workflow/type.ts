import type { Edge, Node } from 'react-flow-renderer';

type StencilID =
  // 开始节点
  | 'StartNoneEvent'
  // 用户任务
  | 'UserTask'
  // 互斥网关
  | 'ExclusiveGateway'
  // 结束节点
  | 'EndNoneEvent'
  // 线
  | 'SequenceFlow';

export type ProcessDefinitionShape = {
  resourceId: string;
  properties: {
    overrideid: string;
    name: string;
    documentation: string;
    executionlisteners: { executionListeners: string[] };
    initiator: string;
    formkeydefinition: string;
    defineForms: string[];
    formreference: {
      id: string;
      name: string;
      key: string;
    };
    formproperties: any;
    interrupting: true;
    usertaskassignment: {
      assignment: {
        type: string;
        value: string;
        distributionMode: string;
      };
    };
  };
  stencil: { id: StencilID };
  outgoing: [{ resourceId: string }];
  target: { resourceId: string };
  bounds: {
    lowerRight: { x: number; y: number };
    upperLeft: { x: number; y: number };
    dockers: string[];
  };
};
export type ProcessDefinition = {
  modelId: string;
  bounds: {
    lowerRight: { x: number; y: number };
    upperLeft: { x: number; y: number };
  };
  properties: {
    process_id: string;
    name: string;
    documentation: string;
    process_author: string;
    process_version: string;
    process_namespace: 'http://www.flowable.org/processdef';
    process_historylevel: string;
    isexecutable: true;
    dataproperties: string;
    executionlisteners: string;
    eventlisteners: string;
    signaldefinitions: string;
    messagedefinitions: string;
    process_potentialstarteruser: string;
    process_potentialstartergroup: string;
    iseagerexecutionfetch: string;
  };
  childShapes: ProcessDefinitionShape[];
};

export type ReactFlowData = {
  nodes: Node<any>[];
  edges: Edge[];
};
