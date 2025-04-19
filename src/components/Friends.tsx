import React from 'react';
import ProfileCard from './ProfileCardProps';
import avatars from '../data/friends.json';

export default function Friends() {
    return (
        <>
            {avatars.map((profile) => (
                <ProfileCard
                    key={profile.name}
                    name={profile.name}
                    title={profile.title}
                    description={profile.description}
                    avatarSrc={`img/friends/${profile.avatarFile}`}
                    avatarAlt={profile.avatarAlt}
                    link={profile.link}
                />
            ))}
        </>
    );
}