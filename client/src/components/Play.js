import { useState } from 'react';

import QuizCard from './QuizCard';
import Quiz from './Quiz';

const Play = props => {
  const { quizzes } = props;
  console.log(quizzes);
  // state
  const [playing, setPlaying] = useState(false)
  // render
  return (
    <div className="Play">
      <h2>Jugar</h2>
      {!playing &&
        <div className="QuizList">
          {quizzes.map(quiz => (
            <QuizCard key={quiz._id} quiz={quiz} setPlaying={setPlaying} />
          ))}
        </div>
      }
      {playing && <Quiz quiz={playing} />}
    </div>
  );
};

export default Play;
