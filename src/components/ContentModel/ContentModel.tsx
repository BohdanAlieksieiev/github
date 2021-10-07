import React, { useEffect, useState } from 'react';
import classes from './ContentModel.module.scss';
import { IRepos } from '../../type/type';
import axios from 'axios';

const ContentModel: React.FC<{
  login?: string | undefined;
  email?: string | undefined;
  avatar_url?: string | undefined;
  created_at?: string | undefined;
  bio?: string | undefined;
  location?: string | undefined;
  followers?: number | undefined;
  following?: number | undefined;
}> = ({ login, email, avatar_url, created_at, followers, following, location, bio }) => {
  const [repos, setRepos] = useState<IRepos[]>([]);
  const [searchRepos, setSearchRepos] = useState<IRepos[]>([]);
  const [searchRepoText, setSearchRepoText] = useState('');

  useEffect(() => {
    axios.get<IRepos[]>('https://api.github.com/users/' + login + '/repos').then((res) => {
      setRepos(res.data);
      setSearchRepos(res.data);
    });
  }, []);

  const HandleSearch = (text: string): void => {
    setSearchRepos([]);
    setSearchRepoText(text);
    const newSearchRepos = repos.filter((repo) =>
      repo.name.toLowerCase().includes(text.toLowerCase()),
    );
    text ? setSearchRepos(newSearchRepos) : setSearchRepos(newSearchRepos);
  };

  return (
    <>
      <div className={classes.content_block}>
        <div className={classes.info_block}>
          <div>
            <img src={avatar_url} alt="avatar" className={classes.avatar_img} />
          </div>
          <div>
            <div>User name: {login}</div>
            <div>Email: {email}</div>
            <div>Location: {location}</div>
            <div>Join Date: {created_at}</div>
            <div>Followers: {followers}</div>
            <div>Following: {following}</div>
          </div>
        </div>
        <div className={classes.text}>{bio}</div>
        <section className={classes.section_user_block}>
          <div className={classes.search_block}>
            <input
              type="text"
              className={classes.search_input}
              value={searchRepoText}
              onChange={(e) => HandleSearch(e.target.value)}
            />
          </div>
          {searchRepos.map((rep, index) => {
            return (
              <>
                <div className={classes.repo_block} key={index}>
                  <div className={classes.repo_name}>{rep.name}</div>
                  <div>
                    <div>{rep.forks} Fork</div>
                    <div>{rep.stargazers_count} Stars</div>
                  </div>
                </div>
              </>
            );
          })}
          {searchRepos.length === 0 && (
            <>
              <div className={classes.found_status}>Repository not found</div>
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default ContentModel;
