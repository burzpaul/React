const app = {
  title: "Indecision App",
  subtitles: "Put your life in the hands of a computer",
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const onRemoveAll = (e) => {
  e.preventDefault();
  app.options = [];
  render();
};

const appRoot = document.getElementById("root");

const numbers = [55, 101, 1000];

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitles && <p>{app.subtitles}</p>}
      <p>{app.options.length > 0
          ? "Here are the options"
          : "No options"}</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Clear optons</button>
      <ol>
        {app.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button >Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();