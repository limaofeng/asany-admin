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

export default nodeTypes;
