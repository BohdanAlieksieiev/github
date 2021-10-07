import React, { useEffect, useState } from 'react';
import classes from './Model.module.scss';
import ContentModel from '../ContentModel/ContentModel';
import axios from 'axios';
import { IUser } from '../../type/type';

const Model: React.FC<{
  closeModel: any;
  modalLogin: string;
}> = ({ closeModel, modalLogin }) => {
  const [userData, setUserData] = useState<IUser>();

  useEffect(() => {
    axios.get<IUser>('https://api.github.com/users/' + modalLogin).then((res) => {
      setUserData(res.data);
    });
  }, []);

  return (
    <>
      <section className={classes.model_section}>
        <div>
          <div className={classes.header_modal}>
            <div></div>
            <div className={classes.header_close_btn} onClick={closeModel}>
              X
            </div>
          </div>
          {userData && <ContentModel {...userData} />}
        </div>
      </section>
    </>
  );
};

export default Model;
