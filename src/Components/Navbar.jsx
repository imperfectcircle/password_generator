import Logo from '../Assets/images/logo.png';

export default function Navbar() {
    return (
        <header>
            <nav className="shadow-lg">
                <div className="flex min-h-[100px] items-center justify-center bg-[#98AFBA] p-5">
                    <div className="flex items-center">
                        <img className="h-[80px]" src={Logo} alt="" />
                        <p className="font-electro text-4xl text-white">
                            Generatore di Password
                        </p>
                    </div>
                </div>
            </nav>
        </header>
    );
}
