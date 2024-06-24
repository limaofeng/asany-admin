"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2471],{82471:function(fe,U,i){i.d(U,{tz:function(){return Y},HD:function(){return _},f4:function(){return G},dH:function(){return oe},we:function(){return N},lK:function(){return ie},rn:function(){return ae},Eo:function(){return pe},_D:function(){return k},Ep:function(){return re},fX:function(){return ne}});var W=i(97857),t=i.n(W),X=i(68400),a=i.n(X),s=i(75063),j=i(73359),u=i(50319),c=i(37887),g,$,Q,b,h,z,M,L,P,C,I,T,r={},p=(0,s.Ps)(g||(g=a()([`
    query cloudDrive($id: ID!) {
  cloudDrive(id: $id) {
    id
    name
    type
    space
    rootFolder
    recycleBin
  }
}
    `])));function Fe(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useQuery(p,e)}function G(n){var e=t()(t()({},r),n);return j.t(p,e)}function De(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(p,e)}var J=(0,s.Ps)($||($=a()([`
    mutation createFolder($name: String!, $parentFolder: ID!) {
  folder: createFolder(name: $name, parentFolder: $parentFolder) {
    id
    name
  }
}
    `])));function N(n){var e=t()(t()({},r),n);return u.D(J,e)}var V=(0,s.Ps)(Q||(Q=a()([`
    mutation addStarForFiles($ids: [ID!]!, $mode: UpdateMode) {
  files: addStarForFiles(ids: $ids, mode: $mode) {
    id
    starred
  }
}
    `])));function Y(n){var e=t()(t()({},r),n);return u.D(V,e)}var Z=(0,s.Ps)(b||(b=a()([`
    mutation deleteFiles($ids: [ID!]!) {
  files: deleteFiles(ids: $ids) {
    id
  }
}
    `])));function Se(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useMutation(Z,e)}var w=(0,s.Ps)(h||(h=a()([`
    mutation moveFilesToTrash($ids: [ID!]!) {
  files: moveFilesToTrash(ids: $ids) {
    id
  }
}
    `])));function k(n){var e=t()(t()({},r),n);return u.D(w,e)}var q=(0,s.Ps)(z||(z=a()([`
    mutation clearFilesInTrash($folder: ID!) {
  clearFilesInTrash(folder: $folder)
}
    `])));function _(n){var e=t()(t()({},r),n);return u.D(q,e)}var ee=(0,s.Ps)(M||(M=a()([`
    mutation restoreFiles($ids: [ID!]!) {
  files: restoreFiles(ids: $ids) {
    id
    path
  }
}
    `])));function ne(n){var e=t()(t()({},r),n);return u.D(ee,e)}var te=(0,s.Ps)(L||(L=a()([`
    mutation renameFile($id: ID!, $name: String!) {
  file: renameFile(id: $id, name: $name) {
    id
    name
    lastModified(format: "yyyy-MM-dd HH:mm")
  }
}
    `])));function re(n){var e=t()(t()({},r),n);return u.D(te,e)}var v=(0,s.Ps)(P||(P=a()([`
    query cloudDrives {
  cloudDrives {
    id
    name
    type
    space
    quota {
      id
      count
      usage
      size
      usageStr: usage(format: true)
      sizeStr: size(format: true)
    }
    rootFolder
  }
}
    `])));function oe(n){var e=t()(t()({},r),n);return c.a(v,e)}function je(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(v,e)}function ge(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(v,e)}var m=(0,s.Ps)(C||(C=a()([`
    query file($id: ID!) {
  file(id: $id) {
    id
    name
    path
    starred
    size
    sizeFormat: size(format: true)
    mimeType
    extension
    isDirectory
    isRootFolder
    lastModified(format: "yyyy-MM-dd HH:mm")
    createdAt(format: "yyyy-MM-dd HH:mm")
    description
    parents {
      id
      isDirectory
      isRootFolder
      name
      path
    }
  }
}
    `])));function ie(n){var e=t()(t()({},r),n);return c.a(m,e)}function $e(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(m,e)}function Qe(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(m,e)}var y=(0,s.Ps)(I||(I=a()([`
    query folder($folder: ID!) {
  currentFolder: file(id: $folder) {
    id
    name
    path
    isDirectory
    isRootFolder
    parents {
      id
      isDirectory
      isRootFolder
      name
      path
    }
  }
}
    `])));function ae(n){var e=t()(t()({},r),n);return c.a(y,e)}function be(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(y,e)}function he(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(y,e)}var f=(0,s.Ps)(T||(T=a()([`
    query listFiles($rootFolder: ID!, $where: FileWhereInput, $page: Int = 1, $pageSize: Int = 30, $orderBy: OrderBy) {
  listFiles(
    rootFolder: $rootFolder
    where: $where
    page: $page
    pageSize: $pageSize
    orderBy: $orderBy
  ) {
    pageSize
    currentPage
    totalPage
    totalCount
    edges {
      node {
        id
        name
        path
        size
        starred
        mimeType
        extension
        isDirectory
        lastModified(format: "yyyy-MM-dd HH:mm")
      }
    }
  }
}
    `])));function ze(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useQuery(f,e)}function se(n){var e=t()(t()({},r),n);return j.t(f,e)}function Me(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(f,e)}var ue=i(5574),le=i.n(ue),F=i(62435),de=i(30773),ce=function(){var e=se({fetchPolicy:"cache-and-network"}),l=le()(e,2),A=l[0],D=l[1],o=D.data,O=D.loading,H=D.refetch,R=(o==null?void 0:o.listFiles.pageSize)||0,B=(o==null?void 0:o.listFiles.currentPage)||0,x=(o==null?void 0:o.listFiles.totalCount)||0,E=(o==null?void 0:o.listFiles.totalPage)||0,K=(0,F.useMemo)(function(){return{totalCount:x,currentPage:B,pageSize:R,totalPage:E}},[B,R,x,E]),ve=(0,F.useMemo)(function(){return function(d,S){A({variables:t()(t()({},d),{},{page:S})})}},[A]),me=(0,F.useMemo)(function(){return{pagination:K,items:(o==null?void 0:o.listFiles.edges.map(function(d){return d.node}))||[],loading:O,refetch:function(S,ye){return H(t()(t()({},S),{},{page:ye}))}}},[O,K,o==null?void 0:o.listFiles.edges,H]);return[ve,me]};function pe(n,e,l){return(0,de.RM)(ce,{rootFolder:n,where:e,orderBy:l})}}}]);
