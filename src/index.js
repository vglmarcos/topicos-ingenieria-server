const app = require('./app');
require('./database');

app.listen(app.get('port'), () => {
    console.log("todo ok");
});