
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa'

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 25px 32px;
`;

export const Line = styled.div`
    max-width: 1280px;
    width: 100%;
    border-top: 4px solid var(--border);
`;

export const GithubLogo = styled(FaGithub)`
    margin-top: 25px;
    fill: var(--border);
    width: 35px;
    height: 35px;
    flex-shrink: 0;
  
`;