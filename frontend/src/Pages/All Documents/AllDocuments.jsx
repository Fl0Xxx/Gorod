import s from "../User Requests/Requests.module.css"
import Document from "./Document";
import ColumnsForDocuments from "./ColumnsForDocuments";
import FindFilters from "../../Components/Filters/FindFilters";

const AllDocuments = (props) => {
    /*bll is here*/
    let requestsElements = props.requests
        .map((request) => <Document kid_fio_german={request.kid_fio_german} kid_fio_russian={request.kid_fio_russian}
                                    kid_day_of_birth={request.kid_day_of_birth}
                                    parent_fio_german={request.parent_fio_german}
                                    parent_fio_russian={request.parent_fio_russian}
                                    address_german={request.address_german}
                                    home_phone={request.home_phone} phone={request.phone} email={request.email}
                                    date={request.date} course={request.course} state={request.state}
                                    period={request.period}/>)
    return (
        <div>
            <FindFilters filtersAreOpen={props.filtersAreOpen}/>
            <h3 className={s.title}>Все заявления</h3>
            <ColumnsForDocuments/>
            {requestsElements}

        </div>
    );
};
export default AllDocuments;