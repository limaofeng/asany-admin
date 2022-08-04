import type { ConversationItem } from 'open-im-sdk/types';

import CveItem from './CveItem';

import { Card } from '@/metronic';

type CveListProps = {
  loading: boolean;
  cves: ConversationItem[];
  curCve: ConversationItem | null;
};

function CveList(props: CveListProps) {
  const { curCve, cves } = props;

  return (
    <>
      <Card flush className="pt-0 px-5 background-transparent" bodyClassName="pt-5 px-3 cve-list">
        {cves.map((item) => (
          <CveItem cveList={cves} data={item} curCve={curCve} key={item.conversationID} />
        ))}
      </Card>
      <div className="card card-flush d-none">
        {/*--begin::Card body--*/}
        <div className="card-body pt-5" id="kt_chat_contacts_body">
          {/*--begin::List--*/}
          <div
            className="scroll-y me-n5 pe-5 h-200px h-lg-auto"
            data-kt-scroll="true"
            data-kt-scroll-activate="{default: false, lg: true}"
            data-kt-scroll-max-height="auto"
            data-kt-scroll-dependencies="#kt_header, #kt_toolbar, #kt_footer, #kt_chat_contacts_header"
            data-kt-scroll-wrappers="#kt_content, #kt_chat_contacts_body"
            data-kt-scroll-offset="5px"
          >
            {/*--begin::User--*/}
            <div className="d-flex flex-stack py-4">
              {/*--begin::Details--*/}
              <div className="d-flex align-items-center">
                {/*--begin::Avatar--*/}
                <div className="symbol symbol-45px symbol-circle">
                  <span className="symbol-label bg-light-danger text-danger fs-6 fw-bolder">M</span>
                </div>
                {/*--end::Avatar--*/}
                {/*--begin::Details--*/}
                <div className="ms-5">
                  <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">
                    Melody Macy
                  </a>
                  <div className="fw-semibold text-muted">melody@altbox.com</div>
                </div>
                {/*--end::Details--*/}
              </div>
              {/*--end::Details--*/}
              {/*--begin::Lat seen--*/}
              <div className="d-flex flex-column align-items-end ms-2">
                <span className="text-muted fs-7 mb-1">1 day</span>
              </div>
              {/*--end::Lat seen--*/}
            </div>
            {/*--end::User--*/}
            {/*--begin::Separator--*/}
            <div className="separator separator-dashed d-none" />
            {/*--end::Separator--*/}
            {/*--begin::User--*/}
            <div className="d-flex flex-stack py-4">
              {/*--begin::Details--*/}
              <div className="d-flex align-items-center">
                {/*--begin::Avatar--*/}
                <div className="symbol symbol-45px symbol-circle">
                  <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                </div>
                {/*--end::Avatar--*/}
                {/*--begin::Details--*/}
                <div className="ms-5">
                  <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">
                    Max Smith
                  </a>
                  <div className="fw-semibold text-muted">max@kt.com</div>
                </div>
                {/*--end::Details--*/}
              </div>
              {/*--end::Details--*/}
              {/*--begin::Lat seen--*/}
              <div className="d-flex flex-column align-items-end ms-2">
                <span className="text-muted fs-7 mb-1">5 hrs</span>
              </div>
              {/*--end::Lat seen--*/}
            </div>
            {/*--end::User--*/}
            {/*--begin::Separator--*/}
            <div className="separator separator-dashed d-none" />
            {/*--end::Separator--*/}
            {/*--begin::User--*/}
            <div className="d-flex flex-stack py-4">
              {/*--begin::Details--*/}
              <div className="d-flex align-items-center">
                {/*--begin::Avatar--*/}
                <div className="symbol symbol-45px symbol-circle">
                  <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                </div>
                {/*--end::Avatar--*/}
                {/*--begin::Details--*/}
                <div className="ms-5">
                  <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">
                    Sean Bean
                  </a>
                  <div className="fw-semibold text-muted">sean@dellito.com</div>
                </div>
                {/*--end::Details--*/}
              </div>
              {/*--end::Details--*/}
              {/*--begin::Lat seen--*/}
              <div className="d-flex flex-column align-items-end ms-2">
                <span className="text-muted fs-7 mb-1">5 hrs</span>
              </div>
              {/*--end::Lat seen--*/}
            </div>
            {/*--end::User--*/}
            {/*--begin::Separator--*/}
            <div className="separator separator-dashed d-none" />
            {/*--end::Separator--*/}
            {/*--begin::User--*/}
            <div className="d-flex flex-stack py-4">
              {/*--begin::Details--*/}
              <div className="d-flex align-items-center">
                {/*--begin::Avatar--*/}
                <div className="symbol symbol-45px symbol-circle">
                  <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                </div>
                {/*--end::Avatar--*/}
                {/*--begin::Details--*/}
                <div className="ms-5">
                  <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">
                    Brian Cox
                  </a>
                  <div className="fw-semibold text-muted">brian@exchange.com</div>
                </div>
                {/*--end::Details--*/}
              </div>
              {/*--end::Details--*/}
              {/*--begin::Lat seen--*/}
              <div className="d-flex flex-column align-items-end ms-2">
                <span className="text-muted fs-7 mb-1">5 hrs</span>
              </div>
              {/*--end::Lat seen--*/}
            </div>
            {/*--end::User--*/}
            {/*--begin::Separator--*/}
            <div className="separator separator-dashed d-none" />
            {/*--end::Separator--*/}
            {/*--begin::User--*/}
            <div className="d-flex flex-stack py-4">
              {/*--begin::Details--*/}
              <div className="d-flex align-items-center">
                {/*--begin::Avatar--*/}
                <div className="symbol symbol-45px symbol-circle">
                  <span className="symbol-label bg-light-warning text-warning fs-6 fw-bolder">
                    C
                  </span>
                </div>
                {/*--end::Avatar--*/}
                {/*--begin::Details--*/}
                <div className="ms-5">
                  <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">
                    Mikaela Collins
                  </a>
                  <div className="fw-semibold text-muted">mik@pex.com</div>
                </div>
                {/*--end::Details--*/}
              </div>
              {/*--end::Details--*/}
              {/*--begin::Lat seen--*/}
              <div className="d-flex flex-column align-items-end ms-2">
                <span className="text-muted fs-7 mb-1">3 hrs</span>
                <span className="badge badge-sm badge-circle badge-light-warning">9</span>
              </div>
              {/*--end::Lat seen--*/}
            </div>
            {/*--end::User--*/}
            {/*--begin::Separator--*/}
            <div className="separator separator-dashed d-none" />
            {/*--end::Separator--*/}
            {/*--begin::User--*/}
            <div className="d-flex flex-stack py-4">
              {/*--begin::Details--*/}
              <div className="d-flex align-items-center">
                {/*--begin::Avatar--*/}
                <div className="symbol symbol-45px symbol-circle">
                  <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                  <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2" />
                </div>
                {/*--end::Avatar--*/}
                {/*--begin::Details--*/}
                <div className="ms-5">
                  <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">
                    Francis Mitcham
                  </a>
                  <div className="fw-semibold text-muted">f.mit@kpmg.com</div>
                </div>
                {/*--end::Details--*/}
              </div>
              {/*--end::Details--*/}
              {/*--begin::Lat seen--*/}
              <div className="d-flex flex-column align-items-end ms-2">
                <span className="text-muted fs-7 mb-1">20 hrs</span>
              </div>
              {/*--end::Lat seen--*/}
            </div>
            {/*--end::User--*/}
            {/*--begin::Separator--*/}
            <div className="separator separator-dashed d-none" />
            {/*--end::Separator--*/}
            {/*--begin::User--*/}
            <div className="d-flex flex-stack py-4">
              {/*--begin::Details--*/}
              <div className="d-flex align-items-center">
                {/*--begin::Avatar--*/}
                <div className="symbol symbol-45px symbol-circle">
                  <span className="symbol-label bg-light-danger text-danger fs-6 fw-bolder">O</span>
                </div>
                {/*--end::Avatar--*/}
                {/*--begin::Details--*/}
                <div className="ms-5">
                  <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">
                    Olivia Wild
                  </a>
                  <div className="fw-semibold text-muted">olivia@corpmail.com</div>
                </div>
                {/*--end::Details--*/}
              </div>
              {/*--end::Details--*/}
              {/*--begin::Lat seen--*/}
              <div className="d-flex flex-column align-items-end ms-2">
                <span className="text-muted fs-7 mb-1">1 week</span>
                <span className="badge badge-sm badge-circle badge-light-danger">5</span>
              </div>
              {/*--end::Lat seen--*/}
            </div>
            {/*--end::User--*/}
            {/*--begin::Separator--*/}
            <div className="separator separator-dashed d-none" />
            {/*--end::Separator--*/}
            {/*--begin::User--*/}
            <div className="d-flex flex-stack py-4">
              {/*--begin::Details--*/}
              <div className="d-flex align-items-center">
                {/*--begin::Avatar--*/}
                <div className="symbol symbol-45px symbol-circle">
                  <span className="symbol-label bg-light-primary text-primary fs-6 fw-bolder">
                    N
                  </span>
                </div>
                {/*--end::Avatar--*/}
                {/*--begin::Details--*/}
                <div className="ms-5">
                  <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">
                    Neil Owen
                  </a>
                  <div className="fw-semibold text-muted">owen.neil@gmail.com</div>
                </div>
                {/*--end::Details--*/}
              </div>
              {/*--end::Details--*/}
              {/*--begin::Lat seen--*/}
              <div className="d-flex flex-column align-items-end ms-2">
                <span className="text-muted fs-7 mb-1">1 week</span>
              </div>
              {/*--end::Lat seen--*/}
            </div>
            {/*--end::User--*/}
            {/*--begin::Separator--*/}
            <div className="separator separator-dashed d-none" />
            {/*--end::Separator--*/}
            {/*--begin::User--*/}
            <div className="d-flex flex-stack py-4">
              {/*--begin::Details--*/}
              <div className="d-flex align-items-center">
                {/*--begin::Avatar--*/}
                <div className="symbol symbol-45px symbol-circle">
                  <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
                </div>
                {/*--end::Avatar--*/}
                {/*--begin::Details--*/}
                <div className="ms-5">
                  <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">
                    Dan Wilson
                  </a>
                  <div className="fw-semibold text-muted">dam@consilting.com</div>
                </div>
                {/*--end::Details--*/}
              </div>
              {/*--end::Details--*/}
              {/*--begin::Lat seen--*/}
              <div className="d-flex flex-column align-items-end ms-2">
                <span className="text-muted fs-7 mb-1">20 hrs</span>
              </div>
              {/*--end::Lat seen--*/}
            </div>
            {/*--end::User--*/}
            {/*--begin::Separator--*/}
            <div className="separator separator-dashed d-none" />
            {/*--end::Separator--*/}
            {/*--begin::User--*/}
            <div className="d-flex flex-stack py-4">
              {/*--begin::Details--*/}
              <div className="d-flex align-items-center">
                {/*--begin::Avatar--*/}
                <div className="symbol symbol-45px symbol-circle">
                  <span className="symbol-label bg-light-danger text-danger fs-6 fw-bolder">E</span>
                </div>
                {/*--end::Avatar--*/}
                {/*--begin::Details--*/}
                <div className="ms-5">
                  <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">
                    Emma Bold
                  </a>
                  <div className="fw-semibold text-muted">emma@intenso.com</div>
                </div>
                {/*--end::Details--*/}
              </div>
              {/*--end::Details--*/}
              {/*--begin::Lat seen--*/}
              <div className="d-flex flex-column align-items-end ms-2">
                <span className="text-muted fs-7 mb-1">3 hrs</span>
              </div>
              {/*--end::Lat seen--*/}
            </div>
            {/*--end::User--*/}
          </div>
          {/*--end::List--*/}
        </div>
        {/*--end::Card body--*/}
      </div>
    </>
  );
}

export default CveList;
