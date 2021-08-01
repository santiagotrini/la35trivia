const Profile = props => {
  const { user } = props;
  const { username, firstName, lastName, role } = user;
  // render
  return (
    <div className="Profile">
      <h2>Profile</h2>
      <h4>{username}</h4>
      <p>{firstName} {lastName}</p>
      <p>{role}</p>
      <h3>Puntajes:</h3>
    </div>
  );
};

export default Profile;
