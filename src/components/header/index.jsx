import { Link } from 'react-router-dom'
import Logo from '../../assets/images/log.png'
import CountryDropDown from '../countryDropDown';
import { IoSearch } from "react-icons/io5";
import { Button } from '@mui/material';


const Header = () => {
    return(
        <>
        <div className="headerWrapper">
            <div className="top-strip bg-blue">
                <div className="container">
                    <p className="mb-0 mt-0 text-center"> Welcome customer, we are <b>recieving orders</b></p>
                </div>
            </div>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex align-items-center col-sm-2">
                            <Link to={'/'} >
                                <img src={Logo} alt='Logo'/>
                            </Link>
                        </div>

                        <div className='col-sm-10 d-flex align-items-center part2'>
                            <CountryDropDown />

                            {/* Header search start */}
                            <div className='headerSearch ml-3 mr-3'>
                                <input type='text' placeholder='Search for products...'/>
                                <Button><IoSearch/></Button>
                            </div>
                            {/* Header ends */}
                        </div>
                    </div>
                </div>
            </header>
        </div>
        </>
    )
}
export default Header