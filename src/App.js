import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Users from './components/Users';
import UserProfile from './components/UserProfile/UserProfile';
import './App.scss';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            user: {}
        }
    }

    fetchUsers = () => {
        fetch('https://randomuser.me/api/?results=15')
            .then(response => response.json())
            .then(response => {
                this.setState({
                    data: response.results
                });
            });
    }

    componentDidMount() {
        this.fetchUsers();
    }

    onSelectedUser = (user) => {
        this.setState({user: user});
    }

    render () {
        const { data, user } = this.state;
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Col md={(user.gender) ? 7 : null}>
                            { (data.length>0) ?
                                <Users data={data} onSelectedUser={this.onSelectedUser}></Users> : <Spinner animation="grow" size="md" />
                            }
                        </Col>
                        {(user.gender) ? (
                            <Col md={5}>
                                <UserProfile user={user}></UserProfile>
                            </Col>
                        ) : null}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
