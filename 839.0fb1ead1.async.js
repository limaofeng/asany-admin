(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[839],{40839:function(te,S,r){"use strict";r.d(S,{FW:function(){return T},gi:function(){return Q},qX:function(){return A},k0:function(){return R},do:function(){return W},nE:function(){return N},f_:function(){return M},c3:function(){return k},Nd:function(){return b},Tt:function(){return X},hI:function(){return q},mf:function(){return G},Rh:function(){return J},aB:function(){return ee},Pg:function(){return ne},YD:function(){return ae}});var a=r(11849),o=r(20310),s=r(49704),l=r(93633),i=r(21919),m=r(38460),d,c,p,_,g,x,f,v,D,y,Z,P,$,j,O,U,t={},F=(0,s.Ps)(d||(d=(0,o.Z)([`
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
    `]))),u=(0,s.Ps)(c||(c=(0,o.Z)([`
    fragment MailboxMessageFlagParts on MailboxMessage {
  answered
  deleted
  draft
  flagged
  recent
  seen
}
    `]))),E=(0,s.Ps)(p||(p=(0,o.Z)([`
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
    `])));function T(e){var n=(0,a.Z)((0,a.Z)({},t),e);return l.a(E,n)}function oe(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useLazyQuery(E,n)}var L=(0,s.Ps)(_||(_=(0,o.Z)([`
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
    `])));function Q(e){var n=(0,a.Z)((0,a.Z)({},t),e);return i.D(L,n)}var h=(0,s.Ps)(g||(g=(0,o.Z)([`
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
    `])));function A(e){var n=(0,a.Z)((0,a.Z)({},t),e);return i.D(h,n)}var z=(0,s.Ps)(x||(x=(0,o.Z)([`
    mutation deleteMailboxMessage($id: ID!) {
  deleteMailboxMessage(id: $id)
}
    `])));function R(e){var n=(0,a.Z)((0,a.Z)({},t),e);return i.D(z,n)}var B=(0,s.Ps)(f||(f=(0,o.Z)([`
    mutation sendMailboxMessage($id: ID!) {
  message: sendMailboxMessage(id: $id) {
    id
  }
}
    `])));function W(e){var n=(0,a.Z)((0,a.Z)({},t),e);return i.D(B,n)}var K=(0,s.Ps)(v||(v=(0,o.Z)([`
    mutation clearTrashMailbox {
  clearMailboxMessagesInTrashMailbox
}
    `])));function N(e){var n=(0,a.Z)((0,a.Z)({},t),e);return i.D(K,n)}var M=(0,s.Ps)(D||(D=(0,o.Z)([`
    query countUnread {
  inbox: mailbox(id: "inbox") {
    id
    unread: count(type: UNREAD)
  }
}
    `])));function k(e){var n=(0,a.Z)((0,a.Z)({},t),e);return l.a(M,n)}function se(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useLazyQuery(M,n)}var b=(0,s.Ps)(y||(y=(0,o.Z)([`
    query mailboxes {
  mailboxes {
    id
    name
    namespace
    count
  }
}
    `])));function X(e){var n=(0,a.Z)((0,a.Z)({},t),e);return l.a(b,n)}function ie(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useLazyQuery(b,n)}var Y=(0,s.Ps)(Z||(Z=(0,o.Z)([`
    mutation createMailbox($namespace: String!, $name: String!) {
  createMailbox(namespace: $namespace, name: $name) {
    id
    name
    namespace
  }
}
    `])));function q(e){var n=(0,a.Z)((0,a.Z)({},t),e);return i.D(Y,n)}var w=(0,s.Ps)(P||(P=(0,o.Z)([`
    mutation updateMyFavoriteMailboxes($mailboxes: [String!]!, $mode: UpdateMode) {
  mailboxes: updateMyFavoriteMailboxes(mailboxes: $mailboxes, mode: $mode)
}
    `])));function G(e){var n=(0,a.Z)((0,a.Z)({},t),e);return i.D(w,n)}var H=(0,s.Ps)($||($=(0,o.Z)([`
    mutation moveMailboxMessageToFolder($id: ID!, $mailbox: ID!) {
  moveMailboxMessageToFolder(id: $id, mailbox: $mailbox) {
    id
    ...MailboxMessageFlagParts
  }
}
    `,""])),u);function J(e){var n=(0,a.Z)((0,a.Z)({},t),e);return i.D(H,n)}var V=(0,s.Ps)(j||(j=(0,o.Z)([`
    mutation updateMailboxMessageFlags($id: ID!, $flags: [String!]!, $mode: MailboxFlagsUpdateMode) {
  updateMailboxMessageFlags(id: $id, flags: $flags, mode: $mode) {
    id
    ...MailboxMessageFlagParts
  }
}
    `,""])),u);function ee(e){var n=(0,a.Z)((0,a.Z)({},t),e);return i.D(V,n)}var C=(0,s.Ps)(O||(O=(0,o.Z)([`
    query mailboxMessage($id: ID!) {
  message: mailboxMessage(id: $id) {
    index
    ...MailboxMessageParts
    ...MailboxMessageFlagParts
  }
}
    `,`
`,""])),F,u);function re(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useQuery(C,n)}function ne(e){var n=(0,a.Z)((0,a.Z)({},t),e);return m.t(C,n)}var I=(0,s.Ps)(U||(U=(0,o.Z)([`
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
`,""])),F,u);function ue(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useQuery(I,n)}function ae(e){var n=(0,a.Z)((0,a.Z)({},t),e);return m.t(I,n)}}}]);
