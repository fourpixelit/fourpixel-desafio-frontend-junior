
export interface APIUser{
    id: any;
    login: string;
    name: string;
    followers?: number;
    following?: number;
    public_repos: string;
    avatar_url: string;
    blog?: string;
    bio?: string;
    company?: string;
    email?: string;
    location: string;
}

export interface APIRepo{
    id: number;
    name: string;
    owner: {
        login: string;
    };
    stargazers_count: number;
    forks: number;
    html_url: string;
    language?: string;
    description?: string;
}