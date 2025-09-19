
import './search.css'
type searchProps = {
    search:string;
    bookSearch:(event:React.ChangeEvent<HTMLInputElement>)=>void
}
const SearchBar = ({search,bookSearch}:searchProps) => {
    return(
        <div>
            <input 
            type= "text"
            placeholder='Search for books'
            value={search}
            onChange={bookSearch}
            />
        </div>
    )
}
export default SearchBar;