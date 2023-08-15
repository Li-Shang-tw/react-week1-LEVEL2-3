import { useState } from 'react'
import './App.css'
import drinkItems from "./data"

 //修改drinkItem，加上Edit的屬性
 drinkItems.forEach((item)=>{item.edit = false});


function App() {
 
  //建立state
  const [drinks, setDrinks] = useState(drinkItems);
  
  
  //---Level 2 挑戰 :修改存貨
  function handleStock(btn,e,id){
    //淺拷貝
    const newDrinks = [...drinks];
    //找出點擊的品項的index
    const index=  newDrinks.findIndex((item)=>item.id ===id);

    //決定是增加還是減少的button
    if(btn==="add"){      
      //該品項的庫存+1
      newDrinks[index].stock += 1;
      //將更改後的newDrink賦予給setDrinks
      setDrinks(newDrinks);
    }else if(btn==="reduce"){
      //該品項的庫存-1
      newDrinks[index].stock -= 1;
      //將更改後的newDrink賦予給setDrinks
      setDrinks(newDrinks); 
      
    }
  }
  //----- Level 3 挑戰 修改名稱
//編輯按鈕
function handleEdit(e){
  const id = parseInt( e.target.value);

  
     //找出drinks中id與點擊的id匹配的項目，將其name改成新輸入的NewName
     //回傳修改過的drinks物件陣列
     const newDrinks =  drinks.map(
      (item)=>{
        if(item.id==id){
          item.edit = !item.edit; //變成相反的boolean
         
          return item;
        }else{
          return item;
        }
      }
     );
     console.log(newDrinks[0]);
     setDrinks(newDrinks);
}


  function handleName(e){
    //取得點擊項目的id與輸入的新值
    const id = parseInt(e.target.name);//將id轉成數字，以和drinks中項目的id匹配
    const newName = e.target.value;
    
    
     //找出drinks中id與點擊的id匹配的項目，將其name改成新輸入的NewName
     //回傳修改過的drinks物件陣列
     const newDrinks =  drinks.map(
      (item)=>{
        if(item.id==id){
          item.name =newName;
          
          return item;
        }else{
          return item;
        }
      }
     );
    setDrinks(newDrinks);
   
  }

  return (
    <>
     <table>
  <thead>
    <tr>
      <th scope="col">品項</th>
      <th scope="col">描述</th>
      <th scope="col">價格</th>
      <th scope="col">庫存</th>
    </tr>
   { drinks.map(
      (item)=>(
        <tr key={item.id}>
      <td>
       
      {item.edit?<input type="text" value={item.name} name={item.id}  
         onChange={(e)=>handleName(e)}/>:<input type="text" value={item.name} name={item.id}  disabled
         onChange={(e)=>handleName(e)}/>}
        
         <button value={item.id}  onClick={(e)=>{handleEdit(e)}} >{item.edit?"完成":"編輯"}</button>
        </td>
      <td><small>{item.description}</small></td>
      <td>{item.price}</td>
      <td>
        <button onClick={(e)=>handleStock("reduce",e,item.id)}>-</button>{item.stock}
        <button onClick={(e)=>handleStock("add",e,item.id)}>+</button>
      </td>
    </tr>
      )
    )}
  </thead>
  <tbody>

   
   
   
    
    
  
  </tbody>
</table>
    </>
  )
}

export default App
