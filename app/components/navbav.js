import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="2xl:mx-auto fixed top-0 w-full">
      <div className="bg-white rounded shadow-lg py-5 px-3 md:px-7">
        <nav className="flex justify-between">
          <Link href='/'>
            <h2 className="font-normal text-2xl leading-6 text-gray-800">Temperamentos</h2>
          </Link>

          <div className=" flex space-x-5 justify-center items-center pl-2">
            <div className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;