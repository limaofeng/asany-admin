import { ContentWrapper } from '@/layouts/components';
import { Button, Card, DatePicker, Form, Input, Radio } from '@/pages/Metronic/components';

function Profile() {
  return (
    <ContentWrapper header={{ title: '编辑个人资料' }} footer={false}>
      {/*--begin::Basic info--*/}
      <Card className="mb-5 mb-xl-10">
        <Card.Header>
          <Card.Title>个人资料</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form className="w-800px row d-flex flex-shrink-0 flex-column-reverse flex-md-row">
            <div className="col-12 col-md-8">
              <Form.Item
                className="mb-5"
                name="name"
                label="昵称"
                help="你的昵称可能会出现在你评论过的文章或被其他公开的信息中。您也可以随时删除它。"
              >
                <Input solid className="w-400px" />
              </Form.Item>
              <Form.Item
                className="my-5"
                name="email"
                label="电子邮件"
                help="此电子邮件将显示在您的公开个人资料中。"
              >
                <Input solid className="w-250px" />
              </Form.Item>
              <Form.Item
                className="my-5"
                name="sex"
                label="性别"
                help="您的性别信息不会在任何公开位置显示，但会作为默认头像规则中的一个因素"
              >
                <Radio.Group
                  solid
                  options={[
                    { label: '男', value: 'male' },
                    { label: '女', value: 'female' },
                  ]}
                />
              </Form.Item>
              <Form.Item
                className="my-5"
                name="birthday"
                label="生日"
                help="生日信息不会在任何公开位置显示，但会作为默认头像规则中的一个因素"
              >
                <DatePicker solid className="w-150px" />
              </Form.Item>
              <Form.Item className="my-5" name="email" label="职业">
                <Input solid className="w-400px" />
              </Form.Item>
              <Form.Item
                className="my-5"
                name="organization"
                label="组织"
                help="您可以使用 “@” 链接到您以加入的组织。"
              >
                <Input solid className="w-400px" />
              </Form.Item>
              <Form.Item className="my-5" name="url" label="所在地区">
                <Input solid className="w-400px" />
              </Form.Item>
              <Form.Item
                className="my-5"
                name="bio"
                label="自我介绍"
                help="请用少于250字符描述您自己"
              >
                <Input.TextArea
                  solid
                  autoSize={{ minRows: 4, maxRows: 8 }}
                  showCount
                  maxLength={250}
                  className="w-600px"
                />
              </Form.Item>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center">
              <div className="row">
                {/* <label className="col-lg-4 col-form-label fw-bold fs-6">Avatar</label> */}
                <div className="col-lg-8">
                  {/*--begin::Image input--*/}
                  <div
                    className="image-input image-input-outline"
                    data-kt-image-input="true"
                    style={{ backgroundImage: "url('/assets/media/svg/avatars/blank.svg')" }}
                  >
                    {/*--begin::Preview existing avatar--*/}
                    <div
                      className="image-input-wrapper w-125px h-125px"
                      style={{ backgroundImage: 'url(/assets/media/avatars/300-1.jpg)' }}
                    />
                    {/*--end::Preview existing avatar--*/}
                    {/*--begin::Label--*/}
                    <label
                      className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                      data-kt-image-input-action="change"
                      data-bs-toggle="tooltip"
                      title="Change avatar"
                    >
                      <i className="bi bi-pencil-fill fs-7" />
                      {/*--begin::Inputs--*/}
                      <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                      <input type="hidden" name="avatar_remove" />
                      {/*--end::Inputs--*/}
                    </label>
                    {/*--end::Label--*/}
                    {/*--begin::Cancel--*/}
                    <span
                      className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                      data-kt-image-input-action="cancel"
                      data-bs-toggle="tooltip"
                      title="Cancel avatar"
                    >
                      <i className="bi bi-x fs-2" />
                    </span>
                    {/*--end::Cancel--*/}
                    {/*--begin::Remove--*/}
                    <span
                      className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                      data-kt-image-input-action="remove"
                      data-bs-toggle="tooltip"
                      title="Remove avatar"
                    >
                      <i className="bi bi-x fs-2" />
                    </span>
                    {/*--end::Remove--*/}
                  </div>
                  {/*--end::Image input--*/}
                  {/*--begin::Hint--*/}
                  <div className="form-text">Allowed file types: png, jpg, jpeg.</div>
                  {/*--end::Hint--*/}
                </div>
              </div>
            </div>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Button>更新个人资料</Button>
        </Card.Footer>
      </Card>
    </ContentWrapper>
  );
}

export default Profile;
