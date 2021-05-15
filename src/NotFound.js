import {Link} from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div>
            <h2>Page Can Not Found</h2>
            <Link to='/'>Go back to the homepage</Link>
        </div>


     );
}
 
export default NotFound;