export default function InputLabel({ htmlFor, text }) {
    return (
        <label className="text-2xl" htmlFor={htmlFor}>
            {text}
        </label>
    );
}
