import React,{Component} from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plan from './Plan';

class App extends Component {
  state={
    items:[],
    txt:""
  }
   handleChange = (e)=>{
    this.setState({txt:e.target.value})
  }

  handleAdd = (e)=>{
    if(this.state.txt !== ""){
      const items=[...this.state.items,this.state.txt];
      this.setState({items:items,txt:""})
    }
  }

  handleDelete = (id)=>{
        const Olditems =[...this.state.items];
        const items = Olditems.filter((element,i)=>{
          return i!==id
        })
        this.setState({items:items});
  }
  render(){
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
          <h2 className='text-center'>Today's Plan</h2>
          <div className="row">

            <div className="col-9">
              <input type="text" className='form-control'placeholder='Write plan here' value={this.state.txt} onChange={this.handleChange}/>
            </div>

            <div className="col-2">
              <button className='btn btn-warning px-5 fw-bold' onClick={this.handleAdd}>Add</button>
            </div>

            <div className="container-fluid">
              <ul className='list-unstyled row m-5'>
                {
                  this.state.items.map((value,i)=>{
                    return <Plan key= {i} id={i} value={value} sendData={this.handleDelete}/>
                  })
                }
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
}

export default App
