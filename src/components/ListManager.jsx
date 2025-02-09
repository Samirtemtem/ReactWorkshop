import React, { useState } from 'react'

const ListManager = ({ initialItems = ['React', 'Angular', 'VueJs'], placeholder = 'Ajouter un framework...' }) => {
    const [items, setItems] = useState(initialItems)
    const [newItem, setNewItem] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newItem.trim()) {
            setItems([...items, newItem.trim()])
            setNewItem('')
        }
    }

    const handleDelete = (index) => {
        setItems(items.filter((_, i) => i !== index))
    }

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title mb-4">Liste des Frameworks</h2>
                    <form onSubmit={handleSubmit} className="mb-4">
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control"
                                value={newItem}
                                onChange={(e) => setNewItem(e.target.value)}
                                placeholder={placeholder}
                            />
                            <button type="submit" className="btn btn-primary">Ajouter</button>
                        </div>
                    </form>
                    <ul className="list-group">
                        {items.map((item, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {item}
                                <button 
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(index)}
                                >
                                    <i className="bi bi-trash"></i> Supprimer
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ListManager
