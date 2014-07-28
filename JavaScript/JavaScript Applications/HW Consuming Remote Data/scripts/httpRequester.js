define(['jquery', 'q'], function($, Q) {

    var httpRequester = (function() {

        var makeHttpRequest = function(url, type, data, headers) {
            var deferred = Q.defer();

            var stringifiedData = "";
            if (data) {
                stringifiedData = JSON.stringify(data);
            }

            if (headers) {
                $.ajaxSetup({
                    'beforeSend': function(xhr) {
                        xhr.setRequestHeader(headers.name, headers.value);
                    }
                });
            }

            $.ajax({
                url: url,
                type: type,
                contentType: "application/json",
                data: stringifiedData,
                success: function(result) {
                    deferred.resolve(result);
                },
                error: function(errorData) {
                    deferred.reject(errorData);
                }
            });

            return deferred.promise;
        };

        var makeHttpGetRequest = function(url, headers) {
            return makeHttpRequest(url, "get", headers);
        };

        var makeHttpPostRequest = function(url, data, headers) {
            return makeHttpRequest(url, "post", data, headers);
        };

        return {
            postJSON: makeHttpPostRequest,
            getJSON: makeHttpGetRequest
        };
    }());

    return httpRequester;

});