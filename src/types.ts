export type Maybe<T> = T | null;
export type Exact<T extends Record<string, unknown>> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  File: any;
  JSON: any;
  Number: any;
  OrderBy: any;
  Upload: any;
};

export type Address = {
  __typename?: 'Address';
  /** 城市 */
  city?: Maybe<Scalars['String']>;
  /** 国家 */
  country?: Maybe<Scalars['String']>;
  /** 区 */
  district?: Maybe<Scalars['String']>;
  /** 邮编 */
  postalCode?: Maybe<Scalars['String']>;
  /** 省 */
  province?: Maybe<Scalars['String']>;
  /** 街道 */
  street?: Maybe<Scalars['String']>;
};

export type Application = {
  __typename?: 'Application';
  /** 客户端 ID */
  clientId?: Maybe<Scalars['String']>;
  /** 客户端密钥 */
  clientSecrets?: Maybe<Maybe<ClientSecret>[]>;
  /** 简介 */
  description?: Maybe<Scalars['String']>;
  /** 集成钉钉 */
  dingtalkIntegration?: Maybe<Scalars['Boolean']>;
  /** 是否启用 */
  enabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  /** 布局路由 */
  layoutRoute?: Maybe<Route>;
  /** 登录路由 */
  loginRoute?: Maybe<Route>;
  /** 应用 LOGO */
  logo?: Maybe<Scalars['String']>;
  /** 菜单 */
  menus?: Maybe<Maybe<Menu>[]>;
  /** 名称 */
  name?: Maybe<Scalars['String']>;
  /** 路由 */
  routes?: Maybe<Maybe<Route>[]>;
  /** 路由命名空间 */
  routespaces?: Maybe<Maybe<Routespace>[]>;
  /** 应用访问地址 */
  url?: Maybe<Scalars['String']>;
};

export type ApplicationLayoutRouteArgs = {
  space?: Maybe<Scalars['ID']>;
};

export type ApplicationLoginRouteArgs = {
  space?: Maybe<Scalars['ID']>;
};

export type ApplicationRoutesArgs = {
  space?: Maybe<Scalars['ID']>;
};

export type ApplicationCreateInput = {
  /** 简介 */
  description?: Maybe<Scalars['String']>;
  /** 名称 */
  name: Scalars['String'];
  /** 路由空间 */
  routespaces?: Maybe<Maybe<Scalars['String']>[]>;
};

export type ApplicationFilter = {
  /** 分类 */
  enabled?: Maybe<Scalars['Boolean']>;
  id_in?: Maybe<Maybe<Scalars['String']>[]>;
};

export enum ApplicationIdType {
  ClientId = 'CLIENT_ID',
  Id = 'ID',
}

export type ApplicationUpdateInput = {
  /** 简介 */
  description?: Maybe<Scalars['String']>;
  /** 是否启用 */
  enabled?: Maybe<Scalars['Boolean']>;
  /** 应用 LOGO */
  logo?: Maybe<Scalars['String']>;
  /** 名称 */
  name?: Maybe<Scalars['String']>;
  /** 组织 */
  organization?: Maybe<Scalars['String']>;
  /** 应用根路径 */
  path?: Maybe<Scalars['String']>;
};

/** 文章 */
export type Article = {
  __typename?: 'Article';
  /** 附件 */
  attachments?: Maybe<Maybe<Scalars['File']>[]>;
  /** 作者 */
  authors?: Maybe<Maybe<ArticleAuthor>[]>;
  /** 分类 */
  category?: Maybe<ArticleCategory>;
  /**
   * 查询评论
   *     comments(filter: CommentFilter, page: Int = 1, pageSize: Int = 15, orderBy: OrderBy): CommentConnection
   *  频道
   */
  channels?: Maybe<Maybe<ArticleChannel>[]>;
  /** 内容 */
  content?: Maybe<Content>;
  /** 图片 */
  cover?: Maybe<Scalars['File']>;
  createdAt?: Maybe<Scalars['Date']>;
  createdBy?: Maybe<Scalars['Int']>;
  /** 推荐位 */
  features?: Maybe<Maybe<ArticleFeature>[]>;
  /** 文章ID */
  id: Scalars['ID'];
  /** 元数据 */
  meta?: Maybe<Meta>;
  /**
   * 统计计数
   *    starrable(starType: ArticleStarType!): Starrable!
   * 权限设置
   */
  permissions?: Maybe<Permission>;
  /** 发布时间 */
  publishedAt?: Maybe<Scalars['Date']>;
  /** 链接 */
  slug?: Maybe<Scalars['String']>;
  /** 状态 */
  status?: Maybe<ArticleStatus>;
  /** 摘要 */
  summary?: Maybe<Scalars['String']>;
  /** 标签 */
  tags?: Maybe<Maybe<ArticleTag>[]>;
  /** 标题 */
  title?: Maybe<Scalars['String']>;
  /** 文章类型 */
  type?: Maybe<ArticleType>;
  updatedAt?: Maybe<Scalars['Date']>;
  updatedBy?: Maybe<Scalars['Int']>;
  /** 有效期限 true 永久 false 短期 */
  validity?: Maybe<Scalars['Boolean']>;
  /** 有效期限 结束时间 */
  validityEndDate?: Maybe<Scalars['Date']>;
  /** 有效期限 开始时间 */
  validityStartDate?: Maybe<Scalars['Date']>;
};

/** 文章 */
export type ArticleContentArgs = {
  format?: Maybe<ContentFormat>;
};

export type ArticleAuthor = {
  __typename?: 'ArticleAuthor';
  /** 员工 */
  employee?: Maybe<Employee>;
  id?: Maybe<Scalars['ID']>;
  /** 名称 */
  name?: Maybe<Scalars['String']>;
};

/** 文章类别 */
export enum ArticleCategory {
  /** 博客 */
  Blog = 'blog',
  /** 圈子 */
  Circle = 'circle',
  /** 新闻 */
  News = 'news',
}

export type ArticleChannel = {
  __typename?: 'ArticleChannel';
  children?: Maybe<Maybe<ArticleChannel>[]>;
  /** 栏目封面图 */
  cover?: Maybe<Scalars['File']>;
  /**
   * 栏目 / 频道 关注
   *    starrable: Starrable
   * 展示模版
   *    displayTemplate: [FieldValue]
   * 权限设置
   *    permissions: Permission
   */
  createdAt?: Maybe<Scalars['Date']>;
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 全称 */
  fullName?: Maybe<Scalars['String']>;
  /** 对应的图标 */
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** 排序 */
  index?: Maybe<Scalars['Int']>;
  /** 层级 */
  level?: Maybe<Scalars['Int']>;
  /** 元数据 */
  meta?: Maybe<Meta>;
  /** 名称 */
  name?: Maybe<Scalars['String']>;
  /** 上级栏目 */
  parent?: Maybe<ArticleChannel>;
  /** 全路径 */
  path?: Maybe<Scalars['String']>;
  /** 编码 */
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
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
export type ArticleChannelCreateInput = {
  /** 栏目封面图 */
  cover?: Maybe<Scalars['File']>;
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 排序 */
  index?: Maybe<Scalars['Int']>;
  /** 元数据 */
  meta?: Maybe<MetaData>;
  /** 栏目名称 */
  name: Scalars['String'];
  /** 上级栏目 */
  parent?: Maybe<Scalars['ID']>;
  /** 地址 */
  slug?: Maybe<Scalars['String']>;
};

export type ArticleChannelFilter = {
  /** 用户创建id */
  founder?: Maybe<Scalars['ID']>;
  /** 名称 */
  name?: Maybe<Scalars['String']>;
  /** 父级 */
  parent?: Maybe<Scalars['ID']>;
  path_startsWith?: Maybe<Scalars['String']>;
  /** 用户id */
  viewer?: Maybe<Scalars['ID']>;
};

export enum ArticleChannelStarType {
  /** 关注 */
  Follow = 'follow',
}

export type ArticleChannelUpdateInput = {
  /** 栏目封面图 */
  cover?: Maybe<Scalars['File']>;
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 排序 */
  index?: Maybe<Scalars['Int']>;
  /**
   * 授予权限
   *    permissions: [PermissionInput]
   * 元数据
   */
  meta?: Maybe<MetaData>;
  /** 栏目名称 */
  name?: Maybe<Scalars['String']>;
  /** 上级栏目 */
  parent?: Maybe<Scalars['ID']>;
  /** 地址 */
  slug?: Maybe<Scalars['String']>;
};

export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  /** 当前页 */
  currentPage: Scalars['Int'];
  edges: ArticleEdge[];
  pageInfo: PageInfo;
  /** 每页显示条数 */
  pageSize: Scalars['Int'];
  /** 总数据条数 */
  totalCount: Scalars['Int'];
  /** 总页数 */
  totalPage: Scalars['Int'];
};

export type ArticleCreateInput = {
  /** 授予权限 */
  access?: Maybe<Maybe<Scalars['String']>[]>;
  /** 附件 */
  attachments?: Maybe<Maybe<Scalars['File']>[]>;
  /** 作者 */
  authors?: Maybe<Maybe<Scalars['ID']>[]>;
  /** 文章类别 */
  category: ArticleCategory;
  /** 文章栏目 */
  channels?: Maybe<Maybe<Scalars['ID']>[]>;
  /** 文章正文 */
  content?: Maybe<ContentInput>;
  /** 文章封面 */
  cover?: Maybe<Scalars['File']>;
  /** 推荐位id */
  features?: Maybe<Maybe<Scalars['String']>[]>;
  /** 元数据 */
  meta?: Maybe<MetaData>;
  /** 发布日期 */
  publishedAt?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** 状态 */
  status?: Maybe<ArticleStatus>;
  /** 摘要 */
  summary?: Maybe<Scalars['String']>;
  /** 文章标签 */
  tags?: Maybe<Maybe<Scalars['ID']>[]>;
  /** 文章标题 */
  title?: Maybe<Scalars['String']>;
  /** 文章类型 */
  type?: Maybe<ArticleType>;
  /** 有效期限 true 永久 false 短期 */
  validity?: Maybe<Scalars['Boolean']>;
  /** 有效期限 结束时间 */
  validityEndDate?: Maybe<Scalars['Date']>;
  /** 有效期限 开始时间 */
  validityStartDate?: Maybe<Scalars['Date']>;
};

export type ArticleEdge = {
  __typename?: 'ArticleEdge';
  cursor?: Maybe<Scalars['String']>;
  node: Article;
};

export type ArticleFeature = {
  __typename?: 'ArticleFeature';
  /** 编码 */
  code?: Maybe<Scalars['String']>;
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** 名称 */
  name?: Maybe<Scalars['String']>;
  /** 是否启用流程 */
  needReview?: Maybe<Scalars['Boolean']>;
};

export type ArticleFeatureCreateInput = {
  /** 编码 */
  code?: Maybe<Scalars['String']>;
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 名称 */
  name: Scalars['String'];
};

export type ArticleFeatureFilter = {
  /** 名称 */
  name?: Maybe<Scalars['String']>;
};

export type ArticleFeatureUpdateInput = {
  /** 编码 */
  code?: Maybe<Scalars['String']>;
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 名称 */
  name: Scalars['String'];
};

export type ArticleFilter = {
  /** 关键字 */
  Keyword?: Maybe<Scalars['String']>;
  /** 复杂查询支持 */
  and?: Maybe<Maybe<ArticleFilter>[]>;
  /** 文章类型 */
  category?: Maybe<ArticleCategory>;
  /** 频道 */
  channel?: Maybe<Scalars['ID']>;
  /** 多个栏目 */
  channel_in?: Maybe<Maybe<Scalars['ID']>[]>;
  /** 栏目为空 (没有栏目的文章) */
  channels_isEmpty?: Maybe<Scalars['Boolean']>;
  /** 发布人 */
  createdBy?: Maybe<Scalars['String']>;
  /** 用户创建id */
  founder?: Maybe<Scalars['ID']>;
  /** 复杂查询支持 */
  or?: Maybe<Maybe<ArticleFilter>[]>;
  /** 发布时间 */
  publishedAt?: Maybe<Scalars['String']>;
  /** 发布状态 */
  status?: Maybe<ArticleStatus>;
  /** 标签 */
  tags?: Maybe<Maybe<Scalars['ID']>[]>;
  /** 有效期限 true 过滤以过有效期限的文章 */
  validity?: Maybe<Scalars['Boolean']>;
  /** 用户id */
  viewer?: Maybe<Scalars['ID']>;
};

export enum ArticleStarType {
  /** 点击数 */
  Clicks = 'clicks',
  /** 收藏 */
  Favorites = 'favorites',
  /** 点赞数 */
  Likes = 'likes',
  /** 阅读数 */
  Reads = 'reads',
}

export enum ArticleStatus {
  /** 草稿 */
  Draft = 'DRAFT',
  /** 已发布 */
  Published = 'PUBLISHED',
  /** 计划 */
  Scheduled = 'SCHEDULED',
}

/** 支持层级，亦可栏目使用 */
export type ArticleTag = {
  __typename?: 'ArticleTag';
  createdAt?: Maybe<Scalars['Date']>;
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** 排序 */
  index?: Maybe<Scalars['Int']>;
  meta?: Maybe<Meta>;
  /** 名称 */
  name?: Maybe<Scalars['String']>;
  /** 全路径 */
  path?: Maybe<Scalars['String']>;
  /** 短标识 */
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type ArticleTagCreateInput = {
  /** 标签图 */
  cover?: Maybe<Scalars['File']>;
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 排序 */
  index?: Maybe<Scalars['Int']>;
  /** 标签名称 */
  name: Scalars['String'];
  /** 唯一编码 */
  slug?: Maybe<Scalars['String']>;
};

export type ArticleTagUpdateInput = {
  /** 标签图 */
  cover?: Maybe<Scalars['File']>;
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 排序 */
  index?: Maybe<Scalars['Int']>;
  /** 标签名称 */
  name: Scalars['String'];
  /** 唯一编码 */
  slug?: Maybe<Scalars['String']>;
};

export enum ArticleType {
  /** 文件文章 */
  File = 'file',
  /** 链接文章 */
  Link = 'link',
  /** 图片 */
  Picture = 'picture',
  /** 普通文章 */
  Text = 'text',
  /** 视频 */
  Video = 'video',
}

export type ArticleUpdateInput = {
  /** 附件 */
  attachments?: Maybe<Maybe<Scalars['File']>[]>;
  /** 作者 */
  authors?: Maybe<Maybe<Scalars['ID']>[]>;
  /** 文章栏目 */
  channels?: Maybe<Maybe<Scalars['ID']>[]>;
  /** 文章正文 */
  content?: Maybe<ContentInput>;
  /** 文章封面 */
  cover?: Maybe<Scalars['File']>;
  /** 推荐位id */
  features?: Maybe<Maybe<Scalars['String']>[]>;
  /** 元数据 */
  meta?: Maybe<MetaData>;
  /** 授予权限 */
  permissions?: Maybe<Maybe<PermissionInput>[]>;
  /** 发布日期 */
  publishedAt?: Maybe<Scalars['String']>;
  /** 文章URL 必须唯一 */
  slug?: Maybe<Scalars['String']>;
  /** 文章发布状态 */
  status?: Maybe<ArticleStatus>;
  /** 摘要 */
  summary?: Maybe<Scalars['String']>;
  /** 文章标签 */
  tags?: Maybe<Maybe<Scalars['ID']>[]>;
  /** 文章标题 */
  title?: Maybe<Scalars['String']>;
  /** 文章类型 */
  type?: Maybe<ArticleType>;
  /** 有效期限 true 永久 false 短期 */
  validity?: Maybe<Scalars['Boolean']>;
  /** 有效期限 结束时间 */
  validityEndDate?: Maybe<Scalars['Date']>;
  /** 有效期限 开始时间 */
  validityStartDate?: Maybe<Scalars['Date']>;
};

export type Banner = {
  __typename?: 'Banner';
  /** 媒介 */
  background?: Maybe<Scalars['File']>;
  /** 媒体类型 */
  backgroundType?: Maybe<BannerBackgroundType>;
  /** 跳转按钮文本 */
  buttonText?: Maybe<Scalars['String']>;
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 是否启用 */
  enabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  /** 名称 */
  name?: Maybe<Scalars['String']>;
  /** 副标题 */
  subtitle?: Maybe<Scalars['String']>;
  /** 标题 */
  title?: Maybe<Scalars['String']>;
  /** 跳转地址 */
  url?: Maybe<Scalars['String']>;
};

export type BannerBackgroundArgs = {
  format?: Maybe<FileFormat>;
};

export enum BannerBackgroundType {
  /** 图片 */
  Image = 'IMAGE',
  /** 视频 */
  Video = 'VIDEO',
}

export type BannerCreateInput = {
  /** 媒介 */
  background?: Maybe<Scalars['File']>;
  /** 媒体类型 */
  backgroundType?: Maybe<BannerBackgroundType>;
  /** 跳转按钮文本 */
  buttonText?: Maybe<Scalars['String']>;
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 是否启用 */
  enabled?: Maybe<Scalars['Boolean']>;
  /** 名称 */
  name?: Maybe<Scalars['String']>;
  /** 副标题 */
  subtitle?: Maybe<Scalars['String']>;
  /** 标题 */
  title?: Maybe<Scalars['String']>;
  /** 跳转地址 */
  url?: Maybe<Scalars['String']>;
};

export type BannerFilter = {
  /** 是否启用 */
  enabled?: Maybe<Scalars['Boolean']>;
  /** ID 查询 */
  id_in?: Maybe<Maybe<Scalars['ID']>[]>;
};

export type BannerUpdateInput = {
  /** 媒介 */
  background?: Maybe<Scalars['File']>;
  /** 媒体类型 */
  backgroundType?: Maybe<BannerBackgroundType>;
  /** 跳转按钮文本 */
  buttonText?: Maybe<Scalars['String']>;
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 是否启用 */
  enabled?: Maybe<Scalars['Boolean']>;
  /** 名称 */
  name?: Maybe<Scalars['String']>;
  /** 副标题 */
  subtitle?: Maybe<Scalars['String']>;
  /** 标题 */
  title?: Maybe<Scalars['String']>;
  /** 跳转地址 */
  url?: Maybe<Scalars['String']>;
};

export type BaseEntity = {
  /** 创建时间 */
  createdAt?: Maybe<Scalars['Date']>;
  /** 创建人 */
  createdBy?: Maybe<Scalars['ID']>;
  /** 更新时间 */
  updatedAt?: Maybe<Scalars['Date']>;
  /** 更新人 */
  updatedBy?: Maybe<Scalars['ID']>;
};

export type BaseEntityCreatedAtArgs = {
  format?: Maybe<Scalars['String']>;
};

export type BaseEntityUpdatedAtArgs = {
  format?: Maybe<Scalars['String']>;
};

export type ClientSecret = {
  __typename?: 'ClientSecret';
  id?: Maybe<Scalars['ID']>;
  secret?: Maybe<Scalars['String']>;
};

export type Consumer = {
  __typename?: 'Consumer';
  id?: Maybe<Scalars['ID']>;
};

/** 文章内容 */
export type Content = {
  id?: Maybe<Scalars['ID']>;
};

export enum ContentFormat {
  Html = 'html',
}

export type ContentInput = {
  /** 文本 */
  text?: Maybe<Scalars['String']>;
  /** 正文类型 */
  type?: Maybe<ContentType>;
};

export enum ContentType {
  Html = 'HTML',
  Markdown = 'MARKDOWN',
}

export type CurrentUser = {
  __typename?: 'CurrentUser';
  /** 权限 */
  authorities?: Maybe<Maybe<Scalars['String']>[]>;
  /** 头像 */
  avatar?: Maybe<Scalars['String']>;
  /** 邮箱 */
  email?: Maybe<Scalars['String']>;
  /** 名称 */
  name?: Maybe<Scalars['String']>;
  /** 电话 */
  phone?: Maybe<Scalars['String']>;
  /** 签名 */
  signature?: Maybe<Scalars['String']>;
  /** 称号 */
  title?: Maybe<Scalars['String']>;
  /** 用户类型 */
  type?: Maybe<Scalars['String']>;
  /** 用户ID */
  uid?: Maybe<Scalars['String']>;
};

export type CurrentUserUidArgs = {
  type?: Maybe<UIdType>;
};

export type Department = {
  __typename?: 'Department';
  /** 下属部门 */
  children?: Maybe<Maybe<Department>[]>;
  /** 部门描述信息 */
  description?: Maybe<Scalars['String']>;
  /** 部门全称 格式如: 销售管理中心.售前支持 */
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** 部门包含的职务 */
  jobs?: Maybe<Maybe<Job>[]>;
  /** 部门名称 */
  name?: Maybe<Scalars['String']>;
  /** 组织机构 */
  organization?: Maybe<Organization>;
  /** 上级机构 */
  parent?: Maybe<Department>;
  /** 所有父级部门的集合 */
  parents?: Maybe<Maybe<Department>[]>;
  /** 包含所有父级节点的ID */
  path?: Maybe<Scalars['String']>;
  /**
   *    # 被授予的权限
   *    permissions(key: String): [Permission]
   * 获取权限对应的用户
   *    permissionToUser(key: String): User
   * 部门包含的职位
   */
  positions?: Maybe<Maybe<Position>[]>;
  /** 部门编码 */
  sn?: Maybe<Scalars['String']>;
  /** 排序字段 */
  sort?: Maybe<Scalars['Int']>;
  /**
   * 人员电子签名
   * autographs: [AutographPng]
   * 部门类型
   */
  type?: Maybe<DepartmentType>;
};

export type DepartmentIdArgs = {
  type?: Maybe<DepartmentIdType>;
};

export enum DepartmentIdType {
  Id = 'ID',
}

/** 部门类型 */
export type DepartmentType = {
  __typename?: 'DepartmentType';
  /**
   * 是否支持多部门
   *    multiSectoral: Boolean
   * 最大兼岗人数
   */
  andPost?: Maybe<Scalars['Int']>;
  /** 编码 */
  code?: Maybe<Scalars['String']>;
  /** 部门类型ID */
  id?: Maybe<Scalars['ID']>;
  /** 部门类型名称 */
  name?: Maybe<Scalars['String']>;
  /** 部门组织 */
  organization?: Maybe<Organization>;
};

export type Email = {
  __typename?: 'Email';
  address?: Maybe<Scalars['String']>;
  status?: Maybe<EmailStatus>;
};

export enum EmailStatus {
  Unverified = 'UNVERIFIED',
  Verified = 'VERIFIED',
}

/** 组织•员工 */
export type Employee = {
  __typename?: 'Employee';
  /** 通过 Label 获取地址 */
  address?: Maybe<Address>;
  /** 全部地址 */
  addresses?: Maybe<Maybe<EmployeeAddress>[]>;
  /** 头像 */
  avatar?: Maybe<Scalars['File']>;
  /** 生日 */
  birthday?: Maybe<Scalars['String']>;
  /** 所属部门 */
  departments?: Maybe<Maybe<Department>[]>;
  /** 通过 Label 获取手机 */
  email?: Maybe<Email>;
  /** 全部邮箱 */
  emails?: Maybe<Maybe<EmployeeEmail>[]>;
  /** 用户所属用户组 */
  groups?: Maybe<Maybe<EmployeeGroup>[]>;
  id?: Maybe<Scalars['ID']>;
  /** 工号 */
  jobNumber?: Maybe<Scalars['String']>;
  links?: Maybe<Maybe<EmployeeLink>[]>;
  /** 名称 */
  name?: Maybe<Scalars['String']>;
  /** 通过 Label 获取手机 */
  phone?: Maybe<Phone>;
  /** 全部电话 */
  phones?: Maybe<Maybe<EmployeePhone>[]>;
  /** 员工的职位 */
  positions?: Maybe<Maybe<Position>[]>;
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
  label?: Maybe<Scalars['String']>;
};

/** 组织•员工 */
export type EmployeeDepartmentsArgs = {
  organization?: Maybe<Scalars['ID']>;
};

/** 组织•员工 */
export type EmployeeEmailArgs = {
  label?: Maybe<Scalars['String']>;
};

/** 组织•员工 */
export type EmployeeIdArgs = {
  type?: Maybe<EmployeeIdType>;
};

/** 组织•员工 */
export type EmployeePhoneArgs = {
  label?: Maybe<Scalars['String']>;
};

/** 组织•员工 */
export type EmployeePositionsArgs = {
  departmentId?: Maybe<Scalars['ID']>;
  organization?: Maybe<Scalars['ID']>;
};

export type EmployeeAddress = {
  __typename?: 'EmployeeAddress';
  address?: Maybe<Address>;
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['Boolean']>;
};

export type EmployeeEmail = {
  __typename?: 'EmployeeEmail';
  email?: Maybe<Email>;
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['Boolean']>;
};

export type EmployeeGroup = {
  __typename?: 'EmployeeGroup';
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 是否启用 */
  enabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  /** 群组名称 */
  name?: Maybe<Scalars['String']>;
  /**
   *  群组下的人员数
   *     employeeCount: Int
   * 用户组范围
   */
  scope?: Maybe<EmployeeGroupScope>;
};

export type EmployeeGroupScope = {
  __typename?: 'EmployeeGroupScope';
  /** 用户所属用户组 */
  groups?: Maybe<Maybe<EmployeeGroup>[]>;
  /** 范围ID */
  id?: Maybe<Scalars['String']>;
  /** 范围名称 */
  name?: Maybe<Scalars['String']>;
  /** 所属组织 */
  organization?: Maybe<Organization>;
};

export enum EmployeeIdType {
  /** 员工 ID */
  Id = 'ID',
  /** 员工工号 */
  JobNumber = 'JOB_NUMBER',
}

export type EmployeeLink = {
  __typename?: 'EmployeeLink';
  employee?: Maybe<Employee>;
  linkId?: Maybe<Scalars['String']>;
};

export type EmployeePhone = {
  __typename?: 'EmployeePhone';
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  phone?: Maybe<Phone>;
  primary?: Maybe<Scalars['Boolean']>;
};

export enum EndpointIdType {
  Code = 'code',
  Id = 'id',
}

/** 文件自定在格式 */
export enum FileFormat {
  /** 仅支持图片 */
  Base64 = 'base64',
  /** 只返回 PATH */
  Path = 'path',
  /** 自动添加上域名 */
  Url = 'url',
}

export type FileObject = {
  __typename?: 'FileObject';
  id: Scalars['ID'];
  /** 是否是文件夹 */
  isDirectory: Scalars['Boolean'];
  /** 更新时间 */
  lastModified?: Maybe<Scalars['Date']>;
  /** 文件 MIME 类型 */
  mimeType?: Maybe<Scalars['String']>;
  /** 文件名 */
  name: Scalars['String'];
  /** 所有父级 */
  parents?: Maybe<FileObject[]>;
  /** 路径 */
  path: Scalars['String'];
  /** 文件大小 单位：bytes */
  size?: Maybe<Scalars['Number']>;
};

export type FileObjectLastModifiedArgs = {
  format?: Maybe<Scalars['String']>;
};

export type FileObjectSizeArgs = {
  format?: Maybe<Scalars['Boolean']>;
};

export type Geolocation = {
  __typename?: 'Geolocation';
  /** 城市 */
  city?: Maybe<Scalars['String']>;
  /** 国家 */
  country?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** IP 地址 */
  internetProtocolAddress?: Maybe<Scalars['String']>;
  /** 省 / 州 */
  state?: Maybe<Scalars['String']>;
};

export type GraphQlSchema = {
  __typename?: 'GraphQLSchema';
  endpoints?: Maybe<Maybe<ModelField>[]>;
  groups?: Maybe<Maybe<ModelGroup>[]>;
  id?: Maybe<Scalars['ID']>;
  mutations?: Maybe<Maybe<ModelField>[]>;
  name?: Maybe<Scalars['String']>;
  queries?: Maybe<Maybe<ModelField>[]>;
  types?: Maybe<Maybe<Model>[]>;
  ungrouped?: Maybe<Maybe<ModelGroupItemResource>[]>;
};

/** html格式内容 */
export type HtmlContent = Content & {
  __typename?: 'HtmlContent';
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
};

export type Icon = {
  __typename?: 'Icon';
  content?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** 库 ID */
  libraryId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  tags?: Maybe<Maybe<Scalars['String']>[]>;
  unicode?: Maybe<Scalars['String']>;
};

export type IconCreateInput = {
  /** 正文 */
  content?: Maybe<Scalars['String']>;
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 库 ID */
  libraryId: Scalars['ID'];
  /** 名称 */
  name?: Maybe<Scalars['String']>;
  /** 标签 */
  tags?: Maybe<Maybe<Scalars['String']>[]>;
  /** 编码 */
  unicode?: Maybe<Scalars['String']>;
};

export type IconFilter = {
  id_in?: Maybe<Maybe<Scalars['ID']>[]>;
  library?: Maybe<Scalars['ID']>;
};

export type IconInput = {
  /** 正文 */
  content: Scalars['String'];
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 名称 */
  name?: Maybe<Scalars['String']>;
  /** 标签 */
  tags?: Maybe<Maybe<Scalars['String']>[]>;
  /** 编码 */
  unicode?: Maybe<Scalars['String']>;
};

export type IconLibrary = Library & {
  __typename?: 'IconLibrary';
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 图标 */
  icons?: Maybe<Maybe<Icon>[]>;
  id?: Maybe<Scalars['ID']>;
  /** 名称 */
  name?: Maybe<Scalars['String']>;
  /** 数量 */
  total?: Maybe<Scalars['Int']>;
};

export type IconLibraryFilter = {
  id_in?: Maybe<Maybe<Scalars['ID']>[]>;
};

export type IconUpdateInput = {
  /** 正文 */
  content?: Maybe<Scalars['String']>;
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 库 ID */
  libraryId: Scalars['ID'];
  /** 名称 */
  name?: Maybe<Scalars['String']>;
  /** 标签 */
  tags?: Maybe<Maybe<Scalars['String']>[]>;
  /** 编码 */
  unicode?: Maybe<Scalars['String']>;
};

/** 职务 */
export type Job = {
  __typename?: 'Job';
  /** 职务描述信息 */
  description?: Maybe<Scalars['String']>;
  /** 职务 */
  id?: Maybe<Scalars['ID']>;
  /** 职务名称 */
  name?: Maybe<Scalars['String']>;
};

/** 布局设置 */
export type LayoutSettings = {
  __typename?: 'LayoutSettings';
  pure?: Maybe<Scalars['Boolean']>;
};

export type Library = {
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** 名称 */
  name?: Maybe<Scalars['String']>;
};

export type LibraryCreateInput = {
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  type: LibraryType;
};

export enum LibraryType {
  /** 组件 */
  Component = 'COMPONENT',
  /** 设计系统 */
  DesignSystem = 'DESIGN_SYSTEM',
  /** 图标 */
  Icons = 'ICONS',
}

export type LibraryUpdateInput = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type LoginOptions = {
  /** 连接社交平台 */
  connected?: Maybe<Scalars['Boolean']>;
  /** 社交平台 */
  provider?: Maybe<SocialProvider>;
  /** 用户社交平台 USER_ID */
  snser?: Maybe<Scalars['String']>;
};

export enum LoginType {
  /** 密码登录 */
  Password = 'password',
}

/** 登录用户对象 */
export type LoginUser = {
  __typename?: 'LoginUser';
  /** 权限 -> authorities */
  authorities?: Maybe<Maybe<Scalars['String']>[]>;
  /** 头像 */
  avatar?: Maybe<Scalars['String']>;
  /** 邮箱 */
  email?: Maybe<Scalars['String']>;
  /** 组名 */
  group?: Maybe<Scalars['String']>;
  /** 名称 */
  name?: Maybe<Scalars['String']>;
  /** 电话 */
  phone?: Maybe<Scalars['String']>;
  /** 签名 */
  signature?: Maybe<Scalars['String']>;
  /** 称号 */
  title?: Maybe<Scalars['String']>;
  /** 令牌 */
  token?: Maybe<Scalars['String']>;
  /** 用户类型 */
  type?: Maybe<Scalars['String']>;
  /** 用户ID */
  uid?: Maybe<Scalars['String']>;
};

export type Menu = {
  __typename?: 'Menu';
  /** 路由对应的应用 */
  application?: Maybe<Application>;
  /** 需要提供的权限 */
  authority?: Maybe<Maybe<Scalars['String']>[]>;
  /** 必须登录 */
  authorized?: Maybe<Scalars['Boolean']>;
  /** 子菜单 */
  children?: Maybe<Maybe<Menu>[]>;
  /** 组件 */
  component?: Maybe<NuwaComponent>;
  /** 是否启用 */
  enabled?: Maybe<Scalars['Boolean']>;
  /** 在面包屑中隐藏菜单 */
  hideInBreadcrumb?: Maybe<Scalars['Boolean']>;
  /** 对应的图标 */
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** 序号 */
  index?: Maybe<Scalars['Int']>;
  /** 菜单层级 */
  level?: Maybe<Scalars['Int']>;
  /** 菜单名称 */
  name?: Maybe<Scalars['String']>;
  /** 父菜单 */
  parent?: Maybe<Menu>;
  /** 树路径 */
  path?: Maybe<Scalars['String']>;
  /** 路由类型 */
  type?: Maybe<MenuType>;
};

export type MenuCreateInput = {
  /** 应用 */
  application?: Maybe<Scalars['ID']>;
  /** 需要提供的权限 */
  authority?: Maybe<Maybe<Scalars['String']>[]>;
  /** 必须登录 */
  authorized?: Maybe<Scalars['Boolean']>;
  /** 对应的图标 */
  icon?: Maybe<Scalars['String']>;
  /** 默认位置 */
  index?: Maybe<Scalars['Int']>;
  /** 名称 */
  name: Scalars['String'];
  /** 父路由 */
  parentMenu?: Maybe<Scalars['ID']>;
  /** 路径 */
  path?: Maybe<Scalars['String']>;
  /** 菜单类型 */
  type?: Maybe<MenuType>;
};

export enum MenuType {
  /** 菜单 */
  Menu = 'MENU',
  /** 脚本 */
  Script = 'SCRIPT',
  /** 章节 */
  Section = 'SECTION',
  /** 链接地址 */
  Url = 'URL',
}

export type MenuUpdateInput = {
  /** 需要提供的权限 */
  authority?: Maybe<Maybe<Scalars['String']>[]>;
  /** 必须登录 */
  authorized?: Maybe<Scalars['Boolean']>;
  /** 对应的图标 */
  icon?: Maybe<Scalars['String']>;
  /** 默认位置 */
  index?: Maybe<Scalars['Int']>;
  /** 名称 */
  name: Scalars['String'];
  /** 父路由 */
  parentMenu?: Maybe<Scalars['ID']>;
  /** 路径 */
  path?: Maybe<Scalars['String']>;
  /** 菜单类型 */
  type?: Maybe<MenuType>;
};

export type Meta = {
  __typename?: 'Meta';
  description?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['File']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MetaData = {
  description?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['File']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MinIoProperties = StorageProperties & {
  __typename?: 'MinIOProperties';
  accessKeyId?: Maybe<Scalars['String']>;
  accessKeySecret?: Maybe<Scalars['String']>;
  bucketName?: Maybe<Scalars['String']>;
  endpoint?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  useSSL?: Maybe<Scalars['Boolean']>;
};

export type Model = {
  __typename?: 'Model';
  /** 编码 */
  code?: Maybe<Scalars['String']>;
  /** 创建时间 */
  createdAt?: Maybe<Scalars['Date']>;
  /** 创建人 */
  createdBy?: Maybe<Scalars['String']>;
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 字段 */
  fields?: Maybe<Maybe<ModelField>[]>;
  id?: Maybe<Scalars['ID']>;
  /** 名称 */
  name?: Maybe<Scalars['String']>;
  /** 类型 */
  type?: Maybe<ModelType>;
  /** 修改时间 */
  updatedAt?: Maybe<Scalars['Date']>;
  /** 修改人 */
  updatedBy?: Maybe<Scalars['String']>;
};

export type ModelConnection = {
  __typename?: 'ModelConnection';
  /** 当前页 */
  currentPage?: Maybe<Scalars['Int']>;
  edges?: Maybe<Maybe<ModelEdge>[]>;
  /** 每页显示条数 */
  pageSize?: Maybe<Scalars['Int']>;
  /** 总数据条数 */
  totalCount?: Maybe<Scalars['Int']>;
  /** 总页数 */
  totalPage?: Maybe<Scalars['Int']>;
};

export type ModelCreateInput = {
  /** 编码 */
  code?: Maybe<Scalars['String']>;
  /** 特征 */
  features?: Maybe<Maybe<Scalars['String']>[]>;
  /** 字段 */
  fields?: Maybe<Maybe<ModelFieldCreateInput>[]>;
  /** 名称 */
  name?: Maybe<Scalars['String']>;
};

export type ModelEdge = {
  __typename?: 'ModelEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Model>;
};

export type ModelField = {
  __typename?: 'ModelField';
  /** 编码 */
  code?: Maybe<Scalars['String']>;
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** 存储值为列表 */
  list?: Maybe<Scalars['Boolean']>;
  /** 所属实体 */
  model?: Maybe<Model>;
  /** 名称 */
  name?: Maybe<Scalars['String']>;
  /** 是否主键 */
  primaryKey?: Maybe<Scalars['Boolean']>;
  /** 必填 */
  required?: Maybe<Scalars['Boolean']>;
  /** 是否为系统字段 */
  system?: Maybe<Scalars['Boolean']>;
  /** 类型 */
  type?: Maybe<Model>;
  /** 是否唯一 */
  unique?: Maybe<Scalars['Boolean']>;
};

export type ModelFieldCreateInput = {
  /** 编码 */
  code?: Maybe<Scalars['String']>;
  /** 名称 */
  name?: Maybe<Scalars['String']>;
  /** 类型 */
  type?: Maybe<Scalars['String']>;
};

export type ModelFilter = {
  AND?: Maybe<Maybe<ModelFilter>[]>;
  NOT?: Maybe<Maybe<ModelFilter>[]>;
  OR?: Maybe<Maybe<ModelFilter>[]>;
  code?: Maybe<Scalars['String']>;
  code_contains?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  type?: Maybe<ModelType>;
  type_in?: Maybe<Maybe<ModelType>[]>;
  type_not?: Maybe<ModelType>;
  type_notIn?: Maybe<Maybe<ModelType>[]>;
};

export type ModelGroup = {
  __typename?: 'ModelGroup';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  items?: Maybe<Maybe<ModelGroupItemResource>[]>;
  name?: Maybe<Scalars['String']>;
};

export type ModelGroupItemResource = {
  __typename?: 'ModelGroupItemResource';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  resourceId?: Maybe<Scalars['Int']>;
  resourceType?: Maybe<Scalars['String']>;
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
  Scalar = 'Scalar',
}

export enum ModelIdType {
  Code = 'code',
  Id = 'id',
}

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
  Union = 'UNION',
}

export type Mutation = {
  __typename?: 'Mutation';
  /** 创建一个应用 */
  createApplication?: Maybe<Application>;
  /** 新增文章 */
  createArticle?: Maybe<Article>;
  /** 添加栏目 */
  createArticleChannel?: Maybe<ArticleChannel>;
  /** 新增推荐位 */
  createArticleFeature?: Maybe<ArticleFeature>;
  /** 添加标签 */
  createArticleTag?: Maybe<ArticleTag>;
  /** 创建 Banner */
  createBanner?: Maybe<Banner>;
  /** 添加图标 */
  createIcon?: Maybe<Icon>;
  /** 添加库 */
  createLibrary?: Maybe<Library>;
  /** 创建菜单 */
  createMenu?: Maybe<Menu>;
  /** 新增实体 */
  createModel?: Maybe<Model>;
  /** 创建个人访问令牌 */
  createPersonalAccessToken?: Maybe<PersonalAccessToken>;
  /** 创建路由 */
  createRoute?: Maybe<Route>;
  /** 删除应用 */
  deleteApplication?: Maybe<Scalars['Boolean']>;
  /** 删除文章 */
  deleteArticle?: Maybe<Scalars['Boolean']>;
  /** 删除栏目 */
  deleteArticleChannel?: Maybe<Scalars['Boolean']>;
  /** 删除推荐位 */
  deleteArticleFeature?: Maybe<Scalars['Boolean']>;
  /** 删除 Banner */
  deleteBanner?: Maybe<Scalars['Boolean']>;
  /** 删除库 */
  deleteLibrary?: Maybe<Scalars['Boolean']>;
  /** 批量删除 */
  deleteManyArticles?: Maybe<Scalars['Int']>;
  /** 删除菜单 */
  deleteMenu?: Maybe<Scalars['Boolean']>;
  /** 删除实体 */
  deleteModel?: Maybe<Scalars['Int']>;
  /** 删除路由 */
  deleteRoute?: Maybe<Scalars['Boolean']>;
  /** 导入图标 */
  importIcons?: Maybe<Maybe<Icon>[]>;
  /** 系统•登录 */
  login?: Maybe<LoginUser>;
  /** 移动菜单 */
  moveMenu?: Maybe<Menu>;
  /** 移动路由 */
  moveRoute?: Maybe<Route>;
  /** 发布文章 */
  publishArticle?: Maybe<Scalars['Boolean']>;
  /** 删除标签 */
  removeArticleTag?: Maybe<Scalars['Boolean']>;
  /** 撤销个人 Token */
  revokePersonalAccessToken?: Maybe<Scalars['Boolean']>;
  /** 撤销 Session */
  revokeSession?: Maybe<Scalars['Boolean']>;
  /** 撤销 Token */
  revokeToken?: Maybe<Scalars['Boolean']>;
  /** 重建索引 */
  storageReindex?: Maybe<Scalars['Boolean']>;
  /** 更新应用信息 */
  updateApplication?: Maybe<Application>;
  /** 修改文章 */
  updateArticle?: Maybe<Article>;
  /** 编辑栏目 */
  updateArticleChannel?: Maybe<ArticleChannel>;
  /** 更新推荐位 */
  updateArticleFeature?: Maybe<ArticleFeature>;
  /** 更新标签 */
  updateArticleTag?: Maybe<ArticleTag>;
  /** 更新 Banner */
  updateBanner?: Maybe<Banner>;
  /** 更新图标 */
  updateIcon?: Maybe<Icon>;
  /** 更新库 */
  updateLibrary?: Maybe<Library>;
  /** 更新菜单 */
  updateMenu?: Maybe<Menu>;
  /** 修改实体 */
  updateModel?: Maybe<Model>;
  /** 更新路由信息 */
  updateRoute?: Maybe<Route>;
  /** 上传附件 */
  upload?: Maybe<FileObject>;
};

export type MutationCreateApplicationArgs = {
  input: ApplicationCreateInput;
};

export type MutationCreateArticleArgs = {
  input: ArticleCreateInput;
};

export type MutationCreateArticleChannelArgs = {
  input: ArticleChannelCreateInput;
};

export type MutationCreateArticleFeatureArgs = {
  input?: Maybe<ArticleFeatureCreateInput>;
};

export type MutationCreateArticleTagArgs = {
  input?: Maybe<ArticleTagCreateInput>;
};

export type MutationCreateBannerArgs = {
  input: BannerCreateInput;
};

export type MutationCreateIconArgs = {
  input: IconCreateInput;
};

export type MutationCreateLibraryArgs = {
  input: LibraryCreateInput;
};

export type MutationCreateMenuArgs = {
  input: MenuCreateInput;
};

export type MutationCreateModelArgs = {
  input: ModelCreateInput;
};

export type MutationCreatePersonalAccessTokenArgs = {
  clientId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type MutationCreateRouteArgs = {
  input: RouteCreateInput;
};

export type MutationDeleteApplicationArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteArticleArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteArticleChannelArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteArticleFeatureArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteBannerArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteLibraryArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteManyArticlesArgs = {
  ids: Maybe<Scalars['ID']>[];
};

export type MutationDeleteMenuArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteModelArgs = {
  id: Maybe<Scalars['ID']>[];
};

export type MutationDeleteRouteArgs = {
  id: Scalars['ID'];
};

export type MutationImportIconsArgs = {
  icons: Maybe<IconInput>[];
  library: Scalars['ID'];
};

export type MutationLoginArgs = {
  authCode?: Maybe<Scalars['String']>;
  clientId: Scalars['String'];
  loginType?: Maybe<LoginType>;
  options?: Maybe<LoginOptions>;
  password?: Maybe<Scalars['String']>;
  tmpAuthCode?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type MutationMoveMenuArgs = {
  id: Scalars['ID'];
  location: Scalars['Int'];
  parentMenu?: Maybe<Scalars['ID']>;
};

export type MutationMoveRouteArgs = {
  id: Scalars['ID'];
  location: Scalars['Int'];
  parentRoute?: Maybe<Scalars['ID']>;
};

export type MutationPublishArticleArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type MutationRemoveArticleTagArgs = {
  id: Scalars['ID'];
};

export type MutationRevokePersonalAccessTokenArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type MutationRevokeSessionArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type MutationRevokeTokenArgs = {
  token?: Maybe<Scalars['String']>;
};

export type MutationStorageReindexArgs = {
  id: Scalars['ID'];
};

export type MutationUpdateApplicationArgs = {
  id: Scalars['ID'];
  input: ApplicationUpdateInput;
  merge?: Maybe<Scalars['Boolean']>;
};

export type MutationUpdateArticleArgs = {
  id: Scalars['ID'];
  input: ArticleUpdateInput;
  merge?: Maybe<Scalars['Boolean']>;
};

export type MutationUpdateArticleChannelArgs = {
  id: Scalars['ID'];
  input: ArticleChannelUpdateInput;
  merge?: Maybe<Scalars['Boolean']>;
};

export type MutationUpdateArticleFeatureArgs = {
  id: Scalars['ID'];
  input?: Maybe<ArticleFeatureUpdateInput>;
  merge?: Maybe<Scalars['Boolean']>;
};

export type MutationUpdateArticleTagArgs = {
  id: Scalars['ID'];
  input?: Maybe<ArticleTagUpdateInput>;
  merge?: Maybe<Scalars['Boolean']>;
};

export type MutationUpdateBannerArgs = {
  id: Scalars['ID'];
  input: BannerUpdateInput;
  merge?: Maybe<Scalars['Boolean']>;
};

export type MutationUpdateIconArgs = {
  id: Scalars['ID'];
  input: IconUpdateInput;
};

export type MutationUpdateLibraryArgs = {
  id: Scalars['ID'];
  input: LibraryUpdateInput;
};

export type MutationUpdateMenuArgs = {
  id: Scalars['ID'];
  input: MenuUpdateInput;
  merge?: Maybe<Scalars['Boolean']>;
};

export type MutationUpdateModelArgs = {
  id: Scalars['ID'];
  input: ModelCreateInput;
};

export type MutationUpdateRouteArgs = {
  id: Scalars['ID'];
  input: RouteUpdateInput;
  merge?: Maybe<Scalars['Boolean']>;
};

export type MutationUploadArgs = {
  file: Scalars['Upload'];
  options?: Maybe<UploadOptions>;
};

export type NuwaComponent = {
  __typename?: 'NuwaComponent';
  /** 组件配置数据 */
  blocks?: Maybe<Scalars['JSON']>;
  /** 渲染组件 */
  id?: Maybe<Scalars['ID']>;
  /** 模版 */
  template?: Maybe<Scalars['String']>;
};

export type NuwaComponentInput = {
  /** 渲染组件 */
  template?: Maybe<Scalars['String']>;
};

export type OssProperties = StorageProperties & {
  __typename?: 'OSSProperties';
  accessKeyId?: Maybe<Scalars['String']>;
  accessKeySecret?: Maybe<Scalars['String']>;
  bucketName?: Maybe<Scalars['String']>;
  endpoint?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export enum Operation {
  Delete = 'DELETE',
  Insert = 'INSERT',
  Update = 'UPDATE',
}

export type Oplog = {
  __typename?: 'Oplog';
  clazz?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['JSON']>;
  entityName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  operation?: Maybe<Operation>;
  primarykeyName?: Maybe<Scalars['String']>;
  primarykeyValue?: Maybe<Scalars['String']>;
  tableName?: Maybe<Scalars['String']>;
};

export type OplogFilter = {
  createdAt_gt?: Maybe<Scalars['Date']>;
  entityName?: Maybe<Scalars['String']>;
  entityName_in?: Maybe<Maybe<Scalars['String']>[]>;
  primarykeyName?: Maybe<Scalars['String']>;
  primarykeyValue?: Maybe<Scalars['String']>;
};

/** 组织 */
export type Organization = {
  __typename?: 'Organization';
  /** 创建时间 */
  createdAt?: Maybe<Scalars['Date']>;
  /** 创建人 */
  createdBy?: Maybe<Scalars['String']>;
  /** 部门类型 */
  departmentTypes?: Maybe<Maybe<DepartmentType>[]>;
  /**
   * 是否支持多部门
   *    multiSectoral: Boolean
   * 支持最多部门数
   *    multiSectoralNumber: Int
   * 机构描述信息
   */
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /**
   * 组织部门
   *    departments(filter: DepartmentFilter): [Department]
   * 组织员工
   *    employees(filter: EmployeeFilter, page: Int = 1, pageSize: Int = 15, orderBy: OrderBy): EmployeeConnection
   *    # 组织下的角色
   *    roles(enabled: Boolean = true,scope:String = "GLOBAL"): [Role]
   * 组织职位
   */
  jobs?: Maybe<Maybe<Job>[]>;
  name?: Maybe<Scalars['String']>;
  /** 备注 */
  remark?: Maybe<Scalars['String']>;
  /** 修改时间 */
  updatedAt?: Maybe<Scalars['Date']>;
  /** 修改人 */
  updatedBy?: Maybe<Scalars['String']>;
};

/** 组织 */
export type OrganizationJobsArgs = {
  orderBy?: Maybe<Scalars['OrderBy']>;
};

export type OrganizationEmployeeStatus = {
  __typename?: 'OrganizationEmployeeStatus';
  /** 状态编码 */
  code?: Maybe<Scalars['String']>;
  /** ID */
  id?: Maybe<Scalars['ID']>;
  /** 是否是默认值 */
  isDefault?: Maybe<Scalars['Boolean']>;
  /** 状态 */
  name?: Maybe<Scalars['String']>;
  /** 所属组织 */
  organization?: Maybe<Organization>;
};

export type OrganizationFilter = {
  id_in?: Maybe<Maybe<Scalars['String']>[]>;
};

export type OwnershipInput = {
  id: Scalars['ID'];
  type: Scalars['String'];
};

/** 页信息 */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** 数据页最后一个游标 */
  endCursor?: Maybe<Scalars['String']>;
  /** 是否存在下一页 */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** 是否存在上一页 */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  /** 数据页第一个游标 */
  startCursor?: Maybe<Scalars['String']>;
};

export type Permission = {
  __typename?: 'Permission';
  id?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
};

export type PermissionInput = {
  grants?: Maybe<Maybe<Scalars['String']>[]>;
  permission?: Maybe<Scalars['String']>;
};

export type PersonalAccessToken = {
  __typename?: 'PersonalAccessToken';
  /** 过期时间 */
  expiresAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  /** 创建时间 */
  issuedAt?: Maybe<Scalars['Date']>;
  /** 名称 */
  name?: Maybe<Scalars['String']>;
  /** 权限范围 */
  scopes?: Maybe<Maybe<Scalars['String']>[]>;
};

export type Phone = {
  __typename?: 'Phone';
  /** 电话 */
  number?: Maybe<Scalars['String']>;
  /** 状态 */
  status?: Maybe<PhoneStatus>;
};

export enum PhoneStatus {
  Unverified = 'UNVERIFIED',
  Verified = 'VERIFIED',
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
  description?: Maybe<Scalars['String']>;
  /** 职位 */
  id?: Maybe<Scalars['ID']>;
  /** 职位名称 */
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** 查询单个应用的信息 */
  application?: Maybe<Application>;
  /** 所有的应用 */
  applications?: Maybe<Maybe<Application>[]>;
  /** 单个文章 */
  article?: Maybe<Article>;
  /**
   * 文章权限
   * articlePermissions(category: ArticleCategory!): [Permission]
   * 根据ID获取文章栏目
   */
  articleChannel?: Maybe<ArticleChannel>;
  /** 文章栏目 */
  articleChannels?: Maybe<Maybe<ArticleChannel>[]>;
  /** 根据id查询推荐位 */
  articleFeature?: Maybe<ArticleFeature>;
  /** 查询所有推荐位 */
  articleFeatures?: Maybe<Maybe<ArticleFeature>[]>;
  /** 文章标签 */
  articleTags?: Maybe<Maybe<ArticleTag>[]>;
  /** 全部文章 */
  articles?: Maybe<ArticleConnection>;
  /** 横幅广告 */
  banner?: Maybe<Banner>;
  /** 横幅广告 */
  banners?: Maybe<Maybe<Banner>[]>;
  /** 消费者 */
  consumers?: Maybe<Maybe<Consumer>[]>;
  /** 查询单个接口 */
  endpoint?: Maybe<ModelField>;
  /** 文件详情 */
  file?: Maybe<FileObject>;
  /** 图标库 */
  iconLibraries?: Maybe<Maybe<IconLibrary>[]>;
  /** 图标库 */
  iconLibrary?: Maybe<IconLibrary>;
  /** 查询图标 */
  icons?: Maybe<Maybe<Icon>[]>;
  /** 库 */
  libraries?: Maybe<Maybe<Library>[]>;
  /** 文件列表 */
  listFiles: FileObject[];
  /** 查询单个模型 */
  model?: Maybe<Model>;
  /** 用户列表 */
  models?: Maybe<Maybe<Model>[]>;
  modelsConnection?: Maybe<ModelConnection>;
  /** 查询日志 */
  oplogs?: Maybe<Maybe<Oplog>[]>;
  /** 组织•组织列表 */
  organizations?: Maybe<Maybe<Organization>[]>;
  /** 查询个人 Token */
  personalAccessTokens?: Maybe<Maybe<PersonalAccessToken>[]>;
  /** 查询路由 */
  route?: Maybe<Route>;
  /** GraphQL 架构图 */
  schema?: Maybe<GraphQlSchema>;
  /** 查询单个服务 */
  service?: Maybe<Service>;
  /** 服务 */
  services?: Maybe<Maybe<Service>[]>;
  /** 用户会话 */
  sessions?: Maybe<Maybe<Session>[]>;
  /** 已加星标的文章频道 */
  starredArticleChannels?: Maybe<Maybe<ArticleChannel>[]>;
  /** 已加星标的文章 */
  starredArticles?: Maybe<ArticleConnection>;
  /** 存储器 */
  storage?: Maybe<Storage>;
  /** 存储器 */
  storages?: Maybe<Maybe<Storage>[]>;
  vesion?: Maybe<Scalars['String']>;
  /** 系统•当前登录用户 */
  viewer?: Maybe<CurrentUser>;
};

export type QueryApplicationArgs = {
  id: Scalars['ID'];
  idType?: Maybe<ApplicationIdType>;
  space?: Maybe<Scalars['ID']>;
};

export type QueryApplicationsArgs = {
  filter?: Maybe<ApplicationFilter>;
};

export type QueryArticleArgs = {
  id: Scalars['ID'];
};

export type QueryArticleChannelArgs = {
  id: Scalars['ID'];
};

export type QueryArticleChannelsArgs = {
  filter?: Maybe<ArticleChannelFilter>;
  orderBy?: Maybe<Scalars['OrderBy']>;
};

export type QueryArticleFeatureArgs = {
  id: Scalars['ID'];
};

export type QueryArticleFeaturesArgs = {
  filter?: Maybe<ArticleFeatureFilter>;
  orderBy?: Maybe<Scalars['OrderBy']>;
  organization: Scalars['ID'];
};

export type QueryArticleTagsArgs = {
  filter?: Maybe<ArticleChannelFilter>;
  orderBy?: Maybe<Scalars['OrderBy']>;
  organization: Scalars['ID'];
};

export type QueryArticlesArgs = {
  filter?: Maybe<ArticleFilter>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['OrderBy']>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};

export type QueryBannerArgs = {
  id: Scalars['ID'];
};

export type QueryBannersArgs = {
  filter?: Maybe<BannerFilter>;
  orderBy?: Maybe<Scalars['OrderBy']>;
};

export type QueryEndpointArgs = {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<EndpointIdType>;
};

export type QueryFileArgs = {
  path?: Maybe<Scalars['String']>;
  storage: Scalars['ID'];
};

export type QueryIconLibrariesArgs = {
  filter?: Maybe<IconLibraryFilter>;
  ownership?: Maybe<OwnershipInput>;
};

export type QueryIconLibraryArgs = {
  id: Scalars['ID'];
};

export type QueryIconsArgs = {
  filter?: Maybe<IconFilter>;
};

export type QueryLibrariesArgs = {
  ownership?: Maybe<OwnershipInput>;
  type: LibraryType;
};

export type QueryListFilesArgs = {
  path?: Maybe<Scalars['String']>;
  storage: Scalars['ID'];
};

export type QueryModelArgs = {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<ModelIdType>;
};

export type QueryModelsArgs = {
  filter?: Maybe<ModelFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['OrderBy']>;
};

export type QueryModelsConnectionArgs = {
  filter?: Maybe<ModelFilter>;
  orderBy?: Maybe<Scalars['OrderBy']>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};

export type QueryOplogsArgs = {
  filter?: Maybe<OplogFilter>;
};

export type QueryOrganizationsArgs = {
  filter?: Maybe<OrganizationFilter>;
};

export type QueryRouteArgs = {
  id: Scalars['ID'];
};

export type QuerySchemaArgs = {
  id: Scalars['ID'];
};

export type QueryServiceArgs = {
  id: Scalars['ID'];
  idType?: Maybe<ServiceIdType>;
};

export type QueryStarredArticleChannelsArgs = {
  starType: ArticleChannelStarType;
  uid: Scalars['ID'];
};

export type QueryStarredArticlesArgs = {
  filter?: Maybe<ArticleFilter>;
  orderBy?: Maybe<Scalars['OrderBy']>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  starType: ArticleStarType;
  uid: Scalars['ID'];
};

export type QueryStorageArgs = {
  id: Scalars['ID'];
};

export type QueryViewerArgs = {
  organization?: Maybe<Scalars['ID']>;
};

export type Route = {
  __typename?: 'Route';
  /** 访问权限 */
  access?: Maybe<Scalars['String']>;
  /** 路由对应的应用 */
  application?: Maybe<Application>;
  /** 必须登录 */
  authorized?: Maybe<Scalars['Boolean']>;
  /** 组件 */
  component?: Maybe<NuwaComponent>;
  /** 是否启用 */
  enabled?: Maybe<Scalars['Boolean']>;
  /** 在面包屑中隐藏菜单 */
  hideInBreadcrumb?: Maybe<Scalars['Boolean']>;
  /** 对应的图标 */
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** 序号 */
  index?: Maybe<Scalars['Int']>;
  /** 布局设置 */
  layout?: Maybe<LayoutSettings>;
  /** 路由层级 */
  level?: Maybe<Scalars['Int']>;
  /** 菜单名称 */
  name?: Maybe<Scalars['String']>;
  /** 父路由 */
  parent?: Maybe<Route>;
  /** 树路径 */
  path?: Maybe<Scalars['String']>;
  /** 重定向 */
  redirect?: Maybe<Scalars['String']>;
  /** 子路由 */
  routes?: Maybe<Maybe<Route>[]>;
  /** 路由类型 */
  type?: Maybe<RouteType>;
};

export type RouteCreateInput = {
  /** 需要提供的权限 */
  access?: Maybe<Scalars['String']>;
  /** 必须登录 */
  authorized?: Maybe<Scalars['Boolean']>;
  /** 组件 */
  component?: Maybe<NuwaComponentInput>;
  /** 在面包屑中隐藏菜单 */
  hideInBreadcrumb?: Maybe<Scalars['Boolean']>;
  /** 对应的图标 */
  icon?: Maybe<Scalars['String']>;
  /** 默认位置 */
  index?: Maybe<Scalars['Int']>;
  /** 名称 */
  name: Scalars['String'];
  /** 父路由 */
  parentRoute?: Maybe<Scalars['ID']>;
  /** 路径 */
  path: Scalars['String'];
  /** 重定向的路径 */
  redirect?: Maybe<Scalars['String']>;
  /** 路由类型 */
  type?: Maybe<RouteType>;
};

export enum RouteType {
  /** 分割符 */
  Divider = 'DIVIDER',
  /** 标题 */
  Header = 'HEADER',
  /** 菜单 */
  Menu = 'MENU',
  /** 路由 */
  Route = 'ROUTE',
}

export type RouteUpdateInput = {
  /** 访问权限 */
  access?: Maybe<Scalars['String']>;
  /** 必须登录 */
  authorized?: Maybe<Scalars['Boolean']>;
  /** 组件 */
  component?: Maybe<NuwaComponentInput>;
  /** 是否启用 */
  enabled?: Maybe<Scalars['Boolean']>;
  /** 在面包屑中隐藏菜单 */
  hideInBreadcrumb?: Maybe<Scalars['Boolean']>;
  /** 对应的图标 */
  icon?: Maybe<Scalars['String']>;
  /** 名称 */
  name?: Maybe<Scalars['String']>;
  /** 父路由 */
  parentRoute?: Maybe<Scalars['ID']>;
  /** 路径 */
  path?: Maybe<Scalars['String']>;
  /** 重定向的路径 */
  redirect?: Maybe<Scalars['String']>;
  /** 路由类型 */
  type?: Maybe<RouteType>;
};

export type Routespace = {
  __typename?: 'Routespace';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Service = {
  __typename?: 'Service';
  /** 编码 */
  code?: Maybe<Scalars['String']>;
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** Host 地址 */
  host?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** 名称 */
  name?: Maybe<Scalars['String']>;
  /** PATH 地址 */
  path?: Maybe<Scalars['String']>;
  /** 端口 */
  port?: Maybe<Scalars['String']>;
  /** Web 协议 */
  protocol?: Maybe<Scalars['String']>;
  /** 地址 */
  url?: Maybe<Scalars['String']>;
};

export enum ServiceIdType {
  Code = 'CODE',
  Id = 'ID',
}

export type Session = {
  __typename?: 'Session';
  /** 设备 */
  device?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** 位置 */
  location?: Maybe<Geolocation>;
  /** 登录时间 */
  loginTime?: Maybe<Scalars['Date']>;
};

/** 性别 */
export enum Sex {
  Female = 'female',
  Male = 'male',
  Unknown = 'unknown',
}

export enum SocialProvider {
  /** 微信 */
  WeChat = 'WeChat',
  /** 钉钉 */
  Dingtalk = 'dingtalk',
}

export type Storage = BaseEntity & {
  __typename?: 'Storage';
  /** 创建时间 */
  createdAt?: Maybe<Scalars['Date']>;
  /** 创建人 */
  createdBy?: Maybe<Scalars['ID']>;
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** 名称 */
  name?: Maybe<Scalars['String']>;
  /** 配置属性 */
  properties?: Maybe<StorageProperties>;
  /** 限额 (单位 MB) */
  quota?: Maybe<Scalars['Number']>;
  /** 文件总数 */
  totalFiles?: Maybe<Scalars['Int']>;
  /** 类型 */
  type: StorageType;
  /** 更新时间 */
  updatedAt?: Maybe<Scalars['Date']>;
  /** 更新人 */
  updatedBy?: Maybe<Scalars['ID']>;
  /** 存储用量 (单位 KB) */
  usage?: Maybe<Scalars['Number']>;
};

export type StorageCreatedAtArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StorageQuotaArgs = {
  format?: Maybe<Scalars['Boolean']>;
};

export type StorageUpdatedAtArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StorageUsageArgs = {
  format?: Maybe<Scalars['Boolean']>;
};

export type StorageProperties = {
  id?: Maybe<Scalars['ID']>;
};

export enum StorageType {
  /** FTP文件系统 */
  Ftp = 'FTP',
  /** 上传文件存储 */
  Minio = 'MINIO',
  /** 阿里开放存储服务 */
  Oss = 'OSS',
}

export enum UIdType {
  Dingtalk = 'dingtalk',
  Id = 'id',
}

export type UploadOptions = {
  /** 分段上传时的 唯一标识 */
  entireFileHash?: Maybe<Scalars['String']>;
  /** 分段上传时的完整 文件名 */
  entireFileName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** 文件名策略 */
  nameStrategy?: Maybe<Scalars['String']>;
  /** 分段上传时的 片段标识 */
  partFileHash?: Maybe<Scalars['String']>;
  /** 插件 支持 fragment */
  plugin?: Maybe<Scalars['String']>;
  /** 上传空间 */
  space?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
};
