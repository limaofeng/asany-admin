import { Button, Card, Symbol } from '@/metronic';

function OurClients() {
  return (
    <Card className="h-100" bodyClassName="p-9">
      {/*--begin::Heading--*/}
      <div className="fs-2hx fw-bolder">49</div>
      <div className="fs-4 fw-bold text-gray-400 mb-7">Our Clients</div>
      {/*--end::Heading--*/}
      {/*--begin::Users group--*/}
      <Symbol.Users
        className="symbol-hover mb-9"
        maxCount={9}
        users={[
          {
            name: 'Alan Warden',
          },
          {
            name: 'Michael Eberon',
            avatar: '/assets/media/avatars/300-11.jpg',
          },
          {
            name: 'Michelle Swanston',
            avatar: '/assets/media/avatars/300-7.jpg',
          },
          {
            name: 'Francis Mitcham',
            avatar: '/assets/media/avatars/300-20.jpg',
          },
          {
            name: 'Susan Redwood',
          },
          {
            name: 'Melody Macy',
            avatar: '/assets/media/avatars/300-2.jpg',
          },
          {
            name: 'Perry Matthew',
          },
          {
            name: 'Barry Walter',
            avatar: '/assets/media/avatars/300-12.jpg',
          },
        ]}
        more={
          <Symbol.More
            className="bg-dark"
            count={42}
            labelClassName="symbol-label bg-dark text-gray-300 fs-8 fw-bolder"
          />
        }
        size={35}
        shape="circle"
      />
      {/*--end::Users group--*/}
      {/*--begin::Actions--*/}
      <div className="d-flex">
        <Button className="me-3">All Clients</Button>
        <Button variant="light">Invite New</Button>
      </div>
      {/*--end::Actions--*/}
    </Card>
  );
}

export default OurClients;
