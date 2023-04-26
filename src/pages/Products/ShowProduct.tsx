import { Show, TextField, Toolbar, ListButton } from 'react-admin';
import { Box } from '@mui/material';

export const ShowProduct = () => {
  return (
    <Show>
      <Box padding="16px">
        <Box display="flex" justifyContent="space-between" marginBottom="20px">
          <TextField source="name" variant="h4" />
          <TextField source="price" variant="h4" />
        </Box>
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
