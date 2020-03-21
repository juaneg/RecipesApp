import React from 'react';

const Recipe = ({title,calories,image, ingredients}) => {
    return (        
            <div className="recipe">
                <h3>{title}</h3>                        
                <img className="image" src={image} />
                <div className="card-header">
                    Ingredientes
                </div>            
                <ul className="list-group list-group-flush">
                    {ingredients.map(ingredient =>(
                            <li className="list-group-item">
                                {ingredient.text}                            
                            </li>                        
                    ))}
                </ul>
                <div className="card-header">
                    Calorias
                </div>
                <li className="list-group-item">{calories}</li>
            </div>        
    )    
}

export default Recipe;