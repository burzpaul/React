import React from 'react';

const EditExpansePage = (props) => {

    return (
        <div>
            Editing id with number : {props.match.params.id}
        </div>
    );
};

export default EditExpansePage;