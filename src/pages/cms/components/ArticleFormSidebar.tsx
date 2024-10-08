import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';

import { Icon } from '@asany/icons';
import { TreeSelect } from 'antd';
import classnames from 'classnames';
import type { Moment } from 'moment';
import moment from 'moment';

import { Button, Card, Form, Input, Upload } from '@/metronic';
import { ArticleStatus, type Article } from '@/types';

import PublishDatePicker from './PublishDatePicker';

import useArticleDelete from '../hooks/useArticleDelete';

type ArticleFormSidebarProps = {
  baseUrl: string;
  article?: Article;
  onChangeCategory: (category: string) => void;
  categoryTreeData: { value: string; title: string }[];
};

function renderStateText(status: ArticleStatus) {
  if (status === ArticleStatus.Published) {
    return '已发布';
  }
  if (status === ArticleStatus.Scheduled) {
    return '计划中';
  }
  return '已失效';
}

function ArticleFormSidebar(props: ArticleFormSidebarProps) {
  const { article, categoryTreeData, onChangeCategory, baseUrl } = props;

  const [publishedAt, setPublishedAt] = useState<Moment | undefined>();
  const navigate = useNavigate();

  const handlePublishedAtChange = useCallback((datetime: any) => {
    setPublishedAt(datetime);
  }, []);

  const disabledDate = useCallback((current: Moment) => {
    return current.isAfter(moment());
  }, []);

  const disabledTime = useCallback(
    (current: Moment) => {
      return {
        disabledHours: (): number[] => {
          if (!(publishedAt || current).isSame(moment(), 'days')) {
            return [];
          }
          const hours = [];
          for (let i = moment().hours() + 1; i < 24; i++) {
            hours.push(i);
          }
          return hours;
        },
        disabledMinutes: (selectedHour: number): number[] => {
          if (!(publishedAt || current).isSame(moment(), 'days')) {
            return [];
          }
          if (!current.set('hours', selectedHour).isSame(moment(), 'hours')) {
            return [];
          }
          const minutes = [];
          for (let i = moment().minutes() + 1; i < 60; i++) {
            minutes.push(i);
          }
          return minutes;
        },
      };
    },
    [publishedAt],
  );

  const { delete: handleDelete } = useArticleDelete(() => {
    navigate(`${baseUrl}/cms/categories/${article!.category!.id}/articles`, {
      replace: true,
    });
  });

  return (
    <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7">
      <Card flush>
        <Card.Header className="ribbon ribbon-top ribbon-vertical">
          {!!article?.status && article?.status !== 'DRAFT' && (
            <div
              className={classnames('ribbon-label', {
                'bg-primary': article?.status === ArticleStatus.Published,
                'bg-success': article?.status === ArticleStatus.Scheduled,
                'bg-danger': article?.status === ArticleStatus.Expired,
              })}
            >
              {renderStateText(article.status)}
            </div>
          )}
          <Card.Title>文章设置</Card.Title>
        </Card.Header>
        <Card.Body className=" pt-0">
          <Form.Item name="image" className="text-center">
            <Upload.Image
              width={240}
              height={150}
              className="mb-3"
              space="Ohc2OaZ4"
              accept=".png, .jpg, .jpeg"
              background="/assets/media/svg/files/blank-image.svg"
            />
          </Form.Item>
          <div className="text-muted fs-7 mb-6">
            设置文章封面图。仅接受 *.png、*.jpg 和 *.jpeg 格式的图片
          </div>
          <Form.Item
            className="mb-3"
            label="所属栏目"
            name={['category', 'id']}
            rules={[{ required: true, message: '所属栏目不能为空' }]}
          >
            <TreeSelect
              onChange={onChangeCategory}
              style={{ width: '100%' }}
              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
              treeData={categoryTreeData}
              placeholder="选择栏目"
              treeDefaultExpandAll
              transitionName=""
            />
          </Form.Item>
          <div className="text-muted fs-7 mb-6">
            您的文章必须发布在一个栏目中
          </div>

          <Form.Item name="publishedAt" label="发布时间" className="mb-6">
            <PublishDatePicker
              onChange={handlePublishedAtChange}
              disabled={article?.status === 'SCHEDULED'}
              disabledDate={disabledDate}
              disabledTime={disabledTime}
            />
          </Form.Item>

          <Form.Item name="summary" label="摘要" className="mb-6">
            <Input.TextArea autoSize={{ minRows: 6 }} />
          </Form.Item>
          <Form.Item name="authors" label="作者">
            <Input />
          </Form.Item>
        </Card.Body>
      </Card>
      {article && (
        <Card flush className="py-4">
          <Card.Body>
            <Button
              onClick={() => handleDelete(article)}
              full
              className="mb-3"
              variant="light-danger"
              icon={<Icon className="svg-icon-2" name="Bootstrap/trash" />}
            >
              删除
            </Button>
            <div className="text-muted fs-7 mb-6">文章删除后，不可恢复</div>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default ArticleFormSidebar;
