import Pancake from "./Pancake";

const PancakeList = ({pancakeList}) => {

    return( 
    <>
    {
        pancakeList.map((listItem) => (
            <Pancake key={listItem.id}
             item={listItem}
             onTodoClicked={onTodoClicked}
            />
        ))
    }
    </>
    );
};
export default PancakeList;