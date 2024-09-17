/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./scripts/app.js":
      /*!************************!*\
  !*** ./scripts/app.js ***!
  \************************/
      /***/ () => {
        eval(
          'function API(word) {\r\n  const api = fetch("../promiseObject.json")\r\n    // `https://api.weatherstack.com/current?access_key=0c925055acf0ff6c8dd8ceba26f9867d&query=${word}`\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      if (\r\n        document.querySelector(".time-zone") == null &&\r\n        document.querySelector("temperature") == null\r\n      ) {\r\n        extractLocation(data.location);\r\n        extractDescription(data.current);\r\n      } else if (\r\n        document.querySelector(".time-zone") !== null &&\r\n        document.querySelector(".temperature") !== null\r\n      ) {\r\n        document\r\n          .querySelector(".location")\r\n          .removeChild(document.querySelector(".time-zone"));\r\n        document\r\n          .querySelector(".location")\r\n          .removeChild(document.querySelector(".local-time"));\r\n\r\n        document\r\n          .querySelector(".description")\r\n          .removeChild(document.querySelector(".temperature-details"));\r\n        setTimeout(() => {\r\n          extractLocation(data.location);\r\n          extractDescription(data.current);\r\n        });\r\n      } else {\r\n        return;\r\n      }\r\n    })\r\n    .catch((error) => {\r\n      alert(error);\r\n    });\r\n  return api;\r\n}\r\n\r\nsearchBtn.addEventListener("click", function (e) {\r\n  e.preventDefault();\r\n  const word = searchInput.value;\r\n  if (word == "") {\r\n    alert(new Error("Input Can\'t be empty"));\r\n  } else {\r\n    API(word);\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://d-weather/./scripts/app.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = {};
  /******/ __webpack_modules__["./scripts/app.js"]();

  /******/
  /******/
})();
