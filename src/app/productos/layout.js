import Link from "next/link";

export default function ProductosLayout({ children }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Sección de Productos</h1>

      {}
      <nav style={{ marginBottom: "20px" }}>
        <Link href="/productos/electronicos" style={{ marginRight: "10px" }}>
          Electrónicos
        </Link>
        <Link href="/productos/ropa" style={{ marginRight: "10px" }}>
          Ropa
        </Link>
      </nav>

      {}
      <div>{children}</div>
    </div>
  );
}
