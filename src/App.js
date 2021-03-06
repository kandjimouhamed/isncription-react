import './bootstrap.min.css';
import React, { Component } from 'react';
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      prenom: "",
      nom: "",
      age: 0,
      classe : "",
      tableau: []
    }
   
    this.hundleChange = this.hundleChange.bind(this)
    this.hundleSubmit = this.hundleSubmit.bind(this)
  }

  hundleChange(e){
    const name = e.target.name
    this.setState({[name]: e.target.value})
  }

  hundleSubmit(e){
    e.preventDefault();
    const {prenom, nom , age , classe} = this.state
    const copy = this.state.tableau.slice()
    copy.push(prenom, nom, age, classe);
    this.setState({tableau : copy})

  }
  render(){
    const {prenom, nom , age , classe} = this.state  
    // const tabs = [...prenom, nom , age , classe]
    const tableau = this.state.tableau;
    return (
      <div className="App container mt-4">
       <div className="row">
        <div className="col-md-6">
              <h2>Inscription des Eleves</h2>
              <form onSubmit = {this.hundleSubmit}>
                  <div className='form-group' >
                    <label htmlFor="prenom"> Prenom</label>
                    <input type="text" id='prenom' placeholder='Entrez votre Prenom' name='prenom'  className='form-control' value={prenom} onChange = {this.hundleChange}/>
                  </div>
                  <div className='form-group'>
                    <label htmlFor="nom">Nom</label>
                    <input type="text" id='nom' placeholder='Entrez votre Nom' name='nom'  className='form-control' value={nom} onChange = {this.hundleChange}/>
                  </div>
                  <div className='form-group'>
                    <label htmlFor="age">Age</label>
                    <input type="number" id='age' placeholder='Entrez votre Age' name='age'  className='form-control' value={age} onChange = {this.hundleChange} />
                  </div>
                  <div className='form-group'> 
                    <label htmlFor="classe">Classe</label>
                    <input type="text" id='classe' placeholder='Entrez votre classe'name='classe'  className='form-control'value={classe} onChange = {this.hundleChange}/>
                  </div>
                  <div className='form-group'> 
                  <button type='submit' className='btn btn-success btn-lg'>Enregistrer</button>
                  </div>
              </form>
        </div>
        <div className="col-md-6">
          <h2>listes des eleves</h2>
           <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>Prenom</th>
                  <th>Nom</th>
                  <th>Age</th>
                  <th>Classe</th>
                </tr>
              </thead>
              <tbody>
               <tr>
              {tableau.map(tabs =><td>{tabs}</td>)}
              </tr>
        </tbody>
      </table>
          
          {JSON.stringify(this.state)} 
        </div>
   </div>
  </div>
    );

  }
  }
  


export default App;
