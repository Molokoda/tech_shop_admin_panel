import { Admin, Resource, Login, fetchUtils, Options } from 'react-admin';
import { authProvider } from './authProvider';
import simpleRestProvider from 'ra-data-json-server';
import { ProductsList, ShowProduct, EditProduct, CreateProduct } from './pages/Products';
import { ACCESS_TOKEN, BASE_URL } from './constants';

const fetchJson = (url: string, options: Options | undefined = {}) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  options.user = {
    authenticated: true,
    token: token ? `Bearer ${token}` : ''
  };
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(BASE_URL, fetchJson);

function App() {
  return (
    <Admin loginPage={Login} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource
        name={'products'}
        list={ProductsList}
        show={ShowProduct}
        edit={EditProduct}
        create={CreateProduct}
      />
    </Admin>
  );
}

export default App;
