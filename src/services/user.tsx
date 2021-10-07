import axios from 'axios';
import { IUsers } from '../type/type';

export const getUsers = async () => {
  await axios
    .get<IUsers[]>('https://api.github.com/users')
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e;
    });
};
