export default function ModalContent({ country, closeModal }) {
  return (
    <div
      onClick={closeModal}
      className="fixed z-10 top-0 left-0 w-full h-full bg-gray-800/95 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="min-w-[500px] relative rounded p-7 bg-gray-50"
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-1 w-8 h-8 flex items-center justify-center text-sm bg-red-600 px-3 py-1 rounded text-gray-50"
        >
          X
        </button>
        <h2 className="text-2xl"> Here is {country.name.common}</h2>
        <p className="text-lg mb-2">
          <span className="font-semibold"> Languages </span>:
          {Object.entries(country.languages).map((lang) => lang[1] + " ")}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold"> Capital </span>: {country.capital[0]}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold"> Population </span>:{" "}
          {(country.population / 1000000).toFixed(1)}
        </p>
      </div>
    </div>
  );
}
