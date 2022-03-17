import Icon from '@asany/icons';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { Symbol, Tabs } from '@/pages/Metronic/components';

function FileDetails() {
  return (
    <div className="preview-container">
      <div className="preview-header">
        <h4>xxxx.jpg</h4>
      </div>
      <div className="preview-body">
        <Tabs className="nav-line-tabs-2x">
          <Tabs.TabPane key="file-details" tab="文件详情">
            <OverlayScrollbarsComponent
              className="flex-column-fluid custom-scrollbar"
              options={{
                scrollbars: { autoHide: 'scroll' },
              }}
            >
              <div className="file-preview mb-6 mt-5">
                <img />
              </div>
              <div className="fs-6 text-gray-800 mb-4">有权使用的人</div>
              <div className="row mb-6">
                <div className="col-lg-12 persons-with-authority">
                  <ul className="d-flex flex-row gap-5">
                    <li>
                      <Symbol.Avatar shape="circle" size={40} alt="李茂峰" />
                    </li>
                    <li>
                      <Symbol.Avatar
                        size={40}
                        shape="circle"
                        src={
                          <Icon
                            style={{ backgroundColor: '#689f38' }}
                            className="symbol-label svg-icon-white"
                            name="Duotune/cod007"
                          />
                        }
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="fs-6 text-gray-800 mb-4">系统属性</div>
              <div className="row mb-4">
                <label className="col-lg-4 fw-bold text-muted">类型</label>
                <div className="col-lg-8">
                  <span className="fs-7 text-gray-800">Max Smith</span>
                </div>
              </div>
              <div className="row mb-4">
                <label className="col-lg-4 fw-bold text-muted">大小</label>
                <div className="col-lg-8 fv-row">
                  <span className="fs-7 text-gray-800">Keenthemes</span>
                </div>
              </div>
              <div className="row mb-4">
                <label className="col-lg-4 fw-bold text-muted">位置</label>
                <div className="col-lg-8 d-flex align-items-center">
                  <span className="fs-7 text-gray-800 me-2">044 3276 454 935</span>
                </div>
              </div>
              <div className="row mb-4">
                <label className="col-lg-4 fw-bold text-muted">所有者</label>
                <div className="col-lg-8">
                  <a href="#" className="fs-7 text-gray-800 text-hover-primary">
                    keenthemes.com
                  </a>
                </div>
              </div>
              <div className="row mb-4">
                <label className="col-lg-4 fw-bold text-muted">修改时间</label>
                <div className="col-lg-8">
                  <span className="fs-7 text-gray-800">Germany</span>
                </div>
              </div>
              <div className="row mb-4">
                <label className="col-lg-4 fw-bold text-muted">上次打开时间</label>
                <div className="col-lg-8">
                  <span className="fs-7 text-gray-800">Email, Phone</span>
                </div>
              </div>
              <div className="row mb-4">
                <label className="col-lg-4 fw-bold text-muted">创建时间</label>
                <div className="col-lg-8">
                  <span className="fs-7 text-gray-800">Yes</span>
                </div>
              </div>
              <div className="row mb-4">
                <label className="col-lg-4 fw-bold text-muted">说明</label>
                <div className="col-lg-8">
                  <span className="fs-7 text-gray-800">Yes</span>
                </div>
              </div>
            </OverlayScrollbarsComponent>
          </Tabs.TabPane>
          <Tabs.TabPane key="action-records" tab="操作记录">
            <OverlayScrollbarsComponent
              className="flex-column-fluid custom-scrollbar"
              options={{
                scrollbars: { autoHide: 'scroll' },
              }}
            >
              xxxx
            </OverlayScrollbarsComponent>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default FileDetails;
