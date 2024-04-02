import { useEffect, useMemo } from 'react';

import WebsiteSidebar from '../components/WebsiteSidebar';
import {
  useWebsiteArticleCategoriesLazyQuery,
  useWebsiteQuery,
} from '../hooks';

import { MicroApp } from '@/layouts/Demo7';
import type { ArticleCategory } from '@/types';
import { Outlet, useLocation, useParams } from 'react-router-dom';

function WebsiteManage() {
  const { sid: id } = useParams<{ sid: string }>();
  const location = useLocation();

  const { data, loading } = useWebsiteQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      id,
    },
  });

  const website = data?.website;
  const rootChannelId = website?.channel.id;

  const [
    loadCategories,
    { data: channeslData = { categories: [] }, loading: categoriesLoading },
  ] = useWebsiteArticleCategoriesLazyQuery({
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
          id={id!}
          loading={loading || categoriesLoading}
        />
      </MicroApp.Sidebar>
      {rootChannelId && !categoriesLoading && (
        <Outlet
          context={{
            rootCategoryId: rootChannelId,
            categories,
            baseUrl: '/websites/' + id,
          }}
        />
      )}
      {/* React.Children.map(children, (o: any) => {
          o.props.location.state = {
            rootCategoryId: rootChannelId,
            categories,
            baseUrl: '/websites/' + id,
          };
          return o;
        })} */}
    </MicroApp>
  );
}

export default WebsiteManage;
