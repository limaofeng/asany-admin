import { useCallback, useState } from 'react';

import classnames from 'classnames';

import { Button, Card, Input, Separator } from '@/metronic';

import AdvanceForm from './Form';

function AdvancedSearch() {
  const [visible, setVisible] = useState(false);

  const handleSwitchShowAndHide = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  return (
    <Card className="mb-7">
      <div className="d-flex align-items-center">
        <Input.Search
          solid
          size="lg"
          boxClassName="w-md-400px me-md-2"
          iconClassName="svg-icon-3 svg-icon-gray-500 ms-4"
        />
        {/*--begin::Input group
          <div className="position-relative w-md-400px me-md-2">
            <span className="svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 translate-middle ms-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.5"
                  x="17.0365"
                  y="15.1223"
                  width="8.15546"
                  height="2"
                  rx="1"
                  transform="rotate(45 17.0365 15.1223)"
                  fill="currentColor"
                />
                <path
                  d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <input
              type="text"
              className="form-control form-control-solid ps-10"
              name="search"
              value=""
              placeholder="Search"
            />
          </div>
          --*/}
        {/*--end::Input group--*/}
        {/*--begin:Action--*/}
        <div className="d-flex align-items-center">
          <Button className="me-5">查询</Button>
          {/* <button type="submit" className="btn btn-primary me-5">
              Search
            </button> */}
          <a className="btn btn-link" onClick={handleSwitchShowAndHide}>
            {visible ? <>隐藏高级查询</> : <>高级查询</>}
          </a>
        </div>
        {/*--end:Action--*/}
      </div>
      <div
        className={classnames('collapse', { show: visible })}
        id="kt_advanced_search_form"
      >
        <Separator style="dashed" className="mt-9 mb-6" />
        <AdvanceForm />
      </div>
    </Card>
  );
}

export default AdvancedSearch;
