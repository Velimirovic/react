import "./Pancake.css";

const Pancake = ({ item }) => {
    return (
        <div className='card' id='MainCard' style={{ width: "200px" }}>
            <div className='card-body' id='custom-font'>
                <h3 className='card-title' id='PancakeName'>
                    {item.name}
                </h3>
                <h5 className='card-text' id='PancakeKind'>
                    {item.pancakeType}
                </h5>
                <br />
                <h6 id='Ingredients'>Ingredients:</h6>
                <p className='card-text' id='IngredientList'>
                    {item.cream ? "Cream " : ""}
                    {item.jam ? "Jam " : ""}
                    {item.plazma ? "Plazma " : ""}
                    {item.peanut_butter ? "Peanut Butter " : ""}
                    {item.sour_cherry ? "Sour Cherry " : ""}
                    {item.sausage ? "Sausage " : ""}
                    {item.sour_cream ? "Sour Cream " : ""}
                    {item.ketchap ? "Ketchap " : ""}
                    {item.proscuitto ? "Prosciutto " : ""}
                    {item.salami ? "Salami " : ""}
                </p>
                <h5 className='display-6' id='Price'>
                    {item.price}
                </h5>
                <p id='CreatedBy'>
                    <i> Created by {item.maker} </i>
                </p>
            </div>
        </div>
    );
};

export default Pancake;
