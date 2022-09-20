import React, { useContext } from 'react';

import { Field } from 'rc-field-form';
import FieldContext from 'rc-field-form/lib/FieldContext';
import type { Meta, NamePath } from 'rc-field-form/lib/interface';
import { supportRef } from 'rc-util/lib/ref';

import { FormContext, NoStyleItemContext } from '../context';
import useFrameState from '../hooks/useFrameState';
import useItemRef from '../hooks/useItemRef';
import { cloneElement, getFieldId, isValidElement, toArray } from '../util';
import devWarning from '../utils/devWarning';
import type { FormItemProps, RenderChildren } from '../typings';

import ItemHolder from './ItemHolder';

const NAME_SPLIT = '__SPLIT__';

interface FieldError {
  errors: string[];
  warnings: string[];
}

interface MemoInputProps {
  value: any;
  update: any;
  children: React.ReactNode;
}

const MemoInput = React.memo(
  ({ children }: MemoInputProps) => children as JSX.Element,
  (prev, next) => prev.value === next.value && prev.update === next.update,
);

function hasValidName(name?: NamePath): boolean {
  if (name === null) {
    devWarning(false, 'Form.Item', '`null` is passed as `name` property');
  }
  return !(name === undefined || name === null);
}

function genEmptyMeta(): Meta {
  return {
    errors: [],
    warnings: [],
    touched: false,
    validating: false,
    name: [],
  };
}

function FormItem<Values = any>(props: FormItemProps<Values>): React.ReactElement {
  const {
    name,
    fieldKey,
    noStyle,
    dependencies,
    prefixCls: customizePrefixCls,
    shouldUpdate,
    rules,
    children,
    required,
    label,
    messageVariables,
    trigger = 'onChange',
    validateTrigger,
    hidden,
  } = props;
  const { name: formName, size } = useContext(FormContext);
  const isRenderProps = typeof children === 'function';
  const notifyParentMetaChange = useContext(NoStyleItemContext);

  const { validateTrigger: contextValidateTrigger } = useContext(FieldContext);
  const mergedValidateTrigger =
    validateTrigger !== undefined ? validateTrigger : contextValidateTrigger;

  const hasName = hasValidName(name);

  const prefixCls = customizePrefixCls || 'asany-form';

  // ======================== Errors ========================
  // >>>>> Collect sub field errors
  const [subFieldErrors, setSubFieldErrors] = useFrameState<Record<string, FieldError>>({});

  // >>>>> Current field errors
  const [meta, setMeta] = React.useState<Meta>(() => genEmptyMeta());

  const onMetaChange = (nextMeta: Meta & { destroy?: boolean }) => {
    // Destroy will reset all the meta
    setMeta(nextMeta.destroy ? genEmptyMeta() : nextMeta);

    // Bump to parent since noStyle
    if (noStyle && notifyParentMetaChange) {
      let namePath = nextMeta.name;
      if (fieldKey !== undefined) {
        namePath = Array.isArray(fieldKey) ? fieldKey : [fieldKey!];
      }
      notifyParentMetaChange(nextMeta, namePath);
    }
  };

  // >>>>> Collect noStyle Field error to the top FormItem
  const onSubItemMetaChange: any = (
    subMeta: Meta & { destroy: boolean },
    uniqueKeys: React.Key[],
  ) => {
    // Only `noStyle` sub item will trigger
    setSubFieldErrors((prevSubFieldErrors) => {
      const clone = {
        ...prevSubFieldErrors,
      };

      // name: ['user', 1] + key: [4] = ['user', 4]
      const mergedNamePath = [...subMeta.name.slice(0, -1), ...uniqueKeys];
      const mergedNameKey = mergedNamePath.join(NAME_SPLIT);

      if (subMeta.destroy) {
        // Remove
        delete clone[mergedNameKey];
      } else {
        // Update
        clone[mergedNameKey] = subMeta;
      }

      return clone;
    });
  };

  // >>>>> Get merged errors
  const [mergedErrors, mergedWarnings] = React.useMemo(() => {
    const errorList: string[] = [...meta.errors];
    const warningList: string[] = [...meta.warnings];

    Object.values(subFieldErrors).forEach((subFieldError) => {
      errorList.push(...(subFieldError.errors || []));
      warningList.push(...(subFieldError.warnings || []));
    });

    return [errorList, warningList];
  }, [subFieldErrors, meta.errors, meta.warnings]);

  // const debounceErrors = useDebounce(mergedErrors);
  // const debounceWarnings = useDebounce(mergedWarnings);

  // ===================== Children Ref =====================
  const getItemRef = useItemRef();

  // ======================== Render ========================
  function renderLayout(
    baseChildren: React.ReactNode,
    fieldId?: string,
    isRequired?: boolean,
  ): React.ReactNode {
    if (noStyle && !hidden) {
      return baseChildren;
    }

    return (
      <ItemHolder
        key="row"
        {...props}
        prefixCls={prefixCls}
        fieldId={fieldId}
        isRequired={isRequired}
        errors={mergedErrors}
        warnings={mergedWarnings}
        meta={meta}
        onSubItemMetaChange={onSubItemMetaChange}
      >
        {baseChildren}
      </ItemHolder>
    );
  }

  if (!hasName && !isRenderProps && !dependencies) {
    return renderLayout(children) as JSX.Element;
  }

  let variables: Record<string, string> = {};
  if (typeof label === 'string') {
    variables.label = label;
  } else if (name) {
    variables.label = String(name);
  }
  if (messageVariables) {
    variables = { ...variables, ...messageVariables };
  }

  // >>>>> With Field
  return (
    <Field
      {...props}
      messageVariables={variables}
      trigger={trigger}
      validateTrigger={mergedValidateTrigger}
      onMetaChange={onMetaChange}
    >
      {(control, renderMeta, context) => {
        const mergedName = toArray(name).length && renderMeta ? renderMeta.name : [];
        const fieldId = getFieldId(mergedName, formName);

        const isRequired =
          required !== undefined
            ? required
            : !!(
                rules &&
                rules.some((rule) => {
                  if (rule && typeof rule === 'object' && rule.required && !rule.warningOnly) {
                    return true;
                  }
                  if (typeof rule === 'function') {
                    const ruleEntity = rule(context);
                    return ruleEntity && ruleEntity.required && !ruleEntity.warningOnly;
                  }
                  return false;
                })
              );

        // ======================= Children =======================
        const mergedControl: typeof control = {
          ...control,
        };

        let childNode: React.ReactNode = null;

        devWarning(
          !(shouldUpdate && dependencies),
          'Form.Item',
          "`shouldUpdate` and `dependencies` shouldn't be used together. See https://ant.design/components/form/#dependencies.",
        );
        if (Array.isArray(children) && hasName) {
          devWarning(false, 'Form.Item', '`children` is array of render props cannot have `name`.');
          childNode = children;
        } else if (isRenderProps && (!(shouldUpdate || dependencies) || hasName)) {
          devWarning(
            !!(shouldUpdate || dependencies),
            'Form.Item',
            '`children` of render props only work with `shouldUpdate` or `dependencies`.',
          );
          devWarning(
            !hasName,
            'Form.Item',
            "Do not use `name` with `children` of render props since it's not a field.",
          );
        } else if (dependencies && !isRenderProps && !hasName) {
          devWarning(
            false,
            'Form.Item',
            'Must set `name` or use render props when `dependencies` is set.',
          );
        } else if (isValidElement(children)) {
          devWarning(
            children.props.defaultValue === undefined,
            'Form.Item',
            '`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.',
          );

          const childProps = { ...children.props, ...mergedControl, size };
          if (!childProps.id) {
            childProps.id = fieldId;
          }

          if (supportRef(children)) {
            childProps.ref = getItemRef(mergedName, children);
          }

          // We should keep user origin event handler
          const triggers = new Set<string>([
            ...toArray(trigger),
            ...toArray(mergedValidateTrigger),
          ]);

          triggers.forEach((eventName) => {
            childProps[eventName] = (...args: any[]) => {
              mergedControl[eventName]?.(...args);
              children.props[eventName]?.(...args);
            };
          });
          childNode = (
            <MemoInput value={mergedControl[props.valuePropName || 'value']} update={children}>
              {cloneElement(children, childProps)}
            </MemoInput>
          );
        } else if (isRenderProps && (shouldUpdate || dependencies) && !hasName) {
          childNode = (children as RenderChildren)(context);
        } else {
          devWarning(
            !mergedName.length,
            'Form.Item',
            '`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead.',
          );
          childNode = children as any;
        }

        return renderLayout(childNode, fieldId, isRequired);
      }}
    </Field>
  );
}

export default FormItem;
