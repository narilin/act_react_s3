export default function Ropa() {
  const productos = ["Camiseta", "Pantalón", "Chaqueta"];
  return (
    <div>
      <h1>Productos &gt; Ropa</h1>
      <p>{productos.length} productos encontrados</p>
      <ul>
        {productos.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
}
