import { Head } from 'next/document'
import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home'


export default class App extends Component {
	render() {
		return (
			<div>
				
				<Header />
					<Home />
				<Footer />
			</div>
		)
	}
}
