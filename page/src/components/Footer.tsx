function Footer() {
  return (
    <>
      <footer className="bg-green-100 dark:bg-gray-900 h-[50vh] flex items-center">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                <span className="self-center text-3xl font-semibold whitespace-nowrap uppercase dark:text-white">
                  Res share
                </span>
              </a>
            </div>
            <div>
              <div className=" h-full w-px bg-black"></div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900  dark:text-white">
                  Product
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      product
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      product
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900  dark:text-white">
                  Companey
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Companey
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Companey
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2010 - 2020 Privacy - Term
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
