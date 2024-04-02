import AssetFieldForm from './AssetFieldForm';
import BooleanFieldForm from './BooleanFieldForm';
import ColorFieldForm from './ColorFieldForm';
import DateFieldForm from './DateFieldForm';
import DateTimeFieldForm from './DateTimeFieldForm';
import EnumerationFieldForm from './EnumerationFieldForm';
import FloatFieldForm from './FloatFieldForm';
import IntegerFieldForm from './IntegerFieldForm';
import JsonFieldForm from './JsonFieldForm';
import LocationFieldForm from './LocationFieldForm';
import { default as StringFieldForm } from './StringFieldForm';
import { default as TextFieldForm } from './TextFieldForm';

export default {
  STRING: StringFieldForm,
  TEXT: TextFieldForm,
  INTEGER: IntegerFieldForm,
  FLOAT: FloatFieldForm,
  BOOLEAN: BooleanFieldForm,
  DATE: DateFieldForm,
  DATE_TIME: DateTimeFieldForm,
  JSON: JsonFieldForm,
  ASSET: AssetFieldForm,
  COLOR: ColorFieldForm,
  LOCATION: LocationFieldForm,
  ENUMERATION: EnumerationFieldForm,
};
