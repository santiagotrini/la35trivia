import Navbar from './Navbar';

const Header = props => {
  // props
  const { user, setUser } = props;
  const { firstName } = user;
  // render
  return (
    <div className="Header">
      <h2>Header</h2>
      {user && <p>Hola de nuevo, {firstName}</p>}
      <Navbar user={user} setUser={setUser} />
    </div>
  );
};

export default Header;
