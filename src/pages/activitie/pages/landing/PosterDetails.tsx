import { useCallback, useEffect } from 'react';

import type { RouteComponentProps } from 'react-router';

import {
  useCreatePosterMutation,
  useLandingPosterLazyQuery,
  useUpdatePosterMutation,
} from '../../hooks';

import { ContentWrapper } from '@/layouts/components';
import { BlockUI, Button, Card, Form, Input, Modal, Toast, Upload } from '@/metronic';

type PosterDetailsProps = RouteComponentProps<{ id: string }>;

function PosterDetails(props: PosterDetailsProps) {
  const { match, history } = props;

  const [loadPoster, { data: viewData, loading: getLoading }] = useLandingPosterLazyQuery({
    fetchPolicy: 'cache-and-network',
  });
  const [createPoster, { loading: createSubmiting }] = useCreatePosterMutation({});
  const [updatePoster, { loading: updateSubmiting }] = useUpdatePosterMutation({});

  const isNew = match.params.id == 'new';

  const form = Form.useForm();

  const handleSave = useCallback(async () => {
    const values = await form.validateFields();
    if (isNew) {
      await createPoster({
        variables: {
          input: {
            ...values,
          },
        },
      });
    } else {
      await updatePoster({
        variables: {
          id: match.params.id,
          input: {
            ...values,
          },
        },
      });
    }

    Toast.success(`海报 “${values.name}” ${isNew ? '新增' : '修改'}成功`, 2000, {
      placement: 'bottom-start',
      progressBar: true,
    });

    if (!history.length || isNew) {
      history.replace('/website/landing/posters');
    } else {
      history.goBack();
    }
  }, [createPoster, match.params.id, form, history, isNew, updatePoster]);

  useEffect(() => {
    if (match.params.id == 'new') {
      return;
    }
    const abortController = new AbortController();
    loadPoster({
      variables: { id: match.params.id },
      context: {
        fetchOptions: {
          signal: abortController.signal,
        },
      },
    }).then(async ({ data }) => {
      const poster = data?.poster;
      if (!poster) {
        await Modal.error({
          content: '海报不存在,可能已经被删除了',
          timer: 3000,
          timerProgressBar: true,
        });
        if (!!history.length) {
          history.goBack();
        } else {
          history.replace('/website/landing/posters');
        }
        return;
      }
      form.setFieldsValue({
        ...poster,
        music: poster.music?.id,
        background: poster.background?.id,
      });
    });
    return () => {
      abortController.abort();
    };
  }, [form, loadPoster, history, match.params.id]);

  return (
    <ContentWrapper header={isNew ? { title: '新增海报' } : undefined} footer={false}>
      <Card className="mb-5 mb-xl-10">
        <Card.Header>
          <Card.Title>{isNew ? '新增海报' : viewData?.poster?.name}</Card.Title>
        </Card.Header>
        <Card.Body>
          <BlockUI overlayClassName="bg-white bg-opacity-25" loading={getLoading}>
            <Form
              form={form}
              className="w-800px row d-flex flex-shrink-0 flex-column-reverse flex-md-row"
            >
              <div className="col-12 col-md-8">
                <Form.Item
                  className="mb-5"
                  name="name"
                  label="名称"
                  rules={[{ required: true, message: '名称不能为空' }]}
                >
                  <Input solid className="w-400px" />
                </Form.Item>
                <Form.Item className="my-5" name="music" label="背景音乐">
                  <Upload
                    solid
                    accept=".aif, .cda, .mid, .mp3, .mpa, .ogg, .wav, .wma, .wpl"
                    space="orX8kLOV"
                    className="w-400px"
                  />
                </Form.Item>
                <Form.Item
                  className="my-5"
                  name="description"
                  label="描述"
                  help="请用少于250字符描述"
                >
                  <Input.TextArea
                    solid
                    autoSize={{ minRows: 4, maxRows: 8 }}
                    showCount
                    maxLength={250}
                    className="w-400px"
                  />
                </Form.Item>
              </div>
              <div className="col-12 col-md-4">
                <Form.Item className="mb-5" name="background" label="海报图片">
                  <Upload.Image width={375} height={812} space="orX8kLOV" crop={false} />
                </Form.Item>
              </div>
            </Form>
          </BlockUI>
          <Button loading={getLoading || createSubmiting || updateSubmiting} onClick={handleSave}>
            {isNew ? <>添加海报</> : <>修改海报信息</>}
          </Button>
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default PosterDetails;
