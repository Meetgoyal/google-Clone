import { useEffect, useRef, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
    const menuRef = useRef(null);
    const [isDarkOn, setIsDarkOn] = useState(false);
    const [showSetting, setShowSetting] = useState(false);
    const [searchData, setSearchData] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const savedTheme = Cookies.get('theme');
        if (savedTheme === 'dark') {
            setIsDarkOn(true);
        }
        else {
            setIsDarkOn(false);
        }
    }, [])

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setShowSetting(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const handleSearch = (e) => {
        setSearchData(e.target.value);
    }
    const handleEnter = (e) => {
        if (searchData != "" && e.key === "Enter") {
            handleSubmit();
        }
    }
    const handleSubmit = () => {
        if (searchData != "") {
            navigate('/search', { state: { data: searchData } });
            console.log(searchData);
        }
    }
    const handleSettingsOn = () => {
        if (showSetting) {
            setShowSetting(false);
        }
        else {
            setShowSetting(true);
        }
    }
    const handleChangeTheme = () => {
        const newTheme = (!isDarkOn);
        setIsDarkOn(newTheme);
        Cookies.set('theme', newTheme ? 'dark' : 'light', { expires: 7 });
    }
    return (
        <div className={`${isDarkOn ? 'bg-[#202124] text-[#e8eaed]' : 'bg-white text-gray-900'} min-h-screen`}>
            {/* Header */}
            <header className="flex justify-between items-center p-4">
                <div className="flex items-center space-x-4">
                    <a href="https://www.google.com/intl/en_in/about/" className="text-sm hover:underline opacity-75 hover:opacity-100">About</a>
                    <a href="https://store.google.com/IN" className="text-sm hover:underline opacity-75 hover:opacity-100">Store</a>
                </div>
                <div className="flex items-center space-x-3">
                    <a href="https://mail.google.com/mail/?authuser=0&ogbl" className="text-sm hover:underline opacity-75 hover:opacity-100">Gmail</a>
                    <a href="https://www.google.co.in/imghp?hl=en&authuser=0&ogbl" className="text-sm hover:underline opacity-75 hover:opacity-100">Images</a>
                </div>
            </header>

            {/* Main */}
            <main className="flex flex-col items-center justify-center px-4" style={{ minHeight: 'calc(100vh - 200px)' }}>
                <div className="mb-8">
                    <img className="w-72 h-24 md:w-96 md:h-32" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png" />
                </div>
                {/* Searchbar */}
                <div className="w-full max-w-xl mb-8">
                    <div className={`flex items-center w-full px-4 py-3 rounded-full border ${isDarkOn ? 'hover:bg-[#3c4043] bg-[#303134] border-[#5f6368]' : 'bg-white border-gray-300'} hover:shadow-md focus-within:shadow-md`}>
                        <img className="w-5 h-5 mr-3" src="https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon.png" />
                        <input type="text" onKeyDown={handleEnter} onChange={handleSearch} value={searchData} className={`flex-1 bg-transparent outline-none ${isDarkOn ? 'text-[#e8eaed]' : 'text-black'}`} />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                    <button className={`px-6 py-3 rounded text-sm ${isDarkOn ? 'bg-[#303134] text-[#e8eaed] hover:bg-[#3c4043]' : 'bg-gray-100 hover:bg-gray-200'}`} onClick={handleSubmit}>
                        Google Search
                    </button>
                    <a href="https://doodles.google/">
                        <button className={`px-6 py-3 rounded text-sm ${isDarkOn ? 'bg-[#303134] text-[#e8eaed] hover:bg-[#3c4043]' : 'bg-gray-100 hover:bg-gray-200'}`}>
                            I'm Feeling Lucky
                        </button>
                    </a>
                </div>

                {/* Gemini */}
                <a href='https://gemini.google.com/app'>
                    <div className="flex items-center space-x-2 text-blue-500 hover:underline cursor-pointer">
                        <img className="w-8 h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYnHRL-tMaj6h2CYK5Yy4ixuXfuohG8g8J4g&s" />
                        <span className="text-m">Google Gemini</span>
                    </div>
                </a>
            </main>

            {/* Footer */}
            <footer className={`${isDarkOn ? 'bg-[#202124] text-[#9aa0a6] border-t border-[#3c4043]' : 'border-t border-gray-200 bg-gray-50 text-gray-600'}`}>
                <div className="px-4 py-3">
                    <p className="text-sm">India</p>
                </div>
                <div className="border-t px-4 py-3">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                        <div className="flex flex-wrap justify-center sm:justify-start space-x-6 text-sm">
                            <a href="https://www.google.com/intl/en_in/ads/" className="hover:underline">Advertising</a>
                            <a href="https://www.google.com/services/" className="hover:underline">Business</a>
                            <a href="https://www.google.com/search/howsearchworks/" className="hover:underline">How Search works</a>
                        </div>
                        <div className="flex flex-wrap justify-center sm:justify-end space-x-6 text-sm">
                            <a href="https://policies.google.com/privacy?hl=en-IN&fg=1" className="hover:underline">Privacy</a>
                            <a href="https://policies.google.com/terms?hl=en-IN&fg=1" className="hover:underline">Terms</a>
                            
                            {/* settings Menu */}
                            <div className="relative" ref={menuRef}>
                                {showSetting && (
                                    <div className={`absolute bottom-full mb-2 right-0 w-64 shadow-lg rounded text-sm z-50 border ${isDarkOn ? 'bg-[#303134] text-[#e8eaed] border-[#5f6368]' : 'bg-white text-black border-gray-200'}`}>
                                        <ul className="py-2">
                                            <a href="https://www.google.com/preferences"><li className={`px-4 py-2 cursor-pointer ${isDarkOn ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>Search settings</li></a>
                                            <a href="https://www.google.com/advanced_search"><li className={`px-4 py-2 cursor-pointer ${isDarkOn ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>Advanced search</li></a>
                                            <a href="https://support.google.com/websearch/"><li className={`px-4 py-2 cursor-pointer ${isDarkOn ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>Search help</li></a>
                                            
                                            {/* dark and light mode */}
                                            <li onClick={handleChangeTheme} className={`px-4 py-2 cursor-pointer ${isDarkOn ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                                                Dark theme: {isDarkOn ? "On" : "Off"}
                                            </li>
                                        </ul>
                                    </div>
                                )}
                                <button className="hover:underline" onClick={handleSettingsOn}>
                                    Settings
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* dummy language change option */}
                <div className="px-4 py-3 text-center">
                    <p className="text-sm text-gray-600">
                        Google offered in:
                        <a href="#" className="text-blue-600 hover:underline ml-1">हिन्दी</a>
                        <a href="#" className="text-blue-600 hover:underline ml-2">বাংলা</a>
                        <a href="#" className="text-blue-600 hover:underline ml-2">తెలుగు</a>
                        <a href="#" className="text-blue-600 hover:underline ml-2">मराठी</a>
                        <a href="#" className="text-blue-600 hover:underline ml-2">தமிழ்</a>
                        <a href="#" className="text-blue-600 hover:underline ml-2">ગુજરાતી</a>
                        <a href="#" className="text-blue-600 hover:underline ml-2">ಕನ್ನಡ</a>
                        <a href="#" className="text-blue-600 hover:underline ml-2">മലയാളം</a>
                        <a href="#" className="text-blue-600 hover:underline ml-2">ਪੰਜਾਬੀ</a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
