function Navbar() {
  return (
    <div className="lg:mt-12.5 mt-4.5 flex justify-between items-center w-full">
      <h1 className="barndname">
        Hockey<span className="text-orange-600">'</span>s
      </h1>

      <ul className="lg:flex items-center justify-between w-101 hidden ">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Pages</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
      <div className="buttonSearchBox lg:flex w-50 justify-between items-center hidden">
        <a href="/">
          <i class="fa-solid fa-magnifying-glass text-xl"></i>
        </a>

        <button className="btn bg-red-500 px-10 py-5">Get Ticket</button>
      </div>
      <a className="lg:hidden" href="/">
        <i class="fa-solid fa-bars"></i>
      </a>
    </div>
  );
}

export default Navbar;
