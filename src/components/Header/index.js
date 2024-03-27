import logo from "../../assets/images/oak-tecnologia-logo.jpeg";

export function Header() {
  return (
    <div className="flex justify-around p-10 mb-10 bg-tahiti text-white">
      <img
        className="max-w-28 md:hidden sm:hidden"
        src={logo}
        alt="carvalho aleixo inc logo"
      />
      <h1 className="text-2xl font-bold font-mono self-center">
        Desafio Oak Tecnologia
      </h1>
    </div>
  );
}
