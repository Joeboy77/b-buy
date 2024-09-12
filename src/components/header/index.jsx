import { Link } from 'react-router-dom'
import Logo from '../../assets/images/log.png'
import CountryDropDown from '../countryDropDown';
import { Button } from '@mui/material';
import { FaRegCircleUser } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from '../SearchBar';
import Navigation from '../navigation';
import { MyContext } from '../../App';
import { useContext } from 'react';


const Header = () => {

    const context = useContext(MyContext)
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
                            {
                                context.countryList.legth!==0 && <CountryDropDown />
                            }
                            

                            <SearchBox />

                            <div className='part3 d-flex align-items-center ml-auto'>
                                <Button className='circle mr-3'><FaRegCircleUser /></Button>
                                <div className='ml-auto cartTab d-flex align-items-center'>
                                    <span className='price'>$3.10</span>
                                    <div className='postion-relative ml-2'>
                                    <Button className='circle '><IoBagOutline /></Button>
                                    <span className='count d-flex align-items-center justify-content-center'>1</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>

            <Navigation />

            
        </div>
        </>
    )
}
export default Header