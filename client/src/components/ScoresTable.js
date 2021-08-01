import { useState, useEffect } from 'react';
import axios from 'axios';

const ScoresTable = props => {
  const [scores, setScores] = useState([]);
  useEffect(() => {
    axios.get('/api/scores', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(res => setScores(res.data))
      .catch(err => console.log(err));
  }, []);
  // render
  return (
    <div className="ScoresTable">
      <h2>ScoresTable</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ID Trivia</th>
            <th>ID Usuario</th>
            <th>Puntaje</th>
          </tr>
        </thead>
        <tbody>
          {scores.map(score => (
            <tr key={score._id}>
              <td>{score._id}</td>
              <td>{score.quiz}</td>
              <td>{score.user}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScoresTable;
