import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [inputvalue, setInputvalue] = useState("");
  const [isupdate, setIsupdate] = useState(false);
  const [isupdateindex, setIsupdatedindex] = useState(null);
  const [updatedvalue, setUpdatedvalue] = useState("");
  const handleinput = (e) => {
    let value = e.target.value;
    e.preventDefault();
    if (e.keyCode === 13) {
      setData([...data, value]);
      setInputvalue("");
    }
  };
  const handleDelete = (item) => {
    console.log(item);
    let filterdata = data.filter((el) => el !== item);
    console.log(filterdata);
    setData([...filterdata]);
  };
  const handleUpdate = (item, index) => {
    setIsupdate(true);
    setUpdatedvalue(item);
    setIsupdatedindex(index);
  };
  const handleUpdateValue = (index) => {
    setIsupdate(false);
    data[index] = updatedvalue;
    setData([...data]);
  };
  return (
    <div className="mainContainer">
      <div>
        <input
          className="input"
          value={inputvalue}
          type="text"
          placeholder="please enter the details"
          onChange={(e) => setInputvalue(e.target.value)}
          onKeyUp={(e) => handleinput(e)}
        ></input>
      </div>
      <div className="outputContainer">
        {data &&
          data.map((item, index) => (
            <div className="output" key={index}>
              {isupdate && isupdateindex === index ? (
                <input
                  value={updatedvalue}
                  onChange={(e) => setUpdatedvalue(e.target.value)}
                  type="text"
                ></input>
              ) : (
                <div>{item}</div>
              )}
              <div>
                {isupdate ? (
                  <span
                    className="save"
                    onClick={() => handleUpdateValue(index)}
                  >
                    🖨️
                  </span>
                ) : (
                  <span
                    className="update"
                    onClick={() => handleUpdate(item, index)}
                  >
                    ✏️
                  </span>
                )}
                <span className="delete" onClick={() => handleDelete(item)}>
                  🗑️
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
