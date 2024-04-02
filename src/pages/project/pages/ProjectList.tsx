import { useMemo } from 'react';

import { Controls, Toolbar } from '@/components';
import { ContentWrapper } from '@/layouts/components';
import { Col, Pagination, Row, Select } from '@/metronic';

import ProjectCard from '../components/ProjectCard';
import ProjectToolbar from '../components/ProjectToolbar';
import {
  CurrentProjects,
  OurClients,
  ProjectFinance,
} from '../components/widgets';
import { useProjectsQuery } from '../hooks/api';

function ProjectList() {
  const { data, previousData, loading } = useProjectsQuery({
    fetchPolicy: 'cache-and-network',
  });

  const pagination = useMemo(() => {
    return data?.projects || previousData?.projects;
  }, [data?.projects, previousData?.projects]);

  const projects = useMemo(
    () => pagination?.edges.map((item) => item.node) || [],
    [pagination],
  );

  return (
    <ContentWrapper
      header={{
        toolbar: <ProjectToolbar />,
      }}
      loading={loading}
    >
      <Row gutter={{ default: 6, xl: 9 }}>
        <Col lg={6} xxl={4}>
          <CurrentProjects />
        </Col>
        <Col lg={6} xxl={4}>
          <ProjectFinance />
        </Col>
        <Col lg={6} xxl={4}>
          <OurClients />
        </Col>
      </Row>
      <Toolbar
        title="Projects"
        subtitle="by Status"
        controls={
          <Controls>
            <Select
              className="bg-body border-body fw-bolder w-125px"
              solid
              options={[
                {
                  value: 'Active',
                  label: 'Active',
                },
                {
                  value: 'Approved',
                  label: 'In Progress',
                },
                {
                  value: 'Declined',
                  label: 'To Do',
                },
                {
                  value: 'In Progress',
                  label: 'Completed',
                },
              ]}
            />
          </Controls>
        }
      />
      <Row gutter={{ default: 6, xl: 9 }}>
        {projects.map((p: any) => (
          <Col key={p.id} md={6} xl={4}>
            <ProjectCard {...p} />
          </Col>
        ))}
      </Row>
      <Pagination
        current={pagination?.current}
        total={pagination?.total}
        pageSize={pagination?.pageSize}
        className="pt-10"
      />
    </ContentWrapper>
  );
}

export default ProjectList;
