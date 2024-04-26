
export default function Profile({ name, tag, location, image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png", stats}) {
    const { followers, views, likes } = stats;
    return (
        <div>
            <div>
                <img src={image} alt="User avatar"/>
                <p>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>
  
            <ul>
                <li key="followers">
                    <span>Followers</span>
                    <span>{followers}</span>
                </li>
                <li key="views">
                    <span>Views</span>
                    <span>{views}</span>
                </li>
                <li key="likes">
                    <span>Likes</span>
                    <span>{likes}</span>
                </li>
            </ul>
        </div>
    );
}
