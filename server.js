// --require--

var bodyParser = require("body-parser");
var path = require("path");
var app = express();

// /--require--

// listener--

var PORT = process.env.PORT || 8080;

//  --/listener--

// --express--

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// --/express--

// --handlebars--

var hbs = require("express-handlebars");
//   // call hbs/express  --main window and partials
app.engine("handlebars", hbs({ defaultLayout: __dirname + '/views/layouts/main.handlebars',
partialsDir: __dirname + '/views/partials',
layoutsDir: __dirname + '/views/layouts'}));
app.set("view engine", "handlebars");

// --/hbs--

// --routes--

require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

// --/routes--

// --server listen--
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});
// --/server listen--