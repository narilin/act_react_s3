import Link from "next/link";

export default function Productos() {
  const productos = [
    { id: "1", nombre: "Laptop" },
    { id: "2", nombre: "Smartphone" },
    { id: "3", nombre: "Tablet" },
  ];

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {productos.map((p) => (
          <li key={p.id}>
            <Link href={`/productos/${p.id}`}>{p.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
