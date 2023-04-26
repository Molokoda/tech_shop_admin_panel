import { Create, TextInput, SimpleForm } from 'react-admin';

export const CreateProduct = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="price" />
        <TextInput source="description" fullWidth multiline />
      </SimpleForm>
    </Create>
  );
};
