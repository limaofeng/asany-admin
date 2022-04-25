import type { RadioProps } from './Radio';
import InnerRadio from './Radio';
import RadioGroup from './RadioGroup';

function Radio(props: RadioProps) {
  return <InnerRadio {...props} />;
}

Radio.Group = RadioGroup;

export default Radio;
