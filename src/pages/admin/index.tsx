import { component, library } from 'sunmao';

import HomeBuilder from './components/builder/HomeBuilder';
import ArticleList from './pages/cms/article/ArticleList';
import ArticleView from './pages/cms/article/ArticleView';
import ArticleSidebar from './pages/cms/article/ArticleSidebar';
import ArticleChannel from './pages/cms/article/ArticleChannel';
import ArticleNew from './pages/cms/article/ArticleNew';

@library({
  name: 'admin',
  description: '',
  namespace: 'cn.asany.ui.admin',
})
class Admin {
  @component({ name: 'cms.ArticleList' })
  ArticleList = ArticleList;
  @component({ name: 'cms.ArticleDetails' })
  ArticleView = ArticleView;
  @component({ name: 'Home' })
  HomeBuilder = HomeBuilder;
  @component({ name: 'cms.ArticleSidebar' })
  ArticleSidebar = ArticleSidebar;
  @component({ name: 'cms.ArticleChannel' })
  ArticleChannel = ArticleChannel;
  @component({ name: 'cms.ArticleNew' })
  ArticleNew = ArticleNew;
}

export default new Admin();
