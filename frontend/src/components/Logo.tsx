import { Link } from 'react-router-dom'; 

const LinkComponent = ({ href, children, isEdge, isDarkMode }) => {
  return (
    <Link to={href} className={`text-xl font-semibold items-center ${isEdge ? 'ml-3' : 'ml-[5%]' } flex`}>
      <div className='h-[45px] w-[45px]'>
        <img 
          className='h-full w-full object-contain' 
          src="a-flat-vector-illustrative-style-letterm_aJH4sk2iRF2D1CWSz4XbMA_WOXEHVhTQ-aiZKWK-8WO1Q.jpeg" 
          alt="Read-It Logo" 
        />
      </div>
    </Link>
  );
};

export default LinkComponent;

