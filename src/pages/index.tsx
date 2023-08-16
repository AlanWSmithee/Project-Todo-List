import { useState } from "react"

export function Index() {
  const [task, setTask] = useState("")
  const [tasksList, setTasksList] = useState<string[]>([])

  return (
    <>
      <div>
        <h1 className="mt-4 mb-8">TO-DO List</h1>
      </div>
      <div>
        <label className="m-2 font-bold" htmlFor="inputTask">Nouvelle tâche:</label>
        <input className="border-2 border-black rounded h-12 p-2 text-lg" type="text" name="inputTask" id="inputTask" placeholder="Ajoutez une tâche" value={task} onChange={(e) => setTask(e.target.value)}/>
        <button className="border-2 border-black h-12 mx-2" type="button" onClick={() => {
          if (task.trim() !== "") {
            setTasksList([...tasksList, task]);
            setTask("");
          }
        }}>Ajouter</button>
      </div>
      <div className="">
        <ul>
          {tasksList.map((taskItem, index) => (
            <li key={index} className="font-bold text-xl inline-flex items-center m-4 w-9/12">
              <span className="border-2 border-black rounded p-1 text-md font-bold">{index}</span>
              <p className="m-auto">{taskItem}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

