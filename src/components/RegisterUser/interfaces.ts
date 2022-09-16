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
    .phone('+7', false, 'Неверный телефон!')
    .required('Обязательно для заполнения'),
  email: Yup.string()
    .email('Неверный email!')
    .required('Обязательно для заполнения'),
});
