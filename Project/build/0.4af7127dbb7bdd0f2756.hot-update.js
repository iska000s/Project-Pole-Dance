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
  margin-left: 10vw;
}
@media (max-width: 736px) {
  .main_page {
    background-size: 100%;
    width: 90%;
    margin-left: 15vw;
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
  width: 100%;
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
}`, "",{"version":3,"sources":["webpack://./Project/scss/settings/_reset.scss","webpack://./Project/scss/index.scss","webpack://./Project/scss/sections/_header.scss","webpack://./Project/scss/settings/_mixins.scss","webpack://./Project/scss/settings/_variables.scss","webpack://./Project/scss/sections/_aside.scss","webpack://./Project/scss/sections/_footer.scss","webpack://./Project/scss/sections/_main-page.scss","webpack://./Project/scss/sections/_workout.scss","webpack://./Project/scss/sections/_figures.scss","webpack://./Project/scss/sections/_concact.scss","webpack://./Project/scss/sections/_not_ready_page.scss","webpack://./Project/scss/sections/_advice.scss"],"names":[],"mappings":"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","sourcesContent":["/* Eric Meyer's CSS Reset\r\n   http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n   This is a Sass partial\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n  display: block;\r\n}\r\nbody {\r\n  line-height: 1;\r\n}\r\nol, ul {\r\n  list-style: none;\r\n}\r\nblockquote, q {\r\n  quotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n  content: '';\r\n  content: none;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n","@import 'settings/reset';\r\n@import \"settings/variables\";\r\n@import \"settings/mixins\";\r\n\r\n@import \"sections/header\";\r\n@import \"sections/aside\";\r\n@import \"sections/footer\";\r\n@import \"sections/main-page\";\r\n@import \"sections/workout\";\r\n@import \"sections/figures\";\r\n@import \"sections/concact\";\r\n@import \"sections/not_ready_page\";\r\n@import \"sections/advice\";\r\n\r\n\r\n.page_container{\r\n  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n  // position: absolute;\r\n  // box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n  //background-color: $color-black-background;\r\n}\r\n.main_container{\r\n  width: 100%;\r\n}\r\n// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1\r\n// .page_container{\r\n//   position: relative;\r\n//   box-sizing: border-box;\r\n//   display: flex;\r\n//   flex-direction: row;\r\n//   height: 100%;\r\n//   width: 100%;\r\n//   overflow-x: hidden;\r\n//   //background-color: $color-black-background;\r\n// }\r\n// .main_container{\r\n//   position: relative;\r\n//   width: 90%;\r\n//   height: 100%;\r\n//   clear: both;\r\n//   right: -15%;\r\n//   background-color: $color-white-background;\r\n//   @include mobile{\r\n//     position: relative;\r\n//     width: 80%;\r\n//     right: -15%;\r\n//   }\r\n// }\r\n\r\n.header1{\r\n  font-family: $font-primary, sans-serif;\r\n  font-weight: 300;\r\n  @include desktop {\r\n    font-size: 50px;\r\n    margin: 0 0 20px 0;\r\n    padding-top: 40px;\r\n  }\r\n  @include mobile{\r\n    font-size: 30px;\r\n    margin-block: 20px;\r\n  }\r\n}\r\n\r\n.header2{\r\n  font-family: $font-primary;\r\n  @include desktop {\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n  }\r\n  @include mobile{\r\n    font-size: 14px;\r\n  }\r\n  .chosen{\r\n    color: $color-red;\r\n    text-decoration: none;\r\n  }\r\n  .not_chosen{\r\n    text-decoration: none;\r\n    color: $color-font-black;\r\n  }\r\n}\r\n.header3{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.menu_main-container {\r\n  height: 60px;\r\n  top: 10px;\r\n  background-color: white;\r\n  z-index: 500;\r\n  position: sticky;\r\n  box-shadow: 2px 3px 3px 2px $color-soft-grey;\r\n  //border-bottom: 2px black solid;\r\n  @include mobile {\r\n    width: 90vw;\r\n  }\r\n  .menu_main {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    @include desktop {\r\n      gap: 22px;\r\n      margin-left: 60px;\r\n    }\r\n    @include mobile{\r\n      gap: 5%;\r\n      margin-left: 5%;\r\n      line-height: 10px;\r\n    }\r\n    .menu_main_element, a{\r\n\r\n      @include desktop{\r\n        font-size: 16px;\r\n      }\r\n      @include mobile{\r\n        font-size: 90%;\r\n      }\r\n      flex-direction: row;\r\n      font-family: $font-primary;\r\n      font-weight: 300;\r\n      color: $color-font-black;\r\n      text-decoration: none;\r\n    }\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n\r\n@mixin desktop {\r\n  @media (min-width: 736px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile {\r\n  @media (max-width: 736px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin header1 {\r\n  font-family: $font-primary;\r\n  font-size: 50px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin header2{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin header3{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin description{\r\n  font-family: $font-primary;\r\n  font-size: 14px;\r\n  color: $color-font-black;\r\n}","\r\n$color-font-black: #000000;\r\n$color-font-white: #FFFFFF;\r\n\r\n$color-red: #B02323;\r\n$color-black-background: #000000;\r\n$color-nearly-black: #1E1E1E;\r\n$color-white-background: #FFFFFF;\r\n$color-soft-grey: #D8D8D8;\r\n$color-chalk-grey: #D6D6D6;\r\n$color-grey: #595959;\r\n\r\n$font-primary: Roboto;","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.menu_aside-container {\r\n  height: 100%;\r\n  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n  // position: absolute;\r\n  .menu_aside {\r\n    position: fixed;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-top: 103px;\r\n    gap: 18px;\r\n    height: 100%;\r\n    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n    width: 10vw;\r\n    background-color: $color-black-background;\r\n    @include mobile{\r\n      width: 15vw;\r\n    }\r\n    .menu_aside_element {\r\n      margin: 0 0 0 15px;\r\n      @include mobile {\r\n      margin: 0 0 0 2px;\r\n      }\r\n      a{\r\n        text-decoration: none;\r\n        font-size: 14px;\r\n        font-family: $font-primary, sans-serif;\r\n        font-weight: bold;\r\n        color: $color-font-white;\r\n        @include mobile{\r\n          font-size: 58%;\r\n          font-weight: 300;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.footer_container{\r\n  clear: both;\r\n  position: fixed;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  width: 90%;\r\n  height: 80px;\r\n  background-color: #000000;\r\n  @include mobile{\r\n    width: 90%;\r\n    right: 0;\r\n  }\r\n\r\n  .menu_footer{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 50px;\r\n    width: 100%;\r\n    padding: 0 30px 0 30px;\r\n    // background-color: $color-nearly-black;\r\n    @include mobile{\r\n      padding: 5px;\r\n      justify-content: space-around;\r\n    }\r\n    .menu_footer_list{\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: center;\r\n      gap: 50px;\r\n      margin: 0 15px 0 0;\r\n\r\n      @include mobile{\r\n        gap: 10%;\r\n      }\r\n      a {\r\n        font-family: $font-primary;\r\n        font-size: 12px;\r\n        text-decoration: none;\r\n        color: #928E8E;\r\n        @include mobile{\r\n          font-size: 14px;\r\n        }\r\n      }\r\n    }\r\n    a{\r\n      color: $color-soft-grey;\r\n    }\r\n  }\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.one_pager{\r\n// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n  // height: 90vh;\r\n}\r\n.main_page{\r\n  //background-image: url(\"../img/img_main_page.jpeg\");\r\n  background-image: url(\"../img/img_main_page.jpeg\");\r\n  background-repeat: no-repeat;\r\n  z-index: 200;\r\n  margin-left: 10vw;\r\n  @include desktop {\r\n    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n    // background-attachment: fixed;\r\n    // background-size: 66.5%;\r\n    // background-position: right;\r\n    // margin-left: 60px;\r\n  }\r\n  @include mobile{\r\n    background-size: 100%;\r\n    width: 90%;\r\n    margin-left: 15vw;\r\n    right: 10px;\r\n  }\r\n\r\n\r\n  .circles_workout-container{\r\n    display: flex;\r\n    @include mobile {\r\n      flex-wrap: wrap;\r\n      justify-content: space-around;\r\n    }\r\n\r\n    .circles_workout{\r\n      background-color: $color-white-background;\r\n      border-radius: 50%;\r\n      width: 170px;\r\n      height: 170px;\r\n      flex-direction: row;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      margin-right: 20px;\r\n      @include mobile{\r\n        width: 100px;\r\n        height: 100px;\r\n        margin: 0;\r\n      }\r\n    }\r\n\r\n  }\r\n  .circles_workout-container :nth-of-type(1){\r\n    border: 10px #E7E6E6 solid;\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n  .circles_workout-container :nth-child(2){\r\n    border: 10px #CCCBCB solid;\r\n    position: relative;\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n  .circles_workout-container :nth-of-type(3){\r\n    border: 10px #9D9D9D solid;\r\n    position: relative;\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n.about_platform{\r\n  width: 295px;\r\n\r\n  .about_platform_text{\r\n    margin-right: 20px;\r\n    padding-bottom: 20px;\r\n    font-family: $font-primary;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n\r\n  }\r\n}\r\n  .header3 {\r\n    margin-block: 20px 10px;\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n\r\n.workout{\r\n  @include desktop {\r\n    padding-left: 60px;\r\n  }\r\n  @include mobile{\r\n    padding: 5%;\r\n  }\r\n  background-color: $color-chalk-grey;\r\n  .header4{\r\n    padding-block: 10px 20px;\r\n    font-family: $font-primary;\r\n    font-size: 24px;\r\n    font-weight: 300;\r\n    color: $color-red;\r\n  }\r\n  .description_text{\r\n    margin-bottom: 20px;\r\n    font-family: $font-primary;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: $color-font-white;\r\n  }\r\n  .workout_imgages, ul {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    @include desktop {\r\n      margin-right: 100px;\r\n      margin-bottom: 60px;\r\n    }\r\n    @include mobile{\r\n      margin-bottom: 20%;\r\n    }\r\n    .workout_image {\r\n      background-color: $color-white-background;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n\r\n      @include desktop{\r\n        margin-right: 40px;\r\n        margin-bottom: 50px;\r\n        height: 350px;\r\n        width: 300px;\r\n      }\r\n      @include mobile{\r\n        margin: 5%;\r\n        height: 150px;\r\n        width: 100px;\r\n      }\r\n      img {\r\n        @include desktop{\r\n          //min-height: 200px;\r\n          max-height: 320px;\r\n          max-width: 280px;\r\n        }\r\n        @include mobile{\r\n          max-height: 120px;\r\n          width: 80px;\r\n        }\r\n\r\n      }\r\n    }\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.figures_container {\r\n  background-color: $color-white-background;\r\n\r\n  .main_page_figures {\r\n    padding-bottom: 100px;\r\n    .figures_page_head {\r\n      display: flex;\r\n      flex-direction: row;\r\n      margin-top: 50px;\r\n      margin-bottom: 20px;\r\n\r\n      .figures_stripe {\r\n        width: 575px;\r\n        height: 40px;\r\n        background-color: #C7C7C7;\r\n        display: flex;\r\n        flex-direction: row;\r\n      }\r\n\r\n      .figures_circle {\r\n        background-color: $color-white-background;\r\n        border-radius: 50%;\r\n        position: relative;\r\n        top: -10px;\r\n        opacity: 55%;\r\n        @include desktop {\r\n          width: 60px;\r\n          height: 60px;\r\n          margin: 0 10px 0 10px;\r\n        }\r\n        @include mobile {\r\n          top: 0;\r\n          width: 30px;\r\n          height: 30px;\r\n        }\r\n      }\r\n\r\n      .header3 {\r\n        display: flex;\r\n        align-items: center;\r\n        height: 100%;\r\n        font-family: $font-primary, sans-serif;\r\n        font-weight: 300;\r\n        @include desktop {\r\n          font-size: 24px;\r\n        }\r\n        @include mobile {\r\n          font-size: 16px;\r\n        }\r\n      }\r\n    }\r\n\r\n    .add_figure {\r\n      width: 110px;\r\n      height: 40px;\r\n      background: $color-black-background;\r\n      border-radius: 30%;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      position: absolute;\r\n      right: 15%;\r\n      @include mobile{\r\n        width: 30px;\r\n        right: 0;\r\n      }\r\n      a {\r\n        font-family: $font-primary;\r\n        color: $color-font-white;\r\n        font-size: 14px;\r\n        text-decoration: none;\r\n        @include mobile{\r\n          font-size: 8px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .figures_space_img {\r\n    height: 350px;\r\n    background-image: url(\"../img/PD_img_3_szpagat.jpeg\");\r\n    background-repeat: no-repeat;\r\n    z-index: 200;\r\n    background-position-y: -270px;\r\n    @include desktop {\r\n      background-attachment: fixed;\r\n      background-size: 100vw;\r\n    }\r\n    @include mobile {\r\n      height: 150px;\r\n      background-size: 100%;\r\n      background-position: 200% 0;\r\n    }\r\n  }\r\n\r\n  .figures_box {\r\n    padding-top: 20px;\r\n\r\n    @include desktop {\r\n      padding-left: 60px;\r\n    }\r\n    @include mobile {\r\n      padding-left: 10%;\r\n    }\r\n    .description_text{\r\n      width: 600px;\r\n      margin-bottom: 20px;\r\n      font-family: $font-primary;\r\n      font-size: 14px;\r\n      font-weight: 400;\r\n      color: $color-font-black;\r\n      @include mobile{\r\n        width: 90%;\r\n        margin-bottom: 10px;\r\n      }\r\n    }\r\n\r\n    .figures ul {\r\n      display: flex;\r\n      flex-direction: row;\r\n      flex-wrap: wrap;\r\n      justify-content: left;\r\n\r\n      @include desktop {\r\n        margin-right: 80px;\r\n      }\r\n      .figure {\r\n        background-color: $color-grey;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        @include desktop {\r\n          margin-right: 10px;\r\n          margin-bottom: 10px;\r\n          height: 250px;\r\n          width: 230px;\r\n        }\r\n        @include mobile {\r\n          margin: 5%;\r\n          height: 150px;\r\n          width: 100px;\r\n        }\r\n        img{\r\n          @include desktop {\r\n            max-height: 230px;\r\n            max-width: 220px;\r\n          }\r\n          @include mobile {\r\n\r\n            max-height: 120px;\r\n            max-width: 80px;\r\n          }}\r\n\r\n      }\r\n    }\r\n  }\r\n\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n\r\n.contact_box {\r\n  font-family: $font-primary, sans-serif;\r\n  margin-top: 30px;\r\n  margin-left: 40px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 10%;\r\n  @include mobile {\r\n    flex-direction: column;\r\n    align-items: start;\r\n    margin-left: 20px;\r\n    margin-bottom: 60px;\r\n    height: 100vh;\r\n  }\r\n\r\n  .contact {\r\n    .header1 {\r\n      margin: 0;\r\n      padding: 0;\r\n    }\r\n\r\n    .contact_info {\r\n      font-weight: 300;\r\n      @include desktop {\r\n        font-size: 20px;\r\n        padding-top: 20px;\r\n      }\r\n      @include mobile {\r\n        font-size: 14px;\r\n        margin-block: 15px;\r\n      }\r\n\r\n      .description_text {\r\n        line-height: 30px;\r\n      }\r\n\r\n      .header3 {\r\n        margin-top: 50px;\r\n        margin-bottom: 15px;\r\n        @include mobile {\r\n          margin-top: 20px;\r\n        }\r\n      }\r\n\r\n      .address {\r\n        font-size: 16px;\r\n\r\n        a {\r\n          padding-left: 10px;\r\n          text-decoration: none;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .form_message {\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 50%;\r\n    gap: 5px;\r\n    @include mobile{\r\n      width: 100%;\r\n    }\r\n\r\n    .personal_date {\r\n      position: relative;\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 5px;\r\n\r\n      label {\r\n        font-weight: 600;\r\n        width: 300px;\r\n        margin-bottom: 20px;\r\n        display: flex;\r\n        align-items: center\r\n      }\r\n\r\n      input {\r\n        font-size: 12px;\r\n        width: 200px;\r\n        height: 20px;\r\n        position: absolute;\r\n        left: 190px;\r\n        @include mobile{\r\n          width: 40%;\r\n        }\r\n      }\r\n    }\r\n    .caseAdd{\r\n      @include mobile{\r\n        width: 100%;\r\n      }\r\n    }\r\n\r\n    .case, .figure_level, .figure_category {\r\n      font-size: 12px;\r\n      font-family: $font-primary;\r\n      width: 400px;\r\n      height: 20px;\r\n      margin-bottom: 15px;\r\n      cursor: pointer;\r\n      @include mobile{\r\n        width: 93%;\r\n      }\r\n    }\r\n\r\n    select {\r\n      -webkit-border-radius: 25px;\r\n      -moz-border-radius: 25px;\r\n      border-radius: 25px;\r\n    }\r\n\r\n    ::selection {\r\n      background-color: lightsteelblue;\r\n    }\r\n\r\n    option {\r\n      -webkit-border-radius: 25px;\r\n      -moz-border-radius: 25px;\r\n      border-radius: 25px;\r\n    }\r\n\r\n    .figure_add_category {\r\n      width: 390px;\r\n      //display: flex;\r\n      flex-direction: column;\r\n\r\n      p {\r\n        font-weight: 600;\r\n        margin-bottom: 15px;\r\n      }\r\n\r\n    }\r\n  }\r\n\r\n  .box_message {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 400px;\r\n    @include mobile {\r\n      padding-bottom: 60px;\r\n      width: 93%;\r\n    }\r\n\r\n    .title_message {\r\n      padding-block: 10px;\r\n      font-weight: 600;\r\n    }\r\n\r\n    .textarea {\r\n      margin-bottom: 5px;\r\n      resize: none;\r\n    }\r\n\r\n    .agreement {\r\n      font-size: 10px;\r\n    }\r\n\r\n  }\r\n\r\n}\r\n\r\n.checkbox input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  height: 10px;\r\n  width: 10px;\r\n}\r\n\r\n.checkbox {\r\n  cursor: pointer;\r\n  display: flex;\r\n}\r\n\r\n.checkbox span {\r\n  height: 10px;\r\n  width: 10px;\r\n  border: 2px solid grey;\r\n  flex-basis: 10px;\r\n  flex-shrink: 0;\r\n  cursor: pointer;\r\n  margin-right: 10px;\r\n}\r\n\r\n.figure_add_category {\r\n  .checkbox_category span {\r\n    border: 2px solid grey;\r\n  }\r\n}\r\n\r\n.checkbox input:checked + span {\r\n  background-color: $color-soft-grey;\r\n  border: 2px lightblue solid;\r\n\r\n}\r\n\r\n.figure_categories {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n}\r\n\r\n.submit {\r\n  font-family: $font-primary;\r\n  width: 80px;\r\n  height: 20px;\r\n  font-weight: 300;\r\n  background-color: $color-grey;\r\n  color: white;\r\n  border: none;\r\n  box-shadow: 1px 2px 5px black;\r\n  margin-left: 25%;\r\n  cursor: pointer;\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.not_ready .main_page {\r\n  height: 88vh;\r\n  .header2 {\r\n    width: 25%;\r\n    a {\r\n      color: cadetblue;\r\n      line-height: 40px;\r\n    }\r\n  }\r\n}\r\n\r\n\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.porady_page{\r\n  background-image: url(\"../img/2.jpeg\");\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-position-y: -250px;\r\n  .header1{\r\n    margin-left: 50px;\r\n  }\r\n  .header3{\r\n    padding-bottom: 30px;\r\n  }\r\n}\r\n.advice1, .advice3{\r\n  background-color: $color-white-background;\r\n  margin: 20px 50px 120px 50px;\r\n  padding: 20px;\r\n  line-height: 20px;\r\n  font-family: $font-primary;\r\n  font-weight: 300;\r\n}\r\n\r\n.advice2{\r\n  margin: 20px 50px 120px 50px;\r\n  padding: 20px;\r\n  line-height: 20px;\r\n  font-family: $font-primary;\r\n  font-weight: 300;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-self: center;\r\n  align-items: center;\r\n  background-color: $color-chalk-grey;\r\n  opacity: 75%;\r\n  width: 70%;\r\n\r\n  .circles_advice_box{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n    .circle_advice{\r\n      width: 30%;\r\n      justify-content: center;\r\n      .header3, p{\r\n        display: flex;\r\n        justify-content: center;\r\n      }\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("75c7880611959e4f1518")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40YWY3MTI3ZGJiN2JkZDBmMjc1Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QyxpRUFBNEM7QUFDeEYsNENBQTRDLGlFQUErQztBQUMzRiw0Q0FBNEMsaUVBQWdDO0FBQzVFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHlyQkFBeXJCLEtBQUssaUJBQWlCLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sV0FBVyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsWUFBWSxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sYUFBYSxhQUFhLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLGFBQWEsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxhQUFhLGFBQWEsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxZQUFZLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxZQUFZLFlBQVksVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE9BQU8sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxRQUFRLE9BQU8sVUFBVSxVQUFVLFFBQVEsT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxhQUFhLGFBQWEsUUFBUSxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsUUFBUSxPQUFPLFlBQVksV0FBVyxVQUFVLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsUUFBUSxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FB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LE9BQU8sS0FBSyx3Q0FBd0MseUNBQXlDLGtDQUFrQyxTQUFTLDRCQUE0QixvQkFBb0IsMEJBQTBCLHNCQUFzQixlQUFlLEtBQUssaUJBQWlCLGlDQUFpQyxrQkFBa0IsbUJBQW1CLHVCQUF1QixvQ0FBb0MsbUJBQW1CLG1CQUFtQixvQ0FBb0MsdUJBQXVCLHNCQUFzQixLQUFLLHlDQUF5QyxtQ0FBbUMsK0JBQStCLG1CQUFtQixnQkFBZ0IsbUJBQW1CLFdBQVcsMkJBQTJCLDRCQUE0QixTQUFTLE9BQU8sS0FBSyxpREFBaUQsbUNBQW1DLHFCQUFxQiwrQ0FBK0MsbUNBQW1DLDZCQUE2QixvQkFBb0IsNkJBQTZCLG9DQUFvQyxlQUFlLDBCQUEwQixPQUFPLGVBQWUsNkJBQTZCLE9BQU8sS0FBSyx1QkFBdUIsZ0RBQWdELG1DQUFtQyxvQkFBb0Isd0JBQXdCLGlDQUFpQyx1QkFBdUIsS0FBSyxpQkFBaUIsbUNBQW1DLG9CQUFvQix3QkFBd0IsaUNBQWlDLHVCQUF1QixvQkFBb0IsNkJBQTZCLHlCQUF5QiwwQkFBMEIsMENBQTBDLG1CQUFtQixpQkFBaUIsOEJBQThCLHNCQUFzQiw0QkFBNEIsc0NBQXNDLG9CQUFvQix1QkFBdUIscUJBQXFCLGtDQUFrQyxzQkFBc0IsMEJBQTBCLG9DQUFvQyxXQUFXLFNBQVMsT0FBTyxLQUFLLG1CQUFtQjtBQUMvbDRCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7OztVQzkyQnZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2ltZ19tYWluX3BhZ2UuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltZy9QRF9pbWdfM19zenBhZ2F0LmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvMi5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEVyaWMgTWV5ZXIncyBDU1MgUmVzZXRcbiAgIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4gICBUaGlzIGlzIGEgU2FzcyBwYXJ0aWFsXG4qL1xuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsIHEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4ubWVudV9tYWluLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNjBweDtcbiAgdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogNTAwO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3gtc2hhZG93OiAycHggM3B4IDNweCAycHggI0Q4RDhEODtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWVudV9tYWluLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwdnc7XG4gIH1cbn1cbi5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfbWFpbi1jb250YWluZXIgLm1lbnVfbWFpbiB7XG4gICAgZ2FwOiAyMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfbWFpbi1jb250YWluZXIgLm1lbnVfbWFpbiB7XG4gICAgZ2FwOiA1JTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIH1cbn1cbi5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4gLm1lbnVfbWFpbl9lbGVtZW50LCAubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIGEge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4gLm1lbnVfbWFpbl9lbGVtZW50LCAubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIGEge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4gLm1lbnVfbWFpbl9lbGVtZW50LCAubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIGEge1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICB9XG59XG5cbi5tZW51X2FzaWRlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tZW51X2FzaWRlLWNvbnRhaW5lciAubWVudV9hc2lkZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDEwM3B4O1xuICBnYXA6IDE4cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfYXNpZGUtY29udGFpbmVyIC5tZW51X2FzaWRlIHtcbiAgICB3aWR0aDogMTV2dztcbiAgfVxufVxuLm1lbnVfYXNpZGUtY29udGFpbmVyIC5tZW51X2FzaWRlIC5tZW51X2FzaWRlX2VsZW1lbnQge1xuICBtYXJnaW46IDAgMCAwIDE1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfYXNpZGUtY29udGFpbmVyIC5tZW51X2FzaWRlIC5tZW51X2FzaWRlX2VsZW1lbnQge1xuICAgIG1hcmdpbjogMCAwIDAgMnB4O1xuICB9XG59XG4ubWVudV9hc2lkZS1jb250YWluZXIgLm1lbnVfYXNpZGUgLm1lbnVfYXNpZGVfZWxlbWVudCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWVudV9hc2lkZS1jb250YWluZXIgLm1lbnVfYXNpZGUgLm1lbnVfYXNpZGVfZWxlbWVudCBhIHtcbiAgICBmb250LXNpemU6IDU4JTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG59XG5cbi5mb290ZXJfY29udGFpbmVyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZvb3Rlcl9jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbn1cbi5mb290ZXJfY29udGFpbmVyIC5tZW51X2Zvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAzMHB4IDAgMzBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZm9vdGVyX2NvbnRhaW5lciAubWVudV9mb290ZXIge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxufVxuLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIC5tZW51X2Zvb3Rlcl9saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1MHB4O1xuICBtYXJnaW46IDAgMTVweCAwIDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIC5tZW51X2Zvb3Rlcl9saXN0IHtcbiAgICBnYXA6IDEwJTtcbiAgfVxufVxuLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIC5tZW51X2Zvb3Rlcl9saXN0IGEge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM5MjhFOEU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIC5tZW51X2Zvb3Rlcl9saXN0IGEge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIGEge1xuICBjb2xvcjogI0Q4RDhEODtcbn1cblxuLm1haW5fcGFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgei1pbmRleDogMjAwO1xuICBtYXJnaW4tbGVmdDogMTB2dztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWFpbl9wYWdlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tbGVmdDogMTV2dztcbiAgICByaWdodDogMTBweDtcbiAgfVxufVxuLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG59XG4ubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIC5jaXJjbGVzX3dvcmtvdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNzBweDtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIC5jaXJjbGVzX3dvcmtvdXQge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMSkge1xuICBib3JkZXI6IDEwcHggI0U3RTZFNiBzb2xpZDtcbn1cbi5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1vZi10eXBlKDEpIGgyLCAubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgxKSBhIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLWNoaWxkKDIpIHtcbiAgYm9yZGVyOiAxMHB4ICNDQ0NCQ0Igc29saWQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1jaGlsZCgyKSBoMiwgLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLWNoaWxkKDIpIGEge1xuICBib3JkZXI6IG5vbmU7XG59XG4ubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgzKSB7XG4gIGJvcmRlcjogMTBweCAjOUQ5RDlEIHNvbGlkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgzKSBoMiwgLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMykgYSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5tYWluX3BhZ2UgLmFib3V0X3BsYXRmb3JtIHtcbiAgd2lkdGg6IDI5NXB4O1xufVxuLm1haW5fcGFnZSAuYWJvdXRfcGxhdGZvcm0gLmFib3V0X3BsYXRmb3JtX3RleHQge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ubWFpbl9wYWdlIC5oZWFkZXIzIHtcbiAgbWFyZ2luLWJsb2NrOiAyMHB4IDEwcHg7XG59XG5cbi53b3Jrb3V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q2RDZENjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAud29ya291dCB7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLndvcmtvdXQge1xuICAgIHBhZGRpbmc6IDUlO1xuICB9XG59XG4ud29ya291dCAuaGVhZGVyNCB7XG4gIHBhZGRpbmctYmxvY2s6IDEwcHggMjBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogI0IwMjMyMztcbn1cbi53b3Jrb3V0IC5kZXNjcmlwdGlvbl90ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi53b3Jrb3V0IC53b3Jrb3V0X2ltZ2FnZXMsIC53b3Jrb3V0IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAud29ya291dCAud29ya291dF9pbWdhZ2VzLCAud29ya291dCB1bCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLndvcmtvdXQgLndvcmtvdXRfaW1nYWdlcywgLndvcmtvdXQgdWwge1xuICAgIG1hcmdpbi1ib3R0b206IDIwJTtcbiAgfVxufVxuLndvcmtvdXQgLndvcmtvdXRfaW1nYWdlcyAud29ya291dF9pbWFnZSwgLndvcmtvdXQgdWwgLndvcmtvdXRfaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAud29ya291dCAud29ya291dF9pbWdhZ2VzIC53b3Jrb3V0X2ltYWdlLCAud29ya291dCB1bCAud29ya291dF9pbWFnZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAud29ya291dCAud29ya291dF9pbWdhZ2VzIC53b3Jrb3V0X2ltYWdlLCAud29ya291dCB1bCAud29ya291dF9pbWFnZSB7XG4gICAgbWFyZ2luOiA1JTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC53b3Jrb3V0IC53b3Jrb3V0X2ltZ2FnZXMgLndvcmtvdXRfaW1hZ2UgaW1nLCAud29ya291dCB1bCAud29ya291dF9pbWFnZSBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDMyMHB4O1xuICAgIG1heC13aWR0aDogMjgwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAud29ya291dCAud29ya291dF9pbWdhZ2VzIC53b3Jrb3V0X2ltYWdlIGltZywgLndvcmtvdXQgdWwgLndvcmtvdXRfaW1hZ2UgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgICB3aWR0aDogODBweDtcbiAgfVxufVxuXG4uZmlndXJlc19jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cbi5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIC5maWd1cmVzX3N0cmlwZSB7XG4gIHdpZHRoOiA1NzVweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzdDN0M3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuZmlndXJlc19wYWdlX2hlYWQgLmZpZ3VyZXNfY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwcHg7XG4gIG9wYWNpdHk6IDU1JTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5maWd1cmVzX3BhZ2VfaGVhZCAuZmlndXJlc19jaXJjbGUge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5maWd1cmVzX3BhZ2VfaGVhZCAuZmlndXJlc19jaXJjbGUge1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIC5oZWFkZXIzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIC5oZWFkZXIzIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5maWd1cmVzX3BhZ2VfaGVhZCAuaGVhZGVyMyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5hZGRfZmlndXJlIHtcbiAgd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDMwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1JTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5hZGRfZmlndXJlIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICByaWdodDogMDtcbiAgfVxufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuYWRkX2ZpZ3VyZSBhIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmFkZF9maWd1cmUgYSB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19zcGFjZV9pbWcge1xuICBoZWlnaHQ6IDM1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHotaW5kZXg6IDIwMDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMjcwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX3NwYWNlX2ltZyB7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX3NwYWNlX2ltZyB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwO1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCB7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmRlc2NyaXB0aW9uX3RleHQge1xuICB3aWR0aDogNjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZGVzY3JpcHRpb25fdGV4dCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5maWd1cmVzIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZmlndXJlcyB1bCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5maWd1cmVzIHVsIC5maWd1cmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1OTU5O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmZpZ3VyZXMgdWwgLmZpZ3VyZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogMjMwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5maWd1cmVzIHVsIC5maWd1cmUge1xuICAgIG1hcmdpbjogNSU7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5maWd1cmVzIHVsIC5maWd1cmUgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAyMzBweDtcbiAgICBtYXgtd2lkdGg6IDIyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZmlndXJlcyB1bCAuZmlndXJlIGltZyB7XG4gICAgbWF4LWhlaWdodDogMTIwcHg7XG4gICAgbWF4LXdpZHRoOiA4MHB4O1xuICB9XG59XG5cbi5jb250YWN0X2JveCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3gge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5jb250YWN0IC5oZWFkZXIxIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8ge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5jb250YWN0X2JveCAuY29udGFjdCAuY29udGFjdF9pbmZvIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3ggLmNvbnRhY3QgLmNvbnRhY3RfaW5mbyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ibG9jazogMTVweDtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8gLmRlc2NyaXB0aW9uX3RleHQge1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cbi5jb250YWN0X2JveCAuY29udGFjdCAuY29udGFjdF9pbmZvIC5oZWFkZXIzIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3ggLmNvbnRhY3QgLmNvbnRhY3RfaW5mbyAuaGVhZGVyMyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8gLmFkZHJlc3Mge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGFjdF9ib3ggLmNvbnRhY3QgLmNvbnRhY3RfaW5mbyAuYWRkcmVzcyBhIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwJTtcbiAgZ2FwOiA1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAucGVyc29uYWxfZGF0ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cHg7XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAucGVyc29uYWxfZGF0ZSBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5wZXJzb25hbF9kYXRlIGlucHV0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxOTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAucGVyc29uYWxfZGF0ZSBpbnB1dCB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5jYXNlQWRkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLmNhc2UsIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5maWd1cmVfbGV2ZWwsIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5maWd1cmVfY2F0ZWdvcnkge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLmNhc2UsIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5maWd1cmVfbGV2ZWwsIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5maWd1cmVfY2F0ZWdvcnkge1xuICAgIHdpZHRoOiA5MyU7XG4gIH1cbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIHNlbGVjdCB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIG9wdGlvbiB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLmZpZ3VyZV9hZGRfY2F0ZWdvcnkge1xuICB3aWR0aDogMzkwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAuZmlndXJlX2FkZF9jYXRlZ29yeSBwIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jb250YWN0X2JveCAuYm94X21lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNDAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IC5ib3hfbWVzc2FnZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gICAgd2lkdGg6IDkzJTtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5ib3hfbWVzc2FnZSAudGl0bGVfbWVzc2FnZSB7XG4gIHBhZGRpbmctYmxvY2s6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY29udGFjdF9ib3ggLmJveF9tZXNzYWdlIC50ZXh0YXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcmVzaXplOiBub25lO1xufVxuLmNvbnRhY3RfYm94IC5ib3hfbWVzc2FnZSAuYWdyZWVtZW50IHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uY2hlY2tib3ggaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbn1cblxuLmNoZWNrYm94IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY2hlY2tib3ggc3BhbiB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIGZsZXgtYmFzaXM6IDEwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmZpZ3VyZV9hZGRfY2F0ZWdvcnkgLmNoZWNrYm94X2NhdGVnb3J5IHNwYW4ge1xuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xufVxuXG4uY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCArIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDhEOEQ4O1xuICBib3JkZXI6IDJweCBsaWdodGJsdWUgc29saWQ7XG59XG5cbi5maWd1cmVfY2F0ZWdvcmllcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA4cHg7XG59XG5cbi5zdWJtaXQge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1OTU5O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggYmxhY2s7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vdF9yZWFkeSAubWFpbl9wYWdlIHtcbiAgaGVpZ2h0OiA4OHZoO1xufVxuLm5vdF9yZWFkeSAubWFpbl9wYWdlIC5oZWFkZXIyIHtcbiAgd2lkdGg6IDI1JTtcbn1cbi5ub3RfcmVhZHkgLm1haW5fcGFnZSAuaGVhZGVyMiBhIHtcbiAgY29sb3I6IGNhZGV0Ymx1ZTtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5wb3JhZHlfcGFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMjUwcHg7XG59XG4ucG9yYWR5X3BhZ2UgLmhlYWRlcjEge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cbi5wb3JhZHlfcGFnZSAuaGVhZGVyMyB7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4uYWR2aWNlMSwgLmFkdmljZTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW46IDIwcHggNTBweCAxMjBweCA1MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmFkdmljZTIge1xuICBtYXJnaW46IDIwcHggNTBweCAxMjBweCA1MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDZENkQ2O1xuICBvcGFjaXR5OiA3NSU7XG4gIHdpZHRoOiA3MCU7XG59XG4uYWR2aWNlMiAuY2lyY2xlc19hZHZpY2VfYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFkdmljZTIgLmNpcmNsZXNfYWR2aWNlX2JveCAuY2lyY2xlX2FkdmljZSB7XG4gIHdpZHRoOiAzMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmFkdmljZTIgLmNpcmNsZXNfYWR2aWNlX2JveCAuY2lyY2xlX2FkdmljZSAuaGVhZGVyMywgLmFkdmljZTIgLmNpcmNsZXNfYWR2aWNlX2JveCAuY2lyY2xlX2FkdmljZSBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wYWdlX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4ubWFpbl9jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWRlcjEge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5oZWFkZXIxIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmhlYWRlcjEge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tYmxvY2s6IDIwcHg7XG4gIH1cbn1cblxuLmhlYWRlcjIge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5oZWFkZXIyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuaGVhZGVyMiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4uaGVhZGVyMiAuY2hvc2VuIHtcbiAgY29sb3I6ICNCMDIzMjM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5oZWFkZXIyIC5ub3RfY2hvc2VuIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmhlYWRlcjMge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2V0dGluZ3MvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2V0dGluZ3MvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2V0dGluZ3MvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX2FzaWRlLnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fbWFpbi1wYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fd29ya291dC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX2ZpZ3VyZXMuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NlY3Rpb25zL19jb25jYWN0LnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fbm90X3JlYWR5X3BhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NlY3Rpb25zL19hZHZpY2Uuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Q0FBQTtBQU9BOzs7Ozs7Ozs7Ozs7O0VBYUUsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ0FGOztBREVBLGdEQUFBO0FBQ0E7O0VBRUUsY0FBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBREFBO0VBQ0UsZ0JBQUE7QUNHRjs7QUREQTtFQUNFLFlBQUE7QUNJRjs7QURGQTs7RUFFRSxXQUFBO0VBQ0EsYUFBQTtBQ0tGOztBREhBO0VBQ0UseUJBQUE7RUFD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QUNBLGtCQUFBO0FBc3hCRjs7QUFueEJBO0VBQ0UsV0FBQTtBQXN4QkY7O0FBM3ZCQTtFQUNFLCtCQUFBO0VBQ0EsZ0JBQUE7QUE4dkJGO0FFbnpCRTtFRm1ERjtJQUlJLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VBZ3dCRjtBQUNGO0FFcHpCRTtFRjZDRjtJQVNJLGVBQUE7SUFDQSxrQkFBQTtFQWt3QkY7QUFDRjs7QUEvdkJBO0VBQ0UsbUJHekRhO0FIMnpCZjtBRXAwQkU7RUZpRUY7SUFHSSxlQUFBO0lBQ0EsaUJBQUE7RUFvd0JGO0FBQ0Y7QUVwMEJFO0VGMkRGO0lBT0ksZUFBQTtFQXN3QkY7QUFDRjtBQXJ3QkU7RUFDRSxjRzFFUTtFSDJFUixxQkFBQTtBQXV3Qko7QUFyd0JFO0VBQ0UscUJBQUE7RUFDQSxjR2xGZTtBSHkxQm5COztBQXB3QkE7RUFDRSxtQkczRWE7RUg0RWIsZUFBQTtFQUNBLGdCQUFBO0FBdXdCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBFcmljIE1leWVyJ3MgQ1NTIFJlc2V0XFxyXFxuICAgaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiAgIFRoaXMgaXMgYSBTYXNzIHBhcnRpYWxcXHJcXG4qL1xcclxcblxcclxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcbiAgcXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICBib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0ICdzZXR0aW5ncy9yZXNldCc7XFxyXFxuQGltcG9ydCBcXFwic2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbkBpbXBvcnQgXFxcInNlY3Rpb25zL2hlYWRlclxcXCI7XFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvYXNpZGVcXFwiO1xcclxcbkBpbXBvcnQgXFxcInNlY3Rpb25zL2Zvb3RlclxcXCI7XFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvbWFpbi1wYWdlXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy93b3Jrb3V0XFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy9maWd1cmVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy9jb25jYWN0XFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy9ub3RfcmVhZHlfcGFnZVxcXCI7XFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvYWR2aWNlXFxcIjtcXHJcXG5cXHJcXG5cXHJcXG4ucGFnZV9jb250YWluZXJ7XFxyXFxuICAvLyAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXFxyXFxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAvLyBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stYmFja2dyb3VuZDtcXHJcXG59XFxyXFxuLm1haW5fY29udGFpbmVye1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi8vICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISExXFxyXFxuLy8gLnBhZ2VfY29udGFpbmVye1xcclxcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbi8vICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4vLyAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuLy8gICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbi8vICAgaGVpZ2h0OiAxMDAlO1xcclxcbi8vICAgd2lkdGg6IDEwMCU7XFxyXFxuLy8gICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuLy8gICAvL2JhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay1iYWNrZ3JvdW5kO1xcclxcbi8vIH1cXHJcXG4vLyAubWFpbl9jb250YWluZXJ7XFxyXFxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuLy8gICB3aWR0aDogOTAlO1xcclxcbi8vICAgaGVpZ2h0OiAxMDAlO1xcclxcbi8vICAgY2xlYXI6IGJvdGg7XFxyXFxuLy8gICByaWdodDogLTE1JTtcXHJcXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS1iYWNrZ3JvdW5kO1xcclxcbi8vICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuLy8gICAgIHdpZHRoOiA4MCU7XFxyXFxuLy8gICAgIHJpZ2h0OiAtMTUlO1xcclxcbi8vICAgfVxcclxcbi8vIH1cXHJcXG5cXHJcXG4uaGVhZGVyMXtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5LCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIG1hcmdpbjogMCAwIDIwcHggMDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgbWFyZ2luLWJsb2NrOiAyMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyMntcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG4gIC5jaG9zZW57XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItcmVkO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuICAubm90X2Nob3NlbntcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogJGNvbG9yLWZvbnQtYmxhY2s7XFxyXFxuICB9XFxyXFxufVxcclxcbi5oZWFkZXIze1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4ubWVudV9tYWluLWNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICB0b3A6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHotaW5kZXg6IDUwMDtcXHJcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICBib3gtc2hhZG93OiAycHggM3B4IDNweCAycHggJGNvbG9yLXNvZnQtZ3JleTtcXHJcXG4gIC8vYm9yZGVyLWJvdHRvbTogMnB4IGJsYWNrIHNvbGlkO1xcclxcbiAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgd2lkdGg6IDkwdnc7XFxyXFxuICB9XFxyXFxuICAubWVudV9tYWluIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICBnYXA6IDIycHg7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgIGdhcDogNSU7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51X21haW5fZWxlbWVudCwgYXtcXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBkZXNrdG9we1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICBmb250LXNpemU6IDkwJTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICAgIGNvbG9yOiAkY29sb3ItZm9udC1ibGFjaztcXHJcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcblxcclxcbkBtaXhpbiBkZXNrdG9wIHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIG1vYmlsZSB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBoZWFkZXIxIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gaGVhZGVyMntcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gaGVhZGVyM3tcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZGVzY3JpcHRpb257XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiAkY29sb3ItZm9udC1ibGFjaztcXHJcXG59XCIsXCJcXHJcXG4kY29sb3ItZm9udC1ibGFjazogIzAwMDAwMDtcXHJcXG4kY29sb3ItZm9udC13aGl0ZTogI0ZGRkZGRjtcXHJcXG5cXHJcXG4kY29sb3ItcmVkOiAjQjAyMzIzO1xcclxcbiRjb2xvci1ibGFjay1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xcclxcbiRjb2xvci1uZWFybHktYmxhY2s6ICMxRTFFMUU7XFxyXFxuJGNvbG9yLXdoaXRlLWJhY2tncm91bmQ6ICNGRkZGRkY7XFxyXFxuJGNvbG9yLXNvZnQtZ3JleTogI0Q4RDhEODtcXHJcXG4kY29sb3ItY2hhbGstZ3JleTogI0Q2RDZENjtcXHJcXG4kY29sb3ItZ3JleTogIzU5NTk1OTtcXHJcXG5cXHJcXG4kZm9udC1wcmltYXJ5OiBSb2JvdG87XCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLm1lbnVfYXNpZGUtY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIC8vICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcXHJcXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIC5tZW51X2FzaWRlIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTAzcHg7XFxyXFxuICAgIGdhcDogMThweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAvLyAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXFxyXFxuICAgIHdpZHRoOiAxMHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stYmFja2dyb3VuZDtcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgIHdpZHRoOiAxNXZ3O1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51X2FzaWRlX2VsZW1lbnQge1xcclxcbiAgICAgIG1hcmdpbjogMCAwIDAgMTVweDtcXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgIG1hcmdpbjogMCAwIDAgMnB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBhe1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnksIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgIGNvbG9yOiAkY29sb3ItZm9udC13aGl0ZTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiA1OCU7XFxyXFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbi5mb290ZXJfY29udGFpbmVye1xcclxcbiAgY2xlYXI6IGJvdGg7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcclxcbiAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51X2Zvb3RlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwIDMwcHggMCAzMHB4O1xcclxcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbmVhcmx5LWJsYWNrO1xcclxcbiAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51X2Zvb3Rlcl9saXN0e1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGdhcDogNTBweDtcXHJcXG4gICAgICBtYXJnaW46IDAgMTVweCAwIDA7XFxyXFxuXFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgZ2FwOiAxMCU7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGEge1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICBjb2xvcjogIzkyOEU4RTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBhe1xcclxcbiAgICAgIGNvbG9yOiAkY29sb3Itc29mdC1ncmV5O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbi5vbmVfcGFnZXJ7XFxyXFxuLy8gISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxcclxcbiAgLy8gaGVpZ2h0OiA5MHZoO1xcclxcbn1cXHJcXG4ubWFpbl9wYWdle1xcclxcbiAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltZy9pbWdfbWFpbl9wYWdlLmpwZWdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nL2ltZ19tYWluX3BhZ2UuanBlZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIHotaW5kZXg6IDIwMDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHZ3O1xcclxcbiAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgIC8vICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcXHJcXG4gICAgLy8gYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gICAgLy8gYmFja2dyb3VuZC1zaXplOiA2Ni41JTtcXHJcXG4gICAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XFxyXFxuICAgIC8vIG1hcmdpbi1sZWZ0OiA2MHB4O1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXZ3O1xcclxcbiAgICByaWdodDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2lyY2xlc193b3Jrb3V0e1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS1iYWNrZ3JvdW5kO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICB3aWR0aDogMTcwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiAxNzBweDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIH1cXHJcXG4gIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgxKXtcXHJcXG4gICAgYm9yZGVyOiAxMHB4ICNFN0U2RTYgc29saWQ7XFxyXFxuICAgIGgyLCBhIHtcXHJcXG4gICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtY2hpbGQoMil7XFxyXFxuICAgIGJvcmRlcjogMTBweCAjQ0NDQkNCIHNvbGlkO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGgyLCBhIHtcXHJcXG4gICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgzKXtcXHJcXG4gICAgYm9yZGVyOiAxMHB4ICM5RDlEOUQgc29saWQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaDIsIGEge1xcclxcbiAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbi5hYm91dF9wbGF0Zm9ybXtcXHJcXG4gIHdpZHRoOiAyOTVweDtcXHJcXG5cXHJcXG4gIC5hYm91dF9wbGF0Zm9ybV90ZXh0e1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcblxcclxcbiAgfVxcclxcbn1cXHJcXG4gIC5oZWFkZXIzIHtcXHJcXG4gICAgbWFyZ2luLWJsb2NrOiAyMHB4IDEwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcblxcclxcbi53b3Jrb3V0e1xcclxcbiAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgcGFkZGluZzogNSU7XFxyXFxuICB9XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItY2hhbGstZ3JleTtcXHJcXG4gIC5oZWFkZXI0e1xcclxcbiAgICBwYWRkaW5nLWJsb2NrOiAxMHB4IDIwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItcmVkO1xcclxcbiAgfVxcclxcbiAgLmRlc2NyaXB0aW9uX3RleHR7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItZm9udC13aGl0ZTtcXHJcXG4gIH1cXHJcXG4gIC53b3Jrb3V0X2ltZ2FnZXMsIHVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLndvcmtvdXRfaW1hZ2Uge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS1iYWNrZ3JvdW5kO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBkZXNrdG9we1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMzUwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIG1hcmdpbjogNSU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBpbWcge1xcclxcbiAgICAgICAgQGluY2x1ZGUgZGVza3RvcHtcXHJcXG4gICAgICAgICAgLy9taW4taGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgICAgICAgbWF4LWhlaWdodDogMzIwcHg7XFxyXFxuICAgICAgICAgIG1heC13aWR0aDogMjgwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICAgIG1heC1oZWlnaHQ6IDEyMHB4O1xcclxcbiAgICAgICAgICB3aWR0aDogODBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLmZpZ3VyZXNfY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS1iYWNrZ3JvdW5kO1xcclxcblxcclxcbiAgLm1haW5fcGFnZV9maWd1cmVzIHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcclxcbiAgICAuZmlndXJlc19wYWdlX2hlYWQge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuXFxyXFxuICAgICAgLmZpZ3VyZXNfc3RyaXBlIHtcXHJcXG4gICAgICAgIHdpZHRoOiA1NzVweDtcXHJcXG4gICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDN0M3Qzc7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmZpZ3VyZXNfY2lyY2xlIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS1iYWNrZ3JvdW5kO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgdG9wOiAtMTBweDtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDU1JTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgICAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5oZWFkZXIzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnksIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFkZF9maWd1cmUge1xcclxcbiAgICAgIHdpZHRoOiAxMTBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWJsYWNrLWJhY2tncm91bmQ7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMzAlO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgcmlnaHQ6IDE1JTtcXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBhIHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgICAgICAgY29sb3I6ICRjb2xvci1mb250LXdoaXRlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDhweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5maWd1cmVzX3NwYWNlX2ltZyB7XFxyXFxuICAgIGhlaWdodDogMzUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nL1BEX2ltZ18zX3N6cGFnYXQuanBlZ1xcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICB6LWluZGV4OiAyMDA7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogLTI3MHB4O1xcclxcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdnc7XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5maWd1cmVzX2JveCB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcblxcclxcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuZGVzY3JpcHRpb25fdGV4dHtcXHJcXG4gICAgICB3aWR0aDogNjAwcHg7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICBjb2xvcjogJGNvbG9yLWZvbnQtYmxhY2s7XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5maWd1cmVzIHVsIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogODBweDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgLmZpZ3VyZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleTtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gICAgICAgICAgd2lkdGg6IDIzMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICAgICAgbWFyZ2luOiA1JTtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgaW1ne1xcclxcbiAgICAgICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyMzBweDtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIyMHB4O1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTIwcHg7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xcclxcbiAgICAgICAgICB9fVxcclxcblxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbn1cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG5cXHJcXG4uY29udGFjdF9ib3gge1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnksIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwJTtcXHJcXG4gIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdCB7XFxyXFxuICAgIC5oZWFkZXIxIHtcXHJcXG4gICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdF9pbmZvIHtcXHJcXG4gICAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgICBtYXJnaW4tYmxvY2s6IDE1cHg7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5kZXNjcmlwdGlvbl90ZXh0IHtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuaGVhZGVyMyB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5hZGRyZXNzIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG5cXHJcXG4gICAgICAgIGEge1xcclxcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtX21lc3NhZ2Uge1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnBlcnNvbmFsX2RhdGUge1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgZ2FwOiA1cHg7XFxyXFxuXFxyXFxuICAgICAgbGFiZWwge1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBpbnB1dCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBsZWZ0OiAxOTBweDtcXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgLmNhc2VBZGR7XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jYXNlLCAuZmlndXJlX2xldmVsLCAuZmlndXJlX2NhdGVnb3J5IHtcXHJcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICAgICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICB3aWR0aDogOTMlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBzZWxlY3Qge1xcclxcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA6OnNlbGVjdGlvbiB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgb3B0aW9uIHtcXHJcXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZpZ3VyZV9hZGRfY2F0ZWdvcnkge1xcclxcbiAgICAgIHdpZHRoOiAzOTBweDtcXHJcXG4gICAgICAvL2Rpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgICBwIHtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmJveF9tZXNzYWdlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xcclxcbiAgICAgIHdpZHRoOiA5MyU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRpdGxlX21lc3NhZ2Uge1xcclxcbiAgICAgIHBhZGRpbmctYmxvY2s6IDEwcHg7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGV4dGFyZWEge1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFncmVlbWVudCB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCBpbnB1dCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3ggc3BhbiB7XFxyXFxuICBoZWlnaHQ6IDEwcHg7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICBmbGV4LWJhc2lzOiAxMHB4O1xcclxcbiAgZmxleC1zaHJpbms6IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5maWd1cmVfYWRkX2NhdGVnb3J5IHtcXHJcXG4gIC5jaGVja2JveF9jYXRlZ29yeSBzcGFuIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyBzcGFuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zb2Z0LWdyZXk7XFxyXFxuICBib3JkZXI6IDJweCBsaWdodGJsdWUgc29saWQ7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5maWd1cmVfY2F0ZWdvcmllcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMnB4IDVweCBibGFjaztcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbi5ub3RfcmVhZHkgLm1haW5fcGFnZSB7XFxyXFxuICBoZWlnaHQ6IDg4dmg7XFxyXFxuICAuaGVhZGVyMiB7XFxyXFxuICAgIHdpZHRoOiAyNSU7XFxyXFxuICAgIGEge1xcclxcbiAgICAgIGNvbG9yOiBjYWRldGJsdWU7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLnBvcmFkeV9wYWdle1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWcvMi5qcGVnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMjUwcHg7XFxyXFxuICAuaGVhZGVyMXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxyXFxuICB9XFxyXFxuICAuaGVhZGVyM3tcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcbi5hZHZpY2UxLCAuYWR2aWNlM3tcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS1iYWNrZ3JvdW5kO1xcclxcbiAgbWFyZ2luOiAyMHB4IDUwcHggMTIwcHggNTBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkdmljZTJ7XFxyXFxuICBtYXJnaW46IDIwcHggNTBweCAxMjBweCA1MHB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWNoYWxrLWdyZXk7XFxyXFxuICBvcGFjaXR5OiA3NSU7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcblxcclxcbiAgLmNpcmNsZXNfYWR2aWNlX2JveHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAuY2lyY2xlX2FkdmljZXtcXHJcXG4gICAgICB3aWR0aDogMzAlO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIC5oZWFkZXIzLCBwe1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzVjNzg4MDYxMTk1OWU0ZjE1MThcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=