import Link from "next/link";

export default function BlogArticulo({ params }) {
  const { slug } = params;
  return (
    <div>
      <h1>Artículo: {slug}</h1>
      <p>Contenido del artículo {slug}.</p>
      <Link href="/blog">⬅ Volver al Blog</Link>
    </div>
  );
}
