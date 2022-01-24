import client from './client';
import { Data } from 'state/action-types/data';

const api = {
  get: () => client.get<Data[]>('/'),
  post: (data: Data) => client.post('/', JSON.stringify(data)),
  put: (data: Data) => client.put('/', JSON.stringify(data)),
  delete: (id: string) => client.delete('/', { data: { _id: id } }),
};

export default api;
