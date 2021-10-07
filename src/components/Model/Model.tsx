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

          {/* <div className={classes.content_block}>
            <div className={classes.info_block}>
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0165/5314/8480/files/SRC_MOTO_LOGO-White_400x.png?v=1559230871"
                  alt="avatar"
                  className={classes.avatar_img}
                />
              </div>
              <div>
                <div>User name: Bohdan Alieksieiev</div>
                <div>Email: qwe@gmail.com</div>
                <div>Location: Bohdan Alieksieiev</div>
                <div>Followers: 100</div>
                <div>Following: 100</div>
              </div>
            </div>
            <div className={classes.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur temporibus earum
              cumque! Corrupti porro officia obcaecati delectus, repellat quas atque ratione tempora
              quaerat provident explicabo nisi sed dolor. Excepturi, omnis!
            </div>
            <section className={classes.section_user_block}>
              <div className={classes.search_block}>
                <input type="text" className={classes.search_input} />
                <button className={classes.search_refresh}>Refresh</button>
              </div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>5</div>
              <div>5</div>
              <div>5</div>
              <div>5</div>
              <div>5</div>
              <div>5</div>
              <div>5</div>
              <div>5</div>
              <div>5</div>
              <div>5</div>
              <div>5</div>
              <div>4</div>
            </section>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Model;
