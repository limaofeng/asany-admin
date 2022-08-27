import type { ProcessDefinition, ProcessDefinitionShape, ReactFlowData } from '../type';

function getSourceId(id: string, nodes: ProcessDefinitionShape[]) {
  return nodes.find((item) => item.outgoing.some((outLine) => outLine.resourceId == id))
    ?.resourceId;
}

function getTagetId(shape: ProcessDefinitionShape) {
  return shape.target.resourceId;
}

export function flowableToReactflow(source: ProcessDefinition) {
  const flowdata: ReactFlowData = {
    nodes: [],
    edges: [],
  };

  const shapes = source.childShapes;
  console.log('shapes', shapes.length);
  const nodes = shapes.filter((item) => item.stencil.id != 'SequenceFlow');
  for (const shape of shapes) {
    if (shape.stencil.id == 'SequenceFlow') {
      flowdata.edges.push({
        id: shape.resourceId,
        type: 'buttonedge',
        source: getSourceId(shape.resourceId, nodes)!,
        target: getTagetId(shape),
        label: shape.properties.name || '线',
      });
      console.log(getSourceId(shape.resourceId, nodes), getTagetId(shape));
    } else {
      flowdata.nodes.push({
        id: shape.resourceId,
        type: shape.stencil.id,
        data: {
          label: shape.properties.name,
        },
        position: { x: shape.bounds.upperLeft.x, y: shape.bounds.upperLeft.y },
      });
      console.log('shape', shape.stencil.id, shape.resourceId, shape.properties.name);
    }
  }
  return flowdata;
}

// const data = require('./flowable_data.json');

// flowableToReactflow(data);
