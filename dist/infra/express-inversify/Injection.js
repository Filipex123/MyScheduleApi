"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Injection = void 0;
var Injection_enum_1 = require("../../entity/Injection.enum");
var inversify_1 = require("inversify");
var ExampleMongoRepositoryImp_1 = require("../../repository/implementation/ExampleMongoRepositoryImp");
var injection = [ExampleMongoRepositoryImp_1.ExampleMongoRepositoryImpl];
var Injection = (function () {
    function Injection() {
        this.bindClass();
    }
    Injection.prototype.bindClass = function () {
        var _this = this;
        this.container = new inversify_1.Container();
        injection.forEach(function (item) {
            var accessString = item.toString().match(/\w+/g)[1];
            _this.container.bind(Injection_enum_1.InjectionEnum[accessString]).to(item);
        });
    };
    return Injection;
}());
exports.Injection = Injection;
//# sourceMappingURL=Injection.js.map