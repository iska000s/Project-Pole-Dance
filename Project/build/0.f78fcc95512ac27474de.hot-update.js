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
    width: 100%;
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
    padding-inline: 1%;
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
    padding: 5%;
  }
}
@media (max-width: 736px) {
  .main_page {
    background-attachment: fixed;
    background-size: 100%;
    width: 90%;
    height: 55vh;
    padding: 5%;
    padding-top: 30vh;
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
  background-position-y: 70%;
  background-position-x: center;
}
@media (max-width: 736px) {
  .porady_page {
    background-position-x: 50%;
    background-position-y: center;
  }
}
.porady_page .header1 {
  margin-left: 5%;
}
.porady_page .header3 {
  padding-bottom: 30px;
}
@media (max-width: 736px) {
  .porady_page .header3 {
    font-size: 1, 5em;
  }
}

.advice1, .advice3 {
  background-color: #FFFFFF;
  margin: 20px 50px 120px 50px;
  padding: 20px;
  line-height: 20px;
  font-family: Roboto;
  font-weight: 300;
}
@media (max-width: 736px) {
  .advice1, .advice3 {
    margin: 20px 5% 100px 5%;
  }
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
@media (max-width: 736px) {
  .advice2 {
    margin: 20px 5% 100px 15%;
  }
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
.advice2 .circles_advice_box .circle_advice .header3 {
  display: flex;
  justify-content: center;
}
@media (max-width: 736px) {
  .advice2 .circles_advice_box .circle_advice .header3 {
    font-size: 1rem;
  }
}
@media (max-width: 736px) {
  .advice2 .circles_advice_box .circle_advice .header3 p {
    font-size: 5px;
  }
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
}`, "",{"version":3,"sources":["webpack://./Project/scss/settings/_reset.scss","webpack://./Project/scss/index.scss","webpack://./Project/scss/sections/_header.scss","webpack://./Project/scss/settings/_mixins.scss","webpack://./Project/scss/settings/_variables.scss","webpack://./Project/scss/sections/_aside.scss","webpack://./Project/scss/sections/_footer.scss","webpack://./Project/scss/sections/_main-page.scss","webpack://./Project/scss/sections/_workout.scss","webpack://./Project/scss/sections/_figures.scss","webpack://./Project/scss/sections/_concact.scss","webpack://./Project/scss/sections/_not_ready_page.scss","webpack://./Project/scss/sections/_advice.scss"],"names":[],"mappings":"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","sourcesContent":["/* Eric Meyer's CSS Reset\r\n   http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n   This is a Sass partial\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n  display: block;\r\n}\r\nbody {\r\n  line-height: 1;\r\n}\r\nol, ul {\r\n  list-style: none;\r\n}\r\nblockquote, q {\r\n  quotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n  content: '';\r\n  content: none;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n","@import 'settings/reset';\r\n@import \"settings/variables\";\r\n@import \"settings/mixins\";\r\n\r\n@import \"sections/header\";\r\n@import \"sections/aside\";\r\n@import \"sections/footer\";\r\n@import \"sections/main-page\";\r\n@import \"sections/workout\";\r\n@import \"sections/figures\";\r\n@import \"sections/concact\";\r\n@import \"sections/not_ready_page\";\r\n@import \"sections/advice\";\r\n\r\n\r\n.page_container{\r\n  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n  // position: absolute;\r\n  // box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n  //background-color: $color-black-background;\r\n}\r\n.main_container{\r\n  width: 90vw;\r\n  margin-left: 10vw;\r\n  @include mobile{\r\n    width: 85vw;\r\n    margin-left: 15vw;\r\n  }\r\n}\r\n// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1\r\n// .page_container{\r\n//   position: relative;\r\n//   box-sizing: border-box;\r\n//   display: flex;\r\n//   flex-direction: row;\r\n//   height: 100%;\r\n//   width: 100%;\r\n//   overflow-x: hidden;\r\n//   //background-color: $color-black-background;\r\n// }\r\n// .main_container{\r\n//   position: relative;\r\n//   width: 90%;\r\n//   height: 100%;\r\n//   clear: both;\r\n//   right: -15%;\r\n//   background-color: $color-white-background;\r\n//   @include mobile{\r\n//     position: relative;\r\n//     width: 80%;\r\n//     right: -15%;\r\n//   }\r\n// }\r\n\r\n.header1{\r\n  font-family: $font-primary, sans-serif;\r\n  font-weight: 300;\r\n  @include desktop {\r\n    font-size: 50px;\r\n    margin: 0 0 20px 0;\r\n    padding-top: 40px;\r\n  }\r\n  @include mobile{\r\n    font-size: 30px;\r\n    margin-block: 20px;\r\n  }\r\n}\r\n\r\n.header2{\r\n  font-family: $font-primary;\r\n  @include desktop {\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n  }\r\n  @include mobile{\r\n    font-size: 14px;\r\n  }\r\n  .chosen{\r\n    color: $color-red;\r\n    text-decoration: none;\r\n  }\r\n  .not_chosen{\r\n    text-decoration: none;\r\n    color: $color-font-black;\r\n  }\r\n}\r\n.header3{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.menu_main-container {\r\n  height: 60px;\r\n  top: 10px;\r\n  background-color: white;\r\n  z-index: 500;\r\n  position: sticky;\r\n  box-shadow: 2px 3px 3px 2px $color-soft-grey;\r\n  //border-bottom: 2px black solid;\r\n  @include mobile {\r\n    width: 100%;\r\n  }\r\n  .menu_main {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    @include desktop {\r\n      gap: 22px;\r\n      margin-left: 60px;\r\n    }\r\n    @include mobile{\r\n      // gap: 5%;\r\n      padding-inline: 1%;\r\n      justify-content: space-around;\r\n      line-height: 10px;\r\n    }\r\n    .menu_main_element, a{\r\n\r\n      @include desktop{\r\n        font-size: 16px;\r\n      }\r\n      @include mobile{\r\n        font-size: 90%;\r\n      }\r\n      flex-direction: row;\r\n      font-family: $font-primary;\r\n      font-weight: 300;\r\n      color: $color-font-black;\r\n      text-decoration: none;\r\n    }\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n\r\n@mixin desktop {\r\n  @media (min-width: 736px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile {\r\n  @media (max-width: 736px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin header1 {\r\n  font-family: $font-primary;\r\n  font-size: 50px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin header2{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin header3{\r\n  font-family: $font-primary;\r\n  font-size: 24px;\r\n  color: $color-font-black;\r\n}\r\n\r\n@mixin description{\r\n  font-family: $font-primary;\r\n  font-size: 14px;\r\n  color: $color-font-black;\r\n}","\r\n$color-font-black: #000000;\r\n$color-font-white: #FFFFFF;\r\n\r\n$color-red: #B02323;\r\n$color-black-background: #000000;\r\n$color-nearly-black: #1E1E1E;\r\n$color-white-background: #FFFFFF;\r\n$color-soft-grey: #D8D8D8;\r\n$color-chalk-grey: #D6D6D6;\r\n$color-grey: #595959;\r\n\r\n$font-primary: Roboto;","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.menu_aside-container {\r\n  height: 100%;\r\n  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n  // position: absolute;\r\n  .menu_aside {\r\n    position: fixed;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-top: 103px;\r\n    gap: 18px;\r\n    height: 100%;\r\n    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n    width: 10vw;\r\n    background-color: $color-black-background;\r\n    @include mobile{\r\n      width: 15vw;\r\n    }\r\n    .menu_aside_element {\r\n      margin: 0 0 0 15px;\r\n      @include mobile {\r\n      margin: 0 0 0 2px;\r\n      }\r\n      a{\r\n        text-decoration: none;\r\n        font-size: 14px;\r\n        font-family: $font-primary, sans-serif;\r\n        font-weight: bold;\r\n        color: $color-font-white;\r\n        @include mobile{\r\n          font-size: 58%;\r\n          font-weight: 300;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.footer_container{\r\n  clear: both;\r\n  position: fixed;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  width: 90%;\r\n  height: 80px;\r\n  background-color: #000000;\r\n  @include mobile{\r\n    width: 90%;\r\n    right: 0;\r\n  }\r\n\r\n  .menu_footer{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 50px;\r\n    width: 100%;\r\n    padding: 0 30px 0 30px;\r\n    // background-color: $color-nearly-black;\r\n    @include mobile{\r\n      padding: 5px;\r\n      justify-content: space-around;\r\n    }\r\n    .menu_footer_list{\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: center;\r\n      gap: 50px;\r\n      margin: 0 15px 0 0;\r\n\r\n      @include mobile{\r\n        gap: 10%;\r\n      }\r\n      a {\r\n        font-family: $font-primary;\r\n        font-size: 12px;\r\n        text-decoration: none;\r\n        color: #928E8E;\r\n        @include mobile{\r\n          font-size: 14px;\r\n        }\r\n      }\r\n    }\r\n    a{\r\n      color: $color-soft-grey;\r\n    }\r\n  }\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.one_pager{\r\n// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n  // height: 90vh;\r\n}\r\n.main_page{\r\n  //background-image: url(\"../img/img_main_page.jpeg\");\r\n  background-image: url(\"../img/img_main_page.jpeg\");\r\n  background-repeat: no-repeat;\r\n  z-index: 200;\r\n  height: 90%;\r\n  @include desktop {\r\n    padding-inline: 5%;\r\n    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n    background-attachment: fixed;\r\n    background-size: 66.5%;\r\n    background-position: right;\r\n    padding: 5%;\r\n    // margin-left: 60px;\r\n  }\r\n  @include mobile{\r\n    background-attachment: fixed;\r\n    background-size: 100%;\r\n    width: 90%;\r\n    height: 55vh;\r\n    padding: 5%;\r\n    padding-top: 30vh;\r\n\r\n    // margin-left: 5%;\r\n  }\r\n\r\n\r\n  .circles_workout-container{\r\n    display: flex;\r\n    @include mobile {\r\n      // flex-wrap: wrap;\r\n      justify-content: space-between;\r\n    }\r\n\r\n    .circles_workout{\r\n      background-color: $color-white-background;\r\n      border-radius: 50%;\r\n      width: 170px;\r\n      height: 170px;\r\n      flex-direction: row;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      margin-right: 20px;\r\n      @include mobile{\r\n        width: 30%;\r\n        height: 100px;\r\n        margin: 0;\r\n      }\r\n    }\r\n\r\n  }\r\n  .circles_workout-container :nth-of-type(1){\r\n    border: 10px #E7E6E6 solid;\r\n    @include mobile{\r\n      border: 6px #E7E6E6 solid;\r\n    }\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n  .circles_workout-container :nth-child(2){\r\n    border: 10px #CCCBCB solid;\r\n    position: relative;\r\n    @include mobile{\r\n      border: 6px #CCCBCB solid;\r\n    }\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n  .circles_workout-container :nth-of-type(3){\r\n    border: 10px #9D9D9D solid;\r\n    position: relative;\r\n    @include mobile{\r\n      border: 6px #9D9D9D solid;\r\n    }\r\n    h2, a {\r\n      border: none;\r\n    }\r\n  }\r\n.about_platform{\r\n  width: 295px;\r\n\r\n  .about_platform_text{\r\n    margin-right: 20px;\r\n    padding-bottom: 20px;\r\n    font-family: $font-primary;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n\r\n  }\r\n}\r\n  .header3 {\r\n    margin-block: 20px 10px;\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n\r\n.workout{\r\n  @include desktop {\r\n    // padding-left: 60px;\r\n    padding: 5%;\r\n  }\r\n  @include mobile{\r\n    padding: 5%;\r\n  }\r\n  background-color: $color-chalk-grey;\r\n  .header4{\r\n    padding-block: 10px 20px;\r\n    font-family: $font-primary;\r\n    font-size: 24px;\r\n    font-weight: 300;\r\n    color: $color-red;\r\n  }\r\n  .description_text{\r\n    margin-bottom: 20px;\r\n    font-family: $font-primary;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: $color-font-white;\r\n  }\r\n  .workout_imgages, ul {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    @include desktop {\r\n      // margin-right: 100px;\r\n      margin-bottom: 60px;\r\n    }\r\n    @include mobile{\r\n      margin-bottom: 20%;\r\n    }\r\n    .workout_image {\r\n      background-color: $color-white-background;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n\r\n      @include desktop{\r\n        margin-right: 40px;\r\n        margin-bottom: 50px;\r\n        height: 350px;\r\n        width: 300px;\r\n      }\r\n      @include mobile{\r\n        margin: 5%;\r\n        height: 150px;\r\n        // width: 100px;\r\n        width: 30vw;\r\n      }\r\n      img {\r\n        @include desktop{\r\n          //min-height: 200px;\r\n          max-height: 320px;\r\n          max-width: 280px;\r\n        }\r\n        @include mobile{\r\n          max-height: 120px;\r\n          max-width: 90%;\r\n        }\r\n\r\n      }\r\n    }\r\n  }\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.figures_container {\r\n  background-color: $color-white-background;\r\n\r\n  .main_page_figures {\r\n    padding-bottom: 100px;\r\n    .figures_page_head {\r\n      display: flex;\r\n      flex-direction: row;\r\n      margin-top: 50px;\r\n      margin-bottom: 20px;\r\n\r\n      .figures_stripe {\r\n        width: 575px;\r\n        height: 40px;\r\n        background-color: #C7C7C7;\r\n        display: flex;\r\n        flex-direction: row;\r\n      }\r\n\r\n      .figures_circle {\r\n        background-color: $color-white-background;\r\n        border-radius: 50%;\r\n        position: relative;\r\n        top: -10px;\r\n        opacity: 55%;\r\n        @include desktop {\r\n          width: 60px;\r\n          height: 60px;\r\n          margin: 0 10px 0 10px;\r\n        }\r\n        @include mobile {\r\n          top: 0;\r\n          width: 30px;\r\n          height: 30px;\r\n        }\r\n      }\r\n\r\n      .header3 {\r\n        display: flex;\r\n        align-items: center;\r\n        height: 100%;\r\n        font-family: $font-primary, sans-serif;\r\n        font-weight: 300;\r\n        @include desktop {\r\n          font-size: 24px;\r\n        }\r\n        @include mobile {\r\n          font-size: 16px;\r\n        }\r\n      }\r\n    }\r\n\r\n    .add_figure {\r\n      width: 110px;\r\n      height: 40px;\r\n      background: $color-black-background;\r\n      border-radius: 30%;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      position: absolute;\r\n      right: 15%;\r\n      @include mobile{\r\n        width: 30px;\r\n        right: 0;\r\n      }\r\n      a {\r\n        font-family: $font-primary;\r\n        color: $color-font-white;\r\n        font-size: 14px;\r\n        text-decoration: none;\r\n        @include mobile{\r\n          font-size: 8px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .figures_space_img {\r\n    height: 350px;\r\n    background-image: url(\"../img/PD_img_3_szpagat.jpeg\");\r\n    background-repeat: no-repeat;\r\n    z-index: 200;\r\n    background-position-y: -270px;\r\n    @include desktop {\r\n      background-attachment: fixed;\r\n      background-size: 100vw;\r\n    }\r\n    @include mobile {\r\n      height: 150px;\r\n      background-size: 100%;\r\n      background-position: 200% 0;\r\n    }\r\n  }\r\n\r\n  .figures_box {\r\n    padding-top: 20px;\r\n\r\n    @include desktop {\r\n      padding-left: 60px;\r\n    }\r\n    @include mobile {\r\n      padding-left: 10%;\r\n    }\r\n    .description_text{\r\n      width: 600px;\r\n      margin-bottom: 20px;\r\n      font-family: $font-primary;\r\n      font-size: 14px;\r\n      font-weight: 400;\r\n      color: $color-font-black;\r\n      @include mobile{\r\n        width: 90%;\r\n        margin-bottom: 10px;\r\n      }\r\n    }\r\n\r\n    .figures ul {\r\n      display: flex;\r\n      flex-direction: row;\r\n      flex-wrap: wrap;\r\n      justify-content: left;\r\n\r\n      @include desktop {\r\n        margin-right: 80px;\r\n      }\r\n      .figure {\r\n        background-color: $color-grey;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        @include desktop {\r\n          margin-right: 10px;\r\n          margin-bottom: 10px;\r\n          height: 250px;\r\n          width: 230px;\r\n        }\r\n        @include mobile {\r\n          margin: 5%;\r\n          height: 150px;\r\n          width: 100px;\r\n        }\r\n        img{\r\n          @include desktop {\r\n            max-height: 230px;\r\n            max-width: 220px;\r\n          }\r\n          @include mobile {\r\n\r\n            max-height: 120px;\r\n            max-width: 80px;\r\n          }}\r\n\r\n      }\r\n    }\r\n  }\r\n\r\n}","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n\r\n.contact_box {\r\n  font-family: $font-primary, sans-serif;\r\n  margin-top: 30px;\r\n  margin-left: 40px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 10%;\r\n  @include mobile {\r\n    flex-direction: column;\r\n    align-items: start;\r\n    margin-left: 20px;\r\n    margin-bottom: 60px;\r\n    height: 100vh;\r\n  }\r\n\r\n  .contact {\r\n    .header1 {\r\n      margin: 0;\r\n      padding: 0;\r\n    }\r\n\r\n    .contact_info {\r\n      font-weight: 300;\r\n      @include desktop {\r\n        font-size: 20px;\r\n        padding-top: 20px;\r\n      }\r\n      @include mobile {\r\n        font-size: 14px;\r\n        margin-block: 15px;\r\n      }\r\n\r\n      .description_text {\r\n        line-height: 30px;\r\n      }\r\n\r\n      .header3 {\r\n        margin-top: 50px;\r\n        margin-bottom: 15px;\r\n        @include mobile {\r\n          margin-top: 20px;\r\n        }\r\n      }\r\n\r\n      .address {\r\n        font-size: 16px;\r\n\r\n        a {\r\n          padding-left: 10px;\r\n          text-decoration: none;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .form_message {\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 50%;\r\n    gap: 5px;\r\n    @include mobile{\r\n      width: 100%;\r\n    }\r\n\r\n    .personal_date {\r\n      position: relative;\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 5px;\r\n\r\n      label {\r\n        font-weight: 600;\r\n        width: 300px;\r\n        margin-bottom: 20px;\r\n        display: flex;\r\n        align-items: center\r\n      }\r\n\r\n      input {\r\n        font-size: 12px;\r\n        width: 200px;\r\n        height: 20px;\r\n        position: absolute;\r\n        left: 190px;\r\n        @include mobile{\r\n          width: 40%;\r\n        }\r\n      }\r\n    }\r\n    .caseAdd{\r\n      @include mobile{\r\n        width: 100%;\r\n      }\r\n    }\r\n\r\n    .case, .figure_level, .figure_category {\r\n      font-size: 12px;\r\n      font-family: $font-primary;\r\n      width: 400px;\r\n      height: 20px;\r\n      margin-bottom: 15px;\r\n      cursor: pointer;\r\n      @include mobile{\r\n        width: 93%;\r\n      }\r\n    }\r\n\r\n    select {\r\n      -webkit-border-radius: 25px;\r\n      -moz-border-radius: 25px;\r\n      border-radius: 25px;\r\n    }\r\n\r\n    ::selection {\r\n      background-color: lightsteelblue;\r\n    }\r\n\r\n    option {\r\n      -webkit-border-radius: 25px;\r\n      -moz-border-radius: 25px;\r\n      border-radius: 25px;\r\n    }\r\n\r\n    .figure_add_category {\r\n      width: 390px;\r\n      //display: flex;\r\n      flex-direction: column;\r\n\r\n      p {\r\n        font-weight: 600;\r\n        margin-bottom: 15px;\r\n      }\r\n\r\n    }\r\n  }\r\n\r\n  .box_message {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 400px;\r\n    @include mobile {\r\n      padding-bottom: 60px;\r\n      width: 93%;\r\n    }\r\n\r\n    .title_message {\r\n      padding-block: 10px;\r\n      font-weight: 600;\r\n    }\r\n\r\n    .textarea {\r\n      margin-bottom: 5px;\r\n      resize: none;\r\n    }\r\n\r\n    .agreement {\r\n      font-size: 10px;\r\n    }\r\n\r\n  }\r\n\r\n}\r\n\r\n.checkbox input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  height: 10px;\r\n  width: 10px;\r\n}\r\n\r\n.checkbox {\r\n  cursor: pointer;\r\n  display: flex;\r\n}\r\n\r\n.checkbox span {\r\n  height: 10px;\r\n  width: 10px;\r\n  border: 2px solid grey;\r\n  flex-basis: 10px;\r\n  flex-shrink: 0;\r\n  cursor: pointer;\r\n  margin-right: 10px;\r\n}\r\n\r\n.figure_add_category {\r\n  .checkbox_category span {\r\n    border: 2px solid grey;\r\n  }\r\n}\r\n\r\n.checkbox input:checked + span {\r\n  background-color: $color-soft-grey;\r\n  border: 2px lightblue solid;\r\n\r\n}\r\n\r\n.figure_categories {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n}\r\n\r\n.submit {\r\n  font-family: $font-primary;\r\n  width: 80px;\r\n  height: 20px;\r\n  font-weight: 300;\r\n  background-color: $color-grey;\r\n  color: white;\r\n  border: none;\r\n  box-shadow: 1px 2px 5px black;\r\n  margin-left: 25%;\r\n  cursor: pointer;\r\n}\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.not_ready .main_page {\r\n  height: 88vh;\r\n  .header2 {\r\n    width: 25%;\r\n    a {\r\n      color: cadetblue;\r\n      line-height: 40px;\r\n    }\r\n  }\r\n}\r\n\r\n\r\n","@import \"../settings/variables\";\r\n@import \"../settings/mixins\";\r\n\r\n.porady_page{\r\n  background-image: url(\"../img/2.jpeg\");\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-position-y: 70%;\r\n  background-position-x: center;\r\n\r\n  @include mobile{\r\n    background-position-x: 50%;\r\n    background-position-y: center;\r\n  }\r\n  .header1{\r\n    margin-left: 5%;\r\n  }\r\n  .header3{\r\n    padding-bottom: 30px;\r\n    @include mobile{\r\n      font-size: 1,5em;\r\n    }\r\n  }\r\n}\r\n.advice1, .advice3{\r\n  background-color: $color-white-background;\r\n  margin: 20px 50px 120px 50px;\r\n  padding: 20px;\r\n  line-height: 20px;\r\n  font-family: $font-primary;\r\n  font-weight: 300;\r\n  @include mobile{\r\n    margin: 20px 5% 100px 5%;\r\n  }\r\n}\r\n\r\n.advice2{\r\n  margin: 20px 50px 120px 50px;\r\n  padding: 20px;\r\n  line-height: 20px;\r\n  font-family: $font-primary;\r\n  font-weight: 300;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-self: center;\r\n  align-items: center;\r\n  background-color: $color-chalk-grey;\r\n  opacity: 75%;\r\n  width: 70%;\r\n  @include mobile{\r\n    margin: 20px 5% 100px 15%;\r\n  }\r\n\r\n  .circles_advice_box{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n    .circle_advice{\r\n      width: 30%;\r\n      justify-content: center;\r\n      .header3{\r\n        display: flex;\r\n        justify-content: center;\r\n        @include mobile{\r\n          font-size: 1rem;\r\n        }\r\n        p{\r\n          @include mobile{\r\n              font-size: 5px;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8b3d1bef80023ebaf236")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mNzhmY2M5NTUxMmFjMjc0NzRkZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QyxpRUFBNEM7QUFDeEYsNENBQTRDLGlFQUErQztBQUMzRiw0Q0FBNEMsaUVBQWdDO0FBQzVFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHlyQkFBeXJCLEtBQUssaUJBQWlCLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sV0FBVyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsWUFBWSxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxhQUFhLGFBQWEsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLGFBQWEsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxhQUFhLGFBQWEsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxZQUFZLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxPQUFPLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxZQUFZLFlBQVksVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE9BQU8sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxRQUFRLE9BQU8sVUFBVSxVQUFVLFFBQVEsT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxhQUFhLGFBQWEsUUFBUSxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsUUFBUSxPQUFPLFlBQVksV0FBVyxVQUFVLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsUUFBUSxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sS0FBSyxXQUFXLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sS0FBSyxXQUFXLE9BQU8sTUFBTSxPQUFPLGFBQWEsYUFBYSxVQUFVLFdBQVcsWUFBWSxZQUFZLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLE9BQU8sV0FBVyxVQUFVLFdBQVcsWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLFdBQVcsYUFBYSxZQUFZLFVBQVUsT0FBTyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FB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bUJBQW1CLG9DQUFvQyx1QkFBdUIsc0JBQXNCLEtBQUsseUNBQXlDLG1DQUFtQywrQkFBK0IsbUJBQW1CLGdCQUFnQixtQkFBbUIsV0FBVywyQkFBMkIsNEJBQTRCLFNBQVMsT0FBTyxLQUFLLGlEQUFpRCxtQ0FBbUMscUJBQXFCLCtDQUErQyxtQ0FBbUMsNkJBQTZCLG9CQUFvQiw2QkFBNkIsaUNBQWlDLG9DQUFvQywwQkFBMEIsbUNBQW1DLHNDQUFzQyxPQUFPLGVBQWUsd0JBQXdCLE9BQU8sZUFBZSw2QkFBNkIsd0JBQXdCLDJCQUEyQixTQUFTLE9BQU8sS0FBSyx1QkFBdUIsZ0RBQWdELG1DQUFtQyxvQkFBb0Isd0JBQXdCLGlDQUFpQyx1QkFBdUIsc0JBQXNCLGlDQUFpQyxPQUFPLEtBQUssaUJBQWlCLG1DQUFtQyxvQkFBb0Isd0JBQXdCLGlDQUFpQyx1QkFBdUIsb0JBQW9CLDZCQUE2Qix5QkFBeUIsMEJBQTBCLDBDQUEwQyxtQkFBbUIsaUJBQWlCLHNCQUFzQixrQ0FBa0MsT0FBTyw4QkFBOEIsc0JBQXNCLDRCQUE0QixzQ0FBc0Msb0JBQW9CLHVCQUF1QixxQkFBcUIsa0NBQWtDLG1CQUFtQiwwQkFBMEIsb0NBQW9DLDRCQUE0Qiw4QkFBOEIsYUFBYSxjQUFjLDhCQUE4QixpQ0FBaUMsZUFBZSxhQUFhLFdBQVcsU0FBUyxPQUFPLEtBQUssbUJBQW1CO0FBQzlqN0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7O1VDNzZCdkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9Qcm9qZWN0L3Njc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvaW1nX21haW5fcGFnZS5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1nL1BEX2ltZ18zX3N6cGFnYXQuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltZy8yLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogRXJpYyBNZXllcidzIENTUyBSZXNldFxuICAgaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiAgIFRoaXMgaXMgYSBTYXNzIHBhcnRpYWxcbiovXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxub2wsIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYmxvY2txdW90ZSwgcSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi5tZW51X21haW4tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB0b3A6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiA1MDA7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggM3B4IDJweCAjRDhEOEQ4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X21haW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLm1lbnVfbWFpbi1jb250YWluZXIgLm1lbnVfbWFpbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIHtcbiAgICBnYXA6IDIycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIHtcbiAgICBwYWRkaW5nLWlubGluZTogMSU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIH1cbn1cbi5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4gLm1lbnVfbWFpbl9lbGVtZW50LCAubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIGEge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4gLm1lbnVfbWFpbl9lbGVtZW50LCAubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIGEge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tZW51X21haW4tY29udGFpbmVyIC5tZW51X21haW4gLm1lbnVfbWFpbl9lbGVtZW50LCAubWVudV9tYWluLWNvbnRhaW5lciAubWVudV9tYWluIGEge1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICB9XG59XG5cbi5tZW51X2FzaWRlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tZW51X2FzaWRlLWNvbnRhaW5lciAubWVudV9hc2lkZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDEwM3B4O1xuICBnYXA6IDE4cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfYXNpZGUtY29udGFpbmVyIC5tZW51X2FzaWRlIHtcbiAgICB3aWR0aDogMTV2dztcbiAgfVxufVxuLm1lbnVfYXNpZGUtY29udGFpbmVyIC5tZW51X2FzaWRlIC5tZW51X2FzaWRlX2VsZW1lbnQge1xuICBtYXJnaW46IDAgMCAwIDE1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1lbnVfYXNpZGUtY29udGFpbmVyIC5tZW51X2FzaWRlIC5tZW51X2FzaWRlX2VsZW1lbnQge1xuICAgIG1hcmdpbjogMCAwIDAgMnB4O1xuICB9XG59XG4ubWVudV9hc2lkZS1jb250YWluZXIgLm1lbnVfYXNpZGUgLm1lbnVfYXNpZGVfZWxlbWVudCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAubWVudV9hc2lkZS1jb250YWluZXIgLm1lbnVfYXNpZGUgLm1lbnVfYXNpZGVfZWxlbWVudCBhIHtcbiAgICBmb250LXNpemU6IDU4JTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG59XG5cbi5mb290ZXJfY29udGFpbmVyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZvb3Rlcl9jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbn1cbi5mb290ZXJfY29udGFpbmVyIC5tZW51X2Zvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAzMHB4IDAgMzBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZm9vdGVyX2NvbnRhaW5lciAubWVudV9mb290ZXIge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxufVxuLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIC5tZW51X2Zvb3Rlcl9saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1MHB4O1xuICBtYXJnaW46IDAgMTVweCAwIDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIC5tZW51X2Zvb3Rlcl9saXN0IHtcbiAgICBnYXA6IDEwJTtcbiAgfVxufVxuLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIC5tZW51X2Zvb3Rlcl9saXN0IGEge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM5MjhFOEU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIC5tZW51X2Zvb3Rlcl9saXN0IGEge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLmZvb3Rlcl9jb250YWluZXIgLm1lbnVfZm9vdGVyIGEge1xuICBjb2xvcjogI0Q4RDhEODtcbn1cblxuLm1haW5fcGFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgei1pbmRleDogMjAwO1xuICBoZWlnaHQ6IDkwJTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAubWFpbl9wYWdlIHtcbiAgICBwYWRkaW5nLWlubGluZTogNSU7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDY2LjUlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICAgIHBhZGRpbmc6IDUlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1haW5fcGFnZSB7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDU1dmg7XG4gICAgcGFkZGluZzogNSU7XG4gICAgcGFkZGluZy10b3A6IDMwdmg7XG4gIH1cbn1cbi5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxufVxuLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciAuY2lyY2xlc193b3Jrb3V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTcwcHg7XG4gIGhlaWdodDogMTcwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciAuY2lyY2xlc193b3Jrb3V0IHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4ubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgxKSB7XG4gIGJvcmRlcjogMTBweCAjRTdFNkU2IHNvbGlkO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1vZi10eXBlKDEpIHtcbiAgICBib3JkZXI6IDZweCAjRTdFNkU2IHNvbGlkO1xuICB9XG59XG4ubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgxKSBoMiwgLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMSkgYSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1jaGlsZCgyKSB7XG4gIGJvcmRlcjogMTBweCAjQ0NDQkNCIHNvbGlkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLWNoaWxkKDIpIHtcbiAgICBib3JkZXI6IDZweCAjQ0NDQkNCIHNvbGlkO1xuICB9XG59XG4ubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtY2hpbGQoMikgaDIsIC5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1jaGlsZCgyKSBhIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMykge1xuICBib3JkZXI6IDEwcHggIzlEOUQ5RCBzb2xpZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tYWluX3BhZ2UgLmNpcmNsZXNfd29ya291dC1jb250YWluZXIgOm50aC1vZi10eXBlKDMpIHtcbiAgICBib3JkZXI6IDZweCAjOUQ5RDlEIHNvbGlkO1xuICB9XG59XG4ubWFpbl9wYWdlIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgzKSBoMiwgLm1haW5fcGFnZSAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lciA6bnRoLW9mLXR5cGUoMykgYSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5tYWluX3BhZ2UgLmFib3V0X3BsYXRmb3JtIHtcbiAgd2lkdGg6IDI5NXB4O1xufVxuLm1haW5fcGFnZSAuYWJvdXRfcGxhdGZvcm0gLmFib3V0X3BsYXRmb3JtX3RleHQge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ubWFpbl9wYWdlIC5oZWFkZXIzIHtcbiAgbWFyZ2luLWJsb2NrOiAyMHB4IDEwcHg7XG59XG5cbi53b3Jrb3V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q2RDZENjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAud29ya291dCB7XG4gICAgcGFkZGluZzogNSU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAud29ya291dCB7XG4gICAgcGFkZGluZzogNSU7XG4gIH1cbn1cbi53b3Jrb3V0IC5oZWFkZXI0IHtcbiAgcGFkZGluZy1ibG9jazogMTBweCAyMHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjQjAyMzIzO1xufVxuLndvcmtvdXQgLmRlc2NyaXB0aW9uX3RleHQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLndvcmtvdXQgLndvcmtvdXRfaW1nYWdlcywgLndvcmtvdXQgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAud29ya291dCAud29ya291dF9pbWdhZ2VzLCAud29ya291dCB1bCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC53b3Jrb3V0IC53b3Jrb3V0X2ltZ2FnZXMsIC53b3Jrb3V0IHVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMCU7XG4gIH1cbn1cbi53b3Jrb3V0IC53b3Jrb3V0X2ltZ2FnZXMgLndvcmtvdXRfaW1hZ2UsIC53b3Jrb3V0IHVsIC53b3Jrb3V0X2ltYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLndvcmtvdXQgLndvcmtvdXRfaW1nYWdlcyAud29ya291dF9pbWFnZSwgLndvcmtvdXQgdWwgLndvcmtvdXRfaW1hZ2Uge1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLndvcmtvdXQgLndvcmtvdXRfaW1nYWdlcyAud29ya291dF9pbWFnZSwgLndvcmtvdXQgdWwgLndvcmtvdXRfaW1hZ2Uge1xuICAgIG1hcmdpbjogNSU7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMzB2dztcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC53b3Jrb3V0IC53b3Jrb3V0X2ltZ2FnZXMgLndvcmtvdXRfaW1hZ2UgaW1nLCAud29ya291dCB1bCAud29ya291dF9pbWFnZSBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDMyMHB4O1xuICAgIG1heC13aWR0aDogMjgwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAud29ya291dCAud29ya291dF9pbWdhZ2VzIC53b3Jrb3V0X2ltYWdlIGltZywgLndvcmtvdXQgdWwgLndvcmtvdXRfaW1hZ2UgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgfVxufVxuXG4uZmlndXJlc19jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cbi5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIC5maWd1cmVzX3N0cmlwZSB7XG4gIHdpZHRoOiA1NzVweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzdDN0M3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuZmlndXJlc19wYWdlX2hlYWQgLmZpZ3VyZXNfY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwcHg7XG4gIG9wYWNpdHk6IDU1JTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5maWd1cmVzX3BhZ2VfaGVhZCAuZmlndXJlc19jaXJjbGUge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5maWd1cmVzX3BhZ2VfaGVhZCAuZmlndXJlc19jaXJjbGUge1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIC5oZWFkZXIzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmZpZ3VyZXNfcGFnZV9oZWFkIC5oZWFkZXIzIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5maWd1cmVzX3BhZ2VfaGVhZCAuaGVhZGVyMyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5hZGRfZmlndXJlIHtcbiAgd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDMwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1JTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLm1haW5fcGFnZV9maWd1cmVzIC5hZGRfZmlndXJlIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICByaWdodDogMDtcbiAgfVxufVxuLmZpZ3VyZXNfY29udGFpbmVyIC5tYWluX3BhZ2VfZmlndXJlcyAuYWRkX2ZpZ3VyZSBhIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAubWFpbl9wYWdlX2ZpZ3VyZXMgLmFkZF9maWd1cmUgYSB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19zcGFjZV9pbWcge1xuICBoZWlnaHQ6IDM1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHotaW5kZXg6IDIwMDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMjcwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX3NwYWNlX2ltZyB7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX3NwYWNlX2ltZyB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwO1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCB7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIH1cbn1cbi5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmRlc2NyaXB0aW9uX3RleHQge1xuICB3aWR0aDogNjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZGVzY3JpcHRpb25fdGV4dCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5maWd1cmVzIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZmlndXJlcyB1bCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xuICB9XG59XG4uZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5maWd1cmVzIHVsIC5maWd1cmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1OTU5O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5maWd1cmVzX2NvbnRhaW5lciAuZmlndXJlc19ib3ggLmZpZ3VyZXMgdWwgLmZpZ3VyZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogMjMwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5maWd1cmVzIHVsIC5maWd1cmUge1xuICAgIG1hcmdpbjogNSU7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICAuZmlndXJlc19jb250YWluZXIgLmZpZ3VyZXNfYm94IC5maWd1cmVzIHVsIC5maWd1cmUgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAyMzBweDtcbiAgICBtYXgtd2lkdGg6IDIyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZpZ3VyZXNfY29udGFpbmVyIC5maWd1cmVzX2JveCAuZmlndXJlcyB1bCAuZmlndXJlIGltZyB7XG4gICAgbWF4LWhlaWdodDogMTIwcHg7XG4gICAgbWF4LXdpZHRoOiA4MHB4O1xuICB9XG59XG5cbi5jb250YWN0X2JveCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3gge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5jb250YWN0IC5oZWFkZXIxIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8ge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5jb250YWN0X2JveCAuY29udGFjdCAuY29udGFjdF9pbmZvIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3ggLmNvbnRhY3QgLmNvbnRhY3RfaW5mbyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ibG9jazogMTVweDtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8gLmRlc2NyaXB0aW9uX3RleHQge1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cbi5jb250YWN0X2JveCAuY29udGFjdCAuY29udGFjdF9pbmZvIC5oZWFkZXIzIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3ggLmNvbnRhY3QgLmNvbnRhY3RfaW5mbyAuaGVhZGVyMyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5jb250YWN0IC5jb250YWN0X2luZm8gLmFkZHJlc3Mge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGFjdF9ib3ggLmNvbnRhY3QgLmNvbnRhY3RfaW5mbyAuYWRkcmVzcyBhIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwJTtcbiAgZ2FwOiA1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAucGVyc29uYWxfZGF0ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cHg7XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAucGVyc29uYWxfZGF0ZSBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5wZXJzb25hbF9kYXRlIGlucHV0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxOTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAucGVyc29uYWxfZGF0ZSBpbnB1dCB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5jYXNlQWRkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLmNhc2UsIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5maWd1cmVfbGV2ZWwsIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5maWd1cmVfY2F0ZWdvcnkge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLmNhc2UsIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5maWd1cmVfbGV2ZWwsIC5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIC5maWd1cmVfY2F0ZWdvcnkge1xuICAgIHdpZHRoOiA5MyU7XG4gIH1cbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIHNlbGVjdCB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcbn1cbi5jb250YWN0X2JveCAuZm9ybV9tZXNzYWdlIG9wdGlvbiB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLmNvbnRhY3RfYm94IC5mb3JtX21lc3NhZ2UgLmZpZ3VyZV9hZGRfY2F0ZWdvcnkge1xuICB3aWR0aDogMzkwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udGFjdF9ib3ggLmZvcm1fbWVzc2FnZSAuZmlndXJlX2FkZF9jYXRlZ29yeSBwIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jb250YWN0X2JveCAuYm94X21lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNDAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmNvbnRhY3RfYm94IC5ib3hfbWVzc2FnZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gICAgd2lkdGg6IDkzJTtcbiAgfVxufVxuLmNvbnRhY3RfYm94IC5ib3hfbWVzc2FnZSAudGl0bGVfbWVzc2FnZSB7XG4gIHBhZGRpbmctYmxvY2s6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY29udGFjdF9ib3ggLmJveF9tZXNzYWdlIC50ZXh0YXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcmVzaXplOiBub25lO1xufVxuLmNvbnRhY3RfYm94IC5ib3hfbWVzc2FnZSAuYWdyZWVtZW50IHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uY2hlY2tib3ggaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbn1cblxuLmNoZWNrYm94IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY2hlY2tib3ggc3BhbiB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIGZsZXgtYmFzaXM6IDEwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmZpZ3VyZV9hZGRfY2F0ZWdvcnkgLmNoZWNrYm94X2NhdGVnb3J5IHNwYW4ge1xuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xufVxuXG4uY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCArIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDhEOEQ4O1xuICBib3JkZXI6IDJweCBsaWdodGJsdWUgc29saWQ7XG59XG5cbi5maWd1cmVfY2F0ZWdvcmllcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA4cHg7XG59XG5cbi5zdWJtaXQge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1OTU5O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggYmxhY2s7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vdF9yZWFkeSAubWFpbl9wYWdlIHtcbiAgaGVpZ2h0OiA4OHZoO1xufVxuLm5vdF9yZWFkeSAubWFpbl9wYWdlIC5oZWFkZXIyIHtcbiAgd2lkdGg6IDI1JTtcbn1cbi5ub3RfcmVhZHkgLm1haW5fcGFnZSAuaGVhZGVyMiBhIHtcbiAgY29sb3I6IGNhZGV0Ymx1ZTtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5wb3JhZHlfcGFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA3MCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5wb3JhZHlfcGFnZSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA1MCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XG4gIH1cbn1cbi5wb3JhZHlfcGFnZSAuaGVhZGVyMSB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cbi5wb3JhZHlfcGFnZSAuaGVhZGVyMyB7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5wb3JhZHlfcGFnZSAuaGVhZGVyMyB7XG4gICAgZm9udC1zaXplOiAxLCA1ZW07XG4gIH1cbn1cblxuLmFkdmljZTEsIC5hZHZpY2UzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgbWFyZ2luOiAyMHB4IDUwcHggMTIwcHggNTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmFkdmljZTEsIC5hZHZpY2UzIHtcbiAgICBtYXJnaW46IDIwcHggNSUgMTAwcHggNSU7XG4gIH1cbn1cblxuLmFkdmljZTIge1xuICBtYXJnaW46IDIwcHggNTBweCAxMjBweCA1MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDZENkQ2O1xuICBvcGFjaXR5OiA3NSU7XG4gIHdpZHRoOiA3MCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmFkdmljZTIge1xuICAgIG1hcmdpbjogMjBweCA1JSAxMDBweCAxNSU7XG4gIH1cbn1cbi5hZHZpY2UyIC5jaXJjbGVzX2FkdmljZV9ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWR2aWNlMiAuY2lyY2xlc19hZHZpY2VfYm94IC5jaXJjbGVfYWR2aWNlIHtcbiAgd2lkdGg6IDMwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYWR2aWNlMiAuY2lyY2xlc19hZHZpY2VfYm94IC5jaXJjbGVfYWR2aWNlIC5oZWFkZXIzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmFkdmljZTIgLmNpcmNsZXNfYWR2aWNlX2JveCAuY2lyY2xlX2FkdmljZSAuaGVhZGVyMyB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmFkdmljZTIgLmNpcmNsZXNfYWR2aWNlX2JveCAuY2lyY2xlX2FkdmljZSAuaGVhZGVyMyBwIHtcbiAgICBmb250LXNpemU6IDVweDtcbiAgfVxufVxuXG4ucGFnZV9jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLm1haW5fY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwdnc7XG4gIG1hcmdpbi1sZWZ0OiAxMHZ3O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5tYWluX2NvbnRhaW5lciB7XG4gICAgd2lkdGg6IDg1dnc7XG4gICAgbWFyZ2luLWxlZnQ6IDE1dnc7XG4gIH1cbn1cblxuLmhlYWRlcjEge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5oZWFkZXIxIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmhlYWRlcjEge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tYmxvY2s6IDIwcHg7XG4gIH1cbn1cblxuLmhlYWRlcjIge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDczNnB4KSB7XG4gIC5oZWFkZXIyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuaGVhZGVyMiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4uaGVhZGVyMiAuY2hvc2VuIHtcbiAgY29sb3I6ICNCMDIzMjM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5oZWFkZXIyIC5ub3RfY2hvc2VuIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmhlYWRlcjMge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2V0dGluZ3MvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2V0dGluZ3MvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2V0dGluZ3MvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX2FzaWRlLnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fbWFpbi1wYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fd29ya291dC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9qZWN0L3Njc3Mvc2VjdGlvbnMvX2ZpZ3VyZXMuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NlY3Rpb25zL19jb25jYWN0LnNjc3NcIixcIndlYnBhY2s6Ly8uL1Byb2plY3Qvc2Nzcy9zZWN0aW9ucy9fbm90X3JlYWR5X3BhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vUHJvamVjdC9zY3NzL3NlY3Rpb25zL19hZHZpY2Uuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Q0FBQTtBQU9BOzs7Ozs7Ozs7Ozs7O0VBYUUsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ0FGOztBREVBLGdEQUFBO0FBQ0E7O0VBRUUsY0FBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBREFBO0VBQ0UsZ0JBQUE7QUNHRjs7QUREQTtFQUNFLFlBQUE7QUNJRjs7QURGQTs7RUFFRSxXQUFBO0VBQ0EsYUFBQTtBQ0tGOztBREhBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ01GOztBQ25EQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBRHNERjtBRXRERTtFRE5GO0lBU0ksV0FBQTtFRHVERjtBQUNGO0FDdERFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRHdESjtBRXRFRTtFRFdBO0lBS0ksU0FBQTtJQUNBLGlCQUFBO0VEMERKO0FBQ0Y7QUV0RUU7RURLQTtJQVVJLGtCQUFBO0lBQ0EsNkJBQUE7SUFDQSxpQkFBQTtFRDJESjtBQUNGO0FDMURJO0VBUUUsbUJBQUE7RUFDQSxtQkV6QlM7RUYwQlQsZ0JBQUE7RUFDQSxjRXRDYTtFRnVDYixxQkFBQTtBRHFETjtBRTFGRTtFRHlCRTtJQUdJLGVBQUE7RURrRU47QUFDRjtBRXpGRTtFRG1CRTtJQU1JLGNBQUE7RURvRU47QUFDRjs7QUlwR0E7RUFDRSxZQUFBO0FKdUdGO0FJcEdFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtC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QUE4MEJGO0FFajJCRTtFRmlCRjtJQUlJLFdBQUE7SUFDQSxpQkFBQTtFQWcxQkY7QUFDRjs7QUFyekJBO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtBQXd6QkY7QUVsM0JFO0VGd0RGO0lBSUksZUFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUEwekJGO0FBQ0Y7QUVuM0JFO0VGa0RGO0lBU0ksZUFBQTtJQUNBLGtCQUFBO0VBNHpCRjtBQUNGOztBQXp6QkE7RUFDRSxtQkc5RGE7QUgwM0JmO0FFbjRCRTtFRnNFRjtJQUdJLGVBQUE7SUFDQSxpQkFBQTtFQTh6QkY7QUFDRjtBRW40QkU7RUZnRUY7SUFPSSxlQUFBO0VBZzBCRjtBQUNGO0FBL3pCRTtFQUNFLGNHL0VRO0VIZ0ZSLHFCQUFBO0FBaTBCSjtBQS96QkU7RUFDRSxxQkFBQTtFQUNBLGNHdkZlO0FIdzVCbkI7O0FBOXpCQTtFQUNFLG1CR2hGYTtFSGlGYixlQUFBO0VBQ0EsZ0JBQUE7QUFpMEJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEVyaWMgTWV5ZXIncyBDU1MgUmVzZXRcXHJcXG4gICBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xcclxcbiAgIHYyLjAgfCAyMDExMDEyNlxcclxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxyXFxuICAgVGhpcyBpcyBhIFNhc3MgcGFydGlhbFxcclxcbiovXFxyXFxuXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuICBxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgY29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgJ3NldHRpbmdzL3Jlc2V0JztcXHJcXG5AaW1wb3J0IFxcXCJzZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcInNldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvaGVhZGVyXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy9hc2lkZVxcXCI7XFxyXFxuQGltcG9ydCBcXFwic2VjdGlvbnMvZm9vdGVyXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy9tYWluLXBhZ2VcXFwiO1xcclxcbkBpbXBvcnQgXFxcInNlY3Rpb25zL3dvcmtvdXRcXFwiO1xcclxcbkBpbXBvcnQgXFxcInNlY3Rpb25zL2ZpZ3VyZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcInNlY3Rpb25zL2NvbmNhY3RcXFwiO1xcclxcbkBpbXBvcnQgXFxcInNlY3Rpb25zL25vdF9yZWFkeV9wYWdlXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJzZWN0aW9ucy9hZHZpY2VcXFwiO1xcclxcblxcclxcblxcclxcbi5wYWdlX2NvbnRhaW5lcntcXHJcXG4gIC8vICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcXHJcXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIC8vIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAvL2JhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay1iYWNrZ3JvdW5kO1xcclxcbn1cXHJcXG4ubWFpbl9jb250YWluZXJ7XFxyXFxuICB3aWR0aDogOTB2dztcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHZ3O1xcclxcbiAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICB3aWR0aDogODV2dztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1dnc7XFxyXFxuICB9XFxyXFxufVxcclxcbi8vICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISExXFxyXFxuLy8gLnBhZ2VfY29udGFpbmVye1xcclxcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbi8vICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4vLyAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuLy8gICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbi8vICAgaGVpZ2h0OiAxMDAlO1xcclxcbi8vICAgd2lkdGg6IDEwMCU7XFxyXFxuLy8gICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuLy8gICAvL2JhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay1iYWNrZ3JvdW5kO1xcclxcbi8vIH1cXHJcXG4vLyAubWFpbl9jb250YWluZXJ7XFxyXFxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuLy8gICB3aWR0aDogOTAlO1xcclxcbi8vICAgaGVpZ2h0OiAxMDAlO1xcclxcbi8vICAgY2xlYXI6IGJvdGg7XFxyXFxuLy8gICByaWdodDogLTE1JTtcXHJcXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS1iYWNrZ3JvdW5kO1xcclxcbi8vICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuLy8gICAgIHdpZHRoOiA4MCU7XFxyXFxuLy8gICAgIHJpZ2h0OiAtMTUlO1xcclxcbi8vICAgfVxcclxcbi8vIH1cXHJcXG5cXHJcXG4uaGVhZGVyMXtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5LCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIG1hcmdpbjogMCAwIDIwcHggMDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgbWFyZ2luLWJsb2NrOiAyMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyMntcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG4gIC5jaG9zZW57XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItcmVkO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuICAubm90X2Nob3NlbntcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogJGNvbG9yLWZvbnQtYmxhY2s7XFxyXFxuICB9XFxyXFxufVxcclxcbi5oZWFkZXIze1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4ubWVudV9tYWluLWNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICB0b3A6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHotaW5kZXg6IDUwMDtcXHJcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICBib3gtc2hhZG93OiAycHggM3B4IDNweCAycHggJGNvbG9yLXNvZnQtZ3JleTtcXHJcXG4gIC8vYm9yZGVyLWJvdHRvbTogMnB4IGJsYWNrIHNvbGlkO1xcclxcbiAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAubWVudV9tYWluIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICBnYXA6IDIycHg7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgIC8vIGdhcDogNSU7XFxyXFxuICAgICAgcGFkZGluZy1pbmxpbmU6IDElO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51X21haW5fZWxlbWVudCwgYXtcXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBkZXNrdG9we1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICBmb250LXNpemU6IDkwJTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICAgIGNvbG9yOiAkY29sb3ItZm9udC1ibGFjaztcXHJcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcblxcclxcbkBtaXhpbiBkZXNrdG9wIHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIG1vYmlsZSB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBoZWFkZXIxIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gaGVhZGVyMntcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gaGVhZGVyM3tcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZGVzY3JpcHRpb257XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiAkY29sb3ItZm9udC1ibGFjaztcXHJcXG59XCIsXCJcXHJcXG4kY29sb3ItZm9udC1ibGFjazogIzAwMDAwMDtcXHJcXG4kY29sb3ItZm9udC13aGl0ZTogI0ZGRkZGRjtcXHJcXG5cXHJcXG4kY29sb3ItcmVkOiAjQjAyMzIzO1xcclxcbiRjb2xvci1ibGFjay1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xcclxcbiRjb2xvci1uZWFybHktYmxhY2s6ICMxRTFFMUU7XFxyXFxuJGNvbG9yLXdoaXRlLWJhY2tncm91bmQ6ICNGRkZGRkY7XFxyXFxuJGNvbG9yLXNvZnQtZ3JleTogI0Q4RDhEODtcXHJcXG4kY29sb3ItY2hhbGstZ3JleTogI0Q2RDZENjtcXHJcXG4kY29sb3ItZ3JleTogIzU5NTk1OTtcXHJcXG5cXHJcXG4kZm9udC1wcmltYXJ5OiBSb2JvdG87XCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLm1lbnVfYXNpZGUtY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIC8vICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcXHJcXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIC5tZW51X2FzaWRlIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTAzcHg7XFxyXFxuICAgIGdhcDogMThweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAvLyAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXFxyXFxuICAgIHdpZHRoOiAxMHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stYmFja2dyb3VuZDtcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgIHdpZHRoOiAxNXZ3O1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51X2FzaWRlX2VsZW1lbnQge1xcclxcbiAgICAgIG1hcmdpbjogMCAwIDAgMTVweDtcXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgIG1hcmdpbjogMCAwIDAgMnB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBhe1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnksIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgIGNvbG9yOiAkY29sb3ItZm9udC13aGl0ZTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiA1OCU7XFxyXFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbi5mb290ZXJfY29udGFpbmVye1xcclxcbiAgY2xlYXI6IGJvdGg7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcclxcbiAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51X2Zvb3RlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwIDMwcHggMCAzMHB4O1xcclxcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbmVhcmx5LWJsYWNrO1xcclxcbiAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51X2Zvb3Rlcl9saXN0e1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGdhcDogNTBweDtcXHJcXG4gICAgICBtYXJnaW46IDAgMTVweCAwIDA7XFxyXFxuXFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgZ2FwOiAxMCU7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGEge1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICBjb2xvcjogIzkyOEU4RTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBhe1xcclxcbiAgICAgIGNvbG9yOiAkY29sb3Itc29mdC1ncmV5O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbi5vbmVfcGFnZXJ7XFxyXFxuLy8gISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxcclxcbiAgLy8gaGVpZ2h0OiA5MHZoO1xcclxcbn1cXHJcXG4ubWFpbl9wYWdle1xcclxcbiAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltZy9pbWdfbWFpbl9wYWdlLmpwZWdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nL2ltZ19tYWluX3BhZ2UuanBlZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIHotaW5kZXg6IDIwMDtcXHJcXG4gIGhlaWdodDogOTAlO1xcclxcbiAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiA1JTtcXHJcXG4gICAgLy8gISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxcclxcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDY2LjUlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcXHJcXG4gICAgcGFkZGluZzogNSU7XFxyXFxuICAgIC8vIG1hcmdpbi1sZWZ0OiA2MHB4O1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogNTV2aDtcXHJcXG4gICAgcGFkZGluZzogNSU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzMHZoO1xcclxcblxcclxcbiAgICAvLyBtYXJnaW4tbGVmdDogNSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAuY2lyY2xlc193b3Jrb3V0LWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICAvLyBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jaXJjbGVzX3dvcmtvdXR7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLWJhY2tncm91bmQ7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgIHdpZHRoOiAxNzBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDE3MHB4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICB3aWR0aDogMzAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIH1cXHJcXG4gIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgxKXtcXHJcXG4gICAgYm9yZGVyOiAxMHB4ICNFN0U2RTYgc29saWQ7XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICBib3JkZXI6IDZweCAjRTdFNkU2IHNvbGlkO1xcclxcbiAgICB9XFxyXFxuICAgIGgyLCBhIHtcXHJcXG4gICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtY2hpbGQoMil7XFxyXFxuICAgIGJvcmRlcjogMTBweCAjQ0NDQkNCIHNvbGlkO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICBib3JkZXI6IDZweCAjQ0NDQkNCIHNvbGlkO1xcclxcbiAgICB9XFxyXFxuICAgIGgyLCBhIHtcXHJcXG4gICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIC5jaXJjbGVzX3dvcmtvdXQtY29udGFpbmVyIDpudGgtb2YtdHlwZSgzKXtcXHJcXG4gICAgYm9yZGVyOiAxMHB4ICM5RDlEOUQgc29saWQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgIGJvcmRlcjogNnB4ICM5RDlEOUQgc29saWQ7XFxyXFxuICAgIH1cXHJcXG4gICAgaDIsIGEge1xcclxcbiAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbi5hYm91dF9wbGF0Zm9ybXtcXHJcXG4gIHdpZHRoOiAyOTVweDtcXHJcXG5cXHJcXG4gIC5hYm91dF9wbGF0Zm9ybV90ZXh0e1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcblxcclxcbiAgfVxcclxcbn1cXHJcXG4gIC5oZWFkZXIzIHtcXHJcXG4gICAgbWFyZ2luLWJsb2NrOiAyMHB4IDEwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcblxcclxcbi53b3Jrb3V0e1xcclxcbiAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgIC8vIHBhZGRpbmctbGVmdDogNjBweDtcXHJcXG4gICAgcGFkZGluZzogNSU7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgIHBhZGRpbmc6IDUlO1xcclxcbiAgfVxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWNoYWxrLWdyZXk7XFxyXFxuICAuaGVhZGVyNHtcXHJcXG4gICAgcGFkZGluZy1ibG9jazogMTBweCAyMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBjb2xvcjogJGNvbG9yLXJlZDtcXHJcXG4gIH1cXHJcXG4gIC5kZXNjcmlwdGlvbl90ZXh0e1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBjb2xvcjogJGNvbG9yLWZvbnQtd2hpdGU7XFxyXFxuICB9XFxyXFxuICAud29ya291dF9pbWdhZ2VzLCB1bCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICAvLyBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwJTtcXHJcXG4gICAgfVxcclxcbiAgICAud29ya291dF9pbWFnZSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLWJhY2tncm91bmQ7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAgIEBpbmNsdWRlIGRlc2t0b3B7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgbWFyZ2luOiA1JTtcXHJcXG4gICAgICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgICAgICAvLyB3aWR0aDogMTAwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMzB2dztcXHJcXG4gICAgICB9XFxyXFxuICAgICAgaW1nIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGRlc2t0b3B7XFxyXFxuICAgICAgICAgIC8vbWluLWhlaWdodDogMjAwcHg7XFxyXFxuICAgICAgICAgIG1heC1oZWlnaHQ6IDMyMHB4O1xcclxcbiAgICAgICAgICBtYXgtd2lkdGg6IDI4MHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMjBweDtcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiA5MCU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbi5maWd1cmVzX2NvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtYmFja2dyb3VuZDtcXHJcXG5cXHJcXG4gIC5tYWluX3BhZ2VfZmlndXJlcyB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXHJcXG4gICAgLmZpZ3VyZXNfcGFnZV9oZWFkIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcblxcclxcbiAgICAgIC5maWd1cmVzX3N0cmlwZSB7XFxyXFxuICAgICAgICB3aWR0aDogNTc1cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzdDN0M3O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5maWd1cmVzX2NpcmNsZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtYmFja2dyb3VuZDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHRvcDogLTEwcHg7XFxyXFxuICAgICAgICBvcGFjaXR5OiA1NSU7XFxyXFxuICAgICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgICAgICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuaGVhZGVyMyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5LCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hZGRfZmlndXJlIHtcXHJcXG4gICAgICB3aWR0aDogMTEwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1ibGFjay1iYWNrZ3JvdW5kO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHJpZ2h0OiAxNSU7XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgYSB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gICAgICAgIGNvbG9yOiAkY29sb3ItZm9udC13aGl0ZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiA4cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmlndXJlc19zcGFjZV9pbWcge1xcclxcbiAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltZy9QRF9pbWdfM19zenBhZ2F0LmpwZWdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgei1pbmRleDogMjAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0yNzBweDtcXHJcXG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3O1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmlndXJlc19ib3gge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG5cXHJcXG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRlc2NyaXB0aW9uX3RleHR7XFxyXFxuICAgICAgd2lkdGg6IDYwMHB4O1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgY29sb3I6ICRjb2xvci1mb250LWJsYWNrO1xcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmlndXJlcyB1bCB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxyXFxuXFxyXFxuICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5maWd1cmUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXk7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcclxcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgICAgICAgIGhlaWdodDogMjUwcHg7XFxyXFxuICAgICAgICAgIHdpZHRoOiAyMzBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxyXFxuICAgICAgICAgIG1hcmdpbjogNSU7XFxyXFxuICAgICAgICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIGltZ3tcXHJcXG4gICAgICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XFxyXFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMjMwcHg7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMjBweDtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcblxcclxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEyMHB4O1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogODBweDtcXHJcXG4gICAgICAgICAgfX1cXHJcXG5cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG59XCIsXCJAaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy92YXJpYWJsZXNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuXFxyXFxuLmNvbnRhY3RfYm94IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5LCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMCU7XFxyXFxuICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3Qge1xcclxcbiAgICAuaGVhZGVyMSB7XFxyXFxuICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhY3RfaW5mbyB7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJsb2NrOiAxNXB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuZGVzY3JpcHRpb25fdGV4dCB7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmhlYWRlcjMge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuYWRkcmVzcyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuXFxyXFxuICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9ybV9tZXNzYWdlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wZXJzb25hbF9kYXRlIHtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGdhcDogNXB4O1xcclxcblxcclxcbiAgICAgIGxhYmVsIHtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaW5wdXQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgbGVmdDogMTkwcHg7XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIC5jYXNlQWRke1xcclxcbiAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2FzZSwgLmZpZ3VyZV9sZXZlbCwgLmZpZ3VyZV9jYXRlZ29yeSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgQGluY2x1ZGUgbW9iaWxle1xcclxcbiAgICAgICAgd2lkdGg6IDkzJTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgc2VsZWN0IHtcXHJcXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgOjpzZWxlY3Rpb24ge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c3RlZWxibHVlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIG9wdGlvbiB7XFxyXFxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5maWd1cmVfYWRkX2NhdGVnb3J5IHtcXHJcXG4gICAgICB3aWR0aDogMzkwcHg7XFxyXFxuICAgICAgLy9kaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAgICAgcCB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib3hfbWVzc2FnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcXHJcXG4gICAgICB3aWR0aDogOTMlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aXRsZV9tZXNzYWdlIHtcXHJcXG4gICAgICBwYWRkaW5nLWJsb2NrOiAxMHB4O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRleHRhcmVhIHtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgcmVzaXplOiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hZ3JlZW1lbnQge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3ggaW5wdXQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGhlaWdodDogMTBweDtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3gge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IHNwYW4ge1xcclxcbiAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgZmxleC1iYXNpczogMTBweDtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlndXJlX2FkZF9jYXRlZ29yeSB7XFxyXFxuICAuY2hlY2tib3hfY2F0ZWdvcnkgc3BhbiB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCBpbnB1dDpjaGVja2VkICsgc3BhbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc29mdC1ncmV5O1xcclxcbiAgYm9yZGVyOiAycHggbGlnaHRibHVlIHNvbGlkO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZmlndXJlX2NhdGVnb3JpZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdCB7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggYmxhY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogMjUlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4uL3NldHRpbmdzL3ZhcmlhYmxlc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4ubm90X3JlYWR5IC5tYWluX3BhZ2Uge1xcclxcbiAgaGVpZ2h0OiA4OHZoO1xcclxcbiAgLmhlYWRlcjIge1xcclxcbiAgICB3aWR0aDogMjUlO1xcclxcbiAgICBhIHtcXHJcXG4gICAgICBjb2xvcjogY2FkZXRibHVlO1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblwiLFwiQGltcG9ydCBcXFwiLi4vc2V0dGluZ3MvdmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zZXR0aW5ncy9taXhpbnNcXFwiO1xcclxcblxcclxcbi5wb3JhZHlfcGFnZXtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nLzIuanBlZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogNzAlO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC5oZWFkZXIxe1xcclxcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxyXFxuICB9XFxyXFxuICAuaGVhZGVyM3tcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxyXFxuICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICBmb250LXNpemU6IDEsNWVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbi5hZHZpY2UxLCAuYWR2aWNlM3tcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS1iYWNrZ3JvdW5kO1xcclxcbiAgbWFyZ2luOiAyMHB4IDUwcHggMTIwcHggNTBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IDUlIDEwMHB4IDUlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYWR2aWNlMntcXHJcXG4gIG1hcmdpbjogMjBweCA1MHB4IDEyMHB4IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItY2hhbGstZ3JleTtcXHJcXG4gIG9wYWNpdHk6IDc1JTtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgIG1hcmdpbjogMjBweCA1JSAxMDBweCAxNSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2lyY2xlc19hZHZpY2VfYm94e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIC5jaXJjbGVfYWR2aWNle1xcclxcbiAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgLmhlYWRlcjN7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBAaW5jbHVkZSBtb2JpbGV7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIHB7XFxyXFxuICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZXtcXHJcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNXB4O1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4YjNkMWJlZjgwMDIzZWJhZjIzNlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==