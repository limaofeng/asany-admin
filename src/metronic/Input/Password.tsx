import { useCallback, useState } from 'react';

import classnames from 'classnames';

import type { InputProps } from './Input';
import Input from './Input';

type HighlightMeterProps = {
  checkSteps: number;
  score: number;
};

function HighlightMeter(props: HighlightMeterProps) {
  const { checkSteps, score } = props;

  const checkScore = 100 / checkSteps;

  return (
    <div className="password-meter-control d-flex align-items-center mt-2">
      <div
        className={classnames(
          'flex-grow-1 bg-active-success rounded h-5px me-2',
          {
            active: checkScore * 1 * (checkSteps / 4) <= score,
          },
        )}
      />
      <div
        className={classnames(
          'flex-grow-1 bg-active-success rounded h-5px me-2',
          {
            active: checkScore * 2 * (checkSteps / 4) <= score,
          },
        )}
      />
      <div
        className={classnames(
          'flex-grow-1 bg-active-success rounded h-5px me-2',
          {
            active: checkScore * 3 * (checkSteps / 4) <= score,
          },
        )}
      />
      <div
        className={classnames('flex-grow-1 bg-active-success rounded h-5px', {
          active: checkScore * 4 * (checkSteps / 4) <= score,
        })}
      />
    </div>
  );
}

type PasswordMeterOptions = {
  /**
   * 最小长度
   */
  minLength?: number;
  /**
   * 包含大写
   */
  uppercase?: boolean;
  /**
   * 包含小写
   */
  lowercase?: boolean;
  /**
   * 包含数字
   */
  digit?: boolean;
  /**
   * 包含字符
   */
  char?: boolean;
};

const defaultOptions: PasswordMeterOptions = {
  minLength: 8,
  uppercase: true,
  lowercase: true,
  digit: true,
  char: true,
};

class PasswordMeter {
  options: PasswordMeterOptions;
  value: string = '';
  checkSteps: number = 1;

  constructor(options: PasswordMeterOptions) {
    this.options = { ...defaultOptions, ...options };
  }

  getCheckSteps() {
    return this.checkSteps;
  }

  getCheckScore() {
    let count = 1;
    if (this.options.uppercase === true) {
      count++;
    }
    if (this.options.lowercase === true) {
      count++;
    }
    if (this.options.digit === true) {
      count++;
    }
    if (this.options.char === true) {
      count++;
    }
    this.checkSteps = count;
    return 100 / this.checkSteps;
  }

  check() {
    let score = 0;
    const checkScore = this.getCheckScore();

    if (this._checkLength() === true) {
      score = score + checkScore;
    }

    if (this.options.uppercase === true && this._checkLowercase() === true) {
      score = score + checkScore;
    }

    if (this.options.lowercase === true && this._checkUppercase() === true) {
      score = score + checkScore;
    }

    if (this.options.digit === true && this._checkDigit() === true) {
      score = score + checkScore;
    }

    if (this.options.char === true && this._checkChar() === true) {
      score = score + checkScore;
    }

    return score;
  }

  update(value: string) {
    this.value = value;
  }

  _checkLength() {
    return this.value.length >= this.options.minLength!; // 20 score
  }

  _checkLowercase() {
    return /[a-z]/.test(this.value); // 20 score
  }

  _checkUppercase() {
    return /[A-Z]/.test(this.value); // 20 score
  }

  _checkDigit() {
    return /[0-9]/.test(this.value); // 20 score
  }

  _checkChar() {
    return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(this.value); // 20 score
  }
}

interface PasswordProps extends InputProps {
  meter?: true | PasswordMeterOptions;
  iconRender?: (visible: boolean) => React.ReactNode;
  visibilityToggle?: boolean;
}

function Password({
  meter: meterOptions,
  iconRender,
  visibilityToggle,
  className,
  ...props
}: PasswordProps) {
  const [visible, setVisible] = useState<boolean>(false);

  const [passwordMeter] = useState(
    new PasswordMeter(meterOptions === true ? {} : meterOptions || {}),
  );

  const handleChangeVisibility = useCallback(() => {
    setVisible((_visible) => !_visible);
  }, []);

  const body = visibilityToggle ? (
    <div className={classnames('position-relative', className)}>
      <Input {...props} type={visible ? 'text' : 'password'} />
      {visibilityToggle && (
        <span
          className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
          onClick={handleChangeVisibility}
          data-kt-password-meter-control="visibility"
        >
          <i
            className={classnames('bi fs-2', {
              ['bi-eye-slash']: !visible,
              ['bi-eye']: visible,
            })}
          />
        </span>
      )}
    </div>
  ) : (
    <Input {...props} type="password" className={className} />
  );

  if (!meterOptions) {
    return body;
  }

  passwordMeter.update(props.value || '');

  return (
    <>
      {body}
      <HighlightMeter
        checkSteps={passwordMeter.getCheckSteps()}
        score={passwordMeter.check()}
      />
    </>
  );
}

export default Password;
