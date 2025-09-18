import './search.css'
const SearchBar = () => {
    return(
        <div className ="search">
           <form>
            <h1>Book Store</h1>
            <input type="text"placeholder = "search"/>
            <p className="header">Find your favourite book..14+ available books here </p>
           </form>
        </div>
       
    )
}
export default SearchBar;