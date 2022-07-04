/* eslint-disable eqeqeq */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { 
  Container, 
  Main, 
  LeftSide, 
  RightSide, 
  Repos, 
  RepoIcon, 
  Tab, 
  LinkButton
} from './styles';

import ProfileData from '../../components/profileData';
import RepoCard from '../../components/rapoCard';

import { APIRepo, APIUser } from '../../@types';


interface Data{
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}





const Profile: React.FC = () => {
  const { username = '' } = useParams();
  const [ data, setData ] = useState<Data>();



  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),

    ]).then(async responses => {
      const [userResponse, reposResponse] = responses;

      if (userResponse.status === 404){
        setData({ error: 'Busque por um Usuario valido'})
        return;
      }

      const user = await userResponse.json();
      const repos = await reposResponse.json();

      setData({
        user,
        repos,
      });
    });
  }, [username]);


const url = username

  window.localStorage.getItem('favorites' )
  window.localStorage.setItem('favorites', JSON.stringify(url))


  if (data?.error){
    return <h1>{data.error}</h1>
  }

  if (!data?.user || !data?.repos){
    return <h1>Loading...</h1>
  }

  const TabContent = () => (
    <div className="content">
      <RepoIcon/>

      <span className="label">Repositorios</span>
      <span className="number">{data.user?.public_repos}</span>
    </div>
  )
  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line"/>
      </Tab>
      <Main>
        <LeftSide>
          <ProfileData
            username={data.user.login}
            name={data.user.name}
            avatarUrl={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
            bio={data.user.bio}
            id={data.user.id}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent/>
            <span className="line"/>
          </Tab>
          <Repos>
            <h2>Repositórios Aleatórios </h2>

            <div>
              {data.repos.map( item => (
                <RepoCard
                  key={item.name}
                  username={item.owner.login}
                  reponame={item.name}
                  description={item.description}
                  language={item.language}
                  stars={item.stargazers_count}
                  forks={item.forks}
                />
              ))}

            </div>

            
          </Repos>
          

          <div>
          <LinkButton href={`https://github.com/${username}`}>
        
             <span>View on GitHub</span>
         </LinkButton>

         </div>

        </RightSide>
       
      </Main>
    </Container>
  );




  
}

export default Profile;