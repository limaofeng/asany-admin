import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type BooksQueryVariables = Exact<Record<string, never>>;

export type BooksQuery = {
  __typename?: 'Query';
  books: {
    __typename?: 'ContactBook';
    id: string;
    name: string;
    type: ContactBookType;
    namespaces: { __typename?: 'ContactGroupNamespace'; id: string; name: string }[];
  }[];
};

export type BookQueryVariables = Exact<{
  id: Scalars['ID'];
  namespace?: InputMaybe<Scalars['String']>;
}>;

export type BookQuery = {
  __typename?: 'Query';
  book?: {
    __typename?: 'ContactBook';
    id: string;
    name: string;
    type: ContactBookType;
    namespaces: { __typename?: 'ContactGroupNamespace'; id: string; name: string }[];
    groups: {
      __typename?: 'ContactGroup';
      id: string;
      name: string;
      namespace?: string | null;
      path?: string | null;
      index?: number | null;
      parentId?: string | null;
    }[];
  } | null;
};

export type ContactsQueryVariables = Exact<{
  filter?: InputMaybe<ContactFilter>;
  page?: InputMaybe<Scalars['Int']>;
}>;

export type ContactsQuery = {
  __typename?: 'Query';
  contacts?: {
    __typename?: 'ContactConnection';
    currentPage: number;
    pageSize: number;
    totalPage: number;
    totalCount: number;
    edges: {
      __typename?: 'ContactEdge';
      cursor?: string | null;
      node: {
        __typename?: 'Contact';
        id: string;
        name?: string | null;
        title?: string | null;
        sex?: Sex | null;
        avatar?: string | null;
        email?: {
          __typename?: 'Email';
          status?: EmailStatus | null;
          address?: string | null;
        } | null;
        phone?: {
          __typename?: 'Phone';
          status?: PhoneStatus | null;
          number?: string | null;
        } | null;
      };
    }[];
  } | null;
};

export type ContactQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type ContactQuery = {
  __typename?: 'Query';
  contact: {
    __typename?: 'Contact';
    id: string;
    name?: string | null;
    title?: string | null;
    sex?: Sex | null;
    avatar?: string | null;
    phone?: { __typename?: 'Phone'; status?: PhoneStatus | null; number?: string | null } | null;
    email?: { __typename?: 'Email'; status?: EmailStatus | null; address?: string | null } | null;
    address?: {
      __typename?: 'Address';
      country?: string | null;
      province?: string | null;
      city?: string | null;
      district?: string | null;
      street?: string | null;
      postalCode?: string | null;
    } | null;
    phones?:
      | ({
          __typename?: 'ContactPhone';
          id?: string | null;
          primary?: boolean | null;
          label?: string | null;
          phone?: {
            __typename?: 'Phone';
            status?: PhoneStatus | null;
            number?: string | null;
          } | null;
        } | null)[]
      | null;
    emails?:
      | ({
          __typename?: 'ContactEmail';
          id?: string | null;
          primary?: boolean | null;
          label?: string | null;
          email?: {
            __typename?: 'Email';
            status?: EmailStatus | null;
            address?: string | null;
          } | null;
        } | null)[]
      | null;
    addresses?:
      | ({
          __typename?: 'ContactAddress';
          id?: string | null;
          primary?: boolean | null;
          label?: string | null;
          address?: {
            __typename?: 'Address';
            country?: string | null;
            province?: string | null;
            city?: string | null;
            district?: string | null;
            street?: string | null;
            postalCode?: string | null;
          } | null;
        } | null)[]
      | null;
  };
};

export type ContactPartsFragment = {
  __typename?: 'Contact';
  name?: string | null;
  title?: string | null;
  sex?: Sex | null;
  avatar?: string | null;
  phone?: { __typename?: 'Phone'; status?: PhoneStatus | null; number?: string | null } | null;
  email?: { __typename?: 'Email'; status?: EmailStatus | null; address?: string | null } | null;
  address?: {
    __typename?: 'Address';
    country?: string | null;
    province?: string | null;
    city?: string | null;
    district?: string | null;
    street?: string | null;
    postalCode?: string | null;
  } | null;
  phones?:
    | ({
        __typename?: 'ContactPhone';
        id?: string | null;
        primary?: boolean | null;
        label?: string | null;
        phone?: {
          __typename?: 'Phone';
          status?: PhoneStatus | null;
          number?: string | null;
        } | null;
      } | null)[]
    | null;
  emails?:
    | ({
        __typename?: 'ContactEmail';
        id?: string | null;
        primary?: boolean | null;
        label?: string | null;
        email?: {
          __typename?: 'Email';
          status?: EmailStatus | null;
          address?: string | null;
        } | null;
      } | null)[]
    | null;
  addresses?:
    | ({
        __typename?: 'ContactAddress';
        id?: string | null;
        primary?: boolean | null;
        label?: string | null;
        address?: {
          __typename?: 'Address';
          country?: string | null;
          province?: string | null;
          city?: string | null;
          district?: string | null;
          street?: string | null;
          postalCode?: string | null;
        } | null;
      } | null)[]
    | null;
};

export type EmailPartsFragment = {
  __typename?: 'Email';
  status?: EmailStatus | null;
  address?: string | null;
};

export type PhonePartsFragment = {
  __typename?: 'Phone';
  status?: PhoneStatus | null;
  number?: string | null;
};

export type AddressPartsFragment = {
  __typename?: 'Address';
  country?: string | null;
  province?: string | null;
  city?: string | null;
  district?: string | null;
  street?: string | null;
  postalCode?: string | null;
};

export const PhonePartsFragmentDoc = gql`
  fragment PhoneParts on Phone {
    status
    number
  }
`;
export const EmailPartsFragmentDoc = gql`
  fragment EmailParts on Email {
    status
    address
  }
`;
export const AddressPartsFragmentDoc = gql`
  fragment AddressParts on Address {
    country
    province
    city
    district
    street
    postalCode
  }
`;
export const ContactPartsFragmentDoc = gql`
  fragment ContactParts on Contact {
    name
    title
    sex
    avatar
    phone {
      ...PhoneParts
    }
    email {
      ...EmailParts
    }
    address {
      ...AddressParts
    }
    phones {
      id
      primary
      label
      phone {
        ...PhoneParts
      }
    }
    emails {
      id
      primary
      label
      email {
        ...EmailParts
      }
    }
    addresses {
      id
      primary
      label
      address {
        ...AddressParts
      }
    }
  }
  ${PhonePartsFragmentDoc}
  ${EmailPartsFragmentDoc}
  ${AddressPartsFragmentDoc}
`;
export const BooksDocument = gql`
  query books {
    books: contactBooks {
      id
      name
      type
      namespaces {
        id
        name
      }
    }
  }
`;

/**
 * __useBooksQuery__
 *
 * To run a query within a React component, call `useBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useBooksQuery(
  baseOptions?: Apollo.QueryHookOptions<BooksQuery, BooksQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BooksQuery, BooksQueryVariables>(BooksDocument, options);
}
export function useBooksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BooksQuery, BooksQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BooksQuery, BooksQueryVariables>(BooksDocument, options);
}
export type BooksQueryHookResult = ReturnType<typeof useBooksQuery>;
export type BooksLazyQueryHookResult = ReturnType<typeof useBooksLazyQuery>;
export type BooksQueryResult = Apollo.QueryResult<BooksQuery, BooksQueryVariables>;
export const BookDocument = gql`
  query book($id: ID!, $namespace: String) {
    book: contactBook(id: $id) {
      id
      name
      type
      namespaces {
        id
        name
      }
      groups(namespace: $namespace) {
        id
        name
        namespace
        path
        index
        parentId
      }
    }
  }
`;

/**
 * __useBookQuery__
 *
 * To run a query within a React component, call `useBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookQuery({
 *   variables: {
 *      id: // value for 'id'
 *      namespace: // value for 'namespace'
 *   },
 * });
 */
export function useBookQuery(baseOptions: Apollo.QueryHookOptions<BookQuery, BookQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BookQuery, BookQueryVariables>(BookDocument, options);
}
export function useBookLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BookQuery, BookQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BookQuery, BookQueryVariables>(BookDocument, options);
}
export type BookQueryHookResult = ReturnType<typeof useBookQuery>;
export type BookLazyQueryHookResult = ReturnType<typeof useBookLazyQuery>;
export type BookQueryResult = Apollo.QueryResult<BookQuery, BookQueryVariables>;
export const ContactsDocument = gql`
  query contacts($filter: ContactFilter, $page: Int = 1) {
    contacts(filter: $filter, page: $page) {
      currentPage
      pageSize
      totalPage
      totalCount
      edges {
        cursor
        node {
          id
          name
          title
          sex
          avatar
          email {
            ...EmailParts
          }
          phone {
            ...PhoneParts
          }
        }
      }
    }
  }
  ${EmailPartsFragmentDoc}
  ${PhonePartsFragmentDoc}
`;

/**
 * __useContactsQuery__
 *
 * To run a query within a React component, call `useContactsQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useContactsQuery(
  baseOptions?: Apollo.QueryHookOptions<ContactsQuery, ContactsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ContactsQuery, ContactsQueryVariables>(ContactsDocument, options);
}
export function useContactsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ContactsQuery, ContactsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ContactsQuery, ContactsQueryVariables>(ContactsDocument, options);
}
export type ContactsQueryHookResult = ReturnType<typeof useContactsQuery>;
export type ContactsLazyQueryHookResult = ReturnType<typeof useContactsLazyQuery>;
export type ContactsQueryResult = Apollo.QueryResult<ContactsQuery, ContactsQueryVariables>;
export const ContactDocument = gql`
  query contact($id: ID!) {
    contact(id: $id) {
      id
      ...ContactParts
    }
  }
  ${ContactPartsFragmentDoc}
`;

/**
 * __useContactQuery__
 *
 * To run a query within a React component, call `useContactQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useContactQuery(
  baseOptions: Apollo.QueryHookOptions<ContactQuery, ContactQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ContactQuery, ContactQueryVariables>(ContactDocument, options);
}
export function useContactLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ContactQuery, ContactQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ContactQuery, ContactQueryVariables>(ContactDocument, options);
}
export type ContactQueryHookResult = ReturnType<typeof useContactQuery>;
export type ContactLazyQueryHookResult = ReturnType<typeof useContactLazyQuery>;
export type ContactQueryResult = Apollo.QueryResult<ContactQuery, ContactQueryVariables>;
