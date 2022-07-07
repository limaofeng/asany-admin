import React, { useEffect, useMemo } from 'react';

import type { RouteComponentProps } from 'react-router';

import WebsiteSidebar from '../components/WebsiteSidebar';
import { useWebsiteArticleCategoriesLazyQuery, useWebsiteQuery } from '../hooks';

import { MicroApp } from '@/layouts/Demo7';
import type { ArticleCategory } from '@/types';

type WebsiteManageProps = RouteComponentProps<{ sid: string }> & {
  children: React.ReactNode;
};

function WebsiteManage(props: WebsiteManageProps) {
  const { match, children, location } = props;

  const id = match.params.sid;

  const { data, loading } = useWebsiteQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      id,
    },
  });

  const website = data?.website;
  const rootChannelId = website?.channel.id;

  const [loadCategories, { data: channeslData = { categories: [] }, loading: categoriesLoading }] =
    useWebsiteArticleCategoriesLazyQuery({
      fetchPolicy: 'cache-and-network',
    });

  const categories: ArticleCategory[] = useMemo(() => {
    if (!channeslData?.categories || !channeslData.categories.length) {
      return [];
    }
    return channeslData.categories as ArticleCategory[];
  }, [channeslData?.categories]);

  useEffect(() => {
    if (!rootChannelId) {
      return;
    }
    loadCategories({ variables: { id: rootChannelId } });
  }, [loadCategories, rootChannelId]);

  return (
    <MicroApp className="micro-app-website">
      <MicroApp.Sidebar>
        <WebsiteSidebar
          website={website as any}
          categories={categories}
          location={location as any}
          id={match.params.sid}
          loading={loading || categoriesLoading}
        />
      </MicroApp.Sidebar>
      {rootChannelId &&
        !categoriesLoading &&
        React.Children.map(children, (o: any) => {
          o.props.location.state = {
            rootCategoryId: rootChannelId,
            categories,
            baseUrl: '/websites/' + id,
          };
          return o;
        })}
    </MicroApp>
  );
}

export default WebsiteManage;
