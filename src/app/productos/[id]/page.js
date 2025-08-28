import Link from "next/link";

export default function ProductoIndividual({ params }) {
  const { id } = params;

  // Descripciones de ejemplo
  const productos = {
    1: {
      nombre: "Laptop",
      descripcion: "Una laptop moderna con procesador de última generación, ideal para trabajo, estudios y entretenimiento."
    },
    2: {
      nombre: "Smartphone",
      descripcion: "Un smartphone con cámara de alta resolución, batería de larga duración y pantalla Full HD."
    },
    3: {
      nombre: "Tablet",
      descripcion: "Una tablet ligera y portátil, perfecta para leer, navegar y ver series en cualquier lugar."
    }
  };

  const producto = productos[id] || { nombre: "Producto no encontrado", descripcion: "No hay información disponible." };

  return (
    <div>
      <h1>Producto: {producto.nombre}</h1>
      <p>{producto.descripcion}</p>
      <Link href="/productos">⬅ Volver a Productos</Link>
    </div>
  );
}
