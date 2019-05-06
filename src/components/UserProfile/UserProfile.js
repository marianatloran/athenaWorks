import React from 'react';
import './UserProfile.scss';

class UserProfile extends React.Component {
    getUserInfo = (user) => {
        let info = [
            {title: 'Gender', text: user.gender},
            {title: 'Location', text: user.location.street + ', ' + user.location.city},
            {title: 'Email', text: user.email},
            {title: 'Mobile phone', text: user.cell}
        ];
        return info;
    }

    render () {
        const { user } = this.props;
        const fullName = user.name.first + ' ' + user.name.last;
        const info = this.getUserInfo(user);

        return (
            <div className="user-profile">
                <div className="user-profile-image">
                    <div className="image-blur" style={{backgroundImage: `url(${user.picture.large})`}} ></div>
                    <div className="image-thumb">
                        <img src={user.picture.large} alt={user.name}></img>
                        <div className="user-name">{fullName}</div>
                        <div className="user-nat">{user.nat}</div>
                    </div>
                </div>
                <div className="user-info">
                    {info.map((item) => {
                        return (
                            <div>
                                <div className="title">
                                    {item.title}
                                </div>
                                <div className="text">
                                    {item.text}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default UserProfile;