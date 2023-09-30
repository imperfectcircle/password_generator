export default function InputCheckbox({ id, checked, onChange }) {
    return (
        <input
            className="h-4 w-4 rounded border-gray-600 bg-gray-100 p-3 text-green-600 checked:bg-emerald-400 focus:ring-2 focus:ring-green-500"
            type="checkbox"
            id={id}
            checked={checked}
            onChange={onChange}
        />
    );
}
