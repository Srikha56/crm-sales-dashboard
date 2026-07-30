function Card({ title, value, change, color }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>

          <h2 className="mt-2 text-3xl font-bold text-gray-800">
            {value}
          </h2>

          <p className={`mt-2 text-sm font-medium ${color}`}>
            {change}
          </p>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
          📊
        </div>
      </div>
    </div>
  );
}

export default Card;