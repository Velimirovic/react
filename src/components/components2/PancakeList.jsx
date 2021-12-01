import Pancake from "./Pancake";

const PancakeList = ({ pancakeList }) => {
    return (
        <>
            {pancakeList.map((listItem) => (
                <Pancake key={listItem.id} item={listItem} />
            ))}
        </>
    );
};
export default PancakeList;
