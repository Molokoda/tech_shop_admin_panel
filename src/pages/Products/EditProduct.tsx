import { Edit, SimpleForm } from 'react-admin';
import { EditProductsContent } from './EditProductsContent';

export const EditProduct = () => {
  return (
    <Edit>
      <SimpleForm>
        <EditProductsContent />
      </SimpleForm>
    </Edit>
  );
};
