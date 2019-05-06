import React from 'react';
import UserCard from '../components/UserCard/UserCard';
import UserSearch from '../components/UserSearch/UserSearch';
import './Users.scss';

class Users extends React.Component {

    constructor(props){
        super(props);
        this.state = {
           data: {},
           dataSelected: {}
        }
    }

    componentDidMount() {
        const { data } = this.props;
        if (data.length > 0) {
            this.setState({
                data: data,
                dataSelected: data
            });
        }
    }

    onSelectChange = (value) => {
        const { data } = this.state;
        let dataSelected = [];
        data.map((user) => {
            if(user.nat === value.value) {
                dataSelected.push(user);
            }
            return dataSelected;
        })
        return this.setState({dataSelected : dataSelected});
    }

    onUserCardClick = (user) => {
        const { onSelectedUser } = this.props;
        onSelectedUser(user);
    }
  
    render() {
        const { data, dataSelected } = this.state;

        if (data.length > 0) {
            return (
                <div>
                    <UserSearch
                        data={data}
                        onSelectChange={this.onSelectChange}
                    ></UserSearch>
                    <div className="users-container">
                    {
                        dataSelected.map((user, index) => {
                            return (
                                <UserCard
                                    user={user}
                                    key={index}
                                    onUserCardClick={this.onUserCardClick}
                                ></UserCard>
                            )
                        })
                    }
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

export default Users;