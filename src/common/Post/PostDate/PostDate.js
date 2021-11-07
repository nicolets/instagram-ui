import React from 'react';
import './PostDate.scss';

function PostDate({date}) {

    const dateObj = new Date(date);
    const formatted = dateObj.getDate() + '.' + (dateObj.getMonth()+1);

    return (
        <div>
            { formatted }
        </div>
    );
}

export default PostDate;