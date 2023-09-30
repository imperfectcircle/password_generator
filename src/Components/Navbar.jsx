import Logo from '../Assets/images/logo.png';

export default function Navbar() {
  return (
    <header>
      <nav className="shadow-lg">
        <div className="min-h-[100px] bg-[#98AFBA] flex items-center justify-center p-5">
          <div className="flex items-center">
            <img className="h-[80px]" src={Logo} alt="" />
            <p className="text-4xl font-electro text-white">Generatore di Password</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
