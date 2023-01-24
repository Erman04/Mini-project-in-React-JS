import './MovieListItem.css'
import React from 'react'

const MovieListItem = (props) => {
	const { name, viewers, onDelete, onToggleProp, like, increase } = props
	return (
		<li className={`list-group-item d-flex justify-content-between ${increase && 'increase'} ${like && 'like'}`}>
			<span onDoubleClick={onToggleProp} className='list-group-item-label' data-toggle="like">{name}</span>
			<input type='number' className='list-group-item-input' defaultValue={viewers} />
			<div className='d-flex justify-content-center align-items-center'>
				<button type='button' onClick={onToggleProp} data-toggle="increase" className='btn-cookie btn-sm '>
					<i className='fas fa-cookie'></i>
				</button>

				<button onClick={onDelete} type='button' className='btn-trash btn-sm '>
					<i className='fas fa-trash'></i>
				</button>
				<i className='fas fa-star'></i>
			</div>
		</li>
	)
}
export default MovieListItem
