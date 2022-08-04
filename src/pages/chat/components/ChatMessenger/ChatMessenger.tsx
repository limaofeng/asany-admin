import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { ContentWrapper } from '@/layouts/components';
import { Button, Card, Symbol } from '@/metronic';

function ChatMessenger() {
  return (
    <ContentWrapper
      className="app-chat-main background-transparent"
      contentClassName="px-0"
      footer={false}
      header={false}
    >
      <Card className="card chat_messenger" id="kt_chat_messenger">
        <Card.Header id="kt_chat_messenger_header">
          <Card.Title className="d-flex align-items-center">
            <Symbol.Avatar size={45} src="/assets/media/avatars/300-25.jpg" />
            <div className="ms-5 d-flex justify-content-center flex-column me-3">
              <a href="#" className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1">
                Brian Cox
              </a>
              {/*--begin::Info--*/}
              <div className="mb-0 lh-1">
                <span className="badge badge-success badge-circle w-10px h-10px me-1" />
                <span className="fs-7 fw-semibold text-muted">Active</span>
              </div>
              {/*--end::Info--*/}
            </div>
          </Card.Title>
          <Card.Toolbar>
            <div className="me-n3">
              <button
                className="btn btn-sm btn-icon btn-active-light-primary"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
              >
                <i className="bi bi-three-dots fs-2" />
              </button>
              {/*--begin::Menu 3--*/}
              <div
                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                data-kt-menu="true"
              >
                {/*--begin::Heading--*/}
                <div className="menu-item px-3">
                  <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                    Contacts
                  </div>
                </div>
                {/*--end::Heading--*/}
                {/*--begin::Menu item--*/}
                <div className="menu-item px-3">
                  <a
                    href="#"
                    className="menu-link px-3"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_users_search"
                  >
                    Add Contact
                  </a>
                </div>
                {/*--end::Menu item--*/}
                {/*--begin::Menu item--*/}
                <div className="menu-item px-3">
                  <a
                    href="#"
                    className="menu-link flex-stack px-3"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_invite_friends"
                  >
                    Invite Contacts
                    <i
                      className="fas fa-exclamation-circle ms-2 fs-7"
                      data-bs-toggle="tooltip"
                      title="Specify a contact email to send an invitation"
                    />
                  </a>
                </div>
                {/*--end::Menu item--*/}
                {/*--begin::Menu item--*/}
                <div
                  className="menu-item px-3"
                  data-kt-menu-trigger="hover"
                  data-kt-menu-placement="right-start"
                >
                  <a href="#" className="menu-link px-3">
                    <span className="menu-title">Groups</span>
                    <span className="menu-arrow" />
                  </a>
                  {/*--begin::Menu sub--*/}
                  <div className="menu-sub menu-sub-dropdown w-175px py-4">
                    {/*--begin::Menu item--*/}
                    <div className="menu-item px-3">
                      <a
                        href="#"
                        className="menu-link px-3"
                        data-bs-toggle="tooltip"
                        title="Coming soon"
                      >
                        Create Group
                      </a>
                    </div>
                    {/*--end::Menu item--*/}
                    {/*--begin::Menu item--*/}
                    <div className="menu-item px-3">
                      <a
                        href="#"
                        className="menu-link px-3"
                        data-bs-toggle="tooltip"
                        title="Coming soon"
                      >
                        Invite Members
                      </a>
                    </div>
                    {/*--end::Menu item--*/}
                    {/*--begin::Menu item--*/}
                    <div className="menu-item px-3">
                      <a
                        href="#"
                        className="menu-link px-3"
                        data-bs-toggle="tooltip"
                        title="Coming soon"
                      >
                        Settings
                      </a>
                    </div>
                    {/*--end::Menu item--*/}
                  </div>
                  {/*--end::Menu sub--*/}
                </div>
                {/*--end::Menu item--*/}
                {/*--begin::Menu item--*/}
                <div className="menu-item px-3 my-1">
                  <a
                    href="#"
                    className="menu-link px-3"
                    data-bs-toggle="tooltip"
                    title="Coming soon"
                  >
                    Settings
                  </a>
                </div>
                {/*--end::Menu item--*/}
              </div>
              {/*--end::Menu 3--*/}
            </div>
          </Card.Toolbar>
        </Card.Header>
        <Card.Body className="pe-0 py-0" id="kt_chat_messenger_body">
          <OverlayScrollbarsComponent
            className="d-flex h-100 flex-column custom-scrollbar pe-9 pt-8"
            options={{
              scrollbars: { autoHide: 'scroll' },
            }}
          >
            {/*--begin::Message(in)--*/}
            <div className="d-flex justify-content-start mb-10">
              {/*--begin::Wrapper--*/}
              <div className="d-flex flex-column align-items-start">
                {/*--begin::User--*/}
                <div className="d-flex align-items-center mb-2">
                  {/*--begin::Avatar--*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                  </div>
                  {/*--end::Avatar--*/}
                  {/*--begin::Details--*/}
                  <div className="ms-3">
                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">
                      Brian Cox
                    </a>
                    <span className="text-muted fs-7 mb-1">2 mins</span>
                  </div>
                  {/*--end::Details--*/}
                </div>
                {/*--end::User--*/}
                {/*--begin::Text--*/}
                <div
                  className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                  data-kt-element="message-text"
                >
                  How likely are you to recommend our company to your friends and family ?
                </div>
                {/*--end::Text--*/}
              </div>
              {/*--end::Wrapper--*/}
            </div>
            {/*--end::Message(in)--*/}
            {/*--begin::Message(out)--*/}
            <div className="d-flex justify-content-end mb-10">
              {/*--begin::Wrapper--*/}
              <div className="d-flex flex-column align-items-end">
                {/*--begin::User--*/}
                <div className="d-flex align-items-center mb-2">
                  {/*--begin::Details--*/}
                  <div className="me-3">
                    <span className="text-muted fs-7 mb-1">5 mins</span>
                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">
                      You
                    </a>
                  </div>
                  {/*--end::Details--*/}
                  {/*--begin::Avatar--*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                  </div>
                  {/*--end::Avatar--*/}
                </div>
                {/*--end::User--*/}
                {/*--begin::Text--*/}
                <div
                  className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end"
                  data-kt-element="message-text"
                >
                  Hey there, we’re just writing to let you know that you’ve been subscribed to a
                  repository on GitHub.
                </div>
                {/*--end::Text--*/}
              </div>
              {/*--end::Wrapper--*/}
            </div>
            {/*--end::Message(out)--*/}
            {/*--begin::Message(in)--*/}
            <div className="d-flex justify-content-start mb-10">
              {/*--begin::Wrapper--*/}
              <div className="d-flex flex-column align-items-start">
                {/*--begin::User--*/}
                <div className="d-flex align-items-center mb-2">
                  {/*--begin::Avatar--*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                  </div>
                  {/*--end::Avatar--*/}
                  {/*--begin::Details--*/}
                  <div className="ms-3">
                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">
                      Brian Cox
                    </a>
                    <span className="text-muted fs-7 mb-1">1 Hour</span>
                  </div>
                  {/*--end::Details--*/}
                </div>
                {/*--end::User--*/}
                {/*--begin::Text--*/}
                <div
                  className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                  data-kt-element="message-text"
                >
                  Ok, Understood!
                </div>
                {/*--end::Text--*/}
              </div>
              {/*--end::Wrapper--*/}
            </div>
            {/*--end::Message(in)--*/}
            {/*--begin::Message(out)--*/}
            <div className="d-flex justify-content-end mb-10">
              {/*--begin::Wrapper--*/}
              <div className="d-flex flex-column align-items-end">
                {/*--begin::User--*/}
                <div className="d-flex align-items-center mb-2">
                  {/*--begin::Details--*/}
                  <div className="me-3">
                    <span className="text-muted fs-7 mb-1">2 Hours</span>
                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">
                      You
                    </a>
                  </div>
                  {/*--end::Details--*/}
                  {/*--begin::Avatar--*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                  </div>
                  {/*--end::Avatar--*/}
                </div>
                {/*--end::User--*/}
                {/*--begin::Text--*/}
                <div
                  className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end"
                  data-kt-element="message-text"
                >
                  You’ll receive notifications for all issues, pull requests!
                </div>
                {/*--end::Text--*/}
              </div>
              {/*--end::Wrapper--*/}
            </div>
            {/*--end::Message(out)--*/}
            {/*--begin::Message(in)--*/}
            <div className="d-flex justify-content-start mb-10">
              {/*--begin::Wrapper--*/}
              <div className="d-flex flex-column align-items-start">
                {/*--begin::User--*/}
                <div className="d-flex align-items-center mb-2">
                  {/*--begin::Avatar--*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                  </div>
                  {/*--end::Avatar--*/}
                  {/*--begin::Details--*/}
                  <div className="ms-3">
                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">
                      Brian Cox
                    </a>
                    <span className="text-muted fs-7 mb-1">3 Hours</span>
                  </div>
                  {/*--end::Details--*/}
                </div>
                {/*--end::User--*/}
                {/*--begin::Text--*/}
                <div
                  className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                  data-kt-element="message-text"
                >
                  You can unwatch this repository immediately by clicking here:
                  <a href="https://keenthemes.com">Keenthemes.com</a>
                </div>
                {/*--end::Text--*/}
              </div>
              {/*--end::Wrapper--*/}
            </div>
            {/*--end::Message(in)--*/}
            {/*--begin::Message(out)--*/}
            <div className="d-flex justify-content-end mb-10">
              {/*--begin::Wrapper--*/}
              <div className="d-flex flex-column align-items-end">
                {/*--begin::User--*/}
                <div className="d-flex align-items-center mb-2">
                  {/*--begin::Details--*/}
                  <div className="me-3">
                    <span className="text-muted fs-7 mb-1">4 Hours</span>
                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">
                      You
                    </a>
                  </div>
                  {/*--end::Details--*/}
                  {/*--begin::Avatar--*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                  </div>
                  {/*--end::Avatar--*/}
                </div>
                {/*--end::User--*/}
                {/*--begin::Text--*/}
                <div
                  className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end"
                  data-kt-element="message-text"
                >
                  Most purchased Business courses during this sale!
                </div>
                {/*--end::Text--*/}
              </div>
              {/*--end::Wrapper--*/}
            </div>
            {/*--end::Message(out)--*/}
            {/*--begin::Message(in)--*/}
            <div className="d-flex justify-content-start mb-10">
              {/*--begin::Wrapper--*/}
              <div className="d-flex flex-column align-items-start">
                {/*--begin::User--*/}
                <div className="d-flex align-items-center mb-2">
                  {/*--begin::Avatar--*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                  </div>
                  {/*--end::Avatar--*/}
                  {/*--begin::Details--*/}
                  <div className="ms-3">
                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">
                      Brian Cox
                    </a>
                    <span className="text-muted fs-7 mb-1">5 Hours</span>
                  </div>
                  {/*--end::Details--*/}
                </div>
                {/*--end::User--*/}
                {/*--begin::Text--*/}
                <div
                  className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                  data-kt-element="message-text"
                >
                  Company BBQ to celebrate the last quater achievements and goals. Food and drinks
                  provided
                </div>
                {/*--end::Text--*/}
              </div>
              {/*--end::Wrapper--*/}
            </div>
            {/*--end::Message(in)--*/}
            {/*--begin::Message(template for out)--*/}
            <div className="d-flex justify-content-end mb-10 d-none" data-kt-element="template-out">
              {/*--begin::Wrapper--*/}
              <div className="d-flex flex-column align-items-end">
                {/*--begin::User--*/}
                <div className="d-flex align-items-center mb-2">
                  {/*--begin::Details--*/}
                  <div className="me-3">
                    <span className="text-muted fs-7 mb-1">Just now</span>
                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">
                      You
                    </a>
                  </div>
                  {/*--end::Details--*/}
                  {/*--begin::Avatar--*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                  </div>
                  {/*--end::Avatar--*/}
                </div>
                {/*--end::User--*/}
                {/*--begin::Text--*/}
                <div
                  className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end"
                  data-kt-element="message-text"
                />
                {/*--end::Text--*/}
              </div>
              {/*--end::Wrapper--*/}
            </div>
            {/*--end::Message(template for out)--*/}
            {/*--begin::Message(template for in)--*/}
            <div
              className="d-flex justify-content-start mb-10 d-none"
              data-kt-element="template-in"
            >
              {/*--begin::Wrapper--*/}
              <div className="d-flex flex-column align-items-start">
                {/*--begin::User--*/}
                <div className="d-flex align-items-center mb-2">
                  {/*--begin::Avatar--*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                  </div>
                  {/*--end::Avatar--*/}
                  {/*--begin::Details--*/}
                  <div className="ms-3">
                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">
                      Brian Cox
                    </a>
                    <span className="text-muted fs-7 mb-1">Just now</span>
                  </div>
                  {/*--end::Details--*/}
                </div>
                {/*--end::User--*/}
                {/*--begin::Text--*/}
                <div
                  className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                  data-kt-element="message-text"
                >
                  Right before vacation season we have the next Big Deal for you.
                </div>
                {/*--end::Text--*/}
              </div>
              {/*--end::Wrapper--*/}
            </div>
            {/*--end::Message(template for in)--*/}
          </OverlayScrollbarsComponent>
        </Card.Body>
        <Card.Footer className="pt-4" id="kt_chat_messenger_footer">
          {/*--begin::Input--*/}
          <textarea
            className="form-control form-control-flush mb-3"
            rows={1}
            data-kt-element="input"
            placeholder="Type a message"
          />
          {/*--end::Input--*/}
          <div className="d-flex flex-stack">
            {/*--begin::Actions--*/}
            <div className="d-flex align-items-center me-2">
              <button
                className="btn btn-sm btn-icon btn-active-light-primary me-1"
                type="button"
                data-bs-toggle="tooltip"
                title="Coming soon"
              >
                <i className="bi bi-paperclip fs-3" />
              </button>
              <button
                className="btn btn-sm btn-icon btn-active-light-primary me-1"
                type="button"
                data-bs-toggle="tooltip"
                title="Coming soon"
              >
                <i className="bi bi-upload fs-3" />
              </button>
            </div>
            {/*--end::Actions--*/}
            <Button>发送</Button>
          </div>
        </Card.Footer>
      </Card>
    </ContentWrapper>
  );
}

export default ChatMessenger;
