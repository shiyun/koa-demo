System.register(['./mock-heros', 'angular2/core'], function(exports_1, context_1) {
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
    var mock_heros_1, core_1;
    var HeroService;
    return {
        setters:[
            function (mock_heros_1_1) {
                mock_heros_1 = mock_heros_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeroService = (function () {
                function HeroService() {
                }
                HeroService.prototype.getHeros = function () {
                    return Promise.resolve(mock_heros_1.HEROS);
                };
                HeroService.prototype.getHerosSlowly = function () {
                    return new Promise(function (resolve) {
                        resolve(mock_heros_1.HEROS);
                        //setTimeout(()=>resolve(HEROS), 500);
                    });
                };
                HeroService.prototype.getHero = function (id) {
                    return Promise.resolve(mock_heros_1.HEROS).then(function (heros) { return heros.filter(function (hero) { return hero.id === id; })[0]; });
                };
                HeroService.prototype.getPro = function (id, sid) {
                    return Promise.resolve(mock_heros_1.HEROS).then(function (heros) {
                        var r1 = heros.filter(function (hero) { return hero.id === id; })[0].product;
                        var r2 = r1.filter(function (result) { return result.id === sid; })[0];
                        console.log("select result: " + JSON.stringify(r2));
                        return r2;
                    });
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], HeroService);
                return HeroService;
            }());
            exports_1("HeroService", HeroService);
        }
    }
});
//# sourceMappingURL=hero.service.js.map