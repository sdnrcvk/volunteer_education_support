import * as Yup from 'yup';

const contactValidations=Yup.object().shape({
    fullname:Yup.string().required("İsim soyisim boş bırakılamaz"),
    email:Yup.string().email("Geçerli bir e-posta adresi giriniz").required("E-posta boş bırakılamaz"),
    message:Yup.string().required("Mesaj alanı boş bırakılamaz"),

  })

  export default contactValidations