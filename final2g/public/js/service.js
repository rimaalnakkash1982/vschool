//var app = angular.module("appServ", []);
//
//app.service("todoReq", function ($http) {
//    this.get = function () {
//        return $http.get("http://localhost:8080/api");
//    }
//    this.postData = function (data) {
//        return $http.post("http://localhost:8080/api", data);
//    }
//    this.deleteData = function (id, data) {
//        return $http.delete("http://localhost:8080/api/" + id);
//    }
//    this.editData = function (id, data) {
//        var queryString = "";
//        var fullString = "";
//        for (key in data) {
//            queryString += key + "=" + data[key] + "&";
//            fullString += queryString;
//            queryString = "";
//        }
//        return $http.put("http://localhost:8080/api/" + id + "?" + fullString);
//    }
//});
var app = angular.module("appServ",[]);
app.service("todoReq", function ($http) {
    this.getData = function () {
        return $http.get("http://localhost:8080/api");
    }
    
      this.getDataById = function (id) {
        return $http.get("http://localhost:8080/api/"+id);
    }
    
    this.postData = function (data) {
        return $http.post("http://localhost:8080/api/", data);
    }
    this.deleteData = function (id) {
        return $http.delete("http://localhost:8080/api/" + id);
    }
    this.deleteComment = function (id, data) {
        var query = "";
        for (key in data) {
            query += key;
            query += "=";
            query += data[key];
            query += "&"
        }
        return $http.delete("http://localhost:8080/api/" + id + "?" + query);
    }
//    this.editData = function (id, data) {
//        var queryString = "";
//        for (key in data) {
//            if (data[key] != undefined) {
//                queryString += key + "=" + data[key] + "&"
//            }
//        }
//        return $http.put("http://localhost:8080/api/" + id + "?" + queryString);
//    }
        this.editData = function (id, data) {
        var queryString = "";
        var fullString = "";
        for (key in data) {
            queryString += key + "=" + data[key] + "&";
            fullString += queryString;
            queryString = "";
        }
        return $http.put("http://localhost:8080/api/" + id + "?" + fullString);
    }
        this.upVoted = function (id, data) {
        var query = "";
        for (key in data) {
            query += key;
            query += "=";
            query += data[key];
            query += "&"
        }
        return $http.put("http://localhost:8080/api/" + id + "?" + query);
    }
    this.downVoted = function (id, data) {
        var query = "";
        for (key in data) {
            query += key;
            query += "=";
            query += data[key];
            query += "&"
        }
        return $http.put("http://localhost:8080/api/" + id + "?" + query);
    }

    this.Comment = function (id, data) {
        var stringComment = "";
        for (key in data) {
            stringComment += key;
            stringComment += "=";
            stringComment += data[key];
            stringComment += "&"
        }
        return $http.put("http://localhost:8080/api/" + id + "?" + stringComment);
    }

    this.removeComment = function (id) {
        return $http.delete("http://localhost:8080/api/" + id);
    }
});
