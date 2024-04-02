export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  File: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Number: { input: any; output: any; }
  OrderBy: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AcceptArticleCategory = {
  /** 栏目 */
  id: Scalars['ID']['input'];
  /** 是否包含子栏目 */
  subColumns?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AcceptFolder = {
  /** 文件夹 */
  id: Scalars['ID']['input'];
  /** 是否包含子文件夹 */
  subfolders?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Address = {
  __typename?: 'Address';
  /** 城市编码 */
  city?: Maybe<Scalars['String']['output']>;
  /** 城市名称 */
  cityName?: Maybe<Scalars['String']['output']>;
  /** 国家编码 */
  country?: Maybe<Scalars['String']['output']>;
  /** 国家名称 */
  countryName?: Maybe<Scalars['String']['output']>;
  /** 详细地址 - 具体的小区楼栋信息 */
  detailedAddress?: Maybe<Scalars['String']['output']>;
  /** 区县编码 */
  district?: Maybe<Scalars['String']['output']>;
  /** 区县名称 */
  districtName?: Maybe<Scalars['String']['output']>;
  /**
   * 完整地址
   * 包含: provinceName + cityName + districtName + streetName + detailedAddress
   */
  fullAddress?: Maybe<Scalars['String']['output']>;
  /** 邮编 */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** 省编码 */
  province?: Maybe<Scalars['String']['output']>;
  /** 省名称 */
  provinceName?: Maybe<Scalars['String']['output']>;
  /** 街道编码 */
  street?: Maybe<Scalars['String']['output']>;
  /** 街道名称 */
  streetName?: Maybe<Scalars['String']['output']>;
};


export type AddressFullAddressArgs = {
  excludeDetailed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AddressInput = {
  /** 城市编码 */
  city?: InputMaybe<Scalars['String']['input']>;
  /** 城市名称 */
  cityName?: InputMaybe<Scalars['String']['input']>;
  /** 国家编码 */
  country?: InputMaybe<Scalars['String']['input']>;
  /** 国家名称 */
  countryName?: InputMaybe<Scalars['String']['input']>;
  /** 详细地址 */
  detailedAddress?: InputMaybe<Scalars['String']['input']>;
  /** 区县编码 */
  district?: InputMaybe<Scalars['String']['input']>;
  /** 区县名称 */
  districtName?: InputMaybe<Scalars['String']['input']>;
  /** 邮编 */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** 省编码 */
  province?: InputMaybe<Scalars['String']['input']>;
  /** 省名称 */
  provinceName?: InputMaybe<Scalars['String']['input']>;
  /** 街道编码 */
  street?: InputMaybe<Scalars['String']['input']>;
  /** 街道名称 */
  streetName?: InputMaybe<Scalars['String']['input']>;
};

export type AmapOpenApi = {
  __typename?: 'AmapOpenAPI';
  geocode_geo: Array<Geocode>;
  ip: IpResult;
};


export type AmapOpenApiGeocode_GeoArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
};


export type AmapOpenApiIpArgs = {
  ip?: InputMaybe<Scalars['String']['input']>;
};

export type Application = {
  __typename?: 'Application';
  /** 客户端 ID */
  clientId: Scalars['String']['output'];
  /** 客户端密钥 */
  clientSecrets: Array<ClientSecret>;
  /** 依赖 */
  dependencies: Array<ApplicationDependency>;
  /** 简介 */
  description?: Maybe<Scalars['String']['output']>;
  /** 集成钉钉 */
  dingtalkIntegration?: Maybe<Scalars['Boolean']['output']>;
  /** 是否启用 */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  /** 布局路由 */
  layoutRoute?: Maybe<Route>;
  /** 获取组织可用的许可证 */
  licence?: Maybe<Licence>;
  /** 许可证 */
  licences: Array<Licence>;
  /** 登录路由 */
  loginRoute?: Maybe<Route>;
  /** 应用 LOGO */
  logo?: Maybe<Scalars['String']['output']>;
  /** 菜单 */
  menus: Array<Menu>;
  /** 名称 (英文) */
  name: Scalars['String']['output'];
  /** 路由 */
  routes: Array<Route>;
  /** 路由命名空间 */
  routespaces?: Maybe<Array<Maybe<Routespace>>>;
  /** 名称 (中文) */
  title?: Maybe<Scalars['String']['output']>;
  /** 应用访问地址 */
  url?: Maybe<Scalars['String']['output']>;
};


export type ApplicationLayoutRouteArgs = {
  space?: InputMaybe<Scalars['ID']['input']>;
};


export type ApplicationLoginRouteArgs = {
  space?: InputMaybe<Scalars['ID']['input']>;
};


export type ApplicationRoutesArgs = {
  where?: InputMaybe<RouteWhereInput>;
};

export type ApplicationCreateInput = {
  /** 简介 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 名称 */
  name: Scalars['String']['input'];
  /** 路由空间 */
  routespaces?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ApplicationDependency = {
  __typename?: 'ApplicationDependency';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum ApplicationIdType {
  ClientId = 'CLIENT_ID',
  Id = 'ID'
}

export type ApplicationUpdateInput = {
  /** 简介 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 是否启用 */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** 应用 LOGO */
  logo?: InputMaybe<Scalars['String']['input']>;
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 组织 */
  organization?: InputMaybe<Scalars['String']['input']>;
  /** 应用根路径 */
  path?: InputMaybe<Scalars['String']['input']>;
};

export type ApplicationWhereInput = {
  /** 分类 */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** 文章 */
export type Article = {
  __typename?: 'Article';
  /** 附件 */
  attachments: Array<Scalars['File']['output']>;
  /** 作者 */
  authors: Array<ArticleAuthor>;
  /** body 的 html 格式 */
  bodyHtml?: Maybe<Scalars['String']['output']>;
  /** 包含文章分类的全部层级的数据 */
  categories: Array<ArticleCategory>;
  /** 文章分类 */
  category?: Maybe<ArticleCategory>;
  /** 点击数 */
  clicks: Scalars['Int']['output'];
  /** 内容 */
  content?: Maybe<ArticleContent>;
  /** 创建时间 */
  createdAt?: Maybe<Scalars['Date']['output']>;
  /** 创建人 */
  createdBy?: Maybe<Scalars['Int']['output']>;
  /** 收藏 */
  favorites: Scalars['Int']['output'];
  /** 特征 */
  features: Array<ArticleFeature>;
  /** 文章ID */
  id: Scalars['ID']['output'];
  /** 图片 */
  image?: Maybe<Scalars['File']['output']>;
  /** 点赞数 */
  likes: Scalars['Int']['output'];
  /** 元数据 */
  metafields: Array<ArticleMetaField>;
  /** 发布时间 */
  publishedAt?: Maybe<Scalars['Date']['output']>;
  /** 阅读数 */
  reads: Scalars['Int']['output'];
  /** 链接 */
  slug?: Maybe<Scalars['String']['output']>;
  /** 状态 */
  status: ArticleStatus;
  /** 摘要 */
  summary?: Maybe<Scalars['String']['output']>;
  /** 标签 */
  tags: Array<ArticleTag>;
  /** 标题 */
  title?: Maybe<Scalars['String']['output']>;
  /** 修改时间 */
  updatedAt?: Maybe<Scalars['Date']['output']>;
  /** 修改人 */
  updatedBy?: Maybe<Scalars['Int']['output']>;
  /** 有效期限 true 永久 false 短期 */
  validity?: Maybe<Scalars['Boolean']['output']>;
  /** 有效期限 结束时间 */
  validityEndDate?: Maybe<Scalars['Date']['output']>;
  /** 有效期限 开始时间 */
  validityStartDate?: Maybe<Scalars['Date']['output']>;
};

export type ArticleAuthor = {
  __typename?: 'ArticleAuthor';
  /** 员工 */
  employee?: Maybe<Employee>;
  id?: Maybe<Scalars['ID']['output']>;
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
};

export type ArticleCategory = {
  __typename?: 'ArticleCategory';
  /** 栏目文章 */
  articles: Array<Article>;
  /** 子栏目 */
  children: Array<ArticleCategory>;
  /** 创建时间 */
  createdAt: Scalars['Date']['output'];
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  /** 全称 */
  fullName: Scalars['String']['output'];
  /** 对应的图标 */
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** 栏目封面图 */
  image?: Maybe<Scalars['File']['output']>;
  /** 排序 */
  index: Scalars['Int']['output'];
  /** 层级 */
  level: Scalars['Int']['output'];
  /** 元数据 */
  metafields: Array<ArticleCategoryMetaField>;
  /** 名称 */
  name: Scalars['String']['output'];
  /** 页面 */
  page?: Maybe<PageComponent>;
  /** 上级栏目 */
  parent?: Maybe<ArticleCategory>;
  /** 全路径 */
  path?: Maybe<Scalars['String']['output']>;
  /** 编码 */
  slug?: Maybe<Scalars['String']['output']>;
  /** 存储模版 */
  storeTemplate?: Maybe<ArticleStoreTemplate>;
  /** 修改时间 */
  updatedAt: Scalars['Date']['output'];
};


export type ArticleCategoryArticlesArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticleWhereInput>;
};

export type ArticleCategoryCreateInput = {
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 栏目封面图 */
  image?: InputMaybe<Scalars['File']['input']>;
  /** 排序 */
  index?: InputMaybe<Scalars['Int']['input']>;
  /** 附加信息 */
  metafields?: InputMaybe<Array<InputMaybe<ArticleMetafieldInput>>>;
  /** 栏目名称 */
  name: Scalars['String']['input'];
  /** 上级栏目 */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** 地址 */
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleCategoryMetaField = {
  __typename?: 'ArticleCategoryMetaField';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  namespace?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export enum ArticleCategoryStarType {
  /** 关注 */
  Follow = 'follow'
}

export type ArticleCategoryUpdateInput = {
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 栏目封面图 */
  image?: InputMaybe<Scalars['File']['input']>;
  /** 排序 */
  index?: InputMaybe<Scalars['Int']['input']>;
  /** 附加信息 */
  metafields?: InputMaybe<Array<InputMaybe<ArticleMetafieldInput>>>;
  /** 栏目名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 分类页面 */
  page?: InputMaybe<PageComponentInput>;
  /** 上级栏目 */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** 地址 */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** 存储模版 */
  storeTemplate?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleCategoryWhereInput = {
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 父栏目 */
  parent?: InputMaybe<AcceptArticleCategory>;
  /** 路径 匹配开始 */
  path_startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  /** 当前页 */
  currentPage: Scalars['Int']['output'];
  edges: Array<ArticleEdge>;
  pageInfo: PageInfo;
  /** 每页显示条数 */
  pageSize: Scalars['Int']['output'];
  /** 总数据条数 */
  totalCount: Scalars['Int']['output'];
  /** 总页数 */
  totalPage: Scalars['Int']['output'];
};

/** 文章内容 */
export type ArticleContent = {
  id: Scalars['ID']['output'];
};

export type ArticleCreateInput = {
  /** 授予权限 */
  access?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** 附件 */
  attachments?: InputMaybe<Array<InputMaybe<Scalars['File']['input']>>>;
  /** 作者 */
  authors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** 文章正文 */
  body?: InputMaybe<Scalars['JSON']['input']>;
  /** 文章栏目 */
  category?: InputMaybe<Scalars['ID']['input']>;
  /** 功能特征 <br/> 置顶 / 精华 */
  features?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** 文章封面 */
  image?: InputMaybe<Scalars['File']['input']>;
  /** 附加信息 */
  metafields?: InputMaybe<Array<InputMaybe<ArticleMetafieldInput>>>;
  /** 发布日期 */
  publishedAt?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** 状态 */
  status?: InputMaybe<ArticleStatus>;
  /** 摘要 */
  summary?: InputMaybe<Scalars['String']['input']>;
  /** 文章标签 */
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** 文章标题 */
  title?: InputMaybe<Scalars['String']['input']>;
  /** 有效期限 true 永久 false 短期 */
  validity?: InputMaybe<Scalars['Boolean']['input']>;
  /** 有效期限 结束时间 */
  validityEndDate?: InputMaybe<Scalars['Date']['input']>;
  /** 有效期限 开始时间 */
  validityStartDate?: InputMaybe<Scalars['Date']['input']>;
};

export type ArticleEdge = {
  __typename?: 'ArticleEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node: Article;
};

export type ArticleFeature = {
  __typename?: 'ArticleFeature';
  /** 编码 */
  code?: Maybe<Scalars['String']['output']>;
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 是否启用流程 */
  needReview?: Maybe<Scalars['Boolean']['output']>;
};

export type ArticleFeatureCreateInput = {
  /** 编码 */
  code?: InputMaybe<Scalars['String']['input']>;
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 名称 */
  name: Scalars['String']['input'];
};

export type ArticleFeatureUpdateInput = {
  /** 编码 */
  code?: InputMaybe<Scalars['String']['input']>;
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 名称 */
  name: Scalars['String']['input'];
};

export type ArticleFeatureWhereInput = {
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleMetaField = {
  __typename?: 'ArticleMetaField';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  namespace?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ArticleMetafieldInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
  type: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export enum ArticleStarType {
  /** 点击数 */
  Clicks = 'clicks',
  /** 收藏 */
  Favorites = 'favorites',
  /** 点赞数 */
  Likes = 'likes',
  /** 阅读数 */
  Reads = 'reads'
}

export enum ArticleStatus {
  /** 草稿 */
  Draft = 'DRAFT',
  /** 失效 */
  Inactive = 'INACTIVE',
  /** 已发布 */
  Published = 'PUBLISHED',
  /** 计划 */
  Scheduled = 'SCHEDULED'
}

/** 文章存储模版 */
export type ArticleStoreTemplate = {
  __typename?: 'ArticleStoreTemplate';
  /** 对应的组件 */
  components: ArticleStoreTemplateComponents;
  /** 内容类型 */
  contentType?: Maybe<ContentType>;
  id: Scalars['ID']['output'];
  /** 排序码 */
  index?: Maybe<Scalars['Int']['output']>;
  /** 名称 */
  name: Scalars['String']['output'];
};

export type ArticleStoreTemplateComponents = {
  __typename?: 'ArticleStoreTemplateComponents';
  /** 新增页组件 */
  added?: Maybe<Scalars['String']['output']>;
  /** 编辑页组件 */
  edit?: Maybe<Scalars['String']['output']>;
  /** 列表页组件 */
  list?: Maybe<Scalars['String']['output']>;
  /** 详情页组件 */
  view?: Maybe<Scalars['String']['output']>;
};

/** 支持层级，亦可栏目使用 */
export type ArticleTag = {
  __typename?: 'ArticleTag';
  createdAt?: Maybe<Scalars['Date']['output']>;
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** 排序 */
  index?: Maybe<Scalars['Int']['output']>;
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 全路径 */
  path?: Maybe<Scalars['String']['output']>;
  /** 短标识 */
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type ArticleTagCreateInput = {
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 标签图 */
  image?: InputMaybe<Scalars['File']['input']>;
  /** 排序 */
  index?: InputMaybe<Scalars['Int']['input']>;
  /** 标签名称 */
  name: Scalars['String']['input'];
  /** 唯一编码 */
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleTagUpdateInput = {
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 标签图 */
  image?: InputMaybe<Scalars['File']['input']>;
  /** 排序 */
  index?: InputMaybe<Scalars['Int']['input']>;
  /** 标签名称 */
  name: Scalars['String']['input'];
  /** 唯一编码 */
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleUpdateInput = {
  /** 附件 */
  attachments?: InputMaybe<Array<InputMaybe<Scalars['File']['input']>>>;
  /** 作者 */
  authors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** 文章正文 <br/> 实际内容与 ArticleStoreTemplate 相关 */
  body?: InputMaybe<Scalars['JSON']['input']>;
  /** 文章栏目 */
  category?: InputMaybe<Scalars['ID']['input']>;
  /** 特征 */
  features?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** 文章封面 */
  image?: InputMaybe<Scalars['File']['input']>;
  /** 附加信息 */
  metafields?: InputMaybe<Array<InputMaybe<ArticleMetafieldInput>>>;
  /** 发布日期 */
  publishedAt?: InputMaybe<Scalars['String']['input']>;
  /** 文章URL 必须唯一 */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** 文章发布状态 */
  status?: InputMaybe<ArticleStatus>;
  /** 摘要 */
  summary?: InputMaybe<Scalars['String']['input']>;
  /** 文章标签 */
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** 文章标题 */
  title?: InputMaybe<Scalars['String']['input']>;
  /** 有效期限 true 永久 false 短期 */
  validity?: InputMaybe<Scalars['Boolean']['input']>;
  /** 有效期限 结束时间 */
  validityEndDate?: InputMaybe<Scalars['Date']['input']>;
  /** 有效期限 开始时间 */
  validityStartDate?: InputMaybe<Scalars['Date']['input']>;
};

export type ArticleWhereInput = {
  /** 复杂查询支持 */
  and?: InputMaybe<Array<InputMaybe<ArticleWhereInput>>>;
  /** 栏目为空 (没有栏目的文章) */
  categories_isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** 频道 */
  category?: InputMaybe<AcceptArticleCategory>;
  /** 多个栏目 */
  channel_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** 创建人 ID */
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  /** 关键字 */
  keyword?: InputMaybe<Scalars['String']['input']>;
  /** 复杂查询支持 */
  or?: InputMaybe<Array<InputMaybe<ArticleWhereInput>>>;
  /** 发布时间 */
  publishedAt?: InputMaybe<Scalars['String']['input']>;
  /** 发布状态 */
  status?: InputMaybe<ArticleStatus>;
  /** 发布状态 */
  status_in?: InputMaybe<Array<InputMaybe<ArticleStatus>>>;
  /** 标签 */
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** 有效期限 true 过滤以过有效期限的文章 */
  validity?: InputMaybe<Scalars['Boolean']['input']>;
  /** 用户id */
  viewer?: InputMaybe<Scalars['ID']['input']>;
};

/** 资产状态 */
export type AssetStatus = {
  __typename?: 'AssetStatus';
  /** 状态码 */
  code: Scalars['String']['output'];
  /** 状态ID */
  id: Scalars['ID']['output'];
  /** 状态名称 */
  name: Scalars['String']['output'];
};

export type AuthorizedService = {
  __typename?: 'AuthorizedService';
  id: Scalars['ID']['output'];
};

export type Banner = {
  __typename?: 'Banner';
  /** 媒介 */
  background?: Maybe<Scalars['File']['output']>;
  /** 媒体类型 */
  backgroundType?: Maybe<BannerBackgroundType>;
  /** 跳转按钮文本 */
  buttonText?: Maybe<Scalars['String']['output']>;
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  /** 是否启用 */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 副标题 */
  subtitle?: Maybe<Scalars['String']['output']>;
  /** 标题 */
  title?: Maybe<Scalars['String']['output']>;
  /** 跳转地址 */
  url?: Maybe<Scalars['String']['output']>;
};


export type BannerBackgroundArgs = {
  format?: InputMaybe<FileFormat>;
};

export enum BannerBackgroundType {
  /** 图片 */
  Image = 'IMAGE',
  /** 视频 */
  Video = 'VIDEO'
}

export type BannerCreateInput = {
  /** 媒介 */
  background?: InputMaybe<Scalars['File']['input']>;
  /** 媒体类型 */
  backgroundType?: InputMaybe<BannerBackgroundType>;
  /** 跳转按钮文本 */
  buttonText?: InputMaybe<Scalars['String']['input']>;
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 是否启用 */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 副标题 */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** 标题 */
  title?: InputMaybe<Scalars['String']['input']>;
  /** 跳转地址 */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type BannerUpdateInput = {
  /** 媒介 */
  background?: InputMaybe<Scalars['File']['input']>;
  /** 媒体类型 */
  backgroundType?: InputMaybe<BannerBackgroundType>;
  /** 跳转按钮文本 */
  buttonText?: InputMaybe<Scalars['String']['input']>;
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 是否启用 */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 副标题 */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** 标题 */
  title?: InputMaybe<Scalars['String']['input']>;
  /** 跳转地址 */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type BannerWhereInput = {
  /** 是否启用 */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** ID 查询 */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

/** 基础的实体 */
export type BaseEntity = {
  /** 创建时间 */
  createdAt?: Maybe<Scalars['Date']['output']>;
  /** 修改时间 */
  updatedAt?: Maybe<Scalars['Date']['output']>;
};


/** 基础的实体 */
export type BaseEntityCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


/** 基础的实体 */
export type BaseEntityUpdatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

/** 品牌 */
export type Brand = {
  __typename?: 'Brand';
  /** 品牌ID */
  id: Scalars['ID']['output'];
  /** 品牌名称 */
  name?: Maybe<Scalars['String']['output']>;
};

export type Calendar = {
  __typename?: 'Calendar';
  /** 账户 */
  account: CalendarAccount;
  /** 颜色 */
  color?: Maybe<Scalars['String']['output']>;
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  /** 事件 */
  events: Array<CalendarEvent>;
  id: Scalars['ID']['output'];
  /** 排序码 */
  index?: Maybe<Scalars['Int']['output']>;
  /** 名称 */
  name: Scalars['String']['output'];
  /** 刷新设置 */
  refresh?: Maybe<CalendarSubscriptionRefresh>;
  /** 日历类型 */
  type: CalendarType;
  /** 链接 */
  url?: Maybe<Scalars['String']['output']>;
};

export type CalendarAccount = {
  __typename?: 'CalendarAccount';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  index?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  type: CalendarAccountType;
};

export enum CalendarAccountType {
  App = 'APP',
  Local = 'LOCAL',
  ThirdParty = 'THIRD_PARTY'
}

export type CalendarCreateInput = {
  account: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

/** 日历事件 */
export type CalendarEvent = {
  __typename?: 'CalendarEvent';
  /** 颜色 */
  color?: Maybe<Scalars['String']['output']>;
  /** 包含日期 */
  dates: Array<Scalars['Date']['output']>;
  /** 时间 */
  datetime: CalendarEventDatetime;
  id: Scalars['ID']['output'];
  /** 说明 */
  notes?: Maybe<Scalars['String']['output']>;
  /** 标题 */
  title?: Maybe<Scalars['String']['output']>;
};

export enum CalendarEventAlert {
  /** 日程发生时 */
  AtTimeOfEvent = 'AT_TIME_OF_EVENT',
  /** 后X天 */
  DaysAfter = 'DAYS_AFTER',
  /** 前X天 */
  DaysBefore = 'DAYS_BEFORE',
  /** 后X小时 */
  HoursAfter = 'HOURS_AFTER',
  /** 前X小时 */
  HoursBefore = 'HOURS_BEFORE',
  /** 后X分钟 */
  MinutesAfter = 'MINUTES_AFTER',
  /** 前X分钟 */
  MinutesBefore = 'MINUTES_BEFORE',
  /** 无 */
  None = 'NONE',
  /** 指定时间 */
  OnData = 'ON_DATA',
  /** 当天 */
  OnTimeOfEvent = 'ON_TIME_OF_EVENT'
}

export type CalendarEventCreateInput = {
  /** 是否为全天 */
  allDay: Scalars['Boolean']['input'];
  /** 结束时间 */
  ends: Scalars['Date']['input'];
  /** 说明 */
  notes?: InputMaybe<Scalars['String']['input']>;
  /** 提醒设置 */
  remind: CalendarEventRemind;
  /** 开始时间 */
  starts: Scalars['Date']['input'];
  /** 标题 */
  title: Scalars['String']['input'];
  /** 链接 */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CalendarEventDateStat = {
  __typename?: 'CalendarEventDateStat';
  date: Scalars['Date']['output'];
  number: Scalars['Int']['output'];
};

/** 日历事件时间 */
export type CalendarEventDatetime = {
  __typename?: 'CalendarEventDatetime';
  /** 是否为全天 */
  allDay: Scalars['Boolean']['output'];
  /** 结束时间 */
  ends: Scalars['Date']['output'];
  /** 开始时间 */
  starts: Scalars['Date']['output'];
};


/** 日历事件时间 */
export type CalendarEventDatetimeEndsArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


/** 日历事件时间 */
export type CalendarEventDatetimeStartsArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type CalendarEventRemind = {
  alert: CalendarEventAlert;
  onDate?: InputMaybe<Scalars['Date']['input']>;
  times?: InputMaybe<Scalars['Int']['input']>;
};

export type CalendarSet = {
  __typename?: 'CalendarSet';
  /** 日历集合 */
  calendars: Array<Calendar>;
  /** 默认日历 */
  defaultCalendar?: Maybe<Calendar>;
  id: Scalars['ID']['output'];
  /** 排序码 */
  index: Scalars['Int']['output'];
  /** 名称 */
  name: Scalars['String']['output'];
};

export type CalendarSetCreateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CalendarSetUpdateInput = {
  defaultCalendar?: InputMaybe<Scalars['Int']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum CalendarSubscriptionRefresh {
  /** 每5分钟 */
  Every_5Minutes = 'EVERY_5_MINUTES',
  /** 每15分钟 */
  Every_15Minutes = 'EVERY_15_MINUTES',
  /** 每天 */
  EveryDay = 'EVERY_DAY',
  /** 每小时 */
  EveryHover = 'EVERY_HOVER',
  /** 每周 */
  EveryWeek = 'EVERY_WEEK',
  /** 从不 */
  Never = 'NEVER'
}

export enum CalendarType {
  /** 集成 - 第三方或者功能集成 */
  Integration = 'INTEGRATION',
  /** 订阅 */
  Subscription = 'SUBSCRIPTION',
  /** 内置(内部) */
  Sunrise = 'SUNRISE'
}

export type CalendarUpdateInput = {
  /** 颜色 */
  color?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  index?: InputMaybe<Scalars['Int']['input']>;
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 订阅刷新设置 */
  refresh?: InputMaybe<CalendarSubscriptionRefresh>;
  /** 订阅地址 */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ClientDevice = {
  __typename?: 'ClientDevice';
  /** 浏览器 */
  browser?: Maybe<Scalars['String']['output']>;
  /** 操作系统 */
  operatingSystem?: Maybe<Scalars['String']['output']>;
  /** 设备类型 */
  type?: Maybe<DeviceType>;
  /** 原始 User-Agent 信息 */
  userAgent?: Maybe<Scalars['String']['output']>;
};

export type ClientSecret = {
  __typename?: 'ClientSecret';
  /** 创建时间 */
  createdAt: Scalars['Date']['output'];
  /** 创建人 */
  createdBy?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  /** 最后使用时间 */
  lastUseTime?: Maybe<Scalars['Date']['output']>;
  /** 密钥 */
  secret: Scalars['String']['output'];
  /** 类型 */
  type: ClientSecretType;
};

export enum ClientSecretType {
  Oauth = 'OAUTH',
  PersonalAccessToken = 'PERSONAL_ACCESS_TOKEN',
  Session = 'SESSION'
}

export type CloudDrive = {
  __typename?: 'CloudDrive';
  id: Scalars['ID']['output'];
  /** 名称 */
  name: Scalars['String']['output'];
  /** 存储空间 */
  quota: CloudDriveQuota;
  /** 回收站文件夹 */
  recycleBin: Scalars['String']['output'];
  /** 跟文件夹 */
  rootFolder: Scalars['String']['output'];
  /** 对应的存储空间 */
  space: Scalars['ID']['output'];
  /** 类型 */
  type: CloudDriveType;
};

export type CloudDriveQuota = {
  __typename?: 'CloudDriveQuota';
  /** 文件数量 */
  count: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** 总大小 */
  size: Scalars['Number']['output'];
  /** 已使用 */
  usage: Scalars['Number']['output'];
};


export type CloudDriveQuotaSizeArgs = {
  format?: InputMaybe<Scalars['Boolean']['input']>;
};


export type CloudDriveQuotaUsageArgs = {
  format?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum CloudDriveType {
  /** 企业员工网盘 */
  Enterprise = 'ENTERPRISE',
  /** 个人网盘 */
  Personal = 'PERSONAL'
}

export type CnAsanyTestAccount = {
  __typename?: 'CnAsanyTestAccount';
  createdAt?: Maybe<Scalars['Date']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
  updatedBy?: Maybe<Scalars['Int']['output']>;
};

export type CnAsanyTestAccountConnection = {
  __typename?: 'CnAsanyTestAccountConnection';
  currentPage: Scalars['Int']['output'];
  edges: Array<CnAsanyTestAccountEdge>;
  pageSize: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
  totalPage: Scalars['Int']['output'];
};

export type CnAsanyTestAccountCreateInput = {
  /** 未配置如何输入字段 */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type CnAsanyTestAccountEdge = {
  __typename?: 'CnAsanyTestAccountEdge';
  cursor: Scalars['String']['output'];
  node: CnAsanyTestAccount;
};

export enum CnAsanyTestAccountOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CnAsanyTestAccountUpdateInput = {
  /** 未配置如何输入字段 */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type CnAsanyTestAccountWhereInput = {
  /**
   * 逻辑与.
   *
   */
  AND?: InputMaybe<Array<InputMaybe<CnAsanyTestAccountWhereInput>>>;
  /**
   * 对所有由 AND 组合的给定过滤器进行逻辑非.
   *
   */
  NOT?: InputMaybe<Array<InputMaybe<CnAsanyTestAccountWhereInput>>>;
  /**
   * 逻辑或.
   *
   */
  OR?: InputMaybe<Array<InputMaybe<CnAsanyTestAccountWhereInput>>>;
  /**
   * null
   *
   */
  id?: InputMaybe<Scalars['ID']['input']>;
  /**
   * null
   *
   */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /**
   * null
   *
   */
  id_notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type CnAsanyTestUser = {
  __typename?: 'CnAsanyTestUser';
  aaa?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  updatedBy?: Maybe<Scalars['Int']['output']>;
};

export type CnAsanyTestUserConnection = {
  __typename?: 'CnAsanyTestUserConnection';
  currentPage: Scalars['Int']['output'];
  edges: Array<CnAsanyTestUserEdge>;
  pageSize: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
  totalPage: Scalars['Int']['output'];
};

export type CnAsanyTestUserCreateInput = {
  /**
   * aaa
   *
   */
  aaa?: InputMaybe<Scalars['String']['input']>;
  /**
   * name
   *
   */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * name
   *
   */
  name1?: InputMaybe<Scalars['String']['input']>;
};

export type CnAsanyTestUserEdge = {
  __typename?: 'CnAsanyTestUserEdge';
  cursor: Scalars['String']['output'];
  node: CnAsanyTestUser;
};

export enum CnAsanyTestUserOrderBy {
  AaaAsc = 'aaa_ASC',
  AaaDesc = 'aaa_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  Name1Asc = 'name1_ASC',
  Name1Desc = 'name1_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CnAsanyTestUserUpdateInput = {
  /**
   * aaa
   *
   */
  aaa?: InputMaybe<Scalars['String']['input']>;
  /**
   * name
   *
   */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * name
   *
   */
  name1?: InputMaybe<Scalars['String']['input']>;
};

export type CnAsanyTestUserWhereInput = {
  /**
   * 逻辑与.
   *
   */
  AND?: InputMaybe<Array<InputMaybe<CnAsanyTestUserWhereInput>>>;
  /**
   * 对所有由 AND 组合的给定过滤器进行逻辑非.
   *
   */
  NOT?: InputMaybe<Array<InputMaybe<CnAsanyTestUserWhereInput>>>;
  /**
   * 逻辑或.
   *
   */
  OR?: InputMaybe<Array<InputMaybe<CnAsanyTestUserWhereInput>>>;
  /**
   * null
   *
   */
  aaa?: InputMaybe<Scalars['String']['input']>;
  /**
   * null
   *
   */
  aaa_contains?: InputMaybe<Scalars['String']['input']>;
  /**
   * null
   *
   */
  aaa_endsWith?: InputMaybe<Scalars['String']['input']>;
  /**
   * null
   *
   */
  aaa_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * null
   *
   */
  aaa_notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * null
   *
   */
  aaa_startsWith?: InputMaybe<Scalars['String']['input']>;
  /**
   * null
   *
   */
  id?: InputMaybe<Scalars['ID']['input']>;
  /**
   * null
   *
   */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /**
   * null
   *
   */
  id_notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /**
   * null
   *
   */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * null
   *
   */
  name1?: InputMaybe<Scalars['String']['input']>;
  /**
   * null
   *
   */
  name1_contains?: InputMaybe<Scalars['String']['input']>;
  /**
   * null
   *
   */
  name1_endsWith?: InputMaybe<Scalars['String']['input']>;
  /**
   * null
   *
   */
  name1_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * null
   *
   */
  name1_notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * null
   *
   */
  name1_startsWith?: InputMaybe<Scalars['String']['input']>;
  /**
   * null
   *
   */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /**
   * null
   *
   */
  name_endsWith?: InputMaybe<Scalars['String']['input']>;
  /**
   * null
   *
   */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * null
   *
   */
  name_notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * null
   *
   */
  name_startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Component = {
  __typename?: 'Component';
  /** 组件数据 */
  blocks: Array<ComponentData>;
  /** 创建日期 */
  createdAt?: Maybe<Scalars['Date']['output']>;
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** 封面 */
  image?: Maybe<Scalars['File']['output']>;
  /** 库 ID */
  libraryId: Scalars['ID']['output'];
  /** 引用名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 使用范围 */
  scope?: Maybe<ComponentScope>;
  /** 标签 */
  tags: Array<Scalars['String']['output']>;
  /** 组件模版 */
  template: Scalars['String']['output'];
  /** 显示名称 */
  title?: Maybe<Scalars['String']['output']>;
  /** 组件类型 */
  type?: Maybe<ComponentType>;
};

export type ComponentConnection = {
  __typename?: 'ComponentConnection';
  /** 当前页 */
  currentPage?: Maybe<Scalars['Int']['output']>;
  edges?: Maybe<Array<Maybe<ComponentEdge>>>;
  /** 每页显示条数 */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** 总数据条数 */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /** 总页数 */
  totalPage?: Maybe<Scalars['Int']['output']>;
};

export type ComponentCreateInput = {
  /** 配置数据 */
  blocks?: InputMaybe<Array<ComponentDataInput>>;
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 封面 */
  image?: InputMaybe<Scalars['File']['input']>;
  /** 库 ID */
  libraryId: Scalars['ID']['input'];
  /** 引用名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 标签 */
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  /** 模版 */
  template: Scalars['String']['input'];
  /** 显示名称 */
  title: Scalars['String']['input'];
  /** 类型 */
  type?: InputMaybe<ComponentType>;
};

export type ComponentData = {
  __typename?: 'ComponentData';
  key: Scalars['String']['output'];
  props: Scalars['JSON']['output'];
};

export type ComponentDataInput = {
  key?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
};

export type ComponentEdge = {
  __typename?: 'ComponentEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Component>;
};

export type ComponentLibrary = Library & {
  __typename?: 'ComponentLibrary';
  /** 图标 */
  components: Array<Component>;
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 数量 */
  total: Scalars['Int']['output'];
};

export enum ComponentScope {
  /** 通用 */
  Global = 'GLOBAL',
  /** 菜单 */
  Menu = 'MENU',
  /** 路由 */
  Route = 'ROUTE'
}

export enum ComponentType {
  Global = 'GLOBAL',
  Route = 'ROUTE'
}

export type ComponentUpdateInput = {
  /** 配置数据 */
  blocks?: InputMaybe<Array<InputMaybe<ComponentDataInput>>>;
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 封面 */
  image?: InputMaybe<Scalars['File']['input']>;
  /** 库 ID */
  libraryId?: InputMaybe<Scalars['ID']['input']>;
  /** 引用名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 标签 */
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  /** 模版 */
  template?: InputMaybe<Scalars['String']['input']>;
  /** 显示名称 */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentWhereInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Consumer = {
  __typename?: 'Consumer';
  id?: Maybe<Scalars['ID']['output']>;
};

/** 联系人 */
export type Contact = {
  __typename?: 'Contact';
  /** 地址 */
  address?: Maybe<Address>;
  /** 所有地址 */
  addresses?: Maybe<Array<Maybe<ContactAddress>>>;
  /** 联系人照片 */
  avatar?: Maybe<Scalars['String']['output']>;
  /** 公司 */
  company?: Maybe<Scalars['String']['output']>;
  /** 部门 */
  department?: Maybe<Scalars['String']['output']>;
  /** 备注 */
  description?: Maybe<Scalars['String']['output']>;
  /** 邮件 */
  email?: Maybe<Email>;
  /** 所有E-mail */
  emails?: Maybe<Array<Maybe<ContactEmail>>>;
  id: Scalars['ID']['output'];
  /** 工号 */
  jobNumber?: Maybe<Scalars['String']['output']>;
  /** 姓名 */
  name?: Maybe<Scalars['String']['output']>;
  /** 电话 */
  phone?: Maybe<Phone>;
  /** 所有电话 */
  phones?: Maybe<Array<Maybe<ContactPhone>>>;
  /** 性别 */
  sex?: Maybe<Sex>;
  /** 职位 */
  title?: Maybe<Scalars['String']['output']>;
  /** 网址 */
  website?: Maybe<Scalars['String']['output']>;
};


/** 联系人 */
export type ContactAddressArgs = {
  label?: InputMaybe<Scalars['String']['input']>;
};


/** 联系人 */
export type ContactEmailArgs = {
  label?: InputMaybe<Scalars['String']['input']>;
};


/** 联系人 */
export type ContactPhoneArgs = {
  label?: InputMaybe<Scalars['String']['input']>;
};

export type ContactAddress = {
  __typename?: 'ContactAddress';
  address?: Maybe<Address>;
  id?: Maybe<Scalars['ID']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<Scalars['Boolean']['output']>;
};

/** 通讯录 */
export type ContactBook = {
  __typename?: 'ContactBook';
  id: Scalars['ID']['output'];
  /** 名称 */
  name: Scalars['String']['output'];
  /** 分组命名空间 */
  namespaces: Array<ContactGroupNamespace>;
  /** 类型 */
  type: ContactBookType;
};

export enum ContactBookType {
  /** 普通通讯录 */
  Cardhop = 'CARDHOP',
  /** 企业通讯录 */
  Enterprise = 'ENTERPRISE'
}

export type ContactConnection = {
  __typename?: 'ContactConnection';
  /** 当前页 */
  currentPage: Scalars['Int']['output'];
  edges: Array<ContactEdge>;
  /** 分页信息 */
  pageInfo: PageInfo;
  /** 每页显示条数 */
  pageSize: Scalars['Int']['output'];
  /** 总数据条数 */
  totalCount: Scalars['Int']['output'];
  /** 总页数 */
  totalPage: Scalars['Int']['output'];
};

export type ContactEdge = {
  __typename?: 'ContactEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node: Contact;
};

export type ContactEmail = {
  __typename?: 'ContactEmail';
  email?: Maybe<Email>;
  id?: Maybe<Scalars['ID']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<Scalars['Boolean']['output']>;
};

export type ContactGroupNamespace = {
  __typename?: 'ContactGroupNamespace';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** 联系方式 */
export type ContactInformation = {
  __typename?: 'ContactInformation';
  /** 地址 */
  address?: Maybe<Address>;
  /** 邮件 */
  email?: Maybe<Scalars['String']['output']>;
  /** 姓名 */
  name?: Maybe<Scalars['String']['output']>;
  /** 电话 */
  phone?: Maybe<Scalars['String']['output']>;
};

export type ContactInformationInput = {
  /** 地址 */
  address?: InputMaybe<AddressInput>;
  /** 电子邮件 */
  email?: InputMaybe<Scalars['String']['input']>;
  /** 联系人 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 联系电话 */
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type ContactPhone = {
  __typename?: 'ContactPhone';
  id?: Maybe<Scalars['ID']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Phone>;
  primary?: Maybe<Scalars['Boolean']['output']>;
};

export type ContactWhereInput = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export enum ContentType {
  Document = 'DOCUMENT',
  Image = 'IMAGE',
  Text = 'TEXT',
  Video = 'VIDEO'
}

export type CurrentUser = {
  __typename?: 'CurrentUser';
  /** 账号 */
  account: Scalars['String']['output'];
  /** 权限 */
  authorities: Array<Scalars['String']['output']>;
  /** 头像 */
  avatar?: Maybe<Scalars['File']['output']>;
  /** 自我介绍 */
  bio?: Maybe<Scalars['String']['output']>;
  /** 生日 */
  birthday?: Maybe<Scalars['Date']['output']>;
  /** 公司 */
  company?: Maybe<Scalars['String']['output']>;
  /** 邮箱 */
  email?: Maybe<Scalars['String']['output']>;
  /** OpenIM Token */
  imToken: Scalars['String']['output'];
  /** 位置 */
  location?: Maybe<Scalars['String']['output']>;
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 在线状态 */
  onlineStatus: OnlineStatusDetails;
  /** 电话 */
  phone?: Maybe<Scalars['String']['output']>;
  /** 性别 */
  sex?: Maybe<Sex>;
  /** 称号 */
  title?: Maybe<Scalars['String']['output']>;
  /** 用户类型 */
  type: Scalars['String']['output'];
  /** 用户ID */
  uid: Scalars['String']['output'];
};


export type CurrentUserAvatarArgs = {
  format?: InputMaybe<FileFormat>;
};


export type CurrentUserImTokenArgs = {
  platform: Platform;
};


export type CurrentUserUidArgs = {
  type?: InputMaybe<UIdType>;
};

/** 客户 */
export type Customer = Owner & {
  __typename?: 'Customer';
  /** 联系方式 */
  contactInfo?: Maybe<ContactInformation>;
  /** 客户ID */
  id: Scalars['ID']['output'];
  /** 客户名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 门店列表 */
  stores: Array<CustomerStore>;
};

/** 客户分页查询 */
export type CustomerConnection = {
  __typename?: 'CustomerConnection';
  /** 当前页 */
  currentPage: Scalars['Int']['output'];
  /** 数据 */
  edges: Array<CustomerEdge>;
  /** 分页信息 */
  pageInfo: PageInfo;
  /** 每页大小 */
  pageSize: Scalars['Int']['output'];
  /** 总数 */
  totalCount: Scalars['Int']['output'];
  /** 总页数 */
  totalPage: Scalars['Int']['output'];
};

export type CustomerCreateInput = {
  /** 联系方式 */
  contactInfo?: InputMaybe<ContactInformationInput>;
  /** 客户名称 */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerEdge = {
  __typename?: 'CustomerEdge';
  cursor: Scalars['String']['output'];
  node: Customer;
};

/** 客户门店 */
export type CustomerStore = Owner & {
  __typename?: 'CustomerStore';
  /** 地址 */
  address?: Maybe<Address>;
  /** 联系人信息 */
  contactInfo?: Maybe<ContactInformation>;
  /** 客户 */
  customer: Customer;
  /** 门店ID */
  id: Scalars['ID']['output'];
  /** 门店名称 */
  name: Scalars['String']['output'];
  /** 门店编号 */
  no: Scalars['String']['output'];
  /** 开业日期 */
  openingDate?: Maybe<Scalars['Date']['output']>;
  /** 联系电话 */
  phone?: Maybe<Scalars['String']['output']>;
};


/** 客户门店 */
export type CustomerStoreOpeningDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerStoreConnection = {
  __typename?: 'CustomerStoreConnection';
  /** 当前页 */
  currentPage: Scalars['Int']['output'];
  /** 数据 */
  edges: Array<CustomerStoreEdge>;
  /** 分页信息 */
  pageInfo: PageInfo;
  /** 每页大小 */
  pageSize: Scalars['Int']['output'];
  /** 总数 */
  totalCount: Scalars['Int']['output'];
  /** 总页数 */
  totalPage: Scalars['Int']['output'];
};

export type CustomerStoreCreateInput = {
  /** 地址 */
  address?: InputMaybe<AddressInput>;
  /** 联系方式 */
  contactInfo?: InputMaybe<ContactInformationInput>;
  /** 客户ID */
  customer: Scalars['ID']['input'];
  /** 门店名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 门店编号 */
  no?: InputMaybe<Scalars['String']['input']>;
  /** 开业日期 */
  openingDate?: InputMaybe<Scalars['Date']['input']>;
  /** 联系电话 */
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerStoreEdge = {
  __typename?: 'CustomerStoreEdge';
  cursor: Scalars['String']['output'];
  node: CustomerStore;
};

export type CustomerStoreUpdateInput = {
  /** 地址 */
  address?: InputMaybe<AddressInput>;
  /** 联系方式 */
  contactInfo?: InputMaybe<ContactInformationInput>;
  /** 门店名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 门店编号 */
  no?: InputMaybe<Scalars['String']['input']>;
  /** 开业日期 */
  openingDate?: InputMaybe<Scalars['Date']['input']>;
  /** 联系电话 */
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerStoreWhereInput = {
  /** 客户ID */
  customer?: InputMaybe<Scalars['ID']['input']>;
  /** 门店名称 */
  name_contains?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerUpdateInput = {
  /** 联系方式 */
  contactInfo?: InputMaybe<ContactInformationInput>;
  /** 客户名称 */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** 客户查询条件 */
export type CustomerWhereInput = {
  /** 客户名称 */
  name_contains?: InputMaybe<Scalars['String']['input']>;
};

export type DataSet = {
  __typename?: 'DataSet';
  /** 数据集字段 */
  fields?: Maybe<Array<Maybe<DataSetField>>>;
  /** 数据集筛选 */
  filters?: Maybe<Array<Maybe<DataSetWhereInput>>>;
  /** 数据结果 */
  result?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
};

export type DataSetField = {
  __typename?: 'DataSetField';
  name?: Maybe<Scalars['String']['output']>;
};

export type DataSetWhereInput = {
  __typename?: 'DataSetWhereInput';
  name?: Maybe<Scalars['String']['output']>;
};

export type Department = {
  __typename?: 'Department';
  /** 下属部门 */
  children?: Maybe<Array<Maybe<Department>>>;
  /** 部门编码 */
  code?: Maybe<Scalars['String']['output']>;
  /** 部门描述信息 */
  description?: Maybe<Scalars['String']['output']>;
  /** 部门全称 格式如: 销售管理中心.售前支持 */
  fullName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** 排序字段 */
  index?: Maybe<Scalars['Int']['output']>;
  /** 部门包含的职务 */
  jobs?: Maybe<Array<Maybe<Job>>>;
  /** 部门名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 组织机构 */
  organization?: Maybe<Organization>;
  /** 上级机构 */
  parent?: Maybe<Department>;
  /** 所有父级部门的集合 */
  parents?: Maybe<Array<Maybe<Department>>>;
  /** 包含所有父级节点的ID */
  path?: Maybe<Scalars['String']['output']>;
  /**
   *    # 被授予的权限
   *    permissions(key: String): [Permission]
   * 获取权限对应的用户
   *    permissionToUser(key: String): User
   * 部门包含的职位
   */
  positions?: Maybe<Array<Maybe<Position>>>;
  /**
   * 人员电子签名
   * autographs: [AutographPng]
   * 部门类型
   */
  type?: Maybe<DepartmentType>;
};


export type DepartmentIdArgs = {
  type?: InputMaybe<DepartmentIdType>;
};

export enum DepartmentIdType {
  Id = 'ID'
}

/**
 * 用户签名照片部门公章
 * type AutographPng {
 *   #Id
 *   id: ID
 *   #描述信息
 *   description: String
 *   #是否启用 0禁用 1 启用
 *   enabled: Boolean
 *   #签名附件
 *   autographFile: File
 *   #签名类型
 *   type: AutographEnum
 * }
 *  部门类型
 */
export type DepartmentType = {
  __typename?: 'DepartmentType';
  /**
   * 是否支持多部门
   *    multiSectoral: Boolean
   * 最大兼岗人数
   */
  andPost?: Maybe<Scalars['Int']['output']>;
  /** 编码 */
  code?: Maybe<Scalars['String']['output']>;
  /** 部门类型ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** 部门类型名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 部门组织 */
  organization?: Maybe<Organization>;
};

export type DepartmentWhereInput = {
  /** 查询 ID 不包含 */
  id_ne?: InputMaybe<Scalars['ID']['input']>;
  /** 根据ID查询，查询该部门下所有子集 */
  id_startsWith?: InputMaybe<Scalars['ID']['input']>;
  /** 根据部门名称模糊查询 */
  name_like?: InputMaybe<Scalars['String']['input']>;
  /** parent为null时，查询所有部门，为0时查询所有一级部门，其他值时查询该部门下所有一级子集部门 */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** 根据path查询该部门下所有子集 */
  path_startsWith?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['ID']['input']>;
  /** 类型支持in */
  type_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type DetailPlatformStatus = {
  __typename?: 'DetailPlatformStatus';
  platform: Platform;
  status: OnlineStatus;
};

/** 设备 */
export type Device = TicketTarget & {
  __typename?: 'Device';
  /** 设备地址 */
  address?: Maybe<Address>;
  /** 设备品牌 */
  brand?: Maybe<Brand>;
  /** 联系人信息 */
  contactInfo?: Maybe<ContactInformation>;
  id: Scalars['ID']['output'];
  /** 设备名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 资产编号 */
  no?: Maybe<Scalars['String']['output']>;
  /** 设备所有者 */
  owner?: Maybe<Owner>;
  /** 产品 */
  product: Product;
  /** 购买日期 */
  purchaseDate?: Maybe<Scalars['Date']['output']>;
  /** 设备序列号 */
  sn?: Maybe<Scalars['String']['output']>;
  /** 设备状态 */
  status?: Maybe<AssetStatus>;
  /** 保修卡列表 */
  warrantyCards: Array<WarrantyCard>;
  /** 保修结束日期 */
  warrantyEndDate?: Maybe<Scalars['Date']['output']>;
  /** 保修开始日期 */
  warrantyStartDate?: Maybe<Scalars['Date']['output']>;
  /** 保修状态 */
  warrantyStatus?: Maybe<WarrantyStatus>;
};


/** 设备 */
export type DevicePurchaseDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


/** 设备 */
export type DeviceWarrantyEndDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


/** 设备 */
export type DeviceWarrantyStartDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type DeviceConnection = {
  __typename?: 'DeviceConnection';
  /** 当前页 */
  currentPage: Scalars['Int']['output'];
  edges: Array<DeviceEdge>;
  pageInfo: PageInfo;
  /** 每页显示条数 */
  pageSize: Scalars['Int']['output'];
  /** 总数据条数 */
  totalCount: Scalars['Int']['output'];
  /** 总页数 */
  totalPage: Scalars['Int']['output'];
};

export type DeviceCreateInput = {
  /** 设备地址 */
  address?: InputMaybe<AddressInput>;
  /** 联系人信息 */
  contactInfo?: InputMaybe<ContactInformationInput>;
  /** 设备名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 设备编号 */
  no?: InputMaybe<Scalars['String']['input']>;
  /** 设备所有者 */
  owner: DeviceOwnerInput;
  /** 产品ID */
  productId: Scalars['ID']['input'];
  /** 购买日期 */
  purchaseDate?: InputMaybe<Scalars['Date']['input']>;
  /** 设备SN */
  sn?: InputMaybe<Scalars['String']['input']>;
  /** 保修结束日期 */
  warrantyEndDate?: InputMaybe<Scalars['Date']['input']>;
  /** 保修政策ID */
  warrantyPolicyId: Scalars['ID']['input'];
  /** 保修开始日期 */
  warrantyStartDate?: InputMaybe<Scalars['Date']['input']>;
};

export type DeviceEdge = {
  __typename?: 'DeviceEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node: Device;
};

/** 设备所有者 */
export type DeviceOwnerInput = {
  id: Scalars['ID']['input'];
  /** 所有者名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 所有者类型 */
  type: DeviceOwnerType;
};

export enum DeviceOwnerType {
  /** 客户 */
  Customer = 'CUSTOMER',
  /** 门店 */
  CustomerStore = 'CUSTOMER_STORE'
}

export enum DeviceType {
  Computer = 'COMPUTER',
  Dmr = 'DMR',
  GameConsole = 'GAME_CONSOLE',
  Mobile = 'MOBILE',
  Tablet = 'TABLET',
  Unknown = 'UNKNOWN',
  Wearable = 'WEARABLE'
}

export type DeviceUpdateInput = {
  /** 设备地址 */
  address?: InputMaybe<AddressInput>;
  /** 联系人信息 */
  contactInfo?: InputMaybe<ContactInformationInput>;
  /** 设备名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 设备编号 */
  no?: InputMaybe<Scalars['String']['input']>;
  /** 设备所有者 */
  owner?: InputMaybe<DeviceOwnerInput>;
  /** 购买日期 */
  purchaseDate?: InputMaybe<Scalars['Date']['input']>;
  /** 设备SN */
  sn?: InputMaybe<Scalars['String']['input']>;
  /** 保修结束日期 */
  warrantyEndDate?: InputMaybe<Scalars['Date']['input']>;
  /** 保修开始日期 */
  warrantyStartDate?: InputMaybe<Scalars['Date']['input']>;
};

export type DeviceWhereInput = {
  name_contains?: InputMaybe<Scalars['String']['input']>;
};

/** 数据字典 */
export type Dict = {
  __typename?: 'Dict';
  /** 下级数据字典 */
  children: Array<Dict>;
  /** 代码 */
  code: Scalars['String']['output'];
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** 顺序 */
  index: Scalars['Int']['output'];
  /** 名称 */
  name: Scalars['String']['output'];
  /** 上级数据字典 */
  parent?: Maybe<Dict>;
  /** 所有父级 */
  parents: Array<Dict>;
  /** 路径 */
  path: Scalars['String']['output'];
  /** 配置类型 */
  type: Scalars['String']['output'];
};

export type DictConnection = {
  __typename?: 'DictConnection';
  /** 当前页 */
  currentPage?: Maybe<Scalars['Int']['output']>;
  edges?: Maybe<Array<Maybe<DictEdge>>>;
  pageInfo?: Maybe<PageInfo>;
  /** 每页显示条数 */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** 总数据条数 */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /** 总页数 */
  totalPage?: Maybe<Scalars['Int']['output']>;
};

export type DictEdge = {
  __typename?: 'DictEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Dict>;
};

/** 数据字典类型 */
export type DictType = {
  __typename?: 'DictType';
  /** 下级书籍字典分类 */
  children?: Maybe<Array<Maybe<DictType>>>;
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  /** 数据字典 */
  dicts?: Maybe<Array<Maybe<Dict>>>;
  /** 代码 */
  id?: Maybe<Scalars['ID']['output']>;
  /** 顺序 */
  index?: Maybe<Scalars['Int']['output']>;
  /** 层级 */
  level?: Maybe<Scalars['Int']['output']>;
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 上级数据字典分类 */
  parent?: Maybe<DictType>;
  /** 路径 */
  path?: Maybe<Scalars['String']['output']>;
};

/** 字典过滤器 */
export type DictWhereInput = {
  /** 编码 */
  code?: InputMaybe<Scalars['String']['input']>;
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 层级 */
  level?: InputMaybe<Scalars['Int']['input']>;
  /** 层级 大于 */
  level_gt?: InputMaybe<Scalars['Int']['input']>;
  /** 层级 大于等于 */
  level_gte?: InputMaybe<Scalars['Int']['input']>;
  /** 层级 小于 */
  level_lt?: InputMaybe<Scalars['Int']['input']>;
  /** 层级 小于等于 */
  level_lte?: InputMaybe<Scalars['Int']['input']>;
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 上级 ID */
  parent?: InputMaybe<Scalars['String']['input']>;
  /** 用于树行数据的查询 */
  path_startsWith?: InputMaybe<Scalars['String']['input']>;
  /** 类型 */
  type?: InputMaybe<Scalars['String']['input']>;
  /** 类型路径匹配 用于查询某一大类下的所有数据 */
  typePath_startsWith?: InputMaybe<Scalars['String']['input']>;
  /** 类型 in */
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DocumentContent = ArticleContent & {
  __typename?: 'DocumentContent';
  /** 文件描述 */
  description?: Maybe<Scalars['String']['output']>;
  /** 文件 */
  document?: Maybe<Scalars['File']['output']>;
  id: Scalars['ID']['output'];
  /** 文件大小 */
  size?: Maybe<Scalars['Number']['output']>;
  /** 文件标题 */
  title?: Maybe<Scalars['String']['output']>;
  /** 文档类型 */
  type?: Maybe<DocumentType>;
  /** 文件地址 */
  url?: Maybe<Scalars['String']['output']>;
};


export type DocumentContentSizeArgs = {
  format?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum DocumentType {
  Docx = 'DOCX',
  Other = 'OTHER',
  Pdf = 'PDF',
  Pptx = 'PPTX',
  Txt = 'TXT',
  Xlsx = 'XLSX'
}

export type Email = {
  __typename?: 'Email';
  address?: Maybe<Scalars['String']['output']>;
  status?: Maybe<EmailStatus>;
};

export enum EmailStatus {
  Unverified = 'UNVERIFIED',
  Verified = 'VERIFIED'
}

/** 组织•员工 */
export type Employee = {
  __typename?: 'Employee';
  /** 通过 Label 获取地址 */
  address?: Maybe<Address>;
  /** 全部地址 */
  addresses?: Maybe<Array<Maybe<EmployeeAddress>>>;
  /** 头像 */
  avatar?: Maybe<Scalars['File']['output']>;
  /** 生日 */
  birthday?: Maybe<Scalars['String']['output']>;
  /** 所属部门 */
  departments?: Maybe<Array<Maybe<Department>>>;
  /** 通过 Label 获取手机 */
  email?: Maybe<Email>;
  /** 全部邮箱 */
  emails?: Maybe<Array<Maybe<EmployeeEmail>>>;
  id?: Maybe<Scalars['ID']['output']>;
  /** 工号 */
  jobNumber?: Maybe<Scalars['String']['output']>;
  links?: Maybe<Array<Maybe<EmployeeLink>>>;
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 通过 Label 获取手机 */
  phone?: Maybe<Phone>;
  /** 全部电话 */
  phones?: Maybe<Array<Maybe<EmployeePhone>>>;
  /** 员工的职位 */
  positions?: Maybe<Array<Maybe<Position>>>;
  /** 主部门 */
  primaryDepartment?: Maybe<Department>;
  /** 主职位 */
  primaryPosition?: Maybe<Position>;
  /** 性别 */
  sex?: Maybe<Sex>;
  /** 状态 */
  status?: Maybe<OrganizationEmployeeStatus>;
  /** 登录信息 */
  user?: Maybe<User>;
};


/** 组织•员工 */
export type EmployeeAddressArgs = {
  label?: InputMaybe<Scalars['String']['input']>;
};


/** 组织•员工 */
export type EmployeeDepartmentsArgs = {
  organization?: InputMaybe<Scalars['ID']['input']>;
};


/** 组织•员工 */
export type EmployeeEmailArgs = {
  label?: InputMaybe<Scalars['String']['input']>;
};


/** 组织•员工 */
export type EmployeeIdArgs = {
  type?: InputMaybe<EmployeeIdType>;
};


/** 组织•员工 */
export type EmployeePhoneArgs = {
  label?: InputMaybe<Scalars['String']['input']>;
};


/** 组织•员工 */
export type EmployeePositionsArgs = {
  departmentId?: InputMaybe<Scalars['ID']['input']>;
  organization?: InputMaybe<Scalars['ID']['input']>;
};

/**
 * enum AutographEnum {
 *   #人员签名
 *   employee
 *   #部门公章
 *   department
 * }
 */
export type EmployeeAddress = {
  __typename?: 'EmployeeAddress';
  address?: Maybe<Address>;
  id?: Maybe<Scalars['ID']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<Scalars['Boolean']['output']>;
};

export type EmployeeEmail = {
  __typename?: 'EmployeeEmail';
  email?: Maybe<Email>;
  id?: Maybe<Scalars['ID']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<Scalars['Boolean']['output']>;
};

export enum EmployeeIdType {
  /** 员工 ID */
  Id = 'ID',
  /** 员工工号 */
  JobNumber = 'JOB_NUMBER'
}

export type EmployeeLink = {
  __typename?: 'EmployeeLink';
  employee?: Maybe<Employee>;
  linkId?: Maybe<Scalars['String']['output']>;
};

export type EmployeePhone = {
  __typename?: 'EmployeePhone';
  id?: Maybe<Scalars['ID']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Phone>;
  primary?: Maybe<Scalars['Boolean']['output']>;
};

export enum EndpointIdType {
  Code = 'code',
  Id = 'id'
}

export type FileChecksum = {
  __typename?: 'FileChecksum';
  id: Scalars['ID']['output'];
};

/** 文件自定在格式 */
export enum FileFormat {
  /** 仅支持图片 */
  Base64 = 'base64',
  /** 只返回 ID */
  Id = 'id',
  /** 只返回 PATH */
  Path = 'path',
  /** 自动添加上域名 */
  Url = 'url'
}

export type FileObject = {
  __typename?: 'FileObject';
  /** 创建时间 */
  createdAt?: Maybe<Scalars['Date']['output']>;
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  /** 文件 ETag */
  etag?: Maybe<Scalars['String']['output']>;
  /** 文件扩展名 */
  extension?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** 是否是文件夹 */
  isDirectory: Scalars['Boolean']['output'];
  /** 是否为跟目录 */
  isRootFolder: Scalars['Boolean']['output'];
  /** 更新时间 */
  lastModified?: Maybe<Scalars['Date']['output']>;
  /** 文件 MIME 类型 */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** 文件名 */
  name: Scalars['String']['output'];
  /** 所属文件夹 */
  parentFolder?: Maybe<FileObject>;
  /** 所有父级 */
  parents?: Maybe<Array<FileObject>>;
  /** 路径 */
  path: Scalars['String']['output'];
  /** 文件大小 单位：bytes */
  size?: Maybe<Scalars['Number']['output']>;
  /** 已加星标 */
  starred?: Maybe<Scalars['Boolean']['output']>;
};


export type FileObjectCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type FileObjectLastModifiedArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type FileObjectSizeArgs = {
  format?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FileObjectConnection = {
  __typename?: 'FileObjectConnection';
  /** 当前页 */
  currentPage: Scalars['Int']['output'];
  edges: Array<FileObjectEdge>;
  pageInfo: PageInfo;
  /** 每页显示条数 */
  pageSize: Scalars['Int']['output'];
  /** 总数据条数 */
  totalCount: Scalars['Int']['output'];
  /** 总页数 */
  totalPage: Scalars['Int']['output'];
};

export type FileObjectEdge = {
  __typename?: 'FileObjectEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node: FileObject;
};

export type FileWhereInput = {
  /** AND 子句 */
  AND?: InputMaybe<Array<InputMaybe<FileWhereInput>>>;
  /** NOT 子句 */
  NOT?: InputMaybe<Array<InputMaybe<FileWhereInput>>>;
  /** OR 子句 */
  OR?: InputMaybe<Array<InputMaybe<FileWhereInput>>>;
  /** 文件扩展名 */
  extension?: InputMaybe<Scalars['String']['input']>;
  /** 文件扩展名 */
  extension_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** 文件扩展名 */
  extension_notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** 所属目录 */
  folder?: InputMaybe<AcceptFolder>;
  /** 是否为目录 */
  isDirectory?: InputMaybe<Scalars['Boolean']['input']>;
  /** 媒体类型 */
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** 媒体类型 */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** 媒体类型 notIn */
  mimeType_notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** 媒体类型 not like start */
  mimeType_notStartsWith?: InputMaybe<Scalars['String']['input']>;
  /** 媒体类型 匹配开始 */
  mimeType_startsWith?: InputMaybe<Scalars['String']['input']>;
  /** 路径 匹配开始 */
  path_startsWith?: InputMaybe<Scalars['String']['input']>;
  /** 加星标 */
  starred?: InputMaybe<Scalars['Boolean']['input']>;
  /** 已回收 */
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Geocode = {
  __typename?: 'Geocode';
  adcode?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  citycode?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  formatted_address?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
};

export type Geolocation = {
  __typename?: 'Geolocation';
  /** 纬度 */
  latitude: Scalars['Float']['output'];
  /** 经度 */
  longitude: Scalars['Float']['output'];
};

export type GeolocationInput = {
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
};

/** 被授权者类型 */
export enum GranteeType {
  /** 用户组 */
  Group = 'GROUP',
  /** 角色 */
  Role = 'ROLE',
  /** 用户 */
  User = 'USER'
}

export type GraphQlSchema = {
  __typename?: 'GraphQLSchema';
  endpoints?: Maybe<Array<Maybe<ModelField>>>;
  groups?: Maybe<Array<Maybe<ModelGroup>>>;
  id?: Maybe<Scalars['ID']['output']>;
  mutations?: Maybe<Array<Maybe<ModelField>>>;
  name?: Maybe<Scalars['String']['output']>;
  queries?: Maybe<Array<Maybe<ModelField>>>;
  types?: Maybe<Array<Maybe<Model>>>;
  ungrouped?: Maybe<Array<Maybe<ModelGroupItemResource>>>;
};

/** 组 */
export type Group = {
  __typename?: 'Group';
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  /** 显示名称 */
  displayName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** 成员 */
  members: Array<GroupMember>;
  /** 名称 */
  name: Scalars['String']['output'];
};

/** 组成员 */
export type GroupMember = {
  __typename?: 'GroupMember';
  id: Scalars['ID']['output'];
  /** 被授权者类型 */
  type?: Maybe<GranteeType>;
  /** 被授权者ID */
  value?: Maybe<Scalars['String']['output']>;
};

export type Icon = {
  __typename?: 'Icon';
  content?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** 库 ID */
  libraryId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  unicode?: Maybe<Scalars['String']['output']>;
};

export type IconCreateInput = {
  /** 正文 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 库 ID */
  libraryId: Scalars['ID']['input'];
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 标签 */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** 编码 */
  unicode?: InputMaybe<Scalars['String']['input']>;
};

export type IconInput = {
  /** 正文 */
  content: Scalars['String']['input'];
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 标签 */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** 编码 */
  unicode?: InputMaybe<Scalars['String']['input']>;
};

export type IconLibrary = Library & {
  __typename?: 'IconLibrary';
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  /** 图标 */
  icons: Array<Icon>;
  id: Scalars['ID']['output'];
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 数量 */
  total: Scalars['Int']['output'];
};

export type IconLibraryWhereInput = {
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type IconUpdateInput = {
  /** 正文 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 库 ID */
  libraryId: Scalars['ID']['input'];
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 标签 */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** 编码 */
  unicode?: InputMaybe<Scalars['String']['input']>;
};

export type IconWhereInput = {
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  library?: InputMaybe<Scalars['ID']['input']>;
};

export type ImageContent = ArticleContent & {
  __typename?: 'ImageContent';
  id: Scalars['ID']['output'];
  /** 图片集 */
  images: Array<ImageContentItem>;
};

export type ImageContentItem = {
  __typename?: 'ImageContentItem';
  /** 图片描述 */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** 本地图片对象 */
  image?: Maybe<Scalars['File']['output']>;
  /** 图片标题 */
  title?: Maybe<Scalars['String']['output']>;
  /** 图片 */
  url?: Maybe<Scalars['String']['output']>;
};

export type IpResult = {
  __typename?: 'IpResult';
  adcode?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  rectangle?: Maybe<Scalars['String']['output']>;
};

/** 任务主表 */
export type Issue = {
  __typename?: 'Issue';
  /** 经办人 */
  assignee?: Maybe<ProjectMember>;
  /** 附件 */
  attachments: Array<Scalars['File']['output']>;
  /** 注释 */
  comments: Array<IssueComment>;
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  /** 截止时间 */
  dueDate?: Maybe<Scalars['Date']['output']>;
  /** ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** 概要 */
  name?: Maybe<Scalars['String']['output']>;
  /** 优先级 */
  priority?: Maybe<IssuePriority>;
  /** 进度 */
  progress?: Maybe<Scalars['Int']['output']>;
  /** 项目 */
  project: Project;
  /** 发起人 */
  reporter?: Maybe<ProjectMember>;
  /** 解决结果 */
  resolution?: Maybe<IssueResolution>;
  /** 状态 */
  status?: Maybe<IssueStatus>;
  /** 时间追踪 */
  timeTrack?: Maybe<IssueTimeTrack>;
  /** 类型 */
  type?: Maybe<IssueType>;
  /** 日志列表 */
  worklogs: Array<IssueWorklog>;
};


/** 任务主表 */
export type IssueDueDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

/** 任务注释 */
export type IssueComment = {
  __typename?: 'IssueComment';
  /** 附件 */
  attachments?: Maybe<Array<Maybe<Scalars['File']['output']>>>;
  /** 注释内容 */
  content?: Maybe<Scalars['String']['output']>;
  /** 注释时间 */
  contentDate?: Maybe<Scalars['Date']['output']>;
  /** ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** 任务id */
  issue?: Maybe<Issue>;
};


/** 任务注释 */
export type IssueCommentContentDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

/** 分页查询任务 */
export type IssueConnection = {
  __typename?: 'IssueConnection';
  /** 当前页 */
  currentPage?: Maybe<Scalars['Int']['output']>;
  edges?: Maybe<Array<Maybe<IssueEdge>>>;
  pageInfo?: Maybe<PageInfo>;
  /** 每页显示条数 */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** 总数据条数 */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /** 总页数 */
  totalPage?: Maybe<Scalars['Int']['output']>;
};

/** 任务新增对象 */
export type IssueCreateInput = {
  /** 附件 */
  attachments?: InputMaybe<Array<InputMaybe<Scalars['File']['input']>>>;
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 截止时间 */
  dueDate?: InputMaybe<Scalars['Date']['input']>;
  /** 概要 */
  name: Scalars['String']['input'];
  /** 任务优先级 */
  priority: Scalars['ID']['input'];
  /** 项目ID */
  project: Scalars['ID']['input'];
  /** 发起人/报告人 */
  reporter: Scalars['ID']['input'];
  /** 问题类型 */
  type: Scalars['ID']['input'];
};

/** 分页查询任务 */
export type IssueEdge = {
  __typename?: 'IssueEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Issue>;
};

/** 任务优先级 */
export type IssuePriority = {
  __typename?: 'IssuePriority';
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  /** 图标 */
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** 排序 */
  index?: Maybe<Scalars['Int']['output']>;
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
};

/** 解决结果 */
export type IssueResolution = {
  __typename?: 'IssueResolution';
  /** 解决结果描述 */
  description?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['ID']['output'];
  /** 排序 */
  index?: Maybe<Scalars['Int']['output']>;
  /** 解决结果名称 */
  name?: Maybe<Scalars['String']['output']>;
};

/** 状态 */
export type IssueStatus = {
  __typename?: 'IssueStatus';
  /** 阶段 */
  category?: Maybe<IssueStatusCategory>;
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  /** 主键 */
  id: Scalars['ID']['output'];
  /** 排序 */
  index?: Maybe<Scalars['Int']['output']>;
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
};

export enum IssueStatusCategory {
  Done = 'DONE',
  InProgress = 'IN_PROGRESS',
  Todo = 'TODO'
}

/**
 *  问题对应的操作
 * type IssueOperation {
 *     # 操作 ID
 *     id: ID
 *     # 操作名称
 *     name: String
 *     # 该操作是否有某个权限
 *     grants: Boolean
 *     # 操作对应的界面
 *     screen: IssueScreen
 * }
 */
export type IssueTimeTrack = {
  __typename?: 'IssueTimeTrack';
  /** 预计时长 */
  estimated?: Maybe<Scalars['Int']['output']>;
  /** 记录时长 */
  logged?: Maybe<Scalars['Int']['output']>;
  /** 剩余时长 */
  remaining?: Maybe<Scalars['Int']['output']>;
};

/** 任务类型 */
export type IssueType = {
  __typename?: 'IssueType';
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  /** 主键 */
  id?: Maybe<Scalars['ID']['output']>;
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
};

/** 任务更新参数 */
export type IssueUpdateInput = {
  /** 经办人 */
  assignee?: InputMaybe<Scalars['ID']['input']>;
  /** 附件 */
  attachments?: InputMaybe<Array<InputMaybe<Scalars['File']['input']>>>;
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 任务优先级 */
  priority?: InputMaybe<Scalars['ID']['input']>;
  /** 进度 */
  progress?: InputMaybe<Scalars['Int']['input']>;
  /** 项目id(预留) */
  project?: InputMaybe<Scalars['ID']['input']>;
  /** 发起人 */
  reporter?: InputMaybe<Scalars['ID']['input']>;
  /** 概要 */
  summary?: InputMaybe<Scalars['String']['input']>;
  /** 问题类型 */
  type?: InputMaybe<Scalars['ID']['input']>;
};

/** 任务条件筛选 */
export type IssueWhereInput = {
  /** 描述概要模糊 */
  descriptionOrSummary_contains?: InputMaybe<Scalars['String']['input']>;
  /** 经办人 */
  manager_eq?: InputMaybe<Scalars['String']['input']>;
  /** 任务优先级 */
  priority_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** 所属项目 */
  projectId_eq?: InputMaybe<Scalars['ID']['input']>;
  /** 发起人部门查询 */
  reporter_departments_in?: InputMaybe<Scalars['String']['input']>;
  /** 发起人查询 */
  reporter_eq?: InputMaybe<Scalars['String']['input']>;
  /** 任务状态 */
  status_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** 分配方式 */
  style_eq?: InputMaybe<Scalars['String']['input']>;
  /** 概要模糊 */
  summary_contains?: InputMaybe<Scalars['String']['input']>;
  /** 任务类型 */
  type_eq?: InputMaybe<Scalars['String']['input']>;
};

/** 任务日志 */
export type IssueWorklog = {
  __typename?: 'IssueWorklog';
  /** 附件 */
  attachments?: Maybe<Array<Maybe<Scalars['File']['output']>>>;
  /** 日志内容 */
  content?: Maybe<Scalars['String']['output']>;
  /** ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** 任务 */
  issue?: Maybe<Issue>;
  /** 填写时间 */
  logTime?: Maybe<Scalars['Date']['output']>;
};


/** 任务日志 */
export type IssueWorklogLogTimeArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

/** 职务 */
export type Job = {
  __typename?: 'Job';
  /** 职务描述信息 */
  description?: Maybe<Scalars['String']['output']>;
  /** 职务 */
  id?: Maybe<Scalars['ID']['output']>;
  /** 职务名称 */
  name?: Maybe<Scalars['String']['output']>;
};

export type LandingPage = {
  __typename?: 'LandingPage';
  createdAt: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  end?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Metadata>;
  name: Scalars['String']['output'];
  poster?: Maybe<LandingPoster>;
  start?: Maybe<Scalars['Date']['output']>;
  status: LandingPageStatus;
  stores: Array<LandingStore>;
};


export type LandingPageCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type LandingPageEndArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type LandingPageStartArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPageConnection = {
  __typename?: 'LandingPageConnection';
  /** 当前页 */
  currentPage: Scalars['Int']['output'];
  edges: Array<LandingPageEdge>;
  pageInfo?: Maybe<PageInfo>;
  /** 每页显示条数 */
  pageSize: Scalars['Int']['output'];
  /** 总数据条数 */
  totalCount: Scalars['Int']['output'];
  /** 总页数 */
  totalPage: Scalars['Int']['output'];
};

export type LandingPageCreateInput = {
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 结束时间 */
  end?: InputMaybe<Scalars['Date']['input']>;
  /** 元数据 */
  metadata?: InputMaybe<MetadataInput>;
  /** 名称 */
  name: Scalars['String']['input'];
  /** 海报 */
  poster?: InputMaybe<Scalars['ID']['input']>;
  /** 开始时间 */
  start?: InputMaybe<Scalars['Date']['input']>;
  /** 门店 */
  stores?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type LandingPageEdge = {
  __typename?: 'LandingPageEdge';
  cursor: Scalars['String']['output'];
  node: LandingPage;
};

export enum LandingPageStatus {
  /** 结束 */
  Completed = 'COMPLETED',
  /** 草稿 */
  Draft = 'DRAFT',
  /** 已发布 */
  Published = 'PUBLISHED',
  /** 中止 */
  Suspend = 'SUSPEND'
}

export type LandingPageUpdateInput = {
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 结束时间 */
  end?: InputMaybe<Scalars['Date']['input']>;
  /** 元数据 */
  metadata?: InputMaybe<MetadataInput>;
  /** 名称 */
  name: Scalars['String']['input'];
  /** 海报 */
  poster?: InputMaybe<Scalars['ID']['input']>;
  /** 开始时间 */
  start?: InputMaybe<Scalars['Date']['input']>;
  /** 门店 */
  stores?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type LandingPageWhereInput = {
  name_contains?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPoster = {
  __typename?: 'LandingPoster';
  /** 背景 */
  background?: Maybe<Scalars['File']['output']>;
  createdAt: Scalars['Date']['output'];
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** 音乐 */
  music?: Maybe<Scalars['File']['output']>;
  /** 名称 */
  name: Scalars['String']['output'];
};


export type LandingPosterCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPosterConnection = {
  __typename?: 'LandingPosterConnection';
  /** 当前页 */
  currentPage: Scalars['Int']['output'];
  edges: Array<LandingPosterEdge>;
  pageInfo?: Maybe<PageInfo>;
  /** 每页显示条数 */
  pageSize: Scalars['Int']['output'];
  /** 总数据条数 */
  totalCount: Scalars['Int']['output'];
  /** 总页数 */
  totalPage: Scalars['Int']['output'];
};

export type LandingPosterCreateInput = {
  /** 背景 */
  background?: InputMaybe<Scalars['File']['input']>;
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 音乐 */
  music?: InputMaybe<Scalars['File']['input']>;
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPosterEdge = {
  __typename?: 'LandingPosterEdge';
  cursor: Scalars['String']['output'];
  node: LandingPoster;
};

export type LandingPosterUpdateInput = {
  /** 背景 */
  background?: InputMaybe<Scalars['File']['input']>;
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 音乐 */
  music?: InputMaybe<Scalars['File']['input']>;
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPosterWhereInput = {
  name_contains?: InputMaybe<Scalars['String']['input']>;
};

export type LandingStore = {
  __typename?: 'LandingStore';
  address?: Maybe<Address>;
  code: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  leader?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Geolocation>;
  name: Scalars['String']['output'];
  qrCode?: Maybe<Scalars['File']['output']>;
};


export type LandingStoreCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type LandingStoreConnection = {
  __typename?: 'LandingStoreConnection';
  /** 当前页 */
  currentPage: Scalars['Int']['output'];
  edges: Array<LandingStoreEdge>;
  pageInfo?: Maybe<PageInfo>;
  /** 每页显示条数 */
  pageSize: Scalars['Int']['output'];
  /** 总数据条数 */
  totalCount: Scalars['Int']['output'];
  /** 总页数 */
  totalPage: Scalars['Int']['output'];
};

export type LandingStoreCreateInput = {
  address?: InputMaybe<AddressInput>;
  code: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  leader?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<GeolocationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  qrCode?: InputMaybe<Scalars['File']['input']>;
};

export type LandingStoreEdge = {
  __typename?: 'LandingStoreEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node: LandingStore;
};

export type LandingStoreUpdateInput = {
  address?: InputMaybe<AddressInput>;
  code: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  leader?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<GeolocationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  qrCode?: InputMaybe<Scalars['File']['input']>;
};

export type LandingStoreWhereInput = {
  code_contains?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
};

/** 布局设置 */
export type LayoutSettings = {
  __typename?: 'LayoutSettings';
  /** 隐藏菜单栏 */
  hideMenu?: Maybe<Scalars['Boolean']['output']>;
  /** 全屏幕模式，不展示布局框架 */
  pure?: Maybe<Scalars['Boolean']['output']>;
};

export type LayoutSettingsInput = {
  /** 隐藏菜单栏 */
  hideMenu?: InputMaybe<Scalars['Boolean']['input']>;
  /** 全屏幕模式，不展示布局框架 */
  pure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Library = {
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
};

export type LibraryCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  type: LibraryType;
};

export enum LibraryType {
  /** 组件 */
  Component = 'COMPONENT',
  /** 设计系统 */
  DesignSystem = 'DESIGN_SYSTEM',
  /** 图标 */
  Icons = 'ICONS'
}

export type LibraryUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Licence = {
  __typename?: 'Licence';
  id?: Maybe<Scalars['ID']['output']>;
  /** 许可证 Key */
  key?: Maybe<Scalars['String']['output']>;
  /** 许可证所有证 */
  ownership?: Maybe<Organization>;
  /** 许可证类型 */
  type?: Maybe<LicenceType>;
};

export enum LicenceType {
  /** 终身 */
  Lifetime = 'LIFETIME',
  /** 订阅 */
  Subscription = 'SUBSCRIPTION',
  /** 试用 */
  Trial = 'TRIAL'
}

export type LoginOptions = {
  /** 连接社交平台 */
  connected?: InputMaybe<Scalars['Boolean']['input']>;
  /** 社交平台 */
  provider?: InputMaybe<SocialProvider>;
  /** 用户社交平台 USER_ID */
  snser?: InputMaybe<Scalars['String']['input']>;
};

export enum LoginType {
  /** 密码登录 */
  Password = 'password'
}

/** 登录用户对象 */
export type LoginUser = {
  __typename?: 'LoginUser';
  /** 权限 -> authorities */
  authorities: Array<Scalars['String']['output']>;
  /** 头像 */
  avatar?: Maybe<Scalars['File']['output']>;
  /** 邮箱 */
  email?: Maybe<Scalars['String']['output']>;
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 电话 */
  phone?: Maybe<Scalars['String']['output']>;
  /** 称号 */
  title?: Maybe<Scalars['String']['output']>;
  /** 令牌 */
  token: Scalars['String']['output'];
  /** 用户类型 */
  type: Scalars['String']['output'];
  /** 用户ID */
  uid: Scalars['String']['output'];
};


/** 登录用户对象 */
export type LoginUserAvatarArgs = {
  format?: InputMaybe<FileFormat>;
};

export type MailDomain = {
  __typename?: 'MailDomain';
  name?: Maybe<Scalars['String']['output']>;
};

export type MailSettings = {
  __typename?: 'MailSettings';
  id: Scalars['ID']['output'];
  mailboxes: Array<Scalars['String']['output']>;
};

/** 账户 */
export type MailUser = {
  __typename?: 'MailUser';
  alg?: Maybe<Scalars['String']['output']>;
  domain?: Maybe<MailDomain>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  settings?: Maybe<MailSettings>;
};

export enum MailUserIdType {
  /** 用户ID */
  LoginUserId = 'LOGIN_USER_ID',
  /** 邮箱名 */
  MailUsername = 'MAIL_USERNAME'
}

/** 邮箱 */
export type Mailbox = {
  __typename?: 'Mailbox';
  /** 计数 */
  count: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** 名称 */
  name: Scalars['String']['output'];
  /** 命名空间 */
  namespace: Scalars['String']['output'];
};


/** 邮箱 */
export type MailboxCountArgs = {
  type?: InputMaybe<MailboxCountType>;
};

export enum MailboxCountType {
  /** 全部 */
  All = 'ALL',
  /** 未读 */
  Unread = 'UNREAD'
}

export enum MailboxFlagsUpdateMode {
  Add = 'ADD',
  Remove = 'REMOVE',
  Replace = 'REPLACE'
}

export type MailboxMessage = {
  __typename?: 'MailboxMessage';
  /** 回复 */
  answered?: Maybe<Scalars['Boolean']['output']>;
  /** 密送 */
  bcc: Array<Scalars['String']['output']>;
  /** 内容 */
  body?: Maybe<Scalars['String']['output']>;
  /** 抄送 */
  cc: Array<Scalars['String']['output']>;
  /** 日期 */
  date?: Maybe<Scalars['Date']['output']>;
  /** 已删除（回收站） */
  deleted?: Maybe<Scalars['Boolean']['output']>;
  /** 草稿 */
  draft?: Maybe<Scalars['Boolean']['output']>;
  /** 标记 */
  flagged?: Maybe<Scalars['Boolean']['output']>;
  /** 来自 */
  from: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** 在邮箱中的位置 */
  index?: Maybe<Scalars['Int']['output']>;
  /** 邮箱 */
  mailbox: Mailbox;
  /** 邮箱名称 */
  mailboxName: Scalars['String']['output'];
  /** 文档类型 */
  mimeType: Scalars['String']['output'];
  /**
   * 初始文件夹
   * 可能的值: 收件箱(INBOX), 已发送(Sent), 草稿(Drafts), 发件箱(OUTBOX)
   */
  originalMailboxName: Scalars['String']['output'];
  /** 最近 */
  recent?: Maybe<Scalars['Boolean']['output']>;
  /** 回邮地址 */
  replyTo: Array<Scalars['String']['output']>;
  /** 已读 */
  seen?: Maybe<Scalars['Boolean']['output']>;
  /** 发送方 */
  sender?: Maybe<Scalars['String']['output']>;
  /** 主题 */
  subject?: Maybe<Scalars['String']['output']>;
  /** 至 */
  to: Array<Scalars['String']['output']>;
};

export type MailboxMessageConnection = {
  __typename?: 'MailboxMessageConnection';
  /** 当前页 */
  currentPage: Scalars['Int']['output'];
  edges: Array<MailboxMessageEdge>;
  /** 分页信息 */
  pageInfo: PageInfo;
  /** 每页显示条数 */
  pageSize: Scalars['Int']['output'];
  /** 总数据条数 */
  totalCount: Scalars['Int']['output'];
  /** 总页数 */
  totalPage: Scalars['Int']['output'];
};

/** 邮箱信息新增对象 */
export type MailboxMessageCreateInput = {
  /** 附件 */
  attachments?: InputMaybe<Array<InputMaybe<Scalars['File']['input']>>>;
  /** 密送 */
  bcc?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** 内容 */
  body?: InputMaybe<Scalars['String']['input']>;
  /** 抄送 */
  cc?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** 文档类型 */
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** 主题 */
  subject?: InputMaybe<Scalars['String']['input']>;
  /** 收件人 */
  to?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MailboxMessageEdge = {
  __typename?: 'MailboxMessageEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node: MailboxMessage;
};

/** 邮箱信息更新对象 */
export type MailboxMessageUpdateInput = {
  /** 附件 */
  attachments?: InputMaybe<Array<InputMaybe<Scalars['File']['input']>>>;
  /** 密送 */
  bcc?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** 内容 */
  body?: InputMaybe<Scalars['String']['input']>;
  /** 抄送 */
  cc?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** 文档类型 */
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** 主题 */
  subject?: InputMaybe<Scalars['String']['input']>;
  /** 收件人 */
  to?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MailboxMessageWhereInput = {
  mailbox?: InputMaybe<Scalars['ID']['input']>;
};

export type MappingVariableInput = {
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Menu = {
  __typename?: 'Menu';
  /** 路由对应的应用 */
  application: Application;
  /** 需要提供的权限 */
  authority?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** 徽章 / 印记 */
  badge?: Maybe<Scalars['String']['output']>;
  /** 子菜单 */
  children: Array<Menu>;
  /** 组件 */
  component?: Maybe<Component>;
  /** 不在菜单中显示子菜单 */
  hideChildrenInMenu?: Maybe<Scalars['Boolean']['output']>;
  /** 在面包屑中隐藏菜单 */
  hideInBreadcrumb?: Maybe<Scalars['Boolean']['output']>;
  /** 不在菜单中显示 */
  hideInMenu?: Maybe<Scalars['Boolean']['output']>;
  /** 对应的图标 */
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** 序号 */
  index: Scalars['Int']['output'];
  /** 菜单层级 */
  level: Scalars['Int']['output'];
  /** 菜单名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 父菜单 */
  parent?: Maybe<Menu>;
  /** 树路径 */
  path?: Maybe<Scalars['String']['output']>;
  /** 路由类型 */
  type: MenuType;
};

export type MenuCreateInput = {
  /** 应用 */
  application: Scalars['ID']['input'];
  /** 权限 */
  authority?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** 组件 */
  component?: InputMaybe<Scalars['ID']['input']>;
  /** 对应的图标 */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  index?: InputMaybe<Scalars['Int']['input']>;
  /** 名称 */
  name: Scalars['String']['input'];
  /** 父菜单 */
  parentMenu?: InputMaybe<Scalars['ID']['input']>;
  /** 路径 */
  path?: InputMaybe<Scalars['String']['input']>;
  /** 菜单类型 */
  type: MenuType;
};

export enum MenuType {
  /** 菜单 */
  Menu = 'MENU',
  /** 脚本 */
  Script = 'SCRIPT',
  /** 章节 */
  Section = 'SECTION',
  /** 分隔符 */
  Separator = 'SEPARATOR',
  /** 链接地址 */
  Url = 'URL'
}

export type MenuUpdateInput = {
  /** 权限 */
  authority?: InputMaybe<Array<Scalars['String']['input']>>;
  /** 组件 */
  component?: InputMaybe<Scalars['ID']['input']>;
  /** 隐藏子菜单 */
  hideChildrenInMenu?: InputMaybe<Scalars['Boolean']['input']>;
  /** 不在面包屑中显示菜单 */
  hideInBreadcrumb?: InputMaybe<Scalars['Boolean']['input']>;
  /** 隐藏菜单 */
  hideInMenu?: InputMaybe<Scalars['Boolean']['input']>;
  /** 对应的图标 */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** 默认位置 */
  index?: InputMaybe<Scalars['Int']['input']>;
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 父路由 */
  parentMenu?: InputMaybe<Scalars['ID']['input']>;
  /** 路径 */
  path?: InputMaybe<Scalars['String']['input']>;
  /** 菜单类型 */
  type?: InputMaybe<MenuType>;
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['ID']['output'];
};

export type MessageCreateInput = {
  /** 消息接收人 */
  recipients: Array<Scalars['String']['input']>;
  /** 消息类型 */
  type: Scalars['String']['input'];
  /** 消息 URI */
  uri?: InputMaybe<Scalars['String']['input']>;
  /** 消息数据 */
  variables?: InputMaybe<Array<MessageVariableValueInput>>;
};

export type MessageDefinition = {
  __typename?: 'MessageDefinition';
  id: Scalars['ID']['output'];
  mappingVariables: Array<MessageMappingVariable>;
  name: Scalars['String']['output'];
  reminders: Array<MessageDefinitionReminder>;
  system: Scalars['Boolean']['output'];
  template: MessageTemplate;
  variables: Array<VariableDefinition>;
};

/**
 * input MessageDefinitionReminderCreateInput {
 *   mappingVariables: [MappingVariableInput!]!
 *   reminderDefinition: ReminderDefinitionCombinedInput!
 * }
 */
export type MessageDefinitionCreateInput = {
  mappingVariables: Array<MappingVariableInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  variables: Array<VariableDefinitionInput>;
};

export type MessageDefinitionReminder = {
  __typename?: 'MessageDefinitionReminder';
  id?: Maybe<Scalars['ID']['output']>;
  mappingVariables: Array<MessageMappingVariable>;
  reminderDefinition?: Maybe<ReminderDefinition>;
};

export type MessageMappingVariable = {
  __typename?: 'MessageMappingVariable';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type MessageTemplate = {
  __typename?: 'MessageTemplate';
  code?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sign?: Maybe<Scalars['String']['output']>;
  type: TemplateType;
  variables: Array<VariableDefinition>;
};

export type MessageTemplateCreateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  sign?: InputMaybe<Scalars['String']['input']>;
  type: TemplateType;
  variables: Array<VariableDefinitionInput>;
};

export type MessageType = {
  __typename?: 'MessageType';
  children: Array<MessageType>;
  description?: Maybe<Scalars['String']['output']>;
  icon: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<MessageType>;
};

export type MessageTypeCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
};

export type MessageVariableValueInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Metadata = {
  __typename?: 'Metadata';
  description?: Maybe<Scalars['String']['output']>;
  thumb?: Maybe<Scalars['File']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type MetadataInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  thumb?: InputMaybe<Scalars['File']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MinIoProperties = StorageProperties & {
  __typename?: 'MinIOProperties';
  accessKeyId?: Maybe<Scalars['String']['output']>;
  accessKeySecret?: Maybe<Scalars['String']['output']>;
  bucketName?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  useSSL?: Maybe<Scalars['Boolean']['output']>;
};

export type Model = {
  __typename?: 'Model';
  /** 编码 */
  code: Scalars['String']['output'];
  /** 创建时间 */
  createdAt: Scalars['Date']['output'];
  /** 创建人 */
  createdBy: Scalars['String']['output'];
  /** 默认视图 */
  defaultView?: Maybe<ModelView>;
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  /** 实体接口 */
  endpoints: Array<ModelEndpoint>;
  /** 字段 */
  fields: Array<ModelField>;
  id: Scalars['ID']['output'];
  /** 元数据 */
  metadata?: Maybe<ModelMetadata>;
  /** 名称 */
  name: Scalars['String']['output'];
  /** 类型 */
  type: ModelType;
  /** 修改时间 */
  updatedAt: Scalars['Date']['output'];
  /** 修改人 */
  updatedBy: Scalars['String']['output'];
  /** 实体的视图界面 */
  views: Array<ModelView>;
};


export type ModelDefaultViewArgs = {
  type?: InputMaybe<ModelViewType>;
};

export type ModelConnection = {
  __typename?: 'ModelConnection';
  /** 当前页 */
  currentPage?: Maybe<Scalars['Int']['output']>;
  edges?: Maybe<Array<Maybe<ModelEdge>>>;
  /** 每页显示条数 */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** 总数据条数 */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /** 总页数 */
  totalPage?: Maybe<Scalars['Int']['output']>;
};

export type ModelCreateInput = {
  /** 编码 */
  code?: InputMaybe<Scalars['String']['input']>;
  /** 数据库表名 */
  databaseTableName?: InputMaybe<Scalars['String']['input']>;
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 特征 */
  features?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** 字段 */
  fields?: InputMaybe<Array<InputMaybe<ModelFieldInput>>>;
  /** 所属模块 */
  module: Scalars['ID']['input'];
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ModelEdge = {
  __typename?: 'ModelEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Model>;
};

export type ModelEndpoint = {
  __typename?: 'ModelEndpoint';
  arguments: Array<ModelEndpointArgument>;
  code: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  returnType: ModelEndpointReturnType;
  type: ModelEndpointType;
};

export type ModelEndpointArgument = {
  __typename?: 'ModelEndpointArgument';
  defaultValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  required: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
};

export type ModelEndpointReturnType = {
  __typename?: 'ModelEndpointReturnType';
  id: Scalars['ID']['output'];
  list: Scalars['Boolean']['output'];
  required: Scalars['Boolean']['output'];
  type: Model;
};

export enum ModelEndpointType {
  Connection = 'CONNECTION',
  Create = 'CREATE',
  Delete = 'DELETE',
  DeleteMany = 'DELETE_MANY',
  Get = 'GET',
  List = 'LIST',
  Update = 'UPDATE'
}

export type ModelField = {
  __typename?: 'ModelField';
  /** 编码 */
  code: Scalars['String']['output'];
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** 序号 */
  index: Scalars['Int']['output'];
  /** 存储值为列表 */
  list?: Maybe<Scalars['Boolean']['output']>;
  /** 元数据 */
  metadata: ModelFieldMetadata;
  /** 所属实体 */
  model: Model;
  /** 名称 */
  name: Scalars['String']['output'];
  /** 是否主键 */
  primaryKey?: Maybe<Scalars['Boolean']['output']>;
  /** 必填 */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** 是否为系统字段 */
  system?: Maybe<Scalars['Boolean']['output']>;
  /** 类型 */
  type: ModelFiledType;
  /** 是否唯一 */
  unique?: Maybe<Scalars['Boolean']['output']>;
};

export type ModelFieldInput = {
  /** 编码 */
  code?: InputMaybe<Scalars['String']['input']>;
  /** 数据库字段名 */
  databaseColumnName?: InputMaybe<Scalars['String']['input']>;
  /** 默认值 */
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 是否为集合 */
  list?: InputMaybe<Scalars['Boolean']['input']>;
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 必填 */
  required?: InputMaybe<Scalars['Boolean']['input']>;
  /** 类型 */
  type?: InputMaybe<Scalars['String']['input']>;
  /** 是否唯一 */
  unique?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ModelFieldMetadata = {
  __typename?: 'ModelFieldMetadata';
  /** 数据库字段名 */
  databaseColumnName?: Maybe<Scalars['String']['output']>;
};

export type ModelFieldWhereInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  code_contains?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
};

export type ModelFiledType = {
  __typename?: 'ModelFiledType';
  description?: Maybe<Scalars['String']['output']>;
  family?: Maybe<ModelFiledTypeFamily>;
  graphQLType: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export enum ModelFiledTypeFamily {
  Asset = 'ASSET',
  Boolean = 'BOOLEAN',
  Color = 'COLOR',
  Date = 'DATE',
  DateTime = 'DATE_TIME',
  Enumeration = 'ENUMERATION',
  Float = 'FLOAT',
  Integer = 'INTEGER',
  Json = 'JSON',
  Location = 'LOCATION',
  Relation = 'RELATION',
  String = 'STRING',
  Text = 'TEXT'
}

export type ModelGroup = {
  __typename?: 'ModelGroup';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  items?: Maybe<Array<Maybe<ModelGroupItemResource>>>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ModelGroupItemResource = {
  __typename?: 'ModelGroupItemResource';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  resourceId?: Maybe<Scalars['Int']['output']>;
  resourceType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<ModelGroupItemResourceType>;
};

export enum ModelGroupItemResourceType {
  /** 枚举 */
  Enum = 'ENUM',
  /** 输入 */
  Input = 'Input',
  /** 模型 */
  Model = 'Model',
  /** 突变 */
  Mutation = 'Mutation',
  /** 查询 */
  Query = 'Query',
  /** 标量 */
  Scalar = 'Scalar'
}

export enum ModelIdType {
  Code = 'code',
  Id = 'id'
}

export type ModelMetadata = {
  __typename?: 'ModelMetadata';
  databaseTableName?: Maybe<Scalars['String']['output']>;
};

export enum ModelType {
  /** 实体 */
  Entity = 'ENTITY',
  /** 枚举 */
  Enum = 'ENUM',
  /** 输入对象 */
  InputObject = 'INPUT_OBJECT',
  /** 接口 */
  Interface = 'INTERFACE',
  /** 类型 */
  Object = 'OBJECT',
  /** 标量 */
  Scalar = 'SCALAR',
  /** 联合 */
  Union = 'UNION'
}

export type ModelUpdateInput = {
  /** 编码 */
  code?: InputMaybe<Scalars['String']['input']>;
  /** 数据库表名 */
  databaseTableName?: InputMaybe<Scalars['String']['input']>;
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 特征 */
  features?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ModelView = {
  __typename?: 'ModelView';
  component: Component;
  id: Scalars['ID']['output'];
  model: Model;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<ModelViewType>;
};

export enum ModelViewType {
  Custom = 'CUSTOM',
  Edit = 'EDIT',
  List = 'LIST',
  New = 'NEW'
}

export type ModelViewWhereInput = {
  defaultView?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ModelViewType>;
};

export type ModelWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ModelWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<ModelWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ModelWhereInput>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  code_contains?: InputMaybe<Scalars['String']['input']>;
  databaseTableName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ModelType>;
  type_in?: InputMaybe<Array<InputMaybe<ModelType>>>;
  type_not?: InputMaybe<ModelType>;
  type_notIn?: InputMaybe<Array<InputMaybe<ModelType>>>;
};

export type Module = {
  __typename?: 'Module';
  /** 编码 */
  code: Scalars['String']['output'];
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** 模块包含的实体 */
  models: Array<Model>;
  /** 名称 */
  name: Scalars['String']['output'];
  /** 图片 */
  picture?: Maybe<Scalars['File']['output']>;
};


export type ModulePictureArgs = {
  format?: InputMaybe<FileFormat>;
};

export type ModuleConnection = {
  __typename?: 'ModuleConnection';
  /** 当前页 */
  currentPage: Scalars['Int']['output'];
  edges: Array<ModuleEdge>;
  /** 每页显示条数 */
  pageSize: Scalars['Int']['output'];
  /** 总数据条数 */
  totalCount: Scalars['Int']['output'];
  /** 总页数 */
  totalPage: Scalars['Int']['output'];
};

export type ModuleCreateInput = {
  /** 编码 */
  code: Scalars['String']['input'];
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 名称 */
  name: Scalars['String']['input'];
};

export type ModuleEdge = {
  __typename?: 'ModuleEdge';
  cursor: Scalars['String']['output'];
  node: Module;
};

export type ModuleUpdateInput = {
  /** 编码 */
  code?: InputMaybe<Scalars['String']['input']>;
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 图片 */
  picture?: InputMaybe<Scalars['File']['input']>;
};

export type ModuleWhereInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MultipartUpload = {
  __typename?: 'MultipartUpload';
  chunkLength: Scalars['Int']['output'];
  chunkSize: Scalars['Int']['output'];
  chunks: Array<MultipartUploadChunk>;
  hash: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mimeType?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  space: Scalars['ID']['output'];
  storage: Scalars['ID']['output'];
  uploadedParts: Scalars['Int']['output'];
};

export type MultipartUploadChunk = {
  __typename?: 'MultipartUploadChunk';
  etag: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  index: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  size: Scalars['Int']['output'];
};

export type MultipartUploadInput = {
  /** 总的段数 */
  chunkLength: Scalars['Int']['input'];
  /** 每段大小 */
  chunkSize: Scalars['Int']['input'];
  /** 存储文件夹 */
  folder: Scalars['ID']['input'];
  /** 文件 hash 值 */
  hash: Scalars['String']['input'];
  /** 文件元数据 */
  metadata: MultipartUploadMetadataInput;
  /** 存储空间 */
  space: Scalars['ID']['input'];
};

export type MultipartUploadMetadataInput = {
  mimeType: Scalars['String']['input'];
  size: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** 创建日程 */
  addCalendarEvent: CalendarEvent;
  /** 添加日历到日历集 */
  addCalendarToSet: CalendarSet;
  /** 添加实体字段 */
  addModelField?: Maybe<ModelField>;
  /** 为文件添加星标 */
  addStarForFiles: Array<FileObject>;
  /** 工单分配 */
  assignTicket?: Maybe<Ticket>;
  /** 分配任务 */
  assigneeTask?: Maybe<Scalars['Boolean']['output']>;
  /** 修改密码 */
  changePassword: Scalars['Boolean']['output'];
  /** 清空 回收站 */
  clearFilesInTrash?: Maybe<Scalars['Int']['output']>;
  /** 清空 回收站 */
  clearMailboxMessagesInTrashMailbox?: Maybe<Scalars['Int']['output']>;
  /** 手动完成分段上传 */
  completeMultipartUpload: FileObject;
  /** 创建一个应用 */
  createApplication?: Maybe<Application>;
  /** 新增文章 */
  createArticle?: Maybe<Article>;
  /** 添加栏目 */
  createArticleCategory: ArticleCategory;
  /** 新增推荐位 */
  createArticleFeature?: Maybe<ArticleFeature>;
  /** 添加标签 */
  createArticleTag?: Maybe<ArticleTag>;
  /** 创建 Banner */
  createBanner?: Maybe<Banner>;
  /** 创建日历 */
  createCalendar: Calendar;
  /** 创建日历集 */
  createCalendarSet: CalendarSet;
  /**
   * 新增Account
   *
   */
  createCnAsanyTestAccount?: Maybe<CnAsanyTestAccount>;
  /**
   * 新增User
   *
   */
  createCnAsanyTestUser?: Maybe<CnAsanyTestUser>;
  /** 创建组件 */
  createComponent?: Maybe<Component>;
  /** 创建客户 */
  createCustomer?: Maybe<Customer>;
  /** 创建客户门店 */
  createCustomerStore?: Maybe<CustomerStore>;
  /** 创建设备 */
  createDevice: Device;
  /** 创建下载链接 */
  createDownloadURL?: Maybe<Scalars['String']['output']>;
  /** 新建文件夹 */
  createFolder: FileObject;
  /** 添加图标 */
  createIcon?: Maybe<Icon>;
  /** 创建任务 */
  createIssue?: Maybe<Issue>;
  /** 创建活动页 */
  createLandingPage: LandingPage;
  /** 创建海报 */
  createLandingPoster: LandingPoster;
  /** 创建门店 */
  createLandingStore: LandingStore;
  /** 添加库 */
  createLibrary?: Maybe<Library>;
  /** 创建邮箱文件夹 */
  createMailbox: Mailbox;
  /** 新增邮件(保存到草稿) */
  createMailboxMessage: MailboxMessage;
  /** 创建菜单 */
  createMenu?: Maybe<Menu>;
  /** 创建消息 */
  createMessage?: Maybe<Message>;
  /** 创建消息定义 */
  createMessageDefinition?: Maybe<MessageDefinition>;
  /** 创建消息模版 */
  createMessageTemplate?: Maybe<MessageTemplate>;
  /** 创建消息类型 */
  createMessageType?: Maybe<MessageType>;
  /** 新增实体 */
  createModel?: Maybe<Model>;
  /** 新增模块 */
  createModule?: Maybe<Module>;
  /** 创建个人访问令牌 */
  createPersonalAccessToken?: Maybe<PersonalAccessToken>;
  /** 创建个人任务 */
  createPersonalTask?: Maybe<Scalars['Boolean']['output']>;
  /** 创建产品 */
  createProduct: Product;
  createProject?: Maybe<Project>;
  /** 创建路由 */
  createRoute?: Maybe<Route>;
  /** 创建工单 */
  createTicket?: Maybe<Ticket>;
  /** 创建用户 */
  createUsers: Array<User>;
  /** 创建网站 */
  createWebsite?: Maybe<Website>;
  /** 删除应用 */
  deleteApplication?: Maybe<Scalars['Boolean']['output']>;
  /** 删除文章 */
  deleteArticle?: Maybe<Scalars['Boolean']['output']>;
  /** 删除栏目 */
  deleteArticleCategory?: Maybe<Scalars['Boolean']['output']>;
  /** 删除推荐位 */
  deleteArticleFeature?: Maybe<Scalars['Boolean']['output']>;
  /** 删除 Banner */
  deleteBanner?: Maybe<Scalars['Boolean']['output']>;
  /** 删除日历集 */
  deleteCalendar: Scalars['Boolean']['output'];
  /** 删除日历集 */
  deleteCalendarSet: Scalars['Boolean']['output'];
  /**
   * 删除Account
   *
   */
  deleteCnAsanyTestAccount?: Maybe<CnAsanyTestAccount>;
  /**
   * 删除User
   *
   */
  deleteCnAsanyTestUser?: Maybe<CnAsanyTestUser>;
  /** 删除组件 */
  deleteComponent?: Maybe<Scalars['Boolean']['output']>;
  /** 删除客户 */
  deleteCustomer?: Maybe<Customer>;
  /** 删除客户门店 */
  deleteCustomerStore?: Maybe<CustomerStore>;
  /** 删除设备 */
  deleteDevice?: Maybe<Device>;
  /** 删除文件 */
  deleteFiles: Array<FileObject>;
  /** 删除图标 */
  deleteIcon?: Maybe<Scalars['Boolean']['output']>;
  /** 删除活动页 */
  deleteLandingPage?: Maybe<Scalars['Int']['output']>;
  /** 删除海报 */
  deleteLandingPoster?: Maybe<Scalars['Int']['output']>;
  /** 删除门店 */
  deleteLandingStore?: Maybe<Scalars['Int']['output']>;
  /** 删除库 */
  deleteLibrary?: Maybe<Scalars['Boolean']['output']>;
  /** 删除邮件 */
  deleteMailboxMessage?: Maybe<Scalars['Boolean']['output']>;
  /** 批量删除 */
  deleteManyArticles?: Maybe<Scalars['Int']['output']>;
  /**
   * 批量删除Account
   *
   */
  deleteManyCnAsanyTestAccounts?: Maybe<Array<Maybe<CnAsanyTestAccount>>>;
  /**
   * 批量删除User
   *
   */
  deleteManyCnAsanyTestUsers?: Maybe<Array<Maybe<CnAsanyTestUser>>>;
  /** 批量删除模块 */
  deleteManyModules?: Maybe<Scalars['Int']['output']>;
  /** 批量删除用户 */
  deleteManyUsers: Array<User>;
  /** 删除菜单 */
  deleteMenu?: Maybe<Scalars['Boolean']['output']>;
  /** 删除实体 */
  deleteModel?: Maybe<Scalars['Boolean']['output']>;
  /** 删除模块 */
  deleteModule?: Maybe<Scalars['Boolean']['output']>;
  /** 删除组织 */
  deleteOrganization?: Maybe<Scalars['Boolean']['output']>;
  /** 删除流程模型 */
  deleteProcessModel: Scalars['Boolean']['output'];
  /** 删除产品 */
  deleteProduct?: Maybe<Product>;
  /** 删除路由 */
  deleteRoute?: Maybe<Scalars['Boolean']['output']>;
  /** 删除工单 */
  deleteTicket?: Maybe<Ticket>;
  /** 删除用户 */
  deleteUser: User;
  /** 生成短链接 */
  generateEmptyShortLinks: Array<ShortLink>;
  /** 生成短链接 */
  generateShortLink: ShortLink;
  /** 通过 yml 导入一个应用 */
  importApplication?: Maybe<Application>;
  /** 导入图标 */
  importIcons: Array<Icon>;
  /** 导入流程模型 */
  importProcessModel: ProcessModel;
  /** 初始化分段上传事件 */
  initiateMultipartUpload: MultipartUpload;
  /** 登录 */
  login: LoginUser;
  /** 退出登录 */
  logout?: Maybe<Scalars['Boolean']['output']>;
  /** 移入回收站 */
  moveFilesToTrash: Array<FileObject>;
  /** 将邮件移动到指定文件夹 */
  moveMailboxMessageToFolder: MailboxMessage;
  /** 移动菜单 */
  moveMenu?: Maybe<Menu>;
  /** 移动路由 */
  moveRoute?: Maybe<Route>;
  /** 添加订阅日历 */
  newCalendarSubscription: Calendar;
  /** 发布文章 */
  publishArticle?: Maybe<Scalars['Boolean']['output']>;
  /** 注册 */
  register: LoginUser;
  /** 删除标签 */
  removeArticleTag?: Maybe<Scalars['Boolean']['output']>;
  /** 从日历集中移除日历 */
  removeCalendarFromSet: CalendarSet;
  /** 删除实体字段 */
  removeModelField?: Maybe<Scalars['Boolean']['output']>;
  /** 重命名文件 */
  renameFile: FileObject;
  /** 重命名组织代码 */
  renameOrganizationCode?: Maybe<Organization>;
  /** 工单重新开启 */
  reopenTicket?: Maybe<Ticket>;
  /** 工单解决 */
  resolveTicket?: Maybe<Ticket>;
  /** 恢复文件 */
  restoreFiles: Array<FileObject>;
  /** 工单恢复 */
  resumeTicket?: Maybe<Ticket>;
  /** 撤销个人 Token */
  revokePersonalAccessToken?: Maybe<Scalars['Boolean']['output']>;
  /** 撤销 Session */
  revokeSession?: Maybe<Scalars['Boolean']['output']>;
  /** 撤销 Token */
  revokeToken?: Maybe<Scalars['Boolean']['output']>;
  /** 发送验证码 */
  sendCaptcha?: Maybe<Scalars['String']['output']>;
  /** 发送邮件 */
  sendMailboxMessage: MailboxMessage;
  /** 重建索引 */
  storageReindex?: Maybe<Scalars['Boolean']['output']>;
  /** 工单暂停 */
  suspendTicket?: Maybe<Ticket>;
  /** 更新应用信息 */
  updateApplication?: Maybe<Application>;
  /** 修改文章 */
  updateArticle?: Maybe<Article>;
  /** 编辑栏目 */
  updateArticleCategory: ArticleCategory;
  /** 更新推荐位 */
  updateArticleFeature?: Maybe<ArticleFeature>;
  /** 更新标签 */
  updateArticleTag?: Maybe<ArticleTag>;
  /** 更新 Banner */
  updateBanner?: Maybe<Banner>;
  /** 更新日历 */
  updateCalendar: Calendar;
  /** 修改日历集 */
  updateCalendarSet?: Maybe<CalendarSet>;
  /**
   * 修改Account
   *
   */
  updateCnAsanyTestAccount?: Maybe<CnAsanyTestAccount>;
  /**
   * 修改User
   *
   */
  updateCnAsanyTestUser?: Maybe<CnAsanyTestUser>;
  /** 更新组件信息 */
  updateComponent?: Maybe<Component>;
  /** 更新客户 */
  updateCustomer?: Maybe<Customer>;
  /** 更新客户门店 */
  updateCustomerStore?: Maybe<CustomerStore>;
  /** 更新设备 */
  updateDevice: Device;
  /** 更新图标 */
  updateIcon?: Maybe<Icon>;
  /** 更新任务 */
  updateIssue?: Maybe<Issue>;
  /** 修改活动页 */
  updateLandingPage: LandingPage;
  /** 修改海报 */
  updateLandingPoster: LandingPoster;
  /** 修改门店 */
  updateLandingStore: LandingStore;
  /** 更新库 */
  updateLibrary?: Maybe<Library>;
  /** 更新邮件(只限草稿) */
  updateMailboxMessage: MailboxMessage;
  /** 更新邮件标记 */
  updateMailboxMessageFlags: MailboxMessage;
  /** 更新菜单 */
  updateMenu?: Maybe<Menu>;
  /** 修改实体 */
  updateModel?: Maybe<Model>;
  /** 更新实体字段 */
  updateModelField?: Maybe<ModelField>;
  /** 新增模块 */
  updateModule?: Maybe<Module>;
  /** 更新我收藏的邮箱 */
  updateMyFavoriteMailboxes: Array<Scalars['String']['output']>;
  /** 更新组织资料 */
  updateOrganizationProfile?: Maybe<Organization>;
  /** 更新产品 */
  updateProduct: Product;
  /** 更新路由信息 */
  updateRoute?: Maybe<Route>;
  /** 更新工单 */
  updateTicket?: Maybe<Ticket>;
  /** 更新用户 */
  updateUser: User;
  /** 上传附件 */
  upload?: Maybe<FileObject>;
  /** 验证验证码是否有效 */
  validCaptcha?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationAddCalendarEventArgs = {
  calendar: Scalars['ID']['input'];
  input: CalendarEventCreateInput;
};


export type MutationAddCalendarToSetArgs = {
  id: Scalars['ID']['input'];
  set: Scalars['ID']['input'];
};


export type MutationAddModelFieldArgs = {
  input: ModelFieldInput;
  modelId: Scalars['ID']['input'];
};


export type MutationAddStarForFilesArgs = {
  ids: Array<Scalars['ID']['input']>;
  mode?: InputMaybe<UpdateMode>;
};


export type MutationAssignTicketArgs = {
  assignee: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationAssigneeTaskArgs = {
  assignee: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationChangePasswordArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type MutationClearFilesInTrashArgs = {
  folder: Scalars['ID']['input'];
};


export type MutationClearMailboxMessagesInTrashMailboxArgs = {
  user?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCompleteMultipartUploadArgs = {
  folder?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateApplicationArgs = {
  input: ApplicationCreateInput;
};


export type MutationCreateArticleArgs = {
  input: ArticleCreateInput;
};


export type MutationCreateArticleCategoryArgs = {
  input: ArticleCategoryCreateInput;
};


export type MutationCreateArticleFeatureArgs = {
  input?: InputMaybe<ArticleFeatureCreateInput>;
};


export type MutationCreateArticleTagArgs = {
  input?: InputMaybe<ArticleTagCreateInput>;
};


export type MutationCreateBannerArgs = {
  input: BannerCreateInput;
};


export type MutationCreateCalendarArgs = {
  input: CalendarCreateInput;
};


export type MutationCreateCalendarSetArgs = {
  input?: InputMaybe<CalendarSetCreateInput>;
};


export type MutationCreateCnAsanyTestAccountArgs = {
  input: CnAsanyTestAccountCreateInput;
};


export type MutationCreateCnAsanyTestUserArgs = {
  input: CnAsanyTestUserCreateInput;
};


export type MutationCreateComponentArgs = {
  input: ComponentCreateInput;
};


export type MutationCreateCustomerArgs = {
  input: CustomerCreateInput;
};


export type MutationCreateCustomerStoreArgs = {
  input: CustomerStoreCreateInput;
};


export type MutationCreateDeviceArgs = {
  input: DeviceCreateInput;
};


export type MutationCreateFolderArgs = {
  name: Scalars['String']['input'];
  parentFolder: Scalars['ID']['input'];
};


export type MutationCreateIconArgs = {
  input: IconCreateInput;
};


export type MutationCreateIssueArgs = {
  input: IssueCreateInput;
};


export type MutationCreateLandingPageArgs = {
  input: LandingPageCreateInput;
};


export type MutationCreateLandingPosterArgs = {
  input: LandingPosterCreateInput;
};


export type MutationCreateLandingStoreArgs = {
  input: LandingStoreCreateInput;
};


export type MutationCreateLibraryArgs = {
  input: LibraryCreateInput;
};


export type MutationCreateMailboxArgs = {
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
  user?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateMailboxMessageArgs = {
  input: MailboxMessageCreateInput;
  user?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateMenuArgs = {
  input: MenuCreateInput;
};


export type MutationCreateMessageArgs = {
  input?: InputMaybe<MessageCreateInput>;
};


export type MutationCreateMessageDefinitionArgs = {
  input?: InputMaybe<MessageDefinitionCreateInput>;
};


export type MutationCreateMessageTemplateArgs = {
  input?: InputMaybe<MessageTemplateCreateInput>;
};


export type MutationCreateMessageTypeArgs = {
  input?: InputMaybe<MessageTypeCreateInput>;
};


export type MutationCreateModelArgs = {
  input: ModelCreateInput;
};


export type MutationCreateModuleArgs = {
  input: ModuleCreateInput;
};


export type MutationCreatePersonalAccessTokenArgs = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreatePersonalTaskArgs = {
  input?: InputMaybe<PersonalTaskInput>;
};


export type MutationCreateProductArgs = {
  input: ProductCreateInput;
};


export type MutationCreateProjectArgs = {
  input?: InputMaybe<ProjectCreateInput>;
};


export type MutationCreateRouteArgs = {
  input: RouteCreateInput;
};


export type MutationCreateTicketArgs = {
  input: TicketCreateInput;
};


export type MutationCreateUsersArgs = {
  settings: UserSettingsInput;
  users: Array<UserCreateInput>;
};


export type MutationCreateWebsiteArgs = {
  input: WebsiteCreateInput;
};


export type MutationDeleteApplicationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteArticleCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteArticleFeatureArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBannerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCalendarArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCalendarSetArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCnAsanyTestAccountArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCnAsanyTestUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteComponentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCustomerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCustomerStoreArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDeviceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFilesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteIconArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLandingPageArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteLandingPosterArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteLandingStoreArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteLibraryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMailboxMessageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteManyArticlesArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDeleteManyCnAsanyTestAccountsArgs = {
  where: CnAsanyTestAccountWhereInput;
};


export type MutationDeleteManyCnAsanyTestUsersArgs = {
  where: CnAsanyTestUserWhereInput;
};


export type MutationDeleteManyModulesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteManyUsersArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteMenuArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteModelArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteModuleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOrganizationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProcessModelArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRouteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTicketArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationGenerateEmptyShortLinksArgs = {
  category: Scalars['String']['input'];
  count: Scalars['Int']['input'];
};


export type MutationGenerateShortLinkArgs = {
  category: Scalars['String']['input'];
  expiresAt?: InputMaybe<Scalars['Date']['input']>;
  url: Scalars['String']['input'];
};


export type MutationImportApplicationArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationImportIconsArgs = {
  icons: Array<InputMaybe<IconInput>>;
  library: Scalars['ID']['input'];
};


export type MutationImportProcessModelArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationInitiateMultipartUploadArgs = {
  input: MultipartUploadInput;
};


export type MutationLoginArgs = {
  authCode?: InputMaybe<Scalars['String']['input']>;
  clientId: Scalars['String']['input'];
  loginType?: InputMaybe<LoginType>;
  options?: InputMaybe<LoginOptions>;
  password?: InputMaybe<Scalars['String']['input']>;
  tmpAuthCode?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type MutationMoveFilesToTrashArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationMoveMailboxMessageToFolderArgs = {
  id: Scalars['ID']['input'];
  mailbox: Scalars['ID']['input'];
};


export type MutationMoveMenuArgs = {
  id: Scalars['ID']['input'];
  location: Scalars['Int']['input'];
  parentMenu?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationMoveRouteArgs = {
  id: Scalars['ID']['input'];
  location: Scalars['Int']['input'];
  parentRoute?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationNewCalendarSubscriptionArgs = {
  url: Scalars['String']['input'];
};


export type MutationPublishArticleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  avatar: Scalars['File']['input'];
  nickName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  smsCode: Scalars['String']['input'];
};


export type MutationRemoveArticleTagArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveCalendarFromSetArgs = {
  id: Scalars['ID']['input'];
  set: Scalars['ID']['input'];
};


export type MutationRemoveModelFieldArgs = {
  fieldId: Scalars['ID']['input'];
  modelId: Scalars['ID']['input'];
};


export type MutationRenameFileArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationRenameOrganizationCodeArgs = {
  code: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type MutationReopenTicketArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResolveTicketArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRestoreFilesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationResumeTicketArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRevokePersonalAccessTokenArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRevokeSessionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRevokeTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSendCaptchaArgs = {
  configId?: InputMaybe<Scalars['String']['input']>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  phone: Scalars['String']['input'];
  sessionId: Scalars['String']['input'];
};


export type MutationSendMailboxMessageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationStorageReindexArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSuspendTicketArgs = {
  id: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateApplicationArgs = {
  id: Scalars['ID']['input'];
  input: ApplicationUpdateInput;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateArticleArgs = {
  id: Scalars['ID']['input'];
  input: ArticleUpdateInput;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateArticleCategoryArgs = {
  id: Scalars['ID']['input'];
  input: ArticleCategoryUpdateInput;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateArticleFeatureArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<ArticleFeatureUpdateInput>;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateArticleTagArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<ArticleTagUpdateInput>;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateBannerArgs = {
  id: Scalars['ID']['input'];
  input: BannerUpdateInput;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateCalendarArgs = {
  id: Scalars['ID']['input'];
  input: CalendarUpdateInput;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateCalendarSetArgs = {
  id: Scalars['ID']['input'];
  input: CalendarSetUpdateInput;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateCnAsanyTestAccountArgs = {
  id: Scalars['ID']['input'];
  input: CnAsanyTestAccountUpdateInput;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateCnAsanyTestUserArgs = {
  id: Scalars['ID']['input'];
  input: CnAsanyTestUserUpdateInput;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateComponentArgs = {
  id: Scalars['ID']['input'];
  input: ComponentUpdateInput;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateCustomerArgs = {
  id: Scalars['ID']['input'];
  input: CustomerUpdateInput;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateCustomerStoreArgs = {
  id: Scalars['ID']['input'];
  input: CustomerStoreUpdateInput;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateDeviceArgs = {
  id: Scalars['ID']['input'];
  input: DeviceUpdateInput;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateIconArgs = {
  id: Scalars['ID']['input'];
  input: IconUpdateInput;
};


export type MutationUpdateIssueArgs = {
  id: Scalars['ID']['input'];
  input: IssueUpdateInput;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateLandingPageArgs = {
  id: Scalars['ID']['input'];
  input: LandingPageUpdateInput;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateLandingPosterArgs = {
  id: Scalars['ID']['input'];
  input: LandingPosterUpdateInput;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateLandingStoreArgs = {
  id: Scalars['ID']['input'];
  input: LandingStoreUpdateInput;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateLibraryArgs = {
  id: Scalars['ID']['input'];
  input: LibraryUpdateInput;
};


export type MutationUpdateMailboxMessageArgs = {
  id: Scalars['ID']['input'];
  input: MailboxMessageUpdateInput;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateMailboxMessageFlagsArgs = {
  flags: Array<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  mode?: InputMaybe<MailboxFlagsUpdateMode>;
};


export type MutationUpdateMenuArgs = {
  id: Scalars['ID']['input'];
  input: MenuUpdateInput;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateModelArgs = {
  id: Scalars['ID']['input'];
  input: ModelUpdateInput;
};


export type MutationUpdateModelFieldArgs = {
  fieldId: Scalars['ID']['input'];
  input: ModelFieldInput;
  modelId: Scalars['ID']['input'];
};


export type MutationUpdateModuleArgs = {
  id: Scalars['ID']['input'];
  input: ModuleUpdateInput;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateMyFavoriteMailboxesArgs = {
  mailboxes: Array<Scalars['String']['input']>;
  mode?: InputMaybe<UpdateMode>;
  user?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateOrganizationProfileArgs = {
  id: Scalars['ID']['input'];
  input: UpdateOrganizationProfileUpdateInput;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID']['input'];
  input: ProductUpdateInput;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateRouteArgs = {
  id: Scalars['ID']['input'];
  input: RouteUpdateInput;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateTicketArgs = {
  id: Scalars['ID']['input'];
  input: TicketUpdateInput;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  input: UserUpdateInput;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUploadArgs = {
  file: Scalars['Upload']['input'];
  options: UploadOptions;
};


export type MutationValidCaptchaArgs = {
  code: Scalars['String']['input'];
  configId?: InputMaybe<Scalars['String']['input']>;
  sessionId: Scalars['String']['input'];
};

export type Notification = {
  __typename?: 'Notification';
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  systemMessage: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  type: MessageType;
  uri: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type OssProperties = StorageProperties & {
  __typename?: 'OSSProperties';
  accessKeyId?: Maybe<Scalars['String']['output']>;
  accessKeySecret?: Maybe<Scalars['String']['output']>;
  bucketName?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export enum OnlineStatus {
  Offline = 'offline',
  Online = 'online'
}

export type OnlineStatusDetails = {
  __typename?: 'OnlineStatusDetails';
  detailPlatformStatus: Array<DetailPlatformStatus>;
  status: OnlineStatus;
};

export enum Operation {
  Delete = 'DELETE',
  Insert = 'INSERT',
  Update = 'UPDATE'
}

export type Oplog = {
  __typename?: 'Oplog';
  clazz?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  entityName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  operation?: Maybe<Operation>;
  primarykeyName?: Maybe<Scalars['String']['output']>;
  primarykeyValue?: Maybe<Scalars['String']['output']>;
  tableName?: Maybe<Scalars['String']['output']>;
};

export type OplogWhereInput = {
  createdAt_gt?: InputMaybe<Scalars['Date']['input']>;
  entityName?: InputMaybe<Scalars['String']['input']>;
  entityName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  primarykeyName?: InputMaybe<Scalars['String']['input']>;
  primarykeyValue?: InputMaybe<Scalars['String']['input']>;
};

/** 组织 */
export type Organization = {
  __typename?: 'Organization';
  /** 编码 */
  code: Scalars['String']['output'];
  /** 创建时间 */
  createdAt?: Maybe<Scalars['Date']['output']>;
  /** 创建人 */
  createdBy?: Maybe<Scalars['String']['output']>;
  /** 部门类型 */
  departmentTypes?: Maybe<Array<Maybe<DepartmentType>>>;
  /** 描述信息 */
  description?: Maybe<Scalars['String']['output']>;
  /** 邮箱 */
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /**
   * 组织部门
   *    departments(filter: DepartmentFilter): [Department]
   * 组织员工
   *    employees(filter: EmployeeFilter, page: Int = 1, pageSize: Int = 15, orderBy: OrderBy = "unsorted"): EmployeeConnection
   *    # 组织下的角色
   *    roles(enabled: Boolean = true,scope:String = "GLOBAL"): [Role]
   * 组织职位
   */
  jobs?: Maybe<Array<Maybe<Job>>>;
  /** 位置 */
  location?: Maybe<Address>;
  /** 标志 */
  logo?: Maybe<Scalars['File']['output']>;
  /** 名称 */
  name: Scalars['String']['output'];
  /** 在组织内的角色(特指系统角色 成员 / 所有者 ) */
  role?: Maybe<Role>;
  /** 修改时间 */
  updatedAt?: Maybe<Scalars['Date']['output']>;
  /** 修改人 */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** 网址 */
  url?: Maybe<Scalars['String']['output']>;
};


/** 组织 */
export type OrganizationJobsArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
};


/** 组织 */
export type OrganizationLogoArgs = {
  format?: InputMaybe<FileFormat>;
};


/** 组织 */
export type OrganizationRoleArgs = {
  of?: InputMaybe<Scalars['ID']['input']>;
};

export type OrganizationEmployeeStatus = {
  __typename?: 'OrganizationEmployeeStatus';
  /** 状态编码 */
  code?: Maybe<Scalars['String']['output']>;
  /** ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** 是否是默认值 */
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  /** 状态 */
  name?: Maybe<Scalars['String']['output']>;
  /** 所属组织 */
  organization?: Maybe<Organization>;
};

export type OrganizationWhereInput = {
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** 所有者 */
export type Owner = {
  /** 所有者 ID */
  id: Scalars['ID']['output'];
  /** 所有者名称 */
  name?: Maybe<Scalars['String']['output']>;
};

export type OwnershipInput = {
  id: Scalars['ID']['input'];
  type: Scalars['String']['input'];
};

/**
 * enum ArticlePermissionKey {
 *     # 查看人
 *     viewer,
 *     # 下载人
 *     downloader,
 *     # 打印人
 *     printer
 * }
 */
export type PageComponent = {
  __typename?: 'PageComponent';
  /** 组件 */
  component?: Maybe<Component>;
  /** 是否启用 */
  enabled: Scalars['Boolean']['output'];
  /** 路由 */
  route?: Maybe<Route>;
};

export type PageComponentInput = {
  /** 数据 */
  blocks?: InputMaybe<Array<ComponentDataInput>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** 路径 */
  path?: InputMaybe<Scalars['String']['input']>;
  /** 页面模版 */
  template?: InputMaybe<Scalars['String']['input']>;
};

/** 页信息 */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** 当前页 */
  current: Scalars['Int']['output'];
  /** 数据页最后一个游标 */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** 是否存在下一页 */
  hasNextPage: Scalars['Boolean']['output'];
  /** 是否存在上一页 */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** 每页显示数量 */
  pageSize: Scalars['Int']['output'];
  /** 数据页第一个游标 */
  startCursor?: Maybe<Scalars['String']['output']>;
  /** 总数据条数 */
  total: Scalars['Int']['output'];
  /** 总页数 */
  totalPages: Scalars['Int']['output'];
};

export type Permission = {
  __typename?: 'Permission';
  id: Scalars['ID']['output'];
};

export type PermissionConnection = {
  __typename?: 'PermissionConnection';
  /** 当前页 */
  currentPage?: Maybe<Scalars['Int']['output']>;
  edges?: Maybe<Array<Maybe<PermissionEdge>>>;
  pageInfo?: Maybe<PageInfo>;
  /** 每页显示条数 */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** 总数据条数 */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /** 总页数 */
  totalPage?: Maybe<Scalars['Int']['output']>;
};

export type PermissionEdge = {
  __typename?: 'PermissionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Permission>;
};

export type PermissionWhereInput = {
  /** 名称模糊查询 */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PersonalAccessToken = {
  __typename?: 'PersonalAccessToken';
  /** 过期时间 */
  expiresAt?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** 创建时间 */
  issuedAt?: Maybe<Scalars['Date']['output']>;
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 权限范围 */
  scopes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type PersonalTaskInput = {
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 到期日期 */
  dueDate?: InputMaybe<Scalars['Date']['input']>;
  /** 任务名称 */
  name: Scalars['String']['input'];
  /** 优先级 */
  priority?: InputMaybe<Scalars['Int']['input']>;
};

export type Phone = {
  __typename?: 'Phone';
  /** 电话 */
  number?: Maybe<Scalars['String']['output']>;
  /** 状态 */
  status?: Maybe<PhoneStatus>;
};

export enum PhoneStatus {
  Unverified = 'UNVERIFIED',
  Verified = 'VERIFIED'
}

export enum Platform {
  Admin = 'Admin',
  Android = 'Android',
  Ios = 'IOS',
  Linux = 'Linux',
  Osx = 'OSX',
  Web = 'Web',
  Windows = 'Windows'
}

/** 职位 */
export type Position = {
  __typename?: 'Position';
  /**
   *    # 职位拥有的角色
   *    roles: [Role]
   * 所属部门
   */
  department?: Maybe<Department>;
  /** 职位描述信息 */
  description?: Maybe<Scalars['String']['output']>;
  /** 职位 */
  id?: Maybe<Scalars['ID']['output']>;
  /** 职位名称 */
  name?: Maybe<Scalars['String']['output']>;
};

export type ProcessModel = {
  __typename?: 'ProcessModel';
  comment?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['Date']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  editorJson?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastUpdated?: Maybe<Scalars['Date']['output']>;
  lastUpdatedBy?: Maybe<Scalars['String']['output']>;
  modelType?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tenantId?: Maybe<Scalars['Int']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type ProcessModelConnection = {
  __typename?: 'ProcessModelConnection';
  /** 当前页 */
  currentPage: Scalars['Int']['output'];
  edges: Array<ProcessModelEdge>;
  pageInfo: PageInfo;
  /** 每页显示条数 */
  pageSize: Scalars['Int']['output'];
  /** 总数据条数 */
  totalCount: Scalars['Int']['output'];
  /** 总页数 */
  totalPage: Scalars['Int']['output'];
};

export type ProcessModelEdge = {
  __typename?: 'ProcessModelEdge';
  cursor: Scalars['String']['output'];
  node: ProcessModel;
};

export type ProcessModelWhereInput = {
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /**
   * 所有者
   * 查询当前用户的模型时，传入 self
   */
  user?: InputMaybe<Scalars['String']['input']>;
};

/** 产品 */
export type Product = {
  __typename?: 'Product';
  /** 产品文章 */
  articles: Array<Article>;
  /** 产品品牌 */
  brand?: Maybe<Brand>;
  id: Scalars['ID']['output'];
  /** 产品图片 */
  images: Array<ProductImage>;
  /** 产品名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 产品规格 */
  specifications: Array<ProductSpecification>;
  /** 产品保修政策 */
  warrantyPolicies: Array<WarrantyPolicy>;
};


/** 产品 */
export type ProductArticlesArgs = {
  ArticleWhereInput?: InputMaybe<ArticleWhereInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkageType: Scalars['String']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** 当前页 */
  currentPage: Scalars['Int']['output'];
  edges: Array<ProductEdge>;
  pageInfo: PageInfo;
  /** 每页显示条数 */
  pageSize: Scalars['Int']['output'];
  /** 总数据条数 */
  totalCount: Scalars['Int']['output'];
  /** 总页数 */
  totalPage: Scalars['Int']['output'];
};

export type ProductCreateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ProductEdge = {
  __typename?: 'ProductEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node: Product;
};

export enum ProductIdType {
  Id = 'ID',
  Sn = 'SN'
}

export type ProductImage = {
  __typename?: 'ProductImage';
  /** 图片描述 */
  alt?: Maybe<Scalars['String']['output']>;
  /** 图片描述 */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** 图片对象 */
  image?: Maybe<Scalars['File']['output']>;
  /** 排序 */
  index?: Maybe<Scalars['Int']['output']>;
  /** 标题 */
  title?: Maybe<Scalars['String']['output']>;
  /** 图片URL */
  url?: Maybe<Scalars['String']['output']>;
};

export type ProductSpecification = {
  __typename?: 'ProductSpecification';
  id: Scalars['ID']['output'];
  /** 规格名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 规格值 */
  value?: Maybe<Scalars['String']['output']>;
};

export type ProductUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ProductWhereInput = {
  name_contains?: InputMaybe<Scalars['String']['input']>;
};

export type Project = {
  __typename?: 'Project';
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  issues: Array<Issue>;
  /** Logo */
  logo?: Maybe<Scalars['File']['output']>;
  /** 名称 */
  name: Scalars['String']['output'];
};


export type ProjectIssuesArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueWhereInput>;
};

/** 项目分页 */
export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  /** 当前页 */
  currentPage: Scalars['Int']['output'];
  edges: Array<ProjectEdge>;
  pageInfo: PageInfo;
  /** 每页显示条数 */
  pageSize: Scalars['Int']['output'];
  /** 总数据条数 */
  totalCount: Scalars['Int']['output'];
  /** 总页数 */
  totalPage: Scalars['Int']['output'];
};

export type ProjectCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['File']['input']>;
  name: Scalars['String']['input'];
};

/** 项目 */
export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  cursor: Scalars['String']['output'];
  node: Project;
};

export type ProjectMember = {
  __typename?: 'ProjectMember';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type ProjectWhereInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  amapOpenAPI?: Maybe<AmapOpenApi>;
  /** 查询单个应用的信息 */
  application?: Maybe<Application>;
  /** 所有的应用 */
  applications: Array<Application>;
  /** 单个文章 */
  article?: Maybe<Article>;
  /** 文章栏目 */
  articleCategories: Array<ArticleCategory>;
  /** 根据ID获取文章栏目 */
  articleCategory?: Maybe<ArticleCategory>;
  /** 根据id查询推荐位 */
  articleFeature?: Maybe<ArticleFeature>;
  /** 查询所有推荐位 */
  articleFeatures?: Maybe<Array<Maybe<ArticleFeature>>>;
  /** 查询文章存储模版 */
  articleStoreTemplates: Array<ArticleStoreTemplate>;
  /** 文章标签 */
  articleTags?: Maybe<Array<Maybe<ArticleTag>>>;
  /** 全部文章(分页) */
  articlesConnection?: Maybe<ArticleConnection>;
  /** 横幅广告 */
  banner?: Maybe<Banner>;
  /** 横幅广告 */
  banners?: Maybe<Array<Maybe<Banner>>>;
  /** 日历账户 */
  calendarAccounts: Array<CalendarAccount>;
  /** 日历时间统计 */
  calendarEventDates: Array<CalendarEventDateStat>;
  /** 日历事件 */
  calendarEvents: Array<CalendarEvent>;
  /** 日历事件 */
  calendarEventsWithDays: Array<CalendarEvent>;
  /** 日历集 */
  calendarSets: Array<CalendarSet>;
  /** 日历 */
  calendars: Array<Calendar>;
  /** 云盘 */
  cloudDrive: CloudDrive;
  /** 云盘 (列表) */
  cloudDrives: Array<CloudDrive>;
  /**
   * 获取Account
   *
   */
  cnAsanyTestAccount?: Maybe<CnAsanyTestAccount>;
  /**
   * 查询Account
   *
   */
  cnAsanyTestAccounts?: Maybe<Array<Maybe<CnAsanyTestAccount>>>;
  /**
   * Account分页查询
   *
   */
  cnAsanyTestAccountsConnection?: Maybe<CnAsanyTestAccountConnection>;
  /**
   * 获取User
   *
   */
  cnAsanyTestUser?: Maybe<CnAsanyTestUser>;
  /**
   * 查询User
   *
   */
  cnAsanyTestUsers?: Maybe<Array<Maybe<CnAsanyTestUser>>>;
  /**
   * User分页查询
   *
   */
  cnAsanyTestUsersConnection?: Maybe<CnAsanyTestUserConnection>;
  /** 查询组件 单个 */
  component?: Maybe<Component>;
  /** 组件库 */
  componentLibrary?: Maybe<ComponentLibrary>;
  /** 查询组件 列表 */
  components?: Maybe<Array<Maybe<Component>>>;
  /** 查询组件 分页 */
  componentsConnection?: Maybe<ComponentConnection>;
  /** 消费者 */
  consumers: Array<Consumer>;
  /** 联系人 */
  contact: Contact;
  /** 通信录 - 一个 */
  contactBook?: Maybe<ContactBook>;
  /** 通信录 - 全部 */
  contactBooks: Array<ContactBook>;
  /** 检索联系人 */
  contacts?: Maybe<ContactConnection>;
  /** 查询客户 */
  customer?: Maybe<Customer>;
  /** 查询客户门店 */
  customerStore?: Maybe<CustomerStore>;
  /** 查询客户门店 */
  customerStores: Array<CustomerStore>;
  /** 查询客户门店 */
  customerStoresConnection: CustomerStoreConnection;
  /** 查询客户列表 */
  customers: Array<Customer>;
  /** 查询客户 */
  customersConnection: CustomerConnection;
  /** 查询数据集 */
  dataset?: Maybe<DataSet>;
  /** 单个部门 */
  department?: Maybe<Department>;
  /** 全部部门 */
  departments: Array<Department>;
  /** 查询设备详情 */
  device?: Maybe<Device>;
  /** 查询设备列表 */
  devices: Array<Device>;
  /** 查询设备列表 */
  devicesConnection: DeviceConnection;
  /**
   * 数据字典
   * 非 ID 查询时，必须同时提供 code 与 type
   */
  dict?: Maybe<Dict>;
  /** 查询数据字典分类 */
  dictTypes: Array<DictType>;
  /** 查询数据字典 */
  dicts: Array<Dict>;
  /** 查询数据字典 */
  dictsConnection: DictConnection;
  /** 查询单个接口 */
  endpoint?: Maybe<ModelField>;
  /** 文件详情 */
  file?: Maybe<FileObject>;
  group?: Maybe<Group>;
  /** 图标库 */
  iconLibraries: Array<IconLibrary>;
  /** 图标库 */
  iconLibrary?: Maybe<IconLibrary>;
  /** 查询图标 */
  icons: Array<Icon>;
  issue?: Maybe<Issue>;
  /** 分页查询任务 */
  issues?: Maybe<IssueConnection>;
  /** 活动页 */
  landingPage?: Maybe<LandingPage>;
  /** 查询活动页 */
  landingPagesConnection: LandingPageConnection;
  /** 海报 */
  landingPoster?: Maybe<LandingPoster>;
  /** 查询活动页海报 */
  landingPostersConnection: LandingPosterConnection;
  /** 门店 */
  landingStore?: Maybe<LandingStore>;
  /** 查询活动页门店 */
  landingStoresConnection: LandingStoreConnection;
  /** 库 */
  libraries: Array<Library>;
  /** 文件列表 */
  listFiles: FileObjectConnection;
  /** 获取已经上传的文件信息 */
  listMultipartUploads: FileChecksum;
  /** 查询邮箱账户 */
  mailUser?: Maybe<MailUser>;
  /** 查询邮箱文件夹 */
  mailbox?: Maybe<Mailbox>;
  /** 邮件详情 */
  mailboxMessage?: Maybe<MailboxMessage>;
  /** 查询文件夹下的邮件 */
  mailboxMessages?: Maybe<MailboxMessageConnection>;
  /** 查询邮箱文件夹 */
  mailboxes: Array<Mailbox>;
  /** 消息定义 */
  messageDefinition?: Maybe<MessageDefinition>;
  /** 查询消息类型 */
  messageType?: Maybe<MessageType>;
  /** 查询消息类型(集合) */
  messageTypes: Array<MessageType>;
  /** 查询单个模型 */
  model?: Maybe<Model>;
  /** 查询模型的字段 */
  modelFields: Array<ModelField>;
  /** 查询模型支持的字段类型 */
  modelFiledTypes: Array<ModelFiledType>;
  /** 实体视图(单个) */
  modelView?: Maybe<ModelView>;
  /** 实体视图(列表) */
  modelViews: Array<ModelView>;
  /** 查询模型 (集合) */
  models: Array<Model>;
  /** 查询模型（分页） */
  modelsConnection: ModelConnection;
  /** 查询单个模块 */
  module?: Maybe<Module>;
  /** 查询全部模块 */
  modules: Array<Module>;
  /** 查询全部模块（分页） */
  modulesConnection: ModuleConnection;
  /** 查询我的任务 */
  myTasks?: Maybe<TaskConnection>;
  /** 查询日志 */
  oplogs: Array<Oplog>;
  /** 组织•单个组织 */
  organization?: Maybe<Organization>;
  /** 组织•组织列表 */
  organizations: Array<Organization>;
  /** 查询权限 */
  permissions?: Maybe<Array<Maybe<Permission>>>;
  /** 查询权限 (分页) */
  permissionsConnection?: Maybe<PermissionConnection>;
  /** 查询个人 Token */
  personalAccessTokens: Array<PersonalAccessToken>;
  processDefinitions?: Maybe<Scalars['Int']['output']>;
  /** 流程模型 */
  processModel?: Maybe<ProcessModel>;
  /** 流程模型(分页) */
  processModels: ProcessModelConnection;
  /** 查询产品详情 */
  product?: Maybe<Product>;
  /** 查询产品列表 */
  products: Array<Product>;
  /** 查询产品列表 */
  productsConnection: ProductConnection;
  /** 单个项目查询接口 */
  project?: Maybe<Project>;
  /** 项目查询 */
  projects: ProjectConnection;
  /** 查询路由 */
  route?: Maybe<Route>;
  /** GraphQL 架构图 */
  schema?: Maybe<GraphQlSchema>;
  /** 查询单个服务 */
  service?: Maybe<Service>;
  /** 服务 (集合) */
  services: Array<Service>;
  /** 会话 */
  session: Session;
  /** 用户会话 */
  sessions: Array<Session>;
  /** 查询短链接 */
  shortLink?: Maybe<ShortLink>;
  /** 查询短链接 */
  shortLinksConnection: ShortLinkConnection;
  /** 已加星标的文章频道 */
  starredArticleCategories?: Maybe<Array<Maybe<ArticleCategory>>>;
  /** 已加星标的文章 */
  starredArticles?: Maybe<ArticleConnection>;
  /** 存储器 */
  storage?: Maybe<Storage>;
  /** 存储器 */
  storages?: Maybe<Array<Maybe<Storage>>>;
  /** 查询任务详情 */
  task?: Maybe<Task>;
  /** 团队成员 */
  teamMembers: Array<TeamMember>;
  /** 查询工单 */
  ticket?: Maybe<Ticket>;
  /** 查询工单 */
  tickets: Array<Ticket>;
  /** 查询工单 */
  ticketsConnection: TicketConnection;
  /** 用户详情 */
  user: User;
  /** 查询用户 */
  users: Array<User>;
  /** 查询用户 */
  usersConnection: UserConnection;
  /** 系统•当前登录用户 */
  viewer?: Maybe<CurrentUser>;
  /** 查询保修策略列表 */
  warrantyPolicies: Array<WarrantyPolicy>;
  /** 网站详情 */
  website?: Maybe<Website>;
  /** 网站列表 */
  websites: Array<Website>;
  /** 微信API */
  weixin?: Maybe<Weixin>;
};


export type QueryApplicationArgs = {
  id: Scalars['ID']['input'];
  idType?: InputMaybe<ApplicationIdType>;
  space?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicationsArgs = {
  where?: InputMaybe<ApplicationWhereInput>;
};


export type QueryArticleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryArticleCategoriesArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  where?: InputMaybe<ArticleCategoryWhereInput>;
};


export type QueryArticleCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryArticleFeatureArgs = {
  id: Scalars['ID']['input'];
};


export type QueryArticleFeaturesArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  organization: Scalars['ID']['input'];
  where?: InputMaybe<ArticleFeatureWhereInput>;
};


export type QueryArticleTagsArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  organization: Scalars['ID']['input'];
  where?: InputMaybe<ArticleCategoryWhereInput>;
};


export type QueryArticlesConnectionArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticleWhereInput>;
};


export type QueryBannerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBannersArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  where?: InputMaybe<BannerWhereInput>;
};


export type QueryCalendarEventDatesArgs = {
  calendar?: InputMaybe<Scalars['ID']['input']>;
  calendarSet?: InputMaybe<Scalars['ID']['input']>;
  ends: Scalars['Date']['input'];
  starts: Scalars['Date']['input'];
};


export type QueryCalendarEventsArgs = {
  calendar?: InputMaybe<Scalars['ID']['input']>;
  calendarSet?: InputMaybe<Scalars['ID']['input']>;
  ends: Scalars['Date']['input'];
  starts: Scalars['Date']['input'];
};


export type QueryCalendarEventsWithDaysArgs = {
  calendar?: InputMaybe<Scalars['ID']['input']>;
  calendarSet?: InputMaybe<Scalars['ID']['input']>;
  date: Scalars['Date']['input'];
  days: Scalars['Int']['input'];
};


export type QueryCloudDriveArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCnAsanyTestAccountArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCnAsanyTestAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CnAsanyTestAccountOrderBy>;
  where?: InputMaybe<CnAsanyTestAccountWhereInput>;
};


export type QueryCnAsanyTestAccountsConnectionArgs = {
  orderBy?: InputMaybe<CnAsanyTestAccountOrderBy>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CnAsanyTestAccountWhereInput>;
};


export type QueryCnAsanyTestUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCnAsanyTestUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CnAsanyTestUserOrderBy>;
  where?: InputMaybe<CnAsanyTestUserWhereInput>;
};


export type QueryCnAsanyTestUsersConnectionArgs = {
  orderBy?: InputMaybe<CnAsanyTestUserOrderBy>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CnAsanyTestUserWhereInput>;
};


export type QueryComponentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryComponentLibraryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryComponentsArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentWhereInput>;
};


export type QueryComponentsConnectionArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentWhereInput>;
};


export type QueryContactArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContactBookArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContactsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContactWhereInput>;
};


export type QueryCustomerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustomerStoreArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustomerStoresArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  where?: InputMaybe<CustomerStoreWhereInput>;
};


export type QueryCustomerStoresConnectionArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerStoreWhereInput>;
};


export type QueryCustomersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
};


export type QueryCustomersConnectionArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
};


export type QueryDatasetArgs = {
  id: Scalars['ID']['input'];
  params?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryDepartmentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDepartmentsArgs = {
  organization: Scalars['ID']['input'];
  where?: InputMaybe<DepartmentWhereInput>;
};


export type QueryDeviceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDevicesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  where?: InputMaybe<DeviceWhereInput>;
};


export type QueryDevicesConnectionArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DeviceWhereInput>;
};


export type QueryDictArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDictsArgs = {
  where?: InputMaybe<DictWhereInput>;
};


export type QueryDictsConnectionArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DictWhereInput>;
};


export type QueryEndpointArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  idType?: InputMaybe<EndpointIdType>;
};


export type QueryFileArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryIconLibrariesArgs = {
  ownership?: InputMaybe<OwnershipInput>;
  where?: InputMaybe<IconLibraryWhereInput>;
};


export type QueryIconLibraryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryIconsArgs = {
  where?: InputMaybe<IconWhereInput>;
};


export type QueryIssueArgs = {
  id: Scalars['ID']['input'];
};


export type QueryIssuesArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueWhereInput>;
};


export type QueryLandingPageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLandingPagesConnectionArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LandingPageWhereInput>;
};


export type QueryLandingPosterArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLandingPostersConnectionArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LandingPosterWhereInput>;
};


export type QueryLandingStoreArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLandingStoresConnectionArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LandingStoreWhereInput>;
};


export type QueryLibrariesArgs = {
  ownership?: InputMaybe<OwnershipInput>;
  type: LibraryType;
};


export type QueryListFilesArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  rootFolder: Scalars['ID']['input'];
  where?: InputMaybe<FileWhereInput>;
};


export type QueryListMultipartUploadsArgs = {
  md5: Scalars['String']['input'];
};


export type QueryMailUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<MailUserIdType>;
};


export type QueryMailboxArgs = {
  id: Scalars['ID']['input'];
  user?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMailboxMessageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMailboxMessagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
  where?: InputMaybe<MailboxMessageWhereInput>;
};


export type QueryMailboxesArgs = {
  user?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMessageDefinitionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMessageTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryModelArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  idType?: InputMaybe<ModelIdType>;
};


export type QueryModelFieldsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  model: Scalars['ID']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  where?: InputMaybe<ModelFieldWhereInput>;
};


export type QueryModelViewArgs = {
  id: Scalars['ID']['input'];
};


export type QueryModelViewsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  module: Scalars['ID']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  where?: InputMaybe<ModelViewWhereInput>;
};


export type QueryModelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  module: Scalars['ID']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  where?: InputMaybe<ModelWhereInput>;
};


export type QueryModelsConnectionArgs = {
  module: Scalars['ID']['input'];
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ModelWhereInput>;
};


export type QueryModuleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryModulesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  where?: InputMaybe<ModuleWhereInput>;
};


export type QueryModulesConnectionArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ModuleWhereInput>;
};


export type QueryMyTasksArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type QueryOplogsArgs = {
  where?: InputMaybe<OplogWhereInput>;
};


export type QueryOrganizationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrganizationsArgs = {
  where?: InputMaybe<OrganizationWhereInput>;
};


export type QueryPermissionsArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  where?: InputMaybe<PermissionWhereInput>;
};


export type QueryPermissionsConnectionArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PermissionWhereInput>;
};


export type QueryProcessModelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProcessModelsArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProcessModelWhereInput>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
  type?: InputMaybe<ProductIdType>;
};


export type QueryProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryProductsConnectionArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryProjectArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProjectsArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryRouteArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySchemaArgs = {
  id: Scalars['ID']['input'];
};


export type QueryServiceArgs = {
  id: Scalars['ID']['input'];
  idType?: InputMaybe<ServiceIdType>;
};


export type QuerySessionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryShortLinkArgs = {
  id: Scalars['ID']['input'];
  type?: InputMaybe<ShortLinkIdType>;
};


export type QueryShortLinksConnectionArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ShortLinkWhereInput>;
};


export type QueryStarredArticleCategoriesArgs = {
  starType: ArticleCategoryStarType;
  uid: Scalars['ID']['input'];
};


export type QueryStarredArticlesArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  starType: ArticleStarType;
  uid: Scalars['ID']['input'];
  where?: InputMaybe<ArticleWhereInput>;
};


export type QueryStorageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaskArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTicketArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTicketsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  where?: InputMaybe<TicketWhereInput>;
};


export type QueryTicketsConnectionArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TicketWhereInput>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryViewerArgs = {
  organization?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryWarrantyPoliciesArgs = {
  productId: Scalars['ID']['input'];
};


export type QueryWebsiteArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWebsitesArgs = {
  orderBy?: InputMaybe<Scalars['OrderBy']['input']>;
  where?: InputMaybe<WebsiteWhereInput>;
};

export type ReminderDefinition = {
  __typename?: 'ReminderDefinition';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  system: Scalars['Boolean']['output'];
  template: MessageTemplate;
};

export type Role = {
  __typename?: 'Role';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  scopes: Array<RoleScope>;
  type: RoleType;
};

export type RoleScope = {
  __typename?: 'RoleScope';
  id: Scalars['ID']['output'];
  type: RoleScopeType;
  value: Scalars['String']['output'];
};

export type RoleScopeType = {
  __typename?: 'RoleScopeType';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  service?: Maybe<AuthorizedService>;
};

export enum RoleType {
  Classic = 'CLASSIC',
  Template = 'TEMPLATE'
}

export type Route = {
  __typename?: 'Route';
  /** 访问权限 */
  access?: Maybe<Scalars['String']['output']>;
  /** 路由对应的应用 */
  application: Application;
  /** 必须登录 */
  authorized?: Maybe<Scalars['Boolean']['output']>;
  /** 自定义面包屑组件 */
  breadcrumb?: Maybe<Component>;
  /** 组件 */
  component?: Maybe<Component>;
  /** 是否启用 */
  enabled: Scalars['Boolean']['output'];
  /** 在面包屑中隐藏菜单 */
  hideInBreadcrumb?: Maybe<Scalars['Boolean']['output']>;
  /** 对应的图标 */
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** 序号 */
  index: Scalars['Int']['output'];
  /** 布局设置 */
  layout?: Maybe<LayoutSettings>;
  /** 路由层级 */
  level: Scalars['Int']['output'];
  /** 菜单名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 父路由 */
  parent?: Maybe<Route>;
  /** 访问路径 */
  path: Scalars['String']['output'];
  /** 重定向 */
  redirect?: Maybe<Scalars['String']['output']>;
  /** 子路由 */
  routes?: Maybe<Array<Maybe<Route>>>;
  /** 路由类型 */
  type: RouteType;
};

export type RouteCreateInput = {
  /** 访问权限 */
  access?: InputMaybe<Scalars['String']['input']>;
  /** 应用 */
  application: Scalars['ID']['input'];
  /** 必须登录 */
  authorized?: InputMaybe<Scalars['Boolean']['input']>;
  /** 自定义面包屑组件 */
  breadcrumb?: InputMaybe<Scalars['ID']['input']>;
  /** 组件 */
  component?: InputMaybe<Scalars['ID']['input']>;
  /** 是否启用 */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** 在面包屑中隐藏菜单 */
  hideInBreadcrumb?: InputMaybe<Scalars['Boolean']['input']>;
  /** 对应的图标 */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  index?: InputMaybe<Scalars['Int']['input']>;
  /** 布局设置 */
  layout?: InputMaybe<LayoutSettingsInput>;
  /** 名称 */
  name: Scalars['String']['input'];
  /** 父路由 */
  parentRoute?: InputMaybe<Scalars['ID']['input']>;
  /** 路径 */
  path: Scalars['String']['input'];
  /** 重定向的路径 */
  redirect?: InputMaybe<Scalars['String']['input']>;
  /** 路由类型 */
  type?: InputMaybe<RouteType>;
};

export enum RouteType {
  /** 分割符 */
  Divider = 'DIVIDER',
  /** 标题 */
  Header = 'HEADER',
  /** 菜单 */
  Menu = 'MENU',
  /** 路由 */
  Route = 'ROUTE'
}

export type RouteUpdateInput = {
  /** 访问权限 */
  access?: InputMaybe<Scalars['String']['input']>;
  /** 必须登录 */
  authorized?: InputMaybe<Scalars['Boolean']['input']>;
  /** 自定义面包屑组件 */
  breadcrumb?: InputMaybe<Scalars['ID']['input']>;
  /** 组件 */
  component?: InputMaybe<Scalars['ID']['input']>;
  /** 是否启用 */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** 在面包屑中隐藏菜单 */
  hideInBreadcrumb?: InputMaybe<Scalars['Boolean']['input']>;
  /** 对应的图标 */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  index?: InputMaybe<Scalars['Int']['input']>;
  /** 布局设置 */
  layout?: InputMaybe<LayoutSettingsInput>;
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 父路由 */
  parentRoute?: InputMaybe<Scalars['ID']['input']>;
  /** 路径 */
  path?: InputMaybe<Scalars['String']['input']>;
  /** 重定向的路径 */
  redirect?: InputMaybe<Scalars['String']['input']>;
  /** 路由类型 */
  type?: InputMaybe<RouteType>;
};

export type RouteWhereInput = {
  /** 是否启用 */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  space?: InputMaybe<Scalars['ID']['input']>;
};

export type Routespace = {
  __typename?: 'Routespace';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Service = {
  __typename?: 'Service';
  /** 编码 */
  code?: Maybe<Scalars['String']['output']>;
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  /** Host 地址 */
  host?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** PATH 地址 */
  path?: Maybe<Scalars['String']['output']>;
  /** 端口 */
  port?: Maybe<Scalars['String']['output']>;
  /** Web 协议 */
  protocol?: Maybe<Scalars['String']['output']>;
  /** 地址 */
  url?: Maybe<Scalars['String']['output']>;
};

export enum ServiceIdType {
  Code = 'CODE',
  Id = 'ID'
}

export type Session = {
  __typename?: 'Session';
  /** 设备 */
  device?: Maybe<ClientDevice>;
  id: Scalars['ID']['output'];
  /** 登录时的 IP 地址 */
  ip?: Maybe<Scalars['String']['output']>;
  /** 最后一次使用的 IP 地址 */
  lastIp?: Maybe<Scalars['String']['output']>;
  /** 最后一次访问的位置 */
  lastLocation?: Maybe<Scalars['String']['output']>;
  /** 最后一次访问时间 */
  lastUsedTime: Scalars['Date']['output'];
  /** 登录时的位置 */
  location?: Maybe<Scalars['String']['output']>;
  /** 登录时间 */
  loginTime: Scalars['Date']['output'];
};

/** 性别 */
export enum Sex {
  Female = 'female',
  Male = 'male',
  Unknown = 'unknown'
}

export type ShortLink = {
  __typename?: 'ShortLink';
  /** 访问次数 */
  accessCount: Scalars['Int']['output'];
  /** 分类 */
  category: Scalars['String']['output'];
  /** 短链接码 */
  code: Scalars['String']['output'];
  /** 过期时间 */
  expiresAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  /** 长链接 */
  url?: Maybe<Scalars['String']['output']>;
};

export type ShortLinkConnection = {
  __typename?: 'ShortLinkConnection';
  currentPage: Scalars['Int']['output'];
  edges: Array<ShortLinkEdge>;
  pageInfo: PageInfo;
  pageSize: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
  totalPage: Scalars['Int']['output'];
};

export type ShortLinkEdge = {
  __typename?: 'ShortLinkEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<ShortLink>;
};

export enum ShortLinkIdType {
  Code = 'CODE',
  Id = 'ID'
}

export type ShortLinkWhereInput = {
  /** 分类 */
  category?: InputMaybe<Scalars['String']['input']>;
};

export enum SocialProvider {
  /** 微信 */
  WeChat = 'WeChat',
  /** 钉钉 */
  Dingtalk = 'dingtalk'
}

export type Storage = BaseEntity & {
  __typename?: 'Storage';
  /** 创建时间 */
  createdAt?: Maybe<Scalars['Date']['output']>;
  /** 创建人 */
  createdBy?: Maybe<Scalars['ID']['output']>;
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 配置属性 */
  properties?: Maybe<StorageProperties>;
  /** 限额 (单位 MB) */
  quota?: Maybe<Scalars['Number']['output']>;
  /** 文件总数 */
  totalFiles?: Maybe<Scalars['Int']['output']>;
  /** 类型 */
  type: StorageType;
  /** 更新时间 */
  updatedAt?: Maybe<Scalars['Date']['output']>;
  /** 更新人 */
  updatedBy?: Maybe<Scalars['ID']['output']>;
  /** 存储用量 (单位 KB) */
  usage?: Maybe<Scalars['Number']['output']>;
};


export type StorageCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type StorageQuotaArgs = {
  format?: InputMaybe<Scalars['Boolean']['input']>;
};


export type StorageUpdatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type StorageUsageArgs = {
  format?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StorageProperties = {
  id?: Maybe<Scalars['ID']['output']>;
};

export enum StorageType {
  /** FTP文件系统 */
  Ftp = 'FTP',
  /** 上传文件存储 */
  Minio = 'MINIO',
  /** 阿里开放存储服务 */
  Oss = 'OSS'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** 通知 */
  notification?: Maybe<Notification>;
};


export type SubscriptionNotificationArgs = {
  types?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Task = {
  __typename?: 'Task';
  /** 指派人或处理者 */
  assignee?: Maybe<User>;
  /** 任务类别 */
  category?: Maybe<Scalars['String']['output']>;
  /** 评论 */
  comments: Array<TaskComment>;
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  /** 到期日期 */
  dueDate?: Maybe<Scalars['Date']['output']>;
  /** 任务的持续时间 */
  durationInMillis?: Maybe<Scalars['Int']['output']>;
  /** 结束时间 */
  endTime?: Maybe<Scalars['Date']['output']>;
  /** 任务id */
  id?: Maybe<Scalars['String']['output']>;
  /** 任务名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 责任人 */
  owner?: Maybe<User>;
  /** 优先级 */
  priority?: Maybe<Scalars['Int']['output']>;
  /** 开始时间 */
  startTime?: Maybe<Scalars['Date']['output']>;
  /** 任务状态 */
  status?: Maybe<TaskStatus>;
};


export type TaskCommentsArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};

export type TaskComment = {
  __typename?: 'TaskComment';
  /** 评论人 */
  author?: Maybe<Scalars['String']['output']>;
  /** 评论内容 */
  content?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  /** 评论时间 */
  time?: Maybe<Scalars['Date']['output']>;
};

export type TaskConnection = {
  __typename?: 'TaskConnection';
  /** 当前页 */
  currentPage: Scalars['Int']['output'];
  edges: Array<TaskEdge>;
  pageInfo: PageInfo;
  /** 每页显示条数 */
  pageSize: Scalars['Int']['output'];
  /** 总数据条数 */
  totalCount: Scalars['Int']['output'];
  /** 总页数 */
  totalPage: Scalars['Int']['output'];
};

export type TaskEdge = {
  __typename?: 'TaskEdge';
  cursor: Scalars['String']['output'];
  node: Task;
};

/** 任务状态 */
export enum TaskStatus {
  /** 已取消 */
  Canceled = 'CANCELED',
  /** 已完成 */
  Completed = 'COMPLETED',
  /** 创建 */
  Created = 'CREATED',
  /** 进行中 */
  InProgress = 'IN_PROGRESS',
  /** 待处理 */
  Pending = 'PENDING',
  /** 暂停 */
  Suspended = 'SUSPENDED'
}

/** 任务查询条件 */
export type TaskWhereInput = {
  /** 任务类别 */
  category?: InputMaybe<Scalars['String']['input']>;
  /** 已完成 */
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  /** 任务完成时间晚于 */
  completedAfter?: InputMaybe<Scalars['Date']['input']>;
  /** 任务完成时间早于 */
  completedBefore?: InputMaybe<Scalars['Date']['input']>;
  /** 任务完成时间与 */
  completedOn?: InputMaybe<Scalars['Date']['input']>;
  /** 未完成 */
  incomplete?: InputMaybe<Scalars['Boolean']['input']>;
  /** 负责人 */
  owner?: InputMaybe<Scalars['String']['input']>;
  /** 状态 */
  status?: InputMaybe<TaskStatus>;
  /** 未分配 */
  unassigned?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  avatar?: Maybe<Scalars['File']['output']>;
  id: Scalars['ID']['output'];
  introduction?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export enum TemplateType {
  /** 邮件 */
  Email = 'EMAIL',
  /** 消息服务(系统内置消息系统) */
  Ms = 'MS',
  /** 短信 */
  Sms = 'SMS'
}

/** html格式内容 */
export type TextContent = ArticleContent & {
  __typename?: 'TextContent';
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
  type?: Maybe<TextContentType>;
};

export enum TextContentType {
  Html = 'HTML',
  Markdown = 'MARKDOWN'
}

/** 工单 */
export type Ticket = {
  __typename?: 'Ticket';
  /** 处理人 */
  assignee?: Maybe<User>;
  /** 附件 */
  attachments?: Maybe<Array<Scalars['File']['output']>>;
  /** 完成时间 */
  completedAt?: Maybe<Scalars['Date']['output']>;
  /** 报告人联系方式 */
  contactInfo?: Maybe<ContactInformation>;
  /** 创建时间 */
  createdAt: Scalars['Date']['output'];
  /** 客户 */
  customer: Customer;
  /** 工单描述 */
  description?: Maybe<Scalars['String']['output']>;
  /** 工单ID */
  id: Scalars['ID']['output'];
  /** 工单编号 */
  no: Scalars['String']['output'];
  /** 工单优先级 */
  priority: TicketPriority;
  /** 服务评价 */
  rating?: Maybe<TicketRating>;
  /** 工单状态 */
  status: TicketStatus;
  /** 工单状态历史 */
  statusHistory: Array<TicketStatusChange>;
  /** 门店 */
  store?: Maybe<CustomerStore>;
  /** 暂停时间 */
  suspendedAt?: Maybe<Scalars['Date']['output']>;
  /** 工单目标 */
  target?: Maybe<TicketTarget>;
  /** 工单类型 */
  type: TicketType;
  /** 更新时间 */
  updatedAt: Scalars['Date']['output'];
};


/** 工单 */
export type TicketCompletedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


/** 工单 */
export type TicketCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


/** 工单 */
export type TicketSuspendedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


/** 工单 */
export type TicketUpdatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

/** 工单分页查询 */
export type TicketConnection = {
  __typename?: 'TicketConnection';
  /** 当前页 */
  currentPage: Scalars['Int']['output'];
  /** 数据 */
  edges: Array<TicketEdge>;
  /** 分页信息 */
  pageInfo: PageInfo;
  /** 每页大小 */
  pageSize: Scalars['Int']['output'];
  /** 总数 */
  totalCount: Scalars['Int']['output'];
  /** 总页数 */
  totalPage: Scalars['Int']['output'];
};

/** 工单新增信息 */
export type TicketCreateInput = {
  /** 附件 */
  attachments?: InputMaybe<Array<Scalars['File']['input']>>;
  /** 联系方式 */
  contactInfo?: InputMaybe<ContactInformationInput>;
  /** 客户ID */
  customerId: Scalars['ID']['input'];
  /** 工单描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 工单优先级 */
  priority?: InputMaybe<TicketPriority>;
  /** 门店ID */
  storeId?: InputMaybe<Scalars['ID']['input']>;
  /** 工单目标 */
  target?: InputMaybe<TicketTargetInput>;
  /** 工单类型 */
  type: Scalars['ID']['input'];
};

export type TicketEdge = {
  __typename?: 'TicketEdge';
  cursor: Scalars['String']['output'];
  node: Ticket;
};

export enum TicketPriority {
  /** 高 */
  High = 'HIGH',
  /** 低 */
  Low = 'LOW',
  /** 普通 */
  Normal = 'NORMAL',
  /** 紧急 */
  Urgent = 'URGENT'
}

export type TicketRating = {
  __typename?: 'TicketRating';
  /** 评价 */
  comment?: Maybe<Scalars['String']['output']>;
  /** 评价时间 */
  createdAt: Scalars['Date']['output'];
  /** 评分 */
  score: Scalars['Int']['output'];
};


export type TicketRatingCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

/** 工单状态 */
export enum TicketStatus {
  /** 进行中 */
  InProgress = 'IN_PROGRESS',
  /** 新建 */
  New = 'NEW',
  /** 重新开启 */
  Reopen = 'REOPEN',
  /** 已解决 */
  Resolved = 'RESOLVED',
  /** 暂停 */
  Suspended = 'SUSPENDED'
}

export type TicketStatusChange = {
  __typename?: 'TicketStatusChange';
  id: Scalars['ID']['output'];
  /** 变更时间 */
  logTime: Scalars['Date']['output'];
  /** 变更人 */
  loggedBy: User;
  /** 备注 */
  note?: Maybe<Scalars['String']['output']>;
  /** 工单状态 */
  status: TicketStatus;
};


export type TicketStatusChangeLogTimeArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

/** 目标 */
export type TicketTarget = {
  /** 目标 ID */
  id: Scalars['ID']['output'];
  /** 目标名称 */
  name?: Maybe<Scalars['String']['output']>;
};

export type TicketTargetInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TicketTargetType>;
};

export enum TicketTargetType {
  Device = 'DEVICE'
}

export type TicketType = {
  __typename?: 'TicketType';
  defaultPriority: TicketPriority;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** 工单更新信息 */
export type TicketUpdateInput = {
  /** 工单描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 工单优先级 */
  priority?: InputMaybe<TicketPriority>;
};

/** 工单查询条件 */
export type TicketWhereInput = {
  /** 处理人ID */
  assignee?: InputMaybe<Scalars['ID']['input']>;
  /** 客户ID */
  customerId?: InputMaybe<Scalars['ID']['input']>;
  /** 关键字 */
  keyword?: InputMaybe<Scalars['String']['input']>;
  /** 工单编号 */
  no_contains?: InputMaybe<Scalars['String']['input']>;
  /** 工单优先级 */
  priority?: InputMaybe<TicketPriority>;
  /** 工单状态 */
  status?: InputMaybe<TicketStatus>;
  /** 工单状态 */
  status_in?: InputMaybe<Array<TicketStatus>>;
  /** 门店ID */
  storeId?: InputMaybe<Scalars['ID']['input']>;
  /** 工单目标 */
  target?: InputMaybe<TicketTargetInput>;
  /** 工单类型 */
  type?: InputMaybe<Scalars['ID']['input']>;
};

export enum UIdType {
  /** 钉钉ID */
  Dingtalk = 'dingtalk',
  /** 默认ID */
  Id = 'id'
}

export enum UpdateMode {
  Add = 'ADD',
  Remove = 'REMOVE',
  Replace = 'REPLACE'
}

export type UpdateOrganizationProfileUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<AddressInput>;
  logo?: InputMaybe<Scalars['File']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export enum UploadFileNameStrategy {
  Original = 'ORIGINAL',
  Uuid = 'UUID'
}

export type UploadOptions = {
  /** 上传到的文件夹 */
  folder?: InputMaybe<Scalars['String']['input']>;
  /** 分段上传时的 唯一标识 */
  hash?: InputMaybe<Scalars['String']['input']>;
  /** 文件名策略 */
  nameStrategy?: InputMaybe<UploadFileNameStrategy>;
  /** 插件 (预留,暂时没有可用插件) */
  plugins?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** 上传空间 */
  space?: InputMaybe<Scalars['String']['input']>;
  /** 分段上传ID */
  uploadId?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  /** 未过期 */
  accountNonExpired?: Maybe<Scalars['Boolean']['output']>;
  /** 未锁定 */
  accountNonLocked?: Maybe<Scalars['Boolean']['output']>;
  /** 头像 */
  avatar?: Maybe<Scalars['File']['output']>;
  /** 自我介绍 */
  bio?: Maybe<Scalars['String']['output']>;
  /** 生日 */
  birthday?: Maybe<Scalars['Date']['output']>;
  /** 公司 */
  company?: Maybe<Scalars['String']['output']>;
  /** 未失效 */
  credentialsNonExpired?: Maybe<Scalars['Boolean']['output']>;
  /** 邮箱 */
  email?: Maybe<Email>;
  /** 是否启用 */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** OpenIM Token */
  imToken: Scalars['String']['output'];
  /** 最后登录时间 */
  lastLoginTime?: Maybe<Scalars['Date']['output']>;
  /** 位置 */
  location?: Maybe<Scalars['String']['output']>;
  /** 锁定时间 */
  lockTime?: Maybe<Scalars['Date']['output']>;
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 在线状态 */
  onlineStatus: OnlineStatusDetails;
  /** 登录密码 */
  password?: Maybe<Scalars['String']['output']>;
  /** 电话 */
  phone?: Maybe<Phone>;
  /** 性别 */
  sex?: Maybe<Sex>;
  /** 称号 */
  title?: Maybe<Scalars['String']['output']>;
  /** 用户类型 */
  userType?: Maybe<UserType>;
  /** 登录名 */
  username?: Maybe<Scalars['String']['output']>;
};


export type UserAvatarArgs = {
  format?: InputMaybe<FileFormat>;
};


export type UserImTokenArgs = {
  platform: Platform;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  /** 当前页 */
  currentPage: Scalars['Int']['output'];
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  /** 每页显示条数 */
  pageSize: Scalars['Int']['output'];
  /** 总数据条数 */
  totalCount: Scalars['Int']['output'];
  /** 总页数 */
  totalPage: Scalars['Int']['output'];
};

export type UserCreateInput = {
  nickname?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node: User;
};

export type UserSettingsInput = {
  forcePasswordReset?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export enum UserType {
  /** 管理员 */
  Admin = 'ADMIN',
  /** 用户 */
  User = 'USER'
}

export type UserUpdateInput = {
  /** 头像 */
  avatar?: InputMaybe<Scalars['File']['input']>;
  /** 自我介绍 */
  bio?: InputMaybe<Scalars['String']['input']>;
  /** 生日 */
  birthday?: InputMaybe<Scalars['Date']['input']>;
  /** 公司 */
  company?: InputMaybe<Scalars['String']['input']>;
  /** 邮箱 */
  email?: InputMaybe<Scalars['String']['input']>;
  /** 位置 */
  location?: InputMaybe<Scalars['String']['input']>;
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 电话 */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** 性别 */
  sex?: InputMaybe<Sex>;
};

export type UserWhereInput = {
  /** 昵称模糊查询 */
  nickname_like?: InputMaybe<Scalars['String']['input']>;
};

export type VariableDefinition = {
  __typename?: 'VariableDefinition';
  description?: Maybe<Scalars['String']['output']>;
  example?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type VariableDefinitionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  example?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type VideoContent = ArticleContent & {
  __typename?: 'VideoContent';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  video?: Maybe<Scalars['File']['output']>;
};

/** 保修卡 */
export type WarrantyCard = {
  __typename?: 'WarrantyCard';
  /** 保修结束日期 */
  endDate: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  /** 保修政策 */
  policy: WarrantyPolicy;
  /** 保修开始日期 */
  startDate: Scalars['Date']['output'];
  /** 保修卡状态 */
  status?: Maybe<WarrantyStatus>;
};


/** 保修卡 */
export type WarrantyCardEndDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


/** 保修卡 */
export type WarrantyCardStartDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

/** 保修政策 */
export type WarrantyPolicy = {
  __typename?: 'WarrantyPolicy';
  /** 有效期限，以月为单位 */
  duration?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  /** 保修政策名称 */
  name?: Maybe<Scalars['String']['output']>;
};

/** 保修卡状态 */
export enum WarrantyStatus {
  /** 已激活 */
  Active = 'ACTIVE',
  /** 已作废 */
  Canceled = 'CANCELED',
  /** 已过期 */
  Expired = 'EXPIRED',
  /** 未激活 */
  Inactive = 'INACTIVE'
}

export type Website = BaseEntity & {
  __typename?: 'Website';
  /** 对应的应用 */
  application?: Maybe<Application>;
  /** 栏目 */
  channel: ArticleCategory;
  /** 创建时间 */
  createdAt?: Maybe<Scalars['Date']['output']>;
  /** 描述 */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** 图标 */
  logo?: Maybe<Scalars['File']['output']>;
  /** 名称 */
  name: Scalars['String']['output'];
  /** 修改时间 */
  updatedAt?: Maybe<Scalars['Date']['output']>;
};


export type WebsiteCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type WebsiteUpdatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type WebsiteCreateInput = {
  /** 文章栏目 */
  channel?: InputMaybe<Scalars['ID']['input']>;
  /** 描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 图标 */
  logo?: InputMaybe<Scalars['File']['input']>;
  /** 名称 */
  name: Scalars['String']['input'];
};

export type WebsiteWhereInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Weixin = {
  __typename?: 'Weixin';
  id: Scalars['String']['output'];
  jsapi: WeixinJsapi;
  type: WeixinType;
};

export type WeixinJsapi = {
  __typename?: 'WeixinJsapi';
  signature: WeixinSignature;
  ticket: Scalars['String']['output'];
};


export type WeixinJsapiSignatureArgs = {
  url?: InputMaybe<Scalars['String']['input']>;
};

export type WeixinSignature = {
  __typename?: 'WeixinSignature';
  appid: Scalars['String']['output'];
  noncestr: Scalars['String']['output'];
  signature: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

export enum WeixinType {
  Enterprise = 'enterprise',
  Open = 'open',
  Service = 'service',
  Subscription = 'subscription'
}
