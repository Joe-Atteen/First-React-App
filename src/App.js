import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row screen">
        <div className="col-md-12">
          <p>0</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 ash">
          <p>AC</p>
        </div>
        <div className="col-md-3 ash">
          <p>+/-</p>
        </div>
        <div className="col-md-3 ash">
          <p>%</p>
        </div>
        <div className="col-md-3 orange">
          <p>÷</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 ash">
          <p>7</p>
        </div>
        <div className="col-md-3 ash">
          <p>8</p>
        </div>
        <div className="col-md-3 ash">
          <p>9</p>
        </div>
        <div className="col-md-3 orange">
          <p>x</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 ash">
          <p>4</p>
        </div>
        <div className="col-md-3 ash">
          <p>5</p>
        </div>
        <div className="col-md-3 ash">
          <p>6</p>
        </div>
        <div className="col-md-3 orange">
          <p>-</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 ash">
          <p>1</p>
        </div>
        <div className="col-md-3 ash">
          <p>2</p>
        </div>
        <div className="col-md-3 ash">
          <p>3</p>
        </div>
        <div className="col-md-3 orange">
          <p>+</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 ash">
          <p>0</p>
        </div>
        <div className="col-md-3 ash">
          <p>.</p>
        </div>
        <div className="col-md-3 orange">
          <p>=</p>
        </div>
      </div>
    </div>
  );
}

export default App;
