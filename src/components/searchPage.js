import { useLocation } from "react-router-dom";

const SearchPage = () => {
    const location = useLocation();
    const searchData = location.state?.data;

    return (
        <div className="p-6 text-center">
            <h1 className="text-2xl font-semibold mb-4">Search Results</h1>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
                <p className="text-lg text-gray-800 dark:text-gray-100">
                    {searchData}
                </p>
            </div>
        </div>
    );
};

export default SearchPage;
