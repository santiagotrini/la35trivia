import { useState, useEffect } from 'react';
import axios from 'axios';

import Sidebar from './Sidebar';
import Play from './Play';
import Profile from './Profile';
import AddQuiz from './AddQuiz';
import UsersTable from './UsersTable';
import QuizzesTable from './QuizzesTable';
import ScoresTable from './ScoresTable';

const Dashboard = props => {
  const { user, setUser } = props;
  // state
  const [show, setShow] = useState('play');
  const [quizzes, setQuizzes] = useState([]);
  // fetch user profile
  useEffect(() => {
    console.log('Fetch profile...');
    axios.get('/api/users/me', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(res => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch(err => {
        console.log(err);
        setUser(false);
      });

  }, [setUser]);
  // fetch data
  useEffect(() => {
    axios.get('/api/quizzes', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(res => {
        console.log(res.data);
        setQuizzes(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  // fetch scores for user
  const [userScores, setUserScores] = useState([]);
  useEffect(() => {
    console.log('FETCHING USER SCORES', user._id);
    axios.get('/api/scores/' + user._id, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(res => {
        console.log('USER SCORES');
        console.log(res.data);
        setUserScores(res.data);
      })
      .catch(err => console.log(err));
  }, [user._id]);

  // helpers
  const addQuiz = quiz => {
    axios.post('/api/quizzes', quiz, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(res => {
        console.log(res.data);
        setQuizzes([ ...quizzes, res.data ]);
      })
      .catch(err => console.log(err));
  };
  // render
  return (
    <div className="Dashboard">
      <Sidebar user={user} setShow={setShow} />
      {show === 'play' && <Play quizzes={quizzes} />}
      {show === 'profile' && <Profile userScores={userScores} user={user} />}
      {show === 'new' && <AddQuiz addQuiz={addQuiz} />}
      {show === 'users' && <UsersTable />}
      {show === 'quizzes' && <QuizzesTable quizzes={quizzes} />}
      {show === 'scores' && <ScoresTable />}
    </div>
  );
};

export default Dashboard;
