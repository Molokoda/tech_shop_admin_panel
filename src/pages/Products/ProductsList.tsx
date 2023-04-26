import { List, Datagrid, TextField, ShowButton, EditButton, DeleteButton } from 'react-admin';

export const ProductsList = () => {
  return (
    <List exporter={false}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="price" />
        <ShowButton />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
