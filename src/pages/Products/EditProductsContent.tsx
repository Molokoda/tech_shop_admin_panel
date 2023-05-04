import { Box } from '@mui/material';
import { ImageInput, TextInput, ImageField, useRecordContext, TextField } from 'react-admin';
import { BASE_URL } from '../../constants';

export const EditProductsContent = () => {
  const record = useRecordContext();
  if (!record) return null;

  return (
    <>
      <TextInput source="name" />
      <TextInput source="price" />
      <Box mb="20px">
        <TextField record={{ title: 'Current Image' }} source="title" variant="caption" />
        <ImageField
          source="url"
          title="title"
          record={{
            url: record?.filename ? `${BASE_URL}/${record.filename}` : null,
            title: 'Current Image'
          }}
        />
      </Box>
      <ImageInput source="file" label="New Image">
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput source="description" multiline fullWidth />
    </>
  );
};
