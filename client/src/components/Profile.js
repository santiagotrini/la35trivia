const Profile = props => {
  const { user } = props;
  const { username, firstName, lastName, role } = user;
  // render
  return (
    <div className="Profile">
      <h2>Perfil</h2>
      <h3>{username}</h3>
      <p>Nombre y apellido: {firstName} {lastName}</p>
      <p>Rol: {role}</p>
      <hr/>
      <h3>Puntajes:</h3>
    </div>
  );
};

export default Profile;
