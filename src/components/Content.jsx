import React from 'react';
import Form from './register/form';
import SiteList from './directory/listcontainer'

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        /**
         * Apply an array containing selected users to the content
         * It can be filled by using the PersonFinder-Component which is Visible in Adminmode
         */
        this.state = {
            users: []
        };
    }

   
    render() {
        return (
            <div className="tapp__content content">
               
                <Form />
                <SiteList />
            </div>
        );
    }
}
