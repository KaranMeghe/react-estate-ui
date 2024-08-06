import { List, Chat } from "../../components";
import "./profile.scss";
const ProfilePage = () => {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avtar:
              <img
                src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg"
                alt="user image"
              />
            </span>
            <span>
              Username:<b>John Doe</b>
            </span>
            <span>
              User email:<b>johnDoe@gmail.com</b>
            </span>
          </div>

          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />

          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
