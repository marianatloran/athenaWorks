import React from 'react';
import './UserCard.scss';

class UserCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
           selected: false,
        }
    }

    userSelected = (user) => {
        const element = document.getElementsByClassName('card-container card-container-selected');
        if (element[0]) element[0].classList.remove('card-container-selected')
        const { onUserCardClick } = this.props;
        this.setState({selected: true});
        onUserCardClick(user)
    }

    render() {
        const { user } = this.props;
        const fullName = user.name.first + ' ' + user.name.last;
        const selectedClass = this.state.selected ? 'card-container card-container-selected' : 'card-container'

        return (
            <div className={selectedClass} onClick={()=> { this.userSelected(user) }}>
                <img className="card-container-image" src={user.picture.thumbnail} alt={user.name}></img>
                <div className="card-container-name">{fullName}</div>
            </div>
        );
    }
};

export default UserCard;