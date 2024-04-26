import clsx from "clsx";
import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
    const active = clsx(css.status, isOnline ? css.online : css.offline);
    
    return (
        <div className={css.friendsContainer}>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={css.nameFriend}>{name}</p>
            <p className={active}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    );
}