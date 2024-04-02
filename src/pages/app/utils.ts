import type { Component } from '@/types';

export function initTag(tag: string, rootTags: any[], component: Component) {
  tag.split('/').forEach((key, index, array) => {
    let subTag = rootTags.find(({ id }) => id === `tag-${key}`);
    if (!subTag) {
      rootTags.push(
        (subTag = {
          id: `tag-${key}`,
          value: `tag-${key}`,
          label: key,
          children: [],
        }),
      );
    }
    // eslint-disable-next-line no-param-reassign
    rootTags = subTag.children;
    if (array.length === index + 1) {
      rootTags.push({
        ...component,
        value: component.id,
        label: component.title || component.name || component.id,
      });
    }
  });
}
