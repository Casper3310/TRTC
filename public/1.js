(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DevicePlane.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DevicePlane.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _serveices_stationData_serveice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../serveices/stationData_serveice */ "./resources/js/serveices/stationData_serveice.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    DeviceName: {
      type: String,
      required: true
    },
    DeviceEnName: {
      type: String,
      required: true
    },
    StationID: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {
      DeviceData: {},
      DeviceDataList: [],
      edit: false,
      index: true,
      error: {}
    };
  },
  computed: {},
  mounted: function mounted() {
    this.LoadDeviceData(this.StationID, this.DeviceEnName);
  },
  methods: {
    LoadDeviceData: function () {
      var _LoadDeviceData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(stationID, DeviceName) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                stationID = parseInt(this.$route.params.stationID);
                _context.next = 4;
                return _serveices_stationData_serveice__WEBPACK_IMPORTED_MODULE_1__["LoadDeviceData"](stationID, DeviceName);

              case 4:
                res = _context.sent;
                this.DeviceDataList = res.data.data;
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);
                this.flashMessage.error({
                  message: "錯誤!",
                  time: 5000
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function LoadDeviceData(_x, _x2) {
        return _LoadDeviceData.apply(this, arguments);
      }

      return LoadDeviceData;
    }(),
    DeleteDeviceData: function () {
      var _DeleteDeviceData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(item, index) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!window.confirm("\u4F60\u78BA\u5B9A\u522A\u9664".concat(item.name))) {
                  _context2.next = 11;
                  break;
                }

                _context2.prev = 1;
                _context2.next = 4;
                return _serveices_stationData_serveice__WEBPACK_IMPORTED_MODULE_1__["DeleteDeviceData"](item.id, this.DeviceEnName);

              case 4:
                res = _context2.sent;
                this.DeviceDataList.splice(index, 1);
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](1);
                console.log(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 8]]);
      }));

      function DeleteDeviceData(_x3, _x4) {
        return _DeleteDeviceData.apply(this, arguments);
      }

      return DeleteDeviceData;
    }(),
    EditDeviceData: function EditDeviceData(item, index) {
      this.DeviceData = item;
      this.$refs.dashtable.show();
      this.edit = true;
      this.index = index;
    },
    attachImage: function attachImage() {
      this.DeviceData.image = this.$refs.Newimage.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        this.$refs.NewimageDisplay.src = reader.result;
      }.bind(this, false)); //使用箭頭解決this
      //reader.addEventListener('load',(()=>{
      //    this.$refs.NewimageDisplay.src = reader.result;
      //}))

      reader.readAsDataURL(this.DeviceData.image);
    },
    HideDashTable: function HideDashTable() {
      this.$refs.dashtable.hide();
    },
    CreateDevice: function CreateDevice() {
      this.$refs.dashtable.show();
      this.edit = false;
      this.DeviceData = {
        name: "",
        place: "",
        image: ""
      };
    },
    SubmitDashtable: function () {
      var _SubmitDashtable = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var formdata, res, _res;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                formdata = new FormData();
                formdata.append("Circleline_Station_id", this.StationID);
                formdata.append("name", this.DeviceData.name);
                formdata.append("place", this.DeviceData.place);

                if (this.DeviceData.image) {
                  formdata.append("image", this.DeviceData.image);
                }

                _context3.prev = 5;

                if (!this.edit) {
                  _context3.next = 15;
                  break;
                }

                formdata.append("_method", "put");
                _context3.next = 10;
                return _serveices_stationData_serveice__WEBPACK_IMPORTED_MODULE_1__["UpdataDeviceData"](this.DeviceData.id, formdata, this.DeviceEnName);

              case 10:
                res = _context3.sent;
                this.edit = false;
                this.DeviceData.image = res.data.data.image;
                _context3.next = 19;
                break;

              case 15:
                _context3.next = 17;
                return _serveices_stationData_serveice__WEBPACK_IMPORTED_MODULE_1__["createDeviceData"](formdata, this.DeviceEnName);

              case 17:
                _res = _context3.sent;
                this.DeviceDataList.unshift(_res.data.data);

              case 19:
                this.HideDashTable();
                this.flashMessage.success({
                  message: "成功輸入!",
                  time: 5000
                });
                this.stationData = {
                  name: "",
                  place: "",
                  image: ""
                };
                _context3.next = 28;
                break;

              case 24:
                _context3.prev = 24;
                _context3.t0 = _context3["catch"](5);
                console.log(_context3.t0);
                this.flashMessage.error({
                  message: "錯誤!",
                  time: 5000
                });

              case 28:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[5, 24]]);
      }));

      function SubmitDashtable() {
        return _SubmitDashtable.apply(this, arguments);
      }

      return SubmitDashtable;
    }()
  },
  watch: {
    $route: function $route() {//this.LoadDeviceData(this.StationID, this.DeviceEnName);
    },
    DeviceName: function DeviceName() {
      this.LoadDeviceData(this.StationID, this.DeviceEnName);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DevicePlane.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DevicePlane.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.table {\r\n    margin: auto;\r\n    width: 800px;\n}\n.table table {\r\n    width: 100%;\r\n    border: black 1px solid;\n}\n.table thead {\r\n    background-color: rgb(36, 138, 179);\r\n    color: aliceblue;\n}\n.table tbody tr:nth-child(even) {\r\n    background-color: rgb(202, 141, 179);\n}\n.table tbody tr:hover {\r\n    background-color: rgb(190, 201, 151);\n}\n.table th {\r\n    border: black 1px solid;\n}\n.table td {\r\n    border: black 1px solid;\n}\n.modal-backdrop {\r\n    background-color: rgb(0, 0, 0, 0.5) !important;\n}\n.NewimagePreview {\r\n    width: 200px;\n}\n.feedback {\r\n    color: red;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DevicePlane.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DevicePlane.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./DevicePlane.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DevicePlane.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DevicePlane.vue?vue&type=template&id=2388098b&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DevicePlane.vue?vue&type=template&id=2388098b& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", [
      _c("h2", [_vm._v(_vm._s(_vm.DeviceName) + "設備")]),
      _vm._v(" "),
      this.$store.state.isLogin
        ? _c(
            "button",
            {
              staticClass: "btn btn-primary btn-sm",
              on: { click: _vm.CreateDevice }
            },
            [_vm._v("\n            新增\n        ")]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "plane_content table" }, [
        _vm.DeviceDataList.length
          ? _c("table", [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.DeviceDataList, function(item, index) {
                  return _c("tr", { key: index }, [
                    _c("td", [_vm._v(_vm._s(index + 1))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.place))]),
                    _vm._v(" "),
                    _c("td", [
                      item.image
                        ? _c("img", {
                            staticClass: "NewimagePreview",
                            attrs: {
                              src:
                                _vm.$store.state.serverPath +
                                "/storage/" +
                                item.image,
                              alt: item.name
                            }
                          })
                        : _c("p", [_vm._v("無圖片")])
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("div", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-warning btn-sm",
                            on: {
                              click: function($event) {
                                return _vm.EditDeviceData(item, index)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                    更新\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger btn-sm",
                            on: {
                              click: function($event) {
                                return _vm.DeleteDeviceData(item, index)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                    刪除\n                                "
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                }),
                0
              )
            ])
          : _c("div", [_vm._v("無資料")])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      [
        _c(
          "b-modal",
          { ref: "dashtable", attrs: { "hide-footer": "", title: "輸入資料" } },
          [
            _c("div", { staticClass: "d-block" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.SubmitDashtable($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "planeName" } }, [
                      _vm._v("輸入盤名")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.DeviceData.name,
                          expression: "DeviceData.name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "planeName",
                        placeholder: "輸入盤名"
                      },
                      domProps: { value: _vm.DeviceData.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.DeviceData, "name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.error.name
                      ? _c("div", { staticClass: "feedback" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.error.name[0]) +
                              "\n                        "
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "place" } }, [
                      _vm._v("輸入位置")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.DeviceData.place,
                          expression: "DeviceData.place"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "place",
                        placeholder: "輸入位置"
                      },
                      domProps: { value: _vm.DeviceData.place },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.DeviceData, "place", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.error.device
                      ? _c("div", { staticClass: "feedback" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.error.device[0]) +
                              "\n                        "
                          )
                        ])
                      : _vm._e()
                  ])
                ]
              ),
              _vm._v(" "),
              _c("form", [
                _c("div", { staticClass: "form-group" }, [
                  _vm.DeviceData.image
                    ? _c("div", [
                        _c("img", {
                          ref: "NewimageDisplay",
                          staticClass: "NewimagePreview",
                          attrs: {
                            src:
                              _vm.$store.state.serverPath +
                              "/storage/" +
                              _vm.DeviceData.image,
                            alt: ""
                          }
                        })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "image" } }, [
                    _vm._v("選擇圖片")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    ref: "Newimage",
                    staticClass: "form-control",
                    attrs: { type: "file", id: "image" },
                    on: { change: _vm.attachImage }
                  }),
                  _vm._v(" "),
                  _vm.error.image
                    ? _c("div", { staticClass: "feedback" }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.error.image[0]) +
                            "\n                        "
                        )
                      ])
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "text-right" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-default",
                    attrs: { type: "button" },
                    on: { click: _vm.HideDashTable }
                  },
                  [
                    _vm._v(
                      "\n                        取消\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "submit" },
                    on: { click: _vm.SubmitDashtable }
                  },
                  [_c("span", { staticClass: "fa fa-check" }, [_vm._v("上傳")])]
                )
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c("FlashMessage", { attrs: { position: "right top" } })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("項次")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("盤名")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("位置")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("圖片")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("操作")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/DevicePlane.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/DevicePlane.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DevicePlane_vue_vue_type_template_id_2388098b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DevicePlane.vue?vue&type=template&id=2388098b& */ "./resources/js/components/DevicePlane.vue?vue&type=template&id=2388098b&");
/* harmony import */ var _DevicePlane_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DevicePlane.vue?vue&type=script&lang=js& */ "./resources/js/components/DevicePlane.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DevicePlane_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DevicePlane.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/DevicePlane.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DevicePlane_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DevicePlane_vue_vue_type_template_id_2388098b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DevicePlane_vue_vue_type_template_id_2388098b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DevicePlane.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DevicePlane.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/DevicePlane.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DevicePlane_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DevicePlane.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DevicePlane.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DevicePlane_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DevicePlane.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/DevicePlane.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DevicePlane_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./DevicePlane.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DevicePlane.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DevicePlane_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DevicePlane_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DevicePlane_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DevicePlane_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/DevicePlane.vue?vue&type=template&id=2388098b&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/DevicePlane.vue?vue&type=template&id=2388098b& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DevicePlane_vue_vue_type_template_id_2388098b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DevicePlane.vue?vue&type=template&id=2388098b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DevicePlane.vue?vue&type=template&id=2388098b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DevicePlane_vue_vue_type_template_id_2388098b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DevicePlane_vue_vue_type_template_id_2388098b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/serveices/http_serveice.js":
/*!*************************************************!*\
  !*** ./resources/js/serveices/http_serveice.js ***!
  \*************************************************/
/*! exports provided: http, httpFile, httpToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "http", function() { return http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpFile", function() { return httpFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpToken", function() { return httpToken; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./resources/js/store.js");


function http() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.apiURL
  });
}
function httpFile() {
  var Token = JSON.parse(localStorage.getItem("TRTC"));
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.apiURL,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: "Bearer " + Token.accessToken
    }
  });
}
function httpToken() {
  var Token = JSON.parse(localStorage.getItem("TRTC"));
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.apiURL,
    headers: {
      Authorization: "Bearer " + Token.accessToken
    }
  });
}

/***/ }),

/***/ "./resources/js/serveices/stationData_serveice.js":
/*!********************************************************!*\
  !*** ./resources/js/serveices/stationData_serveice.js ***!
  \********************************************************/
/*! exports provided: LoadStationList, LoadDeviceData, createDeviceData, DeleteDeviceData, UpdataDeviceData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadStationList", function() { return LoadStationList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadDeviceData", function() { return LoadDeviceData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDeviceData", function() { return createDeviceData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDeviceData", function() { return DeleteDeviceData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdataDeviceData", function() { return UpdataDeviceData; });
/* harmony import */ var _http_serveice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_serveice */ "./resources/js/serveices/http_serveice.js");

function LoadStationList() {
  return Object(_http_serveice__WEBPACK_IMPORTED_MODULE_0__["http"])().get('Circleline_Station');
}
function LoadDeviceData(stationID, DeviceName) {
  return Object(_http_serveice__WEBPACK_IMPORTED_MODULE_0__["http"])().get("Device/".concat(DeviceName, "/").concat(stationID), {
    params: {
      stationID: stationID
    }
  });
}
function createDeviceData(data, DeviceName) {
  return Object(_http_serveice__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("/Device/".concat(DeviceName), data);
}
function DeleteDeviceData(DeviceId, DeviceName) {
  return Object(_http_serveice__WEBPACK_IMPORTED_MODULE_0__["httpFile"])()["delete"]("/Device/".concat(DeviceName, "/").concat(DeviceId));
}
function UpdataDeviceData(DeviceId, data, DeviceName) {
  return Object(_http_serveice__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("/Device/".concat(DeviceName, "/").concat(DeviceId), data);
}

/***/ })

}]);