export default function InputText({ type, id, value, onChange, className }) {
    return (
        <input
            className={`rounded-lg border-2 border-gray-300 p-5 text-xl shadow-lg focus:bg-emerald-100 ${className}`}
            type={type}
            id={id}
            value={value}
            onChange={onChange}
        />
    );
}
