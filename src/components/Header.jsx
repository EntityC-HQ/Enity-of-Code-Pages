import LogoCode from "./LogoCode";

const Header = () => {
  return (
    <div>
      <header className="flex flex-col pl-4 pt-4 bg-black">
        <div className="flex flex-row mr-20 ml-0">
          <a href="/" rel="noopener noreferrer" className="text-white flex ">
            <div className="2xl:w-1/2 xl:w-1/3 lg:w-1/3 md:w-1/4 w-1/5 ">
              <LogoCode />
            </div>
          </a>
        </div>
        <div>
          <p className="text-xs md:text-sm text-white text-right mr-2 2xl:-mt-14 xl:-mt-10 lg:-mt-10 md:-mt-8 mt-2.5">
            where [c] stands for more than just crypto
          </p>
        </div>
      </header>
      <div className="text-right text-white lg:text-2xl md:text-md text-sm">
        <a href={import.meta.env.VITE_APP_BLOG_URL}>
          <span className="md:mr-20 mr-10 hover:text-red-500">Blog</span>
        </a>
        <a href={import.meta.env.VITE_APP_X_URL}>
          <span className="md:mr-20 mr-10 hover:text-red-500">Twitter/X</span>
        </a>
        <a href={import.meta.env.VITE_APP_DISCORD_HUB_URL}>
          <span className="md:mr-20 mr-10 hover:text-red-500">
            Discord-Research-Hub
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
