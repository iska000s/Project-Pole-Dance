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
    font-size: 60%;
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
    width: 80%;
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
    width: 80%;
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
@media (max-width: 736px) {
  .main_container {
    position: relative;
    width: 90%;
    right: -15%;
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
}`, "",{"version":3,"sources":["webpack://./Project/scss/settings/_reset.scss","webpack://./Project/scss/index.scss","webpack://./Project/scss/sections/_header.scss","webpack://./Project/scss/settings/_mixins.scss","webpack://./Project/scss/settings/_variables.scss","webpack://./Project/scss/sections/_aside.scss","webpack://./Project/scss/sections/_footer.scss","webpack://./Project/scss/sections/_main-page.scss","webpack://./Project/scss/sections/_workout.scss","webpack://./Project/scss/sections/_figures.scss","webpack://./Project/scss/sections/_concact.scss","webpack://./Project/scss/sections/_not_ready_page.scss","webpack://./Project/scss/sections/_advice.scss"],"names":[],"mappings":"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","sourcesContent":["/* Eric Meyer's CSS Reset\r\n   http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n   This is a Sass partial\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n  display: block;\r\n}\r\nbody {\r\n  line-height: 1;\r\n}\r\nol, ul {\r\n  list-style: none;\r\n}\r\nblockquote, q {\r\n  quotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n  content: '';\r\n  content: none;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n","@import 'settings/reset';\r\n@import \"settings/variables\";\r\n@import \"settings/mixins\";\r\n\r\n@import \"sections/header\";\r\n@import \"sections/aside\";\r\n@import \"sections/footer\";\r\n@import \"sections/main-page\";\r\n@import \"sections/workout\";\r\n@import \"sections/figures\";\r\n@import \"sections/concact\";\r\n@import \"sections/not_ready_page\";\r\n@import \"sections/advice\";\r\n\r\n\r\n.page_container{\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 100%;\r\n  width: 100%;\r\n  //background-color: $color-black-background;\r\n}\r\n.main_container{\r\n  position: relative;\r\n  width: 90%;\r\n  height: 100%;\r\n  clear: both;\r\n  right: -10%;\r\n  background-color: $color-white-background;\r\n  @include mobile{\r\n    position: relative;\r\n    width: 90%;\r\n    right: -15%;\r\n  }\r\n}\r\n\r\n.header1{\r\n  font-family: $font-primary, sans-serif;\r\n  font-weight: 300;\r\n  @include desktop {\r\n    font-size: 50px;\r\n    margin: 0 0 20px 0;\r\n    padding-top: 40px;\r\n  }\r\n  @include mobile{\r\n    font-size: 30px;\r\n    margin-block: 20px;\r\n  }\r\n}\r\n\r\n.header2{\r\n  font-family: $font-primary;\r\n  @include desktop {\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n  }\r\n  @include mobile{\r\n    font-size: 14px;\r\n  }\r\n  .chosen{\r\n    color: $color-red;\r\n    text-decoration: none;\r\n  }\r\n  .not_chosen{\r\n    text-decoration: none;\r\n    color: $color-font-black;\r\n  }\r\n}\r\n.header3{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.menu_main-container {\r\n  height: 60px;\r\n  top: 10px;\r\n  background-color: white;\r\n  z-index: 500;\r\n  position: sticky;\r\n  box-shadow: 2px 3px 3px 2px $color-soft-grey;\r\n  //border-bottom: 2px black solid;\r\n  @include mobile {\r\n    width: 90vw;\r\n  }\r\n  .menu_main {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    @include desktop {\r\n      gap: 22px;\r\n      margin-left: 60px;\r\n    }\r\n    @include mobile{\r\n      gap: 5%;\r\n      margin-left: 5%;\r\n      line-height: 10px;\r\n    }\r\n    .menu_main_element, a{\r\n\r\n      @include desktop{\r\n        font-size: 16px;\r\n      }\r\n      @include mobile{\r\n        font-size: 90%;\r\n      }\r\n      flex-direction: row;\r\n      font-family: $font-primary;\r\n      font-weight: 300;\r\n      color: $color-font-black;\r\n      text-decoration: none;\r\n    }\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n\r\n@mixin desktop {\r\n  @media (min-width: 736px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile {\r\n  @media (max-width: 736px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin header1 {\r\n  font-family: $font-primary;\r\n  font-size: 50px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin header2{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin header3{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin description{\r\n  font-family: $font-primary;\r\n  font-size: 14px;\r\n  color: $color-font-black;\r\n}","\r\n$color-font-black: #000000;\r\n$color-font-white: #FFFFFF;\r\n\r\n$color-red: #B02323;\r\n$color-black-background: #000000;\r\n$color-nearly-black: #1E1E1E;\r\n$color-white-background: #FFFFFF;\r\n$color-soft-grey: #D8D8D8;\r\n$color-chalk-grey: #D6D6D6;\r\n$color-grey: #595959;\r\n\r\n$font-primary: Roboto;","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.menu_aside-container {\r\n  height: 100vh;\r\n  position: absolute;\r\n  .menu_aside {\r\n    @include mobile{\r\n      width: 15%;\r\n    }\r\n    position: fixed;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-top: 103px;\r\n    gap: 18px;\r\n    height: 100%;\r\n    width: 10%;\r\n    background-color: $color-black-background;\r\n    .menu_aside_element {\r\n      margin: 0 0 0 15px;\r\n      @include mobile {\r\n      margin: 0 0 0 2px;\r\n      }\r\n      a{\r\n        text-decoration: none;\r\n        font-size: 14px;\r\n        font-family: $font-primary, sans-serif;\r\n        font-weight: bold;\r\n        color: $color-font-white;\r\n        @include mobile{\r\n          font-size: 60%;\r\n          font-weight: 300;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.footer_container{\r\n  clear: both;\r\n  position: fixed;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  width: 90%;\r\n  height: 80px;\r\n  background-color: #000000;\r\n  @include mobile{\r\n    width: 90%;\r\n    right: 0;\r\n  }\r\n\r\n  .menu_footer{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 50px;\r\n    width: 100%;\r\n    padding: 0 30px 0 30px;\r\n    // background-color: $color-nearly-black;\r\n    @include mobile{\r\n      padding: 5px;\r\n      justify-content: space-around;\r\n    }\r\n    .menu_footer_list{\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: center;\r\n      gap: 50px;\r\n      margin: 0 15px 0 0;\r\n\r\n      @include mobile{\r\n        gap: 10%;\r\n      }\r\n      a {\r\n        font-family: $font-primary;\r\n        font-size: 12px;\r\n        text-decoration: none;\r\n        color: #928E8E;\r\n        @include mobile{\r\n          font-size: 14px;\r\n        }\r\n      }\r\n    }\r\n    a{\r\n      color: $color-soft-grey;\r\n    }\r\n  }\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.one_pager{\r\n  height: 90vh;\r\n}\r\n.main_page{\r\n  //background-image: url(\"../img/img_main_page.jpeg\");\r\n  background-image: url(\"../img/img_main_page.jpeg\");\r\n  background-repeat: no-repeat;\r\n  z-index: 200;\r\n  @include desktop {\r\n    background-attachment: fixed;\r\n    background-size: 66.5%;\r\n    //background-position-x: 175%;\r\n    background-position: right;\r\n    margin-left: 60px;\r\n  }\r\n  @include mobile{\r\n    background-size: 100%;\r\n    width: 90%;\r\n    margin-left: 5%;\r\n    right: 10px;\r\n  }\r\n\r\n  .circles_workout-container{\r\n    display: flex;\r\n    @include mobile {\r\n      flex-wrap: wrap;\r\n      justify-content: space-around;\r\n    }\r\n\r\n    .circles_workout{\r\n      background-color: $color-white-background;\r\n      border-radius: 50%;\r\n      width: 170px;\r\n      height: 170px;\r\n      flex-direction: row;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      margin-right: 20px;\r\n      @include mobile{\r\n        width: 100px;\r\n        height: 100px;\r\n        margin: 0;\r\n      }\r\n    }\r\n\r\n  }\r\n  .circles_workout-container :nth-of-type(1){\r\n    border: 10px #E7E6E6 solid;\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n  .circles_workout-container :nth-child(2){\r\n    border: 10px #CCCBCB solid;\r\n    position: relative;\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n  .circles_workout-container :nth-of-type(3){\r\n    border: 10px #9D9D9D solid;\r\n    position: relative;\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n.about_platform{\r\n  width: 295px;\r\n\r\n  .about_platform_text{\r\n    margin-right: 20px;\r\n    padding-bottom: 20px;\r\n    font-family: $font-primary;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n\r\n  }\r\n}\r\n  .header3 {\r\n    margin-block: 20px 10px;\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n\r\n.workout{\r\n  @include desktop {\r\n    padding-left: 60px;\r\n  }\r\n  @include mobile{\r\n    padding: 5%;\r\n  }\r\n  background-color: $color-chalk-grey;\r\n  .header4{\r\n    padding-block: 10px 20px;\r\n    font-family: $font-primary;\r\n    font-size: 24px;\r\n    font-weight: 300;\r\n    color: $color-red;\r\n  }\r\n  .description_text{\r\n    margin-bottom: 20px;\r\n    font-family: $font-primary;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: $color-font-white;\r\n  }\r\n  .workout_imgages, ul {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    @include desktop {\r\n      margin-right: 100px;\r\n      margin-bottom: 60px;\r\n    }\r\n    @include mobile{\r\n      margin-bottom: 20%;\r\n    }\r\n    .workout_image {\r\n      background-color: $color-white-background;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n\r\n      @include desktop{\r\n        margin-right: 40px;\r\n        margin-bottom: 50px;\r\n        height: 350px;\r\n        width: 300px;\r\n      }\r\n      @include mobile{\r\n        margin: 5%;\r\n        height: 150px;\r\n        width: 100px;\r\n      }\r\n      img {\r\n        @include desktop{\r\n          //min-height: 200px;\r\n          max-height: 320px;\r\n          max-width: 280px;\r\n        }\r\n        @include mobile{\r\n          max-height: 120px;\r\n          width: 80px;\r\n        }\r\n\r\n      }\r\n    }\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.figures_container {\r\n  background-color: $color-white-background;\r\n\r\n  .main_page_figures {\r\n    padding-bottom: 100px;\r\n    .figures_page_head {\r\n      display: flex;\r\n      flex-direction: row;\r\n      margin-top: 50px;\r\n      margin-bottom: 20px;\r\n\r\n      .figures_stripe {\r\n        width: 575px;\r\n        height: 40px;\r\n        background-color: #C7C7C7;\r\n        display: flex;\r\n        flex-direction: row;\r\n      }\r\n\r\n      .figures_circle {\r\n        background-color: $color-white-background;\r\n        border-radius: 50%;\r\n        position: relative;\r\n        top: -10px;\r\n        opacity: 55%;\r\n        @include desktop {\r\n          width: 60px;\r\n          height: 60px;\r\n          margin: 0 10px 0 10px;\r\n        }\r\n        @include mobile {\r\n          top: 0;\r\n          width: 30px;\r\n          height: 30px;\r\n        }\r\n      }\r\n\r\n      .header3 {\r\n        display: flex;\r\n        align-items: center;\r\n        height: 100%;\r\n        font-family: $font-primary, sans-serif;\r\n        font-weight: 300;\r\n        @include desktop {\r\n          font-size: 24px;\r\n        }\r\n        @include mobile {\r\n          font-size: 16px;\r\n        }\r\n      }\r\n    }\r\n\r\n    .add_figure {\r\n      width: 110px;\r\n      height: 40px;\r\n      background: $color-black-background;\r\n      border-radius: 30%;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      position: absolute;\r\n      right: 15%;\r\n      @include mobile{\r\n        width: 30px;\r\n        right: 0;\r\n      }\r\n      a {\r\n        font-family: $font-primary;\r\n        color: $color-font-white;\r\n        font-size: 14px;\r\n        text-decoration: none;\r\n        @include mobile{\r\n          font-size: 8px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .figures_space_img {\r\n    height: 350px;\r\n    background-image: url(\"../img/PD_img_3_szpagat.jpeg\");\r\n    background-repeat: no-repeat;\r\n    z-index: 200;\r\n    background-position-y: -270px;\r\n    @include desktop {\r\n      background-attachment: fixed;\r\n      background-size: 100vw;\r\n    }\r\n    @include mobile {\r\n      height: 150px;\r\n      background-size: 100%;\r\n      background-position: 200% 0;\r\n    }\r\n  }\r\n\r\n  .figures_box {\r\n    padding-top: 20px;\r\n\r\n    @include desktop {\r\n      padding-left: 60px;\r\n    }\r\n    @include mobile {\r\n      padding-left: 10%;\r\n    }\r\n    .description_text{\r\n      width: 600px;\r\n      margin-bottom: 20px;\r\n      font-family: $font-primary;\r\n      font-size: 14px;\r\n      font-weight: 400;\r\n      color: $color-font-black;\r\n      @include mobile{\r\n        width: 90%;\r\n        margin-bottom: 10px;\r\n      }\r\n    }\r\n\r\n    .figures ul {\r\n      display: flex;\r\n      flex-direction: row;\r\n      flex-wrap: wrap;\r\n      justify-content: left;\r\n\r\n      @include desktop {\r\n        margin-right: 80px;\r\n      }\r\n      .figure {\r\n        background-color: $color-grey;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        @include desktop {\r\n          margin-right: 10px;\r\n          margin-bottom: 10px;\r\n          height: 250px;\r\n          width: 230px;\r\n        }\r\n        @include mobile {\r\n          margin: 5%;\r\n          height: 150px;\r\n          width: 100px;\r\n        }\r\n        img{\r\n          @include desktop {\r\n            max-height: 230px;\r\n            max-width: 220px;\r\n          }\r\n          @include mobile {\r\n\r\n            max-height: 120px;\r\n            max-width: 80px;\r\n          }}\r\n\r\n      }\r\n    }\r\n  }\r\n\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n\r\n.contact_box {\r\n  font-family: $font-primary, sans-serif;\r\n  margin-top: 30px;\r\n  margin-left: 40px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 10%;\r\n  @include mobile {\r\n    flex-direction: column;\r\n    align-items: start;\r\n    margin-left: 20px;\r\n    height: 100vh;\r\n  }\r\n\r\n  .contact {\r\n    .header1 {\r\n      margin: 0;\r\n      padding: 0;\r\n    }\r\n\r\n    .contact_info {\r\n      font-weight: 300;\r\n      @include desktop {\r\n        font-size: 20px;\r\n        padding-top: 20px;\r\n      }\r\n      @include mobile {\r\n        font-size: 14px;\r\n        margin-block: 15px;\r\n      }\r\n\r\n      .description_text {\r\n        line-height: 30px;\r\n      }\r\n\r\n      .header3 {\r\n        margin-top: 50px;\r\n        margin-bottom: 15px;\r\n        @include mobile {\r\n          margin-top: 20px;\r\n        }\r\n      }\r\n\r\n      .address {\r\n        font-size: 16px;\r\n\r\n        a {\r\n          padding-left: 10px;\r\n          text-decoration: none;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .form_message {\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 50%;\r\n    gap: 5px;\r\n    @include mobile{\r\n      width: 100%;\r\n    }\r\n\r\n    .personal_date {\r\n      position: relative;\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 5px;\r\n\r\n      label {\r\n        font-weight: 600;\r\n        width: 300px;\r\n        margin-bottom: 20px;\r\n        display: flex;\r\n        align-items: center\r\n      }\r\n\r\n      input {\r\n        font-size: 12px;\r\n        width: 200px;\r\n        height: 20px;\r\n        position: absolute;\r\n        left: 190px;\r\n        @include mobile{\r\n          width: 40%;\r\n        }\r\n      }\r\n    }\r\n    .caseAdd{\r\n      @include mobile{\r\n        width: 100%;\r\n      }\r\n    }\r\n\r\n    .case, .figure_level, .figure_category {\r\n      font-size: 12px;\r\n      font-family: $font-primary;\r\n      width: 400px;\r\n      height: 20px;\r\n      margin-bottom: 15px;\r\n      cursor: pointer;\r\n      @include mobile{\r\n        width: 80%;\r\n      }\r\n    }\r\n\r\n    select {\r\n      -webkit-border-radius: 25px;\r\n      -moz-border-radius: 25px;\r\n      border-radius: 25px;\r\n    }\r\n\r\n    ::selection {\r\n      background-color: lightsteelblue;\r\n    }\r\n\r\n    option {\r\n      -webkit-border-radius: 25px;\r\n      -moz-border-radius: 25px;\r\n      border-radius: 25px;\r\n    }\r\n\r\n    .figure_add_category {\r\n      width: 390px;\r\n      //display: flex;\r\n      flex-direction: column;\r\n\r\n      p {\r\n        font-weight: 600;\r\n        margin-bottom: 15px;\r\n      }\r\n\r\n    }\r\n  }\r\n\r\n  .box_message {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 400px;\r\n    @include mobile {\r\n      padding-bottom: 60px;\r\n      width: 80%;\r\n    }\r\n\r\n    .title_message {\r\n      padding-block: 10px;\r\n      font-weight: 600;\r\n    }\r\n\r\n    .textarea {\r\n      margin-bottom: 5px;\r\n      resize: none;\r\n    }\r\n\r\n    .agreement {\r\n      font-size: 10px;\r\n    }\r\n\r\n  }\r\n\r\n}\r\n\r\n.checkbox input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  height: 10px;\r\n  width: 10px;\r\n}\r\n\r\n.checkbox {\r\n  cursor: pointer;\r\n  display: flex;\r\n}\r\n\r\n.checkbox span {\r\n  height: 10px;\r\n  width: 10px;\r\n  border: 2px solid grey;\r\n  flex-basis: 10px;\r\n  flex-shrink: 0;\r\n  cursor: pointer;\r\n  margin-right: 10px;\r\n}\r\n\r\n.figure_add_category {\r\n  .checkbox_category span {\r\n    border: 2px solid grey;\r\n  }\r\n}\r\n\r\n.checkbox input:checked + span {\r\n  background-color: $color-soft-grey;\r\n  border: 2px lightblue solid;\r\n\r\n}\r\n\r\n.figure_categories {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n}\r\n\r\n.submit {\r\n  font-family: $font-primary;\r\n  width: 80px;\r\n  height: 20px;\r\n  font-weight: 300;\r\n  background-color: $color-grey;\r\n  color: white;\r\n  border: none;\r\n  box-shadow: 1px 2px 5px black;\r\n  margin-left: 25%;\r\n  cursor: pointer;\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.not_ready .main_page {\r\n  height: 88vh;\r\n  .header2 {\r\n    width: 25%;\r\n    a {\r\n      color: cadetblue;\r\n      line-height: 40px;\r\n    }\r\n  }\r\n}\r\n\r\n\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.porady_page{\r\n  background-image: url(\"../img/2.jpeg\");\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-position-y: -250px;\r\n  .header1{\r\n    margin-left: 50px;\r\n  }\r\n  .header3{\r\n    padding-bottom: 30px;\r\n  }\r\n}\r\n.advice1, .advice3{\r\n  background-color: $color-white-background;\r\n  margin: 20px 50px 120px 50px;\r\n  padding: 20px;\r\n  line-height: 20px;\r\n  font-family: $font-primary;\r\n  font-weight: 300;\r\n}\r\n\r\n.advice2{\r\n  margin: 20px 50px 120px 50px;\r\n  padding: 20px;\r\n  line-height: 20px;\r\n  font-family: $font-primary;\r\n  font-weight: 300;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-self: center;\r\n  align-items: center;\r\n  background-color: $color-chalk-grey;\r\n  opacity: 75%;\r\n  width: 70%;\r\n\r\n  .circles_advice_box{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n    .circle_advice{\r\n      width: 30%;\r\n      justify-content: center;\r\n      .header3, p{\r\n        display: flex;\r\n        justify-content: center;\r\n      }\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b747d7a80721d3e0f07a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wMGYyYmI2OWE3M2EwYzI2M2FkZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QyxpRUFBNEM7QUFDeEYsNENBQTRDLGlFQUErQztBQUMzRiw0Q0FBNEMsaUVBQWdDO0FBQzVFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8seXJCQUF5ckIsS0FBSyxpQkFBaUIsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxXQUFXLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxZQUFZLFlBQVksV0FBVyxZQUFZLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxRQUFRLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sYUFBYSxhQUFhLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLGFBQWEsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxhQUFhLGFBQWEsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxZQUFZLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxZQUFZLFlBQVksVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE9BQU8sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxPQUFPLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsUUFBUSxPQUFPLFVBQVUsVUFBVSxRQUFRLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxRQUFRLE9B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QXNCLG1CQUFtQixrQkFBa0IsS0FBSyxtQkFBbUIsc0JBQXNCLG9CQUFvQixLQUFLLHdCQUF3QixtQkFBbUIsa0JBQWtCLDZCQUE2Qix1QkFBdUIscUJBQXFCLHNCQUFzQix5QkFBeUIsS0FBSyw4QkFBOEIsK0JBQStCLCtCQUErQixPQUFPLEtBQUssd0NBQXdDLHlDQUF5QyxrQ0FBa0MsU0FBUyw0QkFBNEIsb0JBQW9CLDBCQUEwQixzQkFBc0IsZUFBZSxLQUFLLGlCQUFpQixpQ0FBaUMsa0JBQWtCLG1CQUFtQix1QkFBdUIsb0NBQW9DLG1CQUFtQixtQkFBbUIsb0NBQW9DLHVCQUF1QixzQkFBc0IsS0FBSyx5Q0FBeUMsbUNBQW1DLCtCQUErQixtQkFBbUIsZ0JBQWdCLG1CQUFtQixXQUFXLDJCQUEyQiw0QkFBNEIsU0FBUyxPQUFPLEtBQUssaURBQWlELG1DQUFtQyxxQkFBcUIsK0NBQStDLG1DQUFtQyw2QkFBNkIsb0JBQW9CLDZCQUE2QixvQ0FBb0MsZUFBZSwwQkFBMEIsT0FBTyxlQUFlLDZCQUE2QixPQUFPLEtBQUssdUJBQXVCLGdEQUFnRCxtQ0FBbUMsb0JBQW9CLHdCQUF3QixpQ0FBaUMsdUJBQXVCLEtBQUssaUJBQWlCLG1DQUFtQyxvQkFBb0Isd0JBQXdCLGlDQUFpQyx1QkFBdUIsb0JBQW9CLDZCQUE2Qix5QkFBeUIsMEJBQTBCLDBDQUEwQyxtQkFBbUIsaUJBQWlCLDhCQUE4QixzQkFBc0IsNEJBQTRCLHNDQUFzQyxvQkFBb0IsdUJBQXVCLHFCQUFxQixrQ0FBa0Msc0JBQXNCLDBCQUEwQixvQ0FBb0MsV0FBVyxTQUFTLE9BQU8sS0FBSyxtQkFBbUI7QUFDbGgzQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUN0NEJ2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3Qvc2Nzcy9pbmRleC5zY3NzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZy9pbWdfbWFpbl9wYWdlLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvUERfaW1nXzNfc3pwYWdhdC5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1nLzIuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBFcmljIE1leWVyJ3MgQ1NTIFJlc2V0XG4gICBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuICAgVGhpcyBpcyBhIFNhc3MgcGFydGlhbFxuKi9cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLCBxIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLm1lbnVfbWFpbi1jb250YWluZXIge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDUwMDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm94LXNoYWRvdzogMnB4IDNweCAzcHggMnB4ICNEOEQ4RDg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfbWFpbi1jb250YWluZXIge1xuICAgIHdpZHRoOiA5MHZ3O1xuICB9XG59XG4ubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4ge1xuICAgIGdhcDogMjJweDtcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4ge1xuICAgIGdhcDogNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICB9XG59XG4ubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIC5tZW51X21haW5fZWxlbWVudCwgLm1lbnVfbWFpbi1jb250YWluZXIgLm1lbnVfbWFpbiBhIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIC5tZW51X21haW5fZWxlbWVudCwgLm1lbnVfbWFpbi1jb250YWluZXIgLm1lbnVfbWFpbiBhIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIC5tZW51X21haW5fZWxlbWVudCwgLm1lbnVfbWFpbi1jb250YWluZXIgLm1lbnVfbWFpbiBhIHtcbiAgICBmb250LXNpemU6IDkwJTtcbiAgfVxufVxuXG4ubWVudV9hc2lkZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ubWVudV9hc2lkZS1jb250YWluZXIgLm1lbnVfYXNpZGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctdG9wOiAxMDNweDtcbiAgZ2FwOiAxOHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfYXNpZGUtY29udGFpbmVyIC5tZW51X2FzaWRlIHtcbiAgICB3aWR0aDogMTUlO1xuICB9XG59XG4ubWVudV9hc2lkZS1jb250YWluZXIgLm1lbnVfYXNpZGUgLm1lbnVfYXNpZGVfZWxlbWVudCB7XG4gIG1hcmdpbjogMCAwIDAgMTVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWVudV9hc2lkZS1jb250YWluZXIgLm1lbnVfYXNpZGUgLm1lbnVfYXNpZGVfZWxlbWVudCB7XG4gICAgbWFyZ2luOiAwIDAgMCAycHg7XG4gIH1cbn1cbi5tZW51X2FzaWRlLWNvbnRhaW5lciAubWVudV9hc2lkZSAubWVudV9hc2lkZV9lbGVtZW50IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X2FzaWRlLWNvbnRhaW5lciAubWVudV9hc2lkZSAubWVudV9hc2lkZV9lbGVtZW50IGEge1xuICAgIGZvbnQtc2l6ZTogNjAlO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbn1cblxuLmZvb3Rlcl9jb250YWluZXIge1xuICBjbGVhcjogYm90aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZm9vdGVyX2NvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICByaWdodDogMDtcbiAgfVxufVxuLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDMwcHggMCAzMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5mb290ZXJfY29udGFpbmVyIC5tZW51X2Zvb3RlciB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG59XG4uZm9vdGVyX2NvbnRhaW5lciAubWVudV9mb290ZXIgLm1lbnVfZm9vdGVyX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDUwcHg7XG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZm9vdGVyX2NvbnRhaW5lciAubWVudV9mb290ZXIgLm1lbnVfZm9vdGVyX2xpc3Qge1xuICAgIGdhcDogMTAlO1xuICB9XG59XG4uZm9vdGVyX2NvbnRhaW5lciAubWVudV9mb290ZXIgLm1lbnVfZm9vdGVyX2xpc3QgYSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzkyOEU4RTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZm9vdGVyX2NvbnRhaW5lciAubWVudV9mb290ZXIgLm1lbnVfZm9vdGVyX2xpc3QgYSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4uZm9vdGVyX2NvbnRhaW5lciAubWVudV9mb290ZXIgYSB7XG4gIGNvbG9yOiAjRDhEOEQ4O1xufVxuXG4ub25lX3BhZ2VyIHtcbiAgaGVpZ2h0OiA5MHZoO1xufVxuXG4ubWFpbl9wYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB6LWluZGV4OiAyMDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLm1haW5fcGFnZSB7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDY2LjUlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1haW5fcGFnZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICB9XG59XG4ubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbn1cbi5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgLmNpcmNsZXNfd29ya291dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDE3MHB4O1xuICBoZWlnaHQ6IDE3MHB4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgLmNpcmNsZXNfd29ya291dCB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4ubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgxKSB7XG4gIGJvcmRlcjogMTBweCAjRTdFNkU2IHNvbGlkO1xufVxuLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMSkgaDIsIC5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1vZi10eXBlKDEpIGEge1xuICBib3JkZXI6IG5vbmU7XG59XG4ubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtY2hpbGQoMikge1xuICBib3JkZXI6IDEwcHggI0NDQ0JDQiBzb2xpZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLWNoaWxkKDIpIGgyLCAubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtY2hpbGQoMikgYSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1vZi10eXBlKDMpIHtcbiAgYm9yZGVyOiAxMHB4ICM5RDlEOUQgc29saWQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1vZi10eXBlKDMpIGgyLCAubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgzKSBhIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1haW5fcGFnZSAuYWJvdXRfcGxhdGZvcm0ge1xuICB3aWR0aDogMjk1cHg7XG59XG4ubWFpbl9wYWdlIC5hYm91dF9wbGF0Zm9ybSAuYWJvdXRfcGxhdGZvcm1fdGV4dCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5tYWluX3BhZ2UgLmhlYWRlcjMge1xuICBtYXJnaW4tYmxvY2s6IDIwcHggMTBweDtcbn1cblxuLndvcmtvdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDZENkQ2O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC53b3Jrb3V0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAud29ya291dCB7XG4gICAgcGFkZGluZzogNSU7XG4gIH1cbn1cbi53b3Jrb3V0IC5oZWFkZXI0IHtcbiAgcGFkZGluZy1ibG9jazogMTBweCAyMHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjQjAyMzIzO1xufVxuLndvcmtvdXQgLmRlc2NyaXB0aW9uX3RleHQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLndvcmtvdXQgLndvcmtvdXRfaW1nYWdlcywgLndvcmtvdXQgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC53b3Jrb3V0IC53b3Jrb3V0X2ltZ2FnZXMsIC53b3Jrb3V0IHVsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAud29ya291dCAud29ya291dF9pbWdhZ2VzLCAud29ya291dCB1bCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjAlO1xuICB9XG59XG4ud29ya291dCAud29ya291dF9pbWdhZ2VzIC53b3Jrb3V0X2ltYWdlLCAud29ya291dCB1bCAud29ya291dF9pbWFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC53b3Jrb3V0IC53b3Jrb3V0X2ltZ2FnZXMgLndvcmtvdXRfaW1hZ2UsIC53b3Jrb3V0IHVsIC53b3Jrb3V0X2ltYWdlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC53b3Jrb3V0IC53b3Jrb3V0X2ltZ2FnZXMgLndvcmtvdXRfaW1hZ2UsIC53b3Jrb3V0IHVsIC53b3Jrb3V0X2ltYWdlIHtcbiAgICBtYXJnaW46IDUlO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLndvcmtvdXQgLndvcmtvdXRfaW1nYWdlcyAud29ya291dF9pbWFnZSBpbWcsIC53b3Jrb3V0IHVsIC53b3Jrb3V0X2ltYWdlIGltZyB7XG4gICAgbWF4LWhlaWdodDogMzIwcHg7XG4gICAgbWF4LXdpZHRoOiAyODBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC53b3Jrb3V0IC53b3Jrb3V0X2ltZ2FnZXMgLndvcmtvdXRfaW1hZ2UgaW1nLCAud29ya291dCB1bCAud29ya291dF9pbWFnZSBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDEyMHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICB9XG59XG5cbi5maWd1cmVzX2NvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG4uZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIHtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuZmlndXJlc19wYWdlX2hlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuZmlndXJlc19wYWdlX2hlYWQgLmZpZ3VyZXNfc3RyaXBlIHtcbiAgd2lkdGg6IDU3NXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDN0M3Qzc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5maWd1cmVzX3BhZ2VfaGVhZCAuZmlndXJlc19jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTBweDtcbiAgb3BhY2l0eTogNTUlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIC5maWd1cmVzX2NpcmNsZSB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIC5maWd1cmVzX2NpcmNsZSB7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuZmlndXJlc19wYWdlX2hlYWQgLmhlYWRlcjMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuZmlndXJlc19wYWdlX2hlYWQgLmhlYWRlcjMge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIC5oZWFkZXIzIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmFkZF9maWd1cmUge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTUlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmFkZF9maWd1cmUge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5hZGRfZmlndXJlIGEge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuYWRkX2ZpZ3VyZSBhIHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgfVxufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX3NwYWNlX2ltZyB7XG4gIGhlaWdodDogMzUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgei1pbmRleDogMjAwO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0yNzBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfc3BhY2VfaW1nIHtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdnc7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfc3BhY2VfaW1nIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3gge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgfVxufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZGVzY3JpcHRpb25fdGV4dCB7XG4gIHdpZHRoOiA2MDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5kZXNjcmlwdGlvbl90ZXh0IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmZpZ3VyZXMgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5maWd1cmVzIHVsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmZpZ3VyZXMgdWwgLmZpZ3VyZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1OTU5NTk7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZmlndXJlcyB1bCAuZmlndXJlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAyMzBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmZpZ3VyZXMgdWwgLmZpZ3VyZSB7XG4gICAgbWFyZ2luOiA1JTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmZpZ3VyZXMgdWwgLmZpZ3VyZSBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDIzMHB4O1xuICAgIG1heC13aWR0aDogMjIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5maWd1cmVzIHVsIC5maWd1cmUgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgICBtYXgtd2lkdGg6IDgwcHg7XG4gIH1cbn1cblxuLmNvbnRhY3RfYm94IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5jb250YWN0X2JveCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5jb250YWN0IC5oZWFkZXIxIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8ge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5jb250YWN0X2JveCAuY29udGFjdCAuY29udGFjdF9pbmZvIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3ggLmNvbnRhY3QgLmNvbnRhY3RfaW5mbyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ibG9jazogMTVweDtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8gLmRlc2NyaXB0aW9uX3RleHQge1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cbi5jb250YWN0X2JveCAuY29udGFjdCAuY29udGFjdF9pbmZvIC5oZWFkZXIzIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3ggLmNvbnRhY3QgLmNvbnRhY3RfaW5mbyAuaGVhZGVyMyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8gLmFkZHJlc3Mge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGFjdF9ib3ggLmNvbnRhY3QgLmNvbnRhY3RfaW5mbyAuYWRkcmVzcyBhIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwJTtcbiAgZ2FwOiA1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAucGVyc29uYWxfZGF0ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cHg7XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAucGVyc29uYWxfZGF0ZSBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5wZXJzb25hbF9kYXRlIGlucHV0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxOTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAucGVyc29uYWxfZGF0ZSBpbnB1dCB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5jYXNlQWRkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLmNhc2UsIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5maWd1cmVfbGV2ZWwsIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5maWd1cmVfY2F0ZWdvcnkge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLmNhc2UsIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5maWd1cmVfbGV2ZWwsIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5maWd1cmVfY2F0ZWdvcnkge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIHNlbGVjdCB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIG9wdGlvbiB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLmZpZ3VyZV9hZGRfY2F0ZWdvcnkge1xuICB3aWR0aDogMzkwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAuZmlndXJlX2FkZF9jYXRlZ29yeSBwIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jb250YWN0X2JveCAuYm94X21lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNDAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IC5ib3hfbWVzc2FnZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5ib3hfbWVzc2FnZSAudGl0bGVfbWVzc2FnZSB7XG4gIHBhZGRpbmctYmxvY2s6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY29udGFjdF9ib3ggLmJveF9tZXNzYWdlIC50ZXh0YXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcmVzaXplOiBub25lO1xufVxuLmNvbnRhY3RfYm94IC5ib3hfbWVzc2FnZSAuYWdyZWVtZW50IHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uY2hlY2tib3ggaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbn1cblxuLmNoZWNrYm94IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY2hlY2tib3ggc3BhbiB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIGZsZXgtYmFzaXM6IDEwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmZpZ3VyZV9hZGRfY2F0ZWdvcnkgLmNoZWNrYm94X2NhdGVnb3J5IHNwYW4ge1xuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xufVxuXG4uY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCArIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDhEOEQ4O1xuICBib3JkZXI6IDJweCBsaWdodGJsdWUgc29saWQ7XG59XG5cbi5maWd1cmVfY2F0ZWdvcmllcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA4cHg7XG59XG5cbi5zdWJtaXQge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1OTU5O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggYmxhY2s7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vdF9yZWFkeSAubWFpbl9wYWdlIHtcbiAgaGVpZ2h0OiA4OHZoO1xufVxuLm5vdF9yZWFkeSAubWFpbl9wYWdlIC5oZWFkZXIyIHtcbiAgd2lkdGg6IDI1JTtcbn1cbi5ub3RfcmVhZHkgLm1haW5fcGFnZSAuaGVhZGVyMiBhIHtcbiAgY29sb3I6IGNhZGV0Ymx1ZTtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5wb3JhZHlfcGFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMjUwcHg7XG59XG4ucG9yYWR5X3BhZ2UgLmhlYWRlcjEge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cbi5wb3JhZHlfcGFnZSAuaGVhZGVyMyB7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4uYWR2aWNlMSwgLmFkdmljZTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW46IDIwcHggNTBweCAxMjBweCA1MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmFkdmljZTIge1xuICBtYXJnaW46IDIwcHggNTBweCAxMjBweCA1MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDZENkQ2O1xuICBvcGFjaXR5OiA3NSU7XG4gIHdpZHRoOiA3MCU7XG59XG4uYWR2aWNlMiAuY2lyY2xlc19hZHZpY2VfYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFkdmljZTIgLmNpcmNsZXNfYWR2aWNlX2JveCAuY2lyY2xlX2FkdmljZSB7XG4gIHdpZHRoOiAzMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmFkdmljZTIgLmNpcmNsZXNfYWR2aWNlX2JveCAuY2lyY2xlX2FkdmljZSAuaGVhZGVyMywgLmFkdmljZTIgLmNpcmNsZXNfYWR2aWNlX2JveCAuY2lyY2xlX2FkdmljZSBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wYWdlX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1haW5fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNsZWFyOiBib3RoO1xuICByaWdodDogLTEwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWFpbl9jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogOTAlO1xuICAgIHJpZ2h0OiAtMTUlO1xuICB9XG59XG5cbi5oZWFkZXIxIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuaGVhZGVyMSB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIG1hcmdpbjogMCAwIDIwcHggMDtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5oZWFkZXIxIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLWJsb2NrOiAyMHB4O1xuICB9XG59XG5cbi5oZWFkZXIyIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuaGVhZGVyMiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmhlYWRlcjIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLmhlYWRlcjIgLmNob3NlbiB7XG4gIGNvbG9yOiAjQjAyMzIzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uaGVhZGVyMiAubm90X2Nob3NlbiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5oZWFkZXIzIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NldHRpbmdzL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3MvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NlY3Rpb25zL19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NldHRpbmdzL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NldHRpbmdzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NlY3Rpb25zL19hc2lkZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX21haW4tcGFnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX3dvcmtvdXQuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NlY3Rpb25zL19maWd1cmVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fY29uY2FjdC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX25vdF9yZWFkeV9wYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fYWR2aWNlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7O0NBQUE7QUFPQTs7Ozs7Ozs7Ozs7OztFQWFFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUNBRjs7QURFQSxnREFBQTtBQUNBOztFQUVFLGNBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7QUNFRjs7QURBQTtFQUNFLGdCQUFBO0FDR0Y7O0FEREE7RUFDRSxZQUFBO0FDSUY7O0FERkE7O0VBRUUsV0FBQTtFQUNBLGFBQUE7QUNLRjs7QURIQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUNNRjs7QUNuREE7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7QURzREY7QUV0REU7RURORjtJQVNJLFdBQUE7RUR1REY7QUFDRjtBQ3RERTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUR3REo7QUV0RUU7RURXQTtJQUtJLFNBQUE7SUFDQSxpQkFBQTtFRDBESjtBQUNGO0FFdEVFO0VES0E7SUFTSSxPQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VENERKO0FBQ0Y7QUMzREk7RUFRRSxtQkFBQTtFQUNBLG1CRXhCUztFRnlCVCxnQkFBQTtFQUNBLGNFckNhO0VGc0NiLHFCQUFBO0FEc0ROO0FFMUZFO0VEd0JFO0lB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NkJGO0lBU0ksZUFBQTtJQUNBLGtCQUFBO0VBMHlCRjtBQUNGOztBQXZ5QkE7RUFDRSxtQkd6Q2E7QUhtMUJmO0FFNTFCRTtFRmlERjtJQUdJLGVBQUE7SUFDQSxpQkFBQTtFQTR5QkY7QUFDRjtBRTUxQkU7RUYyQ0Y7SUFPSSxlQUFBO0VBOHlCRjtBQUNGO0FBN3lCRTtFQUNFLGNHMURRO0VIMkRSLHFCQUFBO0FBK3lCSjtBQTd5QkU7RUFDRSxxQkFBQTtFQUNBLGNHbEVlO0FIaTNCbkI7O0FBNXlCQTtFQUNFLG1CRzNEYTtFSDREYixlQUFBO0VBQ0EsZ0JBQUE7QUEreUJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEVyaWMgTWV5ZXIncyBDU1MgUmVzZXRcXHJcXG4gICBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xcclxcbiAgIHYyLjAgfCAyMDExMDEyNlxcclxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxyXFxuICAgVGhpcyBpcyBhIFNhc3MgcGFydGlhbFxcclxcbiovXFxyXFxuXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuICBxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgY29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgJ3NldHRpbmdzL3Jlc2V0JztcXHJcXG5AaW1wb3J0IFxcXCJzZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcInNldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvaGVhZGVyXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy9hc2lkZVxcXCI7XFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvZm9vdGVyXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy9tYWluLXBhZ2VcXFwiO1xcclxcbkBpbXBvcnQgXFxcInNlY3Rpb25zL3dvcmtvdXRcXFwiO1xcclxcbkBpbXBvcnQgXFxcInNlY3Rpb25zL2ZpZ3VyZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcInNlY3Rpb25zL2NvbmNhY3RcXFwiO1xcclxcbkBpbXBvcnQgXFxcInNlY3Rpb25zL25vdF9yZWFkeV9wYWdlXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy9hZHZpY2VcXFwiO1xcclxcblxcclxcblxcclxcbi5wYWdlX2NvbnRhaW5lcntcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stYmFja2dyb3VuZDtcXHJcXG59XFxyXFxuLm1haW5fY29udGFpbmVye1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGNsZWFyOiBib3RoO1xcclxcbiAgcmlnaHQ6IC0xMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtYmFja2dyb3VuZDtcXHJcXG4gIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICByaWdodDogLTE1JTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcjF7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeSwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICBtYXJnaW46IDAgMCAyMHB4IDA7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIG1hcmdpbi1ibG9jazogMjBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcjJ7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB9XFxyXFxuICAuY2hvc2Vue1xcclxcbiAgICBjb2xvcjogJGNvbG9yLXJlZDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgfVxcclxcbiAgLm5vdF9jaG9zZW57XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uaGVhZGVyM3tcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLm1lbnVfbWFpbi1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgdG9wOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB6LWluZGV4OiA1MDA7XFxyXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDNweCAzcHggMnB4ICRjb2xvci1zb2Z0LWdyZXk7XFxyXFxuICAvL2JvcmRlci1ib3R0b206IDJweCBibGFjayBzb2xpZDtcXHJcXG4gIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgIHdpZHRoOiA5MHZ3O1xcclxcbiAgfVxcclxcbiAgLm1lbnVfbWFpbiB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgZ2FwOiAyMnB4O1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICBnYXA6IDUlO1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudV9tYWluX2VsZW1lbnQsIGF7XFxyXFxuXFxyXFxuICAgICAgQGluY2x1ZGUgZGVza3RvcHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgZm9udC1zaXplOiA5MCU7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgICBjb2xvcjogJGNvbG9yLWZvbnQtYmxhY2s7XFxyXFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5cXHJcXG5AbWl4aW4gZGVza3RvcCB7XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBtb2JpbGUge1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gaGVhZGVyMSB7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gIGNvbG9yOiAkY29sb3ItZm9udC1ibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGhlYWRlcjJ7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGNvbG9yOiAkY29sb3ItZm9udC1ibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGhlYWRlcjN7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGNvbG9yOiAkY29sb3ItZm9udC1ibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGRlc2NyaXB0aW9ue1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBjb2xvcjogJGNvbG9yLWZvbnQtYmxhY2s7XFxyXFxufVwiLFwiXFxyXFxuJGNvbG9yLWZvbnQtYmxhY2s6ICMwMDAwMDA7XFxyXFxuJGNvbG9yLWZvbnQtd2hpdGU6ICNGRkZGRkY7XFxyXFxuXFxyXFxuJGNvbG9yLXJlZDogI0IwMjMyMztcXHJcXG4kY29sb3ItYmxhY2stYmFja2dyb3VuZDogIzAwMDAwMDtcXHJcXG4kY29sb3ItbmVhcmx5LWJsYWNrOiAjMUUxRTFFO1xcclxcbiRjb2xvci13aGl0ZS1iYWNrZ3JvdW5kOiAjRkZGRkZGO1xcclxcbiRjb2xvci1zb2Z0LWdyZXk6ICNEOEQ4RDg7XFxyXFxuJGNvbG9yLWNoYWxrLWdyZXk6ICNENkQ2RDY7XFxyXFxuJGNvbG9yLWdyZXk6ICM1OTU5NTk7XFxyXFxuXFxyXFxuJGZvbnQtcHJpbWFyeTogUm9ib3RvO1wiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbi5tZW51X2FzaWRlLWNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgLm1lbnVfYXNpZGUge1xcclxcbiAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgd2lkdGg6IDE1JTtcXHJcXG4gICAgfVxcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMDNweDtcXHJcXG4gICAgZ2FwOiAxOHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay1iYWNrZ3JvdW5kO1xcclxcbiAgICAubWVudV9hc2lkZV9lbGVtZW50IHtcXHJcXG4gICAgICBtYXJnaW46IDAgMCAwIDE1cHg7XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICBtYXJnaW46IDAgMCAwIDJweDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgYXtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5LCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICBjb2xvcjogJGNvbG9yLWZvbnQtd2hpdGU7XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogNjAlO1xcclxcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4uZm9vdGVyX2NvbnRhaW5lcntcXHJcXG4gIGNsZWFyOiBib3RoO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXHJcXG4gIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudV9mb290ZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMCAzMHB4IDAgMzBweDtcXHJcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLW5lYXJseS1ibGFjaztcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudV9mb290ZXJfbGlzdHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBnYXA6IDUwcHg7XFxyXFxuICAgICAgbWFyZ2luOiAwIDE1cHggMCAwO1xcclxcblxcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIGdhcDogMTAlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBhIHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgY29sb3I6ICM5MjhFOEU7XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgYXtcXHJcXG4gICAgICBjb2xvcjogJGNvbG9yLXNvZnQtZ3JleTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4ub25lX3BhZ2Vye1xcclxcbiAgaGVpZ2h0OiA5MHZoO1xcclxcbn1cXHJcXG4ubWFpbl9wYWdle1xcclxcbiAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltZy9pbWdfbWFpbl9wYWdlLmpwZWdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nL2ltZ19tYWluX3BhZ2UuanBlZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIHotaW5kZXg6IDIwMDtcXHJcXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDY2LjUlO1xcclxcbiAgICAvL2JhY2tncm91bmQtcG9zaXRpb24teDogMTc1JTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXHJcXG4gICAgcmlnaHQ6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNpcmNsZXNfd29ya291dHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtYmFja2dyb3VuZDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgd2lkdGg6IDE3MHB4O1xcclxcbiAgICAgIGhlaWdodDogMTcwcHg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICB9XFxyXFxuICAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMSl7XFxyXFxuICAgIGJvcmRlcjogMTBweCAjRTdFNkU2IHNvbGlkO1xcclxcbiAgICBoMiwgYSB7XFxyXFxuICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLWNoaWxkKDIpe1xcclxcbiAgICBib3JkZXI6IDEwcHggI0NDQ0JDQiBzb2xpZDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoMiwgYSB7XFxyXFxuICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMyl7XFxyXFxuICAgIGJvcmRlcjogMTBweCAjOUQ5RDlEIHNvbGlkO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGgyLCBhIHtcXHJcXG4gICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4uYWJvdXRfcGxhdGZvcm17XFxyXFxuICB3aWR0aDogMjk1cHg7XFxyXFxuXFxyXFxuICAuYWJvdXRfcGxhdGZvcm1fdGV4dHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHJcXG4gIH1cXHJcXG59XFxyXFxuICAuaGVhZGVyMyB7XFxyXFxuICAgIG1hcmdpbi1ibG9jazogMjBweCAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG5cXHJcXG4ud29ya291dHtcXHJcXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgIHBhZGRpbmc6IDUlO1xcclxcbiAgfVxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWNoYWxrLWdyZXk7XFxyXFxuICAuaGVhZGVyNHtcXHJcXG4gICAgcGFkZGluZy1ibG9jazogMTBweCAyMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBjb2xvcjogJGNvbG9yLXJlZDtcXHJcXG4gIH1cXHJcXG4gIC5kZXNjcmlwdGlvbl90ZXh0e1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBjb2xvcjogJGNvbG9yLWZvbnQtd2hpdGU7XFxyXFxuICB9XFxyXFxuICAud29ya291dF9pbWdhZ2VzLCB1bCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcXHJcXG4gICAgfVxcclxcbiAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjAlO1xcclxcbiAgICB9XFxyXFxuICAgIC53b3Jrb3V0X2ltYWdlIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtYmFja2dyb3VuZDtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgQGluY2x1ZGUgZGVza3RvcHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICBtYXJnaW46IDUlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgaW1nIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGRlc2t0b3B7XFxyXFxuICAgICAgICAgIC8vbWluLWhlaWdodDogMjAwcHg7XFxyXFxuICAgICAgICAgIG1heC1oZWlnaHQ6IDMyMHB4O1xcclxcbiAgICAgICAgICBtYXgtd2lkdGg6IDI4MHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMjBweDtcXHJcXG4gICAgICAgICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbi5maWd1cmVzX2NvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtYmFja2dyb3VuZDtcXHJcXG5cXHJcXG4gIC5tYWluX3BhZ2VfZmlndXJlcyB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXHJcXG4gICAgLmZpZ3VyZXNfcGFnZV9oZWFkIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcblxcclxcbiAgICAgIC5maWd1cmVzX3N0cmlwZSB7XFxyXFxuICAgICAgICB3aWR0aDogNTc1cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzdDN0M3O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5maWd1cmVzX2NpcmNsZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtYmFja2dyb3VuZDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHRvcDogLTEwcHg7XFxyXFxuICAgICAgICBvcGFjaXR5OiA1NSU7XFxyXFxuICAgICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgICAgICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuaGVhZGVyMyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5LCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hZGRfZmlndXJlIHtcXHJcXG4gICAgICB3aWR0aDogMTEwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1ibGFjay1iYWNrZ3JvdW5kO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHJpZ2h0OiAxNSU7XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgYSB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgICAgIGNvbG9yOiAkY29sb3ItZm9udC13aGl0ZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiA4cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmlndXJlc19zcGFjZV9pbWcge1xcclxcbiAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltZy9QRF9pbWdfM19zenBhZ2F0LmpwZWdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgei1pbmRleDogMjAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0yNzBweDtcXHJcXG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3O1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmlndXJlc19ib3gge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG5cXHJcXG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRlc2NyaXB0aW9uX3RleHR7XFxyXFxuICAgICAgd2lkdGg6IDYwMHB4O1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmlndXJlcyB1bCB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxyXFxuXFxyXFxuICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5maWd1cmUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXk7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgICAgICAgIGhlaWdodDogMjUwcHg7XFxyXFxuICAgICAgICAgIHdpZHRoOiAyMzBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgICAgIG1hcmdpbjogNSU7XFxyXFxuICAgICAgICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIGltZ3tcXHJcXG4gICAgICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMjMwcHg7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMjBweDtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcblxcclxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEyMHB4O1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogODBweDtcXHJcXG4gICAgICAgICAgfX1cXHJcXG5cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG59XCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuXFxyXFxuLmNvbnRhY3RfYm94IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5LCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMCU7XFxyXFxuICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3Qge1xcclxcbiAgICAuaGVhZGVyMSB7XFxyXFxuICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhY3RfaW5mbyB7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJsb2NrOiAxNXB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuZGVzY3JpcHRpb25fdGV4dCB7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmhlYWRlcjMge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuYWRkcmVzcyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuXFxyXFxuICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9ybV9tZXNzYWdlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wZXJzb25hbF9kYXRlIHtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGdhcDogNXB4O1xcclxcblxcclxcbiAgICAgIGxhYmVsIHtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaW5wdXQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgbGVmdDogMTkwcHg7XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIC5jYXNlQWRke1xcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2FzZSwgLmZpZ3VyZV9sZXZlbCwgLmZpZ3VyZV9jYXRlZ29yeSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgc2VsZWN0IHtcXHJcXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgOjpzZWxlY3Rpb24ge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c3RlZWxibHVlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIG9wdGlvbiB7XFxyXFxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5maWd1cmVfYWRkX2NhdGVnb3J5IHtcXHJcXG4gICAgICB3aWR0aDogMzkwcHg7XFxyXFxuICAgICAgLy9kaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAgICAgcCB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib3hfbWVzc2FnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcXHJcXG4gICAgICB3aWR0aDogODAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aXRsZV9tZXNzYWdlIHtcXHJcXG4gICAgICBwYWRkaW5nLWJsb2NrOiAxMHB4O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRleHRhcmVhIHtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgcmVzaXplOiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hZ3JlZW1lbnQge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3ggaW5wdXQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGhlaWdodDogMTBweDtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3gge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IHNwYW4ge1xcclxcbiAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgZmxleC1iYXNpczogMTBweDtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlndXJlX2FkZF9jYXRlZ29yeSB7XFxyXFxuICAuY2hlY2tib3hfY2F0ZWdvcnkgc3BhbiB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCBpbnB1dDpjaGVja2VkICsgc3BhbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc29mdC1ncmV5O1xcclxcbiAgYm9yZGVyOiAycHggbGlnaHRibHVlIHNvbGlkO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZmlndXJlX2NhdGVnb3JpZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdCB7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggYmxhY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogMjUlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4ubm90X3JlYWR5IC5tYWluX3BhZ2Uge1xcclxcbiAgaGVpZ2h0OiA4OHZoO1xcclxcbiAgLmhlYWRlcjIge1xcclxcbiAgICB3aWR0aDogMjUlO1xcclxcbiAgICBhIHtcXHJcXG4gICAgICBjb2xvcjogY2FkZXRibHVlO1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbi5wb3JhZHlfcGFnZXtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nLzIuanBlZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogLTI1MHB4O1xcclxcbiAgLmhlYWRlcjF7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbiAgfVxcclxcbiAgLmhlYWRlcjN7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG4uYWR2aWNlMSwgLmFkdmljZTN7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtYmFja2dyb3VuZDtcXHJcXG4gIG1hcmdpbjogMjBweCA1MHB4IDEyMHB4IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbi5hZHZpY2Uye1xcclxcbiAgbWFyZ2luOiAyMHB4IDUwcHggMTIwcHggNTBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1jaGFsay1ncmV5O1xcclxcbiAgb3BhY2l0eTogNzUlO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG5cXHJcXG4gIC5jaXJjbGVzX2FkdmljZV9ib3h7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLmNpcmNsZV9hZHZpY2V7XFxyXFxuICAgICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAuaGVhZGVyMywgcHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImI3NDdkN2E4MDcyMWQzZTBmMDdhXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9