"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2471],{82471:function(De,W,a){a.d(W,{HD:function(){return ne},f4:function(){return N},dH:function(){return ie},we:function(){return Y},lK:function(){return se},rn:function(){return ue},Eo:function(){return fe},_D:function(){return _},Ep:function(){return ae},fX:function(){return re},J4:function(){return w}});var X=a(97857),t=a.n(X),G=a(68400),i=a.n(G),s=a(75063),$=a(73359),u=a(50319),f=a(37887),Q,b,h,z,M,L,P,C,I,T,O,A,r={},y=(0,s.Ps)(Q||(Q=i()([`
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
    `])));function ge(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useQuery(y,e)}function N(n){var e=t()(t()({},r),n);return $.t(y,e)}function je(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(y,e)}var V=(0,s.Ps)(b||(b=i()([`
    mutation createFolder($name: String!, $parentFolder: ID!) {
  folder: createFolder(name: $name, parentFolder: $parentFolder) {
    id
    name
  }
}
    `])));function Y(n){var e=t()(t()({},r),n);return u.D(V,e)}var Z=(0,s.Ps)(h||(h=i()([`
    mutation updateFilesStarStatus($files: [ID!]!, $starred: Boolean!) {
  files: updateFilesStarStatus(files: $files, starred: $starred) {
    id
    starred
  }
}
    `])));function w(n){var e=t()(t()({},r),n);return u.D(Z,e)}var k=(0,s.Ps)(z||(z=i()([`
    mutation deleteFiles($ids: [ID!]!) {
  files: deleteFiles(ids: $ids) {
    id
  }
}
    `])));function $e(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useMutation(k,e)}var q=(0,s.Ps)(M||(M=i()([`
    mutation moveFilesToTrash($ids: [ID!]!) {
  files: moveFilesToTrash(ids: $ids) {
    id
  }
}
    `])));function _(n){var e=t()(t()({},r),n);return u.D(q,e)}var ee=(0,s.Ps)(L||(L=i()([`
    mutation clearFilesInTrash($space: ID!) {
  clearFilesInTrash(space: $space) {
    count
  }
}
    `])));function ne(n){var e=t()(t()({},r),n);return u.D(ee,e)}var te=(0,s.Ps)(P||(P=i()([`
    mutation restoreFiles($ids: [ID!]!) {
  files: restoreFiles(ids: $ids) {
    id
    path
  }
}
    `])));function re(n){var e=t()(t()({},r),n);return u.D(te,e)}var oe=(0,s.Ps)(C||(C=i()([`
    mutation renameFile($id: ID!, $name: String!) {
  file: renameFile(id: $id, name: $name) {
    id
    name
    lastModified(format: "yyyy-MM-dd HH:mm")
  }
}
    `])));function ae(n){var e=t()(t()({},r),n);return u.D(oe,e)}var m=(0,s.Ps)(I||(I=i()([`
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
    `])));function ie(n){var e=t()(t()({},r),n);return f.a(m,e)}function Qe(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(m,e)}function be(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(m,e)}var F=(0,s.Ps)(T||(T=i()([`
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
    `])));function se(n){var e=t()(t()({},r),n);return f.a(F,e)}function he(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(F,e)}function ze(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(F,e)}var S=(0,s.Ps)(O||(O=i()([`
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
    `])));function ue(n){var e=t()(t()({},r),n);return f.a(S,e)}function Me(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(S,e)}function Le(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(S,e)}var D=(0,s.Ps)(A||(A=i()([`
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
    `])));function Pe(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useQuery(D,e)}function le(n){var e=t()(t()({},r),n);return $.t(D,e)}function Ce(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(D,e)}var de=a(5574),ce=a.n(de),g=a(67294),pe=a(30773),ve=function(){var e=le({fetchPolicy:"cache-and-network"}),c=ce()(e,2),H=c[0],p=c[1],o=p.data,j=p.previousData,R=p.loading,B=p.refetch,x=(o==null?void 0:o.listFiles.pageSize)||0,E=(o==null?void 0:o.listFiles.currentPage)||0,U=(o==null?void 0:o.listFiles.totalCount)||0,J=(o==null?void 0:o.listFiles.totalPage)||0,K=(0,g.useMemo)(function(){return{totalCount:U,currentPage:E,pageSize:x,totalPage:J}},[E,x,U,J]),ye=(0,g.useMemo)(function(){return function(l,d){H({variables:t()(t()({},l),{},{page:d})})}},[H]),me=(0,g.useMemo)(function(){var l,d;return console.log("data >>>>>>>>>>>>>>>>>> ",((l=o||j)===null||l===void 0?void 0:l.listFiles.edges.map(function(v){return v.node}))||[]),{pagination:K,items:((d=o||j)===null||d===void 0?void 0:d.listFiles.edges.map(function(v){return v.node}))||[],loading:R,refetch:function(Fe,Se){return B(t()(t()({},Fe),{},{page:Se}))}}},[R,K,j,o==null?void 0:o.listFiles.edges,B]);return[ye,me]};function fe(n,e,c){return(0,pe.RM)(ve,{space:n,where:e,orderBy:c})}}}]);
