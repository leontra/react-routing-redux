import React from 'react';

const ListItem = ({ name, OnClick }) => (
    <div className={"list-item list-item-" + name} onClick={OnClick}>
        <p>
            {name}
        </p>
    </div>
);

export default ListItem;