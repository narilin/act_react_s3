import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Mi App con App Router",
  description: "Ejemplo con rutas y layouts en Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <nav style={{ padding: "10px", background: "purple" }}>
          <Link href="/" style={{ marginRight: "10px" }}>Inicio</Link>
          <Link href="/productos" style={{ marginRight: "10px" }}>Productos</Link>
          <Link href="/blog" style={{ marginRight: "10px" }}>Blog</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
        <main style={{ padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
