const Header = () => {
  return (
    <header className='absolute inset-x-0 top-0 z-50'>
      <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Amcy OOH</span>
            <img className='h-16 w-auto' src='/amcy_ooh_logo.jpeg' alt='' />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
