import { Edit, SimpleForm, TextInput } from 'react-admin';

export const EditProduct = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="price" />
        <TextInput source="description" multiline fullWidth />
      </SimpleForm>
    </Edit>
  );
};
