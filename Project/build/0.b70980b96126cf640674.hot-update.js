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
  display: flex;
  flex-direction: column;
  padding-top: 103px;
  gap: 18px;
  height: 100%;
  width: 100%;
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
}`, "",{"version":3,"sources":["webpack://./Project/scss/settings/_reset.scss","webpack://./Project/scss/index.scss","webpack://./Project/scss/sections/_header.scss","webpack://./Project/scss/settings/_mixins.scss","webpack://./Project/scss/settings/_variables.scss","webpack://./Project/scss/sections/_aside.scss","webpack://./Project/scss/sections/_footer.scss","webpack://./Project/scss/sections/_main-page.scss","webpack://./Project/scss/sections/_workout.scss","webpack://./Project/scss/sections/_figures.scss","webpack://./Project/scss/sections/_concact.scss","webpack://./Project/scss/sections/_not_ready_page.scss","webpack://./Project/scss/sections/_advice.scss"],"names":[],"mappings":"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","sourcesContent":["/* Eric Meyer's CSS Reset\r\n   http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n   This is a Sass partial\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n  display: block;\r\n}\r\nbody {\r\n  line-height: 1;\r\n}\r\nol, ul {\r\n  list-style: none;\r\n}\r\nblockquote, q {\r\n  quotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n  content: '';\r\n  content: none;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n","@import 'settings/reset';\r\n@import \"settings/variables\";\r\n@import \"settings/mixins\";\r\n\r\n@import \"sections/header\";\r\n@import \"sections/aside\";\r\n@import \"sections/footer\";\r\n@import \"sections/main-page\";\r\n@import \"sections/workout\";\r\n@import \"sections/figures\";\r\n@import \"sections/concact\";\r\n@import \"sections/not_ready_page\";\r\n@import \"sections/advice\";\r\n\r\n\r\n.page_container{\r\n  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n  // position: absolute;\r\n  // box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n  //background-color: $color-black-background;\r\n}\r\n\r\n// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1\r\n// .page_container{\r\n//   position: relative;\r\n//   box-sizing: border-box;\r\n//   display: flex;\r\n//   flex-direction: row;\r\n//   height: 100%;\r\n//   width: 100%;\r\n//   overflow-x: hidden;\r\n//   //background-color: $color-black-background;\r\n// }\r\n// .main_container{\r\n//   position: relative;\r\n//   width: 90%;\r\n//   height: 100%;\r\n//   clear: both;\r\n//   right: -15%;\r\n//   background-color: $color-white-background;\r\n//   @include mobile{\r\n//     position: relative;\r\n//     width: 80%;\r\n//     right: -15%;\r\n//   }\r\n// }\r\n\r\n.header1{\r\n  font-family: $font-primary, sans-serif;\r\n  font-weight: 300;\r\n  @include desktop {\r\n    font-size: 50px;\r\n    margin: 0 0 20px 0;\r\n    padding-top: 40px;\r\n  }\r\n  @include mobile{\r\n    font-size: 30px;\r\n    margin-block: 20px;\r\n  }\r\n}\r\n\r\n.header2{\r\n  font-family: $font-primary;\r\n  @include desktop {\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n  }\r\n  @include mobile{\r\n    font-size: 14px;\r\n  }\r\n  .chosen{\r\n    color: $color-red;\r\n    text-decoration: none;\r\n  }\r\n  .not_chosen{\r\n    text-decoration: none;\r\n    color: $color-font-black;\r\n  }\r\n}\r\n.header3{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.menu_main-container {\r\n  height: 60px;\r\n  top: 10px;\r\n  background-color: white;\r\n  z-index: 500;\r\n  position: sticky;\r\n  box-shadow: 2px 3px 3px 2px $color-soft-grey;\r\n  //border-bottom: 2px black solid;\r\n  @include mobile {\r\n    width: 90vw;\r\n  }\r\n  .menu_main {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    @include desktop {\r\n      gap: 22px;\r\n      margin-left: 60px;\r\n    }\r\n    @include mobile{\r\n      gap: 5%;\r\n      margin-left: 5%;\r\n      line-height: 10px;\r\n    }\r\n    .menu_main_element, a{\r\n\r\n      @include desktop{\r\n        font-size: 16px;\r\n      }\r\n      @include mobile{\r\n        font-size: 90%;\r\n      }\r\n      flex-direction: row;\r\n      font-family: $font-primary;\r\n      font-weight: 300;\r\n      color: $color-font-black;\r\n      text-decoration: none;\r\n    }\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n\r\n@mixin desktop {\r\n  @media (min-width: 736px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile {\r\n  @media (max-width: 736px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin header1 {\r\n  font-family: $font-primary;\r\n  font-size: 50px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin header2{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin header3{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin description{\r\n  font-family: $font-primary;\r\n  font-size: 14px;\r\n  color: $color-font-black;\r\n}","\r\n$color-font-black: #000000;\r\n$color-font-white: #FFFFFF;\r\n\r\n$color-red: #B02323;\r\n$color-black-background: #000000;\r\n$color-nearly-black: #1E1E1E;\r\n$color-white-background: #FFFFFF;\r\n$color-soft-grey: #D8D8D8;\r\n$color-chalk-grey: #D6D6D6;\r\n$color-grey: #595959;\r\n\r\n$font-primary: Roboto;","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.menu_aside-container {\r\n  height: 100%;\r\n  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n  // position: absolute;\r\n  .menu_aside {\r\n    // position: fixed;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-top: 103px;\r\n    gap: 18px;\r\n    height: 100%;\r\n    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n    width: 100%;\r\n    background-color: $color-black-background;\r\n    @include mobile{\r\n      width: 15%;\r\n    }\r\n    .menu_aside_element {\r\n      margin: 0 0 0 15px;\r\n      @include mobile {\r\n      margin: 0 0 0 2px;\r\n      }\r\n      a{\r\n        text-decoration: none;\r\n        font-size: 14px;\r\n        font-family: $font-primary, sans-serif;\r\n        font-weight: bold;\r\n        color: $color-font-white;\r\n        @include mobile{\r\n          font-size: 58%;\r\n          font-weight: 300;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.footer_container{\r\n  clear: both;\r\n  position: fixed;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  width: 90%;\r\n  height: 80px;\r\n  background-color: #000000;\r\n  @include mobile{\r\n    width: 90%;\r\n    right: 0;\r\n  }\r\n\r\n  .menu_footer{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 50px;\r\n    width: 100%;\r\n    padding: 0 30px 0 30px;\r\n    // background-color: $color-nearly-black;\r\n    @include mobile{\r\n      padding: 5px;\r\n      justify-content: space-around;\r\n    }\r\n    .menu_footer_list{\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: center;\r\n      gap: 50px;\r\n      margin: 0 15px 0 0;\r\n\r\n      @include mobile{\r\n        gap: 10%;\r\n      }\r\n      a {\r\n        font-family: $font-primary;\r\n        font-size: 12px;\r\n        text-decoration: none;\r\n        color: #928E8E;\r\n        @include mobile{\r\n          font-size: 14px;\r\n        }\r\n      }\r\n    }\r\n    a{\r\n      color: $color-soft-grey;\r\n    }\r\n  }\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.one_pager{\r\n// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n  // height: 90vh;\r\n}\r\n.main_page{\r\n  //background-image: url(\"../img/img_main_page.jpeg\");\r\n  background-image: url(\"../img/img_main_page.jpeg\");\r\n  background-repeat: no-repeat;\r\n  z-index: 200;\r\n  @include desktop {\r\n    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n    // background-attachment: fixed;\r\n    // background-size: 66.5%;\r\n    // background-position: right;\r\n    // margin-left: 60px;\r\n  }\r\n  @include mobile{\r\n    background-size: 100%;\r\n    width: 90%;\r\n    margin-left: 5%;\r\n    right: 10px;\r\n  }\r\n\r\n  .circles_workout-container{\r\n    display: flex;\r\n    @include mobile {\r\n      flex-wrap: wrap;\r\n      justify-content: space-around;\r\n    }\r\n\r\n    .circles_workout{\r\n      background-color: $color-white-background;\r\n      border-radius: 50%;\r\n      width: 170px;\r\n      height: 170px;\r\n      flex-direction: row;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      margin-right: 20px;\r\n      @include mobile{\r\n        width: 100px;\r\n        height: 100px;\r\n        margin: 0;\r\n      }\r\n    }\r\n\r\n  }\r\n  .circles_workout-container :nth-of-type(1){\r\n    border: 10px #E7E6E6 solid;\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n  .circles_workout-container :nth-child(2){\r\n    border: 10px #CCCBCB solid;\r\n    position: relative;\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n  .circles_workout-container :nth-of-type(3){\r\n    border: 10px #9D9D9D solid;\r\n    position: relative;\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n.about_platform{\r\n  width: 295px;\r\n\r\n  .about_platform_text{\r\n    margin-right: 20px;\r\n    padding-bottom: 20px;\r\n    font-family: $font-primary;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n\r\n  }\r\n}\r\n  .header3 {\r\n    margin-block: 20px 10px;\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n\r\n.workout{\r\n  @include desktop {\r\n    padding-left: 60px;\r\n  }\r\n  @include mobile{\r\n    padding: 5%;\r\n  }\r\n  background-color: $color-chalk-grey;\r\n  .header4{\r\n    padding-block: 10px 20px;\r\n    font-family: $font-primary;\r\n    font-size: 24px;\r\n    font-weight: 300;\r\n    color: $color-red;\r\n  }\r\n  .description_text{\r\n    margin-bottom: 20px;\r\n    font-family: $font-primary;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: $color-font-white;\r\n  }\r\n  .workout_imgages, ul {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    @include desktop {\r\n      margin-right: 100px;\r\n      margin-bottom: 60px;\r\n    }\r\n    @include mobile{\r\n      margin-bottom: 20%;\r\n    }\r\n    .workout_image {\r\n      background-color: $color-white-background;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n\r\n      @include desktop{\r\n        margin-right: 40px;\r\n        margin-bottom: 50px;\r\n        height: 350px;\r\n        width: 300px;\r\n      }\r\n      @include mobile{\r\n        margin: 5%;\r\n        height: 150px;\r\n        width: 100px;\r\n      }\r\n      img {\r\n        @include desktop{\r\n          //min-height: 200px;\r\n          max-height: 320px;\r\n          max-width: 280px;\r\n        }\r\n        @include mobile{\r\n          max-height: 120px;\r\n          width: 80px;\r\n        }\r\n\r\n      }\r\n    }\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.figures_container {\r\n  background-color: $color-white-background;\r\n\r\n  .main_page_figures {\r\n    padding-bottom: 100px;\r\n    .figures_page_head {\r\n      display: flex;\r\n      flex-direction: row;\r\n      margin-top: 50px;\r\n      margin-bottom: 20px;\r\n\r\n      .figures_stripe {\r\n        width: 575px;\r\n        height: 40px;\r\n        background-color: #C7C7C7;\r\n        display: flex;\r\n        flex-direction: row;\r\n      }\r\n\r\n      .figures_circle {\r\n        background-color: $color-white-background;\r\n        border-radius: 50%;\r\n        position: relative;\r\n        top: -10px;\r\n        opacity: 55%;\r\n        @include desktop {\r\n          width: 60px;\r\n          height: 60px;\r\n          margin: 0 10px 0 10px;\r\n        }\r\n        @include mobile {\r\n          top: 0;\r\n          width: 30px;\r\n          height: 30px;\r\n        }\r\n      }\r\n\r\n      .header3 {\r\n        display: flex;\r\n        align-items: center;\r\n        height: 100%;\r\n        font-family: $font-primary, sans-serif;\r\n        font-weight: 300;\r\n        @include desktop {\r\n          font-size: 24px;\r\n        }\r\n        @include mobile {\r\n          font-size: 16px;\r\n        }\r\n      }\r\n    }\r\n\r\n    .add_figure {\r\n      width: 110px;\r\n      height: 40px;\r\n      background: $color-black-background;\r\n      border-radius: 30%;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      position: absolute;\r\n      right: 15%;\r\n      @include mobile{\r\n        width: 30px;\r\n        right: 0;\r\n      }\r\n      a {\r\n        font-family: $font-primary;\r\n        color: $color-font-white;\r\n        font-size: 14px;\r\n        text-decoration: none;\r\n        @include mobile{\r\n          font-size: 8px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .figures_space_img {\r\n    height: 350px;\r\n    background-image: url(\"../img/PD_img_3_szpagat.jpeg\");\r\n    background-repeat: no-repeat;\r\n    z-index: 200;\r\n    background-position-y: -270px;\r\n    @include desktop {\r\n      background-attachment: fixed;\r\n      background-size: 100vw;\r\n    }\r\n    @include mobile {\r\n      height: 150px;\r\n      background-size: 100%;\r\n      background-position: 200% 0;\r\n    }\r\n  }\r\n\r\n  .figures_box {\r\n    padding-top: 20px;\r\n\r\n    @include desktop {\r\n      padding-left: 60px;\r\n    }\r\n    @include mobile {\r\n      padding-left: 10%;\r\n    }\r\n    .description_text{\r\n      width: 600px;\r\n      margin-bottom: 20px;\r\n      font-family: $font-primary;\r\n      font-size: 14px;\r\n      font-weight: 400;\r\n      color: $color-font-black;\r\n      @include mobile{\r\n        width: 90%;\r\n        margin-bottom: 10px;\r\n      }\r\n    }\r\n\r\n    .figures ul {\r\n      display: flex;\r\n      flex-direction: row;\r\n      flex-wrap: wrap;\r\n      justify-content: left;\r\n\r\n      @include desktop {\r\n        margin-right: 80px;\r\n      }\r\n      .figure {\r\n        background-color: $color-grey;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        @include desktop {\r\n          margin-right: 10px;\r\n          margin-bottom: 10px;\r\n          height: 250px;\r\n          width: 230px;\r\n        }\r\n        @include mobile {\r\n          margin: 5%;\r\n          height: 150px;\r\n          width: 100px;\r\n        }\r\n        img{\r\n          @include desktop {\r\n            max-height: 230px;\r\n            max-width: 220px;\r\n          }\r\n          @include mobile {\r\n\r\n            max-height: 120px;\r\n            max-width: 80px;\r\n          }}\r\n\r\n      }\r\n    }\r\n  }\r\n\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n\r\n.contact_box {\r\n  font-family: $font-primary, sans-serif;\r\n  margin-top: 30px;\r\n  margin-left: 40px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 10%;\r\n  @include mobile {\r\n    flex-direction: column;\r\n    align-items: start;\r\n    margin-left: 20px;\r\n    margin-bottom: 60px;\r\n    height: 100vh;\r\n  }\r\n\r\n  .contact {\r\n    .header1 {\r\n      margin: 0;\r\n      padding: 0;\r\n    }\r\n\r\n    .contact_info {\r\n      font-weight: 300;\r\n      @include desktop {\r\n        font-size: 20px;\r\n        padding-top: 20px;\r\n      }\r\n      @include mobile {\r\n        font-size: 14px;\r\n        margin-block: 15px;\r\n      }\r\n\r\n      .description_text {\r\n        line-height: 30px;\r\n      }\r\n\r\n      .header3 {\r\n        margin-top: 50px;\r\n        margin-bottom: 15px;\r\n        @include mobile {\r\n          margin-top: 20px;\r\n        }\r\n      }\r\n\r\n      .address {\r\n        font-size: 16px;\r\n\r\n        a {\r\n          padding-left: 10px;\r\n          text-decoration: none;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .form_message {\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 50%;\r\n    gap: 5px;\r\n    @include mobile{\r\n      width: 100%;\r\n    }\r\n\r\n    .personal_date {\r\n      position: relative;\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 5px;\r\n\r\n      label {\r\n        font-weight: 600;\r\n        width: 300px;\r\n        margin-bottom: 20px;\r\n        display: flex;\r\n        align-items: center\r\n      }\r\n\r\n      input {\r\n        font-size: 12px;\r\n        width: 200px;\r\n        height: 20px;\r\n        position: absolute;\r\n        left: 190px;\r\n        @include mobile{\r\n          width: 40%;\r\n        }\r\n      }\r\n    }\r\n    .caseAdd{\r\n      @include mobile{\r\n        width: 100%;\r\n      }\r\n    }\r\n\r\n    .case, .figure_level, .figure_category {\r\n      font-size: 12px;\r\n      font-family: $font-primary;\r\n      width: 400px;\r\n      height: 20px;\r\n      margin-bottom: 15px;\r\n      cursor: pointer;\r\n      @include mobile{\r\n        width: 93%;\r\n      }\r\n    }\r\n\r\n    select {\r\n      -webkit-border-radius: 25px;\r\n      -moz-border-radius: 25px;\r\n      border-radius: 25px;\r\n    }\r\n\r\n    ::selection {\r\n      background-color: lightsteelblue;\r\n    }\r\n\r\n    option {\r\n      -webkit-border-radius: 25px;\r\n      -moz-border-radius: 25px;\r\n      border-radius: 25px;\r\n    }\r\n\r\n    .figure_add_category {\r\n      width: 390px;\r\n      //display: flex;\r\n      flex-direction: column;\r\n\r\n      p {\r\n        font-weight: 600;\r\n        margin-bottom: 15px;\r\n      }\r\n\r\n    }\r\n  }\r\n\r\n  .box_message {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 400px;\r\n    @include mobile {\r\n      padding-bottom: 60px;\r\n      width: 93%;\r\n    }\r\n\r\n    .title_message {\r\n      padding-block: 10px;\r\n      font-weight: 600;\r\n    }\r\n\r\n    .textarea {\r\n      margin-bottom: 5px;\r\n      resize: none;\r\n    }\r\n\r\n    .agreement {\r\n      font-size: 10px;\r\n    }\r\n\r\n  }\r\n\r\n}\r\n\r\n.checkbox input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  height: 10px;\r\n  width: 10px;\r\n}\r\n\r\n.checkbox {\r\n  cursor: pointer;\r\n  display: flex;\r\n}\r\n\r\n.checkbox span {\r\n  height: 10px;\r\n  width: 10px;\r\n  border: 2px solid grey;\r\n  flex-basis: 10px;\r\n  flex-shrink: 0;\r\n  cursor: pointer;\r\n  margin-right: 10px;\r\n}\r\n\r\n.figure_add_category {\r\n  .checkbox_category span {\r\n    border: 2px solid grey;\r\n  }\r\n}\r\n\r\n.checkbox input:checked + span {\r\n  background-color: $color-soft-grey;\r\n  border: 2px lightblue solid;\r\n\r\n}\r\n\r\n.figure_categories {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n}\r\n\r\n.submit {\r\n  font-family: $font-primary;\r\n  width: 80px;\r\n  height: 20px;\r\n  font-weight: 300;\r\n  background-color: $color-grey;\r\n  color: white;\r\n  border: none;\r\n  box-shadow: 1px 2px 5px black;\r\n  margin-left: 25%;\r\n  cursor: pointer;\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.not_ready .main_page {\r\n  height: 88vh;\r\n  .header2 {\r\n    width: 25%;\r\n    a {\r\n      color: cadetblue;\r\n      line-height: 40px;\r\n    }\r\n  }\r\n}\r\n\r\n\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.porady_page{\r\n  background-image: url(\"../img/2.jpeg\");\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-position-y: -250px;\r\n  .header1{\r\n    margin-left: 50px;\r\n  }\r\n  .header3{\r\n    padding-bottom: 30px;\r\n  }\r\n}\r\n.advice1, .advice3{\r\n  background-color: $color-white-background;\r\n  margin: 20px 50px 120px 50px;\r\n  padding: 20px;\r\n  line-height: 20px;\r\n  font-family: $font-primary;\r\n  font-weight: 300;\r\n}\r\n\r\n.advice2{\r\n  margin: 20px 50px 120px 50px;\r\n  padding: 20px;\r\n  line-height: 20px;\r\n  font-family: $font-primary;\r\n  font-weight: 300;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-self: center;\r\n  align-items: center;\r\n  background-color: $color-chalk-grey;\r\n  opacity: 75%;\r\n  width: 70%;\r\n\r\n  .circles_advice_box{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n    .circle_advice{\r\n      width: 30%;\r\n      justify-content: center;\r\n      .header3, p{\r\n        display: flex;\r\n        justify-content: center;\r\n      }\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d0ba669a423476c00ab4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iNzA5ODBiOTYxMjZjZjY0MDY3NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QyxpRUFBNEM7QUFDeEYsNENBQTRDLGlFQUErQztBQUMzRiw0Q0FBNEMsaUVBQWdDO0FBQzVFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx5ckJBQXlyQixLQUFLLGlCQUFpQixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLFdBQVcsTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFlBQVksWUFBWSxXQUFXLFlBQVksTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sYUFBYSxhQUFhLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLGFBQWEsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxhQUFhLGFBQWEsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxZQUFZLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxZQUFZLFlBQVksVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE9BQU8sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxRQUFRLE9BQU8sVUFBVSxVQUFVLFFBQVEsT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxhQUFhLGFBQWEsUUFBUSxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsUUFBUSxPQUFPLFlBQVksV0FBVyxVQUFVLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsUUFBUSxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFX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QUFpQixpQ0FBaUMsa0JBQWtCLG1CQUFtQix1QkFBdUIsb0NBQW9DLG1CQUFtQixtQkFBbUIsb0NBQW9DLHVCQUF1QixzQkFBc0IsS0FBSyx5Q0FBeUMsbUNBQW1DLCtCQUErQixtQkFBbUIsZ0JBQWdCLG1CQUFtQixXQUFXLDJCQUEyQiw0QkFBNEIsU0FBUyxPQUFPLEtBQUssaURBQWlELG1DQUFtQyxxQkFBcUIsK0NBQStDLG1DQUFtQyw2QkFBNkIsb0JBQW9CLDZCQUE2QixvQ0FBb0MsZUFBZSwwQkFBMEIsT0FBTyxlQUFlLDZCQUE2QixPQUFPLEtBQUssdUJBQXVCLGdEQUFnRCxtQ0FBbUMsb0JBQW9CLHdCQUF3QixpQ0FBaUMsdUJBQXVCLEtBQUssaUJBQWlCLG1DQUFtQyxvQkFBb0Isd0JBQXdCLGlDQUFpQyx1QkFBdUIsb0JBQW9CLDZCQUE2Qix5QkFBeUIsMEJBQTBCLDBDQUEwQyxtQkFBbUIsaUJBQWlCLDhCQUE4QixzQkFBc0IsNEJBQTRCLHNDQUFzQyxvQkFBb0IsdUJBQXVCLHFCQUFxQixrQ0FBa0Msc0JBQXNCLDBCQUEwQixvQ0FBb0MsV0FBVyxTQUFTLE9BQU8sS0FBSyxtQkFBbUI7QUFDNyszQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUN4MkJ2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3Qvc2Nzcy9pbmRleC5zY3NzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZy9pbWdfbWFpbl9wYWdlLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvUERfaW1nXzNfc3pwYWdhdC5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1nLzIuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBFcmljIE1leWVyJ3MgQ1NTIFJlc2V0XG4gICBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuICAgVGhpcyBpcyBhIFNhc3MgcGFydGlhbFxuKi9cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLCBxIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLm1lbnVfbWFpbi1jb250YWluZXIge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDUwMDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm94LXNoYWRvdzogMnB4IDNweCAzcHggMnB4ICNEOEQ4RDg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfbWFpbi1jb250YWluZXIge1xuICAgIHdpZHRoOiA5MHZ3O1xuICB9XG59XG4ubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4ge1xuICAgIGdhcDogMjJweDtcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4ge1xuICAgIGdhcDogNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICB9XG59XG4ubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIC5tZW51X21haW5fZWxlbWVudCwgLm1lbnVfbWFpbi1jb250YWluZXIgLm1lbnVfbWFpbiBhIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIC5tZW51X21haW5fZWxlbWVudCwgLm1lbnVfbWFpbi1jb250YWluZXIgLm1lbnVfbWFpbiBhIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIC5tZW51X21haW5fZWxlbWVudCwgLm1lbnVfbWFpbi1jb250YWluZXIgLm1lbnVfbWFpbiBhIHtcbiAgICBmb250LXNpemU6IDkwJTtcbiAgfVxufVxuXG4ubWVudV9hc2lkZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWVudV9hc2lkZS1jb250YWluZXIgLm1lbnVfYXNpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXRvcDogMTAzcHg7XG4gIGdhcDogMThweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWVudV9hc2lkZS1jb250YWluZXIgLm1lbnVfYXNpZGUge1xuICAgIHdpZHRoOiAxNSU7XG4gIH1cbn1cbi5tZW51X2FzaWRlLWNvbnRhaW5lciAubWVudV9hc2lkZSAubWVudV9hc2lkZV9lbGVtZW50IHtcbiAgbWFyZ2luOiAwIDAgMCAxNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X2FzaWRlLWNvbnRhaW5lciAubWVudV9hc2lkZSAubWVudV9hc2lkZV9lbGVtZW50IHtcbiAgICBtYXJnaW46IDAgMCAwIDJweDtcbiAgfVxufVxuLm1lbnVfYXNpZGUtY29udGFpbmVyIC5tZW51X2FzaWRlIC5tZW51X2FzaWRlX2VsZW1lbnQgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfYXNpZGUtY29udGFpbmVyIC5tZW51X2FzaWRlIC5tZW51X2FzaWRlX2VsZW1lbnQgYSB7XG4gICAgZm9udC1zaXplOiA1OCU7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxufVxuXG4uZm9vdGVyX2NvbnRhaW5lciB7XG4gIGNsZWFyOiBib3RoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5mb290ZXJfY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG4uZm9vdGVyX2NvbnRhaW5lciAubWVudV9mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMzBweCAwIDMwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbn1cbi5mb290ZXJfY29udGFpbmVyIC5tZW51X2Zvb3RlciAubWVudV9mb290ZXJfbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNTBweDtcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5mb290ZXJfY29udGFpbmVyIC5tZW51X2Zvb3RlciAubWVudV9mb290ZXJfbGlzdCB7XG4gICAgZ2FwOiAxMCU7XG4gIH1cbn1cbi5mb290ZXJfY29udGFpbmVyIC5tZW51X2Zvb3RlciAubWVudV9mb290ZXJfbGlzdCBhIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjOTI4RThFO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5mb290ZXJfY29udGFpbmVyIC5tZW51X2Zvb3RlciAubWVudV9mb290ZXJfbGlzdCBhIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbi5mb290ZXJfY29udGFpbmVyIC5tZW51X2Zvb3RlciBhIHtcbiAgY29sb3I6ICNEOEQ4RDg7XG59XG5cbi5tYWluX3BhZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHotaW5kZXg6IDIwMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWFpbl9wYWdlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gIH1cbn1cbi5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxufVxuLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciAuY2lyY2xlc193b3Jrb3V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTcwcHg7XG4gIGhlaWdodDogMTcwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciAuY2lyY2xlc193b3Jrb3V0IHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbi5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1vZi10eXBlKDEpIHtcbiAgYm9yZGVyOiAxMHB4ICNFN0U2RTYgc29saWQ7XG59XG4ubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgxKSBoMiwgLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMSkgYSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1jaGlsZCgyKSB7XG4gIGJvcmRlcjogMTBweCAjQ0NDQkNCIHNvbGlkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtY2hpbGQoMikgaDIsIC5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1jaGlsZCgyKSBhIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMykge1xuICBib3JkZXI6IDEwcHggIzlEOUQ5RCBzb2xpZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMykgaDIsIC5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1vZi10eXBlKDMpIGEge1xuICBib3JkZXI6IG5vbmU7XG59XG4ubWFpbl9wYWdlIC5hYm91dF9wbGF0Zm9ybSB7XG4gIHdpZHRoOiAyOTVweDtcbn1cbi5tYWluX3BhZ2UgLmFib3V0X3BsYXRmb3JtIC5hYm91dF9wbGF0Zm9ybV90ZXh0IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLm1haW5fcGFnZSAuaGVhZGVyMyB7XG4gIG1hcmdpbi1ibG9jazogMjBweCAxMHB4O1xufVxuXG4ud29ya291dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNENkQ2RDY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLndvcmtvdXQge1xuICAgIHBhZGRpbmctbGVmdDogNjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC53b3Jrb3V0IHtcbiAgICBwYWRkaW5nOiA1JTtcbiAgfVxufVxuLndvcmtvdXQgLmhlYWRlcjQge1xuICBwYWRkaW5nLWJsb2NrOiAxMHB4IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICNCMDIzMjM7XG59XG4ud29ya291dCAuZGVzY3JpcHRpb25fdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4ud29ya291dCAud29ya291dF9pbWdhZ2VzLCAud29ya291dCB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLndvcmtvdXQgLndvcmtvdXRfaW1nYWdlcywgLndvcmtvdXQgdWwge1xuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC53b3Jrb3V0IC53b3Jrb3V0X2ltZ2FnZXMsIC53b3Jrb3V0IHVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMCU7XG4gIH1cbn1cbi53b3Jrb3V0IC53b3Jrb3V0X2ltZ2FnZXMgLndvcmtvdXRfaW1hZ2UsIC53b3Jrb3V0IHVsIC53b3Jrb3V0X2ltYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLndvcmtvdXQgLndvcmtvdXRfaW1nYWdlcyAud29ya291dF9pbWFnZSwgLndvcmtvdXQgdWwgLndvcmtvdXRfaW1hZ2Uge1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLndvcmtvdXQgLndvcmtvdXRfaW1nYWdlcyAud29ya291dF9pbWFnZSwgLndvcmtvdXQgdWwgLndvcmtvdXRfaW1hZ2Uge1xuICAgIG1hcmdpbjogNSU7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAud29ya291dCAud29ya291dF9pbWdhZ2VzIC53b3Jrb3V0X2ltYWdlIGltZywgLndvcmtvdXQgdWwgLndvcmtvdXRfaW1hZ2UgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAzMjBweDtcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLndvcmtvdXQgLndvcmtvdXRfaW1nYWdlcyAud29ya291dF9pbWFnZSBpbWcsIC53b3Jrb3V0IHVsIC53b3Jrb3V0X2ltYWdlIGltZyB7XG4gICAgbWF4LWhlaWdodDogMTIwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gIH1cbn1cblxuLmZpZ3VyZXNfY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cbi5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMge1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG4uZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5maWd1cmVzX3BhZ2VfaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5maWd1cmVzX3BhZ2VfaGVhZCAuZmlndXJlc19zdHJpcGUge1xuICB3aWR0aDogNTc1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M3QzdDNztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIC5maWd1cmVzX2NpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xMHB4O1xuICBvcGFjaXR5OiA1NSU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuZmlndXJlc19wYWdlX2hlYWQgLmZpZ3VyZXNfY2lyY2xlIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuZmlndXJlc19wYWdlX2hlYWQgLmZpZ3VyZXNfY2lyY2xlIHtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5maWd1cmVzX3BhZ2VfaGVhZCAuaGVhZGVyMyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5maWd1cmVzX3BhZ2VfaGVhZCAuaGVhZGVyMyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuZmlndXJlc19wYWdlX2hlYWQgLmhlYWRlcjMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuYWRkX2ZpZ3VyZSB7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAzMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNSU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuYWRkX2ZpZ3VyZSB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmFkZF9maWd1cmUgYSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5hZGRfZmlndXJlIGEge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfc3BhY2VfaW1nIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB6LWluZGV4OiAyMDA7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogLTI3MHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19zcGFjZV9pbWcge1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDB2dztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19zcGFjZV9pbWcge1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwMCUgMDtcbiAgfVxufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3gge1xuICAgIHBhZGRpbmctbGVmdDogNjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3gge1xuICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5kZXNjcmlwdGlvbl90ZXh0IHtcbiAgd2lkdGg6IDYwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmRlc2NyaXB0aW9uX3RleHQge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZmlndXJlcyB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmZpZ3VyZXMgdWwge1xuICAgIG1hcmdpbi1yaWdodDogODBweDtcbiAgfVxufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZmlndXJlcyB1bCAuZmlndXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NTk1OTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5maWd1cmVzIHVsIC5maWd1cmUge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDIzMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZmlndXJlcyB1bCAuZmlndXJlIHtcbiAgICBtYXJnaW46IDUlO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZmlndXJlcyB1bCAuZmlndXJlIGltZyB7XG4gICAgbWF4LWhlaWdodDogMjMwcHg7XG4gICAgbWF4LXdpZHRoOiAyMjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmZpZ3VyZXMgdWwgLmZpZ3VyZSBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDEyMHB4O1xuICAgIG1heC13aWR0aDogODBweDtcbiAgfVxufVxuXG4uY29udGFjdF9ib3gge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbn1cbi5jb250YWN0X2JveCAuY29udGFjdCAuaGVhZGVyMSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5jb250YWN0X2JveCAuY29udGFjdCAuY29udGFjdF9pbmZvIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3ggLmNvbnRhY3QgLmNvbnRhY3RfaW5mbyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYmxvY2s6IDE1cHg7XG4gIH1cbn1cbi5jb250YWN0X2JveCAuY29udGFjdCAuY29udGFjdF9pbmZvIC5kZXNjcmlwdGlvbl90ZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uY29udGFjdF9ib3ggLmNvbnRhY3QgLmNvbnRhY3RfaW5mbyAuaGVhZGVyMyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8gLmhlYWRlcjMge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn1cbi5jb250YWN0X2JveCAuY29udGFjdCAuY29udGFjdF9pbmZvIC5hZGRyZXNzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8gLmFkZHJlc3MgYSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA1MCU7XG4gIGdhcDogNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLnBlcnNvbmFsX2RhdGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXB4O1xufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLnBlcnNvbmFsX2RhdGUgbGFiZWwge1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAucGVyc29uYWxfZGF0ZSBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTkwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLnBlcnNvbmFsX2RhdGUgaW5wdXQge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAuY2FzZUFkZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5jYXNlLCAuY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAuZmlndXJlX2xldmVsLCAuY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAuZmlndXJlX2NhdGVnb3J5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5jYXNlLCAuY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAuZmlndXJlX2xldmVsLCAuY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAuZmlndXJlX2NhdGVnb3J5IHtcbiAgICB3aWR0aDogOTMlO1xuICB9XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSBzZWxlY3Qge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIDo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSBvcHRpb24ge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5maWd1cmVfYWRkX2NhdGVnb3J5IHtcbiAgd2lkdGg6IDM5MHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLmZpZ3VyZV9hZGRfY2F0ZWdvcnkgcCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uY29udGFjdF9ib3ggLmJveF9tZXNzYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDQwMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5jb250YWN0X2JveCAuYm94X21lc3NhZ2Uge1xuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICAgIHdpZHRoOiA5MyU7XG4gIH1cbn1cbi5jb250YWN0X2JveCAuYm94X21lc3NhZ2UgLnRpdGxlX21lc3NhZ2Uge1xuICBwYWRkaW5nLWJsb2NrOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmNvbnRhY3RfYm94IC5ib3hfbWVzc2FnZSAudGV4dGFyZWEge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHJlc2l6ZTogbm9uZTtcbn1cbi5jb250YWN0X2JveCAuYm94X21lc3NhZ2UgLmFncmVlbWVudCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmNoZWNrYm94IGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG59XG5cbi5jaGVja2JveCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNoZWNrYm94IHNwYW4ge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICBmbGV4LWJhc2lzOiAxMHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5maWd1cmVfYWRkX2NhdGVnb3J5IC5jaGVja2JveF9jYXRlZ29yeSBzcGFuIHtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbn1cblxuLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyBzcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q4RDhEODtcbiAgYm9yZGVyOiAycHggbGlnaHRibHVlIHNvbGlkO1xufVxuXG4uZmlndXJlX2NhdGVnb3JpZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogOHB4O1xufVxuXG4uc3VibWl0IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NTk1OTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDFweCAycHggNXB4IGJsYWNrO1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ub3RfcmVhZHkgLm1haW5fcGFnZSB7XG4gIGhlaWdodDogODh2aDtcbn1cbi5ub3RfcmVhZHkgLm1haW5fcGFnZSAuaGVhZGVyMiB7XG4gIHdpZHRoOiAyNSU7XG59XG4ubm90X3JlYWR5IC5tYWluX3BhZ2UgLmhlYWRlcjIgYSB7XG4gIGNvbG9yOiBjYWRldGJsdWU7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuXG4ucG9yYWR5X3BhZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogLTI1MHB4O1xufVxuLnBvcmFkeV9wYWdlIC5oZWFkZXIxIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG4ucG9yYWR5X3BhZ2UgLmhlYWRlcjMge1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmFkdmljZTEsIC5hZHZpY2UzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgbWFyZ2luOiAyMHB4IDUwcHggMTIwcHggNTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5hZHZpY2UyIHtcbiAgbWFyZ2luOiAyMHB4IDUwcHggMTIwcHggNTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q2RDZENjtcbiAgb3BhY2l0eTogNzUlO1xuICB3aWR0aDogNzAlO1xufVxuLmFkdmljZTIgLmNpcmNsZXNfYWR2aWNlX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMTAwJTtcbn1cbi5hZHZpY2UyIC5jaXJjbGVzX2FkdmljZV9ib3ggLmNpcmNsZV9hZHZpY2Uge1xuICB3aWR0aDogMzAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hZHZpY2UyIC5jaXJjbGVzX2FkdmljZV9ib3ggLmNpcmNsZV9hZHZpY2UgLmhlYWRlcjMsIC5hZHZpY2UyIC5jaXJjbGVzX2FkdmljZV9ib3ggLmNpcmNsZV9hZHZpY2UgcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGFnZV9jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmhlYWRlcjEge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5oZWFkZXIxIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmhlYWRlcjEge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tYmxvY2s6IDIwcHg7XG4gIH1cbn1cblxuLmhlYWRlcjIge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5oZWFkZXIyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuaGVhZGVyMiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4uaGVhZGVyMiAuY2hvc2VuIHtcbiAgY29sb3I6ICNCMDIzMjM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5oZWFkZXIyIC5ub3RfY2hvc2VuIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmhlYWRlcjMge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2V0dGluZ3MvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2V0dGluZ3MvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2V0dGluZ3MvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX2FzaWRlLnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fbWFpbi1wYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fd29ya291dC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX2ZpZ3VyZXMuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NlY3Rpb25zL19jb25jYWN0LnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fbm90X3JlYWR5X3BhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NlY3Rpb25zL19hZHZpY2Uuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Q0FBQTtBQU9BOzs7Ozs7Ozs7Ozs7O0VBYUUsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ0FGOztBREVBLGdEQUFBO0FBQ0E7O0VBRUUsY0FBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBREFBO0VBQ0UsZ0JBQUE7QUNHRjs7QUREQTtFQUNFLFlBQUE7QUNJRjs7QURGQTs7RUFFRSxXQUFBO0VBQ0EsYUFBQTtBQ0tGOztBREhBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ01GOztBQ25EQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBRHNERjtBRXRERTtFRE5GO0lBU0ksV0FBQTtFRHVERjtBQUNGO0FDdERFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRHdE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QUU5ekJFO0VGK0RGO0lBR0ksZUFBQTtJQUNBLGlCQUFBO0VBZ3dCRjtBQUNGO0FFOXpCRTtFRnlERjtJQU9JLGVBQUE7RUFrd0JGO0FBQ0Y7QUFqd0JFO0VBQ0UsY0d4RVE7RUh5RVIscUJBQUE7QUFtd0JKO0FBandCRTtFQUNFLHFCQUFBO0VBQ0EsY0doRmU7QUhtMUJuQjs7QUFod0JBO0VBQ0UsbUJHekVhO0VIMEViLGVBQUE7RUFDQSxnQkFBQTtBQW13QkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRXJpYyBNZXllcidzIENTUyBSZXNldFxcclxcbiAgIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXFxyXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxyXFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXHJcXG4gICBUaGlzIGlzIGEgU2FzcyBwYXJ0aWFsXFxyXFxuKi9cXHJcXG5cXHJcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG4gIHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCAnc2V0dGluZ3MvcmVzZXQnO1xcclxcbkBpbXBvcnQgXFxcInNldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwic2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy9oZWFkZXJcXFwiO1xcclxcbkBpbXBvcnQgXFxcInNlY3Rpb25zL2FzaWRlXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy9mb290ZXJcXFwiO1xcclxcbkBpbXBvcnQgXFxcInNlY3Rpb25zL21haW4tcGFnZVxcXCI7XFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvd29ya291dFxcXCI7XFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvZmlndXJlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvY29uY2FjdFxcXCI7XFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvbm90X3JlYWR5X3BhZ2VcXFwiO1xcclxcbkBpbXBvcnQgXFxcInNlY3Rpb25zL2FkdmljZVxcXCI7XFxyXFxuXFxyXFxuXFxyXFxuLnBhZ2VfY29udGFpbmVye1xcclxcbiAgLy8gISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxcclxcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgLy8gYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLWJhY2tncm91bmQ7XFxyXFxufVxcclxcblxcclxcbi8vICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISExXFxyXFxuLy8gLnBhZ2VfY29udGFpbmVye1xcclxcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbi8vICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4vLyAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuLy8gICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbi8vICAgaGVpZ2h0OiAxMDAlO1xcclxcbi8vICAgd2lkdGg6IDEwMCU7XFxyXFxuLy8gICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuLy8gICAvL2JhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay1iYWNrZ3JvdW5kO1xcclxcbi8vIH1cXHJcXG4vLyAubWFpbl9jb250YWluZXJ7XFxyXFxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuLy8gICB3aWR0aDogOTAlO1xcclxcbi8vICAgaGVpZ2h0OiAxMDAlO1xcclxcbi8vICAgY2xlYXI6IGJvdGg7XFxyXFxuLy8gICByaWdodDogLTE1JTtcXHJcXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS1iYWNrZ3JvdW5kO1xcclxcbi8vICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuLy8gICAgIHdpZHRoOiA4MCU7XFxyXFxuLy8gICAgIHJpZ2h0OiAtMTUlO1xcclxcbi8vICAgfVxcclxcbi8vIH1cXHJcXG5cXHJcXG4uaGVhZGVyMXtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5LCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIG1hcmdpbjogMCAwIDIwcHggMDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgbWFyZ2luLWJsb2NrOiAyMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyMntcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG4gIC5jaG9zZW57XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItcmVkO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuICAubm90X2Nob3NlbntcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogJGNvbG9yLWZvbnQtYmxhY2s7XFxyXFxuICB9XFxyXFxufVxcclxcbi5oZWFkZXIze1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4ubWVudV9tYWluLWNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICB0b3A6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHotaW5kZXg6IDUwMDtcXHJcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICBib3gtc2hhZG93OiAycHggM3B4IDNweCAycHggJGNvbG9yLXNvZnQtZ3JleTtcXHJcXG4gIC8vYm9yZGVyLWJvdHRvbTogMnB4IGJsYWNrIHNvbGlkO1xcclxcbiAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgd2lkdGg6IDkwdnc7XFxyXFxuICB9XFxyXFxuICAubWVudV9tYWluIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICBnYXA6IDIycHg7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgIGdhcDogNSU7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51X21haW5fZWxlbWVudCwgYXtcXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBkZXNrdG9we1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICBmb250LXNpemU6IDkwJTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICAgIGNvbG9yOiAkY29sb3ItZm9udC1ibGFjaztcXHJcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcblxcclxcbkBtaXhpbiBkZXNrdG9wIHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIG1vYmlsZSB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBoZWFkZXIxIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gaGVhZGVyMntcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gaGVhZGVyM3tcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZGVzY3JpcHRpb257XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiAkY29sb3ItZm9udC1ibGFjaztcXHJcXG59XCIsXCJcXHJcXG4kY29sb3ItZm9udC1ibGFjazogIzAwMDAwMDtcXHJcXG4kY29sb3ItZm9udC13aGl0ZTogI0ZGRkZGRjtcXHJcXG5cXHJcXG4kY29sb3ItcmVkOiAjQjAyMzIzO1xcclxcbiRjb2xvci1ibGFjay1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xcclxcbiRjb2xvci1uZWFybHktYmxhY2s6ICMxRTFFMUU7XFxyXFxuJGNvbG9yLXdoaXRlLWJhY2tncm91bmQ6ICNGRkZGRkY7XFxyXFxuJGNvbG9yLXNvZnQtZ3JleTogI0Q4RDhEODtcXHJcXG4kY29sb3ItY2hhbGstZ3JleTogI0Q2RDZENjtcXHJcXG4kY29sb3ItZ3JleTogIzU5NTk1OTtcXHJcXG5cXHJcXG4kZm9udC1wcmltYXJ5OiBSb2JvdG87XCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLm1lbnVfYXNpZGUtY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIC8vICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcXHJcXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIC5tZW51X2FzaWRlIHtcXHJcXG4gICAgLy8gcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTAzcHg7XFxyXFxuICAgIGdhcDogMThweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAvLyAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stYmFja2dyb3VuZDtcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgIHdpZHRoOiAxNSU7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnVfYXNpZGVfZWxlbWVudCB7XFxyXFxuICAgICAgbWFyZ2luOiAwIDAgMCAxNXB4O1xcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgbWFyZ2luOiAwIDAgMCAycHg7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGF7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgY29sb3I6ICRjb2xvci1mb250LXdoaXRlO1xcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDU4JTtcXHJcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLmZvb3Rlcl9jb250YWluZXJ7XFxyXFxuICBjbGVhcjogYm90aDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnVfZm9vdGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDAgMzBweCAwIDMwcHg7XFxyXFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1uZWFybHktYmxhY2s7XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnVfZm9vdGVyX2xpc3R7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgZ2FwOiA1MHB4O1xcclxcbiAgICAgIG1hcmdpbjogMCAxNXB4IDAgMDtcXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICBnYXA6IDEwJTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgYSB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIGNvbG9yOiAjOTI4RThFO1xcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIGF7XFxyXFxuICAgICAgY29sb3I6ICRjb2xvci1zb2Z0LWdyZXk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLm9uZV9wYWdlcntcXHJcXG4vLyAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXFxyXFxuICAvLyBoZWlnaHQ6IDkwdmg7XFxyXFxufVxcclxcbi5tYWluX3BhZ2V7XFxyXFxuICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nL2ltZ19tYWluX3BhZ2UuanBlZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWcvaW1nX21haW5fcGFnZS5qcGVnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgei1pbmRleDogMjAwO1xcclxcbiAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgIC8vICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcXHJcXG4gICAgLy8gYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gICAgLy8gYmFja2dyb3VuZC1zaXplOiA2Ni41JTtcXHJcXG4gICAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XFxyXFxuICAgIC8vIG1hcmdpbi1sZWZ0OiA2MHB4O1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXHJcXG4gICAgcmlnaHQ6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNpcmNsZXNfd29ya291dHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtYmFja2dyb3VuZDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgd2lkdGg6IDE3MHB4O1xcclxcbiAgICAgIGhlaWdodDogMTcwcHg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICB9XFxyXFxuICAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMSl7XFxyXFxuICAgIGJvcmRlcjogMTBweCAjRTdFNkU2IHNvbGlkO1xcclxcbiAgICBoMiwgYSB7XFxyXFxuICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLWNoaWxkKDIpe1xcclxcbiAgICBib3JkZXI6IDEwcHggI0NDQ0JDQiBzb2xpZDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoMiwgYSB7XFxyXFxuICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMyl7XFxyXFxuICAgIGJvcmRlcjogMTBweCAjOUQ5RDlEIHNvbGlkO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGgyLCBhIHtcXHJcXG4gICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4uYWJvdXRfcGxhdGZvcm17XFxyXFxuICB3aWR0aDogMjk1cHg7XFxyXFxuXFxyXFxuICAuYWJvdXRfcGxhdGZvcm1fdGV4dHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHJcXG4gIH1cXHJcXG59XFxyXFxuICAuaGVhZGVyMyB7XFxyXFxuICAgIG1hcmdpbi1ibG9jazogMjBweCAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG5cXHJcXG4ud29ya291dHtcXHJcXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgIHBhZGRpbmc6IDUlO1xcclxcbiAgfVxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWNoYWxrLWdyZXk7XFxyXFxuICAuaGVhZGVyNHtcXHJcXG4gICAgcGFkZGluZy1ibG9jazogMTBweCAyMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBjb2xvcjogJGNvbG9yLXJlZDtcXHJcXG4gIH1cXHJcXG4gIC5kZXNjcmlwdGlvbl90ZXh0e1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBjb2xvcjogJGNvbG9yLWZvbnQtd2hpdGU7XFxyXFxuICB9XFxyXFxuICAud29ya291dF9pbWdhZ2VzLCB1bCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcXHJcXG4gICAgfVxcclxcbiAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjAlO1xcclxcbiAgICB9XFxyXFxuICAgIC53b3Jrb3V0X2ltYWdlIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtYmFja2dyb3VuZDtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgQGluY2x1ZGUgZGVza3RvcHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICBtYXJnaW46IDUlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgaW1nIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGRlc2t0b3B7XFxyXFxuICAgICAgICAgIC8vbWluLWhlaWdodDogMjAwcHg7XFxyXFxuICAgICAgICAgIG1heC1oZWlnaHQ6IDMyMHB4O1xcclxcbiAgICAgICAgICBtYXgtd2lkdGg6IDI4MHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMjBweDtcXHJcXG4gICAgICAgICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbi5maWd1cmVzX2NvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtYmFja2dyb3VuZDtcXHJcXG5cXHJcXG4gIC5tYWluX3BhZ2VfZmlndXJlcyB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXHJcXG4gICAgLmZpZ3VyZXNfcGFnZV9oZWFkIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcblxcclxcbiAgICAgIC5maWd1cmVzX3N0cmlwZSB7XFxyXFxuICAgICAgICB3aWR0aDogNTc1cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzdDN0M3O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5maWd1cmVzX2NpcmNsZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtYmFja2dyb3VuZDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHRvcDogLTEwcHg7XFxyXFxuICAgICAgICBvcGFjaXR5OiA1NSU7XFxyXFxuICAgICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgICAgICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuaGVhZGVyMyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5LCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hZGRfZmlndXJlIHtcXHJcXG4gICAgICB3aWR0aDogMTEwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1ibGFjay1iYWNrZ3JvdW5kO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHJpZ2h0OiAxNSU7XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgYSB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgICAgIGNvbG9yOiAkY29sb3ItZm9udC13aGl0ZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiA4cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmlndXJlc19zcGFjZV9pbWcge1xcclxcbiAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltZy9QRF9pbWdfM19zenBhZ2F0LmpwZWdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgei1pbmRleDogMjAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0yNzBweDtcXHJcXG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3O1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmlndXJlc19ib3gge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG5cXHJcXG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRlc2NyaXB0aW9uX3RleHR7XFxyXFxuICAgICAgd2lkdGg6IDYwMHB4O1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmlndXJlcyB1bCB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxyXFxuXFxyXFxuICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5maWd1cmUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXk7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgICAgICAgIGhlaWdodDogMjUwcHg7XFxyXFxuICAgICAgICAgIHdpZHRoOiAyMzBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgICAgIG1hcmdpbjogNSU7XFxyXFxuICAgICAgICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIGltZ3tcXHJcXG4gICAgICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMjMwcHg7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMjBweDtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcblxcclxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEyMHB4O1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogODBweDtcXHJcXG4gICAgICAgICAgfX1cXHJcXG5cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG59XCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuXFxyXFxuLmNvbnRhY3RfYm94IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5LCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMCU7XFxyXFxuICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3Qge1xcclxcbiAgICAuaGVhZGVyMSB7XFxyXFxuICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhY3RfaW5mbyB7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJsb2NrOiAxNXB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuZGVzY3JpcHRpb25fdGV4dCB7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmhlYWRlcjMge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuYWRkcmVzcyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuXFxyXFxuICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9ybV9tZXNzYWdlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wZXJzb25hbF9kYXRlIHtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGdhcDogNXB4O1xcclxcblxcclxcbiAgICAgIGxhYmVsIHtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaW5wdXQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgbGVmdDogMTkwcHg7XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIC5jYXNlQWRke1xcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2FzZSwgLmZpZ3VyZV9sZXZlbCwgLmZpZ3VyZV9jYXRlZ29yeSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgd2lkdGg6IDkzJTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgc2VsZWN0IHtcXHJcXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgOjpzZWxlY3Rpb24ge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c3RlZWxibHVlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIG9wdGlvbiB7XFxyXFxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5maWd1cmVfYWRkX2NhdGVnb3J5IHtcXHJcXG4gICAgICB3aWR0aDogMzkwcHg7XFxyXFxuICAgICAgLy9kaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAgICAgcCB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib3hfbWVzc2FnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcXHJcXG4gICAgICB3aWR0aDogOTMlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aXRsZV9tZXNzYWdlIHtcXHJcXG4gICAgICBwYWRkaW5nLWJsb2NrOiAxMHB4O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRleHRhcmVhIHtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgcmVzaXplOiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hZ3JlZW1lbnQge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3ggaW5wdXQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGhlaWdodDogMTBweDtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3gge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IHNwYW4ge1xcclxcbiAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgZmxleC1iYXNpczogMTBweDtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlndXJlX2FkZF9jYXRlZ29yeSB7XFxyXFxuICAuY2hlY2tib3hfY2F0ZWdvcnkgc3BhbiB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCBpbnB1dDpjaGVja2VkICsgc3BhbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc29mdC1ncmV5O1xcclxcbiAgYm9yZGVyOiAycHggbGlnaHRibHVlIHNvbGlkO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZmlndXJlX2NhdGVnb3JpZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdCB7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggYmxhY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogMjUlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4ubm90X3JlYWR5IC5tYWluX3BhZ2Uge1xcclxcbiAgaGVpZ2h0OiA4OHZoO1xcclxcbiAgLmhlYWRlcjIge1xcclxcbiAgICB3aWR0aDogMjUlO1xcclxcbiAgICBhIHtcXHJcXG4gICAgICBjb2xvcjogY2FkZXRibHVlO1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbi5wb3JhZHlfcGFnZXtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nLzIuanBlZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogLTI1MHB4O1xcclxcbiAgLmhlYWRlcjF7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbiAgfVxcclxcbiAgLmhlYWRlcjN7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG4uYWR2aWNlMSwgLmFkdmljZTN7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtYmFja2dyb3VuZDtcXHJcXG4gIG1hcmdpbjogMjBweCA1MHB4IDEyMHB4IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbi5hZHZpY2Uye1xcclxcbiAgbWFyZ2luOiAyMHB4IDUwcHggMTIwcHggNTBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1jaGFsay1ncmV5O1xcclxcbiAgb3BhY2l0eTogNzUlO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG5cXHJcXG4gIC5jaXJjbGVzX2FkdmljZV9ib3h7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLmNpcmNsZV9hZHZpY2V7XFxyXFxuICAgICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAuaGVhZGVyMywgcHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQwYmE2NjlhNDIzNDc2YzAwYWI0XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9