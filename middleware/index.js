//* Middleware(ara yazılım)
exports.logger = ((req, res, next) => {
    console.log('Istek Geldi Method:', req.method + 'URL' + req.url)
    // Ara yazılımdan sonra çalışacak olan fonkosiyona çalışması için izin verir
    next()
})