import * as Yup from 'yup';
import 'yup-phone';

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Имя слишком короткое!')
    .max(50, 'Имя слишком длинное!')
    .required('Обязательно для заполнения'),
  lastName: Yup.string()
    .min(2, 'Фамилия слишком короткая!')
    .max(50, 'Фамилия слишком длинная!')
    .required('Обязательно для заполнения'),
  phoneNum: Yup.string()
    .required('Обязательно для заполнения')
    .phone('RU', true, 'Неверный телефон!'),
  email: Yup.string()
    .email('Неверный email!')
    .required('Обязательно для заполнения'),
});

export interface SignupData {
  firstName: string;
  lastName: string;
  phoneNum: string;
  email: string;
}
