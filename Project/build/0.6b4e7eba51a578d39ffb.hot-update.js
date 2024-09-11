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
    padding-inline: 5%;
    justify-content: space-around;
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
  height: 90%;
}
@media (min-width: 736px) {
  .main_page {
    padding-inline: 5%;
    background-attachment: fixed;
    background-size: 66.5%;
    background-position: right;
  }
}
@media (max-width: 736px) {
  .main_page {
    background-attachment: fixed;
    background-size: 100%;
    width: 90%;
    height: 55vh;
    padding: 5%;
    padding-top: 50vh;
  }
}
.main_page .circles_workout-container {
  display: flex;
}
@media (max-width: 736px) {
  .main_page .circles_workout-container {
    justify-content: space-between;
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
    width: 30%;
    height: 100px;
    margin: 0;
  }
}
.main_page .circles_workout-container :nth-of-type(1) {
  border: 10px #E7E6E6 solid;
}
@media (max-width: 736px) {
  .main_page .circles_workout-container :nth-of-type(1) {
    border: 6px #E7E6E6 solid;
  }
}
.main_page .circles_workout-container :nth-of-type(1) h2, .main_page .circles_workout-container :nth-of-type(1) a {
  border: none;
}
.main_page .circles_workout-container :nth-child(2) {
  border: 10px #CCCBCB solid;
  position: relative;
}
@media (max-width: 736px) {
  .main_page .circles_workout-container :nth-child(2) {
    border: 6px #CCCBCB solid;
  }
}
.main_page .circles_workout-container :nth-child(2) h2, .main_page .circles_workout-container :nth-child(2) a {
  border: none;
}
.main_page .circles_workout-container :nth-of-type(3) {
  border: 10px #9D9D9D solid;
  position: relative;
}
@media (max-width: 736px) {
  .main_page .circles_workout-container :nth-of-type(3) {
    border: 6px #9D9D9D solid;
  }
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
    padding: 5%;
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
  justify-content: space-between;
}
@media (min-width: 736px) {
  .workout .workout_imgages, .workout ul {
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
    width: 30vw;
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
    max-width: 90%;
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
  width: 90vw;
  margin-left: 10vw;
}
@media (max-width: 736px) {
  .main_container {
    width: 85vw;
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
}`, "",{"version":3,"sources":["webpack://./Project/scss/settings/_reset.scss","webpack://./Project/scss/index.scss","webpack://./Project/scss/sections/_header.scss","webpack://./Project/scss/settings/_mixins.scss","webpack://./Project/scss/settings/_variables.scss","webpack://./Project/scss/sections/_aside.scss","webpack://./Project/scss/sections/_footer.scss","webpack://./Project/scss/sections/_main-page.scss","webpack://./Project/scss/sections/_workout.scss","webpack://./Project/scss/sections/_figures.scss","webpack://./Project/scss/sections/_concact.scss","webpack://./Project/scss/sections/_not_ready_page.scss","webpack://./Project/scss/sections/_advice.scss"],"names":[],"mappings":"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","sourcesContent":["/* Eric Meyer's CSS Reset\r\n   http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n   This is a Sass partial\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n  display: block;\r\n}\r\nbody {\r\n  line-height: 1;\r\n}\r\nol, ul {\r\n  list-style: none;\r\n}\r\nblockquote, q {\r\n  quotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n  content: '';\r\n  content: none;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n","@import 'settings/reset';\r\n@import \"settings/variables\";\r\n@import \"settings/mixins\";\r\n\r\n@import \"sections/header\";\r\n@import \"sections/aside\";\r\n@import \"sections/footer\";\r\n@import \"sections/main-page\";\r\n@import \"sections/workout\";\r\n@import \"sections/figures\";\r\n@import \"sections/concact\";\r\n@import \"sections/not_ready_page\";\r\n@import \"sections/advice\";\r\n\r\n\r\n.page_container{\r\n  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n  // position: absolute;\r\n  // box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n  //background-color: $color-black-background;\r\n}\r\n.main_container{\r\n  width: 90vw;\r\n  margin-left: 10vw;\r\n  @include mobile{\r\n    width: 85vw;\r\n    margin-left: 15vw;\r\n  }\r\n}\r\n// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1\r\n// .page_container{\r\n//   position: relative;\r\n//   box-sizing: border-box;\r\n//   display: flex;\r\n//   flex-direction: row;\r\n//   height: 100%;\r\n//   width: 100%;\r\n//   overflow-x: hidden;\r\n//   //background-color: $color-black-background;\r\n// }\r\n// .main_container{\r\n//   position: relative;\r\n//   width: 90%;\r\n//   height: 100%;\r\n//   clear: both;\r\n//   right: -15%;\r\n//   background-color: $color-white-background;\r\n//   @include mobile{\r\n//     position: relative;\r\n//     width: 80%;\r\n//     right: -15%;\r\n//   }\r\n// }\r\n\r\n.header1{\r\n  font-family: $font-primary, sans-serif;\r\n  font-weight: 300;\r\n  @include desktop {\r\n    font-size: 50px;\r\n    margin: 0 0 20px 0;\r\n    padding-top: 40px;\r\n  }\r\n  @include mobile{\r\n    font-size: 30px;\r\n    margin-block: 20px;\r\n  }\r\n}\r\n\r\n.header2{\r\n  font-family: $font-primary;\r\n  @include desktop {\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n  }\r\n  @include mobile{\r\n    font-size: 14px;\r\n  }\r\n  .chosen{\r\n    color: $color-red;\r\n    text-decoration: none;\r\n  }\r\n  .not_chosen{\r\n    text-decoration: none;\r\n    color: $color-font-black;\r\n  }\r\n}\r\n.header3{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.menu_main-container {\r\n  height: 60px;\r\n  top: 10px;\r\n  background-color: white;\r\n  z-index: 500;\r\n  position: sticky;\r\n  box-shadow: 2px 3px 3px 2px $color-soft-grey;\r\n  //border-bottom: 2px black solid;\r\n  @include mobile {\r\n    width: 90vw;\r\n  }\r\n  .menu_main {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    @include desktop {\r\n      gap: 22px;\r\n      margin-left: 60px;\r\n    }\r\n    @include mobile{\r\n      // gap: 5%;\r\n      padding-inline: 5%;\r\n      justify-content: space-around;\r\n      line-height: 10px;\r\n    }\r\n    .menu_main_element, a{\r\n\r\n      @include desktop{\r\n        font-size: 16px;\r\n      }\r\n      @include mobile{\r\n        font-size: 90%;\r\n      }\r\n      flex-direction: row;\r\n      font-family: $font-primary;\r\n      font-weight: 300;\r\n      color: $color-font-black;\r\n      text-decoration: none;\r\n    }\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n\r\n@mixin desktop {\r\n  @media (min-width: 736px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile {\r\n  @media (max-width: 736px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin header1 {\r\n  font-family: $font-primary;\r\n  font-size: 50px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin header2{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin header3{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin description{\r\n  font-family: $font-primary;\r\n  font-size: 14px;\r\n  color: $color-font-black;\r\n}","\r\n$color-font-black: #000000;\r\n$color-font-white: #FFFFFF;\r\n\r\n$color-red: #B02323;\r\n$color-black-background: #000000;\r\n$color-nearly-black: #1E1E1E;\r\n$color-white-background: #FFFFFF;\r\n$color-soft-grey: #D8D8D8;\r\n$color-chalk-grey: #D6D6D6;\r\n$color-grey: #595959;\r\n\r\n$font-primary: Roboto;","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.menu_aside-container {\r\n  height: 100%;\r\n  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n  // position: absolute;\r\n  .menu_aside {\r\n    position: fixed;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-top: 103px;\r\n    gap: 18px;\r\n    height: 100%;\r\n    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n    width: 10vw;\r\n    background-color: $color-black-background;\r\n    @include mobile{\r\n      width: 15vw;\r\n    }\r\n    .menu_aside_element {\r\n      margin: 0 0 0 15px;\r\n      @include mobile {\r\n      margin: 0 0 0 2px;\r\n      }\r\n      a{\r\n        text-decoration: none;\r\n        font-size: 14px;\r\n        font-family: $font-primary, sans-serif;\r\n        font-weight: bold;\r\n        color: $color-font-white;\r\n        @include mobile{\r\n          font-size: 58%;\r\n          font-weight: 300;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.footer_container{\r\n  clear: both;\r\n  position: fixed;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  width: 90%;\r\n  height: 80px;\r\n  background-color: #000000;\r\n  @include mobile{\r\n    width: 90%;\r\n    right: 0;\r\n  }\r\n\r\n  .menu_footer{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 50px;\r\n    width: 100%;\r\n    padding: 0 30px 0 30px;\r\n    // background-color: $color-nearly-black;\r\n    @include mobile{\r\n      padding: 5px;\r\n      justify-content: space-around;\r\n    }\r\n    .menu_footer_list{\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: center;\r\n      gap: 50px;\r\n      margin: 0 15px 0 0;\r\n\r\n      @include mobile{\r\n        gap: 10%;\r\n      }\r\n      a {\r\n        font-family: $font-primary;\r\n        font-size: 12px;\r\n        text-decoration: none;\r\n        color: #928E8E;\r\n        @include mobile{\r\n          font-size: 14px;\r\n        }\r\n      }\r\n    }\r\n    a{\r\n      color: $color-soft-grey;\r\n    }\r\n  }\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.one_pager{\r\n// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n  // height: 90vh;\r\n}\r\n.main_page{\r\n  //background-image: url(\"../img/img_main_page.jpeg\");\r\n  background-image: url(\"../img/img_main_page.jpeg\");\r\n  background-repeat: no-repeat;\r\n  z-index: 200;\r\n  height: 90%;\r\n  @include desktop {\r\n    padding-inline: 5%;\r\n    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n    background-attachment: fixed;\r\n    background-size: 66.5%;\r\n    background-position: right;\r\n    // margin-left: 60px;\r\n  }\r\n  @include mobile{\r\n    background-attachment: fixed;\r\n    background-size: 100%;\r\n    width: 90%;\r\n    height: 55vh;\r\n    padding: 5%;\r\n    padding-top: 50vh;\r\n\r\n    // margin-left: 5%;\r\n  }\r\n\r\n\r\n  .circles_workout-container{\r\n    display: flex;\r\n    @include mobile {\r\n      // flex-wrap: wrap;\r\n      justify-content: space-between;\r\n    }\r\n\r\n    .circles_workout{\r\n      background-color: $color-white-background;\r\n      border-radius: 50%;\r\n      width: 170px;\r\n      height: 170px;\r\n      flex-direction: row;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      margin-right: 20px;\r\n      @include mobile{\r\n        width: 30%;\r\n        height: 100px;\r\n        margin: 0;\r\n      }\r\n    }\r\n\r\n  }\r\n  .circles_workout-container :nth-of-type(1){\r\n    border: 10px #E7E6E6 solid;\r\n    @include mobile{\r\n      border: 6px #E7E6E6 solid;\r\n    }\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n  .circles_workout-container :nth-child(2){\r\n    border: 10px #CCCBCB solid;\r\n    position: relative;\r\n    @include mobile{\r\n      border: 6px #CCCBCB solid;\r\n    }\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n  .circles_workout-container :nth-of-type(3){\r\n    border: 10px #9D9D9D solid;\r\n    position: relative;\r\n    @include mobile{\r\n      border: 6px #9D9D9D solid;\r\n    }\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n.about_platform{\r\n  width: 295px;\r\n\r\n  .about_platform_text{\r\n    margin-right: 20px;\r\n    padding-bottom: 20px;\r\n    font-family: $font-primary;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n\r\n  }\r\n}\r\n  .header3 {\r\n    margin-block: 20px 10px;\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n\r\n.workout{\r\n  @include desktop {\r\n    // padding-left: 60px;\r\n    padding: 5%;\r\n  }\r\n  @include mobile{\r\n    padding: 5%;\r\n  }\r\n  background-color: $color-chalk-grey;\r\n  .header4{\r\n    padding-block: 10px 20px;\r\n    font-family: $font-primary;\r\n    font-size: 24px;\r\n    font-weight: 300;\r\n    color: $color-red;\r\n  }\r\n  .description_text{\r\n    margin-bottom: 20px;\r\n    font-family: $font-primary;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: $color-font-white;\r\n  }\r\n  .workout_imgages, ul {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    @include desktop {\r\n      // margin-right: 100px;\r\n      margin-bottom: 60px;\r\n    }\r\n    @include mobile{\r\n      margin-bottom: 20%;\r\n    }\r\n    .workout_image {\r\n      background-color: $color-white-background;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n\r\n      @include desktop{\r\n        margin-right: 40px;\r\n        margin-bottom: 50px;\r\n        height: 350px;\r\n        width: 300px;\r\n      }\r\n      @include mobile{\r\n        margin: 5%;\r\n        height: 150px;\r\n        // width: 100px;\r\n        width: 30vw;\r\n      }\r\n      img {\r\n        @include desktop{\r\n          //min-height: 200px;\r\n          max-height: 320px;\r\n          max-width: 280px;\r\n        }\r\n        @include mobile{\r\n          max-height: 120px;\r\n          max-width: 90%;\r\n        }\r\n\r\n      }\r\n    }\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.figures_container {\r\n  background-color: $color-white-background;\r\n\r\n  .main_page_figures {\r\n    padding-bottom: 100px;\r\n    .figures_page_head {\r\n      display: flex;\r\n      flex-direction: row;\r\n      margin-top: 50px;\r\n      margin-bottom: 20px;\r\n\r\n      .figures_stripe {\r\n        width: 575px;\r\n        height: 40px;\r\n        background-color: #C7C7C7;\r\n        display: flex;\r\n        flex-direction: row;\r\n      }\r\n\r\n      .figures_circle {\r\n        background-color: $color-white-background;\r\n        border-radius: 50%;\r\n        position: relative;\r\n        top: -10px;\r\n        opacity: 55%;\r\n        @include desktop {\r\n          width: 60px;\r\n          height: 60px;\r\n          margin: 0 10px 0 10px;\r\n        }\r\n        @include mobile {\r\n          top: 0;\r\n          width: 30px;\r\n          height: 30px;\r\n        }\r\n      }\r\n\r\n      .header3 {\r\n        display: flex;\r\n        align-items: center;\r\n        height: 100%;\r\n        font-family: $font-primary, sans-serif;\r\n        font-weight: 300;\r\n        @include desktop {\r\n          font-size: 24px;\r\n        }\r\n        @include mobile {\r\n          font-size: 16px;\r\n        }\r\n      }\r\n    }\r\n\r\n    .add_figure {\r\n      width: 110px;\r\n      height: 40px;\r\n      background: $color-black-background;\r\n      border-radius: 30%;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      position: absolute;\r\n      right: 15%;\r\n      @include mobile{\r\n        width: 30px;\r\n        right: 0;\r\n      }\r\n      a {\r\n        font-family: $font-primary;\r\n        color: $color-font-white;\r\n        font-size: 14px;\r\n        text-decoration: none;\r\n        @include mobile{\r\n          font-size: 8px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .figures_space_img {\r\n    height: 350px;\r\n    background-image: url(\"../img/PD_img_3_szpagat.jpeg\");\r\n    background-repeat: no-repeat;\r\n    z-index: 200;\r\n    background-position-y: -270px;\r\n    @include desktop {\r\n      background-attachment: fixed;\r\n      background-size: 100vw;\r\n    }\r\n    @include mobile {\r\n      height: 150px;\r\n      background-size: 100%;\r\n      background-position: 200% 0;\r\n    }\r\n  }\r\n\r\n  .figures_box {\r\n    padding-top: 20px;\r\n\r\n    @include desktop {\r\n      padding-left: 60px;\r\n    }\r\n    @include mobile {\r\n      padding-left: 10%;\r\n    }\r\n    .description_text{\r\n      width: 600px;\r\n      margin-bottom: 20px;\r\n      font-family: $font-primary;\r\n      font-size: 14px;\r\n      font-weight: 400;\r\n      color: $color-font-black;\r\n      @include mobile{\r\n        width: 90%;\r\n        margin-bottom: 10px;\r\n      }\r\n    }\r\n\r\n    .figures ul {\r\n      display: flex;\r\n      flex-direction: row;\r\n      flex-wrap: wrap;\r\n      justify-content: left;\r\n\r\n      @include desktop {\r\n        margin-right: 80px;\r\n      }\r\n      .figure {\r\n        background-color: $color-grey;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        @include desktop {\r\n          margin-right: 10px;\r\n          margin-bottom: 10px;\r\n          height: 250px;\r\n          width: 230px;\r\n        }\r\n        @include mobile {\r\n          margin: 5%;\r\n          height: 150px;\r\n          width: 100px;\r\n        }\r\n        img{\r\n          @include desktop {\r\n            max-height: 230px;\r\n            max-width: 220px;\r\n          }\r\n          @include mobile {\r\n\r\n            max-height: 120px;\r\n            max-width: 80px;\r\n          }}\r\n\r\n      }\r\n    }\r\n  }\r\n\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n\r\n.contact_box {\r\n  font-family: $font-primary, sans-serif;\r\n  margin-top: 30px;\r\n  margin-left: 40px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 10%;\r\n  @include mobile {\r\n    flex-direction: column;\r\n    align-items: start;\r\n    margin-left: 20px;\r\n    margin-bottom: 60px;\r\n    height: 100vh;\r\n  }\r\n\r\n  .contact {\r\n    .header1 {\r\n      margin: 0;\r\n      padding: 0;\r\n    }\r\n\r\n    .contact_info {\r\n      font-weight: 300;\r\n      @include desktop {\r\n        font-size: 20px;\r\n        padding-top: 20px;\r\n      }\r\n      @include mobile {\r\n        font-size: 14px;\r\n        margin-block: 15px;\r\n      }\r\n\r\n      .description_text {\r\n        line-height: 30px;\r\n      }\r\n\r\n      .header3 {\r\n        margin-top: 50px;\r\n        margin-bottom: 15px;\r\n        @include mobile {\r\n          margin-top: 20px;\r\n        }\r\n      }\r\n\r\n      .address {\r\n        font-size: 16px;\r\n\r\n        a {\r\n          padding-left: 10px;\r\n          text-decoration: none;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .form_message {\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 50%;\r\n    gap: 5px;\r\n    @include mobile{\r\n      width: 100%;\r\n    }\r\n\r\n    .personal_date {\r\n      position: relative;\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 5px;\r\n\r\n      label {\r\n        font-weight: 600;\r\n        width: 300px;\r\n        margin-bottom: 20px;\r\n        display: flex;\r\n        align-items: center\r\n      }\r\n\r\n      input {\r\n        font-size: 12px;\r\n        width: 200px;\r\n        height: 20px;\r\n        position: absolute;\r\n        left: 190px;\r\n        @include mobile{\r\n          width: 40%;\r\n        }\r\n      }\r\n    }\r\n    .caseAdd{\r\n      @include mobile{\r\n        width: 100%;\r\n      }\r\n    }\r\n\r\n    .case, .figure_level, .figure_category {\r\n      font-size: 12px;\r\n      font-family: $font-primary;\r\n      width: 400px;\r\n      height: 20px;\r\n      margin-bottom: 15px;\r\n      cursor: pointer;\r\n      @include mobile{\r\n        width: 93%;\r\n      }\r\n    }\r\n\r\n    select {\r\n      -webkit-border-radius: 25px;\r\n      -moz-border-radius: 25px;\r\n      border-radius: 25px;\r\n    }\r\n\r\n    ::selection {\r\n      background-color: lightsteelblue;\r\n    }\r\n\r\n    option {\r\n      -webkit-border-radius: 25px;\r\n      -moz-border-radius: 25px;\r\n      border-radius: 25px;\r\n    }\r\n\r\n    .figure_add_category {\r\n      width: 390px;\r\n      //display: flex;\r\n      flex-direction: column;\r\n\r\n      p {\r\n        font-weight: 600;\r\n        margin-bottom: 15px;\r\n      }\r\n\r\n    }\r\n  }\r\n\r\n  .box_message {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 400px;\r\n    @include mobile {\r\n      padding-bottom: 60px;\r\n      width: 93%;\r\n    }\r\n\r\n    .title_message {\r\n      padding-block: 10px;\r\n      font-weight: 600;\r\n    }\r\n\r\n    .textarea {\r\n      margin-bottom: 5px;\r\n      resize: none;\r\n    }\r\n\r\n    .agreement {\r\n      font-size: 10px;\r\n    }\r\n\r\n  }\r\n\r\n}\r\n\r\n.checkbox input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  height: 10px;\r\n  width: 10px;\r\n}\r\n\r\n.checkbox {\r\n  cursor: pointer;\r\n  display: flex;\r\n}\r\n\r\n.checkbox span {\r\n  height: 10px;\r\n  width: 10px;\r\n  border: 2px solid grey;\r\n  flex-basis: 10px;\r\n  flex-shrink: 0;\r\n  cursor: pointer;\r\n  margin-right: 10px;\r\n}\r\n\r\n.figure_add_category {\r\n  .checkbox_category span {\r\n    border: 2px solid grey;\r\n  }\r\n}\r\n\r\n.checkbox input:checked + span {\r\n  background-color: $color-soft-grey;\r\n  border: 2px lightblue solid;\r\n\r\n}\r\n\r\n.figure_categories {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n}\r\n\r\n.submit {\r\n  font-family: $font-primary;\r\n  width: 80px;\r\n  height: 20px;\r\n  font-weight: 300;\r\n  background-color: $color-grey;\r\n  color: white;\r\n  border: none;\r\n  box-shadow: 1px 2px 5px black;\r\n  margin-left: 25%;\r\n  cursor: pointer;\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.not_ready .main_page {\r\n  height: 88vh;\r\n  .header2 {\r\n    width: 25%;\r\n    a {\r\n      color: cadetblue;\r\n      line-height: 40px;\r\n    }\r\n  }\r\n}\r\n\r\n\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.porady_page{\r\n  background-image: url(\"../img/2.jpeg\");\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-position-y: -250px;\r\n  .header1{\r\n    margin-left: 50px;\r\n  }\r\n  .header3{\r\n    padding-bottom: 30px;\r\n  }\r\n}\r\n.advice1, .advice3{\r\n  background-color: $color-white-background;\r\n  margin: 20px 50px 120px 50px;\r\n  padding: 20px;\r\n  line-height: 20px;\r\n  font-family: $font-primary;\r\n  font-weight: 300;\r\n}\r\n\r\n.advice2{\r\n  margin: 20px 50px 120px 50px;\r\n  padding: 20px;\r\n  line-height: 20px;\r\n  font-family: $font-primary;\r\n  font-weight: 300;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-self: center;\r\n  align-items: center;\r\n  background-color: $color-chalk-grey;\r\n  opacity: 75%;\r\n  width: 70%;\r\n\r\n  .circles_advice_box{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n    .circle_advice{\r\n      width: 30%;\r\n      justify-content: center;\r\n      .header3, p{\r\n        display: flex;\r\n        justify-content: center;\r\n      }\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7fd37b940a1150297bd5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42YjRlN2ViYTUxYTU3OGQzOWZmYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QyxpRUFBNEM7QUFDeEYsNENBQTRDLGlFQUErQztBQUMzRiw0Q0FBNEMsaUVBQWdDO0FBQzVFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHlyQkFBeXJCLEtBQUssaUJBQWlCLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sV0FBVyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsWUFBWSxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sYUFBYSxhQUFhLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxhQUFhLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsYUFBYSxhQUFhLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sWUFBWSxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sT0FBTyxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sWUFBWSxZQUFZLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxPQUFPLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxPQUFPLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFFBQVEsT0FB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QUEwQyxtQkFBbUIsaUJBQWlCLDhCQUE4QixzQkFBc0IsNEJBQTRCLHNDQUFzQyxvQkFBb0IsdUJBQXVCLHFCQUFxQixrQ0FBa0Msc0JBQXNCLDBCQUEwQixvQ0FBb0MsV0FBVyxTQUFTLE9BQU8sS0FBSyxtQkFBbUI7QUFDbjA1QjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUM1NEJ2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3Qvc2Nzcy9pbmRleC5zY3NzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZy9pbWdfbWFpbl9wYWdlLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvUERfaW1nXzNfc3pwYWdhdC5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1nLzIuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBFcmljIE1leWVyJ3MgQ1NTIFJlc2V0XG4gICBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuICAgVGhpcyBpcyBhIFNhc3MgcGFydGlhbFxuKi9cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLCBxIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLm1lbnVfbWFpbi1jb250YWluZXIge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDUwMDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm94LXNoYWRvdzogMnB4IDNweCAzcHggMnB4ICNEOEQ4RDg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfbWFpbi1jb250YWluZXIge1xuICAgIHdpZHRoOiA5MHZ3O1xuICB9XG59XG4ubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4ge1xuICAgIGdhcDogMjJweDtcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4ge1xuICAgIHBhZGRpbmctaW5saW5lOiA1JTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgfVxufVxuLm1lbnVfbWFpbi1jb250YWluZXIgLm1lbnVfbWFpbiAubWVudV9tYWluX2VsZW1lbnQsIC5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4gYSB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfbWFpbi1jb250YWluZXIgLm1lbnVfbWFpbiAubWVudV9tYWluX2VsZW1lbnQsIC5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4gYSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfbWFpbi1jb250YWluZXIgLm1lbnVfbWFpbiAubWVudV9tYWluX2VsZW1lbnQsIC5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4gYSB7XG4gICAgZm9udC1zaXplOiA5MCU7XG4gIH1cbn1cblxuLm1lbnVfYXNpZGUtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1lbnVfYXNpZGUtY29udGFpbmVyIC5tZW51X2FzaWRlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXRvcDogMTAzcHg7XG4gIGdhcDogMThweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWVudV9hc2lkZS1jb250YWluZXIgLm1lbnVfYXNpZGUge1xuICAgIHdpZHRoOiAxNXZ3O1xuICB9XG59XG4ubWVudV9hc2lkZS1jb250YWluZXIgLm1lbnVfYXNpZGUgLm1lbnVfYXNpZGVfZWxlbWVudCB7XG4gIG1hcmdpbjogMCAwIDAgMTVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWVudV9hc2lkZS1jb250YWluZXIgLm1lbnVfYXNpZGUgLm1lbnVfYXNpZGVfZWxlbWVudCB7XG4gICAgbWFyZ2luOiAwIDAgMCAycHg7XG4gIH1cbn1cbi5tZW51X2FzaWRlLWNvbnRhaW5lciAubWVudV9hc2lkZSAubWVudV9hc2lkZV9lbGVtZW50IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X2FzaWRlLWNvbnRhaW5lciAubWVudV9hc2lkZSAubWVudV9hc2lkZV9lbGVtZW50IGEge1xuICAgIGZvbnQtc2l6ZTogNTglO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbn1cblxuLmZvb3Rlcl9jb250YWluZXIge1xuICBjbGVhcjogYm90aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZm9vdGVyX2NvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICByaWdodDogMDtcbiAgfVxufVxuLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDMwcHggMCAzMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5mb290ZXJfY29udGFpbmVyIC5tZW51X2Zvb3RlciB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG59XG4uZm9vdGVyX2NvbnRhaW5lciAubWVudV9mb290ZXIgLm1lbnVfZm9vdGVyX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDUwcHg7XG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZm9vdGVyX2NvbnRhaW5lciAubWVudV9mb290ZXIgLm1lbnVfZm9vdGVyX2xpc3Qge1xuICAgIGdhcDogMTAlO1xuICB9XG59XG4uZm9vdGVyX2NvbnRhaW5lciAubWVudV9mb290ZXIgLm1lbnVfZm9vdGVyX2xpc3QgYSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzkyOEU4RTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZm9vdGVyX2NvbnRhaW5lciAubWVudV9mb290ZXIgLm1lbnVfZm9vdGVyX2xpc3QgYSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4uZm9vdGVyX2NvbnRhaW5lciAubWVudV9mb290ZXIgYSB7XG4gIGNvbG9yOiAjRDhEOEQ4O1xufVxuXG4ubWFpbl9wYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB6LWluZGV4OiAyMDA7XG4gIGhlaWdodDogOTAlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5tYWluX3BhZ2Uge1xuICAgIHBhZGRpbmctaW5saW5lOiA1JTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNjYuNSU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWFpbl9wYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogNTV2aDtcbiAgICBwYWRkaW5nOiA1JTtcbiAgICBwYWRkaW5nLXRvcDogNTB2aDtcbiAgfVxufVxuLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG59XG4ubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIC5jaXJjbGVzX3dvcmtvdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNzBweDtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIC5jaXJjbGVzX3dvcmtvdXQge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbi5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1vZi10eXBlKDEpIHtcbiAgYm9yZGVyOiAxMHB4ICNFN0U2RTYgc29saWQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMSkge1xuICAgIGJvcmRlcjogNnB4ICNFN0U2RTYgc29saWQ7XG4gIH1cbn1cbi5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1vZi10eXBlKDEpIGgyLCAubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgxKSBhIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLWNoaWxkKDIpIHtcbiAgYm9yZGVyOiAxMHB4ICNDQ0NCQ0Igc29saWQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtY2hpbGQoMikge1xuICAgIGJvcmRlcjogNnB4ICNDQ0NCQ0Igc29saWQ7XG4gIH1cbn1cbi5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1jaGlsZCgyKSBoMiwgLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLWNoaWxkKDIpIGEge1xuICBib3JkZXI6IG5vbmU7XG59XG4ubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgzKSB7XG4gIGJvcmRlcjogMTBweCAjOUQ5RDlEIHNvbGlkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMykge1xuICAgIGJvcmRlcjogNnB4ICM5RDlEOUQgc29saWQ7XG4gIH1cbn1cbi5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1vZi10eXBlKDMpIGgyLCAubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgzKSBhIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1haW5fcGFnZSAuYWJvdXRfcGxhdGZvcm0ge1xuICB3aWR0aDogMjk1cHg7XG59XG4ubWFpbl9wYWdlIC5hYm91dF9wbGF0Zm9ybSAuYWJvdXRfcGxhdGZvcm1fdGV4dCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5tYWluX3BhZ2UgLmhlYWRlcjMge1xuICBtYXJnaW4tYmxvY2s6IDIwcHggMTBweDtcbn1cblxuLndvcmtvdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDZENkQ2O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC53b3Jrb3V0IHtcbiAgICBwYWRkaW5nOiA1JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC53b3Jrb3V0IHtcbiAgICBwYWRkaW5nOiA1JTtcbiAgfVxufVxuLndvcmtvdXQgLmhlYWRlcjQge1xuICBwYWRkaW5nLWJsb2NrOiAxMHB4IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICNCMDIzMjM7XG59XG4ud29ya291dCAuZGVzY3JpcHRpb25fdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4ud29ya291dCAud29ya291dF9pbWdhZ2VzLCAud29ya291dCB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC53b3Jrb3V0IC53b3Jrb3V0X2ltZ2FnZXMsIC53b3Jrb3V0IHVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLndvcmtvdXQgLndvcmtvdXRfaW1nYWdlcywgLndvcmtvdXQgdWwge1xuICAgIG1hcmdpbi1ib3R0b206IDIwJTtcbiAgfVxufVxuLndvcmtvdXQgLndvcmtvdXRfaW1nYWdlcyAud29ya291dF9pbWFnZSwgLndvcmtvdXQgdWwgLndvcmtvdXRfaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAud29ya291dCAud29ya291dF9pbWdhZ2VzIC53b3Jrb3V0X2ltYWdlLCAud29ya291dCB1bCAud29ya291dF9pbWFnZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAud29ya291dCAud29ya291dF9pbWdhZ2VzIC53b3Jrb3V0X2ltYWdlLCAud29ya291dCB1bCAud29ya291dF9pbWFnZSB7XG4gICAgbWFyZ2luOiA1JTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAzMHZ3O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLndvcmtvdXQgLndvcmtvdXRfaW1nYWdlcyAud29ya291dF9pbWFnZSBpbWcsIC53b3Jrb3V0IHVsIC53b3Jrb3V0X2ltYWdlIGltZyB7XG4gICAgbWF4LWhlaWdodDogMzIwcHg7XG4gICAgbWF4LXdpZHRoOiAyODBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC53b3Jrb3V0IC53b3Jrb3V0X2ltZ2FnZXMgLndvcmtvdXRfaW1hZ2UgaW1nLCAud29ya291dCB1bCAud29ya291dF9pbWFnZSBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDEyMHB4O1xuICAgIG1heC13aWR0aDogOTAlO1xuICB9XG59XG5cbi5maWd1cmVzX2NvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG4uZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIHtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuZmlndXJlc19wYWdlX2hlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuZmlndXJlc19wYWdlX2hlYWQgLmZpZ3VyZXNfc3RyaXBlIHtcbiAgd2lkdGg6IDU3NXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDN0M3Qzc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5maWd1cmVzX3BhZ2VfaGVhZCAuZmlndXJlc19jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTBweDtcbiAgb3BhY2l0eTogNTUlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIC5maWd1cmVzX2NpcmNsZSB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIC5maWd1cmVzX2NpcmNsZSB7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuZmlndXJlc19wYWdlX2hlYWQgLmhlYWRlcjMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuZmlndXJlc19wYWdlX2hlYWQgLmhlYWRlcjMge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIC5oZWFkZXIzIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmFkZF9maWd1cmUge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTUlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmFkZF9maWd1cmUge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5hZGRfZmlndXJlIGEge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuYWRkX2ZpZ3VyZSBhIHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgfVxufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX3NwYWNlX2ltZyB7XG4gIGhlaWdodDogMzUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgei1pbmRleDogMjAwO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0yNzBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfc3BhY2VfaW1nIHtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdnc7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfc3BhY2VfaW1nIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3gge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgfVxufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZGVzY3JpcHRpb25fdGV4dCB7XG4gIHdpZHRoOiA2MDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5kZXNjcmlwdGlvbl90ZXh0IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmZpZ3VyZXMgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5maWd1cmVzIHVsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmZpZ3VyZXMgdWwgLmZpZ3VyZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1OTU5NTk7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZmlndXJlcyB1bCAuZmlndXJlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAyMzBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmZpZ3VyZXMgdWwgLmZpZ3VyZSB7XG4gICAgbWFyZ2luOiA1JTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmZpZ3VyZXMgdWwgLmZpZ3VyZSBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDIzMHB4O1xuICAgIG1heC13aWR0aDogMjIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5maWd1cmVzIHVsIC5maWd1cmUgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgICBtYXgtd2lkdGg6IDgwcHg7XG4gIH1cbn1cblxuLmNvbnRhY3RfYm94IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5jb250YWN0X2JveCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG59XG4uY29udGFjdF9ib3ggLmNvbnRhY3QgLmhlYWRlcjEge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uY29udGFjdF9ib3ggLmNvbnRhY3QgLmNvbnRhY3RfaW5mbyB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5jb250YWN0X2JveCAuY29udGFjdCAuY29udGFjdF9pbmZvIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJsb2NrOiAxNXB4O1xuICB9XG59XG4uY29udGFjdF9ib3ggLmNvbnRhY3QgLmNvbnRhY3RfaW5mbyAuZGVzY3JpcHRpb25fdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8gLmhlYWRlcjMge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5jb250YWN0X2JveCAuY29udGFjdCAuY29udGFjdF9pbmZvIC5oZWFkZXIzIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG59XG4uY29udGFjdF9ib3ggLmNvbnRhY3QgLmNvbnRhY3RfaW5mbyAuYWRkcmVzcyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250YWN0X2JveCAuY29udGFjdCAuY29udGFjdF9pbmZvIC5hZGRyZXNzIGEge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNTAlO1xuICBnYXA6IDVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5wZXJzb25hbF9kYXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDVweDtcbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5wZXJzb25hbF9kYXRlIGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLnBlcnNvbmFsX2RhdGUgaW5wdXQge1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE5MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5wZXJzb25hbF9kYXRlIGlucHV0IHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLmNhc2VBZGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAuY2FzZSwgLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLmZpZ3VyZV9sZXZlbCwgLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLmZpZ3VyZV9jYXRlZ29yeSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAuY2FzZSwgLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLmZpZ3VyZV9sZXZlbCwgLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLmZpZ3VyZV9jYXRlZ29yeSB7XG4gICAgd2lkdGg6IDkzJTtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2Ugc2VsZWN0IHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSA6OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c3RlZWxibHVlO1xufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2Ugb3B0aW9uIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAuZmlndXJlX2FkZF9jYXRlZ29yeSB7XG4gIHdpZHRoOiAzOTBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5maWd1cmVfYWRkX2NhdGVnb3J5IHAge1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmNvbnRhY3RfYm94IC5ib3hfbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA0MDBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3ggLmJveF9tZXNzYWdlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgICB3aWR0aDogOTMlO1xuICB9XG59XG4uY29udGFjdF9ib3ggLmJveF9tZXNzYWdlIC50aXRsZV9tZXNzYWdlIHtcbiAgcGFkZGluZy1ibG9jazogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5jb250YWN0X2JveCAuYm94X21lc3NhZ2UgLnRleHRhcmVhIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICByZXNpemU6IG5vbmU7XG59XG4uY29udGFjdF9ib3ggLmJveF9tZXNzYWdlIC5hZ3JlZW1lbnQge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5jaGVja2JveCBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG4uY2hlY2tib3gge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jaGVja2JveCBzcGFuIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgZmxleC1iYXNpczogMTBweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZmlndXJlX2FkZF9jYXRlZ29yeSAuY2hlY2tib3hfY2F0ZWdvcnkgc3BhbiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG59XG5cbi5jaGVja2JveCBpbnB1dDpjaGVja2VkICsgc3BhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEOEQ4RDg7XG4gIGJvcmRlcjogMnB4IGxpZ2h0Ymx1ZSBzb2xpZDtcbn1cblxuLmZpZ3VyZV9jYXRlZ29yaWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDhweDtcbn1cblxuLnN1Ym1pdCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1OTU5NTk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAxcHggMnB4IDVweCBibGFjaztcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubm90X3JlYWR5IC5tYWluX3BhZ2Uge1xuICBoZWlnaHQ6IDg4dmg7XG59XG4ubm90X3JlYWR5IC5tYWluX3BhZ2UgLmhlYWRlcjIge1xuICB3aWR0aDogMjUlO1xufVxuLm5vdF9yZWFkeSAubWFpbl9wYWdlIC5oZWFkZXIyIGEge1xuICBjb2xvcjogY2FkZXRibHVlO1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cblxuLnBvcmFkeV9wYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0yNTBweDtcbn1cbi5wb3JhZHlfcGFnZSAuaGVhZGVyMSB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuLnBvcmFkeV9wYWdlIC5oZWFkZXIzIHtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5hZHZpY2UxLCAuYWR2aWNlMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIG1hcmdpbjogMjBweCA1MHB4IDEyMHB4IDUwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uYWR2aWNlMiB7XG4gIG1hcmdpbjogMjBweCA1MHB4IDEyMHB4IDUwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXdlaWdodDogMzAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNENkQ2RDY7XG4gIG9wYWNpdHk6IDc1JTtcbiAgd2lkdGg6IDcwJTtcbn1cbi5hZHZpY2UyIC5jaXJjbGVzX2FkdmljZV9ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWR2aWNlMiAuY2lyY2xlc19hZHZpY2VfYm94IC5jaXJjbGVfYWR2aWNlIHtcbiAgd2lkdGg6IDMwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYWR2aWNlMiAuY2lyY2xlc19hZHZpY2VfYm94IC5jaXJjbGVfYWR2aWNlIC5oZWFkZXIzLCAuYWR2aWNlMiAuY2lyY2xlc19hZHZpY2VfYm94IC5jaXJjbGVfYWR2aWNlIHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBhZ2VfY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5tYWluX2NvbnRhaW5lciB7XG4gIHdpZHRoOiA5MHZ3O1xuICBtYXJnaW4tbGVmdDogMTB2dztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWFpbl9jb250YWluZXIge1xuICAgIHdpZHRoOiA4NXZ3O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXZ3O1xuICB9XG59XG5cbi5oZWFkZXIxIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuaGVhZGVyMSB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIG1hcmdpbjogMCAwIDIwcHggMDtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5oZWFkZXIxIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLWJsb2NrOiAyMHB4O1xuICB9XG59XG5cbi5oZWFkZXIyIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuaGVhZGVyMiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmhlYWRlcjIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLmhlYWRlcjIgLmNob3NlbiB7XG4gIGNvbG9yOiAjQjAyMzIzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uaGVhZGVyMiAubm90X2Nob3NlbiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5oZWFkZXIzIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NldHRpbmdzL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3MvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NlY3Rpb25zL19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NldHRpbmdzL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NldHRpbmdzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NlY3Rpb25zL19hc2lkZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX21haW4tcGFnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX3dvcmtvdXQuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NlY3Rpb25zL19maWd1cmVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fY29uY2FjdC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX25vdF9yZWFkeV9wYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fYWR2aWNlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7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W1wiLyogRXJpYyBNZXllcidzIENTUyBSZXNldFxcclxcbiAgIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXFxyXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxyXFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXHJcXG4gICBUaGlzIGlzIGEgU2FzcyBwYXJ0aWFsXFxyXFxuKi9cXHJcXG5cXHJcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG4gIHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCAnc2V0dGluZ3MvcmVzZXQnO1xcclxcbkBpbXBvcnQgXFxcInNldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwic2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy9oZWFkZXJcXFwiO1xcclxcbkBpbXBvcnQgXFxcInNlY3Rpb25zL2FzaWRlXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy9mb290ZXJcXFwiO1xcclxcbkBpbXBvcnQgXFxcInNlY3Rpb25zL21haW4tcGFnZVxcXCI7XFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvd29ya291dFxcXCI7XFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvZmlndXJlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvY29uY2FjdFxcXCI7XFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvbm90X3JlYWR5X3BhZ2VcXFwiO1xcclxcbkBpbXBvcnQgXFxcInNlY3Rpb25zL2FkdmljZVxcXCI7XFxyXFxuXFxyXFxuXFxyXFxuLnBhZ2VfY29udGFpbmVye1xcclxcbiAgLy8gISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxcclxcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgLy8gYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLWJhY2tncm91bmQ7XFxyXFxufVxcclxcbi5tYWluX2NvbnRhaW5lcntcXHJcXG4gIHdpZHRoOiA5MHZ3O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwdnc7XFxyXFxuICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgIHdpZHRoOiA4NXZ3O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTV2dztcXHJcXG4gIH1cXHJcXG59XFxyXFxuLy8gISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhITFcXHJcXG4vLyAucGFnZV9jb250YWluZXJ7XFxyXFxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbi8vICAgZGlzcGxheTogZmxleDtcXHJcXG4vLyAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuLy8gICBoZWlnaHQ6IDEwMCU7XFxyXFxuLy8gICB3aWR0aDogMTAwJTtcXHJcXG4vLyAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4vLyAgIC8vYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLWJhY2tncm91bmQ7XFxyXFxuLy8gfVxcclxcbi8vIC5tYWluX2NvbnRhaW5lcntcXHJcXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4vLyAgIHdpZHRoOiA5MCU7XFxyXFxuLy8gICBoZWlnaHQ6IDEwMCU7XFxyXFxuLy8gICBjbGVhcjogYm90aDtcXHJcXG4vLyAgIHJpZ2h0OiAtMTUlO1xcclxcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLWJhY2tncm91bmQ7XFxyXFxuLy8gICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4vLyAgICAgd2lkdGg6IDgwJTtcXHJcXG4vLyAgICAgcmlnaHQ6IC0xNSU7XFxyXFxuLy8gICB9XFxyXFxuLy8gfVxcclxcblxcclxcbi5oZWFkZXIxe1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnksIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMjBweCAwO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBtYXJnaW4tYmxvY2s6IDIwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIye1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgfVxcclxcbiAgLmNob3NlbntcXHJcXG4gICAgY29sb3I6ICRjb2xvci1yZWQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5ub3RfY2hvc2Vue1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItZm9udC1ibGFjaztcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmhlYWRlcjN7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbi5tZW51X21haW4tY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgei1pbmRleDogNTAwO1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAzcHggM3B4IDJweCAkY29sb3Itc29mdC1ncmV5O1xcclxcbiAgLy9ib3JkZXItYm90dG9tOiAycHggYmxhY2sgc29saWQ7XFxyXFxuICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICB3aWR0aDogOTB2dztcXHJcXG4gIH1cXHJcXG4gIC5tZW51X21haW4ge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgIGdhcDogMjJweDtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogNjBweDtcXHJcXG4gICAgfVxcclxcbiAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgLy8gZ2FwOiA1JTtcXHJcXG4gICAgICBwYWRkaW5nLWlubGluZTogNSU7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnVfbWFpbl9lbGVtZW50LCBhe1xcclxcblxcclxcbiAgICAgIEBpbmNsdWRlIGRlc2t0b3B7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogOTAlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgICAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuXFxyXFxuQG1peGluIGRlc2t0b3Age1xcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gbW9iaWxlIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGhlYWRlcjEge1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICBmb250LXNpemU6IDUwcHg7XFxyXFxuICBjb2xvcjogJGNvbG9yLWZvbnQtYmxhY2s7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBoZWFkZXIye1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBjb2xvcjogJGNvbG9yLWZvbnQtYmxhY2s7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBoZWFkZXIze1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBjb2xvcjogJGNvbG9yLWZvbnQtYmxhY2s7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBkZXNjcmlwdGlvbntcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbn1cIixcIlxcclxcbiRjb2xvci1mb250LWJsYWNrOiAjMDAwMDAwO1xcclxcbiRjb2xvci1mb250LXdoaXRlOiAjRkZGRkZGO1xcclxcblxcclxcbiRjb2xvci1yZWQ6ICNCMDIzMjM7XFxyXFxuJGNvbG9yLWJsYWNrLWJhY2tncm91bmQ6ICMwMDAwMDA7XFxyXFxuJGNvbG9yLW5lYXJseS1ibGFjazogIzFFMUUxRTtcXHJcXG4kY29sb3Itd2hpdGUtYmFja2dyb3VuZDogI0ZGRkZGRjtcXHJcXG4kY29sb3Itc29mdC1ncmV5OiAjRDhEOEQ4O1xcclxcbiRjb2xvci1jaGFsay1ncmV5OiAjRDZENkQ2O1xcclxcbiRjb2xvci1ncmV5OiAjNTk1OTU5O1xcclxcblxcclxcbiRmb250LXByaW1hcnk6IFJvYm90bztcIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4ubWVudV9hc2lkZS1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgLy8gISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxcclxcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgLm1lbnVfYXNpZGUge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMDNweDtcXHJcXG4gICAgZ2FwOiAxOHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIC8vICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcXHJcXG4gICAgd2lkdGg6IDEwdnc7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay1iYWNrZ3JvdW5kO1xcclxcbiAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgd2lkdGg6IDE1dnc7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnVfYXNpZGVfZWxlbWVudCB7XFxyXFxuICAgICAgbWFyZ2luOiAwIDAgMCAxNXB4O1xcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgbWFyZ2luOiAwIDAgMCAycHg7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGF7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgY29sb3I6ICRjb2xvci1mb250LXdoaXRlO1xcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDU4JTtcXHJcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLmZvb3Rlcl9jb250YWluZXJ7XFxyXFxuICBjbGVhcjogYm90aDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnVfZm9vdGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDAgMzBweCAwIDMwcHg7XFxyXFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1uZWFybHktYmxhY2s7XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnVfZm9vdGVyX2xpc3R7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgZ2FwOiA1MHB4O1xcclxcbiAgICAgIG1hcmdpbjogMCAxNXB4IDAgMDtcXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICBnYXA6IDEwJTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgYSB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIGNvbG9yOiAjOTI4RThFO1xcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIGF7XFxyXFxuICAgICAgY29sb3I6ICRjb2xvci1zb2Z0LWdyZXk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLm9uZV9wYWdlcntcXHJcXG4vLyAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXFxyXFxuICAvLyBoZWlnaHQ6IDkwdmg7XFxyXFxufVxcclxcbi5tYWluX3BhZ2V7XFxyXFxuICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nL2ltZ19tYWluX3BhZ2UuanBlZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWcvaW1nX21haW5fcGFnZS5qcGVnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgei1pbmRleDogMjAwO1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDUlO1xcclxcbiAgICAvLyAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXFxyXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogNjYuNSU7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xcclxcbiAgICAvLyBtYXJnaW4tbGVmdDogNjBweDtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDU1dmg7XFxyXFxuICAgIHBhZGRpbmc6IDUlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNTB2aDtcXHJcXG5cXHJcXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDUlO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLmNpcmNsZXNfd29ya291dC1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgLy8gZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2lyY2xlc193b3Jrb3V0e1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS1iYWNrZ3JvdW5kO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICB3aWR0aDogMTcwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiAxNzBweDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICB9XFxyXFxuICAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMSl7XFxyXFxuICAgIGJvcmRlcjogMTBweCAjRTdFNkU2IHNvbGlkO1xcclxcbiAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgYm9yZGVyOiA2cHggI0U3RTZFNiBzb2xpZDtcXHJcXG4gICAgfVxcclxcbiAgICBoMiwgYSB7XFxyXFxuICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLWNoaWxkKDIpe1xcclxcbiAgICBib3JkZXI6IDEwcHggI0NDQ0JDQiBzb2xpZDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgYm9yZGVyOiA2cHggI0NDQ0JDQiBzb2xpZDtcXHJcXG4gICAgfVxcclxcbiAgICBoMiwgYSB7XFxyXFxuICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMyl7XFxyXFxuICAgIGJvcmRlcjogMTBweCAjOUQ5RDlEIHNvbGlkO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICBib3JkZXI6IDZweCAjOUQ5RDlEIHNvbGlkO1xcclxcbiAgICB9XFxyXFxuICAgIGgyLCBhIHtcXHJcXG4gICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4uYWJvdXRfcGxhdGZvcm17XFxyXFxuICB3aWR0aDogMjk1cHg7XFxyXFxuXFxyXFxuICAuYWJvdXRfcGxhdGZvcm1fdGV4dHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHJcXG4gIH1cXHJcXG59XFxyXFxuICAuaGVhZGVyMyB7XFxyXFxuICAgIG1hcmdpbi1ibG9jazogMjBweCAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG5cXHJcXG4ud29ya291dHtcXHJcXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDUlO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICBwYWRkaW5nOiA1JTtcXHJcXG4gIH1cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1jaGFsay1ncmV5O1xcclxcbiAgLmhlYWRlcjR7XFxyXFxuICAgIHBhZGRpbmctYmxvY2s6IDEwcHggMjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgY29sb3I6ICRjb2xvci1yZWQ7XFxyXFxuICB9XFxyXFxuICAuZGVzY3JpcHRpb25fdGV4dHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgY29sb3I6ICRjb2xvci1mb250LXdoaXRlO1xcclxcbiAgfVxcclxcbiAgLndvcmtvdXRfaW1nYWdlcywgdWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAxMDBweDtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLndvcmtvdXRfaW1hZ2Uge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS1iYWNrZ3JvdW5kO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBkZXNrdG9we1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMzUwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIG1hcmdpbjogNSU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICAgICAgLy8gd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDMwdnc7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGltZyB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBkZXNrdG9we1xcclxcbiAgICAgICAgICAvL21pbi1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAzMjBweDtcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiAyODBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgICAgbWF4LWhlaWdodDogMTIwcHg7XFxyXFxuICAgICAgICAgIG1heC13aWR0aDogOTAlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4uZmlndXJlc19jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLWJhY2tncm91bmQ7XFxyXFxuXFxyXFxuICAubWFpbl9wYWdlX2ZpZ3VyZXMge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XFxyXFxuICAgIC5maWd1cmVzX3BhZ2VfaGVhZCB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG5cXHJcXG4gICAgICAuZmlndXJlc19zdHJpcGUge1xcclxcbiAgICAgICAgd2lkdGg6IDU3NXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0M3QzdDNztcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuZmlndXJlc19jaXJjbGUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLWJhY2tncm91bmQ7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICB0b3A6IC0xMHB4O1xcclxcbiAgICAgICAgb3BhY2l0eTogNTUlO1xcclxcbiAgICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmhlYWRlcjMge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWRkX2ZpZ3VyZSB7XFxyXFxuICAgICAgd2lkdGg6IDExMHB4O1xcclxcbiAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYmxhY2stYmFja2dyb3VuZDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAzMCU7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICByaWdodDogMTUlO1xcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGEge1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICAgICAgICBjb2xvcjogJGNvbG9yLWZvbnQtd2hpdGU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmZpZ3VyZXNfc3BhY2VfaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAzNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWcvUERfaW1nXzNfc3pwYWdhdC5qcGVnXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIHotaW5kZXg6IDIwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMjcwcHg7XFxyXFxuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDB2dztcXHJcXG4gICAgfVxcclxcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwMCUgMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmZpZ3VyZXNfYm94IHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgIHBhZGRpbmctbGVmdDogNjBweDtcXHJcXG4gICAgfVxcclxcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5kZXNjcmlwdGlvbl90ZXh0e1xcclxcbiAgICAgIHdpZHRoOiA2MDBweDtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgIGNvbG9yOiAkY29sb3ItZm9udC1ibGFjaztcXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZpZ3VyZXMgdWwge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcblxcclxcbiAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAuZmlndXJlIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgICAgICAgICB3aWR0aDogMjMwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgICAgICBtYXJnaW46IDUlO1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBpbWd7XFxyXFxuICAgICAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDIzMHB4O1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMjIwcHg7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG5cXHJcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMjBweDtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwcHg7XFxyXFxuICAgICAgICAgIH19XFxyXFxuXFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxufVwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcblxcclxcbi5jb250YWN0X2JveCB7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeSwgc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTAlO1xcclxcbiAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWN0IHtcXHJcXG4gICAgLmhlYWRlcjEge1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0X2luZm8ge1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ibG9jazogMTVweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmRlc2NyaXB0aW9uX3RleHQge1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5oZWFkZXIzIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmFkZHJlc3Mge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcblxcclxcbiAgICAgICAgYSB7XFxyXFxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm1fbWVzc2FnZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucGVyc29uYWxfZGF0ZSB7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBnYXA6IDVweDtcXHJcXG5cXHJcXG4gICAgICBsYWJlbCB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGlucHV0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGxlZnQ6IDE5MHB4O1xcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgICB3aWR0aDogNDAlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAuY2FzZUFkZHtcXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNhc2UsIC5maWd1cmVfbGV2ZWwsIC5maWd1cmVfY2F0ZWdvcnkge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIHdpZHRoOiA5MyU7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHNlbGVjdCB7XFxyXFxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDo6c2VsZWN0aW9uIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBvcHRpb24ge1xcclxcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmlndXJlX2FkZF9jYXRlZ29yeSB7XFxyXFxuICAgICAgd2lkdGg6IDM5MHB4O1xcclxcbiAgICAgIC8vZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgICAgIHAge1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYm94X21lc3NhZ2Uge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgcGFkZGluZy1ib3R0b206IDYwcHg7XFxyXFxuICAgICAgd2lkdGg6IDkzJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGl0bGVfbWVzc2FnZSB7XFxyXFxuICAgICAgcGFkZGluZy1ibG9jazogMTBweDtcXHJcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50ZXh0YXJlYSB7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWdyZWVtZW50IHtcXHJcXG4gICAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IGlucHV0IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwcHg7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCBzcGFuIHtcXHJcXG4gIGhlaWdodDogMTBweDtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXHJcXG4gIGZsZXgtYmFzaXM6IDEwcHg7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpZ3VyZV9hZGRfY2F0ZWdvcnkge1xcclxcbiAgLmNoZWNrYm94X2NhdGVnb3J5IHNwYW4ge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCArIHNwYW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNvZnQtZ3JleTtcXHJcXG4gIGJvcmRlcjogMnB4IGxpZ2h0Ymx1ZSBzb2xpZDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmZpZ3VyZV9jYXRlZ29yaWVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQge1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAycHggNXB4IGJsYWNrO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLm5vdF9yZWFkeSAubWFpbl9wYWdlIHtcXHJcXG4gIGhlaWdodDogODh2aDtcXHJcXG4gIC5oZWFkZXIyIHtcXHJcXG4gICAgd2lkdGg6IDI1JTtcXHJcXG4gICAgYSB7XFxyXFxuICAgICAgY29sb3I6IGNhZGV0Ymx1ZTtcXHJcXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4ucG9yYWR5X3BhZ2V7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltZy8yLmpwZWdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0yNTBweDtcXHJcXG4gIC5oZWFkZXIxe1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG4gIH1cXHJcXG4gIC5oZWFkZXIze1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmFkdmljZTEsIC5hZHZpY2Uze1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLWJhY2tncm91bmQ7XFxyXFxuICBtYXJnaW46IDIwcHggNTBweCAxMjBweCA1MHB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWR2aWNlMntcXHJcXG4gIG1hcmdpbjogMjBweCA1MHB4IDEyMHB4IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItY2hhbGstZ3JleTtcXHJcXG4gIG9wYWNpdHk6IDc1JTtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuXFxyXFxuICAuY2lyY2xlc19hZHZpY2VfYm94e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIC5jaXJjbGVfYWR2aWNle1xcclxcbiAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgLmhlYWRlcjMsIHB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3ZmQzN2I5NDBhMTE1MDI5N2JkNVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==