import { useState } from 'react';
import { AddCategory, GifGrid} from './components';



export const GifExpertApp = () => {

    
const [categories, setCategories] = useState([ 'one Punch']);

const onAddCategory = (onNewCategory) => {
    if ( categories.includes(onNewCategory) ) return; // para que no se repita el nombre de la categoria 
    
    //console.log(onNewCategory);
    setCategories([onNewCategory, ...categories ]);    
}

  return (
   <>
      
        <h1>GifExpertApp</h1>

        <AddCategory 

        onNewCategory={ (event) => onAddCategory(event) }
        /> 
            { categories.map( category => (
                        <GifGrid 
                        key={ category } 
                        category={category} 
                        />
                    )
            )}
   </>
  )
 }
