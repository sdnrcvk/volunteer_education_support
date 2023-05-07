import * as Yup from 'yup';

const addCategoryValidations=Yup.object().shape({
  categoryName:Yup.string().required("Kategori adı boş bırakılamaz"),
})

  export default addCategoryValidations