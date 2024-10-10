import { Col, Row } from '@/metronic';

function AdvanceForm() {
  return (
    <>
      {/*--begin::Row--*/}
      <Row gutter={8} className="mb-8">
        <Col xxl={7}>
          <label className="fs-6 form-label fw-bold text-dark">Tags</label>
          <input
            type="text"
            className="form-control form-control form-control-solid"
            name="tags"
            value="products, users, events"
          />
        </Col>
        <Col xxl={5}>
          <Row gutter={8}>
            <Col lg={6}>
              <label className="fs-6 form-label fw-bold text-dark">
                Team Type
              </label>
              {/*--begin::Select--*/}
              <select
                className="form-select form-select-solid"
                data-control="select2"
                data-placeholder="In Progress"
                data-hide-search="true"
              >
                <option value="" />
                <option value="1">Not started</option>
                <option value="2" selected>
                  In Progress
                </option>
                <option value="3">Done</option>
              </select>
            </Col>
            <Col lg={6}>
              <label className="fs-6 form-label fw-bold text-dark">
                Select Group
              </label>
              {/*--begin::Radio group--*/}
              <div className="nav-group nav-group-fluid">
                {/*--begin::Option--*/}
                <label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="type"
                    value="has"
                    checked
                  />
                  <span className="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">
                    All
                  </span>
                </label>
                {/*--end::Option--*/}
                {/*--begin::Option--*/}
                <label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="type"
                    value="users"
                  />
                  <span className="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">
                    Users
                  </span>
                </label>
                {/*--end::Option--*/}
                {/*--begin::Option--*/}
                <label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="type"
                    value="orders"
                  />
                  <span className="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">
                    Orders
                  </span>
                </label>
                {/*--end::Option--*/}
              </div>
              {/*--end::Radio group--*/}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col xxl={7}>
          <Row gutter={8}>
            <Col lg={4}>
              <label className="fs-6 form-label fw-bold text-dark">
                Min. Amount
              </label>
              {/*--begin::Dialer--*/}
              <div
                className="position-relative"
                data-kt-dialer="true"
                data-kt-dialer-min="1000"
                data-kt-dialer-max="50000"
                data-kt-dialer-step="1000"
                data-kt-dialer-prefix="$"
                data-kt-dialer-decimals="2"
              >
                {/*--begin::Decrease control--*/}
                <button
                  type="button"
                  className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0"
                  data-kt-dialer-control="decrease"
                >
                  {/*--begin::Svg Icon | path: icons/duotune/general/gen042.svg--*/}
                  <span className="svg-icon svg-icon-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.3"
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="10"
                        fill="currentColor"
                      />
                      <rect
                        x="6.01041"
                        y="10.9247"
                        width="12"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*--end::Svg Icon--*/}
                </button>
                {/*--end::Decrease control--*/}
                {/*--begin::Input control--*/}
                <input
                  type="text"
                  className="form-control form-control-solid border-0 ps-12"
                  data-kt-dialer-control="input"
                  placeholder="Amount"
                  name="manageBudget"
                  readOnly
                  value="$50"
                />
                {/*--end::Input control--*/}
                {/*--begin::Increase control--*/}
                <button
                  type="button"
                  className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0"
                  data-kt-dialer-control="increase"
                >
                  {/*--begin::Svg Icon | path: icons/duotune/general/gen041.svg--*/}
                  <span className="svg-icon svg-icon-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.3"
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="10"
                        fill="currentColor"
                      />
                      <rect
                        x="10.8891"
                        y="17.8033"
                        width="12"
                        height="2"
                        rx="1"
                        transform="rotate(-90 10.8891 17.8033)"
                        fill="currentColor"
                      />
                      <rect
                        x="6.01041"
                        y="10.9247"
                        width="12"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*--end::Svg Icon--*/}
                </button>
                {/*--end::Increase control--*/}
              </div>
              {/*--end::Dialer--*/}
            </Col>
            <Col lg={4}>
              <label className="fs-6 form-label fw-bold text-dark">
                Max. Amount
              </label>
              {/*--begin::Dialer--*/}
              <div
                className="position-relative"
                data-kt-dialer="true"
                data-kt-dialer-min="1000"
                data-kt-dialer-max="50000"
                data-kt-dialer-step="1000"
                data-kt-dialer-prefix="$"
                data-kt-dialer-decimals="2"
              >
                {/*--begin::Decrease control--*/}
                <button
                  type="button"
                  className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0"
                  data-kt-dialer-control="decrease"
                >
                  {/*--begin::Svg Icon | path: icons/duotune/general/gen042.svg--*/}
                  <span className="svg-icon svg-icon-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.3"
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="10"
                        fill="currentColor"
                      />
                      <rect
                        x="6.01041"
                        y="10.9247"
                        width="12"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*--end::Svg Icon--*/}
                </button>
                {/*--end::Decrease control--*/}
                {/*--begin::Input control--*/}
                <input
                  type="text"
                  className="form-control form-control-solid border-0 ps-12"
                  data-kt-dialer-control="input"
                  placeholder="Amount"
                  name="manageBudget"
                  readOnly
                  value="$100"
                />
                {/*--end::Input control--*/}
                {/*--begin::Increase control--*/}
                <button
                  type="button"
                  className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0"
                  data-kt-dialer-control="increase"
                >
                  {/*--begin::Svg Icon | path: icons/duotune/general/gen041.svg--*/}
                  <span className="svg-icon svg-icon-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.3"
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="10"
                        fill="currentColor"
                      />
                      <rect
                        x="10.8891"
                        y="17.8033"
                        width="12"
                        height="2"
                        rx="1"
                        transform="rotate(-90 10.8891 17.8033)"
                        fill="currentColor"
                      />
                      <rect
                        x="6.01041"
                        y="10.9247"
                        width="12"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*--end::Svg Icon--*/}
                </button>
                {/*--end::Increase control--*/}
              </div>
              {/*--end::Dialer--*/}
            </Col>
            <Col lg={4}>
              <label className="fs-6 form-label fw-bold text-dark">
                Team Size
              </label>
              <input
                type="text"
                className="form-control form-control form-control-solid"
                name="city"
              />
            </Col>
          </Row>
        </Col>
        <Col xxl={5}>
          <Row gutter={8}>
            <Col lg={6}>
              <label className="fs-6 form-label fw-bold text-dark">
                Category
              </label>
              {/*--begin::Select--*/}
              <select
                className="form-select form-select-solid"
                data-control="select2"
                data-placeholder="In Progress"
                data-hide-search="true"
              >
                <option value="" />
                <option value="1">Not started</option>
                <option value="2" selected>
                  Select
                </option>
                <option value="3">Done</option>
              </select>
              {/*--end::Select--*/}
            </Col>
            <Col lg={6}>
              <label className="fs-6 form-label fw-bold text-dark">
                Status
              </label>
              <div className="form-check d-flex form-switch form-check-custom form-check-solid mt-1">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexSwitchChecked"
                  checked
                />
                <label className="form-check-label" htmlFor="flexSwitchChecked">
                  Active
                </label>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default AdvanceForm;
