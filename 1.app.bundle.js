"use strict";
(self["webpackChunkcurso_platzi_react_avanzado"] = self["webpackChunkcurso_platzi_react_avanzado"] || []).push([[1],{

/***/ 169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListOfFavs": () => (/* binding */ ListOfFavs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(170);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



var ListOfFavs = function ListOfFavs(_ref) {
  var _ref$favs = _ref.favs,
      favs = _ref$favs === void 0 ? [] : _ref$favs;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Grid, null, favs.map(function (fav) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Link, {
      key: fav.id,
      to: "/detail/".concat(fav.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Image, {
      src: fav.src
    }));
  }));
};
ListOfFavs.propTypes = {
  favs: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    src: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
  }))
};

/***/ }),

/***/ 170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Grid": () => (/* binding */ Grid),
/* harmony export */   "Image": () => (/* binding */ Image),
/* harmony export */   "Link": () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Link = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_reach_router__WEBPACK_IMPORTED_MODULE_0__.Link)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border-radius: 8px;\n    box-shadow: 0 0 8px rgba(0, 0,0, .3);\n    display: inline-block;\n    margin:1%;\n    overflow: hidden;\n    position: relative;\n    width: 31.33%;\n    height: 200px;\n    &:after{\n        content:'';\n        padding-bottom: 100%;\n    }\n"])));
var Grid = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    padding-top:32px;\n    backdrop-filter:blur(10px);\n    height: calc(100vh - 146px);\n"])));
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    object-fit: cover;\n    height: 100%;\n    width: 100%;\n    position:absolute;\n"])));

/***/ }),

/***/ 168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavsWithQuery": () => (/* binding */ FavsWithQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);
/* harmony import */ var _components_ListOfFavs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(169);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var GET_FAVS = (0,apollo_boost__WEBPACK_IMPORTED_MODULE_2__["default"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n query getFavs {\n     favs{\n         id\n         categoryId\n         src\n         likes\n         userId\n     }\n }\n"])));

var renderProp = function renderProp(_ref) {
  var loading = _ref.loading,
      error = _ref.error,
      data = _ref.data;
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loadin..");
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Erro! ", error);
  var favs = data.favs;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ListOfFavs__WEBPACK_IMPORTED_MODULE_1__.ListOfFavs, {
    favs: favs
  });
};

var FavsWithQuery = function FavsWithQuery() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__.Query, {
    query: GET_FAVS,
    fetchPolicy: "network-only"
  }, renderProp);
};

/***/ }),

/***/ 167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(116);
/* harmony import */ var _container_GetFavorites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(168);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Petgram - Tus favoritos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "description",
    content: "Imagenes Favoritas"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_container_GetFavorites__WEBPACK_IMPORTED_MODULE_2__.FavsWithQuery, {
    className: "container"
  }));
});

/***/ })

}]);