import { useEffect, useRef, useState } from 'react';
import Navbar from './Components/Navbar';
import InputLabel from './Components/InputLabel';
import InputText from './Components/InputText';
import InputCheckbox from './Components/InputCheckbox';
import { Helmet } from 'react-helmet-async';
import Footer from './Components/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { generatePassword } from './Utilities/generatePassword';
import { passwordStrength } from './Utilities/passwordStrength';
import { setNotification } from './Utilities/setNotification';
import { handleCopyClick } from './Utilities/handleCopyClick';

export default function App() {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(16);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [poorPassword, setPoorPassword] = useState(false);
    const [weakPassword, setWeakPassword] = useState(false);
    const [goodPassword, setGoodPassword] = useState(false);
    const [strongPassword, setStrongPassword] = useState(false);
    const [customSymbols, setCustomSymbols] = useState('#?!@$%^&*-');
    const [notification, _setNotification] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        const initialPassword = generatePassword(
            length,
            includeSymbols,
            customSymbols,
            includeUppercase,
            includeLowercase,
            includeNumbers,
            setPassword,
        );
        setPassword(initialPassword);
        passwordStrength(
            initialPassword,
            length,
            setPoorPassword,
            setWeakPassword,
            setGoodPassword,
            setStrongPassword,
        );
    }, []);

    return (
        <div className="bg-gray-200">
            <Helmet>
                <title>Generatore di Password</title>
                <meta
                    name="description"
                    content="Crea una password sicura, unica e randomica."
                ></meta>
            </Helmet>
            <Navbar />
            <AnimatePresence>
                {notification && (
                    <motion.div
                        className="fixed right-4 top-4 z-50 flex items-center rounded-lg border-4 border-emerald-500 bg-white/90 p-5 text-emerald-500 shadow-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <AiOutlineCheckCircle className="mr-3 text-4xl" />
                        <p className="text-lg">{notification}</p>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="p-5 text-center md:mx-auto md:w-2/3 md:p-10">
                <h1 className="mt-20 text-3xl font-bold md:text-6xl">
                    Generatore di Password Sicure
                </h1>
                <h2 className="pb-16 pt-10 text-xl md:text-4xl">
                    Crea una password sicura, unica e randomica.
                </h2>

                <div className="flex flex-col items-center space-y-3 md:flex-row md:space-x-3 md:space-y-0">
                    <InputText
                        className="w-[100px]"
                        type={'number'}
                        id={'passwordLength'}
                        value={length}
                        onChange={(e) => setLength(+e.target.value)}
                    />
                    <input
                        className={`w-full rounded-lg p-5 text-2xl font-bold shadow-lg 
                        ${
                            strongPassword
                                ? 'bg-emerald-700 text-white'
                                : goodPassword
                                ? 'bg-emerald-400 text-white'
                                : weakPassword
                                ? 'bg-orange-500 text-white'
                                : poorPassword
                                ? 'bg-red-600 text-white'
                                : 'bg-gray-300 text-black'
                        }
                    `}
                        type="text"
                        ref={inputRef}
                        value={password}
                        readOnly
                    />
                    <button
                        className="rounded-lg border-2 border-slate-400 bg-slate-200 px-6 py-5 text-xl shadow-lg transition-all duration-150 hover:bg-slate-300"
                        onClick={() => {
                            handleCopyClick(inputRef);
                            setNotification(
                                'Password Copiata',
                                _setNotification,
                            );
                        }}
                    >
                        Copia
                    </button>
                </div>
                <div className="mt-5 flex flex-col items-center justify-center space-y-3 md:flex-row md:space-x-3 md:space-y-0">
                    <div className="flex items-center space-x-3">
                        <InputLabel htmlFor="uppercase" text="A - Z" />
                        <InputCheckbox
                            id="uppercase"
                            checked={includeUppercase}
                            onChange={() =>
                                setIncludeUppercase(!includeUppercase)
                            }
                        />
                    </div>
                    <div className="flex items-center space-x-3">
                        <InputLabel htmlFor="lowercase" text="a - z" />
                        <InputCheckbox
                            id="lowercase"
                            checked={includeLowercase}
                            onChange={() =>
                                setIncludeLowercase(!includeLowercase)
                            }
                        />
                    </div>
                    <div className="flex items-center space-x-3">
                        <InputLabel htmlFor="numbers" text="0 - 9" />
                        <InputCheckbox
                            id="numbers"
                            checked={includeNumbers}
                            onChange={() => setIncludeNumbers(!includeNumbers)}
                        />
                    </div>
                    <div className="flex items-center space-x-3">
                        <InputCheckbox
                            id="symbols"
                            checked={includeSymbols}
                            onChange={() => setIncludeSymbols(!includeSymbols)}
                        />
                        <InputText
                            type="text"
                            id=""
                            value={customSymbols}
                            onChange={(e) => setCustomSymbols(e.target.value)}
                        />
                    </div>
                    <button
                        className="rounded-lg border-2 border-slate-400 bg-slate-200 px-6 py-5 text-xl shadow-lg transition-all duration-150 hover:bg-slate-300"
                        onClick={() => {
                            generatePassword(
                                length,
                                includeSymbols,
                                customSymbols,
                                includeUppercase,
                                includeLowercase,
                                includeNumbers,
                                setPassword,
                            );
                            passwordStrength(
                                password,
                                length,
                                setPoorPassword,
                                setWeakPassword,
                                setGoodPassword,
                                setStrongPassword,
                            );
                        }}
                    >
                        Genera Password
                    </button>
                </div>
            </div>
            <div className=" mt-16 p-5 text-center md:mx-auto md:mt-32 md:w-2/3 md:p-10">
                <h2 className="pb-10 pt-10 text-xl font-bold md:text-4xl">
                    Che cos&apos;è una password sicura?
                </h2>
                <p className="text-lg md:text-2xl">
                    Una password sicura è una combinazione di caratteri che è
                    difficile da indovinare o decifrare da parte di terze parti
                    non autorizzate. Le password sicure sono progettate per
                    proteggere l&apos;accesso a un account o a un sistema
                    informatico da potenziali minacce, come hacker o utenti non
                    autorizzati. Ecco alcune caratteristiche comuni di una
                    password sicura:
                </p>
                <h2 className="pb-5 pt-10 text-left text-xl font-bold md:text-4xl">
                    Complessità
                </h2>
                <p className="text-lg md:text-2xl">
                    Una password sicura è generalmente complessa, cioè composta
                    da una combinazione di caratteri diversi, tra cui lettere
                    maiuscole e minuscole, numeri e caratteri speciali come !,
                    @, #, $, ecc. Questa complessità rende più difficile per gli
                    hacker indovinare la password.
                </p>
                <h2 className="pb-5 pt-10 text-left text-xl font-bold md:text-4xl">
                    Lunghezza
                </h2>
                <p className="text-lg md:text-2xl">
                    Le password dovrebbero essere abbastanza lunghe da rendere
                    difficile l&apos;accesso non autorizzato. Una lunghezza
                    minima di almeno 12 caratteri è consigliata.
                </p>
                <h2 className="pb-5 pt-10 text-left text-xl font-bold md:text-4xl">
                    Unicità
                </h2>
                <p className="text-lg md:text-2xl">
                    Una password sicura non dovrebbe essere facilmente
                    indovinabile basandosi su informazioni personali come nomi,
                    date di nascita o parole di uso comune. Dovrebbe essere
                    unica e non correlata alle informazioni personali
                    dell&apos;utente.
                </p>
                <h2 className="pb-5 pt-10 text-left text-xl font-bold md:text-4xl">
                    Aggiornamenti regolari
                </h2>
                <p className="text-lg md:text-2xl">
                    Cambiare periodicamente la password aggiunge un ulteriore
                    livello di sicurezza. Anche se qualcuno riesce a scoprire la
                    password, essa cambierà nel tempo, riducendo così il rischio
                    di accesso non autorizzato continuato.
                </p>
                <h2 className="pb-5 pt-10 text-left text-xl font-bold md:text-4xl">
                    Autenticazione a due fattori (2FA)
                </h2>
                <p className="text-lg md:text-2xl">
                    L&apos;uso di un&apos;autenticazione a due fattori aggiunge
                    un ulteriore livello di sicurezza. Oltre alla password,
                    l&apos;utente deve fornire un secondo fattore di
                    autenticazione, come un codice generato da un&apos;app o
                    inviato tramite SMS, per accedere all&apos;account.
                </p>
            </div>
            <Footer />
        </div>
    );
}
