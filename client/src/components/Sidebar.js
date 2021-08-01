const Sidebar = props => {
  // props
  const { user, setShow } = props;
  // render
  return (
    <div className="Sidebar">
      <h2>Sidebar</h2>
      <button onClick={() => setShow('play')}>Jugar</button>
      <button onClick={() => setShow('profile')}>Perfil</button>
      {
        user.role !== 'student' &&
        <button onClick={() => setShow('new')}>Nueva trivia</button>
      }
      {
        user.role === 'admin' &&
        <>
          <h4>Administración</h4>
          <button onClick={() => setShow('users')}>Usuarios</button>
          <button onClick={() => setShow('quizzes')}>Trivias</button>
          <button onClick={() => setShow('scores')}>Puntajes</button>
        </>
      }
    </div>
  );
};

export default Sidebar;
