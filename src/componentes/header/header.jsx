import logo from "../../assets/logo.jpeg";

export const Header = () => {
  return (
    <div className="flex h-30 w-full items-center justify-center mt-0 bg-black">
      <div className="flex items-center justify-center">
        <img
          src={logo}
          width={200}
          className="max-w-full h-auto"
          alt="Vite logo"
        />
      </div>
    </div>
  );
};
