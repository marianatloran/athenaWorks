import React from 'react';
import Select from 'react-select';
import './UserSearch.scss';

class UserSearch extends React.Component {
    getNationalities = (data) => {
        let options = [];
        data.map((user) => {
            const nat = user.nat;
            let natIsInclude = false;
            natIsInclude = options.find((item)=> { return (item.value === nat) });

            if (!natIsInclude) options.push({
                value: nat, label: nat
            });

            return options;
        });

        return options;
    }

    render () {
        const { data, onSelectChange } = this.props;
        const nationalities = this.getNationalities(data);
        return (
            <div className="users-search">
                <div className="users-search-title">
                    Users
                </div>
                <div className="users-search-text">
                    If you want to get contact information to specific user, just select group and then select him from the list below
                </div>
                <div className="users-search-search">
                    <label>
                        Select group of users:
                    </label>
                    <Select options={nationalities} className="select" onChange={onSelectChange}/>
                </div>
            </div>
        )
    }
}

export default UserSearch;