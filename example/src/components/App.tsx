import * as React from "react";
import { hot } from "react-hot-loader";
import { MovableShape } from "doodle-movable";
const photo = require("./../assets/photo.png");
import "./../assets/scss/App.scss";
MovableShape
class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <MovableShape>
          <img src={photo.default} draggable={false}/>
        </MovableShape>
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
