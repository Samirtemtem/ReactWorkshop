import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GradeManager = ({ initialNotes }) => {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    const noteValue = parseFloat(newNote);
    if (!isNaN(noteValue) && noteValue >= 0 && noteValue <= 20) {
      setNotes([...notes, noteValue]);
      setNewNote('');
    } else {
      alert('La note doit être comprise entre 0 et 20');
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const calculateAverage = () => {
    if (notes.length === 0) return 0;
    const sum = notes.reduce((acc, note) => acc + note, 0);
    return (sum / notes.length).toFixed(2);
  };

  return (
    <div className="grade-manager p-4 border rounded shadow-sm">
      <h3 className="mb-4">Gestionnaire de Notes</h3>
      
      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Entrez une note (0-20)"
          min="0"
          max="20"
          step="0.5"
        />
        <button 
          className="btn btn-primary"
          onClick={addNote}
        >
          Ajouter
        </button>
      </div>

      <div className="mt-4">
        <h4>Liste des notes:</h4>
        {notes.length === 0 ? (
          <p className="text-muted">Aucune note enregistrée</p>
        ) : (
          <ul className="list-group">
            {notes.map((note, index) => (
              <li 
                key={index} 
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                Note: {note}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteNote(index)}
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-4 p-3 bg-light rounded">
        <h4>Moyenne: {calculateAverage()}</h4>
      </div>
    </div>
  );
};

GradeManager.propTypes = {
  initialNotes: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default GradeManager;
