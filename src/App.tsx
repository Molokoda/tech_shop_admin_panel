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

const myDataProvider = {
  ...dataProvider,
  create: async (resource: string, params: any) => {
    if (resource !== 'products') {
      return dataProvider.create(resource, params);
    }
    const formdata = new FormData();
    for (const key in params.data) {
      formdata.append(key, params.data[key]);
    }
    formdata.append('file', params.data.file.rawFile);
    const token = localStorage.getItem(ACCESS_TOKEN);
    const response = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formdata
    });
    const answer = await response.json();
    return { data: answer };
  },

  update: async (resource: string, params: any) => {
    if (resource !== 'products') {
      return dataProvider.update(resource, params);
    }

    const formdata = new FormData();
    for (const key in params.data) {
      formdata.append(key, params.data[key]);
    }
    if (params?.data?.file?.rawFile) {
      formdata.append('file', params?.data?.file?.rawFile);
    }
    const token = localStorage.getItem(ACCESS_TOKEN);
    const response = await fetch(`${BASE_URL}/products/${params.data.id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formdata
    });
    const answer = await response.json();
    return { data: answer };
  }
};

function App() {
  return (
    <Admin loginPage={Login} authProvider={authProvider} dataProvider={myDataProvider}>
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
