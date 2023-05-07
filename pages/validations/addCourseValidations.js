import * as Yup from 'yup';

const addCourseValidations=Yup.object().shape({
  courseTitle:Yup.string().required("Başlık boş bırakılamaz"),
  category:Yup.string().required("Kategori seçiniz"),
  description:Yup.string().required("Açıklama boş bırakılamaz"),
})

  export default addCourseValidations