import React, { useState } from 'react';
import UserBlock from '../../components/User/UserBlock/UserBlock';
import classes from './Index.module.scss';
import axios from 'axios';
import { IUsers } from '../../type/type';

import Model from '../../components/Model/Model';

const Index: React.FC = () => {
  const [users, setUsers] = useState<IUsers[]>([]);
  const [searchUsers, setSearchUsers] = useState<IUsers[]>([]);
  const [searchName, setSearchName] = useState('');
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [modalLogin, setModalLogin] = useState('');

  React.useEffect(() => {
    axios.get<IUsers[]>('https://api.github.com/users').then((res) => {
      setUsers(res.data);
      setSearchUsers(res.data);
    });
  }, []);

  const HandleSearch = (text: string): void => {
    setSearchUsers([]);
    setSearchName(text);
    const newSearchUsers = users.filter((user) =>
      user.login.toLowerCase().includes(text.toLowerCase()),
    );
    text ? setSearchUsers(newSearchUsers) : setSearchUsers(users);
    console.log(newSearchUsers);
  };

  const Refresh = () => {
    setSearchName('');
    setSearchUsers(users);
  };

  const openModel = (login: string): void => {
    setModalLogin(login);
    setIsOpenModel(true);
  };

  const closeModel = () => {
    setIsOpenModel(false);
  };

  return (
    <>
      <div className={classes.centered_block}>
        <section className={classes.section_user_block}>
          <div className={classes.search_block}>
            <input
              type="text"
              className={classes.search_input}
              value={searchName}
              onChange={(e) => HandleSearch(e.target.value)}
            />
            <button className={classes.search_refresh} onClick={Refresh}>
              Refresh
            </button>
          </div>
          {searchUsers.map((user, index) => {
            return (
              <div key={index} className={classes.user_block_margin}>
                <UserBlock {...user} openModel={openModel} />
              </div>
            );
          })}
          {searchUsers.length === 0 && (
            <>
              <div className={classes.found_status}>User not found</div>
            </>
          )}
        </section>
      </div>
      {isOpenModel && <Model modalLogin={modalLogin} closeModel={closeModel}></Model>}
    </>
  );
};

export default Index;
