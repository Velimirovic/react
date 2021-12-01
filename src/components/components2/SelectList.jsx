import Select from "./Select";

const SelectList = ({ selectList }) => {
    return (
        <>
            {selectList.name.map((listItem) => (
                <Select key={listItem.id} item={listItem} />
            ))}
        </>
    );
};
export default SelectList;
