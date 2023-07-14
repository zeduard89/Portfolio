import error from './—Pngtree—triangle error 404 glitch border_6002351.png'

const Error = () => {
  return (
    <div className="bg-lime-200 flex flex-col items-center mt-32 h-screen ">
      <h1 className="text-4xl mb-8">¡Oops! Algo salió mal</h1>
      <p className="text-lg mb-12">Lo sentimos, parece que ha ocurrido un error.</p>
      <img src={error} alt="Error Icon" className="w-28 mb-12 animate-ping2" />
      <a href="/" className="text-blue-500">Volver a la página principal</a>
    </div>
  );
}

export default Error;