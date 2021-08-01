const QuizzesTable = props => {
  const { quizzes } = props;
  // render
  return (
    <div className="QuizzesTable">
      <h2>QuizzesTable</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Materia</th>
            <th>Tema</th>
            <th>Preguntas</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {quizzes.map(quiz => (
            <tr key={quiz._id}>
              <td>{quiz._id}</td>
              <td>{quiz.title}</td>
              <td>{quiz.subject}</td>
              <td>{quiz.topic}</td>
              <td>{quiz.questions.length}</td>
              <td>
                <button>Editar</button>
                <button>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuizzesTable;
