import React from "react";
import { TeacherItem } from "./App.styles";
import "./styles.css";

export default class App extends React.Component {
  state = {
    name: "",
    age: "",
    teachers: [
  
    ]
  };

  changeName = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  changeAge = (event) => {
    this.setState({
      age: event.target.value
    });
  };

  addTeacher = () => {
    if (this.state.age === "") {
      return alert("Mensagem precisa ser preenchida");
    }

    if (this.state.name === "") {
      return alert("Usuário precisa ser preenchido");
    }

    const newTeachers = [
      ...this.state.teachers,
      {
        name: this.state.name,
        age: this.state.age
      }
    ];

    this.setState({
      teachers: newTeachers,
      name: "",
      age: ""
    });
  };

  removeTeacher = (nameToRemove) => {
    const newTeachers = [...this.state.teachers].filter(
      (teacher) => {
        return teacher.name !== nameToRemove
      }
    ) // prettier-ignore

    this.setState({
      teachers: newTeachers
    });
  };

  render() {
    const listaDeEstudantes = this.state
      .teachers.map((teacher, index) => {
        return (
          <TeacherItem key={index}>
            <span>{teacher.name}:</span>
            <span>{teacher.age}</span>
            <span
              role="img"
              aria-label="goblin"
              onClick={() => this.removeTeacher(teacher.name)}
            >
            
            </span>
          </TeacherItem>
        );
    }); // prettier-ignore

    // this.removeTeacher("Caio")

    return (
      <div className="App">
        {/* <hr /> */}
        
        {listaDeEstudantes}
        <div>
          <input
            placeholder={"Usuário"}
            value={this.state.name}
            
            onChange={this.changeName}
          />

          <input
            placeholder="Mensagem"
            value={this.state.age}
            onChange={this.changeAge}
          />
          <button onClick={this.addTeacher}>Enviar</button>
        </div>
        
       
      </div>
    ); // prettier-ignore
  }
}
