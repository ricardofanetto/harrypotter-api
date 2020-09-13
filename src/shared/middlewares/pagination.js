module.exports = (req, _, next) => {
    let { pageSize, page } = req.query;
    pageSize = pageSize ? parseInt(pageSize) : 20;
    page = page ? parseInt(page) : 1;

    if (page === 0 || page < 0) page = 1;
    if (pageSize < 0) pageSize = 20;

    req.query.page = page;
    req.query.pageSize = pageSize;

    next();
}