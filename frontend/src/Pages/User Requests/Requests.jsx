import s from "./Requests.module.css"
import Request from "./Request";
import ColumnsForRequests from "./ColumnsForRequests";
import FindFilters from "../../Components/Filters/FindFilters";

const Requests = (props) => {
    /*bll is here*/
    let requestsElements = props.documents
        .map((document) => <Request name={document.kid_name_russian} crs={document.course} state={document.state}
                                    prd={document.period}
                                    date={document.date}/>)
    return (
        <div>
            <FindFilters filtersAreOpen={props.filtersAreOpen}/>
            <ColumnsForRequests/>
            {requestsElements}

        </div>
    );
};
export default Requests;