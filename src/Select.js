import Button from "./com/Button";
import "./Select.css";

const  Select = ({ handleClick }) => {
  return (
    <>
      <div>
         <div className=" ">
        <select onChange={handleClick}>
           <option > <Button   value="Featured" title="Featured" /> </option>
          <option > <Button  value="Low to High" title="Low to High" /> </option>
          <option > <Button   value="High to Low" title="High to Low" /> </option>
          <option > <Button    value="Newest Arrivals" title="Newest Arrivals"/> </option>
 
        </select>
        </div>
      </div>
    </>
  );
};

export default  Select