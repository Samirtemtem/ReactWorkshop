import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PRIORITY_COLORS = {
  Haute: 'danger',
  Moyenne: 'warning',
  Basse: 'success'
};

const TodoList = ({ initialTasks }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');
  const [newPriority, setNewPriority] = useState('Moyenne');
  const [searchQuery, setSearchQuery] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          name: newTask.trim(),
          priority: newPriority,
          completed: false,
          id: Date.now()
        }
      ]);
      setNewTask('');
    }
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const getFilteredTasks = () => {
    return tasks.filter(task => 
      task.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const getStats = () => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    return { total, completed };
  };

  const stats = getStats();
  const filteredTasks = getFilteredTasks();

  return (
    <div className="todo-list p-4 border rounded shadow-sm">
      <h3 className="mb-4">Liste des Tâches</h3>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Rechercher une tâche..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Add New Task */}
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Nouvelle tâche"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <select
          className="form-select"
          value={newPriority}
          onChange={(e) => setNewPriority(e.target.value)}
          style={{ maxWidth: '150px' }}
        >
          <option value="Haute">Haute</option>
          <option value="Moyenne">Moyenne</option>
          <option value="Basse">Basse</option>
        </select>
        <button 
          className="btn btn-primary"
          onClick={addTask}
        >
          Ajouter
        </button>
      </div>

      {/* Stats */}
      <div className="alert alert-info mb-4">
        <strong>Total des tâches:</strong> {stats.total} | 
        <strong> Tâches terminées:</strong> {stats.completed}
      </div>

      {/* Tasks List */}
      <div className="tasks-list">
        {filteredTasks.length === 0 ? (
          <p className="text-muted">Aucune tâche trouvée</p>
        ) : (
          <div className="list-group">
            {filteredTasks.map(task => (
              <div
                key={task.id}
                className={`list-group-item list-group-item-${PRIORITY_COLORS[task.priority]} d-flex justify-content-between align-items-center ${
                  task.completed ? 'bg-light' : ''
                }`}
              >
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    className="form-check-input me-2"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                  <span style={{ 
                    textDecoration: task.completed ? 'line-through' : 'none',
                    opacity: task.completed ? 0.7 : 1
                  }}>
                    {task.name}
                  </span>
                </div>
                <span className="badge bg-secondary">{task.priority}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

TodoList.propTypes = {
  initialTasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      priority: PropTypes.oneOf(['Haute', 'Moyenne', 'Basse']).isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired
};

export default TodoList;
