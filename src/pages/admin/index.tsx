import { library, component } from 'sunmao';
import Projects from '../Metronic/components/Aside/Secondary/Projects';
import HomeBuilder from './components/builder/HomeBuilder';

import ArticleList from './components/cms/ article/ArticleList';
import ArticleView from './components/cms/ article/ArticleView';

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
  Projects = Projects;
}

export default new Admin();
