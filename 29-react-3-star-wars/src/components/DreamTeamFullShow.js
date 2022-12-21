import React from 'react';
import Friend from "./Friend";

const DreamTeamFullShow = ({linkFriends, changeFriend}) => {
    return (
        <section className="float-end w-50 mx-1 row border">
            <h2 className="col-12 text-center">Dream Team</h2>
            {linkFriends.map((item, index) => <Friend
                key={index}
                photo={item}
                number={index + 1}
                changeFriend={changeFriend}
            />)}
        </section>
    );
};

export default DreamTeamFullShow;