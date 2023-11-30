const Navbar = () => {
  return (
    <section
      className="sticky left-0  border w-60 md:w-14 lg:w-60 
     transform transition-transform duration-1000 ease-in-out flex-grow bg-white"
    >
      <ul className="flex flex-col mt-2">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SEARCH</li>
        <li>TOPICS</li>
        {/* Topics will have dropdown and will show topics like tech, health,entertainment,food,travel */}
      </ul>
    </section>
  );
};

export default Navbar;
