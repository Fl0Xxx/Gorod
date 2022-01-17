

/*TODO FILTERS AND FIND*/
import {NavLink} from "react-router-dom";

const FindFilters = (props) => {
    if(props.filtersAreOpen==1){return (
        <div>
            <nav className="navbar navbar-expand-sm bg-light">

                <div className="mx-auto">
                    <NavLink className="nav-link" to="/" >Фильтры</NavLink>
                </div>

                <div className="mx-4">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search"
                               aria-label="Search"/>
                    </form>
                </div>
            </nav>
            <div>
                <div><label htmlFor="remember-me" >
                    <span><input className="checkbox" name="remember-me"
                                 type="checkbox"/></span><span>Запомнить меня</span></label></div>
                <div><label htmlFor="remember-me" >
                    <span><input className="checkbox" name="remember-me"
                                 type="checkbox"/></span><span>Запомнить меня</span></label></div>
                <div><label htmlFor="remember-me" >
                    <span><input className="checkbox" name="remember-me"
                                 type="checkbox"/></span><span>Запомнить меня</span></label></div>
            </div>
        </div>
    );}
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-light">

                <div className="mx-auto">
                    <NavLink className="nav-link" to="/"  >Фильтры</NavLink>
                </div>

                <div className="mx-4">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search"
                               aria-label="Search"/>
                    </form>
                </div>
            </nav>
        </div>
    );

}
export default FindFilters;