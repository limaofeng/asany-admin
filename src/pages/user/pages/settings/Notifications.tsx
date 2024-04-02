import { ContentWrapper } from '@/layouts/components';
import { Card } from '@/metronic';

function Notifications() {
  return (
    <ContentWrapper footer={false}>
      <Card className="mb-5 mb-xl-10">
        <Card.Header>
          <Card.Title>通知</Card.Title>
        </Card.Header>
        <Card.Body className="border-top px-9 pt-3 pb-4">
          <div className="table-responsive">
            <table className="table table-row-dashed border-gray-300 align-middle gy-6">
              <tbody className="fs-6 fw-bold">
                <tr>
                  <td className="min-w-250px fs-4 fw-bolder">Notifications</td>
                  <td className="w-125px">
                    <div className="form-check form-check-solid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="kt_settings_notification_email"
                        checked
                        data-kt-check="true"
                        data-kt-check-target="[data-kt-settings-notification=email]"
                      />
                      <label
                        className="form-check-label ps-2"
                        htmlFor="kt_settings_notification_email"
                      >
                        Email
                      </label>
                    </div>
                  </td>
                  <td className="w-125px">
                    <div className="form-check form-check-solid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="kt_settings_notification_phone"
                        checked
                        data-kt-check="true"
                        data-kt-check-target="[data-kt-settings-notification=phone]"
                      />
                      <label
                        className="form-check-label ps-2"
                        htmlFor="kt_settings_notification_phone"
                      >
                        Phone
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Billing Updates</td>
                  <td>
                    <div className="form-check form-check-solid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="1"
                        id="billing1"
                        checked
                        data-kt-settings-notification="email"
                      />
                      <label
                        className="form-check-label ps-2"
                        htmlFor="billing1"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form-check form-check-solid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="billing2"
                        checked
                        data-kt-settings-notification="phone"
                      />
                      <label
                        className="form-check-label ps-2"
                        htmlFor="billing2"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>New Team Members</td>
                  <td>
                    <div className="form-check form-check-solid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="team1"
                        checked
                        data-kt-settings-notification="email"
                      />
                      <label
                        className="form-check-label ps-2"
                        htmlFor="team1"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form-check form-check-solid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="team2"
                        data-kt-settings-notification="phone"
                      />
                      <label
                        className="form-check-label ps-2"
                        htmlFor="team2"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Completed Projects</td>
                  <td>
                    <div className="form-check form-check-solid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="project1"
                        data-kt-settings-notification="email"
                      />
                      <label
                        className="form-check-label ps-2"
                        htmlFor="project1"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form-check form-check-solid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="project2"
                        checked
                        data-kt-settings-notification="phone"
                      />
                      <label
                        className="form-check-label ps-2"
                        htmlFor="project2"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-bottom-0">Newsletters</td>
                  <td className="border-bottom-0">
                    <div className="form-check form-check-solid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="newsletter1"
                        data-kt-settings-notification="email"
                      />
                      <label
                        className="form-check-label ps-2"
                        htmlFor="newsletter1"
                      />
                    </div>
                  </td>
                  <td className="border-bottom-0">
                    <div className="form-check form-check-solid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="newsletter2"
                        data-kt-settings-notification="phone"
                      />
                      <label
                        className="form-check-label ps-2"
                        htmlFor="newsletter2"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end py-6 px-9">
          <button className="btn btn-light btn-active-light-primary me-2">
            Discard
          </button>
          <button className="btn btn-primary px-6">Save Changes</button>
        </Card.Footer>
      </Card>
    </ContentWrapper>
  );
}

export default Notifications;
