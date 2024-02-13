interface SearchFormProps {
  searchValue: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (evt: React.ChangeEvent<HTMLFormElement>) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  searchValue,
  onSearchChange,
  onSubmit,
}) => (
  <form
    className="flex flex-col sm:flex-row gap-4 justify-center items-center my-8"
    onSubmit={onSubmit}
  >
    <label htmlFor="search" className="text-lg font-medium">
      Find new GIFs!
    </label>
    <input
      id="search"
      name="search"
      type="text"
      value={searchValue}
      onChange={onSearchChange}
      className="form-input px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      placeholder="What are you looking for?"
    />
    <button
      type="submit"
      className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
    >
      Search
    </button>
  </form>
);

export default SearchForm;
