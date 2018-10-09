"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 首页视图控制器基类
 *
 * @class IBizIndexViewController
 * @extends {IBizMianViewController}
 */
var IBizIndexViewController = /** @class */ (function (_super) {
    __extends(IBizIndexViewController, _super);
    function IBizIndexViewController(opts) {
        if (opts === void 0) { opts = {}; }
        return _super.call(this, opts) || this;
    }
    IBizIndexViewController.prototype.init = function (params) {
        if (params === void 0) { params = {}; }
        _super.prototype.init.call(this, params);
        var appmenu = this.getAppMenu();
        if (appmenu) {
            // 部件加载之前
            appmenu.on(IBizAppMenu.BEFORELOAD).subscribe(function (params) {
            });
            // 部件加载完成
            appmenu.on(IBizAppMenu.LOAD).subscribe(function (items) {
            });
            // 部件选中
            appmenu.on(IBizAppMenu.SELECTION).subscribe(function (item) {
            });
            appmenu.load(this.getViewParam());
        }
    };
    IBizIndexViewController.prototype.getAppMenu = function () {
        return this.getControl('appmenu');
    };
    IBizIndexViewController.prototype.appMenuBeforeLoad = function (params) {
        if (params === void 0) { params = {}; }
    };
    IBizIndexViewController.prototype.appMenuLoad = function (items) {
    };
    IBizIndexViewController.prototype.appMenuSelection = function (item) {
        if (item === void 0) { item = {}; }
    };
    return IBizIndexViewController;
}(IBizMianViewController));
