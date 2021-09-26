import RcSelect, { Option } from 'rc-select';

import './Select.scss';

function Select() {
  return (
    <RcSelect
      prefixCls="form-select"
      className="form-select form-select-sm form-select-solid"
      dropdownClassName="select2-container select2-container--bootstrap5 select2-container--open"
    >
      <Option value="jack">jack</Option>
      <Option value="lucy">lucy</Option>
      <Option value="yiminghe">yiminghe</Option>
    </RcSelect>
  );
}

export default Select;
