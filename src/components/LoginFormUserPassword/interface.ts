import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  phoneNum: Yup.string().required('Обязательно для заполнения'),
  password: Yup.string().required('Обязательно для заполнения'),
});
