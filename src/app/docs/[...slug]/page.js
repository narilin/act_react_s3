export default function Documentacion({ params }) {
  const { slug } = params;

  if (!slug) {
    return (
      <div>
        <h1>Documentación</h1>
        <p>Bienvenido a la sección de documentación.</p>
      </div>
    );
  }

  const breadcrumbs = ["Docs", ...slug].join(" > ");
  const titulo = slug[slug.length - 1];

  return (
    <div>
      <h1>Documentación: {titulo}</h1>
      <p>{breadcrumbs}</p>
      <p>Contenido básico para la ruta: /{slug.join("/")}</p>
    </div>
  );
}
