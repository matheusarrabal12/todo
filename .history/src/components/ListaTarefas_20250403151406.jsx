import { useState, useEffect } from "react";
import './ListaTarefas.css';

function ListaTarefas() {
  const [tarefas, setTarefa] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [ordenacao, setOrdenacao] = useState("alfabetica");

  useEffect(() => {
    // Serve para recuperar as informações pa
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas"));
    if (tarefasSalvas) {
      setTarefa(tarefasSalvas);
    }
  }, []);

  useEffect(() => {
    // Salva as tarefas no localStorage sempre que a lista mudar
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== "") {
      const novaTarefaObj = { texto: novaTarefa, concluida: false, dataAdicao: new Date() };
      setTarefa([...tarefas, novaTarefaObj]);
      setNovaTarefa("");
    }
  };

  const removerTarefa = (indice) => {
    setTarefa(tarefas.filter((_, i) => i !== indice));
  };

  const marcarTarefaConcluida = (indice) => {
    const novasTarefas = [...tarefas];
    novasTarefas[indice].concluida = !novasTarefas[indice].concluida;
    setTarefa(novasTarefas);
  };

  const ordenarTarefas = (criterio) => {
    let tarefasOrdenadas = [...tarefas];
    if (criterio === "alfabetica") {
      tarefasOrdenadas.sort((a, b) => a.texto.localeCompare(b.texto));
    } else if (criterio === "data") {
      tarefasOrdenadas.sort((a, b) => b.dataAdicao - a.dataAdicao);
    }
    setTarefa(tarefasOrdenadas);
    setOrdenacao(criterio);
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      
      <div id="ordenacao">
        <select value={ordenacao} onChange={(e) => ordenarTarefas(e.target.value)}>
          <option value="alfabetica">Ordenar por Alfabeto</option>
          <option value="data">Ordenar por Data</option>
        </select>
      </div>

      <ul>
        {tarefas.map((tarefa, indice) => (
          <li key={indice} className={tarefa.concluida ? "concluida" : ""}>
            {tarefa.texto}
            <div>
              <button className="marcar-concluida" onClick={() => marcarTarefaConcluida(indice)}>
                {tarefa.concluida ? "Desmarcar" : "Concluir"}
              </button>
              <button className="remover" onClick={() => removerTarefa(indice)}>Remover</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTarefas;
