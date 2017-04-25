var app=angular.module("appRouter",[]);

app.service("todoReq", function ($http) {
    this.getData = function () {
        return $http.get("http://localhost:8080/voted");
    }
    this.postData = function (data) {
        return $http.post("http://localhost:8080/voted", data);
    }
    this.deleteData = function (id,data) {
        return $http.delete("http://localhost:8080/voted/" + id);
    }
    this.editData = function (id, data) {
        var queryString = "";
        var fullString = "";
        for (key in data) {
            queryString += key + "=" + data[key] + "&";
            fullString += queryString;
            queryString = "";
        }
        return $http.put("http://localhost:8080/voted/" + id + "?" + fullString);
    }
});

