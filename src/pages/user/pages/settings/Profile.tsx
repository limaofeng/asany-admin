import { useCallback, useEffect } from 'react';

import { useModel } from '@umijs/max';

import { useProfileQuery, useUpdateProfileMutation } from '../../hooks';

import { ContentWrapper } from '@/layouts/components';
import {
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  Radio,
  Toast,
  Upload,
} from '@/metronic';

function Profile() {
  const form = Form.useForm();
  const { refresh } = useModel('@@initialState');

  const { data, loading } = useProfileQuery({
    fetchPolicy: 'cache-and-network',
  });
  const [updateProfile, { loading: submiting }] = useUpdateProfileMutation();

  const handleUpdate = useCallback(async () => {
    const { email, ...values } = await form.getFieldsValue();
    await updateProfile({
      variables: {
        input: { ...values, email: email?.address },
      },
    });
    Toast.success('个人资料更新成功', 3000, {
      placement: 'bottom-start',
      progressBar: true,
    });
    refresh();
  }, [form, refresh, updateProfile]);

  useEffect(() => {
    if (!data?.profile) {
      return;
    }
    form.setFieldsValue(data.profile);
  }, [data?.profile, form]);

  return (
    <ContentWrapper
      header={{ title: '编辑个人资料' }}
      loading={loading}
      footer={false}
    >
      <Card className="mb-5 mb-xl-10">
        <Card.Header>
          <Card.Title>个人资料</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form
            form={form}
            className="mw-800px row d-flex flex-shrink-0 flex-column-reverse flex-md-row"
          >
            <div className="mw-500px col-12 col-md-8">
              <div className="mw-400px">
                <Form.Item
                  className="mb-5"
                  name="name"
                  label="昵称"
                  help="你的昵称可能会出现在你评论过的文章或被其他公开的信息中"
                >
                  <Input solid />
                </Form.Item>
                <Form.Item
                  className="my-5"
                  name={['email', 'address']}
                  label="邮箱"
                  help="此邮箱将显示在您的个人资料中"
                >
                  <Input solid className="w-250px" />
                </Form.Item>
                <Form.Item
                  className="my-5"
                  name="sex"
                  label="性别"
                  help="您的性别信息不会在任何公开位置显示，但会作为默认头像规则"
                >
                  <Radio.Group
                    solid
                    options={[
                      { label: '男', value: 'male' },
                      { label: '女', value: 'female' },
                    ]}
                    className="d-flex align-items-center ms-3"
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
                <Form.Item
                  className="my-5"
                  name="company"
                  label="公司"
                  help="您可以使用 “@” 链接到您以加入的组织。"
                >
                  <Input solid />
                </Form.Item>
                <Form.Item className="my-5" name="location" label="所在地区">
                  <Input solid />
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
                  />
                </Form.Item>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="row">
                <Form.Item
                  className="mb-5"
                  name="avatar"
                  label="用户头像"
                  help="允许的文件类型:png, jpg, jpeg。"
                >
                  <Upload.Image
                    width={125}
                    height={125}
                    space="7VE4SSrk"
                    crop={{ height: 300, zoomable: false, aspectRatio: 1 }}
                    background="/assets/media/svg/avatars/blank.svg"
                  />
                </Form.Item>
              </div>
            </div>
          </Form>
          <Button loading={submiting} onClick={handleUpdate}>
            更新个人资料
          </Button>
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default Profile;
