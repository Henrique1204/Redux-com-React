import React from "react";
import { connect } from "react-redux";

const App = ({ contador, incrementar }) =>  {
  return (
    <div>
      <h1>Total: {contador}</h1>
      <button onClick={ incrementar } >Incrementar</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { contador: state }
}

const incrementar = () => ({ type: "INCREMENTAR" });

const mapDispatchToProps = {
  incrementar
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
