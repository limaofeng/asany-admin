import type { EdgeTypes } from 'react-flow-renderer';

import ButtonEdge from '../components/ButtonEdge';

import FloatingEdge from './FloatingEdge';
import SimpleFloatingEdge from './FloatingEdge/SimpleFloatingEdge';

export default {
  buttonedge: ButtonEdge,
  floating: FloatingEdge,
  simple_floating: SimpleFloatingEdge,
} as EdgeTypes;
