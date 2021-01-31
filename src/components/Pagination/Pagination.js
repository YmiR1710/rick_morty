import _ from 'lodash';

import './Pagination.css';

const Pagination = ({pages, setCurrentPage, currentPage}) => {
    const setPagesArray = _(Array(pages))
        .fill(null)
        .map((el, ind) => ind)
        .value();

    const getDisplayedPages = () => {
        if (currentPage - 2 <= 0) return _.range(0, Math.min(5, pages));
        if (currentPage + 2 >= pages) return _.range(Math.max(pages - 5, 0), pages);
        const minPage = Math.max(currentPage - 2, 0);
        const maxPage = Math.min(minPage + 4, pages);
        return _.range(minPage, maxPage + 1);
    }

    const handleClick = (page, isClickable = true) => () => {
        if (!isClickable) return;
        setCurrentPage(page);
    }

    const renderPage = (page) => {
        const isActive = page === currentPage;
        return (
            <div onClick={handleClick(page)} className={`Pagination__page ${isActive ? "Pagination__page_active" : ""}`}
                 key={page}>
                {page + 1}
            </div>
        );
    };

    const renderArrowButton = (isNext = false) => {
        const nextPage = isNext ? currentPage + 1 : currentPage - 1;
        const isArrowClickable = (!isNext && nextPage >= 0) || (isNext && nextPage < pages);
        return (
            <div className="Pagination__page" onClick={handleClick(nextPage, isArrowClickable)}>
                <div
                    className={`Pagination__arrow ${isNext ? "Pagination__arrow_next" : ""} ${isArrowClickable ? "Pagination__arrow_active" : ""}`}/>
            </div>
        );
    };

    return (
        <div className="Pagination">
            {renderArrowButton()}
            {_.map(getDisplayedPages(), renderPage)}
            {renderArrowButton(true)}
        </div>
    )
}

export default Pagination;