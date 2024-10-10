import { useParams } from 'react-router';

import moment from 'moment';

import { ContentWrapper } from '@/layouts/components';

import { useTicketQuery } from '../hooks';

import './TicketDetailsView.scss';

function TicketDetailsView() {
  const params = useParams();

  const { data, loading } = useTicketQuery({
    variables: {
      id: params.id,
    },
    fetchPolicy: 'network-only',
  });

  const ticket = data?.result;

  return (
    <ContentWrapper
      header={{
        title: '服务单详情',
      }}
      loading={loading}
    >
      <div className="d-flex flex-column flex-xl-row p-7">
        <div className="flex-lg-row-fluid me-xl-15 mb-20 mb-xl-0">
          <div className="mb-0">
            {/*--begin::Heading--*/}
            <div className="d-flex align-items-center mb-12">
              {/*--begin::Icon--*/}
              <i className="ki-duotone ki-file-added fs-4qx text-success ms-n2 me-3">
                <span className="path1"></span>
                <span className="path2"></span>
              </i>
              {/*--end::Icon--*/}

              {/*--begin::Content--*/}
              <div className="d-flex flex-column">
                {/*--begin::Title--*/}
                <h1 className="text-gray-800 fw-semibold">
                  {ticket?.description}
                </h1>
                {/*--end::Title--*/}

                {/*--begin::Info--*/}
                <div className="">
                  {/*--begin::Label--*/}
                  <span className="fw-semibold text-muted me-6">
                    设备:
                    <a href="#" className="text-muted text-hover-primary">
                      {ticket?.device?.name}
                    </a>
                  </span>
                  {/*--end::Label--*/}

                  {/*--begin::Label--*/}
                  <span className="fw-semibold text-muted me-6">
                    报告人:
                    <a href="#" className="ms-2 text-muted text-hover-primary">
                      {ticket?.contactInfo?.name}
                    </a>
                  </span>
                  {/*--end::Label--*/}

                  {/*--begin::Label--*/}
                  <span className="fw-semibold text-muted">
                    创建时间:
                    <span className="ms-2 fw-bold text-gray-600 me-1">
                      {ticket?.createdAt
                        ? moment(ticket.createdAt).fromNow()
                        : 'unknown'}
                    </span>
                    ({moment(ticket?.createdAt).format('YYYY-MM-DD HH:mm:ss')})
                  </span>
                  {/*--end::Label--*/}
                </div>
                {/*--end::Info--*/}
              </div>
              {/*--end::Content--*/}
            </div>
            {/*--end::Heading--*/}

            {/*--begin::Details--*/}
            <div className="mb-15">
              {/*--begin::Description--*/}
              <div className="mb-15 fs-5 fw-normal text-gray-800">
                {/*--begin::Text--*/}
                <div className="mb-5 fs-5">Hello,</div>
                {/*--end::Text--*/}

                {/*--begin::Text--*/}
                <div className="mb-10">
                  When you’re done bundling, you should decide on the order of
                  the topics your article. In most cases, you can decide to
                  order thematically. For instance, if you want to discuss
                  various aspects or angles of the main topic of your blog post.
                  But you can also order your text chronologically or
                  didactically.
                </div>
                {/*--end::Text--*/}

                {/*--begin::Code--*/}
                <div className="mb-10">
                  {/*--begin::Highlight--*/}
                  <div className="highlight">
                    {' '}
                    <button
                      className="highlight-copy btn"
                      data-bs-toggle="tooltip"
                      title="Copy code"
                      type="button"
                    >
                      copy
                    </button>
                    <ul className="nav nav-pills" role="tablist">
                      <li className="nav-item">
                        {' '}
                        <a
                          className="nav-link active"
                          data-bs-toggle="tab"
                          href="#kt_highlight_67035dfea0332"
                          role="tab"
                        >
                          JAVASCRIPT
                        </a>
                      </li>
                      <li className="nav-item">
                        {' '}
                        <a
                          className="nav-link "
                          data-bs-toggle="tab"
                          href="#kt_highlight_67035dfea0334"
                          role="tab"
                        >
                          HTML
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="kt_highlight_67035dfea0332"
                        role="tabpanel"
                      >
                        {' '}
                        <div className="highlight-code">
                          <pre className="language-javascript">
                            <code className="language-javascript">xxx</code>
                          </pre>{' '}
                        </div>
                      </div>
                      <div
                        className="tab-pane fade "
                        id="kt_highlight_67035dfea0334"
                        role="tabpanel"
                      >
                        {' '}
                        <div className="highlight-code">
                          <pre className="language-html">
                            <code className="language-html">
                              &lt;button type=&quot;button&quot; class=&quot;btn
                              btn-primary me-10&quot;
                              id=&quot;kt_button_1&quot;&gt; &lt;span
                              class=&quot;indicator-label&quot;&gt; Submit
                              &lt;/span&gt; &lt;span
                              class=&quot;indicator-progress&quot;&gt; Please
                              wait... &lt;span class=&quot;spinner-border
                              spinner-border-sm align-middle
                              ms-2&quot;&gt;&lt;/span&gt; &lt;/span&gt;
                              &lt;/button&gt;
                            </code>
                          </pre>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*--end::Highlight--*/}{' '}
                </div>
                {/*--end::Code--*/}

                {/*--begin::Section--*/}
                <div className="mb-10">
                  In the above example we’re discussing, ordering topics
                  thematically makes the most sense.
                </div>
                {/*--end::Section--*/}

                {/*--begin::Section--*/}
                <div className="m-0">
                  Than you, <br />
                  Jerry
                </div>
                {/*--end::Section--*/}
              </div>
              {/*--end::Description--*/}

              {/*--begin::Row--*/}
              <div className="row mb-7">
                {/*--begin::Col--*/}
                <div className="col-md-3 fv-row mb-3">
                  <label className="fs-6 fw-semibold mb-2">Product</label>

                  <select
                    className="form-select form-select-solid"
                    data-control="select2"
                    data-hide-search="true"
                    name="product"
                  >
                    <option value="1">HTML Theme</option>
                    <option value="1">Angular App</option>
                    <option value="1">Vue App</option>
                    <option value="1">React Theme</option>
                    <option value="1">Figma UI Kit</option>
                    <option value="3">Laravel App</option>
                    <option value="4">Blazor App</option>
                    <option value="5">Django App</option>
                  </select>
                </div>
                {/*--end::Col--*/}

                {/*--begin::Col--*/}
                <div className="col-md-3 fv-row mb-3">
                  <label className="fs-6 fw-semibold mb-2">Assign To</label>

                  <select
                    className="form-select form-select-solid"
                    data-control="select2"
                    data-hide-search="true"
                    data-placeholder="Assign to"
                    name="user"
                  >
                    <option value="1" selected>
                      Karina Clark
                    </option>
                    <option value="2">Robert Doe</option>
                    <option value="3">Niel Owen</option>
                    <option value="4">Olivia Wild</option>
                    <option value="5">Sean Bean</option>
                  </select>
                </div>
                {/*--end::Col--*/}

                {/*--begin::Col--*/}
                <div className="col-sm-3 fv-row mb-3">
                  <label className="fs-6 fw-semibold mb-2">Status</label>

                  <select
                    className="form-select form-select-solid"
                    data-control="select2"
                    data-placeholder="Open"
                  >
                    <option value="1" selected>
                      Open
                    </option>
                    <option value="2">Pending</option>
                    <option value="3">Resolved</option>
                    <option value="3">Closed</option>
                  </select>
                </div>
                {/*--end::Col--*/}

                {/*--begin::Col--*/}
                <div className="col-sm-3 fv-row mb-3">
                  <label className="fs-6 fw-semibold mb-2">Priority</label>

                  <select
                    className="form-select form-select-solid"
                    data-control="select2"
                    data-placeholder="Open"
                    data-hide-search="true"
                  >
                    <option value="1" selected>
                      Low
                    </option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                    <option value="3">Urgent</option>
                  </select>
                </div>
                {/*--end::Col--*/}
              </div>
              {/*--end::Row--*/}

              {/*--begin::Input group--*/}
              <div className="mb-0">
                <textarea
                  className="form-control form-control-solid placeholder-gray-600 fw-bold fs-4 ps-9 pt-7"
                  rows={6}
                  name="message"
                  placeholder="Share Your Knowledge"
                ></textarea>

                {/*--begin::Submit--*/}
                <button
                  type="submit"
                  className="btn btn-primary mt-n20 mb-20 position-relative float-end me-7"
                >
                  Send
                </button>
                {/*--end::Submit--*/}
              </div>
              {/*--end::Input group--*/}
            </div>
            {/*--end::Details--*/}

            {/*--begin::Comments--*/}
            <div className="mb-15">
              {/*--begin::Comment--*/}
              <div className="mb-9">
                {/*--begin::Card--*/}
                <div className="card card-bordered w-100">
                  {/*--begin::Body--*/}
                  <div className="card-body">
                    {/*--begin::Wrapper--*/}
                    <div className="w-100 d-flex flex-stack mb-8">
                      {/*--begin::Container--*/}
                      <div className="d-flex align-items-center f">
                        {/*--begin::Author--*/}
                        <div className="symbol symbol-50px me-5">
                          <div className="symbol-label fs-1 fw-bold bg-light-success text-success">
                            S{' '}
                          </div>
                        </div>
                        {/*--end::Author--*/}

                        {/*--begin::Info--*/}
                        <div className="d-flex flex-column fw-semibold fs-5 text-gray-600 text-gray-900">
                          {/*--begin::Text--*/}
                          <div className="d-flex align-items-center">
                            {/*--begin::Username--*/}
                            <a
                              href="/metronic8/demo7/pages/user-profile/overview.html"
                              className="text-gray-800 fw-bold text-hover-primary fs-5 me-3"
                            >
                              Sandra Piquet
                            </a>
                            {/*--end::Username--*/}

                            <span className="m-0"></span>
                          </div>
                          {/*--end::Text--*/}

                          {/*--begin::Date--*/}
                          <span className="text-muted fw-semibold fs-6">
                            2 Days ago
                          </span>
                          {/*--end::Date--*/}
                        </div>
                        {/*--end::Info--*/}
                      </div>
                      {/*--end::Container--*/}

                      {/*--begin::Actions--*/}
                      <div className="m-0">
                        <button
                          type="button"
                          className="btn btn-color-gray-500 btn-active-color-primary p-0 fw-bold"
                        >
                          Reply
                        </button>
                      </div>
                      {/*--end::Actions--*/}
                    </div>
                    {/*--end::Wrapper--*/}

                    {/*--begin::Desc--*/}
                    <p className="fw-normal fs-5 text-gray-700 m-0">
                      I run a team of 20 product managers, developers, QA and UX
                      Previously we designed everything ourselves.
                    </p>
                    {/*--end::Desc--*/}
                  </div>
                  {/*--end::Body--*/}
                </div>
                {/*--end::Card--*/}
              </div>
              {/*--end::Comment--*/}

              {/*--begin::Comment--*/}
              <div className="mb-9">
                {/*--begin::Card--*/}
                <div className="card card-bordered w-100">
                  {/*--begin::Body--*/}
                  <div className="card-body">
                    {/*--begin::Wrapper--*/}
                    <div className="w-100 d-flex flex-stack mb-8">
                      {/*--begin::Container--*/}
                      <div className="d-flex align-items-center f">
                        {/*--begin::Author--*/}
                        <div className="symbol symbol-50px me-5">
                          <div className="symbol-label fs-1 fw-bold bg-light-info text-info">
                            B{' '}
                          </div>
                        </div>
                        {/*--end::Author--*/}

                        {/*--begin::Info--*/}
                        <div className="d-flex flex-column fw-semibold fs-5 text-gray-600 text-gray-900">
                          {/*--begin::Text--*/}
                          <div className="d-flex align-items-center">
                            {/*--begin::Username--*/}
                            <a
                              href="/metronic8/demo7/pages/user-profile/overview.html"
                              className="text-gray-800 fw-bold text-hover-primary fs-5 me-3"
                            >
                              Bob Clarcson
                            </a>
                            {/*--end::Username--*/}

                            <span className="badge badge-light-danger">
                              Author
                            </span>
                          </div>
                          {/*--end::Text--*/}

                          {/*--begin::Date--*/}
                          <span className="text-muted fw-semibold fs-6">
                            4 Days ago
                          </span>
                          {/*--end::Date--*/}
                        </div>
                        {/*--end::Info--*/}
                      </div>
                      {/*--end::Container--*/}

                      {/*--begin::Actions--*/}
                      <div className="m-0">
                        <button
                          type="button"
                          className="btn btn-color-gray-500 btn-active-color-primary p-0 fw-bold"
                        >
                          Reply
                        </button>
                      </div>
                      {/*--end::Actions--*/}
                    </div>
                    {/*--end::Wrapper--*/}

                    {/*--begin::Desc--*/}
                    <p className="fw-normal fs-5 text-gray-700 m-0">
                      I run a team of 20 product managers, developers, QA and UX
                      Previously we designed everything ourselves.
                    </p>
                    {/*--end::Desc--*/}
                  </div>
                  {/*--end::Body--*/}
                </div>
                {/*--end::Card--*/}
              </div>
              {/*--end::Comment--*/}

              {/*--begin::Comment--*/}
              <div className="ms-9 mb-9">
                {/*--begin::Card--*/}
                <div className="card card-bordered w-100">
                  {/*--begin::Body--*/}
                  <div className="card-body">
                    {/*--begin::Wrapper--*/}
                    <div className="w-100 d-flex flex-stack mb-8">
                      {/*--begin::Container--*/}
                      <div className="d-flex align-items-center f">
                        {/*--begin::Author--*/}
                        <div className="symbol symbol-50px me-5">
                          <img
                            src="/metronic8/demo7/assets/media/avatars/300-1.jpg"
                            alt=""
                          />
                        </div>
                        {/*--end::Author--*/}

                        {/*--begin::Info--*/}
                        <div className="d-flex flex-column fw-semibold fs-5 text-gray-600 text-gray-900">
                          {/*--begin::Text--*/}
                          <div className="d-flex align-items-center">
                            {/*--begin::Username--*/}
                            <a
                              href="/metronic8/demo7/pages/user-profile/overview.html"
                              className="text-gray-800 fw-bold text-hover-primary fs-5 me-3"
                            >
                              Matthew
                            </a>
                            {/*--end::Username--*/}

                            <span className="m-0"></span>
                          </div>
                          {/*--end::Text--*/}

                          {/*--begin::Date--*/}
                          <span className="text-muted fw-semibold fs-6">
                            3 Days ago
                          </span>
                          {/*--end::Date--*/}
                        </div>
                        {/*--end::Info--*/}
                      </div>
                      {/*--end::Container--*/}

                      {/*--begin::Actions--*/}
                      <div className="m-0">
                        <button
                          type="button"
                          className="btn btn-color-gray-500 btn-active-color-primary p-0 fw-bold"
                        >
                          Reply
                        </button>
                      </div>
                      {/*--end::Actions--*/}
                    </div>
                    {/*--end::Wrapper--*/}

                    {/*--begin::Desc--*/}
                    <p className="fw-normal fs-5 text-gray-700 m-0">
                      I run a team of 20 product managers, developers, QA and UX
                      Previously we designed everything ourselves.
                    </p>
                    {/*--end::Desc--*/}
                  </div>
                  {/*--end::Body--*/}
                </div>
                {/*--end::Card--*/}
              </div>
              {/*--end::Comment--*/}

              {/*--begin::Comment--*/}
              <div className="overflow-hidden position-relative card-rounded">
                {/*--begin::Ribbon--*/}
                <div className="ribbon ribbon-triangle ribbon-top-start border-success">
                  {/*--begin::Ribbon icon--*/}
                  <div className="ribbon-icon mt-n5 ms-n6">
                    <i className="ki-duotone ki-check fs-1 text-white mt-n1"></i>{' '}
                  </div>
                  {/*--end::Ribbon icon--*/}
                </div>
                {/*--end::Ribbon--*/}

                {/*--begin::Card--*/}
                <div className="card card-bordered w-100">
                  {/*--begin::Body--*/}
                  <div className="card-body">
                    {/*--begin::Wrapper--*/}
                    <div className="w-100 d-flex flex-stack mb-8">
                      {/*--begin::Container--*/}
                      <div className="d-flex align-items-center f">
                        {/*--begin::Author--*/}
                        <div className="symbol symbol-50px me-5">
                          <div className="symbol-label fs-1 fw-bold bg-light-primary text-primary">
                            B{' '}
                          </div>
                        </div>
                        {/*--end::Author--*/}

                        {/*--begin::Info--*/}
                        <div className="d-flex flex-column fw-semibold fs-5 text-gray-600 text-gray-900">
                          {/*--begin::Text--*/}
                          <div className="d-flex align-items-center">
                            {/*--begin::Username--*/}
                            <a
                              href="/metronic8/demo7/pages/user-profile/overview.html"
                              className="text-gray-800 fw-bold text-hover-primary fs-5 me-3"
                            >
                              Boris
                            </a>
                            {/*--end::Username--*/}

                            <span className="m-0"></span>
                          </div>
                          {/*--end::Text--*/}

                          {/*--begin::Date--*/}
                          <span className="text-muted fw-semibold fs-6">
                            6 Days ago
                          </span>
                          {/*--end::Date--*/}
                        </div>
                        {/*--end::Info--*/}
                      </div>
                      {/*--end::Container--*/}

                      {/*--begin::Actions--*/}
                      <div className="m-0">
                        {/*--begin::Menu--*/}
                        <button
                          type="button"
                          className="btn btn-sm btn-icon btn-active-light-primary"
                          data-kt-menu-trigger="click"
                          data-kt-menu-overflow="true"
                          data-kt-menu-placement="top-end"
                        >
                          <i className="ki-duotone ki-dots-square fs-1">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                            <span className="path4"></span>
                          </i>{' '}
                        </button>

                        {/*--begin::Menu 2--*/}
                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                          data-kt-menu="true"
                        >
                          {/*--begin::Menu item--*/}
                          <div className="menu-item px-3">
                            <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">
                              Quick Actions
                            </div>
                          </div>
                          {/*--end::Menu item--*/}

                          {/*--begin::Menu separator--*/}
                          <div className="separator mb-3 opacity-75"></div>
                          {/*--end::Menu separator--*/}

                          {/*--begin::Menu item--*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              New Ticket
                            </a>
                          </div>
                          {/*--end::Menu item--*/}

                          {/*--begin::Menu item--*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              New Customer
                            </a>
                          </div>
                          {/*--end::Menu item--*/}

                          {/*--begin::Menu item--*/}
                          <div
                            className="menu-item px-3"
                            data-kt-menu-trigger="hover"
                            data-kt-menu-placement="right-start"
                          >
                            {/*--begin::Menu item--*/}
                            <a href="#" className="menu-link px-3">
                              <span className="menu-title">New Group</span>
                              <span className="menu-arrow"></span>
                            </a>
                            {/*--end::Menu item--*/}

                            {/*--begin::Menu sub--*/}
                            <div className="menu-sub menu-sub-dropdown w-175px py-4">
                              {/*--begin::Menu item--*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">
                                  Admin Group
                                </a>
                              </div>
                              {/*--end::Menu item--*/}

                              {/*--begin::Menu item--*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">
                                  Staff Group
                                </a>
                              </div>
                              {/*--end::Menu item--*/}

                              {/*--begin::Menu item--*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">
                                  Member Group
                                </a>
                              </div>
                              {/*--end::Menu item--*/}
                            </div>
                            {/*--end::Menu sub--*/}
                          </div>
                          {/*--end::Menu item--*/}

                          {/*--begin::Menu item--*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              New Contact
                            </a>
                          </div>
                          {/*--end::Menu item--*/}

                          {/*--begin::Menu separator--*/}
                          <div className="separator mt-3 opacity-75"></div>
                          {/*--end::Menu separator--*/}

                          {/*--begin::Menu item--*/}
                          <div className="menu-item px-3">
                            <div className="menu-content px-3 py-3">
                              <a
                                className="btn btn-primary  btn-sm px-4"
                                href="#"
                              >
                                Generate Reports
                              </a>
                            </div>
                          </div>
                          {/*--end::Menu item--*/}
                        </div>
                        {/*--end::Menu 2--*/}
                        {/*--end::Menu--*/}
                      </div>
                      {/*--end::Actions--*/}
                    </div>
                    {/*--end::Wrapper--*/}

                    {/*--begin::Desc--*/}
                    <p className="fw-normal fs-5 text-gray-700 m-0">
                      I run a team of 20 product managers, developers, QA and UX
                      Previously we designed everything ourselves.
                    </p>
                    {/*--end::Desc--*/}
                  </div>
                  {/*--end::Body--*/}
                </div>
                {/*--end::Card--*/}
              </div>
              {/*--end::Comment--*/}
            </div>
            {/*--end::Comments--*/}

            {/*--begin::Pagination--*/}
            <ul className="pagination">
              <li className="page-item previous disabled">
                <a href="#" className="page-link">
                  <i className="previous"></i>
                </a>
              </li>
              <li className="page-item ">
                <a href="#" className="page-link">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a href="#" className="page-link">
                  2
                </a>
              </li>
              <li className="page-item ">
                <a href="#" className="page-link">
                  3
                </a>
              </li>
              <li className="page-item ">
                <a href="#" className="page-link">
                  4
                </a>
              </li>
              <li className="page-item ">
                <a href="#" className="page-link">
                  5
                </a>
              </li>
              <li className="page-item ">
                <a href="#" className="page-link">
                  6
                </a>
              </li>
              <li className="page-item next">
                <a href="#" className="page-link">
                  <i className="next"></i>
                </a>
              </li>
            </ul>
            {/*--end::Pagination--*/}
          </div>
        </div>

        <div className="flex-column flex-lg-row-auto w-100 mw-lg-300px mw-xxl-350px">
          <div className="card card-flush ">
            {/*--begin::Header--*/}
            <div className="card-header pt-5">
              {/*--begin::Title--*/}
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-gray-900">
                  状态流转情况
                </span>
                <span className="text-gray-500 pt-2 fw-semibold fs-6">
                  最新活动
                </span>
              </h3>
              {/*--end::Title--*/}

              {/*--begin::Toolbar--*/}
              <div className="card-toolbar">
                {/*--begin::Menu--*/}
                <button
                  type="button"
                  className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-overflow="true"
                >
                  <i className="ki-duotone ki-dots-square fs-1 text-gray-500 me-n1">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                    <span className="path4"></span>
                  </i>
                </button>

                {/*--end::Menu--*/}
              </div>
              {/*--end::Toolbar--*/}
            </div>
            {/*--end::Header--*/}

            {/*--begin::Body--*/}
            <div className="card-body pt-6">
              {/*--begin::Timeline--*/}
              <div className="timeline-label timeline-label-ticket-status">
                {/*--begin::Item--*/}

                {ticket?.statusHistory.map((item) => (
                  <div key={item.id} className="timeline-item">
                    {/*--begin::Label--*/}
                    <div className="timeline-label-ticket-status timeline-label fw-bold w-75px text-gray-800 fs-6">
                      {moment(item.logTime).fromNow()}
                    </div>
                    {/*--end::Label--*/}

                    {/*--begin::Badge--*/}
                    <div className="timeline-badge">
                      <i className="ki-duotone ki-abstract-8 text-gray-600 fs-3">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </i>
                    </div>
                    {/*--end::Badge--*/}

                    {/*--begin::Text--*/}
                    <div className="fw-semibold text-gray-700 ps-3 fs-7">
                      {item.status} {item.loggedBy?.name} {item.note}
                      <br />
                      {moment(item.logTime).format('YYYY-MM-DD HH:mm:ss')}
                    </div>
                    {/*--end::Text--*/}
                  </div>
                ))}

                {/*--begin::Item--*/}
                <div className="timeline-item d-flex align-items-center">
                  {/*--begin::Label--*/}
                  <div className="timeline-label-ticket-status timeline-label fw-bold text-gray-800 fs-6">
                    10:00
                  </div>
                  {/*--end::Label--*/}

                  {/*--begin::Badge--*/}
                  <div className="timeline-badge">
                    <i className="ki-duotone ki-abstract-8 text-gray-600 fs-3">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                  </div>
                  {/*--end::Badge--*/}

                  {/*--begin::Content--*/}
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 px-3">
                      AEOL meeting with
                    </span>

                    {/*--begin::Avatar--*/}
                    <div className="symbol symbol-35px me-3">
                      <img
                        src="/metronic8/demo7/assets/media/avatars/300-1.jpg"
                        alt=""
                      />
                    </div>
                    {/*--end::Avatar--*/}

                    {/*--begin::Avatar--*/}
                    <div className="symbol symbol-35px">
                      <img
                        src="/metronic8/demo7/assets/media/avatars/300-2.jpg"
                        alt=""
                      />
                    </div>
                    {/*--end::Avatar--*/}
                  </div>
                  {/*--end::Content--*/}
                </div>
                {/*--end::Item--*/}

                {/*--begin::Item--*/}
                <div className="timeline-item">
                  {/*--begin::Label--*/}
                  <div className="timeline-label-ticket-status timeline-label fw-bold text-gray-800 fs-6">
                    14:37
                  </div>
                  {/*--end::Label--*/}

                  {/*--begin::Badge--*/}
                  <div className="timeline-badge">
                    <i className="ki-duotone ki-abstract-8 text-gray-600 fs-3">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                  </div>
                  {/*--end::Badge--*/}

                  {/*--begin::Desc--*/}
                  <div className="timeline-content fw-bold text-gray-800 ps-3">
                    Make deposit
                    <a href="#" className="text-primary">
                      USD 700
                    </a>
                    . to ESL
                  </div>
                  {/*--end::Desc--*/}
                </div>
                {/*--end::Item--*/}

                {/*--begin::Item--*/}
                <div className="timeline-item">
                  {/*--begin::Label--*/}
                  <div className="timeline-label-ticket-status timeline-label fw-bold text-gray-800 fs-6">
                    16:50
                  </div>
                  {/*--end::Label--*/}

                  {/*--begin::Badge--*/}
                  <div className="timeline-badge">
                    <i className="ki-duotone ki-abstract-8 text-gray-600 fs-3">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                  </div>
                  {/*--end::Badge--*/}

                  {/*--begin::Text--*/}
                  <div className="fw-semibold text-gray-700 ps-3 fs-7">
                    Outlines keep you honest. Indulging in poorly driving and
                    keep structure keep you honest great
                  </div>
                  {/*--end::Text--*/}
                </div>
                {/*--end::Item--*/}

                {/*--begin::Item--*/}
                <div className="timeline-item">
                  {/*--begin::Label--*/}
                  <div className="timeline-label-ticket-status timeline-label fw-bold text-gray-800 fs-6">
                    21:03
                  </div>
                  {/*--end::Label--*/}

                  {/*--begin::Badge--*/}
                  <div className="timeline-badge">
                    <i className="ki-duotone ki-abstract-8 text-gray-600 fs-3">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                  </div>
                  {/*--end::Badge--*/}

                  {/*--begin::Desc--*/}
                  <div className="timeline-content fw-semibold text-gray-800 ps-3">
                    New order placed{' '}
                    <a href="#" className="text-primary">
                      #XF-2356
                    </a>
                    .
                  </div>
                  {/*--end::Desc--*/}
                </div>
                {/*--end::Item--*/}

                {/*--begin::Item--*/}
                <div className="timeline-item">
                  {/*--begin::Label--*/}
                  <div className="timeline-label-ticket-status timeline-label fw-bold text-gray-800 fs-6">
                    16:50
                  </div>
                  {/*--end::Label--*/}

                  {/*--begin::Badge--*/}
                  <div className="timeline-badge">
                    <i className="ki-duotone ki-abstract-8 text-gray-600 fs-3">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                  </div>
                  {/*--end::Badge--*/}

                  {/*--begin::Text--*/}
                  <div className="fw-semibold text-gray-700 ps-3 fs-7">
                    Outlines keep you honest. Indulging in poorly driving and
                    keep structure
                  </div>
                  {/*--end::Text--*/}
                </div>
                {/*--end::Item--*/}

                {/*--begin::Item--*/}
                <div className="timeline-item">
                  {/*--begin::Label--*/}
                  <div className="timeline-label-ticket-status timeline-label fw-bold text-gray-800 fs-6">
                    14:37
                  </div>
                  {/*--end::Label--*/}

                  {/*--begin::Badge--*/}
                  <div className="timeline-badge">
                    <i className="ki-duotone ki-abstract-8 text-gray-600 fs-3">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                  </div>
                  {/*--end::Badge--*/}

                  {/*--begin::Desc--*/}
                  <div className="timeline-content fw-bold text-gray-800 ps-3">
                    Make deposit
                    <a href="#" className="text-primary">
                      USD 700
                    </a>
                    . to ESL
                  </div>
                  {/*--end::Desc--*/}
                </div>
                {/*--end::Item--*/}
              </div>
              {/*--end::Timeline--*/}
            </div>
            {/*--end: Card Body--*/}
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default TicketDetailsView;
