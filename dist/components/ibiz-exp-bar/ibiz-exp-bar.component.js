"use strict";
Vue.component('ibiz-exp-bar', {
    template: "\n        <i-menu theme=\"light\" width=\"auto\" class=\"ibiz-app-menu\" @on-select=\"onSelect($event)\" active-name=\"ctrl.selection.id\" :open-names=\"opendata\">\n            <template v-for=\"(item0, index0) in items\">\n                <!---  \u4E00\u7EA7\u83DC\u5355\u6709\u5B50\u9879 begin  --->\n                <template v-if=\"item0.items && item0.items.length > 0\">\n                    <submenu :name=\"item0.id\">\n                        <template slot=\"title\">\n                            <span>{{ item0.text }}</span>\n                            <span>&nbsp;&nbsp;<badge :count=\"item0.counterdata\"></badge></span>\n                        </template>\n                        <template v-for=\"(item1, index1) in item0.items\">\n                            <!---  \u4E8C\u7EA7\u83DC\u5355\u6709\u5B50\u9879 begin  --->\n                            <template v-if=\"item1.items && item1.items.length > 0\">\n                                <submenu :name=\"item1.id\">\n                                    <template slot=\"title\">\n                                        <span>{{ item1.text }}</span>\n                                        <span>&nbsp;&nbsp;<badge :count=\"item1.counterdata\"></badge></span>\n                                    </template>\n                                    <!---  \u4E09\u7EA7\u83DC\u5355 begin  --->\n                                    <template v-for=\"(item2, index2) in item1.items\">\n                                        <menu-item :name=\"item2.id\">\n                                            <span>{{ item2.text }}</span>\n                                            <span>&nbsp;&nbsp;<badge :count=\"item2.counterdata\"></badge></span>\n                                        </menu-item>\n                                    </template>\n                                    <!---  \u4E09\u7EA7\u83DC\u5355\u6709 begin  --->\n                                </submenu>\n                            </template>\n                            <!---  \u4E8C\u7EA7\u83DC\u5355\u6709\u5B50\u9879 end  --->\n                            <!---  \u4E8C\u7EA7\u83DC\u5355\u65E0\u5B50\u9879 begin  --->\n                            <template v-else>\n                                <menu-item :name=\"item1.id\">\n                                    <span>{{ item1.text }}</span>\n                                    <span>&nbsp;&nbsp;<badge :count=\"item1.counterdata\"></badge></span>\n                                </menu-item>\n                            </template>\n                            <!---  \u4E8C\u7EA7\u83DC\u5355\u65E0\u5B50\u9879 end  --->\n                        </template>\n                    </submenu>\n                </template>\n                <!---  \u4E00\u7EA7\u83DC\u5355\u6709\u5B50\u9879 end  --->\n                <!---  \u4E00\u7EA7\u83DC\u5355\u65E0\u5B50\u9879 begin  --->\n                <template v-else>\n                    <menu-item :name=\"item0.id\">\n                        <span>{{ item0.text }}</span>\n                        <span>&nbsp;&nbsp;<badge :count=\"item0.counterdata\"></badge></span>\n                    </menu-item>\n                </template>\n                <!---  \u4E00\u7EA7\u83DC\u5355\u65E0\u5B50\u9879 end  --->\n            </template>\n        </i-menu>\n    ",
    props: ['ctrl', 'viewController'],
    data: function () {
        var data = { opendata: [], items: [] };
        return data;
    },
    mounted: function () {
    },
    methods: {
        setOpenData: function (arr) {
            var _this = this;
            arr.forEach(function (item) {
                if (item.items && item.items.length > 0) {
                    _this.opendata.push(item.id);
                    _this.setOpenData(item.items);
                }
            });
        }
    },
    watch: {
        'ctrl.items': function (val) {
            if (val && Array.isArray(val)) {
                this.items = val.slice();
                this.setOpenData(val);
            }
        }
    }
});
