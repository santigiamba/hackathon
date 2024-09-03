import './App.css';
import { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState("");
  const [num, setNum] = useState(0);
  const [contactos, setContactos] = useState([]);

  const actualizarNombre = (evento) => {
    setNombre(evento.target.value);
  };
  
  const actualizarNum = (evento) => {
    setNum(evento.target.value);
  };

  const agendar = () => {
    setContactos([...contactos, { nombre: nombre, num: num }]);
    console.log("listo");
    console.log(contactos);
  };
  
  return (
    <>
      <div className='conteinerInput'>
        <input onChange={actualizarNombre} type="text" placeholder="Nombre" />
        <input onChange={actualizarNum} type="number" placeholder="Número" />
        <button onClick={agendar}>Agregar Contacto</button>
      </div>
      <div>
        <h3>Lista de Contactos:</h3>
        <ul>
          {contactos.map((contacto, index) => (
            <li key={index}>
              nombre: {contacto.nombre}, numero: {contacto.num}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;



