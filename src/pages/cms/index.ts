import { component, library } from 'sunmao';

import ArticleList from './article/ArticleList';
import ArticleView from './article/ArticleView';
import ArticleSidebar from './article/ArticleSidebar';
import ArticleChannel from './article/ArticleChannel';
import { ArticleEdit, ArticleNew } from './article/ArticleEditor';

@library({
  name: 'cms',
  description: '',
  namespace: 'cn.asany.ui.admin.cms',
})
class Cms {
  @component({ name: 'ArticleList' })
  ArticleList = ArticleList;
  @component({ name: 'ArticleView' })
  ArticleView = ArticleView;
  @component({ name: 'ArticleSidebar' })
  ArticleSidebar = ArticleSidebar;
  @component({ name: 'ArticleChannel' })
  ArticleChannel = ArticleChannel;
  @component({ name: 'ArticleNew' })
  ArticleNew = ArticleNew;
  @component({ name: 'ArticleEdit' })
  ArticleEdit = ArticleEdit;
}

export default new Cms();
