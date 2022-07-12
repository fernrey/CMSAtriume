import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/posts/62c877a6b466a1909ba91d34")
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
          console.log(result)  
        },
  )}, [])

  return (
    <div className="container">
    {items.map(item => (
      <li key={item['id']}>{item['content']}</li>
    ))}
  </div>
  );
}

export default App;
