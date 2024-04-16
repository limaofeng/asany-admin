import { useCallback, useReducer, useRef } from 'react';

import Sortable, { ISortableItem, dragPreview } from '@asany/sortable';
import classnames from 'classnames';

import { Button, Input, Modal, SignleUpload, Symbol } from '@/metronic';
import { uuid } from '@/metronic/utils';
import { ProductImage } from '@/types';
import { useDeepCompareEffect } from '@/utils';

type ProductImageData = Omit<ProductImage, '__typename'> & {
  data_state: 'new' | 'edit';
};

type ProductImagesProps = {
  value?: ProductImageData[];
  onChange?: (value: ProductImageData[]) => void;
};

const parseUrl = (value?: ProductImageData) => {
  if (value?.url) {
    return value.url;
  }
  if (typeof value?.image === 'object') {
    return process.env.STORAGE_URL + `/preview/${value.image.id}`;
  } else if (typeof value?.image === 'string') {
    return process.env.STORAGE_URL + `/preview/${value.image}`;
  }
  return '';
};

function ProductImages(props: ProductImagesProps) {
  const { value, onChange } = props;

  const state = useRef<{
    value: ProductImageData[];
    visible: boolean;
    externalLink?: string;
  }>({
    value: [],
    visible: false,
  });
  const [, forceUpdate] = useReducer((s) => s + 1, 0);

  useDeepCompareEffect(() => {
    console.log('value', value);
    state.current.value = (value || []).map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      image: item.image,
      url: item.url,
      data_state: 'edit',
    }));
    forceUpdate();
  }, [value]);

  const handleChange = useCallback((value: ProductImageData[]) => {
    console.log('handleChange', value);
    onChange && onChange(value);
  }, []);

  const handleSort = useCallback((value: ISortableItem[]) => {
    state.current.value = value.map((item: any) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      image: item.image,
      url: item.url,
      data_state: item.data_state,
    }));
    handleChange(state.current.value);
  }, []);

  const setVisible = useCallback((visible: boolean) => {
    state.current.visible = visible;
    forceUpdate();
  }, []);

  const handleExternalLinks = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setVisible(true);
  }, []);

  const handleFileUpload = useCallback(
    (fileId: string) => {
      state.current.value.push({
        id: uuid(),
        title: '',
        description: '',
        data_state: 'new',
        image: fileId,
      });
      handleChange(state.current.value);
    },
    [value],
  );

  const handleLinkChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      state.current.externalLink = e.target.value;
      forceUpdate();
    },
    [],
  );

  const handleOk = useCallback(() => {
    state.current.value.push({
      id: uuid(),
      title: '',
      description: '',
      data_state: 'new',
      image: undefined,
      url: state.current.externalLink,
    });
    handleChange(state.current.value);
    setVisible(false);
  }, [value]);

  const handleClose = useCallback(() => {
    setVisible(false);
  }, []);

  const handleRemove = useCallback(
    (id: string) => () => {
      state.current.value = state.current.value.filter(
        (item) => item.id !== id,
      );
      handleChange(state.current.value);
    },
    [],
  );

  const visible = state.current.visible;
  const images = state.current.value;
  const linkValue = state.current.externalLink;

  return (
    <div className="article-content-image">
      <Modal
        centered
        visible={visible}
        dialogClassName="modal-dialog-small w-500px"
        onCancel={handleClose}
        onOk={handleOk}
        title="设置链接引用"
        closable={false}
        headerClassName="border-bottom-0"
        bodyClassName="py-2"
        footerClassName="border-top-0"
      >
        <Input.TextArea
          value={linkValue}
          autoSize={{ minRows: 3, maxRows: 5 }}
          onChange={handleLinkChange}
        />
      </Modal>
      <div className="fv-row mb-6">
        <SignleUpload
          accept={{
            'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.svg'],
          }}
          title={
            <>
              将文件拖拽至此处、点击上传，或
              <a onClick={handleExternalLinks} className="">
                设置
              </a>
              链接引用。
            </>
          }
          description="支持的格式：png, jpg, jpeg, gif, svg"
          onChange={handleFileUpload}
        />
      </div>
      <Sortable
        direction="horizontal"
        layout="grid"
        onChange={handleSort}
        tag="div"
        className="ps-0"
        draggable={true}
        items={images}
        rerender={false}
        itemRender={(_props, ref) => {
          const { data: item, drag, style } = _props as any;
          return (
            <Symbol.Image
              key={item.id}
              ref={drag(ref)}
              labelClassName="fs-2"
              size={150}
              style={{ width: 150, height: 150, ...style }}
              src={parseUrl(item)}
              className={classnames('shadow shadow-sm p-2 mb-6 me-6', {})}
              badge={
                <>
                  <Button
                    as="label"
                    type="circle"
                    variant={false}
                    onClick={handleRemove(item.id)}
                    data-kt-image-input-action="change"
                    className="symbol-badge start-100 btn-icon btn-active-color-primary w-25px h-25px bg-body shadow"
                  >
                    <i className="bi bi-x fs-2" />
                  </Button>
                </>
              }
            />
          );
        }}
        preview={{
          render: dragPreview((props: any) => {
            const { data: item } = props as any;
            return (
              <Symbol.Image
                style={{ width: 150, height: 150 }}
                labelClassName="fs-2"
                size={150}
                src={parseUrl(item)}
                className={classnames('shadow shadow-sm p-2', {})}
              />
            );
          }, {}),
        }}
      />
    </div>
  );
}

export default ProductImages;
