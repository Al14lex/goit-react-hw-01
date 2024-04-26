import css from './Profile.module.css';

export default function Profile({ name, tag, location, image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png", stats }) {
    const { followers, views, likes } = stats || {};
    return (
            <div className={css.mainContainer}>
            <div className={css.container}>
                <img src={image} alt="User avatar"/>
                <p className={css.user}>{name}</p>
                <p className={css.text}>@{tag}</p>
                <p className={css.text}>{location}</p>
            </div>
            <ul>
                <li key="followers">
                    <span>Followers</span>
                    <span><strong>{followers}</strong></span>
                </li>
                <li key="views">
                    <span>Views</span>
                    <span><strong>{views}</strong></span>
                </li>
                <li key="likes">
                    <span>Likes</span>
                    <span><strong>{likes}</strong></span>
                </li>
            </ul>
        </div>
    );
}
