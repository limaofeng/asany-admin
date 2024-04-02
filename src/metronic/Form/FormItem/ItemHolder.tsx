import * as React from 'react';

import { Icon } from '@asany/icons';
import classNames from 'classnames';
import type { Meta } from 'rc-field-form/lib/interface';
import useLayoutEffect from 'rc-util/lib/hooks/useLayoutEffect';
import omit from 'rc-util/lib/omit';

import FormItemInput from '../FormItemInput';
import FormItemLabel from '../FormItemLabel';
import type { FormItemStatusContextProps, ReportMetaChange } from '../context';
import {
  FormContext,
  FormItemInputContext,
  NoStyleItemContext,
} from '../context';
import useDebounce from '../hooks/useDebounce';
import type { FormItemProps, ValidateStatus } from '../typings';

import { Row } from '@/metronic/Grid';

const iconMap = {
  success: () => <Icon name="Bootstrap/check-circle-fill" />,
  warning: () => <Icon name="Bootstrap/exclamation-circle-fill" />,
  error: () => <Icon name="Bootstrap/x-circle-fill" />,
  validating: () => <span className="validate-loading" />,
};

export interface ItemHolderProps extends FormItemProps {
  prefixCls: string;
  className?: string;
  style?: React.CSSProperties;
  errors: React.ReactNode[];
  warnings: React.ReactNode[];
  meta: Meta;
  children?: React.ReactNode;
  fieldId?: string;
  isRequired?: boolean;
  onSubItemMetaChange: ReportMetaChange;
}

export default function ItemHolder(props: ItemHolderProps) {
  const {
    prefixCls,
    className,
    style,
    help,
    errors,
    warnings,
    validateStatus,
    meta,
    hasFeedback,
    hidden,
    children,
    fieldId,
    isRequired,
    onSubItemMetaChange,
    ...restProps
  } = props;

  const itemPrefixCls = `${prefixCls}-item`;
  const { requiredMark } = React.useContext(FormContext);

  // ======================== Margin ========================
  const itemRef = React.useRef<HTMLDivElement>(null);
  const debounceErrors = useDebounce(errors);
  const debounceWarnings = useDebounce(warnings);
  const hasHelp = help !== undefined && help !== null;
  const hasError = !!(hasHelp || errors.length || warnings.length);
  const [marginBottom, setMarginBottom] = React.useState<number | null>(null);

  useLayoutEffect(() => {
    if (hasError && itemRef.current) {
      const itemStyle = getComputedStyle(itemRef.current);
      setMarginBottom(parseInt(itemStyle.marginBottom, 10));
    }
  }, [hasError]);

  const onErrorVisibleChanged = (nextVisible: boolean) => {
    if (!nextVisible) {
      setMarginBottom(null);
    }
  };

  // ======================== Status ========================
  let mergedValidateStatus: ValidateStatus = '';
  if (validateStatus !== undefined) {
    mergedValidateStatus = validateStatus;
  } else if (meta.validating) {
    mergedValidateStatus = 'validating';
  } else if (debounceErrors.length) {
    mergedValidateStatus = 'error';
  } else if (debounceWarnings.length) {
    mergedValidateStatus = 'warning';
  } else if (meta.touched) {
    mergedValidateStatus = 'success';
  }

  const formItemStatusContext =
    React.useMemo<FormItemStatusContextProps>(() => {
      let feedbackIcon: React.ReactNode;
      if (hasFeedback) {
        const IconNode = mergedValidateStatus && iconMap[mergedValidateStatus];
        feedbackIcon = IconNode ? (
          <span
            className={classNames(
              `${itemPrefixCls}-feedback-icon`,
              `${itemPrefixCls}-feedback-icon-${mergedValidateStatus}`,
            )}
          >
            <IconNode />
          </span>
        ) : null;
      }

      return {
        status: mergedValidateStatus,
        hasFeedback,
        feedbackIcon,
        isFormItemInput: true,
      };
    }, [hasFeedback, mergedValidateStatus, itemPrefixCls]);

  // ======================== Render ========================
  const itemClassName = {
    [itemPrefixCls]: true,
    [`${itemPrefixCls}-with-help`]:
      hasHelp || debounceErrors.length || debounceWarnings.length,
    [`${className}`]: !!className,

    // Status
    [`${itemPrefixCls}-has-feedback`]: mergedValidateStatus && hasFeedback,
    [`${itemPrefixCls}-has-success`]: mergedValidateStatus === 'success',
    [`${itemPrefixCls}-has-warning`]: mergedValidateStatus === 'warning',
    [`${itemPrefixCls}-has-error`]: mergedValidateStatus === 'error',
    [`${itemPrefixCls}-is-validating`]: mergedValidateStatus === 'validating',
    [`${itemPrefixCls}-hidden`]: hidden,
  };

  return (
    <div className={classNames(itemClassName)} style={style} ref={itemRef}>
      <Row
        className={`${itemPrefixCls}-row`}
        {...omit(restProps, [
          '_internalItemRender' as any,
          'colon',
          'dependencies',
          'extra',
          'fieldKey',
          'getValueFromEvent',
          'getValueProps',
          'htmlFor',
          'id', // It is deprecated because `htmlFor` is its replacement.
          'initialValue',
          'isListField',
          'label',
          'labelAlign',
          'labelCol',
          'labelWrap',
          'messageVariables',
          'name',
          'normalize',
          'noStyle',
          'preserve',
          'required',
          'requiredMark',
          'rules',
          'shouldUpdate',
          'trigger',
          'tooltip',
          'validateFirst',
          'validateTrigger',
          'valuePropName',
          'wrapperCol',
        ])}
      >
        {/* Label */}
        <FormItemLabel
          htmlFor={fieldId}
          required={isRequired}
          requiredMark={requiredMark}
          {...props}
          prefixCls={prefixCls}
          className={props.labelClassName}
        />
        {/* Input Group */}
        <FormItemInput
          {...props}
          {...meta}
          errors={debounceErrors}
          warnings={debounceWarnings}
          prefixCls={prefixCls}
          status={mergedValidateStatus}
          help={help}
          marginBottom={marginBottom}
          onErrorVisibleChanged={onErrorVisibleChanged}
        >
          <NoStyleItemContext.Provider value={onSubItemMetaChange}>
            <FormItemInputContext.Provider value={formItemStatusContext}>
              {children}
            </FormItemInputContext.Provider>
          </NoStyleItemContext.Provider>
        </FormItemInput>
      </Row>

      {!!marginBottom && (
        <div
          className={`${itemPrefixCls}-margin-offset`}
          style={{
            marginBottom: -marginBottom,
          }}
        />
      )}
    </div>
  );
}
