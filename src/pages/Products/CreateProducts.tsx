import { Create, TextInput, ImageInput, SimpleForm, ImageField } from 'react-admin';

export const CreateProduct = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="price" />
        <ImageInput source="file" label="Image">
          <ImageField source="src" title="title" />
        </ImageInput>
        <TextInput source="description" fullWidth multiline />
      </SimpleForm>
    </Create>
  );
};
