import { Link } from 'react-router-dom';
import error from '../../../src/assets/404.gif'

const Error = () => {
    useTitle('ToyCarTrader | Error')
    return (
            <div className='grid justify-center'>
                <img src={error} alt="" />
                <Link className=' w-36 mx-auto bg-blue-700 hover:bg-blue-900 text-white btn border-0' to='/'>Go to Home</Link>
            </div>
    );
};

export default Error;