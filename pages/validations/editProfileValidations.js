import * as Yup from 'yup';

const editProfileValidations=Yup.object().shape({
    email:Yup.string().email("Geçerli bir e-posta adresi giriniz").required("E-posta boş bırakılamaz"),
    password:Yup.string().min(6,"Şifre en az 6 karakter olmalıdır").required("Şifre boş bırakılamaz"),
    phone:Yup.string().required("Telefon numarası boş bırakılamaz"),
  })

  export default editProfileValidations