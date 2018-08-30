import React from 'react';

const ListItem = (props) => (
    <div className="ListItem ListItem--clickable template">
        <a href={`https://chayns.net/${props.siteId}/`} target="_blank" >
            <div className="ListItem__head" >
                <div className="ListItem__Image">
                    <img style={{width: '40px', backgroundSize: `40px 40px`, backgroundImage: `url(` + `https://sub60.tobit.com/l/${props.locationId}` + `)`, }} />

                </div>
                <div className="ListItem__Title">
                    <p className="ListItem__Title--headline"> {props.appstoreName} </p>
                </div>
            </div>
        </a>
    </div>
);
export default ListItem;
