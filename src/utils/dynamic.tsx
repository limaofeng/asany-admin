import React, { Suspense } from 'react';

export default function dynamic({
  loader,
  loading,
}: {
  loader: () => any;
  loading: React.ComponentType;
}) {
  // 使用 React.lazy 加载组件
  const LazyComponent = React.lazy(loader);
  // 返回一个包含 Suspense 和 LazyComponent 的组件
  return (props: any) => (
    <Suspense fallback={React.createElement(loading)}>
      <LazyComponent {...props} />
    </Suspense>
  );
}
