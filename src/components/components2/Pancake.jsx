import "../css/Pancakes.css"

const Pancake = ({item,onTodoClicked}) => {

    return(
        <div 
        className="card"
        id="MainCard" 
        style={{width:'200px'}}
        onClick={()=> onTodoClicked(item)} 
        >
            <div className="card-body" id="custom-font">

                <h3 className="card-title" id="PancakeName">{item.name}</h3>
                <h5 className="card-text" id="PancakeKind">{item.pancakeType}</h5>
                <br/>
                <h6 id="Ingredients">Ingredients:</h6>
                <p className="card-text" id="IngredientList">Cookie, Orea, Banana, Strawberry, Chocolate, Something</p>
                <h5 className="display-6" id="Price"> {item.price} </h5>
                <p id="CreatedBy"> <i> Created by {item.maker} </i> </p>

            </div>
            
        </div>

    );

};

export default Pancake;