
var Dict = require("collections/dict");
var describeDict = require("./dict");
var describeObservableMap = require("./observable-map");

describe("Dict", function () {

    describeDict(Dict);
    describeObservableMap(Dict);

    it("should throw errors for non-string keys", function () {

        var dict = Dict();
        expect(function () {
            dict.get(0);
        }).toThrow();
        expect(function () {
            dict.set(0, 10);
        }).toThrow();
        expect(function () {
            dict.has(0);
        }).toThrow();
        expect(function () {
            dict.delete(0);
        }).toThrow();

    });

});

