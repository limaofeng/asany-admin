import { useCallback } from 'react';

import Icon from '@asany/icons';

import { Button, Card, Dropdown, Menu, Symbol } from '@/pages/Metronic/components';

function ViewContact() {
  const handleClick = useCallback((e) => {
    console.log('xxx', e);
  }, []);

  return (
    <Card flush>
      <Card.Header className="pt-7">
        <Card.Title>
          <Icon name="Duotune/com005" className="svg-icon-1 me-2" />
          <h2>联系人详情</h2>
        </Card.Title>
        <Card.Toolbar className="gap-3">
          {/* <Button size="sm" variant="light" activeColor="light-primary">
            <Icon name="Duotune/com012" className="svg-icon-2" />
            Chat
          </Button>
          <Button size="sm" variant="light" activeColor="light-primary">
            <Icon name="Duotune/com007" className="svg-icon-2" />
            Message
          </Button> */}
          <Dropdown
            overlay={
              <Menu
                onClick={handleClick}
                className="menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
              >
                <Menu.Item key="edit" className="px-3">
                  编辑
                </Menu.Item>
                <Menu.Item key="delete" className="px-3 actions-delete">
                  删除
                </Menu.Item>
              </Menu>
            }
            placement="bottomRight"
          >
            <Button
              icon={<Icon name="Duotune/gen052" className="svg-icon-2" />}
              size="sm"
              variant="light"
              activeColor="light-primary"
            />
          </Dropdown>
        </Card.Toolbar>
      </Card.Header>
      <Card.Body className=" pt-5">
        {/*--begin::Profile--*/}
        <div className="d-flex gap-7 align-items-center">
          {/*--begin::Avatar--*/}
          <Symbol.Avatar alt="xxx" shape="circle" size={100} src="assets/media/avatars/300-6.jpg" />
          {/* <div className="symbol symbol-circle symbol-100px">
            <img src="assets/media/avatars/300-6.jpg" alt="image" />
          </div> */}
          {/*--end::Avatar--*/}
          {/*--begin::Contact details--*/}
          <div className="d-flex flex-column gap-2">
            {/*--begin::Name--*/}
            <h3 className="mb-0">Emma Smith</h3>
            {/*--end::Name--*/}
            {/*--begin::Email--*/}
            <div className="d-flex align-items-center gap-2">
              {/*--begin::Svg Icon | path: icons/duotune/communication/com011.svg--*/}
              <span className="svg-icon svg-icon-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    opacity="0.3"
                    d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z"
                    fill="black"
                  />
                  <path
                    d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z"
                    fill="black"
                  />
                </svg>
              </span>
              {/*--end::Svg Icon--*/}
              <a href="#" className="text-muted text-hover-primary">
                smith@kpmg.com
              </a>
            </div>
            {/*--end::Email--*/}
            {/*--begin::Phone--*/}
            <div className="d-flex align-items-center gap-2">
              {/*--begin::Svg Icon | path: icons/duotune/electronics/elc003.svg--*/}
              <span className="svg-icon svg-icon-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 20H19V21C19 21.6 18.6 22 18 22H6C5.4 22 5 21.6 5 21V20ZM19 3C19 2.4 18.6 2 18 2H6C5.4 2 5 2.4 5 3V4H19V3Z"
                    fill="black"
                  />
                  <path opacity="0.3" d="M19 4H5V20H19V4Z" fill="black" />
                </svg>
              </span>
              {/*--end::Svg Icon--*/}
              <a href="#" className="text-muted text-hover-primary">
                +6141 234 567
              </a>
            </div>
            {/*--end::Phone--*/}
          </div>
          {/*--end::Contact details--*/}
        </div>
        {/*--end::Profile--*/}
        {/*--begin:::Tabs--*/}
        <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x fs-6 fw-bold mt-6 mb-8">
          {/*--begin:::Tab item--*/}
          <li className="nav-item">
            <a
              className="nav-link text-active-primary pb-4 active"
              data-bs-toggle="tab"
              href="#kt_contact_view_general"
            >
              {/*--begin::Svg Icon | path: icons/duotune/general/gen001.svg--*/}
              <span className="svg-icon svg-icon-4 me-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11 2.375L2 9.575V20.575C2 21.175 2.4 21.575 3 21.575H9C9.6 21.575 10 21.175 10 20.575V14.575C10 13.975 10.4 13.575 11 13.575H13C13.6 13.575 14 13.975 14 14.575V20.575C14 21.175 14.4 21.575 15 21.575H21C21.6 21.575 22 21.175 22 20.575V9.575L13 2.375C12.4 1.875 11.6 1.875 11 2.375Z"
                    fill="black"
                  />
                </svg>
              </span>
              {/*--end::Svg Icon--*/}General
            </a>
          </li>
          {/*--end:::Tab item--*/}
          {/*--begin:::Tab item--*/}
          <li className="nav-item">
            <a
              className="nav-link text-active-primary pb-4"
              data-bs-toggle="tab"
              href="#kt_contact_view_meetings"
            >
              {/*--begin::Svg Icon | path: icons/duotune/general/gen014.svg--*/}
              <span className="svg-icon svg-icon-4 me-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    opacity="0.3"
                    d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z"
                    fill="black"
                  />
                  <path
                    d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z"
                    fill="black"
                  />
                  <path
                    d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z"
                    fill="black"
                  />
                </svg>
              </span>
              {/*--end::Svg Icon--*/}Meetings
            </a>
          </li>
          {/*--end:::Tab item--*/}
          {/*--begin:::Tab item--*/}
          <li className="nav-item">
            <a
              className="nav-link text-active-primary pb-4"
              data-bs-toggle="tab"
              href="#kt_contact_view_activity"
            >
              {/*--begin::Svg Icon | path: icons/duotune/general/gen056.svg--*/}
              <span className="svg-icon svg-icon-4 me-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z"
                    fill="black"
                  />
                </svg>
              </span>
              {/*--end::Svg Icon--*/}Activity
            </a>
          </li>
          {/*--end:::Tab item--*/}
        </ul>
        {/*--end:::Tabs--*/}
        {/*--begin::Tab content--*/}
        <div className="tab-content" id="">
          {/*--begin:::Tab pane--*/}
          <div className="tab-pane fade show active" id="kt_contact_view_general" role="tabpanel">
            {/*--begin::Additional details--*/}
            <div className="d-flex flex-column gap-5 mt-7">
              {/*--begin::Company name--*/}
              <div className="d-flex flex-column gap-1">
                <div className="fw-bolder text-muted">Company Name</div>
                <div className="fw-bolder fs-5">Keenthemes Inc</div>
              </div>
              {/*--end::Company name--*/}
              {/*--begin::City--*/}
              <div className="d-flex flex-column gap-1">
                <div className="fw-bolder text-muted">City</div>
                <div className="fw-bolder fs-5">Melbourne</div>
              </div>
              {/*--end::City--*/}
              {/*--begin::Country--*/}
              <div className="d-flex flex-column gap-1">
                <div className="fw-bolder text-muted">Country</div>
                <div className="fw-bolder fs-5">Australia</div>
              </div>
              {/*--end::Country--*/}
              {/*--begin::Notes--*/}
              <div className="d-flex flex-column gap-1">
                <div className="fw-bolder text-muted">Notes</div>
                <p>
                  Emma Smith joined the team on September 2019 as a junior associate. She soon
                  showcased her expertise and experience in knowledge and skill in the field, which
                  was very valuable to the company. She was promptly promoted to senior associate on
                  July 2020.
                  <br />
                  <br />
                  Emma Smith now heads a team of 5 associates and leads the company s sales growth
                  by 7%.
                </p>
              </div>
              {/*--end::Notes--*/}
            </div>
            {/*--end::Additional details--*/}
          </div>
          {/*--end:::Tab pane--*/}
          {/*--begin:::Tab pane--*/}
          <div className="tab-pane fade" id="kt_contact_view_meetings" role="tabpanel">
            {/*--begin::Dates--*/}
            <ul className="nav nav-pills d-flex flex-stack flex-nowrap hover-scroll-x">
              {/*--begin::Date--*/}
              <li className="nav-item me-1">
                <a
                  className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 text-dark text-active-white btn-active-primary"
                  data-bs-toggle="tab"
                  href="#kt_schedule_day_0"
                >
                  <span className="opacity-50 fs-7 fw-bold">Su</span>
                  <span className="fs-6 fw-bolder">22</span>
                </a>
              </li>
              {/*--end::Date--*/}
              {/*--begin::Date--*/}
              <li className="nav-item me-1">
                <a
                  className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 text-dark text-active-white btn-active-primary active"
                  data-bs-toggle="tab"
                  href="#kt_schedule_day_1"
                >
                  <span className="opacity-50 fs-7 fw-bold">Mo</span>
                  <span className="fs-6 fw-bolder">23</span>
                </a>
              </li>
              {/*--end::Date--*/}
              {/*--begin::Date--*/}
              <li className="nav-item me-1">
                <a
                  className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 text-dark text-active-white btn-active-primary"
                  data-bs-toggle="tab"
                  href="#kt_schedule_day_2"
                >
                  <span className="opacity-50 fs-7 fw-bold">Tu</span>
                  <span className="fs-6 fw-bolder">24</span>
                </a>
              </li>
              {/*--end::Date--*/}
              {/*--begin::Date--*/}
              <li className="nav-item me-1">
                <a
                  className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 text-dark text-active-white btn-active-primary"
                  data-bs-toggle="tab"
                  href="#kt_schedule_day_3"
                >
                  <span className="opacity-50 fs-7 fw-bold">We</span>
                  <span className="fs-6 fw-bolder">25</span>
                </a>
              </li>
              {/*--end::Date--*/}
              {/*--begin::Date--*/}
              <li className="nav-item me-1">
                <a
                  className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 text-dark text-active-white btn-active-primary"
                  data-bs-toggle="tab"
                  href="#kt_schedule_day_4"
                >
                  <span className="opacity-50 fs-7 fw-bold">Th</span>
                  <span className="fs-6 fw-bolder">26</span>
                </a>
              </li>
              {/*--end::Date--*/}
              {/*--begin::Date--*/}
              <li className="nav-item me-1">
                <a
                  className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 text-dark text-active-white btn-active-primary"
                  data-bs-toggle="tab"
                  href="#kt_schedule_day_5"
                >
                  <span className="opacity-50 fs-7 fw-bold">Fr</span>
                  <span className="fs-6 fw-bolder">27</span>
                </a>
              </li>
              {/*--end::Date--*/}
              {/*--begin::Date--*/}
              <li className="nav-item me-1">
                <a
                  className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 text-dark text-active-white btn-active-primary"
                  data-bs-toggle="tab"
                  href="#kt_schedule_day_6"
                >
                  <span className="opacity-50 fs-7 fw-bold">Sa</span>
                  <span className="fs-6 fw-bolder">28</span>
                </a>
              </li>
              {/*--end::Date--*/}
              {/*--begin::Date--*/}
              <li className="nav-item me-1">
                <a
                  className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 text-dark text-active-white btn-active-primary"
                  data-bs-toggle="tab"
                  href="#kt_schedule_day_7"
                >
                  <span className="opacity-50 fs-7 fw-bold">Su</span>
                  <span className="fs-6 fw-bolder">29</span>
                </a>
              </li>
              {/*--end::Date--*/}
              {/*--begin::Date--*/}
              <li className="nav-item me-1">
                <a
                  className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 text-dark text-active-white btn-active-primary"
                  data-bs-toggle="tab"
                  href="#kt_schedule_day_8"
                >
                  <span className="opacity-50 fs-7 fw-bold">Mo</span>
                  <span className="fs-6 fw-bolder">30</span>
                </a>
              </li>
              {/*--end::Date--*/}
              {/*--begin::Date--*/}
              <li className="nav-item me-1">
                <a
                  className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 text-dark text-active-white btn-active-primary"
                  data-bs-toggle="tab"
                  href="#kt_schedule_day_9"
                >
                  <span className="opacity-50 fs-7 fw-bold">Tu</span>
                  <span className="fs-6 fw-bolder">31</span>
                </a>
              </li>
              {/*--end::Date--*/}
            </ul>
            {/*--end::Dates--*/}
            {/*--begin::Tab Content--*/}
            <div className="tab-content">
              {/*--begin::Day--*/}
              <div id="kt_schedule_day_0" className="tab-pane fade show">
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-primary rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      11:00 - 11:45
                      <span className="fs-7 text-gray-400 text-uppercase">am</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Dashboard UI/UX Design Review
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Bob Harris</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-danger rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      14:30 - 15:30
                      <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Lunch &amp; Learn Catch Up
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Yannis Gloverson</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-success rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      12:00 - 13:00
                      <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Dashboard UI/UX Design Review
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Mark Randall</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
              </div>
              {/*--end::Day--*/}
              {/*--begin::Day--*/}
              <div id="kt_schedule_day_1" className="tab-pane fade show active">
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-success rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      11:00 - 11:45
                      <span className="fs-7 text-gray-400 text-uppercase">am</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Team Backlog Grooming Session
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Mark Randall</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-success rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      10:00 - 11:00
                      <span className="fs-7 text-gray-400 text-uppercase">am</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      9 Degree Project Estimation Meeting
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Michael Walters</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-info rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      14:30 - 15:30
                      <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Sales Pitch Proposal
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Caleb Donaldson</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
              </div>
              {/*--end::Day--*/}
              {/*--begin::Day--*/}
              <div id="kt_schedule_day_2" className="tab-pane fade show">
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-danger rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      13:00 - 14:00
                      <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Committee Review Approvals
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Kendell Trevor</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-warning rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      12:00 - 13:00
                      <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Creative Content Initiative
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Yannis Gloverson</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-warning rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      9:00 - 10:00
                      <span className="fs-7 text-gray-400 text-uppercase">am</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Creative Content Initiative
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Michael Walters</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
              </div>
              {/*--end::Day--*/}
              {/*--begin::Day--*/}
              <div id="kt_schedule_day_3" className="tab-pane fade show">
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-danger rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      11:00 - 11:45
                      <span className="fs-7 text-gray-400 text-uppercase">am</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Dashboard UI/UX Design Review
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Yannis Gloverson</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-danger rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      14:30 - 15:30
                      <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Development Team Capacity Review
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">David Stevenson</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-warning rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      16:30 - 17:30
                      <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Creative Content Initiative
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Mark Randall</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
              </div>
              {/*--end::Day--*/}
              {/*--begin::Day--*/}
              <div id="kt_schedule_day_4" className="tab-pane fade show">
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-danger rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      16:30 - 17:30
                      <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Team Backlog Grooming Session
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Sean Bean</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-warning rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      14:30 - 15:30
                      <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Creative Content Initiative
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Sean Bean</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-success rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      9:00 - 10:00
                      <span className="fs-7 text-gray-400 text-uppercase">am</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Dashboard UI/UX Design Review
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Karina Clarke</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
              </div>
              {/*--end::Day--*/}
              {/*--begin::Day--*/}
              <div id="kt_schedule_day_5" className="tab-pane fade show">
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-info rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      13:00 - 14:00
                      <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Sales Pitch Proposal
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Karina Clarke</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-success rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      14:30 - 15:30
                      <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Creative Content Initiative
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Terry Robins</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-danger rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      10:00 - 11:00
                      <span className="fs-7 text-gray-400 text-uppercase">am</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Marketing Campaign Discussion
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Peter Marcus</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
              </div>
              {/*--end::Day--*/}
              {/*--begin::Day--*/}
              <div id="kt_schedule_day_6" className="tab-pane fade show">
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-warning rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      14:30 - 15:30
                      <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Creative Content Initiative
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Caleb Donaldson</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-warning rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      11:00 - 11:45
                      <span className="fs-7 text-gray-400 text-uppercase">am</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Sales Pitch Proposal
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">David Stevenson</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-info rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      13:00 - 14:00
                      <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Team Backlog Grooming Session
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">David Stevenson</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
              </div>
              {/*--end::Day--*/}
              {/*--begin::Day--*/}
              <div id="kt_schedule_day_7" className="tab-pane fade show">
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-info rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      12:00 - 13:00
                      <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      9 Degree Project Estimation Meeting
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Sean Bean</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-warning rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      14:30 - 15:30
                      <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Committee Review Approvals
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Yannis Gloverson</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-warning rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      11:00 - 11:45
                      <span className="fs-7 text-gray-400 text-uppercase">am</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Project Review &amp; Testing
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Karina Clarke</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
              </div>
              {/*--end::Day--*/}
              {/*--begin::Day--*/}
              <div id="kt_schedule_day_8" className="tab-pane fade show">
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-info rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      12:00 - 13:00
                      <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Project Review &amp; Testing
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Terry Robins</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-danger rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      14:30 - 15:30
                      <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Creative Content Initiative
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Caleb Donaldson</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-warning rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      11:00 - 11:45
                      <span className="fs-7 text-gray-400 text-uppercase">am</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Project Review &amp; Testing
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Kendell Trevor</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
              </div>
              {/*--end::Day--*/}
              {/*--begin::Day--*/}
              <div id="kt_schedule_day_9" className="tab-pane fade show">
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-danger rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      9:00 - 10:00
                      <span className="fs-7 text-gray-400 text-uppercase">am</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Team Backlog Grooming Session
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Bob Harris</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-info rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      16:30 - 17:30
                      <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Team Backlog Grooming Session
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Bob Harris</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
                {/*--begin::Time--*/}
                <div className="d-flex flex-stack position-relative mt-8">
                  {/*--begin::Bar--*/}
                  <div className="position-absolute h-100 w-4px bg-warning rounded top-0 start-0" />
                  {/*--end::Bar--*/}
                  {/*--begin::Info--*/}
                  <div className="fw-bold ms-5 text-gray-600">
                    {/*--begin::Time--*/}
                    <div className="fs-5">
                      12:00 - 13:00
                      <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                    </div>
                    {/*--end::Time--*/}
                    {/*--begin::Title--*/}
                    <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">
                      Development Team Capacity Review
                    </a>
                    {/*--end::Title--*/}
                    {/*--begin::User--*/}
                    <div className="text-gray-400">
                      Lead by
                      <a href="#">Peter Marcus</a>
                    </div>
                    {/*--end::User--*/}
                  </div>
                  {/*--end::Info--*/}
                  {/*--begin::Action--*/}
                  <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">
                    View
                  </a>
                  {/*--end::Action--*/}
                </div>
                {/*--end::Time--*/}
              </div>
              {/*--end::Day--*/}
            </div>
            {/*--end::Tab Content--*/}
          </div>
          {/*--end:::Tab pane--*/}
          {/*--begin:::Tab pane--*/}
          <div className="tab-pane fade" id="kt_contact_view_activity" role="tabpanel">
            {/*--begin::Timeline--*/}
            <div className="timeline-label">
              {/*--begin::Item--*/}
              <div className="timeline-item">
                {/*--begin::Label--*/}
                <div className="timeline-label fw-bolder text-gray-800 fs-6">08:42</div>
                {/*--end::Label--*/}
                {/*--begin::Badge--*/}
                <div className="timeline-badge">
                  <i className="fa fa-genderless text-warning fs-1" />
                </div>
                {/*--end::Badge--*/}
                {/*--begin::Text--*/}
                <div className="fw-mormal timeline-content text-muted ps-3">
                  Outlines keep you honest. And keep structure
                </div>
                {/*--end::Text--*/}
              </div>
              {/*--end::Item--*/}
              {/*--begin::Item--*/}
              <div className="timeline-item">
                {/*--begin::Label--*/}
                <div className="timeline-label fw-bolder text-gray-800 fs-6">10:00</div>
                {/*--end::Label--*/}
                {/*--begin::Badge--*/}
                <div className="timeline-badge">
                  <i className="fa fa-genderless text-success fs-1" />
                </div>
                {/*--end::Badge--*/}
                {/*--begin::Content--*/}
                <div className="timeline-content d-flex">
                  <span className="fw-bolder text-gray-800 ps-3">AEOL meeting</span>
                </div>
                {/*--end::Content--*/}
              </div>
              {/*--end::Item--*/}
              {/*--begin::Item--*/}
              <div className="timeline-item">
                {/*--begin::Label--*/}
                <div className="timeline-label fw-bolder text-gray-800 fs-6">14:37</div>
                {/*--end::Label--*/}
                {/*--begin::Badge--*/}
                <div className="timeline-badge">
                  <i className="fa fa-genderless text-danger fs-1" />
                </div>
                {/*--end::Badge--*/}
                {/*--begin::Desc--*/}
                <div className="timeline-content fw-bolder text-gray-800 ps-3">
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
                <div className="timeline-label fw-bolder text-gray-800 fs-6">16:50</div>
                {/*--end::Label--*/}
                {/*--begin::Badge--*/}
                <div className="timeline-badge">
                  <i className="fa fa-genderless text-primary fs-1" />
                </div>
                {/*--end::Badge--*/}
                {/*--begin::Text--*/}
                <div className="timeline-content fw-mormal text-muted ps-3">
                  Indulging in poorly driving and keep structure keep great
                </div>
                {/*--end::Text--*/}
              </div>
              {/*--end::Item--*/}
              {/*--begin::Item--*/}
              <div className="timeline-item">
                {/*--begin::Label--*/}
                <div className="timeline-label fw-bolder text-gray-800 fs-6">21:03</div>
                {/*--end::Label--*/}
                {/*--begin::Badge--*/}
                <div className="timeline-badge">
                  <i className="fa fa-genderless text-danger fs-1" />
                </div>
                {/*--end::Badge--*/}
                {/*--begin::Desc--*/}
                <div className="timeline-content fw-bold text-gray-800 ps-3">
                  New order placed
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
                <div className="timeline-label fw-bolder text-gray-800 fs-6">16:50</div>
                {/*--end::Label--*/}
                {/*--begin::Badge--*/}
                <div className="timeline-badge">
                  <i className="fa fa-genderless text-primary fs-1" />
                </div>
                {/*--end::Badge--*/}
                {/*--begin::Text--*/}
                <div className="timeline-content fw-mormal text-muted ps-3">
                  Indulging in poorly driving and keep structure keep great
                </div>
                {/*--end::Text--*/}
              </div>
              {/*--end::Item--*/}
              {/*--begin::Item--*/}
              <div className="timeline-item">
                {/*--begin::Label--*/}
                <div className="timeline-label fw-bolder text-gray-800 fs-6">21:03</div>
                {/*--end::Label--*/}
                {/*--begin::Badge--*/}
                <div className="timeline-badge">
                  <i className="fa fa-genderless text-danger fs-1" />
                </div>
                {/*--end::Badge--*/}
                {/*--begin::Desc--*/}
                <div className="timeline-content fw-bold text-gray-800 ps-3">
                  New order placed
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
                <div className="timeline-label fw-bolder text-gray-800 fs-6">10:30</div>
                {/*--end::Label--*/}
                {/*--begin::Badge--*/}
                <div className="timeline-badge">
                  <i className="fa fa-genderless text-success fs-1" />
                </div>
                {/*--end::Badge--*/}
                {/*--begin::Text--*/}
                <div className="timeline-content fw-mormal text-muted ps-3">
                  Finance KPI Mobile app launch preparion meeting
                </div>
                {/*--end::Text--*/}
              </div>
              {/*--end::Item--*/}
            </div>
            {/*--end::Timeline--*/}
          </div>
          {/*--end:::Tab pane--*/}
        </div>
        {/*--end::Tab content--*/}
      </Card.Body>
    </Card>
  );
}

export default ViewContact;
