import * as Yup from 'yup';

const loginValidations=Yup.object().shape({
    email:Yup.string().email("Geçerli bir e-posta adresi giriniz").required("E-posta boş bırakılamaz"),
    password:Yup.string().min(6,"Şifre en az 6 karakter olmalıdır").required("Şifre boş bırakılamaz"),
    //passwordConfirm:Yup.string().oneOf([Yup.ref('password')],"Şifreler uyuşmuyor").required("Şifreyi tekrarlayınız"),
  })

  export default loginValidations