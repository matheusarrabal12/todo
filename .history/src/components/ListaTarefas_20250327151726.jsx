import { useState } from "react"; 
import './ListaTarefas.css' 

function ListaTarefas () {
    const [tarefas, setTarefas] = useState([
        { id: 1, tarefa: 'Tarefa 1', concluida: false },
        { id: 2, tarefa: 'Tarefa 2', concluida: false },
        { id: 3, tarefa: 'Tarefa 3', concluida: false },
    ])
}