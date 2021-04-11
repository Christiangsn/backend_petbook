module.exports = {
    secret: process.env.AUTH_SECRET || "0d9c01822550142a72faa84345938e49",
    expires: process.env.AUTH_EXPIRES || "24h",
    rounds: process.env.AUTH_ROUNDS || 10
}