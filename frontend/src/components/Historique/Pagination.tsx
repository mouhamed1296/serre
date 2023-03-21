/* Pagination Component */
const Pagination = () => {
  const hoverStyle = "hover:bg-emerald-100 hover:text-emerald-700 hover:border-emerald-700";
  return (
    <div className="flex mt-5 justify-end items-center gap-2">
        <button className={`text-gray-700  px-3 py-3 rounded-full border ${hoverStyle}`}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            className="fill-current"
            width="16" height="16"
            viewBox="0 0 50 50">
            <path d="M 30.28125 8.28125 L 14.28125 24.28125 L 13.59375 25 L 14.28125 25.71875 L 30.28125 41.71875 L 31.71875 40.28125 L 16.4375 25 L 31.71875 9.71875 Z"></path>
        </svg>
        </button>
        <button className=" bg-emerald-500 text-white px-4 py-2 rounded-full">1</button>
        <button className=" text-gray-700 px-4 py-2 rounded-full border">2</button>
        <button className=" text-gray-700  px-4 py-2">...</button>
        <button className={` text-gray-700  px-3 py-3 rounded-full border ${hoverStyle}`}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="15" height="15"
                viewBox="0 0 50 50">
                <path d="M 19.71875 8.28125 L 18.28125 9.71875 L 33.5625 25 L 18.28125 40.28125 L 19.71875 41.71875 L 35.71875 25.71875 L 36.40625 25 L 35.71875 24.28125 Z"></path>
            </svg>
        </button>
    </div>
  )
}

export default Pagination