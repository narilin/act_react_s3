import Link from "next/link";

export default function ProductosLayout({ children }) {
  return (
    <div>
      <h2>Sección de Productos</h2>
      <nav style={{ marginBottom: "15px" }}>
        <Link href="/productos/electronicos" style={{ marginRight: "10px" }}>Electrónicos</Link>
        <Link href="/productos/ropa">Ropa</Link>
      </nav>
      {children}
    </div>
  );
}
