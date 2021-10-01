import React from 'react';

import classNames from 'classnames';

// import type { TooltipProps } from '../tooltip';
// import Tooltip from '../tooltip';

import type { FormLabelAlign } from './typings';
import type { FormContextProps } from './context';
import { FormContext } from './context';
import type { RequiredMark } from './Form';

type TooltipProps = {
  title: React.ReactNode;
};

function Tooltip(_: TooltipProps) {
  console.log(_);
  return <></>;
}

function QuestionCircleOutlined() {
  return <></>;
}

export type WrapperTooltipProps = TooltipProps & {
  icon?: React.ReactElement;
};

export type LabelTooltipType = WrapperTooltipProps | React.ReactNode;

function toTooltipProps(tooltip: LabelTooltipType): WrapperTooltipProps | null {
  if (!tooltip) {
    return null;
  }

  if (typeof tooltip === 'object' && !React.isValidElement(tooltip)) {
    return tooltip as WrapperTooltipProps;
  }

  return {
    title: tooltip,
  };
}

export interface FormItemLabelProps {
  colon?: boolean;
  htmlFor?: string;
  label?: React.ReactNode;
  labelAlign?: FormLabelAlign;
  requiredMark?: RequiredMark;
  tooltip?: LabelTooltipType;
  className?: string;
}

const FormItemLabel: React.FC<FormItemLabelProps & { required?: boolean; prefixCls: string }> = ({
  prefixCls,
  label,
  htmlFor,
  colon,
  required,
  requiredMark,
  className,
  tooltip,
}) => {
  if (!label) return null;

  return (
    <FormContext.Consumer key="label">
      {({ vertical, colon: contextColon }: FormContextProps) => {
        let labelChildren = label;
        // Keep label is original where there should have no colon
        const computedColon = colon === true || (contextColon !== false && colon !== false);
        const haveColon = computedColon && !vertical;
        // Remove duplicated user input colon
        if (haveColon && typeof label === 'string' && (label as string).trim() !== '') {
          labelChildren = (label as string).replace(/[:|：]\s*$/, '');
        }

        // Tooltip
        const tooltipProps = toTooltipProps(tooltip);
        if (tooltipProps) {
          const { icon = <QuestionCircleOutlined />, ...restTooltipProps } = tooltipProps;
          const tooltipNode = (
            <Tooltip {...restTooltipProps}>
              {React.cloneElement(icon, { className: `${prefixCls}-item-tooltip`, title: '' })}
            </Tooltip>
          );

          labelChildren = (
            <>
              {labelChildren}
              {tooltipNode}
            </>
          );
        }

        // Add required mark if optional
        if (requiredMark === 'optional' && !required) {
          labelChildren = (
            <>
              {labelChildren}
              <span className={`${prefixCls}-item-optional`} title="">
                optional
              </span>
            </>
          );
        }

        const labelClassName = classNames('form-label', className, {
          [`${prefixCls}-item-required`]: required,
          [`${prefixCls}-item-required-mark-optional`]: requiredMark === 'optional',
          [`${prefixCls}-item-no-colon`]: !computedColon,
        });

        return (
          <label
            htmlFor={htmlFor}
            className={labelClassName}
            title={typeof label === 'string' ? label : ''}
          >
            {labelChildren}
          </label>
        );
      }}
    </FormContext.Consumer>
  );
};

export default FormItemLabel;
