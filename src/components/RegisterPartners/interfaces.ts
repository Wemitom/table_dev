import * as Yup from 'yup';
import 'yup-phone';

export const SignupRestaurantSchema = Yup.object().shape({
    RestaurantName: Yup.string()
    .min(2, 'Название ресторана должно содержать как минимум 2 символа')
    .max(50, 'Длина названия ресторана не может превышать 50 символов')
    .required('Обязательно для заполнения'),
  login: Yup.string().min(2, 'Логин должен содержать как минимум 2 символа')
  .max(50, 'Длина логина не может превышать 50 символов')
  .required('Обязательно для заполнения'),
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

export interface SignupRestaurantData {
  restaurantName: string;
  login: string;
  password: string;
}
