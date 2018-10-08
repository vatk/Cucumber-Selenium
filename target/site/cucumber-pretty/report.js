$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginFeature",
  "description": "This feature deals with the login functionality of the application",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7484618913,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the following for login",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginS.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 2762487120,
  "status": "passed"
});
formatter.match({
  "location": "LoginS.iEnterTheFollowingForLogin(DataTable)"
});
formatter.result({
  "duration": 203665486,
  "status": "passed"
});
formatter.match({
  "location": "LoginS.iClickLoginButton()"
});
formatter.result({
  "duration": 44149239,
  "status": "passed"
});
formatter.match({
  "location": "LoginS.iShouldSeeTheUserformPage()"
});
formatter.result({
  "duration": 50349973,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #Initial\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027KATKAR10\u0027, ip: \u0027192.168.99.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 62.0.3, javascriptEnabled: true, moz:accessibilityChecks: false, moz:geckodriverVersion: 0.23.0, moz:headless: false, moz:processID: 3424, moz:profile: C:\\Users\\katkar\\AppData\\Loc..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: XP, platformName: XP, platformVersion: 10.0, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 18eef2bc-84f0-45c0-8644-2c93755c9f96\n*** Element info: {Using\u003did, value\u003dInitial}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat Steps.LoginS.iShouldSeeTheUserformPage(LoginS.java:53)\r\n\tat ✽.Then I should see the userform page(Login.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4919473239,
  "status": "passed"
});
formatter.before({
  "duration": 7236111709,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login with correct username and password to fail",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password-to-fail",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter the following for login",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 16
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 17
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see the userform page wrongly",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginS.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 2022838564,
  "status": "passed"
});
formatter.match({
  "location": "LoginS.iEnterTheFollowingForLogin(DataTable)"
});
formatter.result({
  "duration": 111061523,
  "status": "passed"
});
formatter.match({
  "location": "LoginS.iClickLoginButton()"
});
formatter.result({
  "duration": 82924196,
  "status": "passed"
});
formatter.match({
  "location": "LoginS.iShouldSeeTheUserformPageWrongly()"
});
formatter.result({
  "duration": 13637517,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #Initials\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027KATKAR10\u0027, ip: \u0027192.168.99.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 62.0.3, javascriptEnabled: true, moz:accessibilityChecks: false, moz:geckodriverVersion: 0.23.0, moz:headless: false, moz:processID: 14312, moz:profile: C:\\Users\\katkar\\AppData\\Loc..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: XP, platformName: XP, platformVersion: 10.0, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 59be65b5-865c-4f02-bdc6-be9d889f9c3a\n*** Element info: {Using\u003did, value\u003dInitials}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat Steps.LoginS.iShouldSeeTheUserformPageWrongly(LoginS.java:58)\r\n\tat ✽.Then I should see the userform page wrongly(Login.feature:19)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4326283677,
  "status": "passed"
});
});