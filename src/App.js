import React, { Component } from 'react';
import './App.css';
class App extends Component {
constructor(){
  super();
  this.state = {
    animals:[],
    fruitvegs:[]
  }
}
  componentDidMount()
    {
   fetch('http://styleguide.effectivedigital.com/interview/api/animals')
    .then((Response) => Response.json())
    .then((res) =>
    {   
     this.setState({animals: res})
    });
    fetch('http://styleguide.effectivedigital.com/interview/api/fruitveg')
    .then((Response) => Response.json())
    .then((res) =>
    {   
     this.setState({fruitvegs: res})
    });

    }

    getShotDescription(str){
      if(str.length >= 25){
        str = str.substring(0,25) + '....';
      }
      return str;
    }
  render() {
    return (
      <div>
      <main>
      <input id="tab1" type="radio" name="tabs" checked />
      <label for="tab1">Animals</label>
        
      <input id="tab2" type="radio" name="tabs" />
      <label for="tab2">Fruit & Veg</label>
      <section id="content1">
      <div className="gl_outer_box">
      {
        this.state.animals.map((animal,key)=>
        <div>
        <div className="gl_box" key={key}>
        <a href={'#popup'+key}><div className="gl_title">{animal.Title}</div></a>
        <a href={'#popup'+key}><div className="gl_thumb"> 
            <img src={animal.ImageURLs.Thumb} />
            </div></a>
            <a className="srt_desc_link" href={'#popup'+key}><p>{this.getShotDescription(animal.Description)}</p></a>
        </div>
        <div id={'popup'+key} className="overlay">
        <div className="popup">
          <h2>{animal.Title}</h2>
          <a className="close" href="#">&times;</a>
          <div className="content">
           <div className="fullsize_img">
            <img src={animal.ImageURLs.FullSize} />
            </div>
            <p>{animal.Description}</p>
            <p><strong> Family </strong> : {animal.Family}   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <strong> Collective Noun </strong> : {animal.CollectiveNoun}</p>
          </div>
        </div>
      </div>
        </div>
        
        
       )
     }
     <div className="clear"></div>
     </div>
      </section>
        
      <section id="content2">
      <div className="gl_outer_box">
      {
        this.state.fruitvegs.map((fruitveg,key)=>
        <div>
        <div className="gl_box" key={key}>
        <a href={'#fruitpopup'+key}><div className="gl_title">{fruitveg.Title}</div></a>
        <a href={'#fruitpopup'+key}><div className="gl_thumb"> 
            <img src={fruitveg.ImageURLs.Thumb} />
            </div></a>
            <a className="srt_desc_link" href={'#fruitpopup'+key}><p>{this.getShotDescription(fruitveg.Description)}</p></a>
        </div>
        <div id={'fruitpopup'+key} className="overlay">
        <div className="popup">
          <h2>{fruitveg.Title}</h2>
          <a className="close" href="#">&times;</a>
          <div className="content">
           <div className="fullsize_img">
            <img src={fruitveg.ImageURLs.FullSize} />
            </div>
            <p>{fruitveg.Description}</p>
            <p><strong> Family </strong> : {fruitveg.Family} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <strong> Genus </strong> : {fruitveg.Genus}</p>
          </div>
        </div>
      </div>
        </div>
        
        
       )
     }
     <div className="clear"></div>
     </div>
      </section>
    </main>
      </div>
    );
  }
}

export default App;