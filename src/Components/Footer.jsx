export default function Footer() {
    return (
        <section className="flex h-fit justify-around bg-slate-900 p-5">
            <p className="text-lg text-gray-200">
                Made with{' '}
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://translate.google.it/?hl=it&sl=ja&tl=it&text=%E6%8C%87&op=translate"
                >
                    &#x1F22F;
                </a>{' '}
                by{' '}
                <a
                    className="underline"
                    target="_blank"
                    rel="noreferrer"
                    href="https://fabioangelici.com"
                >
                    Fabio Angelici
                </a>
            </p>
        </section>
    );
}
