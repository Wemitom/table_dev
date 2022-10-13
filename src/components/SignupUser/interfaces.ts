import * as Yup from 'yup';
import 'yup-phone-lite';

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Имя должно содержать как минимум 2 символа')
    .max(50, 'Длина имени не может превышать 50 символов')
    .required('Обязательно для заполнения'),
  telegram: Yup.string()
    .min(5, 'Ник должен содержать как минимум 5 символов')
    .max(32, 'Длина ника не может превышать 32 символа'),
  phoneNum: Yup.string()
    .required('Обязательно для заполнения')
    .phone('RU', 'Неверный телефон!'),
  email: Yup.string().email('Неверный email!'),
  password: Yup.string()
    .min(6, 'Пароль должен содержать как минимум 6 символов')
    .max(50, 'Длина пароля не может превышать 50 символов')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Пароль должен содержать как минимум одну строчную букву латинского алфавита, одну заглавную букву латинского алфавита и один специальный символ'
    )
    .required('Обязательно для заполнения'),
  passwordConfirmation: Yup.string()
    .required('Обязательно для заполнения')
    .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать'),
});

export enum FormGenders {
  first = 'Феечка',
  second = 'Принц',
  third = 'Другое',
}

export interface SignupData {
  firstName: string;
  telegram?: string;
  phoneNum: string;
  email?: string;
  password: string;
  gender: FormGenders;
}
