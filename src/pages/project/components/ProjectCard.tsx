import { Link } from 'umi';

import { Card, Symbol } from '@/metronic';
import type { Project } from '@/types';

type ProjectCardProps = Project;

function ProjectCard(props: ProjectCardProps) {
  const { name, description, id } = props;
  return (
    <Card as={Link} to={`/projects/${id}`} hoverable className="border-hover-primary">
      <Card.Header className=" border-0 pt-9">
        <Card.Title className="m-0">
          <div className="symbol symbol-50px w-50px bg-light">
            <img src="assets/media/svg/brand-logos/plurk.svg" alt="image" className="p-3" />
          </div>
        </Card.Title>
        <Card.Toolbar>
          <span className="badge badge-light-primary fw-bolder me-auto px-4 py-3">In Progress</span>
        </Card.Toolbar>
      </Card.Header>
      <Card.Body className="p-9">
        {/*--begin::Name--*/}
        <div className="fs-3 fw-bolder text-dark">{name}</div>
        {/*--end::Name--*/}
        {/*--begin::Description--*/}
        <p className="text-gray-400 fw-bold fs-5 mt-1 mb-7">{description}</p>
        {/*--end::Description--*/}
        {/*--begin::Info--*/}
        <div className="d-flex flex-wrap mb-5">
          {/*--begin::Due--*/}
          <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
            <div className="fs-6 text-gray-800 fw-bolder">Sep 22, 2022</div>
            <div className="fw-bold text-gray-400">Due Date</div>
          </div>
          {/*--end::Due--*/}
          {/*--begin::Budget--*/}
          <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
            <div className="fs-6 text-gray-800 fw-bolder">$284,900.00</div>
            <div className="fw-bold text-gray-400">Budget</div>
          </div>
          {/*--end::Budget--*/}
        </div>
        {/*--end::Info--*/}
        {/*--begin::Progress--*/}
        <div
          className="h-4px w-100 bg-light mb-5"
          data-bs-toggle="tooltip"
          title="This project 50% completed"
        >
          <div
            className="bg-primary rounded h-4px"
            role="progressbar"
            style={{ width: '50%' }}
            // aria-valuenow="50"
            // aria-valuemin="0"
            // aria-valuemax="100"
          />
        </div>
        {/*--end::Progress--*/}
        {/*--begin::Users--*/}
        <Symbol.Users
          size={35}
          shape="circle"
          users={[
            { name: 'Emma Smith', avatar: '/assets/media/avatars/300-6.jpg' },
            { name: 'Rudy Stone', avatar: '/assets/media/avatars/300-1.jpg' },
            { name: 'Susan Redwood' },
          ]}
        />
        {/*--end::Users--*/}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
