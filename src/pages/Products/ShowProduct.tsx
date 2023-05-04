import { Show, TextField, FunctionField, Toolbar, ListButton } from 'react-admin';
import { Box } from '@mui/material';
import { BASE_URL } from '../../constants';
import { empty } from '../../assets';

export const ShowProduct = () => {
  return (
    <Show>
      <Box display="flex" flexDirection="column" padding="16px">
        <Box display="flex" justifyContent="space-between" marginBottom="20px">
          <TextField source="name" variant="h4" />
          <TextField source="price" variant="h4" />
        </Box>
        <FunctionField
          render={(record: any) => (
            <img
              style={{ borderRadius: '10px', width: '300px' }}
              src={record?.filename ? `${BASE_URL}/${record.filename}` : empty}
            />
          )}
        />
        <TextField source="description" variant="h6" />
      </Box>
      <Toolbar>
        <Box display="flex" width="100%" justifyContent="flex-end">
          <ListButton variant="contained" />
        </Box>
      </Toolbar>
    </Show>
  );
};
