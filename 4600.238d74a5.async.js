"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4600],{74600:function(se,h,r){r.d(h,{f_:function(){return l},Nd:function(){return M},nE:function(){return H},c3:function(){return J},gi:function(){return _},hI:function(){return Z},k0:function(){return B},FW:function(){return L},Pg:function(){return te},YD:function(){return oe},Tt:function(){return K},Rh:function(){return ee},do:function(){return Y},aB:function(){return ae},qX:function(){return R},mf:function(){return k}});var z=r(97857),a=r.n(z),A=r(68400),o=r.n(A),s=r(75063),b=r(37887),u=r(50319),m=r(73359),g,x,f,v,y,j,S,D,$,P,Q,F,U,O,C,I,t={},T=(0,s.Ps)(g||(g=o()([`
    fragment MailboxMessageParts on MailboxMessage {
  id
  subject
  date
  from
  to
  cc
  bcc
  mimeType
  body
  mailboxName
  originalMailboxName
}
    `]))),i=(0,s.Ps)(x||(x=o()([`
    fragment MailboxMessageFlagParts on MailboxMessage {
  answered
  deleted
  draft
  flagged
  recent
  seen
}
    `]))),c=(0,s.Ps)(f||(f=o()([`
    query mailUser {
  mailUser {
    id
    name
    domain {
      name
    }
    settings {
      mailboxes
    }
  }
}
    `])));function L(e){var n=a()(a()({},t),e);return b.a(c,n)}function re(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useLazyQuery(c,n)}function ue(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useSuspenseQuery(c,n)}var N=(0,s.Ps)(v||(v=o()([`
    mutation createMailboxMessage($input: MailboxMessageCreateInput!) {
  message: createMailboxMessage(input: $input) {
    id
    subject
    to
    cc
    bcc
    mimeType
    body
    draft
  }
}
    `])));function _(e){var n=a()(a()({},t),e);return u.D(N,n)}var E=(0,s.Ps)(y||(y=o()([`
    mutation updateMailboxMessage($id: ID!, $input: MailboxMessageUpdateInput!) {
  message: updateMailboxMessage(id: $id, input: $input) {
    id
    subject
    to
    cc
    bcc
    mimeType
    body
    draft
  }
}
    `])));function R(e){var n=a()(a()({},t),e);return u.D(E,n)}var W=(0,s.Ps)(j||(j=o()([`
    mutation deleteMailboxMessage($id: ID!) {
  deleteMailboxMessage(id: $id)
}
    `])));function B(e){var n=a()(a()({},t),e);return u.D(W,n)}var X=(0,s.Ps)(S||(S=o()([`
    mutation sendMailboxMessage($id: ID!) {
  message: sendMailboxMessage(id: $id) {
    id
  }
}
    `])));function Y(e){var n=a()(a()({},t),e);return u.D(X,n)}var G=(0,s.Ps)(D||(D=o()([`
    mutation clearTrashMailbox {
  clearMailboxMessagesInTrashMailbox
}
    `])));function H(e){var n=a()(a()({},t),e);return u.D(G,n)}var l=(0,s.Ps)($||($=o()([`
    query countUnread {
  inbox: mailbox(id: "inbox") {
    id
    unread: count(type: UNREAD)
  }
}
    `])));function J(e){var n=a()(a()({},t),e);return b.a(l,n)}function ie(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useLazyQuery(l,n)}function le(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useSuspenseQuery(l,n)}var M=(0,s.Ps)(P||(P=o()([`
    query mailboxes {
  mailboxes {
    id
    name
    namespace
    count
  }
}
    `])));function K(e){var n=a()(a()({},t),e);return b.a(M,n)}function Me(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useLazyQuery(M,n)}function be(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useSuspenseQuery(M,n)}var V=(0,s.Ps)(Q||(Q=o()([`
    mutation createMailbox($namespace: String!, $name: String!) {
  createMailbox(namespace: $namespace, name: $name) {
    id
    name
    namespace
  }
}
    `])));function Z(e){var n=a()(a()({},t),e);return u.D(V,n)}var w=(0,s.Ps)(F||(F=o()([`
    mutation updateMyFavoriteMailboxes($mailboxes: [String!]!, $mode: UpdateMode) {
  mailboxes: updateMyFavoriteMailboxes(mailboxes: $mailboxes, mode: $mode)
}
    `])));function k(e){var n=a()(a()({},t),e);return u.D(w,n)}var q=(0,s.Ps)(U||(U=o()([`
    mutation moveMailboxMessageToFolder($id: ID!, $mailbox: ID!) {
  moveMailboxMessageToFolder(id: $id, mailbox: $mailbox) {
    id
    ...MailboxMessageFlagParts
  }
}
    `,""])),i);function ee(e){var n=a()(a()({},t),e);return u.D(q,n)}var ne=(0,s.Ps)(O||(O=o()([`
    mutation updateMailboxMessageFlags($id: ID!, $flags: [String!]!, $mode: MailboxFlagsUpdateMode) {
  updateMailboxMessageFlags(id: $id, flags: $flags, mode: $mode) {
    id
    ...MailboxMessageFlagParts
  }
}
    `,""])),i);function ae(e){var n=a()(a()({},t),e);return u.D(ne,n)}var p=(0,s.Ps)(C||(C=o()([`
    query mailboxMessage($id: ID!) {
  message: mailboxMessage(id: $id) {
    index
    ...MailboxMessageParts
    ...MailboxMessageFlagParts
  }
}
    `,`
`,""])),T,i);function ce(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useQuery(p,n)}function te(e){var n=a()(a()({},t),e);return m.t(p,n)}function pe(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useSuspenseQuery(p,n)}var d=(0,s.Ps)(I||(I=o()([`
    query mailboxMessages($user: ID, $where: MailboxMessageWhereInput, $page: Int = 1) {
  mailboxMessages(user: $user, where: $where, page: $page, pageSize: 30) {
    totalCount
    pageSize
    totalPage
    currentPage
    edges {
      node {
        ...MailboxMessageParts
        ...MailboxMessageFlagParts
      }
    }
  }
}
    `,`
`,""])),T,i);function de(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useQuery(d,n)}function oe(e){var n=a()(a()({},t),e);return m.t(d,n)}function me(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useSuspenseQuery(d,n)}}}]);
