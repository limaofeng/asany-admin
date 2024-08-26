"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2471],{82471:function(me,J,a){a.d(J,{HD:function(){return _},f4:function(){return X},dH:function(){return oe},we:function(){return N},lK:function(){return ae},rn:function(){return ie},Eo:function(){return pe},_D:function(){return k},Ep:function(){return re},fX:function(){return ne},J4:function(){return Y}});var K=a(97857),t=a.n(K),W=a(68400),i=a.n(W),s=a(75063),j=a(73359),u=a(50319),c=a(37887),g,$,Q,b,h,z,M,L,P,C,I,T,r={},p=(0,s.Ps)(g||(g=i()([`
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
    `])));function Fe(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useQuery(p,e)}function X(n){var e=t()(t()({},r),n);return j.t(p,e)}function Se(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(p,e)}var G=(0,s.Ps)($||($=i()([`
    mutation createFolder($name: String!, $parentFolder: ID!) {
  folder: createFolder(name: $name, parentFolder: $parentFolder) {
    id
    name
  }
}
    `])));function N(n){var e=t()(t()({},r),n);return u.D(G,e)}var V=(0,s.Ps)(Q||(Q=i()([`
    mutation updateFilesStarStatus($files: [ID!]!, $starred: Boolean!) {
  files: updateFilesStarStatus(files: $files, starred: $starred) {
    id
    starred
  }
}
    `])));function Y(n){var e=t()(t()({},r),n);return u.D(V,e)}var Z=(0,s.Ps)(b||(b=i()([`
    mutation deleteFiles($ids: [ID!]!) {
  files: deleteFiles(ids: $ids) {
    id
  }
}
    `])));function De(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useMutation(Z,e)}var w=(0,s.Ps)(h||(h=i()([`
    mutation moveFilesToTrash($ids: [ID!]!) {
  files: moveFilesToTrash(ids: $ids) {
    id
  }
}
    `])));function k(n){var e=t()(t()({},r),n);return u.D(w,e)}var q=(0,s.Ps)(z||(z=i()([`
    mutation clearFilesInTrash($space: ID!) {
  clearFilesInTrash(space: $space) {
    count
  }
}
    `])));function _(n){var e=t()(t()({},r),n);return u.D(q,e)}var ee=(0,s.Ps)(M||(M=i()([`
    mutation restoreFiles($ids: [ID!]!) {
  files: restoreFiles(ids: $ids) {
    id
    path
  }
}
    `])));function ne(n){var e=t()(t()({},r),n);return u.D(ee,e)}var te=(0,s.Ps)(L||(L=i()([`
    mutation renameFile($id: ID!, $name: String!) {
  file: renameFile(id: $id, name: $name) {
    id
    name
    lastModified(format: "yyyy-MM-dd HH:mm")
  }
}
    `])));function re(n){var e=t()(t()({},r),n);return u.D(te,e)}var v=(0,s.Ps)(P||(P=i()([`
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
    `])));function oe(n){var e=t()(t()({},r),n);return c.a(v,e)}function je(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(v,e)}function ge(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(v,e)}var y=(0,s.Ps)(C||(C=i()([`
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
    `])));function ae(n){var e=t()(t()({},r),n);return c.a(y,e)}function $e(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(y,e)}function Qe(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(y,e)}var f=(0,s.Ps)(I||(I=i()([`
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
    `])));function ie(n){var e=t()(t()({},r),n);return c.a(f,e)}function be(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(f,e)}function he(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(f,e)}var m=(0,s.Ps)(T||(T=i()([`
    query listFiles($space: ID!, $where: FileWhereInput, $page: Int = 1, $pageSize: Int = 30, $orderBy: OrderBy) {
  listFiles(
    space: $space
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
    `])));function ze(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useQuery(m,e)}function se(n){var e=t()(t()({},r),n);return j.t(m,e)}function Me(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(m,e)}var ue=a(5574),le=a.n(ue),F=a(62435),de=a(30773),ce=function(){var e=se({fetchPolicy:"cache-and-network"}),l=le()(e,2),O=l[0],S=l[1],o=S.data,A=S.loading,H=S.refetch,R=(o==null?void 0:o.listFiles.pageSize)||0,B=(o==null?void 0:o.listFiles.currentPage)||0,x=(o==null?void 0:o.listFiles.totalCount)||0,E=(o==null?void 0:o.listFiles.totalPage)||0,U=(0,F.useMemo)(function(){return{totalCount:x,currentPage:B,pageSize:R,totalPage:E}},[B,R,x,E]),ve=(0,F.useMemo)(function(){return function(d,D){O({variables:t()(t()({},d),{},{page:D})})}},[O]),ye=(0,F.useMemo)(function(){return{pagination:U,items:(o==null?void 0:o.listFiles.edges.map(function(d){return d.node}))||[],loading:A,refetch:function(D,fe){return H(t()(t()({},D),{},{page:fe}))}}},[A,U,o==null?void 0:o.listFiles.edges,H]);return[ve,ye]};function pe(n,e,l){return(0,de.RM)(ce,{space:n,where:e,orderBy:l})}}}]);
