import LanguageSwitcher from "./LanguageSwitcher ";

const Navbar = () => {
  return (
    <nav className="shadow-lg p-5">
      <div className="flex justify-between">
        {/* left side */}
        <h2 className="font-bold">Language Switcher</h2>

        {/* right side */}
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
