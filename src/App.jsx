import { Check, Edit, Plus, Trash2, X } from "react-feather";
import "./App.css";
import { useState } from "react";

function App() {
 const [checked, setChecked] = useState(false);
 const [data, setData] = useState("");
 const [todoList, setTodoList] = useState([]);

 const handleChangeData = (e) => {
  setData(e.target.value);
 };

 const showData = (e) => {
  e.preventDefault();
  setTodoList([...todoList, data]);
  setData("");
 };

 const toggleSave = () => {
  setChecked(!checked);
 };

 return (
  <>
   <div className="flex flex-col w-full h-screen items-center mt-2">
    <div className="w-1/2 flex flex-col gap-3 items-center justify-center bg-gray-200 rounded-lg py-3 px-6">
     <h1 className="font-semibold text-3xl">Basic Todo App</h1>
     <div className="w-full flex items-center border rounded-lg overflow-hidden">
      <input
       className="w-full p-2 outline-none"
       type="text"
       value={data}
       onChange={handleChangeData}
       placeholder="Your data . . ."
       required
      />
      <button onClick={showData}>
       <Plus className="w-10 h-10 bg-[#5347ff] p-2 text-white" />
      </button>
     </div>

     <div className="w-full gap-10 grid grid-cols-3">
      <div className="w-full">
       <select className="w-full p-2 rounded-lg outline-none" name="" id="">
        <option value="default">default</option>
        <option value="saved">Saved</option>
        <option value="unsaved">UnSaved</option>
       </select>
      </div>
      <div className="w-full">
       <button className="w-full p-2 rounded-lg bg-cyan-400">
        Mark All Completed
       </button>
      </div>
      <div className="w-full">
       <input
        className="w-full p-2 rounded-lg outline-none"
        type="search"
        name=""
        id=""
        placeholder="Search Here . . ."
       />
      </div>
     </div>
     {todoList.length === 0 ? (
      <div className="font-semibold text-sm">
       <h6>No data found, please add some data.</h6>
      </div>
     ) : (
      <ul className="list-decimal w-full max-h-[65vh] overflow-y-auto ">
       {todoList.map((item, index) => (
        <li
         key={index}
         className="flex items-start justify-between hover:bg-gray-700 hover:text-white px-2 mb-3"
        >
         <div className="flex gap-2">
          <span className="font-bold text-lg">{index + 1}:</span>
          <h4
           className={` ${
            checked === true ? "line-through" : ""
           } font-semibold text-base`}
          >
           {item}
          </h4>
         </div>
         <div className="flex items-center gap-2">
          <button>
           <Trash2 className="w-6 h-6 p-1 rounded text-white bg-red-500" />
          </button>
          <button>
           <Edit className="w-6 h-6 p-1 rounded text-white bg-red-500" />
          </button>
          {checked ? (
           <button onClick={toggleSave}>
            <Check className="w-6 h-6 p-1 rounded text-white bg-red-500" />
           </button>
          ) : (
           <button onClick={toggleSave}>
            <X className="w-6 h-6 p-1 rounded text-white bg-red-500" />
           </button>
          )}
         </div>
        </li>
       ))}
      </ul>
     )}
    </div>
   </div>
  </>
 );
}

export default App;
