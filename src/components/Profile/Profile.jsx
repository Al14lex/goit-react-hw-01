import css from './Profile.module.css';

export default function Profile({ name, tag, location, image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png", stats }) {
    const { followers, views, likes } = stats || {};
    return (
            <div className={css.mainContainer}>
            <div className={css.container}>
                <img className={css.face} src={image} alt="User avatar"/>
                <p className={css.user}>{name}</p>
                <p className={css.text}>@{tag}</p>
                <p className={css.text}>{location}</p>
            </div>
            <ul className={css.profList}>
                <li key="followers" className={css.profItem}>
                    <span>Followers</span>
                    <span><strong>{followers}</strong></span>
                </li>
                <li key="views" className={css.profItem}>
                    <span>Views</span>
                    <span><strong>{views}</strong></span>
                </li>
                <li key="likes" className={css.profItem}>
                    <span>Likes</span>
                    <span><strong>{likes}</strong></span>
                </li>
            </ul>
        </div>
    );
}
