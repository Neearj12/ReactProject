import React, { useEffect, useState } from 'react';
 // Import the specific icon


import './style.css';
// get loacal storage data
const getLocalData=()=>{
const Lists=localStorage.getItem("mytodolist")
if(Lists){
  return JSON.parse(Lists)
}
else{
  return[]
}
}

const Todo = () => {
const[inputdata,setinputdata] = useState("");
const[item,setitem] = useState([getLocalData()]);
const[isedititem,setisedititem]=useState("")
const [togglebtn,settogglebtn]=useState(false)

// addItem function
const addItem=()=>{
  if(!inputdata){
    alert('plz fill data')
  }
  else{
    const mynewInputdata={
      id:new Date().getTime().toString(),
      name:inputdata,
    }
    setitem([...item,mynewInputdata])
    setinputdata([]);
  }
}
// delete item section
const deleteItem=(index)=>{
const updatedItem=item.filter((currele)=>{
  return currele.id !== index;
})
setitem(updatedItem)

}
// Remove all
const removeAll=()=>{
  setitem([]);
}
// Adding local stroage
useEffect(()=>{
localStorage.setItem("mytodolist",(JSON.stringify(item)))
},[item])

// edit items
const editItem=(index)=>{
  const item_todo_edited=item.find((curr)=>{
    return curr.id===index
  })
  setinputdata(item_todo_edited.name)
  setisedititem(index);
  settogglebtn(true)
}

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
    
            <img className='img' src="/images/5665422.jpg" alt="todologo" />
            
            <figcaption>Add Your List Here✌</figcaption>
         
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
              value={inputdata}
              onChange={(e)=>setinputdata(e.target.value)}
            />
            {togglebtn? (
                 <i className='far fa-edit add-btn'onClick={addItem}></i>)
                 :(   <i className='fa fa-plus add-btn'onClick={addItem}></i>
                 )}
          </div>
        {/* show our items */}
        <div className="showItems">
          {
            item.map((curr,index)=>{
return(
  <div key={curr.id} className="eachItem">
  <h3>{curr.name}</h3>
  <div className="todo-btn">
  <i className='far fa-edit add-btn'
  onClick={()=>
    editItem(curr.id)
  }></i>
  <i className='far fa-trash-alt add-btn' onClick={()=> deleteItem(curr.id)}></i>
  </div>

</div>
)
            })
          }
  
        </div>

          <div className="showItems">
            <button className='btn effect04' data-sm-link-text="Remove All"
            onClick={removeAll}>
          <span>    Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
