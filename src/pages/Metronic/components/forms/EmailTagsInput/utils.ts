import type { EmailTagData } from './typings';

const EMAIL = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;

const HAS_DETAILS = /<([^<>]+)>$/;

export function parseMail(text: string) {
  if (HAS_DETAILS.test(text)) {
    const lestIndex = text.lastIndexOf('<');
    const name = text.substring(0, lestIndex);
    const emailExpArray = HAS_DETAILS.exec(text);
    if ((name && name.includes('<')) || !emailExpArray || !EMAIL.test(emailExpArray![1])) {
      // ?
      return {
        name: text,
        address: '',
        invalid: true,
      };
    }
    return {
      name: name,
      address: emailExpArray[1],
      invalid: false,
    };
  }
  if (!EMAIL.test(text)) {
    return {
      name: text,
      address: '',
      invalid: true,
    };
  }
  return {
    name: '',
    address: text,
    invalid: false,
  };
}

export function mailToString(email: EmailTagData) {
  let _value = email.name || '';
  if (email.address) {
    if (_value) {
      _value += ` <${email.address}>`;
    } else {
      _value = email.address;
    }
  }
  return _value;
}

export function verifyMail(text: string) {
  return EMAIL.test(text);
}
