"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4127],{24127:function(pe,B,a){a.d(B,{Ao:function(){return q},Cz:function(){return de},Nv:function(){return N},Q9:function(){return ae},Qn:function(){return G},RG:function(){return J},VB:function(){return ee},YG:function(){return F},dy:function(){return ie},k1:function(){return se},oZ:function(){return R},ow:function(){return x},pw:function(){return ne},rq:function(){return U},sB:function(){return te},tu:function(){return Y}});var w=a(97857),t=a.n(w),L=a(68400),o=a.n(L),u=a(75063),i=a(37887),s=a(50319),S=a(73359),C,f,v,D,g,b,M,$,j,O,P,h,I,T,k,A,Q,z,r={},E=(0,u.Ps)(C||(C=o()([`
    fragment TicketParts on Ticket {
  id
  no
  description
  device: target {
    id
    ... on Device {
      id
      sn
      name
      warrantyStatus
      warrantyStartDate(format: "yyyy-MM-dd")
      brand {
        id
        name
      }
      product {
        id
        name
      }
    }
  }
  customer {
    id
    name
  }
  store {
    id
    no
    name
    address {
      fullAddress
    }
    phone
    openingDate(format: "yyyy-MM-dd")
  }
  createdAt(format: "yyyy-MM-dd HH:mm:ss")
  status
  contactInfo {
    name
    phone
    email
    address {
      fullAddress
    }
  }
  assignee {
    id
    name
    phone {
      number
    }
  }
  completedAt(format: "yyyy-MM-dd HH:mm")
}
    `]))),c=(0,u.Ps)(f||(f=o()([`
    fragment CustomerStoreParts on CustomerStore {
  id
  no
  name
  openingDate(format: "yyyy-MM-dd")
  deviceCount
  phone
  contactInfo {
    name
    phone
  }
  address {
    province
    provinceName
    city
    cityName
    district
    districtName
    street
    streetName
    detailedAddress
    fullAddress(excludeDetailed: true)
  }
}
    `]))),d=(0,u.Ps)(v||(v=o()([`
    query customers($where: CustomerWhereInput, $page: Int, $pageSize: Int, $orderBy: OrderBy) {
  result: customersConnection(
    where: $where
    page: $page
    pageSize: $pageSize
    orderBy: $orderBy
  ) {
    pageInfo {
      total
      totalPages
      current
      pageSize
    }
    edges {
      node {
        id
        name
        ticketStrategy
        contactInfo {
          name
          address {
            province
            provinceName
            city
            cityName
            district
            districtName
            street
            streetName
            detailedAddress
            fullAddress(excludeDetailed: true)
          }
          phone
          email
        }
      }
      cursor
    }
  }
}
    `])));function U(e){var n=t()(t()({},r),e);return i.a(d,n)}function me(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(d,n)}function _e(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(d,n)}var W=(0,u.Ps)(D||(D=o()([`
    mutation createCustomer($input: CustomerCreateInput!) {
  result: createCustomer(input: $input) {
    id
    name
  }
}
    `])));function N(e){var n=t()(t()({},r),e);return s.D(W,n)}var H=(0,u.Ps)(g||(g=o()([`
    mutation updateCustomer($id: ID!, $input: CustomerUpdateInput!) {
  result: updateCustomer(id: $id, input: $input) {
    id
    name
  }
}
    `])));function R(e){var n=t()(t()({},r),e);return s.D(H,n)}var K=(0,u.Ps)(b||(b=o()([`
    mutation deleteManyCustomers($where: CustomerWhereInput!) {
  result: deleteManyCustomers(where: $where) {
    count
  }
}
    `])));function x(e){var n=t()(t()({},r),e);return s.D(K,n)}var p=(0,u.Ps)(M||(M=o()([`
    query customerStores($where: CustomerStoreWhereInput, $page: Int, $pageSize: Int, $orderBy: OrderBy) {
  result: customerStoresConnection(
    where: $where
    page: $page
    pageSize: $pageSize
    orderBy: $orderBy
  ) {
    pageInfo {
      total
      totalPages
      current
      pageSize
    }
    edges {
      node {
        ...CustomerStoreParts
      }
      cursor
    }
  }
}
    `,""])),c);function F(e){var n=t()(t()({},r),e);return i.a(p,n)}function G(e){var n=t()(t()({},r),e);return S.t(p,n)}function le(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(p,n)}var V=(0,u.Ps)($||($=o()([`
    mutation createCustomerStore($input: CustomerStoreCreateInput!) {
  result: createCustomerStore(input: $input) {
    ...CustomerStoreParts
  }
}
    `,""])),c);function Y(e){var n=t()(t()({},r),e);return s.D(V,n)}var Z=(0,u.Ps)(j||(j=o()([`
    mutation updateCustomerStore($id: ID!, $input: CustomerStoreUpdateInput!) {
  result: updateCustomerStore(id: $id, input: $input) {
    ...CustomerStoreParts
  }
}
    `,""])),c);function J(e){var n=t()(t()({},r),e);return s.D(Z,n)}var X=(0,u.Ps)(O||(O=o()([`
    mutation deleteManyCustomerStores($where: CustomerStoreWhereInput!) {
  result: deleteManyCustomerStores(where: $where) {
    count
  }
}
    `])));function q(e){var n=t()(t()({},r),e);return s.D(X,n)}var m=(0,u.Ps)(P||(P=o()([`
    query tickets($where: TicketWhereInput, $page: Int, $pageSize: Int, $orderBy: OrderBy) {
  result: ticketsConnection(
    where: $where
    page: $page
    pageSize: $pageSize
    orderBy: $orderBy
  ) {
    pageInfo {
      total
      totalPages
      current
      pageSize
    }
    edges {
      node {
        ...TicketParts
      }
      cursor
    }
  }
}
    `,""])),E);function ee(e){var n=t()(t()({},r),e);return i.a(m,n)}function ne(e){var n=t()(t()({},r),e);return S.t(m,n)}function ye(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(m,n)}var _=(0,u.Ps)(h||(h=o()([`
    query ticket($id: ID!) {
  result: ticket(id: $id) {
    ...TicketParts
    attachments
    assignee {
      id
      name
      phone {
        number
      }
    }
    completedAt(format: "yyyy-MM-dd HH:mm")
    suspendedAt(format: "yyyy-MM-dd HH:mm")
    statusHistory {
      id
      status
      loggedBy {
        id
        name
      }
      logTime(format: "yyyy-MM-dd HH:mm")
      note
    }
  }
}
    `,""])),E);function te(e){var n=t()(t()({},r),e);return i.a(_,n)}function Se(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(_,n)}function Ce(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(_,n)}var re=(0,u.Ps)(I||(I=o()([`
    mutation createTicket($input: TicketCreateInput!) {
  result: createTicket(input: $input) {
    id
  }
}
    `])));function fe(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useMutation(re,n)}var oe=(0,u.Ps)(T||(T=o()([`
    mutation updateTicket($id: ID!, $input: TicketUpdateInput!) {
  result: updateTicket(id: $id, input: $input) {
    id
  }
}
    `])));function ve(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useMutation(oe,n)}var ue=(0,u.Ps)(k||(k=o()([`
    mutation deleteManyTickets($where: TicketWhereInput!) {
  result: deleteManyTickets(where: $where) {
    count
  }
}
    `])));function ae(e){var n=t()(t()({},r),e);return s.D(ue,n)}var l=(0,u.Ps)(A||(A=o()([`
    query customer($id: ID!) {
  result: customer(id: $id) {
    id
    name
    ticketStrategy
    contactInfo {
      name
      address {
        province
        provinceName
        city
        cityName
        district
        districtName
        street
        streetName
        detailedAddress
        fullAddress(excludeDetailed: true)
      }
      phone
      email
    }
  }
}
    `])));function se(e){var n=t()(t()({},r),e);return i.a(l,n)}function De(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(l,n)}function ge(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(l,n)}var y=(0,u.Ps)(Q||(Q=o()([`
    query org($code: ID!) {
  organization(id: $code) {
    id
  }
}
    `])));function ie(e){var n=t()(t()({},r),e);return i.a(y,n)}function be(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(y,n)}function Me(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(y,n)}var ce=(0,u.Ps)(z||(z=o()([`
    mutation createOrg($input: OrganizationCreateInput!) {
  organization: createOrganization(input: $input) {
    id
  }
}
    `])));function de(e){var n=t()(t()({},r),e);return s.D(ce,n)}}}]);
