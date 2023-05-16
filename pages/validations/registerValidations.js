import * as Yup from 'yup';

const registerValidations=Yup.object().shape({
    firstName:Yup.string().required("İsim boş bırakılamaz"),
    lastName:Yup.string().required("Soyad boş bırakılamaz"),
    birthdate:Yup.string().required("Doğum tarihi giriniz"),
    phone:Yup.string().required("Telefon numarası boş bırakılamaz"),
    gender:Yup.string().required("Cinsiyet seçiniz"),
    city:Yup.string().required("İl seçiniz"),
    district:Yup.string().required("İlçe seçiniz"),
    email:Yup.string().email("Geçerli bir e-posta adresi giriniz").required("E-posta boş bırakılamaz"),
    password:Yup.string().min(8,"Şifre en az 8 karakter olmalıdır").required("Şifre boş bırakılamaz"),
    passwordConfirm:Yup.string().oneOf([Yup.ref('password')],"Şifreler uyuşmuyor").required("Şifreyi tekrarlayınız"),
  })

  export default registerValidations