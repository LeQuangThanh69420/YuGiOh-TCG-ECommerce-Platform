import './Header.css'

function Header() {
    return (
        <div className='main-container'>
            <div className="header-bar">
                <div className='logo'>
                    DuRiu
                </div>
                <div className='search-bar'>
                    <span>Search</span>
                    <input type="text" name="" id="" />
                </div>
                <div className='users-button'>
                    <button>Login</button>
                </div>
            </div>
            <div className='search-opt'>
                
            </div>
        </div>

    )
}

export default Header