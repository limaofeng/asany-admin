import { component, library } from 'sunmao';

import HomeBuilder from './components/builder/HomeBuilder';
import ArticleList from './pages/cms/article/ArticleList';
import ArticleView from './pages/cms/article/ArticleView';
import ArticleSidebar from './pages/cms/article/ArticleSidebar';
import ArticleChannel from './pages/cms/article/ArticleChannel';
import { ArticleEdit, ArticleNew } from './pages/cms/article/ArticleEditor';

@library({
  name: 'admin',
  description: '',
  namespace: 'cn.asany.ui.admin',
})
class Admin {
  @component({ name: 'cms.ArticleList' })
  ArticleList = ArticleList;
  @component({ name: 'cms.ArticleView' })
  ArticleView = ArticleView;
  @component({ name: 'Home' })
  HomeBuilder = HomeBuilder;
  @component({ name: 'cms.ArticleSidebar' })
  ArticleSidebar = ArticleSidebar;
  @component({ name: 'cms.ArticleChannel' })
  ArticleChannel = ArticleChannel;
  @component({ name: 'cms.ArticleNew' })
  ArticleNew = ArticleNew;
  @component({ name: 'cms.ArticleEdit' })
  ArticleEdit = ArticleEdit;
}

export default new Admin();
