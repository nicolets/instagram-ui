import React from 'react';
import './PostDate.scss';
import moment from 'moment';

function PostDate({ date }) {

    const newDate = moment(date).format("MMM Do YYYY");
    const yearsAgo = moment(date, "YYYYMMDD").fromNow();

    return (
        <div>
            <div>{newDate}</div>
            <div>{yearsAgo}</div>
        </div>
    );
}

export default PostDate;