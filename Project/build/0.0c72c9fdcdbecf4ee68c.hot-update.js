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
  display: flex;
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

.not_ready {
  height: 500px;
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
}`, "",{"version":3,"sources":["webpack://./Project/scss/settings/_reset.scss","webpack://./Project/scss/index.scss","webpack://./Project/scss/sections/_header.scss","webpack://./Project/scss/settings/_mixins.scss","webpack://./Project/scss/settings/_variables.scss","webpack://./Project/scss/sections/_aside.scss","webpack://./Project/scss/sections/_footer.scss","webpack://./Project/scss/sections/_main-page.scss","webpack://./Project/scss/sections/_workout.scss","webpack://./Project/scss/sections/_figures.scss","webpack://./Project/scss/sections/_concact.scss","webpack://./Project/scss/sections/_not_ready_page.scss"],"names":[],"mappings":"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","sourcesContent":["/* Eric Meyer's CSS Reset\r\n   http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n   This is a Sass partial\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n  display: block;\r\n}\r\nbody {\r\n  line-height: 1;\r\n}\r\nol, ul {\r\n  list-style: none;\r\n}\r\nblockquote, q {\r\n  quotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n  content: '';\r\n  content: none;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n","@import 'settings/reset';\r\n@import \"settings/variables\";\r\n@import \"settings/mixins\";\r\n\r\n@import \"sections/header\";\r\n@import \"sections/aside\";\r\n@import \"sections/footer\";\r\n@import \"sections/main-page\";\r\n@import \"sections/workout\";\r\n@import \"sections/figures\";\r\n@import \"sections/concact\";\r\n@import \"sections/not_ready_page\";\r\n\r\n.page_container{\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 100%;\r\n  width: 100%;\r\n  //background-color: $color-black-background;\r\n}\r\n.main_container{\r\n  position: relative;\r\n  width: 90%;\r\n  height: 100%;\r\n  clear: both;\r\n  right: -10%;\r\n  background-color: $color-white-background;\r\n}\r\n\r\n.header1{\r\n  font-family: $font-primary, sans-serif;\r\n  font-weight: 300;\r\n  @include desktop {\r\n    font-size: 50px;\r\n    margin: 0 0 20px 0;\r\n    padding-top: 40px;\r\n  }\r\n  @include mobile{\r\n    font-size: 30px;\r\n    margin-block: 20px;\r\n  }\r\n}\r\n\r\n.header2{\r\n  font-family: $font-primary;\r\n  @include desktop {\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n  }\r\n  @include mobile{\r\n    font-size: 14px;\r\n  }\r\n  .chosen{\r\n    color: $color-red;\r\n    text-decoration: none;\r\n  }\r\n  .not_chosen{\r\n    text-decoration: none;\r\n    color: $color-font-black;\r\n  }\r\n}\r\n.header3{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.menu_main-container {\r\n  height: 60px;\r\n  top: 10px;\r\n  background-color: white;\r\n  z-index: 500;\r\n  position: sticky;\r\n  box-shadow: 2px 3px 3px 2px $color-soft-grey;\r\n  //border-bottom: 2px black solid;\r\n  @include mobile {\r\n    width: 90vw;\r\n  }\r\n  .menu_main {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    @include desktop {\r\n      gap: 22px;\r\n      margin-left: 100px;\r\n    }\r\n    @include mobile{\r\n      gap: 5%;\r\n      margin-left: 10%;\r\n      line-height: 10px;\r\n    }\r\n    .menu_main_element, a{\r\n\r\n      @include desktop{\r\n        font-size: 16px;\r\n      }\r\n      @include mobile{\r\n        font-size: 10px;\r\n      }\r\n      flex-direction: row;\r\n      font-family: $font-primary;\r\n      font-weight: 300;\r\n      color: $color-font-black;\r\n      text-decoration: none;\r\n    }\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n\r\n@mixin desktop {\r\n  @media (min-width: 736px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile {\r\n  @media (max-width: 736px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin header1 {\r\n  font-family: $font-primary;\r\n  font-size: 50px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin header2{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin header3{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin description{\r\n  font-family: $font-primary;\r\n  font-size: 14px;\r\n  color: $color-font-black;\r\n}","\r\n$color-font-black: #000000;\r\n$color-font-white: #FFFFFF;\r\n\r\n$color-red: #B02323;\r\n$color-black-background: #000000;\r\n$color-nearly-black: #1E1E1E;\r\n$color-white-background: #FFFFFF;\r\n$color-soft-grey: #D8D8D8;\r\n$color-chalk-grey: #D6D6D6;\r\n$color-grey: #595959;\r\n\r\n$font-primary: Roboto;","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.menu_aside-container {\r\n  height: 100vh;\r\n  position: absolute;\r\n  .menu_aside {\r\n    @include mobile{\r\n      width: 15%;\r\n    }\r\n    position: fixed;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-top: 103px;\r\n    gap: 18px;\r\n    height: 100%;\r\n    width: 10%;\r\n    background-color: $color-black-background;\r\n    .menu_aside_element {\r\n      margin: 0 0 0 15px;\r\n      @include mobile {\r\n      margin: 0 0 0 2px;\r\n      }\r\n      a{\r\n        text-decoration: none;\r\n        font-size: 14px;\r\n        font-family: $font-primary, sans-serif;\r\n        font-weight: bold;\r\n        color: $color-font-white;\r\n        @include mobile{\r\n          font-size: 6px;\r\n          font-weight: 300;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.footer_container{\r\n  clear: both;\r\n  position: fixed;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  width: 90%;\r\n  height: 80px;\r\n  background-color: black;\r\n  @include mobile{\r\n    width: 90%;\r\n    right: 0;\r\n  }\r\n\r\n  .menu_footer{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 50px;\r\n    width: 100%;\r\n    padding: 0 30px 0 30px;\r\n    background-color: $color-nearly-black;\r\n    @include mobile{\r\n      padding: 5px;\r\n      justify-content: left;\r\n    }\r\n    .menu_footer_list{\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: center;\r\n      gap: 50px;\r\n      margin: 0 15px 0 0;\r\n\r\n      @include mobile{\r\n        gap: 10%;\r\n      }\r\n      a {\r\n        font-family: $font-primary;\r\n        font-size: 12px;\r\n        text-decoration: none;\r\n        color: #928E8E;\r\n        @include mobile{\r\n          font-size: 10px;\r\n        }\r\n      }\r\n    }\r\n    a{\r\n      color: $color-soft-grey;\r\n    }\r\n  }\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.one_pager{\r\n  height: 90vh;\r\n}\r\n.main_page{\r\n  background-image: url(\"../img/img_main_page.jpeg\");\r\n  background-repeat: no-repeat;\r\n  z-index: 200;\r\n  @include desktop {\r\n    background-attachment: fixed;\r\n    background-size: 66.5%;\r\n    //background-position-x: 175%;\r\n    background-position: right;\r\n    margin-left: 60px;\r\n  }\r\n  @include mobile{\r\n    background-size: 100%;\r\n    width: 90%;\r\n    margin-left: 5%;\r\n    right: 10px;\r\n  }\r\n\r\n  .circles_workout-container{\r\n    display: flex;\r\n    @include mobile {\r\n      flex-wrap: wrap;\r\n      justify-content: space-around;\r\n    }\r\n\r\n    .circles_workout{\r\n      background-color: $color-white-background;\r\n      border-radius: 50%;\r\n      width: 170px;\r\n      height: 170px;\r\n      flex-direction: row;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      margin-right: 20px;\r\n      @include mobile{\r\n        width: 100px;\r\n        height: 100px;\r\n        margin: 0;\r\n      }\r\n    }\r\n\r\n  }\r\n  .circles_workout-container :nth-of-type(1){\r\n    border: 10px #E7E6E6 solid;\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n  .circles_workout-container :nth-child(2){\r\n    border: 10px #CCCBCB solid;\r\n    position: relative;\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n  .circles_workout-container :nth-of-type(3){\r\n    border: 10px #9D9D9D solid;\r\n    position: relative;\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n.about_platform{\r\n  width: 295px;\r\n\r\n  .about_platform_text{\r\n    margin-right: 20px;\r\n    padding-bottom: 20px;\r\n    font-family: $font-primary;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n\r\n  }\r\n}\r\n  .header3 {\r\n    margin-block: 20px 10px;\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n\r\n.workout{\r\n  @include desktop {\r\n    padding-left: 60px;\r\n  }\r\n  @include mobile{\r\n    padding: 5%;\r\n  }\r\n  background-color: $color-chalk-grey;\r\n  .header4{\r\n    padding-block: 10px 20px;\r\n    font-family: $font-primary;\r\n    font-size: 24px;\r\n    font-weight: 300;\r\n    color: $color-red;\r\n  }\r\n  .description_text{\r\n    margin-bottom: 20px;\r\n    font-family: $font-primary;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: $color-font-white;\r\n  }\r\n  .workout_imgages {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    @include desktop {\r\n      margin-right: 100px;\r\n      margin-bottom: 60px;\r\n    }\r\n    @include mobile{\r\n      margin-bottom: 20%;\r\n    }\r\n    .workout_image {\r\n      background-color: $color-white-background;\r\n      @include desktop{\r\n        margin-right: 60px;\r\n        margin-bottom: 50px;\r\n        height: 300px;\r\n        width: 250px;\r\n      }\r\n      @include mobile{\r\n        margin: 5%;\r\n\r\n        height: 150px;\r\n        width: 100px;\r\n      }\r\n    }\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.figures_container {\r\n  background-color: $color-white-background;\r\n\r\n  .main_page_figures {\r\n    padding-bottom: 100px;\r\n    .figures_page_head {\r\n      display: flex;\r\n      flex-direction: row;\r\n      margin-top: 50px;\r\n      margin-bottom: 20px;\r\n\r\n      .figures_stripe {\r\n        width: 575px;\r\n        height: 40px;\r\n        background-color: #C7C7C7;\r\n        display: flex;\r\n        flex-direction: row;\r\n      }\r\n\r\n      .figures_circle {\r\n        background-color: $color-white-background;\r\n        border-radius: 50%;\r\n        position: relative;\r\n        top: -10px;\r\n        opacity: 55%;\r\n        @include desktop {\r\n          width: 60px;\r\n          height: 60px;\r\n          margin: 0 10px 0 10px;\r\n        }\r\n        @include mobile {\r\n          top: 0;\r\n          width: 30px;\r\n          height: 30px;\r\n        }\r\n      }\r\n\r\n      .header3 {\r\n        display: flex;\r\n        align-items: center;\r\n        height: 100%;\r\n        font-family: $font-primary, sans-serif;\r\n        font-weight: 300;\r\n        @include desktop {\r\n          font-size: 24px;\r\n        }\r\n        @include mobile {\r\n          font-size: 16px;\r\n        }\r\n      }\r\n    }\r\n\r\n    .add_figure {\r\n      width: 110px;\r\n      height: 40px;\r\n      background: $color-black-background;\r\n      border-radius: 30%;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      position: absolute;\r\n      right: 15%;\r\n      @include mobile{\r\n        width: 30px;\r\n        right: 0;\r\n      }\r\n      a {\r\n        font-family: $font-primary;\r\n        color: $color-font-white;\r\n        font-size: 14px;\r\n        text-decoration: none;\r\n        @include mobile{\r\n          font-size: 8px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .figures_space_img {\r\n    height: 350px;\r\n    background-image: url(\"../img/PD_img_3_szpagat.jpeg\");\r\n    background-repeat: no-repeat;\r\n    z-index: 200;\r\n    background-position-y: -270px;\r\n    @include desktop {\r\n      background-attachment: fixed;\r\n      background-size: 100vw;\r\n    }\r\n    @include mobile {\r\n      height: 150px;\r\n      background-size: 100%;\r\n      background-position: 200% 0;\r\n    }\r\n  }\r\n\r\n  .figures_box {\r\n    padding-top: 20px;\r\n    @include desktop {\r\n      padding-left: 60px;\r\n    }\r\n    @include mobile {\r\n      padding-left: 10%;\r\n    }\r\n    .description_text{\r\n      width: 600px;\r\n      margin-bottom: 20px;\r\n      font-family: $font-primary;\r\n      font-size: 14px;\r\n      font-weight: 400;\r\n      color: $color-font-black;\r\n      @include mobile{\r\n        width: 90%;\r\n        margin-bottom: 10px;\r\n      }\r\n    }\r\n    .figures {\r\n      display: flex;\r\n      flex-direction: row;\r\n      flex-wrap: wrap;\r\n      justify-content: left;\r\n      @include desktop {\r\n        margin-right: 80px;\r\n      }\r\n      .figure {\r\n        background-color: $color-grey;\r\n        @include desktop {\r\n          margin-right: 10px;\r\n          margin-bottom: 10px;\r\n          height: 250px;\r\n          width: 200px;\r\n        }\r\n        @include mobile {\r\n          margin: 5%;\r\n          height: 150px;\r\n          width: 100px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n\r\n.contact_box {\r\n  font-family: $font-primary, sans-serif;\r\n  margin-top: 30px;\r\n  margin-left: 40px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 10%;\r\n  @include mobile {\r\n    flex-direction: column;\r\n    align-items: start;\r\n    margin-left: 20px;\r\n  }\r\n\r\n  .contact {\r\n    .header1 {\r\n      margin: 0;\r\n      padding: 0;\r\n    }\r\n\r\n    .contact_info {\r\n      font-weight: 300;\r\n      @include desktop {\r\n        font-size: 20px;\r\n        padding-top: 20px;\r\n      }\r\n      @include mobile {\r\n        font-size: 14px;\r\n        margin-block: 15px;\r\n      }\r\n\r\n      .description_text {\r\n        line-height: 30px;\r\n      }\r\n\r\n      .header3 {\r\n        margin-top: 50px;\r\n        margin-bottom: 15px;\r\n        @include mobile {\r\n          margin-top: 20px;\r\n        }\r\n      }\r\n\r\n      .address {\r\n        font-size: 16px;\r\n\r\n        a {\r\n          padding-left: 10px;\r\n          text-decoration: none;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .form_message {\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 50%;\r\n    gap: 5px;\r\n\r\n    .personal_date {\r\n      position: relative;\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 5px;\r\n\r\n      label {\r\n        font-weight: 600;\r\n        width: 300px;\r\n        margin-bottom: 20px;\r\n        display: flex;\r\n        align-items: center\r\n      }\r\n\r\n      input {\r\n        font-size: 12px;\r\n        width: 200px;\r\n        height: 20px;\r\n        position: absolute;\r\n        left: 190px;\r\n      }\r\n    }\r\n\r\n    .case, .figure_level, .figure_category {\r\n      font-size: 12px;\r\n      font-family: $font-primary;\r\n      width: 400px;\r\n      height: 20px;\r\n      margin-bottom: 15px;\r\n      cursor: pointer;\r\n\r\n    }\r\n\r\n    select {\r\n      -webkit-border-radius: 25px;\r\n      -moz-border-radius: 25px;\r\n      border-radius: 25px;\r\n    }\r\n\r\n    ::selection {\r\n      background-color: lightsteelblue;\r\n    }\r\n\r\n    option {\r\n      -webkit-border-radius: 25px;\r\n      -moz-border-radius: 25px;\r\n      border-radius: 25px;\r\n    }\r\n\r\n    .figure_add_category {\r\n      width: 390px;\r\n      display: flex;\r\n      flex-direction: column;\r\n\r\n      p {\r\n        font-weight: 600;\r\n        margin-bottom: 15px;\r\n      }\r\n\r\n    }\r\n  }\r\n\r\n  .box_message {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 400px;\r\n    @include mobile {\r\n      padding-bottom: 60px;\r\n    }\r\n\r\n    .title_message {\r\n      padding-block: 10px;\r\n      font-weight: 600;\r\n    }\r\n\r\n    .textarea {\r\n      margin-bottom: 5px;\r\n    }\r\n\r\n    .agreement {\r\n      font-size: 10px;\r\n    }\r\n\r\n  }\r\n\r\n}\r\n\r\n.checkbox input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  height: 10px;\r\n  width: 10px;\r\n}\r\n\r\n.checkbox {\r\n  cursor: pointer;\r\n  display: flex;\r\n}\r\n\r\n.checkbox span {\r\n  height: 10px;\r\n  width: 10px;\r\n  border: 2px solid grey;\r\n  flex-basis: 10px;\r\n  flex-shrink: 0;\r\n  cursor: pointer;\r\n  margin-right: 10px;\r\n}\r\n\r\n.figure_add_category {\r\n  .checkbox_category span {\r\n    border: 2px solid grey;\r\n  }\r\n}\r\n\r\n.checkbox input:checked + span {\r\n  background-color: $color-soft-grey;\r\n  border: 2px lightblue solid;\r\n\r\n}\r\n\r\n.figure_categories {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n}\r\n\r\n.submit {\r\n  font-family: $font-primary;\r\n  width: 80px;\r\n  height: 20px;\r\n  font-weight: 300;\r\n  background-color: $color-grey;\r\n  color: white;\r\n  border: none;\r\n  box-shadow: 1px 2px 5px black;\r\n  margin-left: 25%;\r\n  cursor: pointer;\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.not_ready{\r\n  height: 500px;\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e590c374703202f26053")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wYzcyYzlmZGNkYmVjZjRlZTY4Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QyxpRUFBNEM7QUFDeEYsNENBQTRDLGlFQUErQztBQUMzRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx3b0JBQXdvQixLQUFLLGlCQUFpQixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLFdBQVcsTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFlBQVksWUFBWSxXQUFXLFlBQVksTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsYUFBYSxPQUFPLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsUUFBUSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLGFBQWEsYUFBYSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxhQUFhLE9BQU8sTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsYUFBYSxhQUFhLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sWUFBWSxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLFdBQVcsV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE9BQU8sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcs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QyxtQ0FBbUMsOEJBQThCLFNBQVMsa0NBQWtDLHVCQUF1Qix3QkFBd0IsaUNBQWlDLGlCQUFpQiw2QkFBNkIsZ0NBQWdDLFdBQVcsYUFBYSxPQUFPLHdCQUF3QixzQkFBc0IsK0JBQStCLHFCQUFxQix5QkFBeUIsK0JBQStCLFNBQVMsNEJBQTRCLDhCQUE4QiwyQkFBMkIsU0FBUyx1QkFBdUIsNkJBQTZCLFNBQVMsd0JBQXdCLDBCQUEwQixTQUFTLFdBQVcsU0FBUyx5QkFBeUIseUJBQXlCLGlCQUFpQixzQkFBc0IsbUJBQW1CLGtCQUFrQixLQUFLLG1CQUFtQixzQkFBc0Isb0JBQW9CLEtBQUssd0JBQXdCLG1CQUFtQixrQkFBa0IsNkJBQTZCLHVCQUF1QixxQkFBcUIsc0JBQXNCLHlCQUF5QixLQUFLLDhCQUE4QiwrQkFBK0IsK0JBQStCLE9BQU8sS0FBSyx3Q0FBd0MseUNBQXlDLGtDQUFrQyxTQUFTLDRCQUE0QixvQkFBb0IsMEJBQTBCLHNCQUFzQixlQUFlLEtBQUssaUJBQWlCLGlDQUFpQyxrQkFBa0IsbUJBQW1CLHVCQUF1QixvQ0FBb0MsbUJBQW1CLG1CQUFtQixvQ0FBb0MsdUJBQXVCLHNCQUFzQixLQUFLLHFDQUFxQyxtQ0FBbUMsbUJBQW1CLG9CQUFvQixLQUFLLG1DQUFtQztBQUMxeXZCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7OztVQzV3QnZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2ltZ19tYWluX3BhZ2UuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltZy9QRF9pbWdfM19zenBhZ2F0LmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBFcmljIE1leWVyJ3MgQ1NTIFJlc2V0XG4gICBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuICAgVGhpcyBpcyBhIFNhc3MgcGFydGlhbFxuKi9cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLCBxIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLm1lbnVfbWFpbi1jb250YWluZXIge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDUwMDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm94LXNoYWRvdzogMnB4IDNweCAzcHggMnB4ICNEOEQ4RDg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfbWFpbi1jb250YWluZXIge1xuICAgIHdpZHRoOiA5MHZ3O1xuICB9XG59XG4ubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4ge1xuICAgIGdhcDogMjJweDtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIHtcbiAgICBnYXA6IDUlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIH1cbn1cbi5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4gLm1lbnVfbWFpbl9lbGVtZW50LCAubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIGEge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4gLm1lbnVfbWFpbl9lbGVtZW50LCAubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIGEge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4gLm1lbnVfbWFpbl9lbGVtZW50LCAubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIGEge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuXG4ubWVudV9hc2lkZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ubWVudV9hc2lkZS1jb250YWluZXIgLm1lbnVfYXNpZGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctdG9wOiAxMDNweDtcbiAgZ2FwOiAxOHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfYXNpZGUtY29udGFpbmVyIC5tZW51X2FzaWRlIHtcbiAgICB3aWR0aDogMTUlO1xuICB9XG59XG4ubWVudV9hc2lkZS1jb250YWluZXIgLm1lbnVfYXNpZGUgLm1lbnVfYXNpZGVfZWxlbWVudCB7XG4gIG1hcmdpbjogMCAwIDAgMTVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWVudV9hc2lkZS1jb250YWluZXIgLm1lbnVfYXNpZGUgLm1lbnVfYXNpZGVfZWxlbWVudCB7XG4gICAgbWFyZ2luOiAwIDAgMCAycHg7XG4gIH1cbn1cbi5tZW51X2FzaWRlLWNvbnRhaW5lciAubWVudV9hc2lkZSAubWVudV9hc2lkZV9lbGVtZW50IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X2FzaWRlLWNvbnRhaW5lciAubWVudV9hc2lkZSAubWVudV9hc2lkZV9lbGVtZW50IGEge1xuICAgIGZvbnQtc2l6ZTogNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbn1cblxuLmZvb3Rlcl9jb250YWluZXIge1xuICBjbGVhcjogYm90aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZvb3Rlcl9jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbn1cbi5mb290ZXJfY29udGFpbmVyIC5tZW51X2Zvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAzMHB4IDAgMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFMUUxRTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZm9vdGVyX2NvbnRhaW5lciAubWVudV9mb290ZXIge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIH1cbn1cbi5mb290ZXJfY29udGFpbmVyIC5tZW51X2Zvb3RlciAubWVudV9mb290ZXJfbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNTBweDtcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5mb290ZXJfY29udGFpbmVyIC5tZW51X2Zvb3RlciAubWVudV9mb290ZXJfbGlzdCB7XG4gICAgZ2FwOiAxMCU7XG4gIH1cbn1cbi5mb290ZXJfY29udGFpbmVyIC5tZW51X2Zvb3RlciAubWVudV9mb290ZXJfbGlzdCBhIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjOTI4RThFO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5mb290ZXJfY29udGFpbmVyIC5tZW51X2Zvb3RlciAubWVudV9mb290ZXJfbGlzdCBhIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbn1cbi5mb290ZXJfY29udGFpbmVyIC5tZW51X2Zvb3RlciBhIHtcbiAgY29sb3I6ICNEOEQ4RDg7XG59XG5cbi5vbmVfcGFnZXIge1xuICBoZWlnaHQ6IDkwdmg7XG59XG5cbi5tYWluX3BhZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHotaW5kZXg6IDIwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAubWFpbl9wYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNjYuNSU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWFpbl9wYWdlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gIH1cbn1cbi5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxufVxuLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciAuY2lyY2xlc193b3Jrb3V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTcwcHg7XG4gIGhlaWdodDogMTcwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciAuY2lyY2xlc193b3Jrb3V0IHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbi5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1vZi10eXBlKDEpIHtcbiAgYm9yZGVyOiAxMHB4ICNFN0U2RTYgc29saWQ7XG59XG4ubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgxKSBoMiwgLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMSkgYSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1jaGlsZCgyKSB7XG4gIGJvcmRlcjogMTBweCAjQ0NDQkNCIHNvbGlkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtY2hpbGQoMikgaDIsIC5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1jaGlsZCgyKSBhIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMykge1xuICBib3JkZXI6IDEwcHggIzlEOUQ5RCBzb2xpZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMykgaDIsIC5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1vZi10eXBlKDMpIGEge1xuICBib3JkZXI6IG5vbmU7XG59XG4ubWFpbl9wYWdlIC5hYm91dF9wbGF0Zm9ybSB7XG4gIHdpZHRoOiAyOTVweDtcbn1cbi5tYWluX3BhZ2UgLmFib3V0X3BsYXRmb3JtIC5hYm91dF9wbGF0Zm9ybV90ZXh0IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLm1haW5fcGFnZSAuaGVhZGVyMyB7XG4gIG1hcmdpbi1ibG9jazogMjBweCAxMHB4O1xufVxuXG4ud29ya291dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNENkQ2RDY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLndvcmtvdXQge1xuICAgIHBhZGRpbmctbGVmdDogNjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC53b3Jrb3V0IHtcbiAgICBwYWRkaW5nOiA1JTtcbiAgfVxufVxuLndvcmtvdXQgLmhlYWRlcjQge1xuICBwYWRkaW5nLWJsb2NrOiAxMHB4IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICNCMDIzMjM7XG59XG4ud29ya291dCAuZGVzY3JpcHRpb25fdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4ud29ya291dCAud29ya291dF9pbWdhZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAud29ya291dCAud29ya291dF9pbWdhZ2VzIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAud29ya291dCAud29ya291dF9pbWdhZ2VzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMCU7XG4gIH1cbn1cbi53b3Jrb3V0IC53b3Jrb3V0X2ltZ2FnZXMgLndvcmtvdXRfaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC53b3Jrb3V0IC53b3Jrb3V0X2ltZ2FnZXMgLndvcmtvdXRfaW1hZ2Uge1xuICAgIG1hcmdpbi1yaWdodDogNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLndvcmtvdXQgLndvcmtvdXRfaW1nYWdlcyAud29ya291dF9pbWFnZSB7XG4gICAgbWFyZ2luOiA1JTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxufVxuXG4uZmlndXJlc19jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cbi5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIC5maWd1cmVzX3N0cmlwZSB7XG4gIHdpZHRoOiA1NzVweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzdDN0M3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuZmlndXJlc19wYWdlX2hlYWQgLmZpZ3VyZXNfY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwcHg7XG4gIG9wYWNpdHk6IDU1JTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5maWd1cmVzX3BhZ2VfaGVhZCAuZmlndXJlc19jaXJjbGUge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5maWd1cmVzX3BhZ2VfaGVhZCAuZmlndXJlc19jaXJjbGUge1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIC5oZWFkZXIzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIC5oZWFkZXIzIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5maWd1cmVzX3BhZ2VfaGVhZCAuaGVhZGVyMyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5hZGRfZmlndXJlIHtcbiAgd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDMwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1JTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5hZGRfZmlndXJlIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICByaWdodDogMDtcbiAgfVxufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuYWRkX2ZpZ3VyZSBhIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmFkZF9maWd1cmUgYSB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19zcGFjZV9pbWcge1xuICBoZWlnaHQ6IDM1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHotaW5kZXg6IDIwMDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMjcwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX3NwYWNlX2ltZyB7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX3NwYWNlX2ltZyB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwO1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCB7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmRlc2NyaXB0aW9uX3RleHQge1xuICB3aWR0aDogNjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZGVzY3JpcHRpb25fdGV4dCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5maWd1cmVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZmlndXJlcyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5maWd1cmVzIC5maWd1cmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1OTU5O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmZpZ3VyZXMgLmZpZ3VyZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5maWd1cmVzIC5maWd1cmUge1xuICAgIG1hcmdpbjogNSU7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbn1cblxuLmNvbnRhY3RfYm94IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5jb250YWN0X2JveCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbn1cbi5jb250YWN0X2JveCAuY29udGFjdCAuaGVhZGVyMSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5jb250YWN0X2JveCAuY29udGFjdCAuY29udGFjdF9pbmZvIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3ggLmNvbnRhY3QgLmNvbnRhY3RfaW5mbyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYmxvY2s6IDE1cHg7XG4gIH1cbn1cbi5jb250YWN0X2JveCAuY29udGFjdCAuY29udGFjdF9pbmZvIC5kZXNjcmlwdGlvbl90ZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uY29udGFjdF9ib3ggLmNvbnRhY3QgLmNvbnRhY3RfaW5mbyAuaGVhZGVyMyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8gLmhlYWRlcjMge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn1cbi5jb250YWN0X2JveCAuY29udGFjdCAuY29udGFjdF9pbmZvIC5hZGRyZXNzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8gLmFkZHJlc3MgYSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA1MCU7XG4gIGdhcDogNXB4O1xufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLnBlcnNvbmFsX2RhdGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXB4O1xufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLnBlcnNvbmFsX2RhdGUgbGFiZWwge1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAucGVyc29uYWxfZGF0ZSBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTkwcHg7XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAuY2FzZSwgLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLmZpZ3VyZV9sZXZlbCwgLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLmZpZ3VyZV9jYXRlZ29yeSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIHNlbGVjdCB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIG9wdGlvbiB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLmZpZ3VyZV9hZGRfY2F0ZWdvcnkge1xuICB3aWR0aDogMzkwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAuZmlndXJlX2FkZF9jYXRlZ29yeSBwIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jb250YWN0X2JveCAuYm94X21lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNDAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IC5ib3hfbWVzc2FnZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gIH1cbn1cbi5jb250YWN0X2JveCAuYm94X21lc3NhZ2UgLnRpdGxlX21lc3NhZ2Uge1xuICBwYWRkaW5nLWJsb2NrOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmNvbnRhY3RfYm94IC5ib3hfbWVzc2FnZSAudGV4dGFyZWEge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uY29udGFjdF9ib3ggLmJveF9tZXNzYWdlIC5hZ3JlZW1lbnQge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5jaGVja2JveCBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG4uY2hlY2tib3gge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jaGVja2JveCBzcGFuIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgZmxleC1iYXNpczogMTBweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZmlndXJlX2FkZF9jYXRlZ29yeSAuY2hlY2tib3hfY2F0ZWdvcnkgc3BhbiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG59XG5cbi5jaGVja2JveCBpbnB1dDpjaGVja2VkICsgc3BhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEOEQ4RDg7XG4gIGJvcmRlcjogMnB4IGxpZ2h0Ymx1ZSBzb2xpZDtcbn1cblxuLmZpZ3VyZV9jYXRlZ29yaWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDhweDtcbn1cblxuLnN1Ym1pdCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1OTU5NTk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAxcHggMnB4IDVweCBibGFjaztcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubm90X3JlYWR5IHtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuLnBhZ2VfY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFpbl9jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY2xlYXI6IGJvdGg7XG4gIHJpZ2h0OiAtMTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuXG4uaGVhZGVyMSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmhlYWRlcjEge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuaGVhZGVyMSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi1ibG9jazogMjBweDtcbiAgfVxufVxuXG4uaGVhZGVyMiB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmhlYWRlcjIge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5oZWFkZXIyIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbi5oZWFkZXIyIC5jaG9zZW4ge1xuICBjb2xvcjogI0IwMjMyMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmhlYWRlcjIgLm5vdF9jaG9zZW4ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uaGVhZGVyMyB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZXR0aW5ncy9fcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZXR0aW5ncy9fbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZXR0aW5ncy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fYXNpZGUuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NlY3Rpb25zL19mb290ZXIuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NlY3Rpb25zL19tYWluLXBhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NlY3Rpb25zL193b3Jrb3V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fZmlndXJlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX2NvbmNhY3Quc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NlY3Rpb25zL19ub3RfcmVhZHlfcGFnZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7OztDQUFBO0FBT0E7Ozs7Ozs7Ozs7Ozs7RUFhRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDQUY7O0FERUEsZ0RBQUE7QUFDQTs7RUFFRSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FEQUE7RUFDRSxnQkFBQTtBQ0dGOztBRERBO0VBQ0UsWUFBQTtBQ0lGOztBREZBOztFQUVFLFdBQUE7RUFDQSxhQUFBO0FDS0Y7O0FESEE7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QUNBLFdBQUE7QUFxckJGOztBQWxyQkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkdyQnVCO0FIMHNCekI7O0FBbHJCQTtFQUNFLCtCQUFBO0VBQ0EsZ0JBQUE7QUFxckJGO0FFbnRCRTtFRjRCRjtJQUlJLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VBdXJCRjtBQUNGO0FFcHRCRTtFRnNCRjtJQVNJLGVBQUE7SUFDQSxrQkFBQTtFQXlyQkY7QUFDRjs7QUF0ckJBO0VBQ0UsbUJHbENhO0FIMnRCZjtBRXB1QkU7RUYwQ0Y7SUFHSSxlQUFBO0lBQ0EsaUJBQUE7RUEyckJGO0FBQ0Y7QUVwdUJFO0VGb0NGO0lBT0ksZUFBQTtFQTZyQkY7QUFDRjtBQTVyQkU7RUFDRSxjR25EUTtFSG9EUixxQkFBQTtBQThyQko7QUE1ckJFO0VBQ0UscUJBQUE7RUFDQSxjRzNEZTtBSHl2Qm5COztBQTNyQkE7RUFDRSxtQkdwRGE7RUhxRGIsZUFBQTtFQUNBLGdCQUFBO0FBOHJCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBFcmljIE1leWVyJ3MgQ1NTIFJlc2V0XFxyXFxuICAgaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiAgIFRoaXMgaXMgYSBTYXNzIHBhcnRpYWxcXHJcXG4qL1xcclxcblxcclxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcbiAgcXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICBib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0ICdzZXR0aW5ncy9yZXNldCc7XFxyXFxuQGltcG9ydCBcXFwic2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbkBpbXBvcnQgXFxcInNlY3Rpb25zL2hlYWRlclxcXCI7XFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvYXNpZGVcXFwiO1xcclxcbkBpbXBvcnQgXFxcInNlY3Rpb25zL2Zvb3RlclxcXCI7XFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvbWFpbi1wYWdlXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy93b3Jrb3V0XFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy9maWd1cmVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy9jb25jYWN0XFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy9ub3RfcmVhZHlfcGFnZVxcXCI7XFxyXFxuXFxyXFxuLnBhZ2VfY29udGFpbmVye1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICAvL2JhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay1iYWNrZ3JvdW5kO1xcclxcbn1cXHJcXG4ubWFpbl9jb250YWluZXJ7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgY2xlYXI6IGJvdGg7XFxyXFxuICByaWdodDogLTEwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS1iYWNrZ3JvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyMXtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5LCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIG1hcmdpbjogMCAwIDIwcHggMDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgbWFyZ2luLWJsb2NrOiAyMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyMntcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG4gIC5jaG9zZW57XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItcmVkO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuICAubm90X2Nob3NlbntcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogJGNvbG9yLWZvbnQtYmxhY2s7XFxyXFxuICB9XFxyXFxufVxcclxcbi5oZWFkZXIze1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4ubWVudV9tYWluLWNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICB0b3A6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHotaW5kZXg6IDUwMDtcXHJcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICBib3gtc2hhZG93OiAycHggM3B4IDNweCAycHggJGNvbG9yLXNvZnQtZ3JleTtcXHJcXG4gIC8vYm9yZGVyLWJvdHRvbTogMnB4IGJsYWNrIHNvbGlkO1xcclxcbiAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgd2lkdGg6IDkwdnc7XFxyXFxuICB9XFxyXFxuICAubWVudV9tYWluIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICBnYXA6IDIycHg7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICBnYXA6IDUlO1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnVfbWFpbl9lbGVtZW50LCBhe1xcclxcblxcclxcbiAgICAgIEBpbmNsdWRlIGRlc2t0b3B7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICAgIGNvbG9yOiAkY29sb3ItZm9udC1ibGFjaztcXHJcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcblxcclxcbkBtaXhpbiBkZXNrdG9wIHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIG1vYmlsZSB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBoZWFkZXIxIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gaGVhZGVyMntcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gaGVhZGVyM3tcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZGVzY3JpcHRpb257XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiAkY29sb3ItZm9udC1ibGFjaztcXHJcXG59XCIsXCJcXHJcXG4kY29sb3ItZm9udC1ibGFjazogIzAwMDAwMDtcXHJcXG4kY29sb3ItZm9udC13aGl0ZTogI0ZGRkZGRjtcXHJcXG5cXHJcXG4kY29sb3ItcmVkOiAjQjAyMzIzO1xcclxcbiRjb2xvci1ibGFjay1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xcclxcbiRjb2xvci1uZWFybHktYmxhY2s6ICMxRTFFMUU7XFxyXFxuJGNvbG9yLXdoaXRlLWJhY2tncm91bmQ6ICNGRkZGRkY7XFxyXFxuJGNvbG9yLXNvZnQtZ3JleTogI0Q4RDhEODtcXHJcXG4kY29sb3ItY2hhbGstZ3JleTogI0Q2RDZENjtcXHJcXG4kY29sb3ItZ3JleTogIzU5NTk1OTtcXHJcXG5cXHJcXG4kZm9udC1wcmltYXJ5OiBSb2JvdG87XCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLm1lbnVfYXNpZGUtY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAubWVudV9hc2lkZSB7XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICB3aWR0aDogMTUlO1xcclxcbiAgICB9XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwM3B4O1xcclxcbiAgICBnYXA6IDE4cHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLWJhY2tncm91bmQ7XFxyXFxuICAgIC5tZW51X2FzaWRlX2VsZW1lbnQge1xcclxcbiAgICAgIG1hcmdpbjogMCAwIDAgMTVweDtcXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgIG1hcmdpbjogMCAwIDAgMnB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBhe1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnksIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgIGNvbG9yOiAkY29sb3ItZm9udC13aGl0ZTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiA2cHg7XFxyXFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbi5mb290ZXJfY29udGFpbmVye1xcclxcbiAgY2xlYXI6IGJvdGg7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudV9mb290ZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMCAzMHB4IDAgMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLW5lYXJseS1ibGFjaztcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnVfZm9vdGVyX2xpc3R7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgZ2FwOiA1MHB4O1xcclxcbiAgICAgIG1hcmdpbjogMCAxNXB4IDAgMDtcXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICBnYXA6IDEwJTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgYSB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIGNvbG9yOiAjOTI4RThFO1xcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIGF7XFxyXFxuICAgICAgY29sb3I6ICRjb2xvci1zb2Z0LWdyZXk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLm9uZV9wYWdlcntcXHJcXG4gIGhlaWdodDogOTB2aDtcXHJcXG59XFxyXFxuLm1haW5fcGFnZXtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nL2ltZ19tYWluX3BhZ2UuanBlZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIHotaW5kZXg6IDIwMDtcXHJcXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDY2LjUlO1xcclxcbiAgICAvL2JhY2tncm91bmQtcG9zaXRpb24teDogMTc1JTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXHJcXG4gICAgcmlnaHQ6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNpcmNsZXNfd29ya291dHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtYmFja2dyb3VuZDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgd2lkdGg6IDE3MHB4O1xcclxcbiAgICAgIGhlaWdodDogMTcwcHg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICB9XFxyXFxuICAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMSl7XFxyXFxuICAgIGJvcmRlcjogMTBweCAjRTdFNkU2IHNvbGlkO1xcclxcbiAgICBoMiwgYSB7XFxyXFxuICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLWNoaWxkKDIpe1xcclxcbiAgICBib3JkZXI6IDEwcHggI0NDQ0JDQiBzb2xpZDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoMiwgYSB7XFxyXFxuICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMyl7XFxyXFxuICAgIGJvcmRlcjogMTBweCAjOUQ5RDlEIHNvbGlkO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGgyLCBhIHtcXHJcXG4gICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4uYWJvdXRfcGxhdGZvcm17XFxyXFxuICB3aWR0aDogMjk1cHg7XFxyXFxuXFxyXFxuICAuYWJvdXRfcGxhdGZvcm1fdGV4dHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHJcXG4gIH1cXHJcXG59XFxyXFxuICAuaGVhZGVyMyB7XFxyXFxuICAgIG1hcmdpbi1ibG9jazogMjBweCAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG5cXHJcXG4ud29ya291dHtcXHJcXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgIHBhZGRpbmc6IDUlO1xcclxcbiAgfVxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWNoYWxrLWdyZXk7XFxyXFxuICAuaGVhZGVyNHtcXHJcXG4gICAgcGFkZGluZy1ibG9jazogMTBweCAyMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBjb2xvcjogJGNvbG9yLXJlZDtcXHJcXG4gIH1cXHJcXG4gIC5kZXNjcmlwdGlvbl90ZXh0e1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBjb2xvcjogJGNvbG9yLWZvbnQtd2hpdGU7XFxyXFxuICB9XFxyXFxuICAud29ya291dF9pbWdhZ2VzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLndvcmtvdXRfaW1hZ2Uge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS1iYWNrZ3JvdW5kO1xcclxcbiAgICAgIEBpbmNsdWRlIGRlc2t0b3B7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgbWFyZ2luOiA1JTtcXHJcXG5cXHJcXG4gICAgICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbi5maWd1cmVzX2NvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtYmFja2dyb3VuZDtcXHJcXG5cXHJcXG4gIC5tYWluX3BhZ2VfZmlndXJlcyB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXHJcXG4gICAgLmZpZ3VyZXNfcGFnZV9oZWFkIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcblxcclxcbiAgICAgIC5maWd1cmVzX3N0cmlwZSB7XFxyXFxuICAgICAgICB3aWR0aDogNTc1cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzdDN0M3O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5maWd1cmVzX2NpcmNsZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtYmFja2dyb3VuZDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHRvcDogLTEwcHg7XFxyXFxuICAgICAgICBvcGFjaXR5OiA1NSU7XFxyXFxuICAgICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgICAgICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuaGVhZGVyMyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5LCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hZGRfZmlndXJlIHtcXHJcXG4gICAgICB3aWR0aDogMTEwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1ibGFjay1iYWNrZ3JvdW5kO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHJpZ2h0OiAxNSU7XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgYSB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgICAgIGNvbG9yOiAkY29sb3ItZm9udC13aGl0ZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiA4cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmlndXJlc19zcGFjZV9pbWcge1xcclxcbiAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltZy9QRF9pbWdfM19zenBhZ2F0LmpwZWdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgei1pbmRleDogMjAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0yNzBweDtcXHJcXG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3O1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmlndXJlc19ib3gge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRlc2NyaXB0aW9uX3RleHR7XFxyXFxuICAgICAgd2lkdGg6IDYwMHB4O1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAuZmlndXJlcyB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxyXFxuICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5maWd1cmUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgICAgICBtYXJnaW46IDUlO1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxufVwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcblxcclxcbi5jb250YWN0X2JveCB7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeSwgc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTAlO1xcclxcbiAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWN0IHtcXHJcXG4gICAgLmhlYWRlcjEge1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0X2luZm8ge1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ibG9jazogMTVweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmRlc2NyaXB0aW9uX3RleHQge1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5oZWFkZXIzIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmFkZHJlc3Mge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcblxcclxcbiAgICAgICAgYSB7XFxyXFxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm1fbWVzc2FnZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuXFxyXFxuICAgIC5wZXJzb25hbF9kYXRlIHtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGdhcDogNXB4O1xcclxcblxcclxcbiAgICAgIGxhYmVsIHtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaW5wdXQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgbGVmdDogMTkwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jYXNlLCAuZmlndXJlX2xldmVsLCAuZmlndXJlX2NhdGVnb3J5IHtcXHJcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICAgICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBzZWxlY3Qge1xcclxcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA6OnNlbGVjdGlvbiB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgb3B0aW9uIHtcXHJcXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZpZ3VyZV9hZGRfY2F0ZWdvcnkge1xcclxcbiAgICAgIHdpZHRoOiAzOTBweDtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAgICAgcCB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib3hfbWVzc2FnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGl0bGVfbWVzc2FnZSB7XFxyXFxuICAgICAgcGFkZGluZy1ibG9jazogMTBweDtcXHJcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50ZXh0YXJlYSB7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hZ3JlZW1lbnQge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3ggaW5wdXQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGhlaWdodDogMTBweDtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3gge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IHNwYW4ge1xcclxcbiAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgZmxleC1iYXNpczogMTBweDtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlndXJlX2FkZF9jYXRlZ29yeSB7XFxyXFxuICAuY2hlY2tib3hfY2F0ZWdvcnkgc3BhbiB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCBpbnB1dDpjaGVja2VkICsgc3BhbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc29mdC1ncmV5O1xcclxcbiAgYm9yZGVyOiAycHggbGlnaHRibHVlIHNvbGlkO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZmlndXJlX2NhdGVnb3JpZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdCB7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggYmxhY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogMjUlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4ubm90X3JlYWR5e1xcclxcbiAgaGVpZ2h0OiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU1OTBjMzc0NzAzMjAyZjI2MDUzXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9