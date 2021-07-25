(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChatList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ChatList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'ChatBox.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _serveices_Chat_serveice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../serveices/Chat_serveice */ "./resources/js/serveices/Chat_serveice.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var ChatUserInterval;


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ChatBox: !(function webpackMissingModule() { var e = new Error("Cannot find module 'ChatBox.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  data: function data() {
    return {
      UserList: []
    };
  },
  mounted: function mounted() {
    ChatUserInterval = setInterval(this.LoadChatUser, 500);
  },
  methods: {
    LoadChatUser: function () {
      var _LoadChatUser = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _serveices_Chat_serveice__WEBPACK_IMPORTED_MODULE_2__["GetUserList"]();

              case 3:
                res = _context.sent;
                this.UserList = res;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function LoadChatUser() {
        return _LoadChatUser.apply(this, arguments);
      }

      return LoadChatUser;
    }()
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(ChatUserInterval);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChatList.vue?vue&type=style&index=0&id=b89f32fe&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ChatList.vue?vue&type=style&index=0&id=b89f32fe&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.aaa[data-v-b89f32fe] {\r\n    display: flex;\r\n    justify-content: center;\n}\n.chatbox-side[data-v-b89f32fe] {\r\n    width: 200px;\r\n    height: 200px;\r\n    left: -200px;\r\n    top: 0px;\r\n    background-color: cornflowerblue;\r\n    position: absolute;\n}\n.chat-box[data-v-b89f32fe] {\r\n    width: 250px;\r\n    position: relative;\n}\n.box-header[data-v-b89f32fe] {\r\n    display: flex;\r\n    justify-content: center;\r\n    border-bottom: 1px rgb(112, 109, 109) solid;\n}\n.user-detail[data-v-b89f32fe] {\r\n    border-radius: 5px;\n}\n.user-detail span[data-v-b89f32fe] {\r\n    font-size: 20px;\r\n    font-weight: 700;\n}\n.user-detail p[data-v-b89f32fe] {\r\n    font-size: 15px;\r\n    font-weight: 400;\n}\n.search[data-v-b89f32fe] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    margin: 20px;\n}\n.search input[data-v-b89f32fe] {\r\n    height: 30px;\r\n    border-radius: 5px 0 0 5px;\r\n    outline: none;\r\n    border: 1px solid rgb(59, 58, 58);\n}\n.search button[data-v-b89f32fe] {\r\n    width: 50px;\r\n    height: 30px;\r\n    border: none;\r\n    color: rgb(206, 198, 198);\r\n    background-color: rgb(59, 58, 58);\r\n    border-radius: 0 5px 5px 0;\n}\n.user[data-v-b89f32fe] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 0 10px 0 20px;\r\n    border-bottom: 1px solid rgb(78, 75, 75);\n}\n.user-detail[data-v-b89f32fe] {\r\n    color: #333;\n}\n.online .active[data-v-b89f32fe] {\r\n    color: rgb(0, 255, 85);\r\n    margin-top: 15px;\n}\n.online i[data-v-b89f32fe] {\r\n    color: rgb(92, 92, 92);\r\n    margin-top: 15px;\n}\n.user-list[data-v-b89f32fe] {\r\n    max-height: 250px;\r\n    overflow-y: auto;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChatList.vue?vue&type=style&index=0&id=b89f32fe&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ChatList.vue?vue&type=style&index=0&id=b89f32fe&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ChatList.vue?vue&type=style&index=0&id=b89f32fe&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChatList.vue?vue&type=style&index=0&id=b89f32fe&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChatList.vue?vue&type=template&id=b89f32fe&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ChatList.vue?vue&type=template&id=b89f32fe&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "aaa" }, [
    _c("div", { staticClass: "chat-box" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "context" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "user-list" },
          _vm._l(_vm.UserList, function(item, index) {
            return _c("div", { key: index, staticClass: "user" }, [
              _c("div", { staticClass: "user-detail" }, [
                _c("span", [_vm._v(_vm._s(item.name))]),
                _vm._v(" "),
                _c("p", [_vm._v("最後訊息")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "online" }, [
                _c("i", {
                  staticClass: "fas fa-circle",
                  class: { active: item.revoke }
                })
              ])
            ])
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "chatbox-side" })
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header" }, [
      _c("div", { staticClass: "user-detail" }, [
        _c("span", [_vm._v("使用者名稱")]),
        _vm._v(" "),
        _c("p", [_vm._v("上線")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "search" }, [
      _c("input", {
        staticClass: "search-bar",
        attrs: { type: "text", name: "search-bar", placeholder: "輸入搜尋名稱" }
      }),
      _vm._v(" "),
      _c("button", [_c("i", { staticClass: "fas fa-search" })])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ChatList.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/ChatList.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatList_vue_vue_type_template_id_b89f32fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatList.vue?vue&type=template&id=b89f32fe&scoped=true& */ "./resources/js/components/ChatList.vue?vue&type=template&id=b89f32fe&scoped=true&");
/* harmony import */ var _ChatList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatList.vue?vue&type=script&lang=js& */ "./resources/js/components/ChatList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChatList_vue_vue_type_style_index_0_id_b89f32fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatList.vue?vue&type=style&index=0&id=b89f32fe&scoped=true&lang=css& */ "./resources/js/components/ChatList.vue?vue&type=style&index=0&id=b89f32fe&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChatList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatList_vue_vue_type_template_id_b89f32fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatList_vue_vue_type_template_id_b89f32fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b89f32fe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ChatList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ChatList.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/ChatList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ChatList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChatList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ChatList.vue?vue&type=style&index=0&id=b89f32fe&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/ChatList.vue?vue&type=style&index=0&id=b89f32fe&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_style_index_0_id_b89f32fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ChatList.vue?vue&type=style&index=0&id=b89f32fe&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChatList.vue?vue&type=style&index=0&id=b89f32fe&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_style_index_0_id_b89f32fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_style_index_0_id_b89f32fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_style_index_0_id_b89f32fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_style_index_0_id_b89f32fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/ChatList.vue?vue&type=template&id=b89f32fe&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/ChatList.vue?vue&type=template&id=b89f32fe&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_template_id_b89f32fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ChatList.vue?vue&type=template&id=b89f32fe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChatList.vue?vue&type=template&id=b89f32fe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_template_id_b89f32fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_template_id_b89f32fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/serveices/Chat_serveice.js":
/*!*************************************************!*\
  !*** ./resources/js/serveices/Chat_serveice.js ***!
  \*************************************************/
/*! exports provided: GetUserList, createDeviceData, DeleteDeviceData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserList", function() { return GetUserList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDeviceData", function() { return createDeviceData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDeviceData", function() { return DeleteDeviceData; });
/* harmony import */ var _http_serveice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_serveice */ "./resources/js/serveices/http_serveice.js");

var userlist = [{
  "name": "aaa",
  "revoke": 1
}, {
  "name": "bbb",
  "revoke": 0
}, {
  "name": "ccc",
  "revoke": 1
}];
function GetUserList() {
  return userlist;
  return Object(_http_serveice__WEBPACK_IMPORTED_MODULE_0__["http"])().get("Device}");
}
function createDeviceData(data, DeviceName) {
  return Object(_http_serveice__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("/Device/".concat(DeviceName), data);
}
function DeleteDeviceData(DeviceId, DeviceName) {
  return Object(_http_serveice__WEBPACK_IMPORTED_MODULE_0__["httpFile"])()["delete"]("/Device/".concat(DeviceName, "/").concat(DeviceId));
}

/***/ })

}]);