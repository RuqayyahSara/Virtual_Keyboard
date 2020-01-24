import React from "react";
import "./Main.css";

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:"",
            caps:false
        }
    }

    onClick=(e)=>{
        if(e.target.name==="bksp"){
      this.backspace();
    }
    else{
    this.setState({
      value: this.state.value+ e.target.name
    })
    if(this.state.caps===true){
      this.setState({
      value: this.state.value+ (e.target.name.toUpperCase())
      })
    }
  }
  e.preventDefault();
  }

  submitHandler=(e)=>{
    alert(this.state.value);
    this.setState({
      value:""
    })
  }

  changeHandler=(e)=>{
    this.setState({
      caps: !this.state.caps
    })
    }
  
  backspace(){
    this.setState({
      value: this.state.value.slice(0,-1)
    })
  }
  

    render(){
        return(
            <center>   
            <h1 style={{textShadow:"3px 2px 3px darkslateblue"}} className=" main animated lightSpeedIn"> <strong>VIRTUAL KEYBOARD</strong></h1>     
        <span ><input placeholder="Type here.." value={this.state.value}></input></span>
        <div className="keys board">
      <div>
      <button name="`" className="btn btn-primary" onClick={this.onClick}>`</button>
        <button name="1" className="btn btn-primary" onClick={this.onClick}>1</button>
        <button name="2" className="btn btn-primary" onClick={this.onClick}>2</button>
        <button name="3" className="btn btn-primary" onClick={this.onClick}>3</button>
        <button name="4" className="btn btn-primary" onClick={this.onClick}>4</button>
        <button name="5" className="btn btn-primary" onClick={this.onClick}>5</button>
        <button name="6" className="btn btn-primary" onClick={this.onClick}>6</button>
        <button name="7" className="btn btn-primary" onClick={this.onClick}>7</button>
        <button name="8" className="btn btn-primary" onClick={this.onClick}>8</button>
        <button name="9" className="btn btn-primary" onClick={this.onClick}>9</button>
        <button name="0" className="btn btn-primary" onClick={this.onClick}>0</button>
        <button name="-" className="btn btn-primary" onClick={this.onClick}>-</button>
        <button name="=" className="btn btn-primary" onClick={this.onClick}>=</button>
        <button name="bksp" className="btn btn-primary" onClick={this.onClick}>Backspace</button>
        </div>
        <div >
        <button name="&emsp;" className="btn btn-primary tab" onClick={this.onClick}>Tab&nbsp;&nbsp;&#8677;</button>
        <button name="q" className="btn btn-primary" onClick={this.onClick}>q</button>
        <button name="w" className="btn btn-primary" onClick={this.onClick}>w</button>
        <button name="e" className="btn btn-primary" onClick={this.onClick}>e</button>
        <button name="r" className="btn btn-primary" onClick={this.onClick}>r</button>
        <button name="t" className="btn btn-primary" onClick={this.onClick}>t</button>
        <button name="y" className="btn btn-primary" onClick={this.onClick}>y</button>
        <button name="u" className="btn btn-primary" onClick={this.onClick}>u</button>
        <button name="i" className="btn btn-primary" onClick={this.onClick}>i</button>
        <button name="o" className="btn btn-primary" onClick={this.onClick}>o</button>
        <button name="p" className="btn btn-primary" onClick={this.onClick}>p</button>
        <button name="[" className="btn btn-primary" onClick={this.onClick}>[</button>
        <button name="]" className="btn btn-primary" onClick={this.onClick}>]</button>
        <button name="\" className="btn btn-primary" onClick={this.onClick}>\</button>
        </div>

        <div >
        <button className="btn btn-primary"  onClick={this.changeHandler}>Caps Lock&nbsp;&#8682;</button>
        <button name="a" className="btn btn-primary" onClick={this.onClick}>a</button>
        <button name="s" className="btn btn-primary" onClick={this.onClick}>s</button>
        <button name="d" className="btn btn-primary" onClick={this.onClick}>d</button>
        <button name="f" className="btn btn-primary" onClick={this.onClick}>f</button>
        <button name="g" className="btn btn-primary" onClick={this.onClick}>g</button>
        <button name="h" className="btn btn-primary" onClick={this.onClick}>h</button>
        <button name="j" className="btn btn-primary" onClick={this.onClick}>j</button>
        <button name="k" className="btn btn-primary" onClick={this.onClick}>k</button>
        <button name="l" className="btn btn-primary" onClick={this.onClick}>l</button>
        <button name=";" className="btn btn-primary" onClick={this.onClick}>;</button>
        <button name="'" className="btn btn-primary" onClick={this.onClick}>'</button>
        <button name="Enter" className="btn btn-primary" onClick={this.submitHandler}>Enter&nbsp;&nbsp;&crarr;</button>
        </div>

        <div>
        <button name="shift" className="btn btn-primary shift" onClick={this.changeHandler}>Shift&nbsp;&nbsp;&#8679;</button>
        <button name="z" className="btn btn-primary" onClick={this.onClick}>z</button>
        <button name="x" className="btn btn-primary" onClick={this.onClick}>x</button>
        <button name="c" className="btn btn-primary" onClick={this.onClick}>c</button>
        <button name="v" className="btn btn-primary" onClick={this.onClick}>v</button>
        <button name="b" className="btn btn-primary" onClick={this.onClick}>b</button>
        <button name="n" className="btn btn-primary" onClick={this.onClick}>n</button>
        <button name="m" className="btn btn-primary" onClick={this.onClick}>m</button>
        <button name="," className="btn btn-primary" onClick={this.onClick}>,</button>
        <button name="." className="btn btn-primary" onClick={this.onClick}>.</button>
        <button name="/" className="btn btn-primary" onClick={this.onClick}>/</button>
        <button  className="btn btn-primary shifts" onClick={this.changeHandler}>Shift&nbsp;&nbsp;&#8679;</button>
        </div>

        <div id="space">
         <button id="spc" name="&nbsp;"  className="btn btn-primary" onClick={this.onClick}> &nbsp;</button>
        </div>
        </div>
        </center>
        )
    }
}

export default Board;