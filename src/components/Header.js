const Header = () => {
  const date = new Date();
  const day = date.toLocaleString('default', { weekday: 'long' });
  const daysDate = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();

  return (
    <div className='header'>
      <h2>{day}</h2>
      <h2 className='grid grid-2x2 header-date'>
        <span className='date'>{daysDate}</span>
        <span className='month'>{month}</span>
        <span className='year'>{year}</span>
      </h2>
    </div>
  );
};

export default Header;
