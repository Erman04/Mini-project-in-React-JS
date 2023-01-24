import './SearchPanel.css'
import React, { Component } from 'react'

export default class SearchPanel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			terim: ''
		}
	}
	upDateTerim = (e) => {
		let terim = e.target.value.toLowerCase()
		this.setState({ terim })
		this.props.upDateTerim(terim)
	}
	render() {
		return <input type='text' className='form-control search-input' placeholder='Kinolarni qidirish' onChange={this.upDateTerim} value={this.state.terim} />
	}
}
