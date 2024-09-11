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
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
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
}`, "",{"version":3,"sources":["webpack://./Project/scss/settings/_reset.scss","webpack://./Project/scss/index.scss","webpack://./Project/scss/sections/_header.scss","webpack://./Project/scss/settings/_mixins.scss","webpack://./Project/scss/settings/_variables.scss","webpack://./Project/scss/sections/_aside.scss","webpack://./Project/scss/sections/_footer.scss","webpack://./Project/scss/sections/_main-page.scss","webpack://./Project/scss/sections/_workout.scss","webpack://./Project/scss/sections/_figures.scss","webpack://./Project/scss/sections/_concact.scss","webpack://./Project/scss/sections/_not_ready_page.scss","webpack://./Project/scss/sections/_advice.scss"],"names":[],"mappings":"AAAA;;;;;CAAA;AAOA;;;;;;;;;;;;;EAaE,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;ACAF;;ADEA,gDAAA;AACA;;EAEE,cAAA;ACCF;;ADCA;EACE,cAAA;ACEF;;ADAA;EACE,gBAAA;ACGF;;ADDA;EACE,YAAA;ACIF;;ADFA;;EAEE,WAAA;EACA,aAAA;ACKF;;ADHA;EACE,yBAAA;EACA,iBAAA;ACMF;;ACnDA;EACE,YAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,gBAAA;EACA,mCAAA;ADsDF;AEtDE;EDNF;IASI,WAAA;EDuDF;AACF;ACtDE;EACE,YAAA;EACA,aAAA;EACA,mBAAA;ADwDJ;AEtEE;EDWA;IAKI,SAAA;IACA,iBAAA;ED0DJ;AACF;AEtEE;EDKA;IASI,OAAA;IACA,eAAA;IACA,iBAAA;ED4DJ;AACF;AC3DI;EAQE,mBAAA;EACA,mBExBS;EFyBT,gBAAA;EACA,cErCa;EFsCb,qBAAA;ADsDN;AE1FE;EDwBE;IAGI,eAAA;EDmEN;AACF;AEzFE;EDkBE;IAMI,cAAA;EDqEN;AACF;;AIpGA;EACE,YAAA;AJuGF;AIrGE;EAIE,eAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,yBDZqB;AHgHzB;AE5GE;EEHA;IAEI,UAAA;EJiHJ;AACF;AIxGI;EACE,kBAAA;AJ0GN;AEpHE;EESE;IAGE,iBAAA;EJ4GJ;AACF;AI3GM;EACE,qBAAA;EACA,eAAA;EACA,+BAAA;EACA,iBAAA;EACA,cD1BW;AHuInB;AEhIE;EEcI;IAOI,cAAA;IACA,gBAAA;EJ+GR;AACF;;AK5IA;EACE,WAAA;EACA,eAAA;EACA,SAAA;EACA,aAAA;EACA,mBAAA;EACA,UAAA;EACA,YAAA;EACA,yBAAA;AL+IF;AEjJE;EGNF;IAUI,UAAA;IACA,QAAA;ELiJF;AACF;AK/IE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,sBAAA;ALiJJ;AEhKE;EGQA;IAUI,YAAA;IACA,6BAAA;ELkJJ;AACF;AKjJI;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,SAAA;EACA,kBAAA;ALmJN;AE7KE;EGqBE;IAQI,QAAA;ELoJN;AACF;AKnJM;EACE,mBF7BO;EE8BP,eAAA;EACA,qBAAA;EACA,cAAA;ALqJR;AExLE;EG+BI;IAMI,eAAA;ELuJR;AACF;AKpJI;EACE,cF3CY;AHiMlB;;AMlMA;EAEE,yDAAA;EACA,4BAAA;EACA,YAAA;ANoMF;AEtME;EIFF;IAaI,qBAAA;IACA,UAAA;IACA,eAAA;IACA,WAAA;EN+LF;AACF;AM7LE;EACE,aAAA;AN+LJ;AEjNE;EIiBA;IAGI,eAAA;IACA,6BAAA;ENiMJ;AACF;AM/LI;EACE,yBH3BmB;EG4BnB,kBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;ANiMN;AElOE;EIwBE;IAWI,YAAA;IACA,aAAA;IACA,SAAA;ENmMN;AACF;AM/LE;EACE,0BAAA;ANiMJ;AMhMI;EACE,YAAA;ANkMN;AM/LE;EACE,0BAAA;EACA,kBAAA;ANiMJ;AMhMI;EACE,YAAA;ANkMN;AM/LE;EACE,0BAAA;EACA,kBAAA;ANiMJ;AMhMI;EACE,YAAA;ANkMN;AM/LA;EACE,YAAA;ANiMF;AM/LE;EACE,kBAAA;EACA,oBAAA;EACA,mBHjEW;EGkEX,eAAA;EACA,gBAAA;ANiMJ;AM7LE;EACE,uBAAA;AN+LJ;;AO/QA;EAOE,yBJFiB;AH8QnB;AEpRE;EKCF;IAEI,kBAAA;EPqRF;AACF;AEnRE;EKLF;IAKI,WAAA;EPuRF;AACF;AOrRE;EACE,wBAAA;EACA,mBJFW;EIGX,eAAA;EACA,gBAAA;EACA,cJbQ;AHoSZ;AOrRE;EACE,mBAAA;EACA,mBJTW;EIUX,eAAA;EACA,gBAAA;EACA,cJtBe;AH6SnB;AOrRE;EACE,aAAA;EACA,mBAAA;EACA,eAAA;EACA,6BAAA;APuRJ;AElTE;EKuBA;IAMI,mBAAA;IACA,mBAAA;EPyRJ;AACF;AElTE;EKiBA;IAUI,kBAAA;EP2RJ;AACF;AO1RI;EACE,yBJhCmB;EIiCnB,aAAA;EACA,mBAAA;EACA,uBAAA;AP4RN;AEnUE;EKmCE;IAOI,kBAAA;IACA,mBAAA;IACA,aAAA;IACA,YAAA;EP6RN;AACF;AErUE;EK6BE;IAaI,UAAA;IACA,aAAA;IACA,YAAA;EP+RN;AACF;AElVE;EKoDI;IAGI,iBAAA;IACA,gBAAA;EP+RR;AACF;AElVE;EK8CI;IAOI,iBAAA;IACA,WAAA;EPiSR;AACF;;AQ9VA;EACE,yBLGuB;AH8VzB;AQ/VE;EACE,qBAAA;ARiWJ;AQhWI;EACE,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;ARkWN;AQhWM;EACE,YAAA;EACA,YAAA;EACA,yBAAA;EACA,aAAA;EACA,mBAAA;ARkWR;AQ/VM;EACE,yBLhBiB;EKiBjB,kBAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;ARiWR;AEzXE;EMmBI;IAOI,WAAA;IACA,YAAA;IACA,qBAAA;ERmWR;AACF;AE1XE;EMaI;IAYI,MAAA;IACA,WAAA;IACA,YAAA;ERqWR;AACF;AQlWM;EACE,aAAA;EACA,mBAAA;EACA,YAAA;EACA,+BAAA;EACA,gBAAA;ARoWR;AE9YE;EMqCI;IAOI,eAAA;ERsWR;AACF;AE7YE;EM+BI;IAUI,eAAA;ERwWR;AACF;AQpWI;EACE,YAAA;EACA,YAAA;EACA,mBLrDmB;EKsDnB,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,UAAA;ARsWN;AE7ZE;EM8CE;IAWI,WAAA;IACA,QAAA;ERwWN;AACF;AQvWM;EACE,mBL1DO;EK2DP,cLrEW;EKsEX,eAAA;EACA,qBAAA;ARyWR;AEzaE;EM4DI;IAMI,cAAA;ER2WR;AACF;AQtWE;EACE,aAAA;EACA,yDAAA;EACA,4BAAA;EACA,YAAA;EACA,6BAAA;ARwWJ;AE3bE;EM8EA;IAOI,4BAAA;IACA,sBAAA;ER0WJ;AACF;AE3bE;EMwEA;IAWI,aAAA;IACA,qBAAA;IACA,2BAAA;ER4WJ;AACF;AQzWE;EACE,iBAAA;AR2WJ;AE3cE;EM+FA;IAII,kBAAA;ER4WJ;AACF;AE1cE;EMyFA;IAOI,iBAAA;ER8WJ;AACF;AQ7WI;EACE,YAAA;EACA,mBAAA;EACA,mBLlGS;EKmGT,eAAA;EACA,gBAAA;EACA,cLhHa;AH+dnB;AEvdE;EMkGE;IAQI,UAAA;IACA,mBAAA;ERiXN;AACF;AQ9WI;EACE,aAAA;EACA,mBAAA;EACA,eAAA;EACA,qBAAA;ARgXN;AEzeE;EMqHE;IAOI,kBAAA;ERiXN;AACF;AQhXM;EACE,yBLxHK;EKyHL,mBAAA;EACA,eAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ARkXR;AEtfE;EM8HI;IAQI,kBAAA;IACA,mBAAA;IACA,aAAA;IACA,YAAA;ERoXR;AACF;AExfE;EMwHI;IAcI,UAAA;IACA,aAAA;IACA,YAAA;ERsXR;AACF;AErgBE;EMgJM;IAEI,iBAAA;IACA,gBAAA;ERuXV;AACF;AErgBE;EM0IM;IAOI,iBAAA;IACA,eAAA;ERwXV;AACF;;AShhBA;EACE,+BAAA;EACA,gBAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,QAAA;ATmhBF;AErhBE;EOLF;IASI,sBAAA;IACA,kBAAA;IACA,iBAAA;IACA,mBAAA;IACA,aAAA;ETqhBF;AACF;ASlhBI;EACE,SAAA;EACA,UAAA;ATohBN;ASjhBI;EACE,gBAAA;ATmhBN;AE3iBE;EOuBE;IAGI,eAAA;IACA,iBAAA;ETqhBN;AACF;AE3iBE;EOiBE;IAOI,eAAA;IACA,kBAAA;ETuhBN;AACF;ASrhBM;EACE,iBAAA;ATuhBR;ASphBM;EACE,gBAAA;EACA,mBAAA;ATshBR;AExjBE;EOgCI;IAII,gBAAA;ETwhBR;AACF;ASrhBM;EACE,eAAA;ATuhBR;ASrhBQ;EACE,kBAAA;EACA,qBAAA;ATuhBV;ASjhBE;EACE,eAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,UAAA;EACA,QAAA;ATmhBJ;AE5kBE;EOmDA;IAQI,WAAA;ETqhBJ;AACF;ASnhBI;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,QAAA;ATqhBN;ASnhBM;EACE,gBAAA;EACA,YAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;ATqhBR;ASlhBM;EACE,eAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;ATohBR;AErmBE;EO4EI;IAOI,UAAA;ETshBR;AACF;AE1mBE;EOuFE;IAEI,WAAA;ETqhBN;AACF;ASlhBI;EACE,eAAA;EACA,mBN5FS;EM6FT,YAAA;EACA,YAAA;EACA,mBAAA;EACA,eAAA;ATohBN;AEvnBE;EO6FE;IAQI,UAAA;ETshBN;AACF;ASnhBI;EACE,2BAAA;EACA,wBAAA;EACA,mBAAA;ATqhBN;ASlhBI;EACE,gCAAA;ATohBN;ASjhBI;EACE,2BAAA;EACA,wBAAA;EACA,mBAAA;ATmhBN;AShhBI;EACE,YAAA;EAEA,sBAAA;ATihBN;AS/gBM;EACE,gBAAA;EACA,mBAAA;ATihBR;AS3gBE;EACE,aAAA;EACA,sBAAA;EACA,YAAA;AT6gBJ;AEtpBE;EOsIA;IAKI,oBAAA;IACA,UAAA;ET+gBJ;AACF;AS7gBI;EACE,mBAAA;EACA,gBAAA;AT+gBN;AS5gBI;EACE,kBAAA;EACA,YAAA;AT8gBN;AS3gBI;EACE,eAAA;AT6gBN;;AStgBA;EACE,kBAAA;EACA,UAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;ATygBF;;AStgBA;EACE,eAAA;EACA,aAAA;ATygBF;;AStgBA;EACE,YAAA;EACA,WAAA;EACA,sBAAA;EACA,gBAAA;EACA,cAAA;EACA,eAAA;EACA,kBAAA;ATygBF;;ASrgBE;EACE,sBAAA;ATwgBJ;;ASpgBA;EACE,yBNhMgB;EMiMhB,2BAAA;ATugBF;;ASngBA;EACE,aAAA;EACA,mBAAA;EACA,eAAA;EACA,QAAA;ATsgBF;;ASngBA;EACE,mBNzMa;EM0Mb,WAAA;EACA,YAAA;EACA,gBAAA;EACA,yBN/MW;EMgNX,YAAA;EACA,YAAA;EACA,6BAAA;EACA,gBAAA;EACA,eAAA;ATsgBF;;AUjuBA;EACE,YAAA;AVouBF;AUnuBE;EACE,UAAA;AVquBJ;AUpuBI;EACE,gBAAA;EACA,iBAAA;AVsuBN;;AW5uBA;EACE,yDAAA;EACA,4BAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,6BAAA;AX+uBF;AW9uBE;EACE,iBAAA;AXgvBJ;AW9uBE;EACE,oBAAA;AXgvBJ;;AW7uBA;EACE,yBRXuB;EQYvB,4BAAA;EACA,aAAA;EACA,iBAAA;EACA,mBRVa;EQWb,gBAAA;AXgvBF;;AW7uBA;EACE,4BAAA;EACA,aAAA;EACA,iBAAA;EACA,mBRlBa;EQmBb,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;EACA,yBR3BiB;EQ4BjB,YAAA;EACA,UAAA;AXgvBF;AW9uBE;EACE,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,WAAA;AXgvBJ;AW/uBI;EACE,UAAA;EACA,uBAAA;AXivBN;AWhvBM;EACE,aAAA;EACA,uBAAA;AXkvBR;;AArxBA;EAEE,sBAAA;EACA,aAAA;EACA,mBAAA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;AAuxBF;;AA1vBA;EACE,+BAAA;EACA,gBAAA;AA6vBF;AE/yBE;EFgDF;IAII,eAAA;IACA,kBAAA;IACA,iBAAA;EA+vBF;AACF;AEhzBE;EF0CF;IASI,eAAA;IACA,kBAAA;EAiwBF;AACF;;AA9vBA;EACE,mBGtDa;AHuzBf;AEh0BE;EF8DF;IAGI,eAAA;IACA,iBAAA;EAmwBF;AACF;AEh0BE;EFwDF;IAOI,eAAA;EAqwBF;AACF;AApwBE;EACE,cGvEQ;EHwER,qBAAA;AAswBJ;AApwBE;EACE,qBAAA;EACA,cG/Ee;AHq1BnB;;AAnwBA;EACE,mBGxEa;EHyEb,eAAA;EACA,gBAAA;AAswBF","sourcesContent":["/* Eric Meyer's CSS Reset\r\n   http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n   This is a Sass partial\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n  display: block;\r\n}\r\nbody {\r\n  line-height: 1;\r\n}\r\nol, ul {\r\n  list-style: none;\r\n}\r\nblockquote, q {\r\n  quotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n  content: '';\r\n  content: none;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n","@import 'settings/reset';\r\n@import \"settings/variables\";\r\n@import \"settings/mixins\";\r\n\r\n@import \"sections/header\";\r\n@import \"sections/aside\";\r\n@import \"sections/footer\";\r\n@import \"sections/main-page\";\r\n@import \"sections/workout\";\r\n@import \"sections/figures\";\r\n@import \"sections/concact\";\r\n@import \"sections/not_ready_page\";\r\n@import \"sections/advice\";\r\n\r\n\r\n.page_container{\r\n  // position: absolute;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n  //background-color: $color-black-background;\r\n}\r\n\r\n// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1\r\n// .page_container{\r\n//   position: relative;\r\n//   box-sizing: border-box;\r\n//   display: flex;\r\n//   flex-direction: row;\r\n//   height: 100%;\r\n//   width: 100%;\r\n//   overflow-x: hidden;\r\n//   //background-color: $color-black-background;\r\n// }\r\n// .main_container{\r\n//   position: relative;\r\n//   width: 90%;\r\n//   height: 100%;\r\n//   clear: both;\r\n//   right: -15%;\r\n//   background-color: $color-white-background;\r\n//   @include mobile{\r\n//     position: relative;\r\n//     width: 80%;\r\n//     right: -15%;\r\n//   }\r\n// }\r\n\r\n.header1{\r\n  font-family: $font-primary, sans-serif;\r\n  font-weight: 300;\r\n  @include desktop {\r\n    font-size: 50px;\r\n    margin: 0 0 20px 0;\r\n    padding-top: 40px;\r\n  }\r\n  @include mobile{\r\n    font-size: 30px;\r\n    margin-block: 20px;\r\n  }\r\n}\r\n\r\n.header2{\r\n  font-family: $font-primary;\r\n  @include desktop {\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n  }\r\n  @include mobile{\r\n    font-size: 14px;\r\n  }\r\n  .chosen{\r\n    color: $color-red;\r\n    text-decoration: none;\r\n  }\r\n  .not_chosen{\r\n    text-decoration: none;\r\n    color: $color-font-black;\r\n  }\r\n}\r\n.header3{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.menu_main-container {\r\n  height: 60px;\r\n  top: 10px;\r\n  background-color: white;\r\n  z-index: 500;\r\n  position: sticky;\r\n  box-shadow: 2px 3px 3px 2px $color-soft-grey;\r\n  //border-bottom: 2px black solid;\r\n  @include mobile {\r\n    width: 90vw;\r\n  }\r\n  .menu_main {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    @include desktop {\r\n      gap: 22px;\r\n      margin-left: 60px;\r\n    }\r\n    @include mobile{\r\n      gap: 5%;\r\n      margin-left: 5%;\r\n      line-height: 10px;\r\n    }\r\n    .menu_main_element, a{\r\n\r\n      @include desktop{\r\n        font-size: 16px;\r\n      }\r\n      @include mobile{\r\n        font-size: 90%;\r\n      }\r\n      flex-direction: row;\r\n      font-family: $font-primary;\r\n      font-weight: 300;\r\n      color: $color-font-black;\r\n      text-decoration: none;\r\n    }\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n\r\n@mixin desktop {\r\n  @media (min-width: 736px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile {\r\n  @media (max-width: 736px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin header1 {\r\n  font-family: $font-primary;\r\n  font-size: 50px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin header2{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin header3{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin description{\r\n  font-family: $font-primary;\r\n  font-size: 14px;\r\n  color: $color-font-black;\r\n}","\r\n$color-font-black: #000000;\r\n$color-font-white: #FFFFFF;\r\n\r\n$color-red: #B02323;\r\n$color-black-background: #000000;\r\n$color-nearly-black: #1E1E1E;\r\n$color-white-background: #FFFFFF;\r\n$color-soft-grey: #D8D8D8;\r\n$color-chalk-grey: #D6D6D6;\r\n$color-grey: #595959;\r\n\r\n$font-primary: Roboto;","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.menu_aside-container {\r\n  height: 100%;\r\n  // position: absolute;\r\n  .menu_aside {\r\n    @include mobile{\r\n      width: 15%;\r\n    }\r\n    position: fixed;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-top: 103px;\r\n    gap: 18px;\r\n    height: 100%;\r\n    width: 10%;\r\n    background-color: $color-black-background;\r\n    .menu_aside_element {\r\n      margin: 0 0 0 15px;\r\n      @include mobile {\r\n      margin: 0 0 0 2px;\r\n      }\r\n      a{\r\n        text-decoration: none;\r\n        font-size: 14px;\r\n        font-family: $font-primary, sans-serif;\r\n        font-weight: bold;\r\n        color: $color-font-white;\r\n        @include mobile{\r\n          font-size: 58%;\r\n          font-weight: 300;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.footer_container{\r\n  clear: both;\r\n  position: fixed;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  width: 90%;\r\n  height: 80px;\r\n  background-color: #000000;\r\n  @include mobile{\r\n    width: 90%;\r\n    right: 0;\r\n  }\r\n\r\n  .menu_footer{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 50px;\r\n    width: 100%;\r\n    padding: 0 30px 0 30px;\r\n    // background-color: $color-nearly-black;\r\n    @include mobile{\r\n      padding: 5px;\r\n      justify-content: space-around;\r\n    }\r\n    .menu_footer_list{\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: center;\r\n      gap: 50px;\r\n      margin: 0 15px 0 0;\r\n\r\n      @include mobile{\r\n        gap: 10%;\r\n      }\r\n      a {\r\n        font-family: $font-primary;\r\n        font-size: 12px;\r\n        text-decoration: none;\r\n        color: #928E8E;\r\n        @include mobile{\r\n          font-size: 14px;\r\n        }\r\n      }\r\n    }\r\n    a{\r\n      color: $color-soft-grey;\r\n    }\r\n  }\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.one_pager{\r\n// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n  // height: 90vh;\r\n}\r\n.main_page{\r\n  //background-image: url(\"../img/img_main_page.jpeg\");\r\n  background-image: url(\"../img/img_main_page.jpeg\");\r\n  background-repeat: no-repeat;\r\n  z-index: 200;\r\n  @include desktop {\r\n    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n    // background-attachment: fixed;\r\n    // background-size: 66.5%;\r\n    // background-position: right;\r\n    // margin-left: 60px;\r\n  }\r\n  @include mobile{\r\n    background-size: 100%;\r\n    width: 90%;\r\n    margin-left: 5%;\r\n    right: 10px;\r\n  }\r\n\r\n  .circles_workout-container{\r\n    display: flex;\r\n    @include mobile {\r\n      flex-wrap: wrap;\r\n      justify-content: space-around;\r\n    }\r\n\r\n    .circles_workout{\r\n      background-color: $color-white-background;\r\n      border-radius: 50%;\r\n      width: 170px;\r\n      height: 170px;\r\n      flex-direction: row;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      margin-right: 20px;\r\n      @include mobile{\r\n        width: 100px;\r\n        height: 100px;\r\n        margin: 0;\r\n      }\r\n    }\r\n\r\n  }\r\n  .circles_workout-container :nth-of-type(1){\r\n    border: 10px #E7E6E6 solid;\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n  .circles_workout-container :nth-child(2){\r\n    border: 10px #CCCBCB solid;\r\n    position: relative;\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n  .circles_workout-container :nth-of-type(3){\r\n    border: 10px #9D9D9D solid;\r\n    position: relative;\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n.about_platform{\r\n  width: 295px;\r\n\r\n  .about_platform_text{\r\n    margin-right: 20px;\r\n    padding-bottom: 20px;\r\n    font-family: $font-primary;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n\r\n  }\r\n}\r\n  .header3 {\r\n    margin-block: 20px 10px;\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n\r\n.workout{\r\n  @include desktop {\r\n    padding-left: 60px;\r\n  }\r\n  @include mobile{\r\n    padding: 5%;\r\n  }\r\n  background-color: $color-chalk-grey;\r\n  .header4{\r\n    padding-block: 10px 20px;\r\n    font-family: $font-primary;\r\n    font-size: 24px;\r\n    font-weight: 300;\r\n    color: $color-red;\r\n  }\r\n  .description_text{\r\n    margin-bottom: 20px;\r\n    font-family: $font-primary;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: $color-font-white;\r\n  }\r\n  .workout_imgages, ul {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    @include desktop {\r\n      margin-right: 100px;\r\n      margin-bottom: 60px;\r\n    }\r\n    @include mobile{\r\n      margin-bottom: 20%;\r\n    }\r\n    .workout_image {\r\n      background-color: $color-white-background;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n\r\n      @include desktop{\r\n        margin-right: 40px;\r\n        margin-bottom: 50px;\r\n        height: 350px;\r\n        width: 300px;\r\n      }\r\n      @include mobile{\r\n        margin: 5%;\r\n        height: 150px;\r\n        width: 100px;\r\n      }\r\n      img {\r\n        @include desktop{\r\n          //min-height: 200px;\r\n          max-height: 320px;\r\n          max-width: 280px;\r\n        }\r\n        @include mobile{\r\n          max-height: 120px;\r\n          width: 80px;\r\n        }\r\n\r\n      }\r\n    }\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.figures_container {\r\n  background-color: $color-white-background;\r\n\r\n  .main_page_figures {\r\n    padding-bottom: 100px;\r\n    .figures_page_head {\r\n      display: flex;\r\n      flex-direction: row;\r\n      margin-top: 50px;\r\n      margin-bottom: 20px;\r\n\r\n      .figures_stripe {\r\n        width: 575px;\r\n        height: 40px;\r\n        background-color: #C7C7C7;\r\n        display: flex;\r\n        flex-direction: row;\r\n      }\r\n\r\n      .figures_circle {\r\n        background-color: $color-white-background;\r\n        border-radius: 50%;\r\n        position: relative;\r\n        top: -10px;\r\n        opacity: 55%;\r\n        @include desktop {\r\n          width: 60px;\r\n          height: 60px;\r\n          margin: 0 10px 0 10px;\r\n        }\r\n        @include mobile {\r\n          top: 0;\r\n          width: 30px;\r\n          height: 30px;\r\n        }\r\n      }\r\n\r\n      .header3 {\r\n        display: flex;\r\n        align-items: center;\r\n        height: 100%;\r\n        font-family: $font-primary, sans-serif;\r\n        font-weight: 300;\r\n        @include desktop {\r\n          font-size: 24px;\r\n        }\r\n        @include mobile {\r\n          font-size: 16px;\r\n        }\r\n      }\r\n    }\r\n\r\n    .add_figure {\r\n      width: 110px;\r\n      height: 40px;\r\n      background: $color-black-background;\r\n      border-radius: 30%;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      position: absolute;\r\n      right: 15%;\r\n      @include mobile{\r\n        width: 30px;\r\n        right: 0;\r\n      }\r\n      a {\r\n        font-family: $font-primary;\r\n        color: $color-font-white;\r\n        font-size: 14px;\r\n        text-decoration: none;\r\n        @include mobile{\r\n          font-size: 8px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .figures_space_img {\r\n    height: 350px;\r\n    background-image: url(\"../img/PD_img_3_szpagat.jpeg\");\r\n    background-repeat: no-repeat;\r\n    z-index: 200;\r\n    background-position-y: -270px;\r\n    @include desktop {\r\n      background-attachment: fixed;\r\n      background-size: 100vw;\r\n    }\r\n    @include mobile {\r\n      height: 150px;\r\n      background-size: 100%;\r\n      background-position: 200% 0;\r\n    }\r\n  }\r\n\r\n  .figures_box {\r\n    padding-top: 20px;\r\n\r\n    @include desktop {\r\n      padding-left: 60px;\r\n    }\r\n    @include mobile {\r\n      padding-left: 10%;\r\n    }\r\n    .description_text{\r\n      width: 600px;\r\n      margin-bottom: 20px;\r\n      font-family: $font-primary;\r\n      font-size: 14px;\r\n      font-weight: 400;\r\n      color: $color-font-black;\r\n      @include mobile{\r\n        width: 90%;\r\n        margin-bottom: 10px;\r\n      }\r\n    }\r\n\r\n    .figures ul {\r\n      display: flex;\r\n      flex-direction: row;\r\n      flex-wrap: wrap;\r\n      justify-content: left;\r\n\r\n      @include desktop {\r\n        margin-right: 80px;\r\n      }\r\n      .figure {\r\n        background-color: $color-grey;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        @include desktop {\r\n          margin-right: 10px;\r\n          margin-bottom: 10px;\r\n          height: 250px;\r\n          width: 230px;\r\n        }\r\n        @include mobile {\r\n          margin: 5%;\r\n          height: 150px;\r\n          width: 100px;\r\n        }\r\n        img{\r\n          @include desktop {\r\n            max-height: 230px;\r\n            max-width: 220px;\r\n          }\r\n          @include mobile {\r\n\r\n            max-height: 120px;\r\n            max-width: 80px;\r\n          }}\r\n\r\n      }\r\n    }\r\n  }\r\n\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n\r\n.contact_box {\r\n  font-family: $font-primary, sans-serif;\r\n  margin-top: 30px;\r\n  margin-left: 40px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 10%;\r\n  @include mobile {\r\n    flex-direction: column;\r\n    align-items: start;\r\n    margin-left: 20px;\r\n    margin-bottom: 60px;\r\n    height: 100vh;\r\n  }\r\n\r\n  .contact {\r\n    .header1 {\r\n      margin: 0;\r\n      padding: 0;\r\n    }\r\n\r\n    .contact_info {\r\n      font-weight: 300;\r\n      @include desktop {\r\n        font-size: 20px;\r\n        padding-top: 20px;\r\n      }\r\n      @include mobile {\r\n        font-size: 14px;\r\n        margin-block: 15px;\r\n      }\r\n\r\n      .description_text {\r\n        line-height: 30px;\r\n      }\r\n\r\n      .header3 {\r\n        margin-top: 50px;\r\n        margin-bottom: 15px;\r\n        @include mobile {\r\n          margin-top: 20px;\r\n        }\r\n      }\r\n\r\n      .address {\r\n        font-size: 16px;\r\n\r\n        a {\r\n          padding-left: 10px;\r\n          text-decoration: none;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .form_message {\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 50%;\r\n    gap: 5px;\r\n    @include mobile{\r\n      width: 100%;\r\n    }\r\n\r\n    .personal_date {\r\n      position: relative;\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 5px;\r\n\r\n      label {\r\n        font-weight: 600;\r\n        width: 300px;\r\n        margin-bottom: 20px;\r\n        display: flex;\r\n        align-items: center\r\n      }\r\n\r\n      input {\r\n        font-size: 12px;\r\n        width: 200px;\r\n        height: 20px;\r\n        position: absolute;\r\n        left: 190px;\r\n        @include mobile{\r\n          width: 40%;\r\n        }\r\n      }\r\n    }\r\n    .caseAdd{\r\n      @include mobile{\r\n        width: 100%;\r\n      }\r\n    }\r\n\r\n    .case, .figure_level, .figure_category {\r\n      font-size: 12px;\r\n      font-family: $font-primary;\r\n      width: 400px;\r\n      height: 20px;\r\n      margin-bottom: 15px;\r\n      cursor: pointer;\r\n      @include mobile{\r\n        width: 93%;\r\n      }\r\n    }\r\n\r\n    select {\r\n      -webkit-border-radius: 25px;\r\n      -moz-border-radius: 25px;\r\n      border-radius: 25px;\r\n    }\r\n\r\n    ::selection {\r\n      background-color: lightsteelblue;\r\n    }\r\n\r\n    option {\r\n      -webkit-border-radius: 25px;\r\n      -moz-border-radius: 25px;\r\n      border-radius: 25px;\r\n    }\r\n\r\n    .figure_add_category {\r\n      width: 390px;\r\n      //display: flex;\r\n      flex-direction: column;\r\n\r\n      p {\r\n        font-weight: 600;\r\n        margin-bottom: 15px;\r\n      }\r\n\r\n    }\r\n  }\r\n\r\n  .box_message {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 400px;\r\n    @include mobile {\r\n      padding-bottom: 60px;\r\n      width: 93%;\r\n    }\r\n\r\n    .title_message {\r\n      padding-block: 10px;\r\n      font-weight: 600;\r\n    }\r\n\r\n    .textarea {\r\n      margin-bottom: 5px;\r\n      resize: none;\r\n    }\r\n\r\n    .agreement {\r\n      font-size: 10px;\r\n    }\r\n\r\n  }\r\n\r\n}\r\n\r\n.checkbox input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  height: 10px;\r\n  width: 10px;\r\n}\r\n\r\n.checkbox {\r\n  cursor: pointer;\r\n  display: flex;\r\n}\r\n\r\n.checkbox span {\r\n  height: 10px;\r\n  width: 10px;\r\n  border: 2px solid grey;\r\n  flex-basis: 10px;\r\n  flex-shrink: 0;\r\n  cursor: pointer;\r\n  margin-right: 10px;\r\n}\r\n\r\n.figure_add_category {\r\n  .checkbox_category span {\r\n    border: 2px solid grey;\r\n  }\r\n}\r\n\r\n.checkbox input:checked + span {\r\n  background-color: $color-soft-grey;\r\n  border: 2px lightblue solid;\r\n\r\n}\r\n\r\n.figure_categories {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n}\r\n\r\n.submit {\r\n  font-family: $font-primary;\r\n  width: 80px;\r\n  height: 20px;\r\n  font-weight: 300;\r\n  background-color: $color-grey;\r\n  color: white;\r\n  border: none;\r\n  box-shadow: 1px 2px 5px black;\r\n  margin-left: 25%;\r\n  cursor: pointer;\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.not_ready .main_page {\r\n  height: 88vh;\r\n  .header2 {\r\n    width: 25%;\r\n    a {\r\n      color: cadetblue;\r\n      line-height: 40px;\r\n    }\r\n  }\r\n}\r\n\r\n\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.porady_page{\r\n  background-image: url(\"../img/2.jpeg\");\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-position-y: -250px;\r\n  .header1{\r\n    margin-left: 50px;\r\n  }\r\n  .header3{\r\n    padding-bottom: 30px;\r\n  }\r\n}\r\n.advice1, .advice3{\r\n  background-color: $color-white-background;\r\n  margin: 20px 50px 120px 50px;\r\n  padding: 20px;\r\n  line-height: 20px;\r\n  font-family: $font-primary;\r\n  font-weight: 300;\r\n}\r\n\r\n.advice2{\r\n  margin: 20px 50px 120px 50px;\r\n  padding: 20px;\r\n  line-height: 20px;\r\n  font-family: $font-primary;\r\n  font-weight: 300;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-self: center;\r\n  align-items: center;\r\n  background-color: $color-chalk-grey;\r\n  opacity: 75%;\r\n  width: 70%;\r\n\r\n  .circles_advice_box{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n    .circle_advice{\r\n      width: 30%;\r\n      justify-content: center;\r\n      .header3, p{\r\n        display: flex;\r\n        justify-content: center;\r\n      }\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ade320064e03cac50e32")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kNWJkYjBlNWFmZWNiOTI2NTIxMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QyxpRUFBNEM7QUFDeEYsNENBQTRDLGlFQUErQztBQUMzRiw0Q0FBNEMsaUVBQWdDO0FBQzVFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8seXJCQUF5ckIsS0FBSyxpQkFBaUIsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxXQUFXLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxZQUFZLFlBQVksV0FBVyxZQUFZLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sYUFBYSxhQUFhLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLGFBQWEsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxhQUFhLGFBQWEsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxZQUFZLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxZQUFZLFlBQVksVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE9BQU8sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxRQUFRLE9BQU8sVUFBVSxVQUFVLFFBQVEsT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxhQUFhLGFBQWEsUUFBUSxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsUUFBUSxPQUFPLFlBQVksV0FBVyxVQUFVLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsUUFBUSxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFX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LHNCQUFzQixlQUFlLEtBQUssaUJBQWlCLGlDQUFpQyxrQkFBa0IsbUJBQW1CLHVCQUF1QixvQ0FBb0MsbUJBQW1CLG1CQUFtQixvQ0FBb0MsdUJBQXVCLHNCQUFzQixLQUFLLHlDQUF5QyxtQ0FBbUMsK0JBQStCLG1CQUFtQixnQkFBZ0IsbUJBQW1CLFdBQVcsMkJBQTJCLDRCQUE0QixTQUFTLE9BQU8sS0FBSyxpREFBaUQsbUNBQW1DLHFCQUFxQiwrQ0FBK0MsbUNBQW1DLDZCQUE2QixvQkFBb0IsNkJBQTZCLG9DQUFvQyxlQUFlLDBCQUEwQixPQUFPLGVBQWUsNkJBQTZCLE9BQU8sS0FBSyx1QkFBdUIsZ0RBQWdELG1DQUFtQyxvQkFBb0Isd0JBQXdCLGlDQUFpQyx1QkFBdUIsS0FBSyxpQkFBaUIsbUNBQW1DLG9CQUFvQix3QkFBd0IsaUNBQWlDLHVCQUF1QixvQkFBb0IsNkJBQTZCLHlCQUF5QiwwQkFBMEIsMENBQTBDLG1CQUFtQixpQkFBaUIsOEJBQThCLHNCQUFzQiw0QkFBNEIsc0NBQXNDLG9CQUFvQix1QkFBdUIscUJBQXFCLGtDQUFrQyxzQkFBc0IsMEJBQTBCLG9DQUFvQyxXQUFXLFNBQVMsT0FBTyxLQUFLLG1CQUFtQjtBQUNqMDNCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7OztVQzEyQnZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2ltZ19tYWluX3BhZ2UuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltZy9QRF9pbWdfM19zenBhZ2F0LmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvMi5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEVyaWMgTWV5ZXIncyBDU1MgUmVzZXRcbiAgIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4gICBUaGlzIGlzIGEgU2FzcyBwYXJ0aWFsXG4qL1xuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsIHEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4ubWVudV9tYWluLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNjBweDtcbiAgdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogNTAwO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3gtc2hhZG93OiAycHggM3B4IDNweCAycHggI0Q4RDhEODtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWVudV9tYWluLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwdnc7XG4gIH1cbn1cbi5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfbWFpbi1jb250YWluZXIgLm1lbnVfbWFpbiB7XG4gICAgZ2FwOiAyMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfbWFpbi1jb250YWluZXIgLm1lbnVfbWFpbiB7XG4gICAgZ2FwOiA1JTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIH1cbn1cbi5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4gLm1lbnVfbWFpbl9lbGVtZW50LCAubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIGEge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4gLm1lbnVfbWFpbl9lbGVtZW50LCAubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIGEge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4gLm1lbnVfbWFpbl9lbGVtZW50LCAubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIGEge1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICB9XG59XG5cbi5tZW51X2FzaWRlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tZW51X2FzaWRlLWNvbnRhaW5lciAubWVudV9hc2lkZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDEwM3B4O1xuICBnYXA6IDE4cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWVudV9hc2lkZS1jb250YWluZXIgLm1lbnVfYXNpZGUge1xuICAgIHdpZHRoOiAxNSU7XG4gIH1cbn1cbi5tZW51X2FzaWRlLWNvbnRhaW5lciAubWVudV9hc2lkZSAubWVudV9hc2lkZV9lbGVtZW50IHtcbiAgbWFyZ2luOiAwIDAgMCAxNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X2FzaWRlLWNvbnRhaW5lciAubWVudV9hc2lkZSAubWVudV9hc2lkZV9lbGVtZW50IHtcbiAgICBtYXJnaW46IDAgMCAwIDJweDtcbiAgfVxufVxuLm1lbnVfYXNpZGUtY29udGFpbmVyIC5tZW51X2FzaWRlIC5tZW51X2FzaWRlX2VsZW1lbnQgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfYXNpZGUtY29udGFpbmVyIC5tZW51X2FzaWRlIC5tZW51X2FzaWRlX2VsZW1lbnQgYSB7XG4gICAgZm9udC1zaXplOiA1OCU7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxufVxuXG4uZm9vdGVyX2NvbnRhaW5lciB7XG4gIGNsZWFyOiBib3RoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5mb290ZXJfY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG4uZm9vdGVyX2NvbnRhaW5lciAubWVudV9mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMzBweCAwIDMwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbn1cbi5mb290ZXJfY29udGFpbmVyIC5tZW51X2Zvb3RlciAubWVudV9mb290ZXJfbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNTBweDtcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5mb290ZXJfY29udGFpbmVyIC5tZW51X2Zvb3RlciAubWVudV9mb290ZXJfbGlzdCB7XG4gICAgZ2FwOiAxMCU7XG4gIH1cbn1cbi5mb290ZXJfY29udGFpbmVyIC5tZW51X2Zvb3RlciAubWVudV9mb290ZXJfbGlzdCBhIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjOTI4RThFO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5mb290ZXJfY29udGFpbmVyIC5tZW51X2Zvb3RlciAubWVudV9mb290ZXJfbGlzdCBhIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbi5mb290ZXJfY29udGFpbmVyIC5tZW51X2Zvb3RlciBhIHtcbiAgY29sb3I6ICNEOEQ4RDg7XG59XG5cbi5tYWluX3BhZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHotaW5kZXg6IDIwMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWFpbl9wYWdlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gIH1cbn1cbi5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxufVxuLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciAuY2lyY2xlc193b3Jrb3V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTcwcHg7XG4gIGhlaWdodDogMTcwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciAuY2lyY2xlc193b3Jrb3V0IHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbi5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1vZi10eXBlKDEpIHtcbiAgYm9yZGVyOiAxMHB4ICNFN0U2RTYgc29saWQ7XG59XG4ubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgxKSBoMiwgLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMSkgYSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1jaGlsZCgyKSB7XG4gIGJvcmRlcjogMTBweCAjQ0NDQkNCIHNvbGlkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtY2hpbGQoMikgaDIsIC5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1jaGlsZCgyKSBhIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMykge1xuICBib3JkZXI6IDEwcHggIzlEOUQ5RCBzb2xpZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMykgaDIsIC5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1vZi10eXBlKDMpIGEge1xuICBib3JkZXI6IG5vbmU7XG59XG4ubWFpbl9wYWdlIC5hYm91dF9wbGF0Zm9ybSB7XG4gIHdpZHRoOiAyOTVweDtcbn1cbi5tYWluX3BhZ2UgLmFib3V0X3BsYXRmb3JtIC5hYm91dF9wbGF0Zm9ybV90ZXh0IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLm1haW5fcGFnZSAuaGVhZGVyMyB7XG4gIG1hcmdpbi1ibG9jazogMjBweCAxMHB4O1xufVxuXG4ud29ya291dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNENkQ2RDY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLndvcmtvdXQge1xuICAgIHBhZGRpbmctbGVmdDogNjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC53b3Jrb3V0IHtcbiAgICBwYWRkaW5nOiA1JTtcbiAgfVxufVxuLndvcmtvdXQgLmhlYWRlcjQge1xuICBwYWRkaW5nLWJsb2NrOiAxMHB4IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICNCMDIzMjM7XG59XG4ud29ya291dCAuZGVzY3JpcHRpb25fdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4ud29ya291dCAud29ya291dF9pbWdhZ2VzLCAud29ya291dCB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLndvcmtvdXQgLndvcmtvdXRfaW1nYWdlcywgLndvcmtvdXQgdWwge1xuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC53b3Jrb3V0IC53b3Jrb3V0X2ltZ2FnZXMsIC53b3Jrb3V0IHVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMCU7XG4gIH1cbn1cbi53b3Jrb3V0IC53b3Jrb3V0X2ltZ2FnZXMgLndvcmtvdXRfaW1hZ2UsIC53b3Jrb3V0IHVsIC53b3Jrb3V0X2ltYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLndvcmtvdXQgLndvcmtvdXRfaW1nYWdlcyAud29ya291dF9pbWFnZSwgLndvcmtvdXQgdWwgLndvcmtvdXRfaW1hZ2Uge1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLndvcmtvdXQgLndvcmtvdXRfaW1nYWdlcyAud29ya291dF9pbWFnZSwgLndvcmtvdXQgdWwgLndvcmtvdXRfaW1hZ2Uge1xuICAgIG1hcmdpbjogNSU7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAud29ya291dCAud29ya291dF9pbWdhZ2VzIC53b3Jrb3V0X2ltYWdlIGltZywgLndvcmtvdXQgdWwgLndvcmtvdXRfaW1hZ2UgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAzMjBweDtcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLndvcmtvdXQgLndvcmtvdXRfaW1nYWdlcyAud29ya291dF9pbWFnZSBpbWcsIC53b3Jrb3V0IHVsIC53b3Jrb3V0X2ltYWdlIGltZyB7XG4gICAgbWF4LWhlaWdodDogMTIwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gIH1cbn1cblxuLmZpZ3VyZXNfY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cbi5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMge1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG4uZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5maWd1cmVzX3BhZ2VfaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5maWd1cmVzX3BhZ2VfaGVhZCAuZmlndXJlc19zdHJpcGUge1xuICB3aWR0aDogNTc1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M3QzdDNztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIC5maWd1cmVzX2NpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xMHB4O1xuICBvcGFjaXR5OiA1NSU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuZmlndXJlc19wYWdlX2hlYWQgLmZpZ3VyZXNfY2lyY2xlIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuZmlndXJlc19wYWdlX2hlYWQgLmZpZ3VyZXNfY2lyY2xlIHtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5maWd1cmVzX3BhZ2VfaGVhZCAuaGVhZGVyMyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5maWd1cmVzX3BhZ2VfaGVhZCAuaGVhZGVyMyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuZmlndXJlc19wYWdlX2hlYWQgLmhlYWRlcjMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuYWRkX2ZpZ3VyZSB7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAzMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNSU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuYWRkX2ZpZ3VyZSB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmFkZF9maWd1cmUgYSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5hZGRfZmlndXJlIGEge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfc3BhY2VfaW1nIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB6LWluZGV4OiAyMDA7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogLTI3MHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19zcGFjZV9pbWcge1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDB2dztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19zcGFjZV9pbWcge1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwMCUgMDtcbiAgfVxufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3gge1xuICAgIHBhZGRpbmctbGVmdDogNjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3gge1xuICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5kZXNjcmlwdGlvbl90ZXh0IHtcbiAgd2lkdGg6IDYwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmRlc2NyaXB0aW9uX3RleHQge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZmlndXJlcyB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmZpZ3VyZXMgdWwge1xuICAgIG1hcmdpbi1yaWdodDogODBweDtcbiAgfVxufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZmlndXJlcyB1bCAuZmlndXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NTk1OTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5maWd1cmVzIHVsIC5maWd1cmUge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDIzMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZmlndXJlcyB1bCAuZmlndXJlIHtcbiAgICBtYXJnaW46IDUlO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZmlndXJlcyB1bCAuZmlndXJlIGltZyB7XG4gICAgbWF4LWhlaWdodDogMjMwcHg7XG4gICAgbWF4LXdpZHRoOiAyMjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmZpZ3VyZXMgdWwgLmZpZ3VyZSBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDEyMHB4O1xuICAgIG1heC13aWR0aDogODBweDtcbiAgfVxufVxuXG4uY29udGFjdF9ib3gge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbn1cbi5jb250YWN0X2JveCAuY29udGFjdCAuaGVhZGVyMSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5jb250YWN0X2JveCAuY29udGFjdCAuY29udGFjdF9pbmZvIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3ggLmNvbnRhY3QgLmNvbnRhY3RfaW5mbyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYmxvY2s6IDE1cHg7XG4gIH1cbn1cbi5jb250YWN0X2JveCAuY29udGFjdCAuY29udGFjdF9pbmZvIC5kZXNjcmlwdGlvbl90ZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uY29udGFjdF9ib3ggLmNvbnRhY3QgLmNvbnRhY3RfaW5mbyAuaGVhZGVyMyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8gLmhlYWRlcjMge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn1cbi5jb250YWN0X2JveCAuY29udGFjdCAuY29udGFjdF9pbmZvIC5hZGRyZXNzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8gLmFkZHJlc3MgYSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA1MCU7XG4gIGdhcDogNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLnBlcnNvbmFsX2RhdGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXB4O1xufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLnBlcnNvbmFsX2RhdGUgbGFiZWwge1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAucGVyc29uYWxfZGF0ZSBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTkwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLnBlcnNvbmFsX2RhdGUgaW5wdXQge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAuY2FzZUFkZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5jYXNlLCAuY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAuZmlndXJlX2xldmVsLCAuY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAuZmlndXJlX2NhdGVnb3J5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5jYXNlLCAuY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAuZmlndXJlX2xldmVsLCAuY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAuZmlndXJlX2NhdGVnb3J5IHtcbiAgICB3aWR0aDogOTMlO1xuICB9XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSBzZWxlY3Qge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIDo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSBvcHRpb24ge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5maWd1cmVfYWRkX2NhdGVnb3J5IHtcbiAgd2lkdGg6IDM5MHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLmZpZ3VyZV9hZGRfY2F0ZWdvcnkgcCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uY29udGFjdF9ib3ggLmJveF9tZXNzYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDQwMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5jb250YWN0X2JveCAuYm94X21lc3NhZ2Uge1xuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICAgIHdpZHRoOiA5MyU7XG4gIH1cbn1cbi5jb250YWN0X2JveCAuYm94X21lc3NhZ2UgLnRpdGxlX21lc3NhZ2Uge1xuICBwYWRkaW5nLWJsb2NrOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmNvbnRhY3RfYm94IC5ib3hfbWVzc2FnZSAudGV4dGFyZWEge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHJlc2l6ZTogbm9uZTtcbn1cbi5jb250YWN0X2JveCAuYm94X21lc3NhZ2UgLmFncmVlbWVudCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmNoZWNrYm94IGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG59XG5cbi5jaGVja2JveCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNoZWNrYm94IHNwYW4ge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICBmbGV4LWJhc2lzOiAxMHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5maWd1cmVfYWRkX2NhdGVnb3J5IC5jaGVja2JveF9jYXRlZ29yeSBzcGFuIHtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbn1cblxuLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyBzcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q4RDhEODtcbiAgYm9yZGVyOiAycHggbGlnaHRibHVlIHNvbGlkO1xufVxuXG4uZmlndXJlX2NhdGVnb3JpZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogOHB4O1xufVxuXG4uc3VibWl0IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NTk1OTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDFweCAycHggNXB4IGJsYWNrO1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ub3RfcmVhZHkgLm1haW5fcGFnZSB7XG4gIGhlaWdodDogODh2aDtcbn1cbi5ub3RfcmVhZHkgLm1haW5fcGFnZSAuaGVhZGVyMiB7XG4gIHdpZHRoOiAyNSU7XG59XG4ubm90X3JlYWR5IC5tYWluX3BhZ2UgLmhlYWRlcjIgYSB7XG4gIGNvbG9yOiBjYWRldGJsdWU7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuXG4ucG9yYWR5X3BhZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogLTI1MHB4O1xufVxuLnBvcmFkeV9wYWdlIC5oZWFkZXIxIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG4ucG9yYWR5X3BhZ2UgLmhlYWRlcjMge1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmFkdmljZTEsIC5hZHZpY2UzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgbWFyZ2luOiAyMHB4IDUwcHggMTIwcHggNTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5hZHZpY2UyIHtcbiAgbWFyZ2luOiAyMHB4IDUwcHggMTIwcHggNTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q2RDZENjtcbiAgb3BhY2l0eTogNzUlO1xuICB3aWR0aDogNzAlO1xufVxuLmFkdmljZTIgLmNpcmNsZXNfYWR2aWNlX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMTAwJTtcbn1cbi5hZHZpY2UyIC5jaXJjbGVzX2FkdmljZV9ib3ggLmNpcmNsZV9hZHZpY2Uge1xuICB3aWR0aDogMzAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hZHZpY2UyIC5jaXJjbGVzX2FkdmljZV9ib3ggLmNpcmNsZV9hZHZpY2UgLmhlYWRlcjMsIC5hZHZpY2UyIC5jaXJjbGVzX2FkdmljZV9ib3ggLmNpcmNsZV9hZHZpY2UgcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGFnZV9jb250YWluZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmhlYWRlcjEge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5oZWFkZXIxIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmhlYWRlcjEge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tYmxvY2s6IDIwcHg7XG4gIH1cbn1cblxuLmhlYWRlcjIge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5oZWFkZXIyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuaGVhZGVyMiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4uaGVhZGVyMiAuY2hvc2VuIHtcbiAgY29sb3I6ICNCMDIzMjM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5oZWFkZXIyIC5ub3RfY2hvc2VuIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmhlYWRlcjMge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2V0dGluZ3MvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2V0dGluZ3MvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2V0dGluZ3MvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX2FzaWRlLnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fbWFpbi1wYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fd29ya291dC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX2ZpZ3VyZXMuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NlY3Rpb25zL19jb25jYWN0LnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fbm90X3JlYWR5X3BhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NlY3Rpb25zL19hZHZpY2Uuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Q0FBQTtBQU9BOzs7Ozs7Ozs7Ozs7O0VBYUUsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ0FGOztBREVBLGdEQUFBO0FBQ0E7O0VBRUUsY0FBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBREFBO0VBQ0UsZ0JBQUE7QUNHRjs7QUREQTtFQUNFLFlBQUE7QUNJRjs7QURGQTs7RUFFRSxXQUFBO0VBQ0EsYUFBQTtBQ0tGOztBREhBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ01GOztBQ25EQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBRHNERjtBRXRERTtF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O0VBK3ZCRjtBQUNGO0FFaHpCRTtFRjBDRjtJQVNJLGVBQUE7SUFDQSxrQkFBQTtFQWl3QkY7QUFDRjs7QUE5dkJBO0VBQ0UsbUJHdERhO0FIdXpCZjtBRWgwQkU7RUY4REY7SUFHSSxlQUFBO0lBQ0EsaUJBQUE7RUFtd0JGO0FBQ0Y7QUVoMEJFO0VGd0RGO0lBT0ksZUFBQTtFQXF3QkY7QUFDRjtBQXB3QkU7RUFDRSxjR3ZFUTtFSHdFUixxQkFBQTtBQXN3Qko7QUFwd0JFO0VBQ0UscUJBQUE7RUFDQSxjRy9FZTtBSHExQm5COztBQW53QkE7RUFDRSxtQkd4RWE7RUh5RWIsZUFBQTtFQUNBLGdCQUFBO0FBc3dCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBFcmljIE1leWVyJ3MgQ1NTIFJlc2V0XFxyXFxuICAgaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiAgIFRoaXMgaXMgYSBTYXNzIHBhcnRpYWxcXHJcXG4qL1xcclxcblxcclxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcbiAgcXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICBib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0ICdzZXR0aW5ncy9yZXNldCc7XFxyXFxuQGltcG9ydCBcXFwic2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbkBpbXBvcnQgXFxcInNlY3Rpb25zL2hlYWRlclxcXCI7XFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvYXNpZGVcXFwiO1xcclxcbkBpbXBvcnQgXFxcInNlY3Rpb25zL2Zvb3RlclxcXCI7XFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvbWFpbi1wYWdlXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy93b3Jrb3V0XFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy9maWd1cmVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy9jb25jYWN0XFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy9ub3RfcmVhZHlfcGFnZVxcXCI7XFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvYWR2aWNlXFxcIjtcXHJcXG5cXHJcXG5cXHJcXG4ucGFnZV9jb250YWluZXJ7XFxyXFxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stYmFja2dyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhITFcXHJcXG4vLyAucGFnZV9jb250YWluZXJ7XFxyXFxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbi8vICAgZGlzcGxheTogZmxleDtcXHJcXG4vLyAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuLy8gICBoZWlnaHQ6IDEwMCU7XFxyXFxuLy8gICB3aWR0aDogMTAwJTtcXHJcXG4vLyAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4vLyAgIC8vYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLWJhY2tncm91bmQ7XFxyXFxuLy8gfVxcclxcbi8vIC5tYWluX2NvbnRhaW5lcntcXHJcXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4vLyAgIHdpZHRoOiA5MCU7XFxyXFxuLy8gICBoZWlnaHQ6IDEwMCU7XFxyXFxuLy8gICBjbGVhcjogYm90aDtcXHJcXG4vLyAgIHJpZ2h0OiAtMTUlO1xcclxcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLWJhY2tncm91bmQ7XFxyXFxuLy8gICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4vLyAgICAgd2lkdGg6IDgwJTtcXHJcXG4vLyAgICAgcmlnaHQ6IC0xNSU7XFxyXFxuLy8gICB9XFxyXFxuLy8gfVxcclxcblxcclxcbi5oZWFkZXIxe1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnksIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMjBweCAwO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBtYXJnaW4tYmxvY2s6IDIwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIye1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgfVxcclxcbiAgLmNob3NlbntcXHJcXG4gICAgY29sb3I6ICRjb2xvci1yZWQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5ub3RfY2hvc2Vue1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItZm9udC1ibGFjaztcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmhlYWRlcjN7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbi5tZW51X21haW4tY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgei1pbmRleDogNTAwO1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAzcHggM3B4IDJweCAkY29sb3Itc29mdC1ncmV5O1xcclxcbiAgLy9ib3JkZXItYm90dG9tOiAycHggYmxhY2sgc29saWQ7XFxyXFxuICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICB3aWR0aDogOTB2dztcXHJcXG4gIH1cXHJcXG4gIC5tZW51X21haW4ge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgIGdhcDogMjJweDtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogNjBweDtcXHJcXG4gICAgfVxcclxcbiAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgZ2FwOiA1JTtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogNSU7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnVfbWFpbl9lbGVtZW50LCBhe1xcclxcblxcclxcbiAgICAgIEBpbmNsdWRlIGRlc2t0b3B7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogOTAlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgICAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuXFxyXFxuQG1peGluIGRlc2t0b3Age1xcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gbW9iaWxlIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGhlYWRlcjEge1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICBmb250LXNpemU6IDUwcHg7XFxyXFxuICBjb2xvcjogJGNvbG9yLWZvbnQtYmxhY2s7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBoZWFkZXIye1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBjb2xvcjogJGNvbG9yLWZvbnQtYmxhY2s7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBoZWFkZXIze1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBjb2xvcjogJGNvbG9yLWZvbnQtYmxhY2s7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBkZXNjcmlwdGlvbntcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbn1cIixcIlxcclxcbiRjb2xvci1mb250LWJsYWNrOiAjMDAwMDAwO1xcclxcbiRjb2xvci1mb250LXdoaXRlOiAjRkZGRkZGO1xcclxcblxcclxcbiRjb2xvci1yZWQ6ICNCMDIzMjM7XFxyXFxuJGNvbG9yLWJsYWNrLWJhY2tncm91bmQ6ICMwMDAwMDA7XFxyXFxuJGNvbG9yLW5lYXJseS1ibGFjazogIzFFMUUxRTtcXHJcXG4kY29sb3Itd2hpdGUtYmFja2dyb3VuZDogI0ZGRkZGRjtcXHJcXG4kY29sb3Itc29mdC1ncmV5OiAjRDhEOEQ4O1xcclxcbiRjb2xvci1jaGFsay1ncmV5OiAjRDZENkQ2O1xcclxcbiRjb2xvci1ncmV5OiAjNTk1OTU5O1xcclxcblxcclxcbiRmb250LXByaW1hcnk6IFJvYm90bztcIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4ubWVudV9hc2lkZS1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgLm1lbnVfYXNpZGUge1xcclxcbiAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgd2lkdGg6IDE1JTtcXHJcXG4gICAgfVxcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMDNweDtcXHJcXG4gICAgZ2FwOiAxOHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay1iYWNrZ3JvdW5kO1xcclxcbiAgICAubWVudV9hc2lkZV9lbGVtZW50IHtcXHJcXG4gICAgICBtYXJnaW46IDAgMCAwIDE1cHg7XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICBtYXJnaW46IDAgMCAwIDJweDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgYXtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5LCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICBjb2xvcjogJGNvbG9yLWZvbnQtd2hpdGU7XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogNTglO1xcclxcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4uZm9vdGVyX2NvbnRhaW5lcntcXHJcXG4gIGNsZWFyOiBib3RoO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXHJcXG4gIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudV9mb290ZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMCAzMHB4IDAgMzBweDtcXHJcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLW5lYXJseS1ibGFjaztcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudV9mb290ZXJfbGlzdHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBnYXA6IDUwcHg7XFxyXFxuICAgICAgbWFyZ2luOiAwIDE1cHggMCAwO1xcclxcblxcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIGdhcDogMTAlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBhIHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgY29sb3I6ICM5MjhFOEU7XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgYXtcXHJcXG4gICAgICBjb2xvcjogJGNvbG9yLXNvZnQtZ3JleTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4ub25lX3BhZ2Vye1xcclxcbi8vICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcXHJcXG4gIC8vIGhlaWdodDogOTB2aDtcXHJcXG59XFxyXFxuLm1haW5fcGFnZXtcXHJcXG4gIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWcvaW1nX21haW5fcGFnZS5qcGVnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltZy9pbWdfbWFpbl9wYWdlLmpwZWdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICB6LWluZGV4OiAyMDA7XFxyXFxuICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgLy8gISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxcclxcbiAgICAvLyBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IDY2LjUlO1xcclxcbiAgICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcXHJcXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDYwcHg7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcclxcbiAgICByaWdodDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2lyY2xlc193b3Jrb3V0e1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS1iYWNrZ3JvdW5kO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICB3aWR0aDogMTcwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiAxNzBweDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIH1cXHJcXG4gIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgxKXtcXHJcXG4gICAgYm9yZGVyOiAxMHB4ICNFN0U2RTYgc29saWQ7XFxyXFxuICAgIGgyLCBhIHtcXHJcXG4gICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtY2hpbGQoMil7XFxyXFxuICAgIGJvcmRlcjogMTBweCAjQ0NDQkNCIHNvbGlkO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGgyLCBhIHtcXHJcXG4gICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgzKXtcXHJcXG4gICAgYm9yZGVyOiAxMHB4ICM5RDlEOUQgc29saWQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaDIsIGEge1xcclxcbiAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbi5hYm91dF9wbGF0Zm9ybXtcXHJcXG4gIHdpZHRoOiAyOTVweDtcXHJcXG5cXHJcXG4gIC5hYm91dF9wbGF0Zm9ybV90ZXh0e1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcblxcclxcbiAgfVxcclxcbn1cXHJcXG4gIC5oZWFkZXIzIHtcXHJcXG4gICAgbWFyZ2luLWJsb2NrOiAyMHB4IDEwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcblxcclxcbi53b3Jrb3V0e1xcclxcbiAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgcGFkZGluZzogNSU7XFxyXFxuICB9XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItY2hhbGstZ3JleTtcXHJcXG4gIC5oZWFkZXI0e1xcclxcbiAgICBwYWRkaW5nLWJsb2NrOiAxMHB4IDIwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItcmVkO1xcclxcbiAgfVxcclxcbiAgLmRlc2NyaXB0aW9uX3RleHR7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItZm9udC13aGl0ZTtcXHJcXG4gIH1cXHJcXG4gIC53b3Jrb3V0X2ltZ2FnZXMsIHVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLndvcmtvdXRfaW1hZ2Uge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS1iYWNrZ3JvdW5kO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBkZXNrdG9we1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMzUwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIG1hcmdpbjogNSU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBpbWcge1xcclxcbiAgICAgICAgQGluY2x1ZGUgZGVza3RvcHtcXHJcXG4gICAgICAgICAgLy9taW4taGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgICAgICAgbWF4LWhlaWdodDogMzIwcHg7XFxyXFxuICAgICAgICAgIG1heC13aWR0aDogMjgwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICAgIG1heC1oZWlnaHQ6IDEyMHB4O1xcclxcbiAgICAgICAgICB3aWR0aDogODBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLmZpZ3VyZXNfY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS1iYWNrZ3JvdW5kO1xcclxcblxcclxcbiAgLm1haW5fcGFnZV9maWd1cmVzIHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcclxcbiAgICAuZmlndXJlc19wYWdlX2hlYWQge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuXFxyXFxuICAgICAgLmZpZ3VyZXNfc3RyaXBlIHtcXHJcXG4gICAgICAgIHdpZHRoOiA1NzVweDtcXHJcXG4gICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDN0M3Qzc7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmZpZ3VyZXNfY2lyY2xlIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS1iYWNrZ3JvdW5kO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgdG9wOiAtMTBweDtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDU1JTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgICAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5oZWFkZXIzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnksIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFkZF9maWd1cmUge1xcclxcbiAgICAgIHdpZHRoOiAxMTBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWJsYWNrLWJhY2tncm91bmQ7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMzAlO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgcmlnaHQ6IDE1JTtcXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBhIHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgICAgICAgY29sb3I6ICRjb2xvci1mb250LXdoaXRlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDhweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5maWd1cmVzX3NwYWNlX2ltZyB7XFxyXFxuICAgIGhlaWdodDogMzUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nL1BEX2ltZ18zX3N6cGFnYXQuanBlZ1xcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICB6LWluZGV4OiAyMDA7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogLTI3MHB4O1xcclxcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdnc7XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5maWd1cmVzX2JveCB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcblxcclxcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuZGVzY3JpcHRpb25fdGV4dHtcXHJcXG4gICAgICB3aWR0aDogNjAwcHg7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICBjb2xvcjogJGNvbG9yLWZvbnQtYmxhY2s7XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5maWd1cmVzIHVsIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogODBweDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgLmZpZ3VyZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleTtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gICAgICAgICAgd2lkdGg6IDIzMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICAgICAgbWFyZ2luOiA1JTtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgaW1ne1xcclxcbiAgICAgICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyMzBweDtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIyMHB4O1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTIwcHg7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xcclxcbiAgICAgICAgICB9fVxcclxcblxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbn1cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG5cXHJcXG4uY29udGFjdF9ib3gge1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnksIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwJTtcXHJcXG4gIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdCB7XFxyXFxuICAgIC5oZWFkZXIxIHtcXHJcXG4gICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdF9pbmZvIHtcXHJcXG4gICAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgICBtYXJnaW4tYmxvY2s6IDE1cHg7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5kZXNjcmlwdGlvbl90ZXh0IHtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuaGVhZGVyMyB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5hZGRyZXNzIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG5cXHJcXG4gICAgICAgIGEge1xcclxcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtX21lc3NhZ2Uge1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnBlcnNvbmFsX2RhdGUge1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgZ2FwOiA1cHg7XFxyXFxuXFxyXFxuICAgICAgbGFiZWwge1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBpbnB1dCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBsZWZ0OiAxOTBweDtcXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgLmNhc2VBZGR7XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jYXNlLCAuZmlndXJlX2xldmVsLCAuZmlndXJlX2NhdGVnb3J5IHtcXHJcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICAgICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICB3aWR0aDogOTMlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBzZWxlY3Qge1xcclxcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA6OnNlbGVjdGlvbiB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgb3B0aW9uIHtcXHJcXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZpZ3VyZV9hZGRfY2F0ZWdvcnkge1xcclxcbiAgICAgIHdpZHRoOiAzOTBweDtcXHJcXG4gICAgICAvL2Rpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgICBwIHtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmJveF9tZXNzYWdlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xcclxcbiAgICAgIHdpZHRoOiA5MyU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRpdGxlX21lc3NhZ2Uge1xcclxcbiAgICAgIHBhZGRpbmctYmxvY2s6IDEwcHg7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGV4dGFyZWEge1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFncmVlbWVudCB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCBpbnB1dCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3ggc3BhbiB7XFxyXFxuICBoZWlnaHQ6IDEwcHg7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICBmbGV4LWJhc2lzOiAxMHB4O1xcclxcbiAgZmxleC1zaHJpbms6IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5maWd1cmVfYWRkX2NhdGVnb3J5IHtcXHJcXG4gIC5jaGVja2JveF9jYXRlZ29yeSBzcGFuIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyBzcGFuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zb2Z0LWdyZXk7XFxyXFxuICBib3JkZXI6IDJweCBsaWdodGJsdWUgc29saWQ7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5maWd1cmVfY2F0ZWdvcmllcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMnB4IDVweCBibGFjaztcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbi5ub3RfcmVhZHkgLm1haW5fcGFnZSB7XFxyXFxuICBoZWlnaHQ6IDg4dmg7XFxyXFxuICAuaGVhZGVyMiB7XFxyXFxuICAgIHdpZHRoOiAyNSU7XFxyXFxuICAgIGEge1xcclxcbiAgICAgIGNvbG9yOiBjYWRldGJsdWU7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLnBvcmFkeV9wYWdle1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWcvMi5qcGVnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMjUwcHg7XFxyXFxuICAuaGVhZGVyMXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxyXFxuICB9XFxyXFxuICAuaGVhZGVyM3tcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcbi5hZHZpY2UxLCAuYWR2aWNlM3tcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS1iYWNrZ3JvdW5kO1xcclxcbiAgbWFyZ2luOiAyMHB4IDUwcHggMTIwcHggNTBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkdmljZTJ7XFxyXFxuICBtYXJnaW46IDIwcHggNTBweCAxMjBweCA1MHB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWNoYWxrLWdyZXk7XFxyXFxuICBvcGFjaXR5OiA3NSU7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcblxcclxcbiAgLmNpcmNsZXNfYWR2aWNlX2JveHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAuY2lyY2xlX2FkdmljZXtcXHJcXG4gICAgICB3aWR0aDogMzAlO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIC5oZWFkZXIzLCBwe1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYWRlMzIwMDY0ZTAzY2FjNTBlMzJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=