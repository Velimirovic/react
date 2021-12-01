import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import { BrowserRouter, Link , Route, Routes} from "react-router-dom";
import AddNewTodo from "./compotnents/AddNewTodo";
import "./css/App.css"
import Header from "./compotnents/Header";
import PancakeList from "../compotnents/compotnents2/PancakeList";
import About from "./compotnents/About";
import TodoContainer from "./compotnents/TodoContainer";

const App = () => {

  

  const [pancakes,setPancakes] = useState([]);

  const getData = () =>{
    fetch(BACKEND_URL)
    .then((response) => response.json())
    .then((data) => setPancakes(data))
  };

  useEffect(() => getData(),[]);


  const onTodoAdded = (pancake) =>{
      fetch(BACKEND_URL, {
        method: "POST",
        body:JSON.stringify({
          name: pancake.name,
          price: pancake.price,
          description: "Cookie, Orea, Banana, Strawberry, Chocolate, Something",
          pancakeType:pancake.pancakeType,
          maker:pancake.maker,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then(response=>response.json())
      .then(data => {
        let newPancakes = [...pancakes,data];
        setTodos(newPancakes);
      });
  };

// return (
// <>
// <BrowserRouter>
//   <div>
//     <Header />
//   </div>
//   <Routes>
//     <Route path="/" element={<TodoContainer onTodoAdded={onTodoAdded} todos={todos}/>}/>
//     <Route path="/about" element={<About/>}/>
//   </Routes>
// </BrowserRouter>
// </>
 
// );


    return (
        <div className='App'>
            <Nav />
            <Footer />
        </div>
    );
};

export default App;

