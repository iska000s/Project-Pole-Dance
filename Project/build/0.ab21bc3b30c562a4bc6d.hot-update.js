"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 41:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(45), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(46), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Eric Meyer's CSS Reset
   http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
   This is a Sass partial
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

.menu_main-container {
  height: 60px;
  top: 10px;
  background-color: white;
  z-index: 500;
  position: sticky;
  box-shadow: 2px 3px 3px 2px #D8D8D8;
}
@media (max-width: 736px) {
  .menu_main-container {
    width: 90vw;
  }
}
.menu_main-container .menu_main {
  height: 100%;
  display: flex;
  align-items: center;
}
@media (min-width: 736px) {
  .menu_main-container .menu_main {
    gap: 22px;
    margin-left: 100px;
  }
}
@media (max-width: 736px) {
  .menu_main-container .menu_main {
    gap: 5%;
    margin-left: 10%;
    line-height: 10px;
  }
}
.menu_main-container .menu_main .menu_main_element, .menu_main-container .menu_main a {
  flex-direction: row;
  font-family: Roboto;
  font-weight: 300;
  color: #000000;
  text-decoration: none;
}
@media (min-width: 736px) {
  .menu_main-container .menu_main .menu_main_element, .menu_main-container .menu_main a {
    font-size: 16px;
  }
}
@media (max-width: 736px) {
  .menu_main-container .menu_main .menu_main_element, .menu_main-container .menu_main a {
    font-size: 10px;
  }
}

.menu_aside-container {
  height: 100vh;
  position: absolute;
}
.menu_aside-container .menu_aside {
  position: fixed;
  display: flex;
  flex-direction: column;
  padding-top: 103px;
  gap: 18px;
  height: 100%;
  width: 10%;
  background-color: #000000;
}
@media (max-width: 736px) {
  .menu_aside-container .menu_aside {
    width: 15%;
  }
}
.menu_aside-container .menu_aside .menu_aside_element {
  margin: 0 0 0 15px;
}
@media (max-width: 736px) {
  .menu_aside-container .menu_aside .menu_aside_element {
    margin: 0 0 0 2px;
  }
}
.menu_aside-container .menu_aside .menu_aside_element a {
  text-decoration: none;
  font-size: 14px;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  color: #FFFFFF;
}
@media (max-width: 736px) {
  .menu_aside-container .menu_aside .menu_aside_element a {
    font-size: 6px;
    font-weight: 300;
  }
}

.footer_container {
  clear: both;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 90%;
  height: 80px;
  background-color: black;
}
@media (max-width: 736px) {
  .footer_container {
    width: 90%;
    right: 0;
  }
}
.footer_container .menu_footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 0 30px 0 30px;
  background-color: #1E1E1E;
}
@media (max-width: 736px) {
  .footer_container .menu_footer {
    padding: 5px;
    justify-content: left;
  }
}
.footer_container .menu_footer .menu_footer_list {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
  margin: 0 15px 0 0;
}
@media (max-width: 736px) {
  .footer_container .menu_footer .menu_footer_list {
    gap: 10%;
  }
}
.footer_container .menu_footer .menu_footer_list a {
  font-family: Roboto;
  font-size: 12px;
  text-decoration: none;
  color: #928E8E;
}
@media (max-width: 736px) {
  .footer_container .menu_footer .menu_footer_list a {
    font-size: 10px;
  }
}
.footer_container .menu_footer a {
  color: #D8D8D8;
}

.one_pager {
  height: 90vh;
}

.main_page {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  z-index: 200;
}
@media (min-width: 736px) {
  .main_page {
    background-attachment: fixed;
    background-size: 66.5%;
    background-position: right;
    margin-left: 60px;
  }
}
@media (max-width: 736px) {
  .main_page {
    background-size: 100%;
    width: 90%;
    margin-left: 5%;
    right: 10px;
  }
}
.main_page .circles_workout-container {
  display: flex;
}
@media (max-width: 736px) {
  .main_page .circles_workout-container {
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
.main_page .circles_workout-container .circles_workout {
  background-color: #FFFFFF;
  border-radius: 50%;
  width: 170px;
  height: 170px;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
}
@media (max-width: 736px) {
  .main_page .circles_workout-container .circles_workout {
    width: 100px;
    height: 100px;
    margin: 0;
  }
}
.main_page .circles_workout-container :nth-of-type(1) {
  border: 10px #E7E6E6 solid;
}
.main_page .circles_workout-container :nth-of-type(1) h2, .main_page .circles_workout-container :nth-of-type(1) a {
  border: none;
}
.main_page .circles_workout-container :nth-child(2) {
  border: 10px #CCCBCB solid;
  position: relative;
}
.main_page .circles_workout-container :nth-child(2) h2, .main_page .circles_workout-container :nth-child(2) a {
  border: none;
}
.main_page .circles_workout-container :nth-of-type(3) {
  border: 10px #9D9D9D solid;
  position: relative;
}
.main_page .circles_workout-container :nth-of-type(3) h2, .main_page .circles_workout-container :nth-of-type(3) a {
  border: none;
}
.main_page .about_platform {
  width: 295px;
}
.main_page .about_platform .about_platform_text {
  margin-right: 20px;
  padding-bottom: 20px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 300;
}
.main_page .header3 {
  margin-block: 20px 10px;
}

.workout {
  background-color: #D6D6D6;
}
@media (min-width: 736px) {
  .workout {
    padding-left: 60px;
  }
}
@media (max-width: 736px) {
  .workout {
    padding: 5%;
  }
}
.workout .header4 {
  padding-block: 10px 20px;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 300;
  color: #B02323;
}
.workout .description_text {
  margin-bottom: 20px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  color: #FFFFFF;
}
.workout .workout_imgages {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
@media (min-width: 736px) {
  .workout .workout_imgages {
    margin-right: 100px;
    margin-bottom: 60px;
  }
}
@media (max-width: 736px) {
  .workout .workout_imgages {
    margin-bottom: 20%;
  }
}
.workout .workout_imgages .workout_image {
  background-color: #FFFFFF;
}
@media (min-width: 736px) {
  .workout .workout_imgages .workout_image {
    margin-right: 60px;
    margin-bottom: 50px;
    height: 300px;
    width: 250px;
  }
}
@media (max-width: 736px) {
  .workout .workout_imgages .workout_image {
    margin: 5%;
    height: 150px;
    width: 100px;
  }
}

.figures_container {
  background-color: #FFFFFF;
}
.figures_container .main_page_figures {
  padding-bottom: 100px;
}
.figures_container .main_page_figures .figures_page_head {
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  margin-bottom: 20px;
}
.figures_container .main_page_figures .figures_page_head .figures_stripe {
  width: 575px;
  height: 40px;
  background-color: #C7C7C7;
  display: flex;
  flex-direction: row;
}
.figures_container .main_page_figures .figures_page_head .figures_circle {
  background-color: #FFFFFF;
  border-radius: 50%;
  position: relative;
  top: -10px;
  opacity: 55%;
}
@media (min-width: 736px) {
  .figures_container .main_page_figures .figures_page_head .figures_circle {
    width: 60px;
    height: 60px;
    margin: 0 10px 0 10px;
  }
}
@media (max-width: 736px) {
  .figures_container .main_page_figures .figures_page_head .figures_circle {
    top: 0;
    width: 30px;
    height: 30px;
  }
}
.figures_container .main_page_figures .figures_page_head .header3 {
  display: flex;
  align-items: center;
  height: 100%;
  font-family: Roboto, sans-serif;
  font-weight: 300;
}
@media (min-width: 736px) {
  .figures_container .main_page_figures .figures_page_head .header3 {
    font-size: 24px;
  }
}
@media (max-width: 736px) {
  .figures_container .main_page_figures .figures_page_head .header3 {
    font-size: 16px;
  }
}
.figures_container .main_page_figures .add_figure {
  width: 110px;
  height: 40px;
  background: #000000;
  border-radius: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 15%;
}
@media (max-width: 736px) {
  .figures_container .main_page_figures .add_figure {
    width: 30px;
    right: 0;
  }
}
.figures_container .main_page_figures .add_figure a {
  font-family: Roboto;
  color: #FFFFFF;
  font-size: 14px;
  text-decoration: none;
}
@media (max-width: 736px) {
  .figures_container .main_page_figures .add_figure a {
    font-size: 8px;
  }
}
.figures_container .figures_space_img {
  height: 350px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-repeat: no-repeat;
  z-index: 200;
  background-position-y: -270px;
}
@media (min-width: 736px) {
  .figures_container .figures_space_img {
    background-attachment: fixed;
    background-size: 100vw;
  }
}
@media (max-width: 736px) {
  .figures_container .figures_space_img {
    height: 150px;
    background-size: 100%;
    background-position: 200% 0;
  }
}
.figures_container .figures_box {
  padding-top: 20px;
}
@media (min-width: 736px) {
  .figures_container .figures_box {
    padding-left: 60px;
  }
}
@media (max-width: 736px) {
  .figures_container .figures_box {
    padding-left: 10%;
  }
}
.figures_container .figures_box .description_text {
  width: 600px;
  margin-bottom: 20px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
}
@media (max-width: 736px) {
  .figures_container .figures_box .description_text {
    width: 90%;
    margin-bottom: 10px;
  }
}
.figures_container .figures_box .figures {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
}
@media (min-width: 736px) {
  .figures_container .figures_box .figures {
    margin-right: 80px;
  }
}
.figures_container .figures_box .figures .figure {
  background-color: #595959;
}
@media (min-width: 736px) {
  .figures_container .figures_box .figures .figure {
    margin-right: 10px;
    margin-bottom: 10px;
    height: 250px;
    width: 200px;
  }
}
@media (max-width: 736px) {
  .figures_container .figures_box .figures .figure {
    margin: 5%;
    height: 150px;
    width: 100px;
  }
}

.contact_box {
  font-family: Roboto, sans-serif;
  margin-top: 30px;
  margin-left: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10%;
}
@media (max-width: 736px) {
  .contact_box {
    flex-direction: column;
    align-items: start;
    margin-left: 20px;
  }
}
.contact_box .contact .header1 {
  margin: 0;
  padding: 0;
}
.contact_box .contact .contact_info {
  font-weight: 300;
}
@media (min-width: 736px) {
  .contact_box .contact .contact_info {
    font-size: 20px;
    padding-top: 20px;
  }
}
@media (max-width: 736px) {
  .contact_box .contact .contact_info {
    font-size: 14px;
    margin-block: 15px;
  }
}
.contact_box .contact .contact_info .description_text {
  line-height: 30px;
}
.contact_box .contact .contact_info .header3 {
  margin-top: 50px;
  margin-bottom: 15px;
}
@media (max-width: 736px) {
  .contact_box .contact .contact_info .header3 {
    margin-top: 20px;
  }
}
.contact_box .contact .contact_info .address {
  font-size: 16px;
}
.contact_box .contact .contact_info .address a {
  padding-left: 10px;
  text-decoration: none;
}
.contact_box .form_message {
  font-size: 12px;
  font-weight: 500;
  flex-direction: column;
  width: 50%;
  gap: 5px;
}
.contact_box .form_message .personal_date {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.contact_box .form_message .personal_date label {
  font-weight: 600;
  width: 300px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
.contact_box .form_message .personal_date input {
  font-size: 12px;
  width: 200px;
  height: 20px;
  position: absolute;
  left: 190px;
}
.contact_box .form_message .case, .contact_box .form_message .figure_level, .contact_box .form_message .figure_category {
  font-size: 12px;
  font-family: Roboto;
  width: 400px;
  height: 20px;
  margin-bottom: 15px;
  cursor: pointer;
}
.contact_box .form_message select {
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border-radius: 25px;
}
.contact_box .form_message ::selection {
  background-color: lightsteelblue;
}
.contact_box .form_message option {
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border-radius: 25px;
}
.contact_box .form_message .figure_add_category {
  width: 390px;
  display: flex;
  flex-direction: column;
}
.contact_box .form_message .figure_add_category p {
  font-weight: 600;
  margin-bottom: 15px;
}
.contact_box .box_message {
  display: flex;
  flex-direction: column;
  width: 400px;
}
@media (max-width: 736px) {
  .contact_box .box_message {
    padding-bottom: 60px;
  }
}
.contact_box .box_message .title_message {
  padding-block: 10px;
  font-weight: 600;
}
.contact_box .box_message .textarea {
  margin-bottom: 5px;
}
.contact_box .box_message .agreement {
  font-size: 10px;
}

.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 10px;
  width: 10px;
}

.checkbox {
  cursor: pointer;
  display: flex;
}

.checkbox span {
  height: 10px;
  width: 10px;
  border: 2px solid grey;
  flex-basis: 10px;
  flex-shrink: 0;
  cursor: pointer;
  margin-right: 10px;
}

.figure_add_category .checkbox_category span {
  border: 2px solid grey;
}

.checkbox input:checked + span {
  background-color: #D8D8D8;
  border: 2px lightblue solid;
}

.figure_categories {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
}

.submit {
  font-family: Roboto;
  width: 80px;
  height: 20px;
  font-weight: 300;
  background-color: #595959;
  color: white;
  border: none;
  box-shadow: 1px 2px 5px black;
  margin-left: 25%;
  cursor: pointer;
}

.page_container {
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
}

.main_container {
  position: relative;
  width: 90%;
  height: 100%;
  clear: both;
  right: -10%;
  background-color: #FFFFFF;
}

.header1 {
  font-family: Roboto, sans-serif;
  font-weight: 300;
}
@media (min-width: 736px) {
  .header1 {
    font-size: 50px;
    margin: 0 0 20px 0;
    padding-top: 40px;
  }
}
@media (max-width: 736px) {
  .header1 {
    font-size: 30px;
    margin-block: 20px;
  }
}

.header2 {
  font-family: Roboto;
}
@media (min-width: 736px) {
  .header2 {
    font-size: 24px;
    font-weight: bold;
  }
}
@media (max-width: 736px) {
  .header2 {
    font-size: 14px;
  }
}
.header2 .chosen {
  color: #B02323;
  text-decoration: none;
}
.header2 .not_chosen {
  text-decoration: none;
  color: #000000;
}

.header3 {
  font-family: Roboto;
  font-size: 24px;
  font-weight: 300;
}`, "",{"version":3,"sources":["webpack://./Project/scss/settings/_reset.scss","webpack://./Project/scss/index.scss","webpack://./Project/scss/sections/_header.scss","webpack://./Project/scss/settings/_mixins.scss","webpack://./Project/scss/settings/_variables.scss","webpack://./Project/scss/sections/_aside.scss","webpack://./Project/scss/sections/_footer.scss","webpack://./Project/scss/sections/_main-page.scss","webpack://./Project/scss/sections/_workout.scss","webpack://./Project/scss/sections/_figures.scss","webpack://./Project/scss/sections/_concact.scss"],"names":[],"mappings":"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","sourcesContent":["/* Eric Meyer's CSS Reset\r\n   http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n   This is a Sass partial\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n  display: block;\r\n}\r\nbody {\r\n  line-height: 1;\r\n}\r\nol, ul {\r\n  list-style: none;\r\n}\r\nblockquote, q {\r\n  quotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n  content: '';\r\n  content: none;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n","@import 'settings/reset';\r\n@import \"settings/variables\";\r\n@import \"settings/mixins\";\r\n\r\n@import \"sections/header\";\r\n@import \"sections/aside\";\r\n@import \"sections/footer\";\r\n@import \"sections/main-page\";\r\n@import \"sections/workout\";\r\n@import \"sections/figures\";\r\n@import \"sections/concact\";\r\n\r\n.page_container{\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 100%;\r\n  width: 100%;\r\n  //background-color: $color-black-background;\r\n}\r\n.main_container{\r\n  position: relative;\r\n  width: 90%;\r\n  height: 100%;\r\n  clear: both;\r\n  right: -10%;\r\n  background-color: $color-white-background;\r\n}\r\n\r\n.header1{\r\n  font-family: $font-primary, sans-serif;\r\n  font-weight: 300;\r\n  @include desktop {\r\n    font-size: 50px;\r\n    margin: 0 0 20px 0;\r\n    padding-top: 40px;\r\n  }\r\n  @include mobile{\r\n    font-size: 30px;\r\n    margin-block: 20px;\r\n  }\r\n}\r\n\r\n.header2{\r\n  font-family: $font-primary;\r\n  @include desktop {\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n  }\r\n  @include mobile{\r\n    font-size: 14px;\r\n  }\r\n  .chosen{\r\n    color: $color-red;\r\n    text-decoration: none;\r\n  }\r\n  .not_chosen{\r\n    text-decoration: none;\r\n    color: $color-font-black;\r\n  }\r\n}\r\n.header3{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.menu_main-container {\r\n  height: 60px;\r\n  top: 10px;\r\n  background-color: white;\r\n  z-index: 500;\r\n  position: sticky;\r\n  box-shadow: 2px 3px 3px 2px $color-soft-grey;\r\n  //border-bottom: 2px black solid;\r\n  @include mobile {\r\n    width: 90vw;\r\n  }\r\n  .menu_main {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    @include desktop {\r\n      gap: 22px;\r\n      margin-left: 100px;\r\n    }\r\n    @include mobile{\r\n      gap: 5%;\r\n      margin-left: 10%;\r\n      line-height: 10px;\r\n    }\r\n    .menu_main_element, a{\r\n\r\n      @include desktop{\r\n        font-size: 16px;\r\n      }\r\n      @include mobile{\r\n        font-size: 10px;\r\n      }\r\n      flex-direction: row;\r\n      font-family: $font-primary;\r\n      font-weight: 300;\r\n      color: $color-font-black;\r\n      text-decoration: none;\r\n    }\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n\r\n@mixin desktop {\r\n  @media (min-width: 736px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile {\r\n  @media (max-width: 736px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin header1 {\r\n  font-family: $font-primary;\r\n  font-size: 50px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin header2{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin header3{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin description{\r\n  font-family: $font-primary;\r\n  font-size: 14px;\r\n  color: $color-font-black;\r\n}","\r\n$color-font-black: #000000;\r\n$color-font-white: #FFFFFF;\r\n\r\n$color-red: #B02323;\r\n$color-black-background: #000000;\r\n$color-nearly-black: #1E1E1E;\r\n$color-white-background: #FFFFFF;\r\n$color-soft-grey: #D8D8D8;\r\n$color-chalk-grey: #D6D6D6;\r\n$color-grey: #595959;\r\n\r\n$font-primary: Roboto;","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.menu_aside-container {\r\n  height: 100vh;\r\n  position: absolute;\r\n  .menu_aside {\r\n    @include mobile{\r\n      width: 15%;\r\n    }\r\n    position: fixed;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-top: 103px;\r\n    gap: 18px;\r\n    height: 100%;\r\n    width: 10%;\r\n    background-color: $color-black-background;\r\n    .menu_aside_element {\r\n      margin: 0 0 0 15px;\r\n      @include mobile {\r\n      margin: 0 0 0 2px;\r\n      }\r\n      a{\r\n        text-decoration: none;\r\n        font-size: 14px;\r\n        font-family: $font-primary, sans-serif;\r\n        font-weight: bold;\r\n        color: $color-font-white;\r\n        @include mobile{\r\n          font-size: 6px;\r\n          font-weight: 300;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.footer_container{\r\n  clear: both;\r\n  position: fixed;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  width: 90%;\r\n  height: 80px;\r\n  background-color: black;\r\n  @include mobile{\r\n    width: 90%;\r\n    right: 0;\r\n  }\r\n\r\n  .menu_footer{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 50px;\r\n    width: 100%;\r\n    padding: 0 30px 0 30px;\r\n    background-color: $color-nearly-black;\r\n    @include mobile{\r\n      padding: 5px;\r\n      justify-content: left;\r\n    }\r\n    .menu_footer_list{\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: center;\r\n      gap: 50px;\r\n      margin: 0 15px 0 0;\r\n\r\n      @include mobile{\r\n        gap: 10%;\r\n      }\r\n      a {\r\n        font-family: $font-primary;\r\n        font-size: 12px;\r\n        text-decoration: none;\r\n        color: #928E8E;\r\n        @include mobile{\r\n          font-size: 10px;\r\n        }\r\n      }\r\n    }\r\n    a{\r\n      color: $color-soft-grey;\r\n    }\r\n  }\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.one_pager{\r\n  height: 90vh;\r\n}\r\n.main_page{\r\n  background-image: url(\"../img/img_main_page.jpeg\");\r\n  background-repeat: no-repeat;\r\n  z-index: 200;\r\n  @include desktop {\r\n    background-attachment: fixed;\r\n    background-size: 66.5%;\r\n    //background-position-x: 175%;\r\n    background-position: right;\r\n    margin-left: 60px;\r\n  }\r\n  @include mobile{\r\n    background-size: 100%;\r\n    width: 90%;\r\n    margin-left: 5%;\r\n    right: 10px;\r\n  }\r\n\r\n  .circles_workout-container{\r\n    display: flex;\r\n    @include mobile {\r\n      flex-wrap: wrap;\r\n      justify-content: space-around;\r\n    }\r\n\r\n    .circles_workout{\r\n      background-color: $color-white-background;\r\n      border-radius: 50%;\r\n      width: 170px;\r\n      height: 170px;\r\n      flex-direction: row;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      margin-right: 20px;\r\n      @include mobile{\r\n        width: 100px;\r\n        height: 100px;\r\n        margin: 0;\r\n      }\r\n    }\r\n\r\n  }\r\n  .circles_workout-container :nth-of-type(1){\r\n    border: 10px #E7E6E6 solid;\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n  .circles_workout-container :nth-child(2){\r\n    border: 10px #CCCBCB solid;\r\n    position: relative;\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n  .circles_workout-container :nth-of-type(3){\r\n    border: 10px #9D9D9D solid;\r\n    position: relative;\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n.about_platform{\r\n  width: 295px;\r\n\r\n  .about_platform_text{\r\n    margin-right: 20px;\r\n    padding-bottom: 20px;\r\n    font-family: $font-primary;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n\r\n  }\r\n}\r\n  .header3 {\r\n    margin-block: 20px 10px;\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n\r\n.workout{\r\n  @include desktop {\r\n    padding-left: 60px;\r\n  }\r\n  @include mobile{\r\n    padding: 5%;\r\n  }\r\n  background-color: $color-chalk-grey;\r\n  .header4{\r\n    padding-block: 10px 20px;\r\n    font-family: $font-primary;\r\n    font-size: 24px;\r\n    font-weight: 300;\r\n    color: $color-red;\r\n  }\r\n  .description_text{\r\n    margin-bottom: 20px;\r\n    font-family: $font-primary;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: $color-font-white;\r\n  }\r\n  .workout_imgages {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    @include desktop {\r\n      margin-right: 100px;\r\n      margin-bottom: 60px;\r\n    }\r\n    @include mobile{\r\n      margin-bottom: 20%;\r\n    }\r\n    .workout_image {\r\n      background-color: $color-white-background;\r\n      @include desktop{\r\n        margin-right: 60px;\r\n        margin-bottom: 50px;\r\n        height: 300px;\r\n        width: 250px;\r\n      }\r\n      @include mobile{\r\n        margin: 5%;\r\n\r\n        height: 150px;\r\n        width: 100px;\r\n      }\r\n    }\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.figures_container {\r\n  background-color: $color-white-background;\r\n\r\n  .main_page_figures {\r\n    padding-bottom: 100px;\r\n    .figures_page_head {\r\n      display: flex;\r\n      flex-direction: row;\r\n      margin-top: 50px;\r\n      margin-bottom: 20px;\r\n\r\n      .figures_stripe {\r\n        width: 575px;\r\n        height: 40px;\r\n        background-color: #C7C7C7;\r\n        display: flex;\r\n        flex-direction: row;\r\n      }\r\n\r\n      .figures_circle {\r\n        background-color: $color-white-background;\r\n        border-radius: 50%;\r\n        position: relative;\r\n        top: -10px;\r\n        opacity: 55%;\r\n        @include desktop {\r\n          width: 60px;\r\n          height: 60px;\r\n          margin: 0 10px 0 10px;\r\n        }\r\n        @include mobile {\r\n          top: 0;\r\n          width: 30px;\r\n          height: 30px;\r\n        }\r\n      }\r\n\r\n      .header3 {\r\n        display: flex;\r\n        align-items: center;\r\n        height: 100%;\r\n        font-family: $font-primary, sans-serif;\r\n        font-weight: 300;\r\n        @include desktop {\r\n          font-size: 24px;\r\n        }\r\n        @include mobile {\r\n          font-size: 16px;\r\n        }\r\n      }\r\n    }\r\n\r\n    .add_figure {\r\n      width: 110px;\r\n      height: 40px;\r\n      background: $color-black-background;\r\n      border-radius: 30%;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      position: absolute;\r\n      right: 15%;\r\n      @include mobile{\r\n        width: 30px;\r\n        right: 0;\r\n      }\r\n      a {\r\n        font-family: $font-primary;\r\n        color: $color-font-white;\r\n        font-size: 14px;\r\n        text-decoration: none;\r\n        @include mobile{\r\n          font-size: 8px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .figures_space_img {\r\n    height: 350px;\r\n    background-image: url(\"../img/PD_img_3_szpagat.jpeg\");\r\n    background-repeat: no-repeat;\r\n    z-index: 200;\r\n    background-position-y: -270px;\r\n    @include desktop {\r\n      background-attachment: fixed;\r\n      background-size: 100vw;\r\n    }\r\n    @include mobile {\r\n      height: 150px;\r\n      background-size: 100%;\r\n      background-position: 200% 0;\r\n    }\r\n  }\r\n\r\n  .figures_box {\r\n    padding-top: 20px;\r\n    @include desktop {\r\n      padding-left: 60px;\r\n    }\r\n    @include mobile {\r\n      padding-left: 10%;\r\n    }\r\n    .description_text{\r\n      width: 600px;\r\n      margin-bottom: 20px;\r\n      font-family: $font-primary;\r\n      font-size: 14px;\r\n      font-weight: 400;\r\n      color: $color-font-black;\r\n      @include mobile{\r\n        width: 90%;\r\n        margin-bottom: 10px;\r\n      }\r\n    }\r\n    .figures {\r\n      display: flex;\r\n      flex-direction: row;\r\n      flex-wrap: wrap;\r\n      justify-content: left;\r\n      @include desktop {\r\n        margin-right: 80px;\r\n      }\r\n      .figure {\r\n        background-color: $color-grey;\r\n        @include desktop {\r\n          margin-right: 10px;\r\n          margin-bottom: 10px;\r\n          height: 250px;\r\n          width: 200px;\r\n        }\r\n        @include mobile {\r\n          margin: 5%;\r\n          height: 150px;\r\n          width: 100px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n\r\n.contact_box {\r\n  font-family: $font-primary, sans-serif;\r\n  margin-top: 30px;\r\n  margin-left: 40px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 10%;\r\n  @include mobile {\r\n    flex-direction: column;\r\n    align-items: start;\r\n    margin-left: 20px;\r\n  }\r\n\r\n  .contact {\r\n    .header1 {\r\n      margin: 0;\r\n      padding: 0;\r\n    }\r\n\r\n    .contact_info {\r\n      font-weight: 300;\r\n      @include desktop {\r\n        font-size: 20px;\r\n        padding-top: 20px;\r\n      }\r\n      @include mobile {\r\n        font-size: 14px;\r\n        margin-block: 15px;\r\n      }\r\n\r\n      .description_text {\r\n        line-height: 30px;\r\n      }\r\n\r\n      .header3 {\r\n        margin-top: 50px;\r\n        margin-bottom: 15px;\r\n        @include mobile {\r\n          margin-top: 20px;\r\n        }\r\n      }\r\n\r\n      .address {\r\n        font-size: 16px;\r\n\r\n        a {\r\n          padding-left: 10px;\r\n          text-decoration: none;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .form_message {\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    flex-direction: column;\r\n    width: 50%;\r\n    gap: 5px;\r\n    \r\n    .personal_date {\r\n      position: relative;\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 5px;\r\n\r\n      label {\r\n        font-weight: 600;\r\n        width: 300px;\r\n        margin-bottom: 20px;\r\n        display: flex;\r\n        align-items: center\r\n      }\r\n\r\n      input {\r\n        font-size: 12px;\r\n        width: 200px;\r\n        height: 20px;\r\n        position: absolute;\r\n        left: 190px;\r\n      }\r\n    }\r\n\r\n    .case, .figure_level, .figure_category {\r\n      font-size: 12px;\r\n      font-family: $font-primary;\r\n      width: 400px;\r\n      height: 20px;\r\n      margin-bottom: 15px;\r\n      cursor: pointer;\r\n\r\n    }\r\n\r\n    select {\r\n      -webkit-border-radius: 25px;\r\n      -moz-border-radius: 25px;\r\n      border-radius: 25px;\r\n    }\r\n\r\n    ::selection {\r\n      background-color: lightsteelblue;\r\n    }\r\n\r\n    option {\r\n      -webkit-border-radius: 25px;\r\n      -moz-border-radius: 25px;\r\n      border-radius: 25px;\r\n    }\r\n\r\n    .figure_add_category {\r\n      width: 390px;\r\n      display: flex;\r\n      flex-direction: column;\r\n\r\n      p {\r\n        font-weight: 600;\r\n        margin-bottom: 15px;\r\n      }\r\n\r\n    }\r\n  }\r\n\r\n  .box_message {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 400px;\r\n    @include mobile {\r\n      padding-bottom: 60px;\r\n    }\r\n\r\n    .title_message {\r\n      padding-block: 10px;\r\n      font-weight: 600;\r\n    }\r\n\r\n    .textarea {\r\n      margin-bottom: 5px;\r\n    }\r\n\r\n    .agreement {\r\n      font-size: 10px;\r\n    }\r\n\r\n  }\r\n\r\n}\r\n\r\n.checkbox input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  height: 10px;\r\n  width: 10px;\r\n}\r\n\r\n.checkbox {\r\n  cursor: pointer;\r\n  display: flex;\r\n}\r\n\r\n.checkbox span {\r\n  height: 10px;\r\n  width: 10px;\r\n  border: 2px solid grey;\r\n  flex-basis: 10px;\r\n  flex-shrink: 0;\r\n  cursor: pointer;\r\n  margin-right: 10px;\r\n}\r\n\r\n.figure_add_category {\r\n  .checkbox_category span {\r\n    border: 2px solid grey;\r\n  }\r\n}\r\n\r\n.checkbox input:checked + span {\r\n  background-color: $color-soft-grey;\r\n  border: 2px lightblue solid;\r\n\r\n}\r\n\r\n.figure_categories {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n}\r\n\r\n.submit {\r\n  font-family: $font-primary;\r\n  width: 80px;\r\n  height: 20px;\r\n  font-weight: 300;\r\n  background-color: $color-grey;\r\n  color: white;\r\n  border: none;\r\n  box-shadow: 1px 2px 5px black;\r\n  margin-left: 25%;\r\n  cursor: pointer;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ba6d5e49f8e26e0cb5e4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hYjIxYmMzYjMwYzU2MmE0YmM2ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QyxpRUFBNEM7QUFDeEYsNENBQTRDLGlFQUErQztBQUMzRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywra0JBQStrQixLQUFLLGlCQUFpQixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLFdBQVcsTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFlBQVksWUFBWSxXQUFXLFlBQVksTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsYUFBYSxPQUFPLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsUUFBUSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLGFBQWEsYUFBYSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxhQUFhLE9BQU8sTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsYUFBYSxhQUFhLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sWUFBWSxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLFdBQVcsV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxPQUFPLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxhQUFhLGFBQWEsT0FBTyxN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LDZCQUE2QixnQ0FBZ0MsV0FBVyxhQUFhLE9BQU8sd0JBQXdCLHNCQUFzQiwrQkFBK0IscUJBQXFCLHlCQUF5QiwrQkFBK0IsU0FBUyw0QkFBNEIsOEJBQThCLDJCQUEyQixTQUFTLHVCQUF1Qiw2QkFBNkIsU0FBUyx3QkFBd0IsMEJBQTBCLFNBQVMsV0FBVyxTQUFTLHlCQUF5Qix5QkFBeUIsaUJBQWlCLHNCQUFzQixtQkFBbUIsa0JBQWtCLEtBQUssbUJBQW1CLHNCQUFzQixvQkFBb0IsS0FBSyx3QkFBd0IsbUJBQW1CLGtCQUFrQiw2QkFBNkIsdUJBQXVCLHFCQUFxQixzQkFBc0IseUJBQXlCLEtBQUssOEJBQThCLCtCQUErQiwrQkFBK0IsT0FBTyxLQUFLLHdDQUF3Qyx5Q0FBeUMsa0NBQWtDLFNBQVMsNEJBQTRCLG9CQUFvQiwwQkFBMEIsc0JBQXNCLGVBQWUsS0FBSyxpQkFBaUIsaUNBQWlDLGtCQUFrQixtQkFBbUIsdUJBQXVCLG9DQUFvQyxtQkFBbUIsbUJBQW1CLG9DQUFvQyx1QkFBdUIsc0JBQXNCLEtBQUssbUJBQW1CO0FBQ2hodkI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7O1VDdndCdkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9Qcm9qZWN0L3Njc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvaW1nX21haW5fcGFnZS5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1nL1BEX2ltZ18zX3N6cGFnYXQuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEVyaWMgTWV5ZXIncyBDU1MgUmVzZXRcbiAgIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4gICBUaGlzIGlzIGEgU2FzcyBwYXJ0aWFsXG4qL1xuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsIHEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4ubWVudV9tYWluLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNjBweDtcbiAgdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogNTAwO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3gtc2hhZG93OiAycHggM3B4IDNweCAycHggI0Q4RDhEODtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWVudV9tYWluLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwdnc7XG4gIH1cbn1cbi5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfbWFpbi1jb250YWluZXIgLm1lbnVfbWFpbiB7XG4gICAgZ2FwOiAyMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4ge1xuICAgIGdhcDogNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgfVxufVxuLm1lbnVfbWFpbi1jb250YWluZXIgLm1lbnVfbWFpbiAubWVudV9tYWluX2VsZW1lbnQsIC5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4gYSB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfbWFpbi1jb250YWluZXIgLm1lbnVfbWFpbiAubWVudV9tYWluX2VsZW1lbnQsIC5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4gYSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfbWFpbi1jb250YWluZXIgLm1lbnVfbWFpbiAubWVudV9tYWluX2VsZW1lbnQsIC5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4gYSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG5cbi5tZW51X2FzaWRlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5tZW51X2FzaWRlLWNvbnRhaW5lciAubWVudV9hc2lkZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDEwM3B4O1xuICBnYXA6IDE4cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWVudV9hc2lkZS1jb250YWluZXIgLm1lbnVfYXNpZGUge1xuICAgIHdpZHRoOiAxNSU7XG4gIH1cbn1cbi5tZW51X2FzaWRlLWNvbnRhaW5lciAubWVudV9hc2lkZSAubWVudV9hc2lkZV9lbGVtZW50IHtcbiAgbWFyZ2luOiAwIDAgMCAxNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X2FzaWRlLWNvbnRhaW5lciAubWVudV9hc2lkZSAubWVudV9hc2lkZV9lbGVtZW50IHtcbiAgICBtYXJnaW46IDAgMCAwIDJweDtcbiAgfVxufVxuLm1lbnVfYXNpZGUtY29udGFpbmVyIC5tZW51X2FzaWRlIC5tZW51X2FzaWRlX2VsZW1lbnQgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfYXNpZGUtY29udGFpbmVyIC5tZW51X2FzaWRlIC5tZW51X2FzaWRlX2VsZW1lbnQgYSB7XG4gICAgZm9udC1zaXplOiA2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxufVxuXG4uZm9vdGVyX2NvbnRhaW5lciB7XG4gIGNsZWFyOiBib3RoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZm9vdGVyX2NvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICByaWdodDogMDtcbiAgfVxufVxuLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDMwcHggMCAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUxRTFFO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5mb290ZXJfY29udGFpbmVyIC5tZW51X2Zvb3RlciB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgfVxufVxuLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIC5tZW51X2Zvb3Rlcl9saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1MHB4O1xuICBtYXJnaW46IDAgMTVweCAwIDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIC5tZW51X2Zvb3Rlcl9saXN0IHtcbiAgICBnYXA6IDEwJTtcbiAgfVxufVxuLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIC5tZW51X2Zvb3Rlcl9saXN0IGEge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM5MjhFOEU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIC5tZW51X2Zvb3Rlcl9saXN0IGEge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIGEge1xuICBjb2xvcjogI0Q4RDhEODtcbn1cblxuLm9uZV9wYWdlciB7XG4gIGhlaWdodDogOTB2aDtcbn1cblxuLm1haW5fcGFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgei1pbmRleDogMjAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5tYWluX3BhZ2Uge1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA2Ni41JTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tYWluX3BhZ2Uge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICByaWdodDogMTBweDtcbiAgfVxufVxuLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG59XG4ubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIC5jaXJjbGVzX3dvcmtvdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNzBweDtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIC5jaXJjbGVzX3dvcmtvdXQge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMSkge1xuICBib3JkZXI6IDEwcHggI0U3RTZFNiBzb2xpZDtcbn1cbi5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1vZi10eXBlKDEpIGgyLCAubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgxKSBhIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLWNoaWxkKDIpIHtcbiAgYm9yZGVyOiAxMHB4ICNDQ0NCQ0Igc29saWQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1jaGlsZCgyKSBoMiwgLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLWNoaWxkKDIpIGEge1xuICBib3JkZXI6IG5vbmU7XG59XG4ubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgzKSB7XG4gIGJvcmRlcjogMTBweCAjOUQ5RDlEIHNvbGlkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgzKSBoMiwgLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMykgYSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5tYWluX3BhZ2UgLmFib3V0X3BsYXRmb3JtIHtcbiAgd2lkdGg6IDI5NXB4O1xufVxuLm1haW5fcGFnZSAuYWJvdXRfcGxhdGZvcm0gLmFib3V0X3BsYXRmb3JtX3RleHQge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ubWFpbl9wYWdlIC5oZWFkZXIzIHtcbiAgbWFyZ2luLWJsb2NrOiAyMHB4IDEwcHg7XG59XG5cbi53b3Jrb3V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q2RDZENjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAud29ya291dCB7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLndvcmtvdXQge1xuICAgIHBhZGRpbmc6IDUlO1xuICB9XG59XG4ud29ya291dCAuaGVhZGVyNCB7XG4gIHBhZGRpbmctYmxvY2s6IDEwcHggMjBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogI0IwMjMyMztcbn1cbi53b3Jrb3V0IC5kZXNjcmlwdGlvbl90ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi53b3Jrb3V0IC53b3Jrb3V0X2ltZ2FnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC53b3Jrb3V0IC53b3Jrb3V0X2ltZ2FnZXMge1xuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC53b3Jrb3V0IC53b3Jrb3V0X2ltZ2FnZXMge1xuICAgIG1hcmdpbi1ib3R0b206IDIwJTtcbiAgfVxufVxuLndvcmtvdXQgLndvcmtvdXRfaW1nYWdlcyAud29ya291dF9pbWFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLndvcmtvdXQgLndvcmtvdXRfaW1nYWdlcyAud29ya291dF9pbWFnZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAud29ya291dCAud29ya291dF9pbWdhZ2VzIC53b3Jrb3V0X2ltYWdlIHtcbiAgICBtYXJnaW46IDUlO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG59XG5cbi5maWd1cmVzX2NvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG4uZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIHtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuZmlndXJlc19wYWdlX2hlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuZmlndXJlc19wYWdlX2hlYWQgLmZpZ3VyZXNfc3RyaXBlIHtcbiAgd2lkdGg6IDU3NXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDN0M3Qzc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5maWd1cmVzX3BhZ2VfaGVhZCAuZmlndXJlc19jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTBweDtcbiAgb3BhY2l0eTogNTUlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIC5maWd1cmVzX2NpcmNsZSB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIC5maWd1cmVzX2NpcmNsZSB7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuZmlndXJlc19wYWdlX2hlYWQgLmhlYWRlcjMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuZmlndXJlc19wYWdlX2hlYWQgLmhlYWRlcjMge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIC5oZWFkZXIzIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmFkZF9maWd1cmUge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTUlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmFkZF9maWd1cmUge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5hZGRfZmlndXJlIGEge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuYWRkX2ZpZ3VyZSBhIHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgfVxufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX3NwYWNlX2ltZyB7XG4gIGhlaWdodDogMzUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgei1pbmRleDogMjAwO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0yNzBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfc3BhY2VfaW1nIHtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdnc7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfc3BhY2VfaW1nIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3gge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgfVxufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZGVzY3JpcHRpb25fdGV4dCB7XG4gIHdpZHRoOiA2MDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5kZXNjcmlwdGlvbl90ZXh0IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmZpZ3VyZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5maWd1cmVzIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmZpZ3VyZXMgLmZpZ3VyZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1OTU5NTk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZmlndXJlcyAuZmlndXJlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmZpZ3VyZXMgLmZpZ3VyZSB7XG4gICAgbWFyZ2luOiA1JTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxufVxuXG4uY29udGFjdF9ib3gge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5jb250YWN0IC5oZWFkZXIxIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8ge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5jb250YWN0X2JveCAuY29udGFjdCAuY29udGFjdF9pbmZvIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3ggLmNvbnRhY3QgLmNvbnRhY3RfaW5mbyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ibG9jazogMTVweDtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8gLmRlc2NyaXB0aW9uX3RleHQge1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cbi5jb250YWN0X2JveCAuY29udGFjdCAuY29udGFjdF9pbmZvIC5oZWFkZXIzIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3ggLmNvbnRhY3QgLmNvbnRhY3RfaW5mbyAuaGVhZGVyMyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8gLmFkZHJlc3Mge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGFjdF9ib3ggLmNvbnRhY3QgLmNvbnRhY3RfaW5mbyAuYWRkcmVzcyBhIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwJTtcbiAgZ2FwOiA1cHg7XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAucGVyc29uYWxfZGF0ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cHg7XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAucGVyc29uYWxfZGF0ZSBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5wZXJzb25hbF9kYXRlIGlucHV0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxOTBweDtcbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5jYXNlLCAuY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAuZmlndXJlX2xldmVsLCAuY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAuZmlndXJlX2NhdGVnb3J5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2Ugc2VsZWN0IHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSA6OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c3RlZWxibHVlO1xufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2Ugb3B0aW9uIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAuZmlndXJlX2FkZF9jYXRlZ29yeSB7XG4gIHdpZHRoOiAzOTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5maWd1cmVfYWRkX2NhdGVnb3J5IHAge1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmNvbnRhY3RfYm94IC5ib3hfbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA0MDBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3ggLmJveF9tZXNzYWdlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5ib3hfbWVzc2FnZSAudGl0bGVfbWVzc2FnZSB7XG4gIHBhZGRpbmctYmxvY2s6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY29udGFjdF9ib3ggLmJveF9tZXNzYWdlIC50ZXh0YXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jb250YWN0X2JveCAuYm94X21lc3NhZ2UgLmFncmVlbWVudCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmNoZWNrYm94IGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG59XG5cbi5jaGVja2JveCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNoZWNrYm94IHNwYW4ge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICBmbGV4LWJhc2lzOiAxMHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5maWd1cmVfYWRkX2NhdGVnb3J5IC5jaGVja2JveF9jYXRlZ29yeSBzcGFuIHtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbn1cblxuLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyBzcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q4RDhEODtcbiAgYm9yZGVyOiAycHggbGlnaHRibHVlIHNvbGlkO1xufVxuXG4uZmlndXJlX2NhdGVnb3JpZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogOHB4O1xufVxuXG4uc3VibWl0IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NTk1OTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDFweCAycHggNXB4IGJsYWNrO1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYWdlX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1haW5fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNsZWFyOiBib3RoO1xuICByaWdodDogLTEwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cblxuLmhlYWRlcjEge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5oZWFkZXIxIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmhlYWRlcjEge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tYmxvY2s6IDIwcHg7XG4gIH1cbn1cblxuLmhlYWRlcjIge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5oZWFkZXIyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuaGVhZGVyMiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4uaGVhZGVyMiAuY2hvc2VuIHtcbiAgY29sb3I6ICNCMDIzMjM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5oZWFkZXIyIC5ub3RfY2hvc2VuIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmhlYWRlcjMge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2V0dGluZ3MvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2V0dGluZ3MvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2V0dGluZ3MvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX2FzaWRlLnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fbWFpbi1wYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fd29ya291dC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX2ZpZ3VyZXMuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NlY3Rpb25zL19jb25jYWN0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7O0NBQUE7QUFPQTs7Ozs7Ozs7Ozs7OztFQWFFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUNBRjs7QURFQSxnREFBQTtBQUNBOztFQUVFLGNBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7QUNFRjs7QURBQTtFQUNFLGdCQUFBO0FDR0Y7O0FEREE7RUFDRSxZQUFBO0FDSUY7O0FERkE7O0VBRUUsV0FBQTtFQUNBLGFBQUE7QUNLRjs7QURIQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUNNRjs7QUNuREE7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7QURzREY7QUV0REU7RURORjtJQVNJLFdBQUE7RUR1REY7QUFDRjtBQ3RERTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUR3REo7QUV0RUU7RURXQTtJQUtJLFNBQUE7SUFDQSxrQkFBQTtFRDBESjtBQUNGO0FFdEVFO0VES0E7SUFTSSxPQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFRDRESjtBQUNGO0FDM0RJO0VBUUUsbUJBQUE7RUFDQSxtQkV4QlM7RUZ5QlQsZ0JBQUE7RUFDQSxjRXJDYTtFRnNDYixxQkFBQTtBRHNETjtBRTFGRTtFRHdCRTtJQUdJLGVBQUE7RURtRU47QUFDRjtBRXpGRTtFRGtCRTtJQU1JLGVBQUE7RURxRU47QUFDRjs7QUlwR0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUp1R0Y7QUl0R0U7RUFJRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkRacUI7QUhpSHpCO0FFN0dFO0VFSEE7SUFFSSxVQUFBO0VKa0hKO0FBQ0Y7QUl6R0k7RUFDRSxrQkFBQTtBSjJHTjtBRXJIRTtFRVNFO0lBR0UsaUJBQUE7RUo2R0o7QUFDRjtBSTVHTTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRDFCVztBSHdJbkI7QUVqSUU7RUVjSTtJQU9JLGNBQUE7SUFDQSxnQkFBQTtFSmdIUjtBQUNGOztBSzdJQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUxnSkY7QUVsSkU7RUdORjtJQVVJLFVBQUE7SUFDQSxRQUFBO0VMa0pGO0FBQ0Y7QUtoSkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHlCRm5CaUI7QUhxS3JCO0FFbEtFO0VHUUE7SUFVSSxZQUFBO0lBQ0EscUJBQUE7RUxvSko7QUFDRjtBS25KSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FMcUpOO0FFL0tFO0VHcUJFO0lBUUksUUFBQTtFTHNKTjtBQUNGO0FLckpNO0VBQ0UsbUJGN0JPO0VFOEJQLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUx1SlI7QUUxTEU7RUcrQkk7SUFNSSxlQUFBO0VMeUpSO0FBQ0Y7QUt0Skk7RUFDRSxjRjNDWTtBSG1NbEI7O0FNeE1BO0VBQ0UsWUFBQTtBTjJNRjs7QU16TUE7RUFDRSx5REFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBTjRNRjtBRWxORTtFSUdGO0lBS0ksNEJBQUE7SUFDQSxzQkFBQTtJQUVBLDBCQUFBO0lBQ0EsaUJBQUE7RU42TUY7QUFDRjtBRXBORTtFSUhGO0lBWUkscUJBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7RU4rTUY7QUFDRjtBTTdNRTtFQUNFLGFBQUE7QU4rTUo7QUUvTkU7RUllQTtJQUdJLGVBQUE7SUFDQSw2QkFBQTtFTmlOSjtBQUNGO0FNL01JO0VBQ0UseUJIekJtQjtFRzBCbkIsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBTmlOTjtBRWhQRTtFSXNCRTtJQVdJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsU0FBQTtFTm1OTjtBQUNGO0FNL01FO0VBQ0UsMEJBQUE7QU5pTko7QU1oTkk7RUFDRSxZQUFBO0FOa05OO0FNL01FO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtBTmlOSjtBTWhOSTtFQUNFLFlBQUE7QU5rTk47QU0vTUU7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0FOaU5KO0FNaE5JO0VBQ0UsWUFBQTtBTmtOTjtBTS9NQTtFQUNFLFlBQUE7QU5pTkY7QU0vTUU7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJIL0RXO0VHZ0VYLGVBQUE7RUFDQSxnQkFBQTtBTmlOSjtBTTdNRTtFQUNFLHVCQUFBO0FOK01KOztBTzdSQTtFQU9FLHlCSkZpQjtBSDRSbkI7QUVsU0U7RUtDRjtJQUVJLGtCQUFBO0VQbVNGO0FBQ0Y7QUVqU0U7RUtMRjtJQUtJLFdBQUE7RVBxU0Y7QUFDRjtBT25TRTtFQUNFLHdCQUFBO0VBQ0EsbUJKRlc7RUlHWCxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjSmJRO0FIa1RaO0FPblNFO0VBQ0UsbUJBQUE7RUFDQSxtQkpUVztFSVVYLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNKdEJlO0FIMlRuQjtBT25TRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBUHFTSjtBRWhVRTtFS3VCQTtJQU1JLG1CQUFBO0lBQ0EsbUJBQUE7RVB1U0o7QUFDRjtBRWhVRTtFS2lCQTtJQVVJLGtCQUFBO0VQeVNKO0FBQ0Y7QU94U0k7RUFDRSx5QkpoQ21CO0FIMFV6QjtBRTlVRTtFS21DRTtJQUdJLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtFUDRTTjtBQUNGO0FFaFZFO0VLNkJFO0lBU0ksVUFBQTtJQUVBLGFBQUE7SUFDQSxZQUFBO0VQNlNOO0FBQ0Y7O0FRN1ZBO0VBQ0UseUJMR3VCO0FINlZ6QjtBUTlWRTtFQUNFLHFCQUFBO0FSZ1dKO0FRL1ZJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBUmlXTjtBUS9WTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QVJpV1I7QVE5Vk07RUFDRSx5QkxoQmlCO0VLaUJqQixrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QVJnV1I7QUV4WEU7RU1tQkk7SUFPSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHFCQUFBO0VSa1dSO0FBQ0Y7QUV6WEU7RU1hSTtJQVlJLE1BQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFUm9XUjtBQUNGO0FRaldNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QVJtV1I7QUU3WUU7RU1xQ0k7SUFPSSxlQUFBO0VScVdSO0FBQ0Y7QUU1WUU7RU0rQkk7SUFVSSxlQUFBO0VSdVdSO0FBQ0Y7QVFuV0k7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CTHJEbUI7RUtzRG5CLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QVJxV047QUU1WkU7RU04Q0U7SUFXSSxXQUFBO0lBQ0EsUUFBQTtFUnVXTjtBQUNGO0FRdFdNO0VBQ0UsbUJMMURPO0VLMkRQLGNMckVXO0VLc0VYLGVBQUE7RUFDQSxxQkFBQTtBUndXUjtBRXhhRTtFTTRESTtJQU1JLGNBQUE7RVIwV1I7QUFDRjtBUXJXRTtFQUNFLGFBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FSdVdKO0FFMWJFO0VNOEVBO0lBT0ksNEJBQUE7SUFDQSxzQkFBQTtFUnlXSjtBQUNGO0FFMWJFO0VNd0VBO0lBV0ksYUFBQTtJQUNBLHFCQUFBO0lBQ0EsMkJBQUE7RVIyV0o7QUFDRjtBUXhXRTtFQUNFLGlCQUFBO0FSMFdKO0FFMWNFO0VNK0ZBO0lBR0ksa0JBQUE7RVI0V0o7QUFDRjtBRXpjRTtFTXlGQTtJQU1JLGlCQUFBO0VSOFdKO0FBQ0Y7QVE3V0k7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkxqR1M7RUtrR1QsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0wvR2E7QUg4ZG5CO0FFdGRFO0VNaUdFO0lBUUksVUFBQTtJQUNBLG1CQUFBO0VSaVhOO0FBQ0Y7QVEvV0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QVJpWE47QUV4ZUU7RU1tSEU7SUFNSSxrQkFBQTtFUm1YTjtBQUNGO0FRbFhNO0VBQ0UseUJMckhLO0FIeWViO0FFaGZFO0VNMkhJO0lBR0ksa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0VSc1hSO0FBQ0Y7QUVsZkU7RU1xSEk7SUFTSSxVQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7RVJ3WFI7QUFDRjs7QVM5ZkE7RUFDRSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QVRpZ0JGO0FFbmdCRTtFT0xGO0lBU0ksc0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VUbWdCRjtBQUNGO0FTaGdCSTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FUa2dCTjtBUy9mSTtFQUNFLGdCQUFBO0FUaWdCTjtBRXZoQkU7RU9xQkU7SUFHSSxlQUFBO0lBQ0EsaUJBQUE7RVRtZ0JOO0FBQ0Y7QUV2aEJFO0VPZUU7SUFPSSxlQUFBO0lBQ0Esa0JBQUE7RVRxZ0JOO0FBQ0Y7QVNuZ0JNO0VBQ0UsaUJBQUE7QVRxZ0JSO0FTbGdCTTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QVRvZ0JSO0FFcGlCRTtFTzhCSTtJQUlJLGdCQUFBO0VUc2dCUjtBQUNGO0FTbmdCTTtFQUNFLGVBQUE7QVRxZ0JSO0FTbmdCUTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QVRxZ0JWO0FTL2ZFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBVGlnQko7QVMvZkk7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QVRpZ0JOO0FTL2ZNO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QVRpZ0JSO0FTOWZNO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FUZ2dCUjtBUzVmSTtFQUNFLGVBQUE7RUFDQSxtQk45RVM7RU0rRVQsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QVQ4Zk47QVMxZkk7RUFDRSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QVQ0Zk47QVN6Zkk7RUFDRSxnQ0FBQTtBVDJmTjtBU3hmSTtFQUNFLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBVDBmTjtBU3ZmSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QVR5Zk47QVN2Zk07RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FUeWZSO0FTbmZFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBVHFmSjtBRTltQkU7RU9zSEE7SUFLSSxvQkFBQTtFVHVmSjtBQUNGO0FTcmZJO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBVHVmTjtBU3BmSTtFQUNFLGtCQUFBO0FUc2ZOO0FTbmZJO0VBQ0UsZUFBQTtBVHFmTjs7QVM5ZUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QVRpZkY7O0FTOWVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QVRpZkY7O0FTOWVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBVGlmRjs7QVM3ZUU7RUFDRSxzQkFBQTtBVGdmSjs7QVM1ZUE7RUFDRSx5Qk45S2dCO0VNK0toQiwyQkFBQTtBVCtlRjs7QVMzZUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtBVDhlRjs7QVMzZUE7RUFDRSxtQk52TGE7RU13TGIsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCTjdMVztFTThMWCxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FUOGVGOztBQTlxQkE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFpckJGOztBQTlxQkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkdwQnVCO0FIcXNCekI7O0FBOXFCQTtFQUNFLCtCQUFBO0VBQ0EsZ0JBQUE7QUFpckJGO0FFOXNCRTtFRjJCRjtJQUlJLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VBbXJCRjtBQUNGO0FFL3NCRTtFRnFCRjtJQVNJLGVBQUE7SUFDQSxrQkFBQTtFQXFyQkY7QUFDRjs7QUFsckJBO0VBQ0UsbUJHakNhO0FIc3RCZjtBRS90QkU7RUZ5Q0Y7SUFHSSxlQUFBO0lBQ0EsaUJBQUE7RUF1ckJGO0FBQ0Y7QUUvdEJFO0VGbUNGO0lBT0ksZUFBQTtFQXlyQkY7QUFDRjtBQXhyQkU7RUFDRSxjR2xEUTtFSG1EUixxQkFBQTtBQTByQko7QUF4ckJFO0VBQ0UscUJBQUE7RUFDQSxjRzFEZTtBSG92Qm5COztBQXZyQkE7RUFDRSxtQkduRGE7RUhvRGIsZUFBQTtFQUNBLGdCQUFBO0FBMHJCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBFcmljIE1leWVyJ3MgQ1NTIFJlc2V0XFxyXFxuICAgaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiAgIFRoaXMgaXMgYSBTYXNzIHBhcnRpYWxcXHJcXG4qL1xcclxcblxcclxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcbiAgcXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICBib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0ICdzZXR0aW5ncy9yZXNldCc7XFxyXFxuQGltcG9ydCBcXFwic2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbkBpbXBvcnQgXFxcInNlY3Rpb25zL2hlYWRlclxcXCI7XFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvYXNpZGVcXFwiO1xcclxcbkBpbXBvcnQgXFxcInNlY3Rpb25zL2Zvb3RlclxcXCI7XFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvbWFpbi1wYWdlXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy93b3Jrb3V0XFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy9maWd1cmVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy9jb25jYWN0XFxcIjtcXHJcXG5cXHJcXG4ucGFnZV9jb250YWluZXJ7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLWJhY2tncm91bmQ7XFxyXFxufVxcclxcbi5tYWluX2NvbnRhaW5lcntcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBjbGVhcjogYm90aDtcXHJcXG4gIHJpZ2h0OiAtMTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLWJhY2tncm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIxe1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnksIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMjBweCAwO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBtYXJnaW4tYmxvY2s6IDIwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIye1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgfVxcclxcbiAgLmNob3NlbntcXHJcXG4gICAgY29sb3I6ICRjb2xvci1yZWQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5ub3RfY2hvc2Vue1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItZm9udC1ibGFjaztcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmhlYWRlcjN7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbi5tZW51X21haW4tY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgei1pbmRleDogNTAwO1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAzcHggM3B4IDJweCAkY29sb3Itc29mdC1ncmV5O1xcclxcbiAgLy9ib3JkZXItYm90dG9tOiAycHggYmxhY2sgc29saWQ7XFxyXFxuICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICB3aWR0aDogOTB2dztcXHJcXG4gIH1cXHJcXG4gIC5tZW51X21haW4ge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgIGdhcDogMjJweDtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgIGdhcDogNSU7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudV9tYWluX2VsZW1lbnQsIGF7XFxyXFxuXFxyXFxuICAgICAgQGluY2x1ZGUgZGVza3RvcHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgICAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuXFxyXFxuQG1peGluIGRlc2t0b3Age1xcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gbW9iaWxlIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGhlYWRlcjEge1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICBmb250LXNpemU6IDUwcHg7XFxyXFxuICBjb2xvcjogJGNvbG9yLWZvbnQtYmxhY2s7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBoZWFkZXIye1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBjb2xvcjogJGNvbG9yLWZvbnQtYmxhY2s7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBoZWFkZXIze1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBjb2xvcjogJGNvbG9yLWZvbnQtYmxhY2s7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBkZXNjcmlwdGlvbntcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbn1cIixcIlxcclxcbiRjb2xvci1mb250LWJsYWNrOiAjMDAwMDAwO1xcclxcbiRjb2xvci1mb250LXdoaXRlOiAjRkZGRkZGO1xcclxcblxcclxcbiRjb2xvci1yZWQ6ICNCMDIzMjM7XFxyXFxuJGNvbG9yLWJsYWNrLWJhY2tncm91bmQ6ICMwMDAwMDA7XFxyXFxuJGNvbG9yLW5lYXJseS1ibGFjazogIzFFMUUxRTtcXHJcXG4kY29sb3Itd2hpdGUtYmFja2dyb3VuZDogI0ZGRkZGRjtcXHJcXG4kY29sb3Itc29mdC1ncmV5OiAjRDhEOEQ4O1xcclxcbiRjb2xvci1jaGFsay1ncmV5OiAjRDZENkQ2O1xcclxcbiRjb2xvci1ncmV5OiAjNTk1OTU5O1xcclxcblxcclxcbiRmb250LXByaW1hcnk6IFJvYm90bztcIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4ubWVudV9hc2lkZS1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIC5tZW51X2FzaWRlIHtcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgIHdpZHRoOiAxNSU7XFxyXFxuICAgIH1cXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTAzcHg7XFxyXFxuICAgIGdhcDogMThweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stYmFja2dyb3VuZDtcXHJcXG4gICAgLm1lbnVfYXNpZGVfZWxlbWVudCB7XFxyXFxuICAgICAgbWFyZ2luOiAwIDAgMCAxNXB4O1xcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgbWFyZ2luOiAwIDAgMCAycHg7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGF7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgY29sb3I6ICRjb2xvci1mb250LXdoaXRlO1xcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDZweDtcXHJcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLmZvb3Rlcl9jb250YWluZXJ7XFxyXFxuICBjbGVhcjogYm90aDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51X2Zvb3RlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwIDMwcHggMCAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbmVhcmx5LWJsYWNrO1xcclxcbiAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudV9mb290ZXJfbGlzdHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBnYXA6IDUwcHg7XFxyXFxuICAgICAgbWFyZ2luOiAwIDE1cHggMCAwO1xcclxcblxcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIGdhcDogMTAlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBhIHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgY29sb3I6ICM5MjhFOEU7XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgYXtcXHJcXG4gICAgICBjb2xvcjogJGNvbG9yLXNvZnQtZ3JleTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4ub25lX3BhZ2Vye1xcclxcbiAgaGVpZ2h0OiA5MHZoO1xcclxcbn1cXHJcXG4ubWFpbl9wYWdle1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWcvaW1nX21haW5fcGFnZS5qcGVnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgei1pbmRleDogMjAwO1xcclxcbiAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogNjYuNSU7XFxyXFxuICAgIC8vYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxNzUlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcclxcbiAgICByaWdodDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2lyY2xlc193b3Jrb3V0e1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS1iYWNrZ3JvdW5kO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICB3aWR0aDogMTcwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiAxNzBweDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIH1cXHJcXG4gIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgxKXtcXHJcXG4gICAgYm9yZGVyOiAxMHB4ICNFN0U2RTYgc29saWQ7XFxyXFxuICAgIGgyLCBhIHtcXHJcXG4gICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtY2hpbGQoMil7XFxyXFxuICAgIGJvcmRlcjogMTBweCAjQ0NDQkNCIHNvbGlkO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGgyLCBhIHtcXHJcXG4gICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgzKXtcXHJcXG4gICAgYm9yZGVyOiAxMHB4ICM5RDlEOUQgc29saWQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaDIsIGEge1xcclxcbiAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbi5hYm91dF9wbGF0Zm9ybXtcXHJcXG4gIHdpZHRoOiAyOTVweDtcXHJcXG5cXHJcXG4gIC5hYm91dF9wbGF0Zm9ybV90ZXh0e1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcblxcclxcbiAgfVxcclxcbn1cXHJcXG4gIC5oZWFkZXIzIHtcXHJcXG4gICAgbWFyZ2luLWJsb2NrOiAyMHB4IDEwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcblxcclxcbi53b3Jrb3V0e1xcclxcbiAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgcGFkZGluZzogNSU7XFxyXFxuICB9XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItY2hhbGstZ3JleTtcXHJcXG4gIC5oZWFkZXI0e1xcclxcbiAgICBwYWRkaW5nLWJsb2NrOiAxMHB4IDIwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItcmVkO1xcclxcbiAgfVxcclxcbiAgLmRlc2NyaXB0aW9uX3RleHR7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItZm9udC13aGl0ZTtcXHJcXG4gIH1cXHJcXG4gIC53b3Jrb3V0X2ltZ2FnZXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwJTtcXHJcXG4gICAgfVxcclxcbiAgICAud29ya291dF9pbWFnZSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLWJhY2tncm91bmQ7XFxyXFxuICAgICAgQGluY2x1ZGUgZGVza3RvcHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNjBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICBtYXJnaW46IDUlO1xcclxcblxcclxcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLmZpZ3VyZXNfY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS1iYWNrZ3JvdW5kO1xcclxcblxcclxcbiAgLm1haW5fcGFnZV9maWd1cmVzIHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcclxcbiAgICAuZmlndXJlc19wYWdlX2hlYWQge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuXFxyXFxuICAgICAgLmZpZ3VyZXNfc3RyaXBlIHtcXHJcXG4gICAgICAgIHdpZHRoOiA1NzVweDtcXHJcXG4gICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDN0M3Qzc7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmZpZ3VyZXNfY2lyY2xlIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS1iYWNrZ3JvdW5kO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgdG9wOiAtMTBweDtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDU1JTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgICAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5oZWFkZXIzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnksIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFkZF9maWd1cmUge1xcclxcbiAgICAgIHdpZHRoOiAxMTBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWJsYWNrLWJhY2tncm91bmQ7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMzAlO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgcmlnaHQ6IDE1JTtcXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBhIHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgICAgICAgY29sb3I6ICRjb2xvci1mb250LXdoaXRlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDhweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5maWd1cmVzX3NwYWNlX2ltZyB7XFxyXFxuICAgIGhlaWdodDogMzUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nL1BEX2ltZ18zX3N6cGFnYXQuanBlZ1xcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICB6LWluZGV4OiAyMDA7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogLTI3MHB4O1xcclxcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdnc7XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5maWd1cmVzX2JveCB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuZGVzY3JpcHRpb25fdGV4dHtcXHJcXG4gICAgICB3aWR0aDogNjAwcHg7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICBjb2xvcjogJGNvbG9yLWZvbnQtYmxhY2s7XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIC5maWd1cmVzIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXHJcXG4gICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogODBweDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgLmZpZ3VyZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgICAgICAgIGhlaWdodDogMjUwcHg7XFxyXFxuICAgICAgICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgICAgIG1hcmdpbjogNSU7XFxyXFxuICAgICAgICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG59XCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuXFxyXFxuLmNvbnRhY3RfYm94IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5LCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMCU7XFxyXFxuICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3Qge1xcclxcbiAgICAuaGVhZGVyMSB7XFxyXFxuICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhY3RfaW5mbyB7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJsb2NrOiAxNXB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuZGVzY3JpcHRpb25fdGV4dCB7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmhlYWRlcjMge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuYWRkcmVzcyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuXFxyXFxuICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9ybV9tZXNzYWdlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgXFxyXFxuICAgIC5wZXJzb25hbF9kYXRlIHtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGdhcDogNXB4O1xcclxcblxcclxcbiAgICAgIGxhYmVsIHtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaW5wdXQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgbGVmdDogMTkwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jYXNlLCAuZmlndXJlX2xldmVsLCAuZmlndXJlX2NhdGVnb3J5IHtcXHJcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICAgICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBzZWxlY3Qge1xcclxcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA6OnNlbGVjdGlvbiB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgb3B0aW9uIHtcXHJcXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZpZ3VyZV9hZGRfY2F0ZWdvcnkge1xcclxcbiAgICAgIHdpZHRoOiAzOTBweDtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAgICAgcCB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib3hfbWVzc2FnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGl0bGVfbWVzc2FnZSB7XFxyXFxuICAgICAgcGFkZGluZy1ibG9jazogMTBweDtcXHJcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50ZXh0YXJlYSB7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hZ3JlZW1lbnQge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3ggaW5wdXQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGhlaWdodDogMTBweDtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3gge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IHNwYW4ge1xcclxcbiAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgZmxleC1iYXNpczogMTBweDtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlndXJlX2FkZF9jYXRlZ29yeSB7XFxyXFxuICAuY2hlY2tib3hfY2F0ZWdvcnkgc3BhbiB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCBpbnB1dDpjaGVja2VkICsgc3BhbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc29mdC1ncmV5O1xcclxcbiAgYm9yZGVyOiAycHggbGlnaHRibHVlIHNvbGlkO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZmlndXJlX2NhdGVnb3JpZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdCB7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggYmxhY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogMjUlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmE2ZDVlNDlmOGUyNmUwY2I1ZTRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=