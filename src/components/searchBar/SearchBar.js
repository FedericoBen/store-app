import React, { useContext, useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string'

import '../ui/navbar.css'
import './searchBar.css'

import { useForm } from '../../hooks/useForm'
import { getProductByName } from '../../selectors/getProductByName';
import { AuthContext } from '../../auth/authContext';

export const SearchBar = () => {

    const location = useLocation();

    const navigate = useNavigate();
    const {setSearch} = useContext(AuthContext)



    const [{ searchText }, handlSearchTextChange, reset] = useForm({
        searchText:''
    })


    const handleSearch = (e) => {
        e.preventDefault();
        // console.log('setSearch:',searchText);
        setSearch(searchText);
        navigate(`/`)
        reset()
    }



    return (
        <form onSubmit={handleSearch}>
            <div className="container-form">
                <div className='item-form'>
                    <input
                        type="text"
                        placeholder="Buscar ... "
                        value={searchText}
                        onChange={handlSearchTextChange}
                        className="search-bar"
                        name='searchText'
                        autoComplete="off"
                    />
                </div>
                <div className='item-form'>
                    <button
                        type='submit'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </form>

    )
}
