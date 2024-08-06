import { useState } from "react";
import "./chat.scss";

const Chat = () => {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message" onClick={() => setChat(true)}>
          <img
            src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg"
            alt="User Image"
          />
          <span>
            <b>John Doe</b>
          </span>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>

        <div className="message">
          <img
            src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg"
            alt="User Image"
          />
          <span>
            <b>John Doe</b>
          </span>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>

        <div className="message">
          <img
            src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg"
            alt="User Image"
          />
          <span>
            <b>John Doe</b>
          </span>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>

        <div className="message">
          <img
            src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg"
            alt="User Image"
          />
          <span>
            <b>John Doe</b>
          </span>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>

        <div className="message">
          <img
            src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg"
            alt="User Image"
          />
          <span>
            <b>John Doe</b>
          </span>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>

        <div className="message">
          <img
            src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg"
            alt="User Image"
          />
          <span>
            <b>John Doe</b>
          </span>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg"
                alt="User Image"
              />
              John Doe
              <span className="close" onClick={() => setChat(!chat)}>
                X
              </span>
            </div>
          </div>

          <div className="center">
            <div className="chatMessage own">
              <p>Lorem ipsum mac joku boom smit came gone</p>
              <span>1 hr ago</span>
            </div>

            <div className="chatMessage">
              <p>Lorem ipsum mac joku boom smit came gone</p>
              <span>1 hr ago</span>
            </div>

            <div className="chatMessage">
              <p>Lorem ipsum mac joku boom smit came gone</p>
              <span>1 hr ago</span>
            </div>

            <div className="chatMessage own">
              <p>Lorem ipsum mac joku boom smit came gone</p>
              <span>1 hr ago</span>
            </div>

            <div className="chatMessage">
              <p>Lorem ipsum mac joku boom smit came gone</p>
              <span>1 hr ago</span>
            </div>

            <div className="chatMessage own">
              <p>Lorem ipsum mac joku boom smit came gone</p>
              <span>1 hr ago</span>
            </div>

            <div className="chatMessage">
              <p>Lorem ipsum mac joku boom smit came gone</p>
              <span>1 hr ago</span>
            </div>

            <div className="chatMessage own">
              <p>Lorem ipsum mac joku boom smit came gone</p>
              <span>1 hr ago</span>
            </div>

            <div className="chatMessage own">
              <p>Lorem ipsum mac joku boom smit came gone</p>
              <span>1 hr ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
