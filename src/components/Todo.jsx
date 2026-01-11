import React, { useState, useEffect } from 'react';

const Requete = () => {
    const [name, setName] = useState("");
    const [list, setList] = useState(() => {
        const saved = localStorage.getItem("todo_session");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("todo_session", JSON.stringify(list));
    }, [list]);

    // STEP PUSH : On ajoute maintenant un objet avec "completed"
    const handleAdd = () => {
        if (name.trim() !== "") {
            setList([...list, { text: name, completed: false }]); 
            setName("");
        }
    };

    // LA NOUVELLE LOGIQUE : Rayer le nom
    const toggleComplete = (indexToToggle) => {
        const newList = list.map((item, index) => {
            if (index === indexToToggle) {
                // On inverse l'état barré
                return { ...item, completed: !item.completed };
            }
            return item;
        });
        setList(newList);
    };

    const handleDelete = (indexToDelete) => {
        setList(list.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div>
            <h1>TODO LIST</h1>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Ajouter un nom" 
            />
            <button onClick={handleAdd}>Valider</button>

            <ul>
                {list.map((item, index) => (
                    <li key={index} className = "to-do-name">
                        <span 
                            onClick={() => toggleComplete(index)}
                            className={`todo-item ${item.completed ? 'completed' : ''}`}
                        >
                            {item.text}
                        </span>

                        <button className="delete-btn" onClick={() => handleDelete(index)}>Supprimer </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Requete;