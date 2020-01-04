import React, { Component } from 'react';


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
      </div>
    );
  }
}

export default Filter;
