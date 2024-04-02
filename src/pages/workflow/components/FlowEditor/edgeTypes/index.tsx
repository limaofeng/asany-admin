import type { EdgeTypes } from 'react-flow-renderer';

import FloatingEdge from './FloatingEdge';
import SimpleFloatingEdge from './FloatingEdge/SimpleFloatingEdge';

import ButtonEdge from '../components/ButtonEdge';

export default {
  buttonedge: ButtonEdge,
  floating: FloatingEdge,
  simple_floating: SimpleFloatingEdge,
} as EdgeTypes;
