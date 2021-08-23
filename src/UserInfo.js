import React from 'react';
import axios from 'axios';
import { Accordion, Button, Col, Container, Image, Row } from 'react-bootstrap';

export default class UserInfo extends React.Component {
  state = {
    user: {},

    allRepos: [],
    topThree: [],
    repos: [],

    favorites: [],
  }

  componentDidMount() {
    this.toggleShowAllRepos = this.toggleShowAllRepos.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
    this.getUserRepos = this.getUserRepos.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.isFavorite = this.isFavorite.bind(this);

    let favorites = localStorage.getItem("favorites");
    if (!favorites) {
      favorites = [];
    } else {
      favorites = JSON.parse(favorites);
    }
    this.setState({ favorites });

    this.getUserInfo();
    this.getUserRepos();
  }

  getUserInfo() {
    axios.get(`https://api.github.com/users/Gmsanjuliano`, { headers: { Accept: "application/vnd.github.v3+json" } })
      .then(res => {
        this.setState({ user: res.data });
      })
  }

  getUserRepos() {
    axios.get(`https://api.github.com/users/Gmsanjuliano/repos`, { headers: { Accept: "application/vnd.github.v3+json" } })
      .then(res => {
        let allRepos = res.data;
        allRepos = allRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
        let topThree = [];

        for (let i = 0; i < 3; i++) {
          topThree.push(allRepos[i]);
        }

        let repos = topThree;

        this.setState({ allRepos, topThree, repos });
      })
  }

  toggleShowAllRepos() {
    let repos = this.state.repos === this.state.allRepos
      ? this.state.topThree
      : this.state.allRepos

    this.setState({ repos });
  }

  toggleFavorite(id) {
    let favorites = this.state.favorites;

    let index = favorites.findIndex(item => item === id);
    if (index > -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));

    this.setState(favorites);
  }

  isFavorite(id) {
    let favorites = this.state.favorites;
    return favorites.includes(id);
  }

  render() {
    return (
      <Container>
        <Row className="d-flex justify-content-center align-items-center py-5">
          <Col className="col-6">
            <Image src={this.state.user.avatar_url} alt="user img" roundedCircle />
          </Col>

          <Col className="col-6">
            <Row>
              <Col>
                <h3>{this.state.user.name}</h3>
                <h3>{this.state.user.login}</h3>
                <h3>{this.state.user.location}</h3>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center py-5">
          <Col>
            <Accordion>
              {
                this.state.repos.map(repo =>
                  <Accordion.Item key={repo.id} eventKey={repo.id}>
                    <Accordion.Header>{repo.name}</Accordion.Header>
                    <Accordion.Body>
                      <Row className="d-flex align-items-center">
                        <Col>
                          <Button className="btn-my" onClick={() => this.toggleFavorite(repo.id)}>
                            {this.isFavorite(repo.id) ? 'Unfav' : 'Fav'}
                          </Button>
                        </Col>
                        <Col>
                          <a href={repo.html_url}> Ver detalhes </a>
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                )
              }
            </Accordion>
          </Col>
          <Col className="col-auto">
            <Button className="btn-my" onClick={this.toggleShowAllRepos}>
              {this.state.repos === this.state.allRepos
                ? 'Top 3'
                : 'Show All'
              }
            </Button>
          </Col>
        </Row>
      </Container >
    )
  }
}