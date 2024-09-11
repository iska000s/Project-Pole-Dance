"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 31:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(35), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(36), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(37), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
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
    margin-left: 60px;
  }
}
@media (max-width: 736px) {
  .menu_main-container .menu_main {
    gap: 5%;
    margin-left: 5%;
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
    font-size: 90%;
  }
}

.menu_aside-container {
  height: 100%;
}
.menu_aside-container .menu_aside {
  position: fixed;
  display: flex;
  flex-direction: column;
  padding-top: 103px;
  gap: 18px;
  height: 100%;
  width: 10vw;
  background-color: #000000;
}
@media (max-width: 736px) {
  .menu_aside-container .menu_aside {
    width: 15vw;
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
    font-size: 58%;
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
  background-color: #000000;
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
}
@media (max-width: 736px) {
  .footer_container .menu_footer {
    padding: 5px;
    justify-content: space-around;
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
    font-size: 14px;
  }
}
.footer_container .menu_footer a {
  color: #D8D8D8;
}

.main_page {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  z-index: 200;
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
.workout .workout_imgages, .workout ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
@media (min-width: 736px) {
  .workout .workout_imgages, .workout ul {
    margin-right: 100px;
    margin-bottom: 60px;
  }
}
@media (max-width: 736px) {
  .workout .workout_imgages, .workout ul {
    margin-bottom: 20%;
  }
}
.workout .workout_imgages .workout_image, .workout ul .workout_image {
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (min-width: 736px) {
  .workout .workout_imgages .workout_image, .workout ul .workout_image {
    margin-right: 40px;
    margin-bottom: 50px;
    height: 350px;
    width: 300px;
  }
}
@media (max-width: 736px) {
  .workout .workout_imgages .workout_image, .workout ul .workout_image {
    margin: 5%;
    height: 150px;
    width: 100px;
  }
}
@media (min-width: 736px) {
  .workout .workout_imgages .workout_image img, .workout ul .workout_image img {
    max-height: 320px;
    max-width: 280px;
  }
}
@media (max-width: 736px) {
  .workout .workout_imgages .workout_image img, .workout ul .workout_image img {
    max-height: 120px;
    width: 80px;
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
.figures_container .figures_box .figures ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
}
@media (min-width: 736px) {
  .figures_container .figures_box .figures ul {
    margin-right: 80px;
  }
}
.figures_container .figures_box .figures ul .figure {
  background-color: #595959;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (min-width: 736px) {
  .figures_container .figures_box .figures ul .figure {
    margin-right: 10px;
    margin-bottom: 10px;
    height: 250px;
    width: 230px;
  }
}
@media (max-width: 736px) {
  .figures_container .figures_box .figures ul .figure {
    margin: 5%;
    height: 150px;
    width: 100px;
  }
}
@media (min-width: 736px) {
  .figures_container .figures_box .figures ul .figure img {
    max-height: 230px;
    max-width: 220px;
  }
}
@media (max-width: 736px) {
  .figures_container .figures_box .figures ul .figure img {
    max-height: 120px;
    max-width: 80px;
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
    margin-bottom: 60px;
    height: 100vh;
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
@media (max-width: 736px) {
  .contact_box .form_message {
    width: 100%;
  }
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
@media (max-width: 736px) {
  .contact_box .form_message .personal_date input {
    width: 40%;
  }
}
@media (max-width: 736px) {
  .contact_box .form_message .caseAdd {
    width: 100%;
  }
}
.contact_box .form_message .case, .contact_box .form_message .figure_level, .contact_box .form_message .figure_category {
  font-size: 12px;
  font-family: Roboto;
  width: 400px;
  height: 20px;
  margin-bottom: 15px;
  cursor: pointer;
}
@media (max-width: 736px) {
  .contact_box .form_message .case, .contact_box .form_message .figure_level, .contact_box .form_message .figure_category {
    width: 93%;
  }
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
    width: 93%;
  }
}
.contact_box .box_message .title_message {
  padding-block: 10px;
  font-weight: 600;
}
.contact_box .box_message .textarea {
  margin-bottom: 5px;
  resize: none;
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

.not_ready .main_page {
  height: 88vh;
}
.not_ready .main_page .header2 {
  width: 25%;
}
.not_ready .main_page .header2 a {
  color: cadetblue;
  line-height: 40px;
}

.porady_page {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  background-position-y: -250px;
}
.porady_page .header1 {
  margin-left: 50px;
}
.porady_page .header3 {
  padding-bottom: 30px;
}

.advice1, .advice3 {
  background-color: #FFFFFF;
  margin: 20px 50px 120px 50px;
  padding: 20px;
  line-height: 20px;
  font-family: Roboto;
  font-weight: 300;
}

.advice2 {
  margin: 20px 50px 120px 50px;
  padding: 20px;
  line-height: 20px;
  font-family: Roboto;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  background-color: #D6D6D6;
  opacity: 75%;
  width: 70%;
}
.advice2 .circles_advice_box {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}
.advice2 .circles_advice_box .circle_advice {
  width: 30%;
  justify-content: center;
}
.advice2 .circles_advice_box .circle_advice .header3, .advice2 .circles_advice_box .circle_advice p {
  display: flex;
  justify-content: center;
}

.page_container {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}

.main_container {
  width: 95%;
  margin-left: 10vw;
}
@media (max-width: 736px) {
  .main_container {
    margin-left: 15vw;
  }
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
}`, "",{"version":3,"sources":["webpack://./Project/scss/settings/_reset.scss","webpack://./Project/scss/index.scss","webpack://./Project/scss/sections/_header.scss","webpack://./Project/scss/settings/_mixins.scss","webpack://./Project/scss/settings/_variables.scss","webpack://./Project/scss/sections/_aside.scss","webpack://./Project/scss/sections/_footer.scss","webpack://./Project/scss/sections/_main-page.scss","webpack://./Project/scss/sections/_workout.scss","webpack://./Project/scss/sections/_figures.scss","webpack://./Project/scss/sections/_concact.scss","webpack://./Project/scss/sections/_not_ready_page.scss","webpack://./Project/scss/sections/_advice.scss"],"names":[],"mappings":"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","sourcesContent":["/* Eric Meyer's CSS Reset\r\n   http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n   This is a Sass partial\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n  display: block;\r\n}\r\nbody {\r\n  line-height: 1;\r\n}\r\nol, ul {\r\n  list-style: none;\r\n}\r\nblockquote, q {\r\n  quotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n  content: '';\r\n  content: none;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n","@import 'settings/reset';\r\n@import \"settings/variables\";\r\n@import \"settings/mixins\";\r\n\r\n@import \"sections/header\";\r\n@import \"sections/aside\";\r\n@import \"sections/footer\";\r\n@import \"sections/main-page\";\r\n@import \"sections/workout\";\r\n@import \"sections/figures\";\r\n@import \"sections/concact\";\r\n@import \"sections/not_ready_page\";\r\n@import \"sections/advice\";\r\n\r\n\r\n.page_container{\r\n  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n  // position: absolute;\r\n  // box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n  //background-color: $color-black-background;\r\n}\r\n.main_container{\r\n  width: 95%;\r\n  margin-left: 10vw;\r\n  @include mobile{\r\n    margin-left: 15vw;\r\n  }\r\n}\r\n// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1\r\n// .page_container{\r\n//   position: relative;\r\n//   box-sizing: border-box;\r\n//   display: flex;\r\n//   flex-direction: row;\r\n//   height: 100%;\r\n//   width: 100%;\r\n//   overflow-x: hidden;\r\n//   //background-color: $color-black-background;\r\n// }\r\n// .main_container{\r\n//   position: relative;\r\n//   width: 90%;\r\n//   height: 100%;\r\n//   clear: both;\r\n//   right: -15%;\r\n//   background-color: $color-white-background;\r\n//   @include mobile{\r\n//     position: relative;\r\n//     width: 80%;\r\n//     right: -15%;\r\n//   }\r\n// }\r\n\r\n.header1{\r\n  font-family: $font-primary, sans-serif;\r\n  font-weight: 300;\r\n  @include desktop {\r\n    font-size: 50px;\r\n    margin: 0 0 20px 0;\r\n    padding-top: 40px;\r\n  }\r\n  @include mobile{\r\n    font-size: 30px;\r\n    margin-block: 20px;\r\n  }\r\n}\r\n\r\n.header2{\r\n  font-family: $font-primary;\r\n  @include desktop {\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n  }\r\n  @include mobile{\r\n    font-size: 14px;\r\n  }\r\n  .chosen{\r\n    color: $color-red;\r\n    text-decoration: none;\r\n  }\r\n  .not_chosen{\r\n    text-decoration: none;\r\n    color: $color-font-black;\r\n  }\r\n}\r\n.header3{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.menu_main-container {\r\n  height: 60px;\r\n  top: 10px;\r\n  background-color: white;\r\n  z-index: 500;\r\n  position: sticky;\r\n  box-shadow: 2px 3px 3px 2px $color-soft-grey;\r\n  //border-bottom: 2px black solid;\r\n  @include mobile {\r\n    width: 90vw;\r\n  }\r\n  .menu_main {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    @include desktop {\r\n      gap: 22px;\r\n      margin-left: 60px;\r\n    }\r\n    @include mobile{\r\n      gap: 5%;\r\n      margin-left: 5%;\r\n      line-height: 10px;\r\n    }\r\n    .menu_main_element, a{\r\n\r\n      @include desktop{\r\n        font-size: 16px;\r\n      }\r\n      @include mobile{\r\n        font-size: 90%;\r\n      }\r\n      flex-direction: row;\r\n      font-family: $font-primary;\r\n      font-weight: 300;\r\n      color: $color-font-black;\r\n      text-decoration: none;\r\n    }\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n\r\n@mixin desktop {\r\n  @media (min-width: 736px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile {\r\n  @media (max-width: 736px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin header1 {\r\n  font-family: $font-primary;\r\n  font-size: 50px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin header2{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin header3{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin description{\r\n  font-family: $font-primary;\r\n  font-size: 14px;\r\n  color: $color-font-black;\r\n}","\r\n$color-font-black: #000000;\r\n$color-font-white: #FFFFFF;\r\n\r\n$color-red: #B02323;\r\n$color-black-background: #000000;\r\n$color-nearly-black: #1E1E1E;\r\n$color-white-background: #FFFFFF;\r\n$color-soft-grey: #D8D8D8;\r\n$color-chalk-grey: #D6D6D6;\r\n$color-grey: #595959;\r\n\r\n$font-primary: Roboto;","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.menu_aside-container {\r\n  height: 100%;\r\n  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n  // position: absolute;\r\n  .menu_aside {\r\n    position: fixed;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-top: 103px;\r\n    gap: 18px;\r\n    height: 100%;\r\n    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n    width: 10vw;\r\n    background-color: $color-black-background;\r\n    @include mobile{\r\n      width: 15vw;\r\n    }\r\n    .menu_aside_element {\r\n      margin: 0 0 0 15px;\r\n      @include mobile {\r\n      margin: 0 0 0 2px;\r\n      }\r\n      a{\r\n        text-decoration: none;\r\n        font-size: 14px;\r\n        font-family: $font-primary, sans-serif;\r\n        font-weight: bold;\r\n        color: $color-font-white;\r\n        @include mobile{\r\n          font-size: 58%;\r\n          font-weight: 300;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.footer_container{\r\n  clear: both;\r\n  position: fixed;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  width: 90%;\r\n  height: 80px;\r\n  background-color: #000000;\r\n  @include mobile{\r\n    width: 90%;\r\n    right: 0;\r\n  }\r\n\r\n  .menu_footer{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 50px;\r\n    width: 100%;\r\n    padding: 0 30px 0 30px;\r\n    // background-color: $color-nearly-black;\r\n    @include mobile{\r\n      padding: 5px;\r\n      justify-content: space-around;\r\n    }\r\n    .menu_footer_list{\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: center;\r\n      gap: 50px;\r\n      margin: 0 15px 0 0;\r\n\r\n      @include mobile{\r\n        gap: 10%;\r\n      }\r\n      a {\r\n        font-family: $font-primary;\r\n        font-size: 12px;\r\n        text-decoration: none;\r\n        color: #928E8E;\r\n        @include mobile{\r\n          font-size: 14px;\r\n        }\r\n      }\r\n    }\r\n    a{\r\n      color: $color-soft-grey;\r\n    }\r\n  }\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.one_pager{\r\n// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n  // height: 90vh;\r\n}\r\n.main_page{\r\n  //background-image: url(\"../img/img_main_page.jpeg\");\r\n  background-image: url(\"../img/img_main_page.jpeg\");\r\n  background-repeat: no-repeat;\r\n  z-index: 200;\r\n  @include desktop {\r\n    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n    // background-attachment: fixed;\r\n    // background-size: 66.5%;\r\n    // background-position: right;\r\n    // margin-left: 60px;\r\n  }\r\n  @include mobile{\r\n    background-size: 100%;\r\n    width: 90%;\r\n    margin-left: 5%;\r\n    right: 10px;\r\n  }\r\n\r\n\r\n  .circles_workout-container{\r\n    display: flex;\r\n    @include mobile {\r\n      flex-wrap: wrap;\r\n      justify-content: space-around;\r\n    }\r\n\r\n    .circles_workout{\r\n      background-color: $color-white-background;\r\n      border-radius: 50%;\r\n      width: 170px;\r\n      height: 170px;\r\n      flex-direction: row;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      margin-right: 20px;\r\n      @include mobile{\r\n        width: 100px;\r\n        height: 100px;\r\n        margin: 0;\r\n      }\r\n    }\r\n\r\n  }\r\n  .circles_workout-container :nth-of-type(1){\r\n    border: 10px #E7E6E6 solid;\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n  .circles_workout-container :nth-child(2){\r\n    border: 10px #CCCBCB solid;\r\n    position: relative;\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n  .circles_workout-container :nth-of-type(3){\r\n    border: 10px #9D9D9D solid;\r\n    position: relative;\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n.about_platform{\r\n  width: 295px;\r\n\r\n  .about_platform_text{\r\n    margin-right: 20px;\r\n    padding-bottom: 20px;\r\n    font-family: $font-primary;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n\r\n  }\r\n}\r\n  .header3 {\r\n    margin-block: 20px 10px;\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n\r\n.workout{\r\n  @include desktop {\r\n    padding-left: 60px;\r\n  }\r\n  @include mobile{\r\n    padding: 5%;\r\n  }\r\n  background-color: $color-chalk-grey;\r\n  .header4{\r\n    padding-block: 10px 20px;\r\n    font-family: $font-primary;\r\n    font-size: 24px;\r\n    font-weight: 300;\r\n    color: $color-red;\r\n  }\r\n  .description_text{\r\n    margin-bottom: 20px;\r\n    font-family: $font-primary;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: $color-font-white;\r\n  }\r\n  .workout_imgages, ul {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    @include desktop {\r\n      margin-right: 100px;\r\n      margin-bottom: 60px;\r\n    }\r\n    @include mobile{\r\n      margin-bottom: 20%;\r\n    }\r\n    .workout_image {\r\n      background-color: $color-white-background;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n\r\n      @include desktop{\r\n        margin-right: 40px;\r\n        margin-bottom: 50px;\r\n        height: 350px;\r\n        width: 300px;\r\n      }\r\n      @include mobile{\r\n        margin: 5%;\r\n        height: 150px;\r\n        width: 100px;\r\n      }\r\n      img {\r\n        @include desktop{\r\n          //min-height: 200px;\r\n          max-height: 320px;\r\n          max-width: 280px;\r\n        }\r\n        @include mobile{\r\n          max-height: 120px;\r\n          width: 80px;\r\n        }\r\n\r\n      }\r\n    }\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.figures_container {\r\n  background-color: $color-white-background;\r\n\r\n  .main_page_figures {\r\n    padding-bottom: 100px;\r\n    .figures_page_head {\r\n      display: flex;\r\n      flex-direction: row;\r\n      margin-top: 50px;\r\n      margin-bottom: 20px;\r\n\r\n      .figures_stripe {\r\n        width: 575px;\r\n        height: 40px;\r\n        background-color: #C7C7C7;\r\n        display: flex;\r\n        flex-direction: row;\r\n      }\r\n\r\n      .figures_circle {\r\n        background-color: $color-white-background;\r\n        border-radius: 50%;\r\n        position: relative;\r\n        top: -10px;\r\n        opacity: 55%;\r\n        @include desktop {\r\n          width: 60px;\r\n          height: 60px;\r\n          margin: 0 10px 0 10px;\r\n        }\r\n        @include mobile {\r\n          top: 0;\r\n          width: 30px;\r\n          height: 30px;\r\n        }\r\n      }\r\n\r\n      .header3 {\r\n        display: flex;\r\n        align-items: center;\r\n        height: 100%;\r\n        font-family: $font-primary, sans-serif;\r\n        font-weight: 300;\r\n        @include desktop {\r\n          font-size: 24px;\r\n        }\r\n        @include mobile {\r\n          font-size: 16px;\r\n        }\r\n      }\r\n    }\r\n\r\n    .add_figure {\r\n      width: 110px;\r\n      height: 40px;\r\n      background: $color-black-background;\r\n      border-radius: 30%;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      position: absolute;\r\n      right: 15%;\r\n      @include mobile{\r\n        width: 30px;\r\n        right: 0;\r\n      }\r\n      a {\r\n        font-family: $font-primary;\r\n        color: $color-font-white;\r\n        font-size: 14px;\r\n        text-decoration: none;\r\n        @include mobile{\r\n          font-size: 8px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .figures_space_img {\r\n    height: 350px;\r\n    background-image: url(\"../img/PD_img_3_szpagat.jpeg\");\r\n    background-repeat: no-repeat;\r\n    z-index: 200;\r\n    background-position-y: -270px;\r\n    @include desktop {\r\n      background-attachment: fixed;\r\n      background-size: 100vw;\r\n    }\r\n    @include mobile {\r\n      height: 150px;\r\n      background-size: 100%;\r\n      background-position: 200% 0;\r\n    }\r\n  }\r\n\r\n  .figures_box {\r\n    padding-top: 20px;\r\n\r\n    @include desktop {\r\n      padding-left: 60px;\r\n    }\r\n    @include mobile {\r\n      padding-left: 10%;\r\n    }\r\n    .description_text{\r\n      width: 600px;\r\n      margin-bottom: 20px;\r\n      font-family: $font-primary;\r\n      font-size: 14px;\r\n      font-weight: 400;\r\n      color: $color-font-black;\r\n      @include mobile{\r\n        width: 90%;\r\n        margin-bottom: 10px;\r\n      }\r\n    }\r\n\r\n    .figures ul {\r\n      display: flex;\r\n      flex-direction: row;\r\n      flex-wrap: wrap;\r\n      justify-content: left;\r\n\r\n      @include desktop {\r\n        margin-right: 80px;\r\n      }\r\n      .figure {\r\n        background-color: $color-grey;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        @include desktop {\r\n          margin-right: 10px;\r\n          margin-bottom: 10px;\r\n          height: 250px;\r\n          width: 230px;\r\n        }\r\n        @include mobile {\r\n          margin: 5%;\r\n          height: 150px;\r\n          width: 100px;\r\n        }\r\n        img{\r\n          @include desktop {\r\n            max-height: 230px;\r\n            max-width: 220px;\r\n          }\r\n          @include mobile {\r\n\r\n            max-height: 120px;\r\n            max-width: 80px;\r\n          }}\r\n\r\n      }\r\n    }\r\n  }\r\n\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n\r\n.contact_box {\r\n  font-family: $font-primary, sans-serif;\r\n  margin-top: 30px;\r\n  margin-left: 40px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 10%;\r\n  @include mobile {\r\n    flex-direction: column;\r\n    align-items: start;\r\n    margin-left: 20px;\r\n    margin-bottom: 60px;\r\n    height: 100vh;\r\n  }\r\n\r\n  .contact {\r\n    .header1 {\r\n      margin: 0;\r\n      padding: 0;\r\n    }\r\n\r\n    .contact_info {\r\n      font-weight: 300;\r\n      @include desktop {\r\n        font-size: 20px;\r\n        padding-top: 20px;\r\n      }\r\n      @include mobile {\r\n        font-size: 14px;\r\n        margin-block: 15px;\r\n      }\r\n\r\n      .description_text {\r\n        line-height: 30px;\r\n      }\r\n\r\n      .header3 {\r\n        margin-top: 50px;\r\n        margin-bottom: 15px;\r\n        @include mobile {\r\n          margin-top: 20px;\r\n        }\r\n      }\r\n\r\n      .address {\r\n        font-size: 16px;\r\n\r\n        a {\r\n          padding-left: 10px;\r\n          text-decoration: none;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .form_message {\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 50%;\r\n    gap: 5px;\r\n    @include mobile{\r\n      width: 100%;\r\n    }\r\n\r\n    .personal_date {\r\n      position: relative;\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 5px;\r\n\r\n      label {\r\n        font-weight: 600;\r\n        width: 300px;\r\n        margin-bottom: 20px;\r\n        display: flex;\r\n        align-items: center\r\n      }\r\n\r\n      input {\r\n        font-size: 12px;\r\n        width: 200px;\r\n        height: 20px;\r\n        position: absolute;\r\n        left: 190px;\r\n        @include mobile{\r\n          width: 40%;\r\n        }\r\n      }\r\n    }\r\n    .caseAdd{\r\n      @include mobile{\r\n        width: 100%;\r\n      }\r\n    }\r\n\r\n    .case, .figure_level, .figure_category {\r\n      font-size: 12px;\r\n      font-family: $font-primary;\r\n      width: 400px;\r\n      height: 20px;\r\n      margin-bottom: 15px;\r\n      cursor: pointer;\r\n      @include mobile{\r\n        width: 93%;\r\n      }\r\n    }\r\n\r\n    select {\r\n      -webkit-border-radius: 25px;\r\n      -moz-border-radius: 25px;\r\n      border-radius: 25px;\r\n    }\r\n\r\n    ::selection {\r\n      background-color: lightsteelblue;\r\n    }\r\n\r\n    option {\r\n      -webkit-border-radius: 25px;\r\n      -moz-border-radius: 25px;\r\n      border-radius: 25px;\r\n    }\r\n\r\n    .figure_add_category {\r\n      width: 390px;\r\n      //display: flex;\r\n      flex-direction: column;\r\n\r\n      p {\r\n        font-weight: 600;\r\n        margin-bottom: 15px;\r\n      }\r\n\r\n    }\r\n  }\r\n\r\n  .box_message {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 400px;\r\n    @include mobile {\r\n      padding-bottom: 60px;\r\n      width: 93%;\r\n    }\r\n\r\n    .title_message {\r\n      padding-block: 10px;\r\n      font-weight: 600;\r\n    }\r\n\r\n    .textarea {\r\n      margin-bottom: 5px;\r\n      resize: none;\r\n    }\r\n\r\n    .agreement {\r\n      font-size: 10px;\r\n    }\r\n\r\n  }\r\n\r\n}\r\n\r\n.checkbox input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  height: 10px;\r\n  width: 10px;\r\n}\r\n\r\n.checkbox {\r\n  cursor: pointer;\r\n  display: flex;\r\n}\r\n\r\n.checkbox span {\r\n  height: 10px;\r\n  width: 10px;\r\n  border: 2px solid grey;\r\n  flex-basis: 10px;\r\n  flex-shrink: 0;\r\n  cursor: pointer;\r\n  margin-right: 10px;\r\n}\r\n\r\n.figure_add_category {\r\n  .checkbox_category span {\r\n    border: 2px solid grey;\r\n  }\r\n}\r\n\r\n.checkbox input:checked + span {\r\n  background-color: $color-soft-grey;\r\n  border: 2px lightblue solid;\r\n\r\n}\r\n\r\n.figure_categories {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n}\r\n\r\n.submit {\r\n  font-family: $font-primary;\r\n  width: 80px;\r\n  height: 20px;\r\n  font-weight: 300;\r\n  background-color: $color-grey;\r\n  color: white;\r\n  border: none;\r\n  box-shadow: 1px 2px 5px black;\r\n  margin-left: 25%;\r\n  cursor: pointer;\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.not_ready .main_page {\r\n  height: 88vh;\r\n  .header2 {\r\n    width: 25%;\r\n    a {\r\n      color: cadetblue;\r\n      line-height: 40px;\r\n    }\r\n  }\r\n}\r\n\r\n\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.porady_page{\r\n  background-image: url(\"../img/2.jpeg\");\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-position-y: -250px;\r\n  .header1{\r\n    margin-left: 50px;\r\n  }\r\n  .header3{\r\n    padding-bottom: 30px;\r\n  }\r\n}\r\n.advice1, .advice3{\r\n  background-color: $color-white-background;\r\n  margin: 20px 50px 120px 50px;\r\n  padding: 20px;\r\n  line-height: 20px;\r\n  font-family: $font-primary;\r\n  font-weight: 300;\r\n}\r\n\r\n.advice2{\r\n  margin: 20px 50px 120px 50px;\r\n  padding: 20px;\r\n  line-height: 20px;\r\n  font-family: $font-primary;\r\n  font-weight: 300;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-self: center;\r\n  align-items: center;\r\n  background-color: $color-chalk-grey;\r\n  opacity: 75%;\r\n  width: 70%;\r\n\r\n  .circles_advice_box{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n    .circle_advice{\r\n      width: 30%;\r\n      justify-content: center;\r\n      .header3, p{\r\n        display: flex;\r\n        justify-content: center;\r\n      }\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f1ae7851a562b1043d84")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zYjVmN2I1MmZhYjc5ZjgwZGU1YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QyxpRUFBNEM7QUFDeEYsNENBQTRDLGlFQUErQztBQUMzRiw0Q0FBNEMsaUVBQWdDO0FBQzVFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx5ckJBQXlyQixLQUFLLGlCQUFpQixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLFdBQVcsTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFlBQVksWUFBWSxXQUFXLFlBQVksTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxRQUFRLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxhQUFhLGFBQWEsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sYUFBYSxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLGFBQWEsYUFBYSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFlBQVksWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFlBQVksWUFBWSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssT0FBTyxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssT0FBTyxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFlBQVksV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFFBQVEsT0FBTyxVQUFVLFVBQVUsUUFBUSxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLGFBQWEsYUFBYSxRQUFRLE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxRQUFRLE9BQU8sWUFBWSxXQUFXLFVBQVUsV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxRQUFRLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFB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QixrQkFBa0IsNkJBQTZCLHVCQUF1QixxQkFBcUIsc0JBQXNCLHlCQUF5QixLQUFLLDhCQUE4QiwrQkFBK0IsK0JBQStCLE9BQU8sS0FBSyx3Q0FBd0MseUNBQXlDLGtDQUFrQyxTQUFTLDRCQUE0QixvQkFBb0IsMEJBQTBCLHNCQUFzQixlQUFlLEtBQUssaUJBQWlCLGlDQUFpQyxrQkFBa0IsbUJBQW1CLHVCQUF1QixvQ0FBb0MsbUJBQW1CLG1CQUFtQixvQ0FBb0MsdUJBQXVCLHNCQUFzQixLQUFLLHlDQUF5QyxtQ0FBbUMsK0JBQStCLG1CQUFtQixnQkFBZ0IsbUJBQW1CLFdBQVcsMkJBQTJCLDRCQUE0QixTQUFTLE9BQU8sS0FBSyxpREFBaUQsbUNBQW1DLHFCQUFxQiwrQ0FBK0MsbUNBQW1DLDZCQUE2QixvQkFBb0IsNkJBQTZCLG9DQUFvQyxlQUFlLDBCQUEwQixPQUFPLGVBQWUsNkJBQTZCLE9BQU8sS0FBSyx1QkFBdUIsZ0RBQWdELG1DQUFtQyxvQkFBb0Isd0JBQXdCLGlDQUFpQyx1QkFBdUIsS0FBSyxpQkFBaUIsbUNBQW1DLG9CQUFvQix3QkFBd0IsaUNBQWlDLHVCQUF1QixvQkFBb0IsNkJBQTZCLHlCQUF5QiwwQkFBMEIsMENBQTBDLG1CQUFtQixpQkFBaUIsOEJBQThCLHNCQUFzQiw0QkFBNEIsc0NBQXNDLG9CQUFvQix1QkFBdUIscUJBQXFCLGtDQUFrQyxzQkFBc0IsMEJBQTBCLG9DQUFvQyxXQUFXLFNBQVMsT0FBTyxLQUFLLG1CQUFtQjtBQUN0cjRCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7OztVQ24zQnZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2ltZ19tYWluX3BhZ2UuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltZy9QRF9pbWdfM19zenBhZ2F0LmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvMi5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEVyaWMgTWV5ZXIncyBDU1MgUmVzZXRcbiAgIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4gICBUaGlzIGlzIGEgU2FzcyBwYXJ0aWFsXG4qL1xuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsIHEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4ubWVudV9tYWluLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNjBweDtcbiAgdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogNTAwO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3gtc2hhZG93OiAycHggM3B4IDNweCAycHggI0Q4RDhEODtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWVudV9tYWluLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwdnc7XG4gIH1cbn1cbi5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfbWFpbi1jb250YWluZXIgLm1lbnVfbWFpbiB7XG4gICAgZ2FwOiAyMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfbWFpbi1jb250YWluZXIgLm1lbnVfbWFpbiB7XG4gICAgZ2FwOiA1JTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIH1cbn1cbi5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4gLm1lbnVfbWFpbl9lbGVtZW50LCAubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIGEge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4gLm1lbnVfbWFpbl9lbGVtZW50LCAubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIGEge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4gLm1lbnVfbWFpbl9lbGVtZW50LCAubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIGEge1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICB9XG59XG5cbi5tZW51X2FzaWRlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tZW51X2FzaWRlLWNvbnRhaW5lciAubWVudV9hc2lkZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDEwM3B4O1xuICBnYXA6IDE4cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfYXNpZGUtY29udGFpbmVyIC5tZW51X2FzaWRlIHtcbiAgICB3aWR0aDogMTV2dztcbiAgfVxufVxuLm1lbnVfYXNpZGUtY29udGFpbmVyIC5tZW51X2FzaWRlIC5tZW51X2FzaWRlX2VsZW1lbnQge1xuICBtYXJnaW46IDAgMCAwIDE1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfYXNpZGUtY29udGFpbmVyIC5tZW51X2FzaWRlIC5tZW51X2FzaWRlX2VsZW1lbnQge1xuICAgIG1hcmdpbjogMCAwIDAgMnB4O1xuICB9XG59XG4ubWVudV9hc2lkZS1jb250YWluZXIgLm1lbnVfYXNpZGUgLm1lbnVfYXNpZGVfZWxlbWVudCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWVudV9hc2lkZS1jb250YWluZXIgLm1lbnVfYXNpZGUgLm1lbnVfYXNpZGVfZWxlbWVudCBhIHtcbiAgICBmb250LXNpemU6IDU4JTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG59XG5cbi5mb290ZXJfY29udGFpbmVyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZvb3Rlcl9jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbn1cbi5mb290ZXJfY29udGFpbmVyIC5tZW51X2Zvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAzMHB4IDAgMzBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZm9vdGVyX2NvbnRhaW5lciAubWVudV9mb290ZXIge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxufVxuLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIC5tZW51X2Zvb3Rlcl9saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1MHB4O1xuICBtYXJnaW46IDAgMTVweCAwIDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIC5tZW51X2Zvb3Rlcl9saXN0IHtcbiAgICBnYXA6IDEwJTtcbiAgfVxufVxuLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIC5tZW51X2Zvb3Rlcl9saXN0IGEge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM5MjhFOEU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIC5tZW51X2Zvb3Rlcl9saXN0IGEge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIGEge1xuICBjb2xvcjogI0Q4RDhEODtcbn1cblxuLm1haW5fcGFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgei1pbmRleDogMjAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tYWluX3BhZ2Uge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICByaWdodDogMTBweDtcbiAgfVxufVxuLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG59XG4ubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIC5jaXJjbGVzX3dvcmtvdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNzBweDtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIC5jaXJjbGVzX3dvcmtvdXQge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMSkge1xuICBib3JkZXI6IDEwcHggI0U3RTZFNiBzb2xpZDtcbn1cbi5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1vZi10eXBlKDEpIGgyLCAubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgxKSBhIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLWNoaWxkKDIpIHtcbiAgYm9yZGVyOiAxMHB4ICNDQ0NCQ0Igc29saWQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1jaGlsZCgyKSBoMiwgLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLWNoaWxkKDIpIGEge1xuICBib3JkZXI6IG5vbmU7XG59XG4ubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgzKSB7XG4gIGJvcmRlcjogMTBweCAjOUQ5RDlEIHNvbGlkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgzKSBoMiwgLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMykgYSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5tYWluX3BhZ2UgLmFib3V0X3BsYXRmb3JtIHtcbiAgd2lkdGg6IDI5NXB4O1xufVxuLm1haW5fcGFnZSAuYWJvdXRfcGxhdGZvcm0gLmFib3V0X3BsYXRmb3JtX3RleHQge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ubWFpbl9wYWdlIC5oZWFkZXIzIHtcbiAgbWFyZ2luLWJsb2NrOiAyMHB4IDEwcHg7XG59XG5cbi53b3Jrb3V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q2RDZENjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAud29ya291dCB7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLndvcmtvdXQge1xuICAgIHBhZGRpbmc6IDUlO1xuICB9XG59XG4ud29ya291dCAuaGVhZGVyNCB7XG4gIHBhZGRpbmctYmxvY2s6IDEwcHggMjBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogI0IwMjMyMztcbn1cbi53b3Jrb3V0IC5kZXNjcmlwdGlvbl90ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi53b3Jrb3V0IC53b3Jrb3V0X2ltZ2FnZXMsIC53b3Jrb3V0IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAud29ya291dCAud29ya291dF9pbWdhZ2VzLCAud29ya291dCB1bCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLndvcmtvdXQgLndvcmtvdXRfaW1nYWdlcywgLndvcmtvdXQgdWwge1xuICAgIG1hcmdpbi1ib3R0b206IDIwJTtcbiAgfVxufVxuLndvcmtvdXQgLndvcmtvdXRfaW1nYWdlcyAud29ya291dF9pbWFnZSwgLndvcmtvdXQgdWwgLndvcmtvdXRfaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAud29ya291dCAud29ya291dF9pbWdhZ2VzIC53b3Jrb3V0X2ltYWdlLCAud29ya291dCB1bCAud29ya291dF9pbWFnZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAud29ya291dCAud29ya291dF9pbWdhZ2VzIC53b3Jrb3V0X2ltYWdlLCAud29ya291dCB1bCAud29ya291dF9pbWFnZSB7XG4gICAgbWFyZ2luOiA1JTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC53b3Jrb3V0IC53b3Jrb3V0X2ltZ2FnZXMgLndvcmtvdXRfaW1hZ2UgaW1nLCAud29ya291dCB1bCAud29ya291dF9pbWFnZSBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDMyMHB4O1xuICAgIG1heC13aWR0aDogMjgwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAud29ya291dCAud29ya291dF9pbWdhZ2VzIC53b3Jrb3V0X2ltYWdlIGltZywgLndvcmtvdXQgdWwgLndvcmtvdXRfaW1hZ2UgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgICB3aWR0aDogODBweDtcbiAgfVxufVxuXG4uZmlndXJlc19jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cbi5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIC5maWd1cmVzX3N0cmlwZSB7XG4gIHdpZHRoOiA1NzVweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzdDN0M3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuZmlndXJlc19wYWdlX2hlYWQgLmZpZ3VyZXNfY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwcHg7XG4gIG9wYWNpdHk6IDU1JTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5maWd1cmVzX3BhZ2VfaGVhZCAuZmlndXJlc19jaXJjbGUge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5maWd1cmVzX3BhZ2VfaGVhZCAuZmlndXJlc19jaXJjbGUge1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIC5oZWFkZXIzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIC5oZWFkZXIzIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5maWd1cmVzX3BhZ2VfaGVhZCAuaGVhZGVyMyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5hZGRfZmlndXJlIHtcbiAgd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDMwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1JTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5hZGRfZmlndXJlIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICByaWdodDogMDtcbiAgfVxufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuYWRkX2ZpZ3VyZSBhIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmFkZF9maWd1cmUgYSB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19zcGFjZV9pbWcge1xuICBoZWlnaHQ6IDM1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHotaW5kZXg6IDIwMDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMjcwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX3NwYWNlX2ltZyB7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX3NwYWNlX2ltZyB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwO1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCB7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmRlc2NyaXB0aW9uX3RleHQge1xuICB3aWR0aDogNjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZGVzY3JpcHRpb25fdGV4dCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5maWd1cmVzIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZmlndXJlcyB1bCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5maWd1cmVzIHVsIC5maWd1cmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1OTU5O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmZpZ3VyZXMgdWwgLmZpZ3VyZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogMjMwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5maWd1cmVzIHVsIC5maWd1cmUge1xuICAgIG1hcmdpbjogNSU7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5maWd1cmVzIHVsIC5maWd1cmUgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAyMzBweDtcbiAgICBtYXgtd2lkdGg6IDIyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZmlndXJlcyB1bCAuZmlndXJlIGltZyB7XG4gICAgbWF4LWhlaWdodDogMTIwcHg7XG4gICAgbWF4LXdpZHRoOiA4MHB4O1xuICB9XG59XG5cbi5jb250YWN0X2JveCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3gge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5jb250YWN0IC5oZWFkZXIxIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8ge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5jb250YWN0X2JveCAuY29udGFjdCAuY29udGFjdF9pbmZvIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3ggLmNvbnRhY3QgLmNvbnRhY3RfaW5mbyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ibG9jazogMTVweDtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8gLmRlc2NyaXB0aW9uX3RleHQge1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cbi5jb250YWN0X2JveCAuY29udGFjdCAuY29udGFjdF9pbmZvIC5oZWFkZXIzIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3ggLmNvbnRhY3QgLmNvbnRhY3RfaW5mbyAuaGVhZGVyMyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8gLmFkZHJlc3Mge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGFjdF9ib3ggLmNvbnRhY3QgLmNvbnRhY3RfaW5mbyAuYWRkcmVzcyBhIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwJTtcbiAgZ2FwOiA1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAucGVyc29uYWxfZGF0ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cHg7XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAucGVyc29uYWxfZGF0ZSBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5wZXJzb25hbF9kYXRlIGlucHV0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxOTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAucGVyc29uYWxfZGF0ZSBpbnB1dCB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5jYXNlQWRkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLmNhc2UsIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5maWd1cmVfbGV2ZWwsIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5maWd1cmVfY2F0ZWdvcnkge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLmNhc2UsIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5maWd1cmVfbGV2ZWwsIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5maWd1cmVfY2F0ZWdvcnkge1xuICAgIHdpZHRoOiA5MyU7XG4gIH1cbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIHNlbGVjdCB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIG9wdGlvbiB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLmZpZ3VyZV9hZGRfY2F0ZWdvcnkge1xuICB3aWR0aDogMzkwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAuZmlndXJlX2FkZF9jYXRlZ29yeSBwIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jb250YWN0X2JveCAuYm94X21lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNDAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IC5ib3hfbWVzc2FnZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gICAgd2lkdGg6IDkzJTtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5ib3hfbWVzc2FnZSAudGl0bGVfbWVzc2FnZSB7XG4gIHBhZGRpbmctYmxvY2s6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY29udGFjdF9ib3ggLmJveF9tZXNzYWdlIC50ZXh0YXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcmVzaXplOiBub25lO1xufVxuLmNvbnRhY3RfYm94IC5ib3hfbWVzc2FnZSAuYWdyZWVtZW50IHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uY2hlY2tib3ggaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbn1cblxuLmNoZWNrYm94IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY2hlY2tib3ggc3BhbiB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIGZsZXgtYmFzaXM6IDEwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmZpZ3VyZV9hZGRfY2F0ZWdvcnkgLmNoZWNrYm94X2NhdGVnb3J5IHNwYW4ge1xuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xufVxuXG4uY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCArIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDhEOEQ4O1xuICBib3JkZXI6IDJweCBsaWdodGJsdWUgc29saWQ7XG59XG5cbi5maWd1cmVfY2F0ZWdvcmllcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA4cHg7XG59XG5cbi5zdWJtaXQge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1OTU5O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggYmxhY2s7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vdF9yZWFkeSAubWFpbl9wYWdlIHtcbiAgaGVpZ2h0OiA4OHZoO1xufVxuLm5vdF9yZWFkeSAubWFpbl9wYWdlIC5oZWFkZXIyIHtcbiAgd2lkdGg6IDI1JTtcbn1cbi5ub3RfcmVhZHkgLm1haW5fcGFnZSAuaGVhZGVyMiBhIHtcbiAgY29sb3I6IGNhZGV0Ymx1ZTtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5wb3JhZHlfcGFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMjUwcHg7XG59XG4ucG9yYWR5X3BhZ2UgLmhlYWRlcjEge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cbi5wb3JhZHlfcGFnZSAuaGVhZGVyMyB7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4uYWR2aWNlMSwgLmFkdmljZTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW46IDIwcHggNTBweCAxMjBweCA1MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmFkdmljZTIge1xuICBtYXJnaW46IDIwcHggNTBweCAxMjBweCA1MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDZENkQ2O1xuICBvcGFjaXR5OiA3NSU7XG4gIHdpZHRoOiA3MCU7XG59XG4uYWR2aWNlMiAuY2lyY2xlc19hZHZpY2VfYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFkdmljZTIgLmNpcmNsZXNfYWR2aWNlX2JveCAuY2lyY2xlX2FkdmljZSB7XG4gIHdpZHRoOiAzMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmFkdmljZTIgLmNpcmNsZXNfYWR2aWNlX2JveCAuY2lyY2xlX2FkdmljZSAuaGVhZGVyMywgLmFkdmljZTIgLmNpcmNsZXNfYWR2aWNlX2JveCAuY2lyY2xlX2FkdmljZSBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wYWdlX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4ubWFpbl9jb250YWluZXIge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW4tbGVmdDogMTB2dztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWFpbl9jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXZ3O1xuICB9XG59XG5cbi5oZWFkZXIxIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuaGVhZGVyMSB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIG1hcmdpbjogMCAwIDIwcHggMDtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5oZWFkZXIxIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLWJsb2NrOiAyMHB4O1xuICB9XG59XG5cbi5oZWFkZXIyIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuaGVhZGVyMiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmhlYWRlcjIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLmhlYWRlcjIgLmNob3NlbiB7XG4gIGNvbG9yOiAjQjAyMzIzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uaGVhZGVyMiAubm90X2Nob3NlbiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5oZWFkZXIzIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NldHRpbmdzL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3MvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NlY3Rpb25zL19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NldHRpbmdzL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NldHRpbmdzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NlY3Rpb25zL19hc2lkZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX21haW4tcGFnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX3dvcmtvdXQuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NlY3Rpb25zL19maWd1cmVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fY29uY2FjdC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX25vdF9yZWFkeV9wYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fYWR2aWNlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7O0NBQUE7QUFPQTs7Ozs7Ozs7Ozs7OztFQWFFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUNBRjs7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QUNBLFdBQUE7QVhndkJKO0FXL3VCSTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtBWGl2Qk47QVdodkJNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FYa3ZCUjs7QUFyeEJBO0VBSUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXF4QkY7O0FBbHhCQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQXF4QkY7QUV4eUJFO0VGaUJGO0lBSUksaUJBQUE7RUF1eEJGO0FBQ0Y7O0FBNXZCQTtFQUNFLCtCQUFBO0VBQ0EsZ0JBQUE7QUErdkJGO0FFeHpCRTtFRnVERjtJQUlJLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VBaXdCRjtBQUNGO0FFenpCRTtFRmlERjtJQVNJLGVBQUE7SUFDQSxrQkFBQTtFQW13QkY7QUFDRjs7QUFod0JBO0VBQ0UsbUJHN0RhO0FIZzBCZjtBRXowQkU7RUZxRUY7SUFHSSxlQUFBO0lBQ0EsaUJBQUE7RUFxd0JGO0FBQ0Y7QUV6MEJFO0VGK0RGO0lBT0ksZUFBQTtFQXV3QkY7QUFDRjtBQXR3QkU7RUFDRSxjRzlFUTtFSCtFUixxQkFBQTtBQXd3Qko7QUF0d0JFO0VBQ0UscUJBQUE7RUFDQSxjR3RGZTtBSDgxQm5COztBQXJ3QkE7RUFDRSxtQkcvRWE7RUhnRmIsZUFBQTtFQUNBLGdCQUFBO0FBd3dCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBFcmljIE1leWVyJ3MgQ1NTIFJlc2V0XFxyXFxuICAgaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiAgIFRoaXMgaXMgYSBTYXNzIHBhcnRpYWxcXHJcXG4qL1xcclxcblxcclxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcbiAgcXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICBib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0ICdzZXR0aW5ncy9yZXNldCc7XFxyXFxuQGltcG9ydCBcXFwic2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbkBpbXBvcnQgXFxcInNlY3Rpb25zL2hlYWRlclxcXCI7XFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvYXNpZGVcXFwiO1xcclxcbkBpbXBvcnQgXFxcInNlY3Rpb25zL2Zvb3RlclxcXCI7XFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvbWFpbi1wYWdlXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy93b3Jrb3V0XFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy9maWd1cmVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy9jb25jYWN0XFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy9ub3RfcmVhZHlfcGFnZVxcXCI7XFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvYWR2aWNlXFxcIjtcXHJcXG5cXHJcXG5cXHJcXG4ucGFnZV9jb250YWluZXJ7XFxyXFxuICAvLyAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXFxyXFxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAvLyBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stYmFja2dyb3VuZDtcXHJcXG59XFxyXFxuLm1haW5fY29udGFpbmVye1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHZ3O1xcclxcbiAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTV2dztcXHJcXG4gIH1cXHJcXG59XFxyXFxuLy8gISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhITFcXHJcXG4vLyAucGFnZV9jb250YWluZXJ7XFxyXFxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbi8vICAgZGlzcGxheTogZmxleDtcXHJcXG4vLyAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuLy8gICBoZWlnaHQ6IDEwMCU7XFxyXFxuLy8gICB3aWR0aDogMTAwJTtcXHJcXG4vLyAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4vLyAgIC8vYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLWJhY2tncm91bmQ7XFxyXFxuLy8gfVxcclxcbi8vIC5tYWluX2NvbnRhaW5lcntcXHJcXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4vLyAgIHdpZHRoOiA5MCU7XFxyXFxuLy8gICBoZWlnaHQ6IDEwMCU7XFxyXFxuLy8gICBjbGVhcjogYm90aDtcXHJcXG4vLyAgIHJpZ2h0OiAtMTUlO1xcclxcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLWJhY2tncm91bmQ7XFxyXFxuLy8gICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4vLyAgICAgd2lkdGg6IDgwJTtcXHJcXG4vLyAgICAgcmlnaHQ6IC0xNSU7XFxyXFxuLy8gICB9XFxyXFxuLy8gfVxcclxcblxcclxcbi5oZWFkZXIxe1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnksIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMjBweCAwO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBtYXJnaW4tYmxvY2s6IDIwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIye1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgfVxcclxcbiAgLmNob3NlbntcXHJcXG4gICAgY29sb3I6ICRjb2xvci1yZWQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5ub3RfY2hvc2Vue1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItZm9udC1ibGFjaztcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmhlYWRlcjN7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbi5tZW51X21haW4tY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgei1pbmRleDogNTAwO1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAzcHggM3B4IDJweCAkY29sb3Itc29mdC1ncmV5O1xcclxcbiAgLy9ib3JkZXItYm90dG9tOiAycHggYmxhY2sgc29saWQ7XFxyXFxuICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICB3aWR0aDogOTB2dztcXHJcXG4gIH1cXHJcXG4gIC5tZW51X21haW4ge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgIGdhcDogMjJweDtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogNjBweDtcXHJcXG4gICAgfVxcclxcbiAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgZ2FwOiA1JTtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogNSU7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnVfbWFpbl9lbGVtZW50LCBhe1xcclxcblxcclxcbiAgICAgIEBpbmNsdWRlIGRlc2t0b3B7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogOTAlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgICAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuXFxyXFxuQG1peGluIGRlc2t0b3Age1xcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gbW9iaWxlIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGhlYWRlcjEge1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICBmb250LXNpemU6IDUwcHg7XFxyXFxuICBjb2xvcjogJGNvbG9yLWZvbnQtYmxhY2s7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBoZWFkZXIye1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBjb2xvcjogJGNvbG9yLWZvbnQtYmxhY2s7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBoZWFkZXIze1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBjb2xvcjogJGNvbG9yLWZvbnQtYmxhY2s7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBkZXNjcmlwdGlvbntcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbn1cIixcIlxcclxcbiRjb2xvci1mb250LWJsYWNrOiAjMDAwMDAwO1xcclxcbiRjb2xvci1mb250LXdoaXRlOiAjRkZGRkZGO1xcclxcblxcclxcbiRjb2xvci1yZWQ6ICNCMDIzMjM7XFxyXFxuJGNvbG9yLWJsYWNrLWJhY2tncm91bmQ6ICMwMDAwMDA7XFxyXFxuJGNvbG9yLW5lYXJseS1ibGFjazogIzFFMUUxRTtcXHJcXG4kY29sb3Itd2hpdGUtYmFja2dyb3VuZDogI0ZGRkZGRjtcXHJcXG4kY29sb3Itc29mdC1ncmV5OiAjRDhEOEQ4O1xcclxcbiRjb2xvci1jaGFsay1ncmV5OiAjRDZENkQ2O1xcclxcbiRjb2xvci1ncmV5OiAjNTk1OTU5O1xcclxcblxcclxcbiRmb250LXByaW1hcnk6IFJvYm90bztcIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4ubWVudV9hc2lkZS1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgLy8gISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxcclxcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgLm1lbnVfYXNpZGUge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMDNweDtcXHJcXG4gICAgZ2FwOiAxOHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIC8vICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcXHJcXG4gICAgd2lkdGg6IDEwdnc7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay1iYWNrZ3JvdW5kO1xcclxcbiAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgd2lkdGg6IDE1dnc7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnVfYXNpZGVfZWxlbWVudCB7XFxyXFxuICAgICAgbWFyZ2luOiAwIDAgMCAxNXB4O1xcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgbWFyZ2luOiAwIDAgMCAycHg7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGF7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgY29sb3I6ICRjb2xvci1mb250LXdoaXRlO1xcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDU4JTtcXHJcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLmZvb3Rlcl9jb250YWluZXJ7XFxyXFxuICBjbGVhcjogYm90aDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnVfZm9vdGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDAgMzBweCAwIDMwcHg7XFxyXFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1uZWFybHktYmxhY2s7XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnVfZm9vdGVyX2xpc3R7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgZ2FwOiA1MHB4O1xcclxcbiAgICAgIG1hcmdpbjogMCAxNXB4IDAgMDtcXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICBnYXA6IDEwJTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgYSB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIGNvbG9yOiAjOTI4RThFO1xcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIGF7XFxyXFxuICAgICAgY29sb3I6ICRjb2xvci1zb2Z0LWdyZXk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLm9uZV9wYWdlcntcXHJcXG4vLyAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXFxyXFxuICAvLyBoZWlnaHQ6IDkwdmg7XFxyXFxufVxcclxcbi5tYWluX3BhZ2V7XFxyXFxuICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nL2ltZ19tYWluX3BhZ2UuanBlZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWcvaW1nX21haW5fcGFnZS5qcGVnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgei1pbmRleDogMjAwO1xcclxcbiAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgIC8vICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcXHJcXG4gICAgLy8gYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gICAgLy8gYmFja2dyb3VuZC1zaXplOiA2Ni41JTtcXHJcXG4gICAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XFxyXFxuICAgIC8vIG1hcmdpbi1sZWZ0OiA2MHB4O1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXHJcXG4gICAgcmlnaHQ6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNpcmNsZXNfd29ya291dHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtYmFja2dyb3VuZDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgd2lkdGg6IDE3MHB4O1xcclxcbiAgICAgIGhlaWdodDogMTcwcHg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICB9XFxyXFxuICAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMSl7XFxyXFxuICAgIGJvcmRlcjogMTBweCAjRTdFNkU2IHNvbGlkO1xcclxcbiAgICBoMiwgYSB7XFxyXFxuICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLWNoaWxkKDIpe1xcclxcbiAgICBib3JkZXI6IDEwcHggI0NDQ0JDQiBzb2xpZDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoMiwgYSB7XFxyXFxuICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMyl7XFxyXFxuICAgIGJvcmRlcjogMTBweCAjOUQ5RDlEIHNvbGlkO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGgyLCBhIHtcXHJcXG4gICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4uYWJvdXRfcGxhdGZvcm17XFxyXFxuICB3aWR0aDogMjk1cHg7XFxyXFxuXFxyXFxuICAuYWJvdXRfcGxhdGZvcm1fdGV4dHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHJcXG4gIH1cXHJcXG59XFxyXFxuICAuaGVhZGVyMyB7XFxyXFxuICAgIG1hcmdpbi1ibG9jazogMjBweCAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG5cXHJcXG4ud29ya291dHtcXHJcXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgIHBhZGRpbmc6IDUlO1xcclxcbiAgfVxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWNoYWxrLWdyZXk7XFxyXFxuICAuaGVhZGVyNHtcXHJcXG4gICAgcGFkZGluZy1ibG9jazogMTBweCAyMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBjb2xvcjogJGNvbG9yLXJlZDtcXHJcXG4gIH1cXHJcXG4gIC5kZXNjcmlwdGlvbl90ZXh0e1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBjb2xvcjogJGNvbG9yLWZvbnQtd2hpdGU7XFxyXFxuICB9XFxyXFxuICAud29ya291dF9pbWdhZ2VzLCB1bCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcXHJcXG4gICAgfVxcclxcbiAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjAlO1xcclxcbiAgICB9XFxyXFxuICAgIC53b3Jrb3V0X2ltYWdlIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtYmFja2dyb3VuZDtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgQGluY2x1ZGUgZGVza3RvcHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICBtYXJnaW46IDUlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgaW1nIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGRlc2t0b3B7XFxyXFxuICAgICAgICAgIC8vbWluLWhlaWdodDogMjAwcHg7XFxyXFxuICAgICAgICAgIG1heC1oZWlnaHQ6IDMyMHB4O1xcclxcbiAgICAgICAgICBtYXgtd2lkdGg6IDI4MHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMjBweDtcXHJcXG4gICAgICAgICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbi5maWd1cmVzX2NvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtYmFja2dyb3VuZDtcXHJcXG5cXHJcXG4gIC5tYWluX3BhZ2VfZmlndXJlcyB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXHJcXG4gICAgLmZpZ3VyZXNfcGFnZV9oZWFkIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcblxcclxcbiAgICAgIC5maWd1cmVzX3N0cmlwZSB7XFxyXFxuICAgICAgICB3aWR0aDogNTc1cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzdDN0M3O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5maWd1cmVzX2NpcmNsZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtYmFja2dyb3VuZDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHRvcDogLTEwcHg7XFxyXFxuICAgICAgICBvcGFjaXR5OiA1NSU7XFxyXFxuICAgICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgICAgICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuaGVhZGVyMyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5LCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hZGRfZmlndXJlIHtcXHJcXG4gICAgICB3aWR0aDogMTEwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1ibGFjay1iYWNrZ3JvdW5kO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHJpZ2h0OiAxNSU7XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgYSB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgICAgIGNvbG9yOiAkY29sb3ItZm9udC13aGl0ZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiA4cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmlndXJlc19zcGFjZV9pbWcge1xcclxcbiAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltZy9QRF9pbWdfM19zenBhZ2F0LmpwZWdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgei1pbmRleDogMjAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0yNzBweDtcXHJcXG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3O1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmlndXJlc19ib3gge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG5cXHJcXG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRlc2NyaXB0aW9uX3RleHR7XFxyXFxuICAgICAgd2lkdGg6IDYwMHB4O1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmlndXJlcyB1bCB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxyXFxuXFxyXFxuICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5maWd1cmUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXk7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgICAgICAgIGhlaWdodDogMjUwcHg7XFxyXFxuICAgICAgICAgIHdpZHRoOiAyMzBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgICAgIG1hcmdpbjogNSU7XFxyXFxuICAgICAgICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIGltZ3tcXHJcXG4gICAgICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMjMwcHg7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMjBweDtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcblxcclxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEyMHB4O1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogODBweDtcXHJcXG4gICAgICAgICAgfX1cXHJcXG5cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG59XCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuXFxyXFxuLmNvbnRhY3RfYm94IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5LCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMCU7XFxyXFxuICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3Qge1xcclxcbiAgICAuaGVhZGVyMSB7XFxyXFxuICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhY3RfaW5mbyB7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJsb2NrOiAxNXB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuZGVzY3JpcHRpb25fdGV4dCB7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmhlYWRlcjMge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuYWRkcmVzcyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuXFxyXFxuICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9ybV9tZXNzYWdlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wZXJzb25hbF9kYXRlIHtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGdhcDogNXB4O1xcclxcblxcclxcbiAgICAgIGxhYmVsIHtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaW5wdXQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgbGVmdDogMTkwcHg7XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIC5jYXNlQWRke1xcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2FzZSwgLmZpZ3VyZV9sZXZlbCwgLmZpZ3VyZV9jYXRlZ29yeSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgd2lkdGg6IDkzJTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgc2VsZWN0IHtcXHJcXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgOjpzZWxlY3Rpb24ge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c3RlZWxibHVlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIG9wdGlvbiB7XFxyXFxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5maWd1cmVfYWRkX2NhdGVnb3J5IHtcXHJcXG4gICAgICB3aWR0aDogMzkwcHg7XFxyXFxuICAgICAgLy9kaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAgICAgcCB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib3hfbWVzc2FnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcXHJcXG4gICAgICB3aWR0aDogOTMlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aXRsZV9tZXNzYWdlIHtcXHJcXG4gICAgICBwYWRkaW5nLWJsb2NrOiAxMHB4O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRleHRhcmVhIHtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgcmVzaXplOiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hZ3JlZW1lbnQge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3ggaW5wdXQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGhlaWdodDogMTBweDtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3gge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IHNwYW4ge1xcclxcbiAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgZmxleC1iYXNpczogMTBweDtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlndXJlX2FkZF9jYXRlZ29yeSB7XFxyXFxuICAuY2hlY2tib3hfY2F0ZWdvcnkgc3BhbiB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCBpbnB1dDpjaGVja2VkICsgc3BhbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc29mdC1ncmV5O1xcclxcbiAgYm9yZGVyOiAycHggbGlnaHRibHVlIHNvbGlkO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZmlndXJlX2NhdGVnb3JpZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdCB7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggYmxhY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogMjUlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4ubm90X3JlYWR5IC5tYWluX3BhZ2Uge1xcclxcbiAgaGVpZ2h0OiA4OHZoO1xcclxcbiAgLmhlYWRlcjIge1xcclxcbiAgICB3aWR0aDogMjUlO1xcclxcbiAgICBhIHtcXHJcXG4gICAgICBjb2xvcjogY2FkZXRibHVlO1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbi5wb3JhZHlfcGFnZXtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nLzIuanBlZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogLTI1MHB4O1xcclxcbiAgLmhlYWRlcjF7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbiAgfVxcclxcbiAgLmhlYWRlcjN7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG4uYWR2aWNlMSwgLmFkdmljZTN7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtYmFja2dyb3VuZDtcXHJcXG4gIG1hcmdpbjogMjBweCA1MHB4IDEyMHB4IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbi5hZHZpY2Uye1xcclxcbiAgbWFyZ2luOiAyMHB4IDUwcHggMTIwcHggNTBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1jaGFsay1ncmV5O1xcclxcbiAgb3BhY2l0eTogNzUlO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG5cXHJcXG4gIC5jaXJjbGVzX2FkdmljZV9ib3h7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLmNpcmNsZV9hZHZpY2V7XFxyXFxuICAgICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAuaGVhZGVyMywgcHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImYxYWU3ODUxYTU2MmIxMDQzZDg0XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9