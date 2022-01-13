import React,{useState} from 'react'
import './TodoList.css'

function TodoList() {
    const [text,setText] = useState("");
    const [item,setItem] = useState([]);

    const handleOnChange = (event) => {
          setText(event.target.value);
    }

    const handleClick = () => {
        setItem((olditem) => {
            return[...olditem,text]
        });
        setText("");
    }

    const deleteBtn = (id) => {
        setItem((olditem) => {
            return olditem.filter((arrEle,index)=>{
                  return index !== id;
            })
        });
    }
    return (
        <>
          <div className='mainDiv'>
              <br/>
              <h1>Todo List</h1>
              <input type="text" id="inputTxt" value={text} onChange={handleOnChange} placeholder="Add an items"/> 
              <button id='btn' onClick={handleClick}>+</button>
              <div className='list'>
              <ul id='list'>
                  {/* <li>{text}</li> */}
                  {item.map((itemval,index)=>{
                      return  <li> <i className="fa fa-trash-o" aria-hidden="true" onClick={() => deleteBtn(index)}></i>{itemval}</li> 
                  })
                  }
              </ul> 
              </div>
          </div>
        </>
    )
}

export default TodoList
