const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const app = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The pepperoni Pizza",
      description: "Some dope pizza yo",
    }),
    React.createElement(Pizza, {
      name: "Americano Pizza",
      description: "French fries and hot dogs, wtf Italy",
    }),
    React.createElement(Pizza, {
      name: "Brazillian pizza",
      description: "Probably is the best pizza in the world",
    }),
    React.createElement(Pizza, {
      name: "Chicken Pizza?",
      description: "Pizza Chicken",
    }),
    React.createElement(Pizza, {
      name: "Baked potato Pizza",
      description: "Unholy potato mash, wtf Minnesota",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(app));
