import React from 'react';
import Friend from "./Friend";

const DreamTeamHeroShow = ({linkFriend,changeFriend}) => {
    return (
        <section className="float-end w-50 mx-1 row border">
            <h2 className="col-12 text-center">Dream Team</h2>
            <Friend
                photo={linkFriend}
                changeFriend={changeFriend}
                number={"OneHero"}
            />
        </section>
    );
};

export default DreamTeamHeroShow;