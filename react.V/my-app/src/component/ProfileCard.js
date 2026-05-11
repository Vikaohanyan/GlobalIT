function ProfileCard({ name, avatar, bio, followers }) {
  return (
    <div style={{ border: "1px solid blue", margin: "10px", padding: "10px" }}>
      <h3>
        {name} {followers > 1000 && <span> Popular</span>}
      </h3>
      <p>{bio}</p>
      <p>Followers: {followers}</p>
    </div>
  );
}

export default ProfileCard;