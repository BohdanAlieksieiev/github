export interface IUsers {
  id: number;
  node_id: string;
  login: string;
  avatar_url: string;
  url: string;
  html_url: string;
  type: string;
  site_admin: string;
}

export interface IUser {
  id: number;
  login: string;
  bio: string;
  email: string;
  avatar_url: string;
  created_at: string;
  location: string;
  followers: number;
  following: number;
}

export interface IRepos {
  id: number;
  name: string;
  forks: number;
  stargazers_count: number;
}
