import Card from "./Card";
import { useState } from "react";

function Filter(data) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const filteredObject = data?.data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(data);
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        name="nome"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input type="submit" value="Cerca" />
      {filteredObject.map((item) => (
        <p key={item.id}>
          <Card data={item} />
        </p> //
      ))}
    </form>
  );
}

export default Filter;
