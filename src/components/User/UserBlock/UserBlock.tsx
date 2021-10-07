import React from 'react';
// import AvatarImage from '../../../assets/Images/avatar.png';
import classes from './UserBlock.module.scss';

const UserBlock: React.FC<{
  login: string;
  html_url: string;
  avatar_url: string;
  openModel: any;
}> = ({ login, html_url, avatar_url, openModel }) => {
  const openGithub = (event: React.FormEvent) => {
    event.preventDefault(); // dont work
    window.open(html_url);
  };
  const openProfile = () => {
    openModel(login);
  };
  return (
    <>
      <section className={classes.user_block_section} onClick={openProfile}>
        <div className={classes.left_info_user}>
          <div>
            <img className={classes.avatar_image} src={avatar_url} alt="avatar" />
          </div>
          <div className={classes.user_info}>
            <div className={classes.github_name}>{login}</div>
            <div className={classes.github_link} onClick={openGithub}>
              {/* {html_url} */}
            </div>
          </div>
        </div>
        <div className={classes.add_inf} onClick={openGithub}>
          Repo: {html_url}
        </div>
      </section>
    </>
  );
};

export default UserBlock;
