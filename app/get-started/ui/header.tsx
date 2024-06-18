const Header = () => {
  return (
    <header className='absolute inset-x-0 top-0 z-50'>
      <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
        <div className='flex lg:flex-1'>
          <a href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Amcy OOH</span>
            <h2 className='text-base font-mono font-semibold leading-7 text-slate-900'>Amcy OOH</h2>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
