import React from 'react'
import'./CardList.css';
import Card from'../Card/card';

const CardList=({users})=>{

return(

<div className="list">

	{users.map(user => <Card key={user.id} id={user.id} name={user.name} email={user.email}/>)}
	</div>

	);

}
export default CardList;