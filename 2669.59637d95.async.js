(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[2669],{32669:function(te,T,r){"use strict";r.d(T,{f_:function(){return M},Nd:function(){return b},nE:function(){return X},c3:function(){return Y},gi:function(){return h},hI:function(){return G},k0:function(){return E},FW:function(){return z},Pg:function(){return ne},YD:function(){return ae},Tt:function(){return k},Rh:function(){return V},do:function(){return B},aB:function(){return ee},qX:function(){return N},mf:function(){return J}});var a=r(11849),o=r(20310),s=r(49704),l=r(64718),i=r(21919),c=r(38460),d,m,g,p,x,f,v,y,Z,D,$,j,P,F,S,U,t={},O=(0,s.Ps)(d||(d=(0,o.Z)([`
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
    `]))),u=(0,s.Ps)(m||(m=(0,o.Z)([`
    fragment MailboxMessageFlagParts on MailboxMessage {
  answered
  deleted
  draft
  flagged
  recent
  seen
}
    `]))),Q=(0,s.Ps)(g||(g=(0,o.Z)([`
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
    `])));function z(e){var n=(0,a.Z)((0,a.Z)({},t),e);return l.a(Q,n)}function oe(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useLazyQuery(Q,n)}var L=(0,s.Ps)(p||(p=(0,o.Z)([`
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
    `])));function h(e){var n=(0,a.Z)((0,a.Z)({},t),e);return i.D(L,n)}var A=(0,s.Ps)(x||(x=(0,o.Z)([`
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
    `])));function N(e){var n=(0,a.Z)((0,a.Z)({},t),e);return i.D(A,n)}var _=(0,s.Ps)(f||(f=(0,o.Z)([`
    mutation deleteMailboxMessage($id: ID!) {
  deleteMailboxMessage(id: $id)
}
    `])));function E(e){var n=(0,a.Z)((0,a.Z)({},t),e);return i.D(_,n)}var R=(0,s.Ps)(v||(v=(0,o.Z)([`
    mutation sendMailboxMessage($id: ID!) {
  message: sendMailboxMessage(id: $id) {
    id
  }
}
    `])));function B(e){var n=(0,a.Z)((0,a.Z)({},t),e);return i.D(R,n)}var W=(0,s.Ps)(y||(y=(0,o.Z)([`
    mutation clearTrashMailbox {
  clearMailboxMessagesInTrashMailbox
}
    `])));function X(e){var n=(0,a.Z)((0,a.Z)({},t),e);return i.D(W,n)}var M=(0,s.Ps)(Z||(Z=(0,o.Z)([`
    query countUnread {
  inbox: mailbox(id: "inbox") {
    id
    unread: count(type: UNREAD)
  }
}
    `])));function Y(e){var n=(0,a.Z)((0,a.Z)({},t),e);return l.a(M,n)}function se(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useLazyQuery(M,n)}var b=(0,s.Ps)(D||(D=(0,o.Z)([`
    query mailboxes {
  mailboxes {
    id
    name
    namespace
    count
  }
}
    `])));function k(e){var n=(0,a.Z)((0,a.Z)({},t),e);return l.a(b,n)}function ie(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useLazyQuery(b,n)}var q=(0,s.Ps)($||($=(0,o.Z)([`
    mutation createMailbox($namespace: String!, $name: String!) {
  createMailbox(namespace: $namespace, name: $name) {
    id
    name
    namespace
  }
}
    `])));function G(e){var n=(0,a.Z)((0,a.Z)({},t),e);return i.D(q,n)}var H=(0,s.Ps)(j||(j=(0,o.Z)([`
    mutation updateMyFavoriteMailboxes($mailboxes: [String!]!, $mode: UpdateMode) {
  mailboxes: updateMyFavoriteMailboxes(mailboxes: $mailboxes, mode: $mode)
}
    `])));function J(e){var n=(0,a.Z)((0,a.Z)({},t),e);return i.D(H,n)}var K=(0,s.Ps)(P||(P=(0,o.Z)([`
    mutation moveMailboxMessageToFolder($id: ID!, $mailbox: ID!) {
  moveMailboxMessageToFolder(id: $id, mailbox: $mailbox) {
    id
    ...MailboxMessageFlagParts
  }
}
    `,""])),u);function V(e){var n=(0,a.Z)((0,a.Z)({},t),e);return i.D(K,n)}var w=(0,s.Ps)(F||(F=(0,o.Z)([`
    mutation updateMailboxMessageFlags($id: ID!, $flags: [String!]!, $mode: MailboxFlagsUpdateMode) {
  updateMailboxMessageFlags(id: $id, flags: $flags, mode: $mode) {
    id
    ...MailboxMessageFlagParts
  }
}
    `,""])),u);function ee(e){var n=(0,a.Z)((0,a.Z)({},t),e);return i.D(w,n)}var C=(0,s.Ps)(S||(S=(0,o.Z)([`
    query mailboxMessage($id: ID!) {
  message: mailboxMessage(id: $id) {
    index
    ...MailboxMessageParts
    ...MailboxMessageFlagParts
  }
}
    `,`
`,""])),O,u);function re(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useQuery(C,n)}function ne(e){var n=(0,a.Z)((0,a.Z)({},t),e);return c.t(C,n)}var I=(0,s.Ps)(U||(U=(0,o.Z)([`
    query mailboxMessages($user: ID, $filter: MailboxMessageFilter, $page: Int = 1) {
  mailboxMessages(user: $user, filter: $filter, page: $page, pageSize: 30) {
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
`,""])),O,u);function ue(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useQuery(I,n)}function ae(e){var n=(0,a.Z)((0,a.Z)({},t),e);return c.t(I,n)}}}]);
