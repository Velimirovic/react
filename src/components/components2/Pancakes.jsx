import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";
import "../css/Todos.css";
import Search from "./Search";

const Pancakes = () => {
  const BASE_URL = process.env.BACKEND_URL;
  const [pancakes, setPancakes] = useState([]);
  const [query, setQuery] = useState("");

  const [pancakeType, setPancakeType] = useState([
    { id: 0, isSelected: false, typeName: "SALTY" },
    { id: 1, isSelected: false, typeName: "SWEET" },
  ]);

  const filteredPancakes = pancakes.filter((item) => {
    return (
      // Compare entered text to titles and descriptions
      (item.title.toLowerCase().includes(query.toLowerCase())) &&
      // If neither type is selected, act like all of them are included
      ((!selectedTypes[0].isSelected &&
        !selectedTypes[1].isSelected) ||
        // If one or more types are selected, take only those ones into consideration
        (selectedTypes[0].isSelected &&
          selectedTypes[0].typeName.toLowerCase() ===
            item.pancakeType.toLowerCase()) ||
        (selectedTypes[1].isSelected &&
          selectedTypes[1].typeName.toLowerCase() ===
            item.pancakeType.toLowerCase()))
    );
  });

  useEffect(() => {
    const getData = () => {
      fetch(BASE_URL)
        .then((response) => response.json())
        .then((data) => setPancakes(data));
    };
    getData();
  }, []);

  const onPancakeAdded = (pancake) => {
    fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify({
        name: pancake.name,
        maker: pancake.maker,
        pancakeType: pancake.pancakeType,
        cream: pancake.cream,
        jam: pancake.jam,
        peanut_butter: pancake.peanut_butter,
        plazma:pancake.plazma,
        sour_cherry:pancake.sour_cherry,
        sausage: pancake.sausage,
        sour_cream: pancake.sour_cream,
        ketchap: pancake.ketchap,
        prosciutto: pancake.prosciutto,
        salami: pancake.salami,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let newPancakes = [...pancakes, data];
        setTodos(newPancakes);
      });
  };


  const onSelectedTypesChanged = (id) => {
    const newSelectedTypes = selectedTypes.map((type) =>
      type.id !== id ? type : { ...type, isSelected: !type.isSelected }
    );
    setSelectedTypes(newSelectedTypes);
  };

  return (
    <>
      <NewTodoForm onTodoAdded={(todo) => onTodoAdded(todo)} />
      <Search
        query={query}
        onQueryChanged={(newQuery) => setQuery(newQuery)}
        selectedTypes={selectedTypes}
        onSelectedTypesChanged={(id) => onSelectedTypesChanged(id)}
      />
      <div className="todo-container">
        <TodoList
          todos={filteredTodos}
          onTodoClicked={onTodoClicked}
          onTodoDeleted={onTodoDeleted}
        />
      </div>
    </>
  );
};
export default Todos;