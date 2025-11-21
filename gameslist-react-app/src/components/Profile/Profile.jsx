import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../../AuthContext";
import { doSignOut } from "../../auth";
import "./Profile.css";

const Profile = () => {
  const { user, userLoggedIn, loading } = useAuth();

  if (!userLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div className="profile-page">
      <img
        className="game-background-image"
        src="https://images.wallpapersden.com/image/download/dark-souls-cool-gaming_bWdtZmWUmZqaraWkpJRobWllrWdma2U.jpg"
        alt="background game"
      />
      <div className="profile-card">
        <h2 className="profile-title">Your Profile</h2>

        <div className="profile-info">
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>User ID:</strong> {user.uid}
          </p>
        </div>

        <button className="logout-btn" onClick={doSignOut}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
