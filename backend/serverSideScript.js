disableEndElseCallbackExecute = true;

var querystring = require("querystring");

var urlregex = /^(?:https?:\/\/)?(?:(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\xA0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF!\$&'\(\)\*\+,;=:])*@)?(?:\[(?:(?:(?:[0-9a-f]{1,4}:){6}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|::(?:[0-9a-f]{1,4}:){5}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|v[0-9a-f]+\.[-a-z0-9\._~!\$&'\(\)\*\+,;=:]+)\]|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}|(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\xA0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF!\$&'\(\)\*\+,;=])*)(?::[0-9]*)?(?:\/(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\xA0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF!\$&'\(\)\*\+,;=:@]))*)*|\/(?:(?:(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\xA0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF!\$&'\(\)\*\+,;=:@]))+)(?:\/(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\xA0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF!\$&'\(\)\*\+,;=:@]))*)*)?|(?:(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\xA0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF!\$&'\(\)\*\+,;=:@]))+)(?:\/(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\xA0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF!\$&'\(\)\*\+,;=:@]))*)*|(?!(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\xA0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF!\$&'\(\)\*\+,;=:@])))(?:\?(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\xA0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF!\$&'\(\)\*\+,;=:@])|[\uE000-\uF8FF\/\?])*)?(?:\#(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\xA0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF!\$&'\(\)\*\+,;=:@])|[\/\?])*)?$/i;

var MongoClient = require('mongodb').MongoClient;
if(!customvar1 && !customvar2) {
  try {
    customvar1 = JSON.parse(fs.readFileSync(__dirname + "/../shortener-config.json"));
  } catch (err) {
    customvar2 = err;
  }
}

if(customvar2) {
  // customvar2 is a instance of Error
  callServerError(500, customvar2);
}

// customvar1 is a shortener configuration

var mongoURL = customvar1.mongoURL;
var dbname = customvar1.dbname;
var defaultURL = customvar1.defaultURL;
var hasRefererSecurity = (customvar1.enableRefererSecurity === undefined) ? true : customvar1.enableRefererSecurity;

function antiXSS(string) {
    return string.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");
}

function generateShortenedURLID() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function generateUniqueShortenedURLID(db, callback) {
  var id = generateShortenedURLID();
  db.collection("urls").find({id: id}).toArray(function(err, result) {
    if (err) {
      callServerError(500, err);
      return;
    }
    if(result.length > 0) {
      generateUniqueShortenedURLID(db);
    } else {
      callback(id);
    }
  });
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function connectMongo(callback) {
  // customvar3 is a MongoDB database object
  if (customvar3) {
    callback(customvar3);
  } else {
    MongoClient.connect(mongoURL, function(err, db) {
      if (err) {
        callServerError(500, err);
        return;
      }
      var dbo = db.db(dbname);
      dbo.createCollection("urls", function(err, dbres) {
        customvar3 = dbo;
        callback(dbo);
      });
    });
  }
}

function formatTemplate(templateName, templateData, callback) {
    fs.readFile(__dirname + "/../templates/" + templateName + ".template", function(err, data) {
      if (err) {
        callServerError(500, err);
        return;
      }
      var tD = data.toString();
      Object.keys(templateData).forEach(function (key) {
        tD = tD.replace(new RegExp("\\{\\{" + escapeRegExp(key) + "\\}\\}", "g"), templateData[key]);
      });
      callback(tD);
    });
}
if (href.match(/^\/admin\/?$/)) {
  if(req.method != "POST") {
    formatTemplate("index.html", {
      "url": "",
      "shorturl": ""
    }, function(data) {
      res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
      res.end(data);
    });
     return;
   }
   var baseURL = (req.socket.encrypted ? "https" : "http") + "://" + (req.headers.host ? req.headers.host : req.socket.localAddress);
   if(hasRefererSecurity && (req.headers.referer + "/").substring(0,baseURL.length + 1) != (baseURL + "/")) {
     formatTemplate("index.html", {
       "url": "",
       "shorturl": "<b>Invalid referrer (CSRF?)</b>"
     }, function(data) {
       res.writeHead(400, {"Content-Type": "text/html; charset=utf-8"});
       res.end(data);
     });
     return;
   }
   var postdata = "";
   req.on("data", function(data) {postdata += data.toString();});
   req.on("end", function() {
     postdata = querystring.parse(postdata);
     if(!postdata.url) {
       formatTemplate("index.html", {
         "url": "",
         "shorturl": "<b>URL must not be empty</b>"
       }, function(data) {
         res.writeHead(400, {"Content-Type": "text/html; charset=utf-8"});
         res.end(data);
       });
       return;
     } else if(!postdata.url.match(urlregex)) {
       formatTemplate("index.html", {
         "url": "",
         "shorturl": "<b>Invalid URL</b>"
       }, function(data) {
         res.writeHead(400, {"Content-Type": "text/html; charset=utf-8"});
         res.end(data);
       });
       return;
     } else {
       function finalizeResponse(uri, id) {
         var shorturl = baseURL + "/" + id;
         formatTemplate("index.html", {
           "url": antiXSS(uri),
           "shorturl": "<p>Shortened URL: <b><a href=\"" + antiXSS(shorturl) + "\" target=\"_blank\">" + antiXSS(shorturl) + "</a></b>"
         }, function(data) {
           res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
           res.end(data);
         });
       }
       var purl = postdata.url;
       if(!purl.match(/^https?:\/\//i)) purl = "http://" + purl;
       connectMongo(function(db) {
         db.collection("urls").find({url: purl}).toArray(function(err, result) {
           if (err) {
             callServerError(500, err);
             return;
           }
           if(result.length > 0) {
             finalizeResponse(purl, result[0].id);
           } else {
             generateUniqueShortenedURLID(db, function(id) {
               db.collection("urls").insertOne({id: id, url: purl}, function(err, dbres) {
                 if (err) {
                   callServerError(500, err);
                   return;
                 }
                 finalizeResponse(purl, id);
               });
             });
           }
         });
       });
     }
   });
} else {
  function shortenRedirect() {
    var id = href.substr(1);
    connectMongo(function(db) {
      db.collection("urls").find({id: id}).toArray(function(err, result) {
        if (err) {
          callServerError(500, err);
          return;
        }
        if(result.length > 0) {
          redirect(result[0].url);
        } else {
          redirect(defaultURL, href == "/" ? false : true);
        }
      });
    });
  }
  if (href == "/") {
    shortenRedirect();
  } else {
    fs.stat("." + decodeURIComponent(href), function(err, stats) {
      if (!err && (stats.isDirectory() || stats.isFile())) {
        elseCallback();
      } else {
        shortenRedirect();
      }
    });
  }
}
