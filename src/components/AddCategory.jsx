import { useState } from "react"



export const AddCategory = ({ onNewCategory }) => {

const [ inputValue, setInputValue ] = useState(' ');

const onInputChange = ({ target }) => {
    //console.log(target.value);
    setInputValue(target.value);
}

const onSumit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <=1 ) return; // inputValue.trim().length <=1 es para eliminar espacios vacios
    onNewCategory( inputValue.trim() );

    setInputValue(''); // para limpiar el input
    //setCategories(categories => [...categories, inputValue]);
}
    
  return (
    <form onSubmit={ onSumit }>
        <input 
        type="text" 
        placeholder="Buscar Gifs"
        value= { inputValue }
        onChange={ onInputChange }
        />
    </form>
    
  )
}
