import React, { Component } from 'react';
import Data from './emojiList.json';


class Filter extends Component {
	constructor () {
		super ();

		this.state = {
			search : ''	
		}
	}

	handleChange = (event) => {
		this.setState ({
			search : event.target.value
		});
	}
  render() {
  	
  	const {search} = this.state;

  	const SearchFilter = Data.filter( item => {
  		if (item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)
  			return true
  		if (item.keywords.toLowerCase().indexOf(search.toLowerCase()) !== -1)
  			return true
  		return false
  	})
  	
    return (
      <div>
				<div className="App">
				<header className="component-header">
					<img
						src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
						width="32"
						height="32"
						alt=""
					/>
					Emoji Search
					<img
						src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
						width="32"
						height="32"
						alt=""
					/>
				</header>
					<form>
						<div className="form-group">
							<input type="text" placeholder="Emoji Search......" 
							onChange={this.handleChange} className="form-control input" />
						</div>
					</form>
				</div>     
	        {SearchFilter.slice(0,20).map(function(items, index){
	  	 	return <div key={index} className="items">
				 		<span className="emoji" >{items.symbol}</span>
	  	 			<span className="emoji title">{items.title}</span>
	  	 		   </div>
	  	 	})}
      </div>
    );
  }
}

export default Filter;