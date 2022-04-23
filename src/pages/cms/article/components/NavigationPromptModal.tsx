import { Button, Modal } from '@/components/Metronic';

interface NavigationPromptModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

function NavigationPromptModal({ onConfirm, onCancel }: NavigationPromptModalProps) {
  return (
    <Modal
      centered
      visible={true}
      onCancel={onCancel}
      cancelText="留 下"
      onOk={onConfirm}
      footer={null}
      okText="离 开"
      dialogClassName="mw-550px"
      bodyClassName="mx-5 pt-0 pb-15"
    >
      <div className="mb-6">
        <h1 className="mb-3">你确定要离开当前页面吗?</h1>
      </div>
      <div className="mb-6">
        <div className="mh-375px scroll-y me-n7 pe-7 fs-6 text-muted">
          <p> 您有正在编辑的内容, 但未保存.</p>
          <p>在离开前, 先保存您的修改</p>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="fw-bold" />
        <div>
          <Button variant="light" className="me-3" onClick={onCancel}>
            留在当前页面
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            离 开
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default NavigationPromptModal;
