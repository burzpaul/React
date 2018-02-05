class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleAddOption.bind(this);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.state = {
			options: []
		};
	}
	componentDidMount() {
		try {
			const json = JSON.parse(localStorage.getItem('options'));
			if (json) {
				this.setState(() => ({ options: json }))
			}
		}
		catch (e) {
			console.log(e);
		}
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}
	componentWillUnmount() {
		console.log('component will unmount');
	}

	handleDeleteOptions() {
		this.setState(() => ({ options: [] }))
	}
	handleDeleteOption(optionToRemove) {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option)
		}));
	}
	handlePick() {
		const randomNum = Math.floor(Math.random * this.state.options.length);
		const option = this.state.options[randomNum];
		alert(option)
	}
	handleAddOption(option) {
		if (!option) {
			return 'Enter valid value option';
		}
		else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists';
		}
		this.setState((prevState) => ({ options: prevState.options.concat(option) }));
	}
	render() {
		const subtitle = 'Put your life in the hands of a computer'

		return (
			<div>
				<Header subtitle={subtitle}
				/>
				<Action handlePick={this.handlePick}
					hasOptions={this.state.options.length > 0}
				/>
				<Options options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption handleAddOption={this.handleAddOption}
				/>
			</div>
		);
	}
}

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
			<p>This is from Header</p>
		</div>
	);
}

Header.defaultProps = {
	title: 'Indecision'
};

const Action = (props) => {
	return (
		<div>
			<button onClick={props.handlePick} disabled={!props.hasOptions}>What shoud I do?</button>
		</div>
	);
}

const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleDeleteOptions}>Remove all</button>
			{props.options === 0 && <p>Please add an option to get started !</p>}
			{
				props.options.map((option) => (
					<Option key={option}
						optionText={option}
						handleDeleteOption={props.handleDeleteOption}
					/>
				))
			}
		</div>
	);
}

const Option = (props) => {
	return (
		<div>
			Option: {props.optionText}
			<button
				onClick={(e) => props.handleDeleteOption(props.optionText)}
			>Remove
			</button>
		</div>
	);
}

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		};
	}
	handleAddOption(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);
		this.setState(() => ({ error }));

		if (!error) {
			e.target.elements.option.value = '';
		}
	}
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Add option</button>
				</form>
			</div>
		);
	}
}

// const User = (props) => {
//   return (
//     <div>
//       <p>Name:{props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));