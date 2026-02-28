import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 px-4 bg-white dark:bg-[#0B0B0F] border-t border-gray-200 dark:border-[#25252F]">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center gap-2 text-sm sm:text-base font-medium">
          Made with <FiHeart className="text-red-500" /> by Rahul Kumar Rana
        </p>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
