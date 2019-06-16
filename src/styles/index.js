const req = require.context("./", true, /\.scss$/);
req.keys().forEach(req);
