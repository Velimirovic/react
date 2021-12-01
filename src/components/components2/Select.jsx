import SelectList from "./SelectList";

const Select = ({ item }) => {
    return (
        <select>
            <option>
                <SelectList selectList={item.name} />
            </option>
        </select>
    );
};

export default Select;
