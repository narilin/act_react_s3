export default function Electronicos() {
  const productos = ["Laptop", "Smartphone", "Tablet"];
  return (
    <div>
      <h1>Productos &gt; Electrónicos</h1>
      <p>{productos.length} productos encontrados</p>
      <ul>
        {productos.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
}
