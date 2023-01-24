import './MoviesAddForm.css'

import React, { Component } from 'react'

export default class MoviesAddForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			viewers: ''
		}
	}
	changeHandlerInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	addFormHandler = e => {
		e.preventDefault()
		this.props.addForm({ name: this.state.name, viewers: this.state.viewers })
		this.setState({
			name: '',
			viewers: ''
		})
	}

	render() {
		const { name, viewers } = this.state
		return (
			<div className='app-add-form'>
				<h3>Yangi kino qo'shish</h3>
				<form className='add-form d-flex' onSubmit={this.addFormHandler}>
					<input onChange={this.changeHandlerInput} type='text' className='form-control new-post-label' placeholder='Qanday kino?' name='name' value={name} />
					<input onChange={this.changeHandlerInput} type='number' className='form-control new-post-label' placeholder="Nechi marotaba ko'rilgan?" name='viewers' value={viewers} />

					<button type='submit' className='btn btn-outline-dark'>
						Qo'shish
					</button>
				</form>
			</div>
		)
	}
}
