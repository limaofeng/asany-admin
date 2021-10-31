import React from 'react';

import Icon from '@asany/icons';
import type { RouteComponentProps } from 'react-router';

import { useStorageQuery } from '../hooks';

import { ContentWrapper } from '@/pages/Metronic/components/page';
import { Card, Nav } from '@/pages/Metronic/components';

type FileManagerProps = RouteComponentProps<{ id: string }> & {
  children: React.ReactNode;
};

function FileManager(props: FileManagerProps) {
  const {
    children,
    match: { params },
  } = props;
  console.log('storage-id', params.id, params, props.location.pathname);

  const { data = {} } = useStorageQuery({ fetchPolicy: 'no-cache' });

  const { storage } = data;

  return (
    <ContentWrapper
      header={{
        title: '文件管理',
      }}
    >
      <Card
        flush
        className="pb-0 bgi-position-y-center bgi-no-repeat mb-10"
        style={{
          backgroundSize: 'auto calc(100% + 10rem)',
          backgroundPositionX: '100%',
          backgroundImage: "url('/assets/media/illustrations/sigma-1/4.png')",
        }}
      >
        <Card.Header className="pt-10">
          <div className="d-flex align-items-center">
            <div className="symbol symbol-circle me-5">
              <div className="symbol-label bg-transparent text-primary border border-secondary border-dashed">
                <Icon className="svg-icon-2x svg-icon-primary" name="Duotune/abs020" />
              </div>
            </div>
            <div className="d-flex flex-column">
              <h2 className="mb-1">{storage?.name}</h2>
              <div className="text-muted fw-bolder">
                <a href="#">{storage?.id}</a>
                <span className="mx-3">|</span>
                <a href="#">{storage?.type}</a>
                <span className="mx-3">|</span> {storage?.usage}
                <span className="mx-3">|</span> {storage?.totalFiles} 个文件
              </div>
            </div>
          </div>
        </Card.Header>
        <Card.Body className="pb-0">
          <div className="d-flex overflow-auto h-45px">
            <Nav selectedKey="files" className="fs-5 fw-bold">
              <Nav.Item key="files">文件管理</Nav.Item>
              <Nav.Item key="settings">设置</Nav.Item>
            </Nav>
          </div>
        </Card.Body>
      </Card>
      {React.cloneElement(React.Children.only(children) as React.ReactElement, {
        storage,
      })}
      {/*--begin::Upload template--*/}
      <table className="d-none">
        <tr id="kt_file_manager_new_folder_row" data-kt-filemanager-template="upload">
          <td />
          <td id="kt_file_manager_add_folder_form" className="fv-row">
            <div className="d-flex align-items-center">
              {/*--begin::Folder icon--*/}
              {/*--begin::Svg Icon | path: icons/duotune/files/fil012.svg--*/}
              <span className="svg-icon svg-icon-2x svg-icon-primary me-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path opacity="0.3" d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z" fill="black" />
                  <path
                    d="M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z"
                    fill="black"
                  />
                </svg>
              </span>
              {/*--end::Svg Icon--*/}
              {/*--end::Folder icon--*/}
              {/*--begin:Input--*/}
              <input
                type="text"
                name="new_folder_name"
                placeholder="Enter the folder name"
                className="form-control mw-250px me-3"
              />
              {/*--end:Input--*/}
              {/*--begin:Submit button--*/}
              <button
                className="btn btn-icon btn-light-primary me-3"
                id="kt_file_manager_add_folder"
              >
                <span className="indicator-label">
                  {/*--begin::Svg Icon | path: icons/duotune/arrows/arr085.svg--*/}
                  <span className="svg-icon svg-icon-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  {/*--end::Svg Icon--*/}
                </span>
                <span className="indicator-progress">
                  <span className="spinner-border spinner-border-sm align-middle" />
                </span>
              </button>
              {/*--end:Submit button--*/}
              {/*--begin:Cancel button--*/}
              <button className="btn btn-icon btn-light-danger" id="kt_file_manager_cancel_folder">
                <span className="indicator-label">
                  {/*--begin::Svg Icon | path: icons/duotune/arrows/arr088.svg--*/}
                  <span className="svg-icon svg-icon-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        opacity="0.5"
                        x="7.05025"
                        y="15.5356"
                        width="12"
                        height="2"
                        rx="1"
                        transform="rotate(-45 7.05025 15.5356)"
                        fill="black"
                      />
                      <rect
                        x="8.46447"
                        y="7.05029"
                        width="12"
                        height="2"
                        rx="1"
                        transform="rotate(45 8.46447 7.05029)"
                        fill="black"
                      />
                    </svg>
                  </span>
                  {/*--end::Svg Icon--*/}
                </span>
                <span className="indicator-progress">
                  <span className="spinner-border spinner-border-sm align-middle" />
                </span>
              </button>
              {/*--end:Cancel button--*/}
            </div>
          </td>
          <td />
          <td />
          <td />
        </tr>
      </table>
      {/*--end::Upload template--*/}
      {/*--begin::Rename template--*/}
      <div className="d-none" data-kt-filemanager-template="rename">
        <div className="fv-row">
          <div className="d-flex align-items-center">
            <span id="kt_file_manager_rename_folder_icon" />
            <input
              type="text"
              id="kt_file_manager_rename_input"
              name="rename_folder_name"
              placeholder="Enter the new folder name"
              className="form-control mw-250px me-3"
              value=""
            />
            <button
              className="btn btn-icon btn-light-primary me-3"
              id="kt_file_manager_rename_folder"
            >
              {/*--begin::Svg Icon | path: icons/duotune/arrows/arr085.svg--*/}
              <span className="svg-icon svg-icon-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z"
                    fill="black"
                  />
                </svg>
              </span>
              {/*--end::Svg Icon--*/}
            </button>
            <button
              className="btn btn-icon btn-light-danger"
              id="kt_file_manager_rename_folder_cancel"
            >
              <span className="indicator-label">
                {/*--begin::Svg Icon | path: icons/duotune/arrows/arr088.svg--*/}
                <span className="svg-icon svg-icon-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      opacity="0.5"
                      x="7.05025"
                      y="15.5356"
                      width="12"
                      height="2"
                      rx="1"
                      transform="rotate(-45 7.05025 15.5356)"
                      fill="black"
                    />
                    <rect
                      x="8.46447"
                      y="7.05029"
                      width="12"
                      height="2"
                      rx="1"
                      transform="rotate(45 8.46447 7.05029)"
                      fill="black"
                    />
                  </svg>
                </span>
                {/*--end::Svg Icon--*/}
              </span>
              <span className="indicator-progress">
                <span className="spinner-border spinner-border-sm align-middle" />
              </span>
            </button>
          </div>
        </div>
      </div>
      {/*--end::Rename template--*/}
      {/*--begin::Action template--*/}
      <div className="d-none" data-kt-filemanager-template="action">
        <div className="d-flex justify-content-end">
          {/*--begin::Share link--*/}
          <div className="ms-2" data-kt-filemanger-table="copy_link">
            <button
              type="button"
              className="btn btn-sm btn-icon btn-light btn-active-light-primary"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
            >
              {/*--begin::Svg Icon | path: icons/duotune/coding/cod007.svg--*/}
              <span className="svg-icon svg-icon-5 m-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    opacity="0.3"
                    d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
                    fill="black"
                  />
                  <path
                    d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
                    fill="black"
                  />
                </svg>
              </span>
              {/*--end::Svg Icon--*/}
            </button>
            {/*--begin::Menu--*/}
            <div
              className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
              data-kt-menu="true"
            >
              {/*--begin::Card--*/}
              <div className="card card-flush">
                <div className="card-body p-5">
                  {/*--begin::Loader--*/}
                  <div className="d-flex" data-kt-filemanger-table="copy_link_generator">
                    {/*--begin::Spinner--*/}
                    <div className="me-5" data-kt-indicator="on">
                      <span className="indicator-progress">
                        <span className="spinner-border spinner-border-sm align-middle ms-2" />
                      </span>
                    </div>
                    {/*--end::Spinner--*/}
                    {/*--begin::Label--*/}
                    <div className="fs-6 text-dark">Generating Share Link...</div>
                    {/*--end::Label--*/}
                  </div>
                  {/*--end::Loader--*/}
                  {/*--begin::Link--*/}
                  <div
                    className="d-flex flex-column text-start d-none"
                    data-kt-filemanger-table="copy_link_result"
                  >
                    <div className="d-flex mb-3">
                      {/*--begin::Svg Icon | path: icons/duotune/arrows/arr085.svg--*/}
                      <span className="svg-icon svg-icon-2 svg-icon-success me-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      {/*--end::Svg Icon--*/}
                      <div className="fs-6 text-dark">Share Link Generated</div>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      value="https://path/to/file/or/folder/"
                    />
                    <div className="text-muted fw-normal mt-2 fs-8 px-3">
                      Read only.
                      <a href="../../demo7/dist/apps/file-manager/settings/.html" className="ms-2">
                        Change permissions
                      </a>
                    </div>
                  </div>
                  {/*--end::Link--*/}
                </div>
              </div>
              {/*--end::Card--*/}
            </div>
            {/*--end::Menu--*/}
          </div>
          {/*--end::Share link--*/}
          {/*--begin::More--*/}
          <div className="ms-2">
            <button
              type="button"
              className="btn btn-sm btn-icon btn-light btn-active-light-primary"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
            >
              {/*--begin::Svg Icon | path: icons/duotune/general/gen052.svg--*/}
              <span className="svg-icon svg-icon-5 m-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect x="10" y="10" width="4" height="4" rx="2" fill="black" />
                  <rect x="17" y="10" width="4" height="4" rx="2" fill="black" />
                  <rect x="3" y="10" width="4" height="4" rx="2" fill="black" />
                </svg>
              </span>
              {/*--end::Svg Icon--*/}
            </button>
            {/*--begin::Menu--*/}
            <div
              className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
              data-kt-menu="true"
            >
              {/*--begin::Menu item--*/}
              <div className="menu-item px-3">
                <a href="#" className="menu-link px-3">
                  Download File
                </a>
              </div>
              {/*--end::Menu item--*/}
              {/*--begin::Menu item--*/}
              <div className="menu-item px-3">
                <a href="#" className="menu-link px-3" data-kt-filemanager-table="rename">
                  Rename
                </a>
              </div>
              {/*--end::Menu item--*/}
              {/*--begin::Menu item--*/}
              <div className="menu-item px-3">
                <a
                  href="#"
                  className="menu-link px-3"
                  data-kt-filemanager-table-filter="move_row"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_move_to_folder"
                >
                  Move to folder
                </a>
              </div>
              {/*--end::Menu item--*/}
              {/*--begin::Menu item--*/}
              <div className="menu-item px-3">
                <a
                  href="#"
                  className="menu-link text-danger px-3"
                  data-kt-filemanager-table-filter="delete_row"
                >
                  Delete
                </a>
              </div>
              {/*--end::Menu item--*/}
            </div>
            {/*--end::Menu--*/}
          </div>
          {/*--end::More--*/}
        </div>
      </div>
      {/*--end::Action template--*/}
      {/*--begin::Checkbox template--*/}
      <div className="d-none" data-kt-filemanager-template="checkbox">
        <div className="form-check form-check-sm form-check-custom form-check-solid">
          <input className="form-check-input" type="checkbox" value="1" />
        </div>
      </div>
      {/*--end::Checkbox template--*/}
      {/*--begin::Modals--*/}
      {/*--begin::Modal - Upload File--*/}
      <div className="modal fade" id="kt_modal_upload" aria-hidden="true">
        {/*--begin::Modal dialog--*/}
        <div className="modal-dialog modal-dialog-centered mw-650px">
          {/*--begin::Modal content--*/}
          <div className="modal-content">
            {/*--begin::Form--*/}
            <form className="form" action="none" id="kt_modal_upload_form">
              {/*--begin::Modal header--*/}
              <div className="modal-header">
                {/*--begin::Modal title--*/}
                <h2 className="fw-bolder">Upload files</h2>
                {/*--end::Modal title--*/}
                {/*--begin::Close--*/}
                <div
                  className="btn btn-icon btn-sm btn-active-icon-primary"
                  data-bs-dismiss="modal"
                >
                  {/*--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg--*/}
                  <span className="svg-icon svg-icon-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        opacity="0.5"
                        x="6"
                        y="17.3137"
                        width="16"
                        height="2"
                        rx="1"
                        transform="rotate(-45 6 17.3137)"
                        fill="black"
                      />
                      <rect
                        x="7.41422"
                        y="6"
                        width="16"
                        height="2"
                        rx="1"
                        transform="rotate(45 7.41422 6)"
                        fill="black"
                      />
                    </svg>
                  </span>
                  {/*--end::Svg Icon--*/}
                </div>
                {/*--end::Close--*/}
              </div>
              {/*--end::Modal header--*/}
              {/*--begin::Modal body--*/}
              <div className="modal-body pt-10 pb-15 px-lg-17">
                {/*--begin::Input group--*/}
                <div className="form-group">
                  {/*--begin::Dropzone--*/}
                  <div className="dropzone dropzone-queue mb-2" id="kt_modal_upload_dropzone">
                    {/*--begin::Controls--*/}
                    <div className="dropzone-panel mb-4">
                      <a className="dropzone-select btn btn-sm btn-primary me-2">Attach files</a>
                      <a className="dropzone-upload btn btn-sm btn-light-primary me-2">
                        Upload All
                      </a>
                      <a className="dropzone-remove-all btn btn-sm btn-light-primary">Remove All</a>
                    </div>
                    {/*--end::Controls--*/}
                    {/*--begin::Items--*/}
                    <div className="dropzone-items wm-200px">
                      <div className="dropzone-item p-5" style={{ display: 'none' }}>
                        {/*--begin::File--*/}
                        <div className="dropzone-file">
                          <div
                            className="dropzone-filename text-dark"
                            title="some_image_file_name.jpg"
                          >
                            <span data-dz-name="">some_image_file_name.jpg</span>
                            <strong>
                              (<span data-dz-size="">340kb</span>)
                            </strong>
                          </div>
                          <div className="dropzone-error mt-0" data-dz-errormessage="" />
                        </div>
                        {/*--end::File--*/}
                        {/*--begin::Progress--*/}
                        <div className="dropzone-progress">
                          <div className="progress bg-light-primary">
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              /*     aria-valuemin="0"
                                aria-valuemax="100"
                                aria-valuenow="0"
                                data-dz-uploadprogress="" */
                            />
                          </div>
                        </div>
                        {/*--end::Progress--*/}
                        {/*--begin::Toolbar--*/}
                        <div className="dropzone-toolbar">
                          <span className="dropzone-start">
                            <i className="bi bi-play-fill fs-3" />
                          </span>
                          <span
                            className="dropzone-cancel"
                            data-dz-remove=""
                            style={{ display: 'none' }}
                          >
                            <i className="bi bi-x fs-3" />
                          </span>
                          <span className="dropzone-delete" data-dz-remove="">
                            <i className="bi bi-x fs-1" />
                          </span>
                        </div>
                        {/*--end::Toolbar--*/}
                      </div>
                    </div>
                    {/*--end::Items--*/}
                  </div>
                  {/*--end::Dropzone--*/}
                  {/*--begin::Hint--*/}
                  <span className="form-text fs-6 text-muted">Max file size is 1MB per file.</span>
                  {/*--end::Hint--*/}
                </div>
                {/*--end::Input group--*/}
              </div>
              {/*--end::Modal body--*/}
            </form>
            {/*--end::Form--*/}
          </div>
        </div>
      </div>
      {/*--end::Modal - Upload File--*/}
      {/*--begin::Modal - New Product--*/}
      <div className="modal fade" id="kt_modal_move_to_folder" aria-hidden="true">
        {/*--begin::Modal dialog--*/}
        <div className="modal-dialog modal-dialog-centered mw-650px">
          {/*--begin::Modal content--*/}
          <div className="modal-content">
            {/*--begin::Form--*/}
            <form className="form" action="#" id="kt_modal_move_to_folder_form">
              {/*--begin::Modal header--*/}
              <div className="modal-header">
                {/*--begin::Modal title--*/}
                <h2 className="fw-bolder">Move to folder</h2>
                {/*--end::Modal title--*/}
                {/*--begin::Close--*/}
                <div
                  className="btn btn-icon btn-sm btn-active-icon-primary"
                  data-bs-dismiss="modal"
                >
                  {/*--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg--*/}
                  <span className="svg-icon svg-icon-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        opacity="0.5"
                        x="6"
                        y="17.3137"
                        width="16"
                        height="2"
                        rx="1"
                        transform="rotate(-45 6 17.3137)"
                        fill="black"
                      />
                      <rect
                        x="7.41422"
                        y="6"
                        width="16"
                        height="2"
                        rx="1"
                        transform="rotate(45 7.41422 6)"
                        fill="black"
                      />
                    </svg>
                  </span>
                  {/*--end::Svg Icon--*/}
                </div>
                {/*--end::Close--*/}
              </div>
              {/*--end::Modal header--*/}
              {/*--begin::Modal body--*/}
              <div className="modal-body pt-10 pb-15 px-lg-17">
                {/*--begin::Input group--*/}
                <div className="form-group fv-row">
                  {/*--begin::Item--*/}
                  <div className="d-flex">
                    {/*--begin::Checkbox--*/}
                    <div className="form-check form-check-custom form-check-solid">
                      {/*--begin::Input--*/}
                      <input
                        className="form-check-input me-3"
                        name="move_to_folder"
                        type="radio"
                        value="0"
                        id="kt_modal_move_to_folder_0"
                      />
                      {/*--end::Input--*/}
                      {/*--begin::Label--*/}
                      <label className="form-check-label" htmlFor="kt_modal_move_to_folder_0">
                        <div className="fw-bolder">
                          {/*--begin::Svg Icon | path: icons/duotune/files/fil012.svg--*/}
                          <span className="svg-icon svg-icon-2 svg-icon-primary me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
                                fill="black"
                              />
                              <path
                                d="M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}account
                        </div>
                      </label>
                      {/*--end::Label--*/}
                    </div>
                    {/*--end::Checkbox--*/}
                  </div>
                  {/*--end::Item--*/}
                  <div className="separator separator-dashed my-5" />
                  {/*--begin::Item--*/}
                  <div className="d-flex">
                    {/*--begin::Checkbox--*/}
                    <div className="form-check form-check-custom form-check-solid">
                      {/*--begin::Input--*/}
                      <input
                        className="form-check-input me-3"
                        name="move_to_folder"
                        type="radio"
                        value="1"
                        id="kt_modal_move_to_folder_1"
                      />
                      {/*--end::Input--*/}
                      {/*--begin::Label--*/}
                      <label className="form-check-label" htmlFor="kt_modal_move_to_folder_1">
                        <div className="fw-bolder">
                          {/*--begin::Svg Icon | path: icons/duotune/files/fil012.svg--*/}
                          <span className="svg-icon svg-icon-2 svg-icon-primary me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
                                fill="black"
                              />
                              <path
                                d="M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}apps
                        </div>
                      </label>
                      {/*--end::Label--*/}
                    </div>
                    {/*--end::Checkbox--*/}
                  </div>
                  {/*--end::Item--*/}
                  <div className="separator separator-dashed my-5" />
                  {/*--begin::Item--*/}
                  <div className="d-flex">
                    {/*--begin::Checkbox--*/}
                    <div className="form-check form-check-custom form-check-solid">
                      {/*--begin::Input--*/}
                      <input
                        className="form-check-input me-3"
                        name="move_to_folder"
                        type="radio"
                        value="2"
                        id="kt_modal_move_to_folder_2"
                      />
                      {/*--end::Input--*/}
                      {/*--begin::Label--*/}
                      <label className="form-check-label" htmlFor="kt_modal_move_to_folder_2">
                        <div className="fw-bolder">
                          {/*--begin::Svg Icon | path: icons/duotune/files/fil012.svg--*/}
                          <span className="svg-icon svg-icon-2 svg-icon-primary me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
                                fill="black"
                              />
                              <path
                                d="M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}widgets
                        </div>
                      </label>
                      {/*--end::Label--*/}
                    </div>
                    {/*--end::Checkbox--*/}
                  </div>
                  {/*--end::Item--*/}
                  <div className="separator separator-dashed my-5" />
                  {/*--begin::Item--*/}
                  <div className="d-flex">
                    {/*--begin::Checkbox--*/}
                    <div className="form-check form-check-custom form-check-solid">
                      {/*--begin::Input--*/}
                      <input
                        className="form-check-input me-3"
                        name="move_to_folder"
                        type="radio"
                        value="3"
                        id="kt_modal_move_to_folder_3"
                      />
                      {/*--end::Input--*/}
                      {/*--begin::Label--*/}
                      <label className="form-check-label" htmlFor="kt_modal_move_to_folder_3">
                        <div className="fw-bolder">
                          {/*--begin::Svg Icon | path: icons/duotune/files/fil012.svg--*/}
                          <span className="svg-icon svg-icon-2 svg-icon-primary me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
                                fill="black"
                              />
                              <path
                                d="M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}assets
                        </div>
                      </label>
                      {/*--end::Label--*/}
                    </div>
                    {/*--end::Checkbox--*/}
                  </div>
                  {/*--end::Item--*/}
                  <div className="separator separator-dashed my-5" />
                  {/*--begin::Item--*/}
                  <div className="d-flex">
                    {/*--begin::Checkbox--*/}
                    <div className="form-check form-check-custom form-check-solid">
                      {/*--begin::Input--*/}
                      <input
                        className="form-check-input me-3"
                        name="move_to_folder"
                        type="radio"
                        value="4"
                        id="kt_modal_move_to_folder_4"
                      />
                      {/*--end::Input--*/}
                      {/*--begin::Label--*/}
                      <label className="form-check-label" htmlFor="kt_modal_move_to_folder_4">
                        <div className="fw-bolder">
                          {/*--begin::Svg Icon | path: icons/duotune/files/fil012.svg--*/}
                          <span className="svg-icon svg-icon-2 svg-icon-primary me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
                                fill="black"
                              />
                              <path
                                d="M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}documentation
                        </div>
                      </label>
                      {/*--end::Label--*/}
                    </div>
                    {/*--end::Checkbox--*/}
                  </div>
                  {/*--end::Item--*/}
                  <div className="separator separator-dashed my-5" />
                  {/*--begin::Item--*/}
                  <div className="d-flex">
                    {/*--begin::Checkbox--*/}
                    <div className="form-check form-check-custom form-check-solid">
                      {/*--begin::Input--*/}
                      <input
                        className="form-check-input me-3"
                        name="move_to_folder"
                        type="radio"
                        value="5"
                        id="kt_modal_move_to_folder_5"
                      />
                      {/*--end::Input--*/}
                      {/*--begin::Label--*/}
                      <label className="form-check-label" htmlFor="kt_modal_move_to_folder_5">
                        <div className="fw-bolder">
                          {/*--begin::Svg Icon | path: icons/duotune/files/fil012.svg--*/}
                          <span className="svg-icon svg-icon-2 svg-icon-primary me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
                                fill="black"
                              />
                              <path
                                d="M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}layouts
                        </div>
                      </label>
                      {/*--end::Label--*/}
                    </div>
                    {/*--end::Checkbox--*/}
                  </div>
                  {/*--end::Item--*/}
                  <div className="separator separator-dashed my-5" />
                  {/*--begin::Item--*/}
                  <div className="d-flex">
                    {/*--begin::Checkbox--*/}
                    <div className="form-check form-check-custom form-check-solid">
                      {/*--begin::Input--*/}
                      <input
                        className="form-check-input me-3"
                        name="move_to_folder"
                        type="radio"
                        value="6"
                        id="kt_modal_move_to_folder_6"
                      />
                      {/*--end::Input--*/}
                      {/*--begin::Label--*/}
                      <label className="form-check-label" htmlFor="kt_modal_move_to_folder_6">
                        <div className="fw-bolder">
                          {/*--begin::Svg Icon | path: icons/duotune/files/fil012.svg--*/}
                          <span className="svg-icon svg-icon-2 svg-icon-primary me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
                                fill="black"
                              />
                              <path
                                d="M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}modals
                        </div>
                      </label>
                      {/*--end::Label--*/}
                    </div>
                    {/*--end::Checkbox--*/}
                  </div>
                  {/*--end::Item--*/}
                  <div className="separator separator-dashed my-5" />
                  {/*--begin::Item--*/}
                  <div className="d-flex">
                    {/*--begin::Checkbox--*/}
                    <div className="form-check form-check-custom form-check-solid">
                      {/*--begin::Input--*/}
                      <input
                        className="form-check-input me-3"
                        name="move_to_folder"
                        type="radio"
                        value="7"
                        id="kt_modal_move_to_folder_7"
                      />
                      {/*--end::Input--*/}
                      {/*--begin::Label--*/}
                      <label className="form-check-label" htmlFor="kt_modal_move_to_folder_7">
                        <div className="fw-bolder">
                          {/*--begin::Svg Icon | path: icons/duotune/files/fil012.svg--*/}
                          <span className="svg-icon svg-icon-2 svg-icon-primary me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
                                fill="black"
                              />
                              <path
                                d="M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}authentication
                        </div>
                      </label>
                      {/*--end::Label--*/}
                    </div>
                    {/*--end::Checkbox--*/}
                  </div>
                  {/*--end::Item--*/}
                  <div className="separator separator-dashed my-5" />
                  {/*--begin::Item--*/}
                  <div className="d-flex">
                    {/*--begin::Checkbox--*/}
                    <div className="form-check form-check-custom form-check-solid">
                      {/*--begin::Input--*/}
                      <input
                        className="form-check-input me-3"
                        name="move_to_folder"
                        type="radio"
                        value="8"
                        id="kt_modal_move_to_folder_8"
                      />
                      {/*--end::Input--*/}
                      {/*--begin::Label--*/}
                      <label className="form-check-label" htmlFor="kt_modal_move_to_folder_8">
                        <div className="fw-bolder">
                          {/*--begin::Svg Icon | path: icons/duotune/files/fil012.svg--*/}
                          <span className="svg-icon svg-icon-2 svg-icon-primary me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
                                fill="black"
                              />
                              <path
                                d="M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}dashboards
                        </div>
                      </label>
                      {/*--end::Label--*/}
                    </div>
                    {/*--end::Checkbox--*/}
                  </div>
                  {/*--end::Item--*/}
                  <div className="separator separator-dashed my-5" />
                  {/*--begin::Item--*/}
                  <div className="d-flex">
                    {/*--begin::Checkbox--*/}
                    <div className="form-check form-check-custom form-check-solid">
                      {/*--begin::Input--*/}
                      <input
                        className="form-check-input me-3"
                        name="move_to_folder"
                        type="radio"
                        value="9"
                        id="kt_modal_move_to_folder_9"
                      />
                      {/*--end::Input--*/}
                      {/*--begin::Label--*/}
                      <label className="form-check-label" htmlFor="kt_modal_move_to_folder_9">
                        <div className="fw-bolder">
                          {/*--begin::Svg Icon | path: icons/duotune/files/fil012.svg--*/}
                          <span className="svg-icon svg-icon-2 svg-icon-primary me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
                                fill="black"
                              />
                              <path
                                d="M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}pages
                        </div>
                      </label>
                      {/*--end::Label--*/}
                    </div>
                    {/*--end::Checkbox--*/}
                  </div>
                  {/*--end::Item--*/}
                </div>
                {/*--end::Input group--*/}
                {/*--begin::Action buttons--*/}
                <div className="d-flex flex-center mt-12">
                  {/*--begin::Button--*/}
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="kt_modal_move_to_folder_submit"
                  >
                    <span className="indicator-label">Save</span>
                    <span className="indicator-progress">
                      Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2" />
                    </span>
                  </button>
                  {/*--end::Button--*/}
                </div>
                {/*--begin::Action buttons--*/}
              </div>
              {/*--end::Modal body--*/}
            </form>
            {/*--end::Form--*/}
          </div>
        </div>
      </div>
      {/*--end::Modal - Move file--*/}
      {/*--end::Modals--*/}
    </ContentWrapper>
  );
}

export default FileManager;
