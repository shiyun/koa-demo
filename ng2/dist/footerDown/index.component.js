System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var IndexComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            IndexComponent = (function () {
                function IndexComponent() {
                    var _this = this;
                    this.updateTitle = new core_1.EventEmitter();
                    this.title = '首页2';
                    setTimeout(function () { return _this.updateTitle.emit(_this.title); }, 100);
                }
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], IndexComponent.prototype, "updateTitle", void 0);
                IndexComponent = __decorate([
                    core_1.Component({
                        selector: 'indexPage',
                        templateUrl: 'app/index/index.html',
                        styleUrls: ['app/index/index.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], IndexComponent);
                return IndexComponent;
            }());
            exports_1("IndexComponent", IndexComponent);
        }
    }
});
//# sourceMappingURL=index.component.js.map