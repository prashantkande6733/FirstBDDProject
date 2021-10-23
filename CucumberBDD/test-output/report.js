$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("dash.feature");
formatter.feature({
  "line": 2,
  "name": "dashboard Of JBK application",
  "description": "",
  "id": "dashboard-of-jbk-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5368721800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verify courses",
  "description": "",
  "id": "dashboard-of-jbk-application;verify-courses",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@dash"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user should be on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user will make a list of courses",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user verify course list",
  "keyword": "Then "
});
formatter.match({
  "location": "DashStepdefs.user_should_be_on_home_page()"
});
formatter.result({
  "duration": 484812300,
  "status": "passed"
});
formatter.match({
  "location": "DashStepdefs.user_will_make_a_list_of_courses()"
});
formatter.result({
  "duration": 96063600,
  "status": "passed"
});
formatter.match({
  "location": "DashStepdefs.user_verify_course_list()"
});
formatter.result({
  "duration": 1363300,
  "status": "passed"
});
formatter.after({
  "duration": 18379200,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "JBK offline website",
  "description": "",
  "id": "jbk-offline-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "login Test",
  "description": "",
  "id": "jbk-offline-website;login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cuname\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user will be on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "jbk-offline-website;login-test;",
  "rows": [
    {
      "cells": [
        "uname",
        "pass"
      ],
      "line": 11,
      "id": "jbk-offline-website;login-test;;1"
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456"
      ],
      "line": 12,
      "id": "jbk-offline-website;login-test;;2"
    },
    {
      "cells": [
        "mangesh",
        "ahsjndjdcb"
      ],
      "line": 13,
      "id": "jbk-offline-website;login-test;;3"
    },
    {
      "cells": [
        "prashant",
        "uahuhj"
      ],
      "line": 14,
      "id": "jbk-offline-website;login-test;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3675769100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "login Test",
  "description": "",
  "id": "jbk-offline-website;login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enters \"kiran@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user will be on home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 35
    }
  ],
  "location": "LoginStepdefs.user_enters_and(String,String)"
});
formatter.result({
  "duration": 336186400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.user_click_on_login_button()"
});
formatter.result({
  "duration": 268044200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.user_will_be_on_home_page()"
});
formatter.result({
  "duration": 7686300,
  "status": "passed"
});
formatter.after({
  "duration": 13998800,
  "status": "passed"
});
formatter.before({
  "duration": 4469026800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "login Test",
  "description": "",
  "id": "jbk-offline-website;login-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enters \"mangesh\" and \"ahsjndjdcb\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user will be on home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mangesh",
      "offset": 13
    },
    {
      "val": "ahsjndjdcb",
      "offset": 27
    }
  ],
  "location": "LoginStepdefs.user_enters_and(String,String)"
});
formatter.result({
  "duration": 375357300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.user_click_on_login_button()"
});
formatter.result({
  "duration": 83306100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.user_will_be_on_home_page()"
});
formatter.result({
  "duration": 6336600,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Dashboard]\u003e but was:\u003cJavaByKiran | [Log in]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.Stepdefs.LoginStepdefs.user_will_be_on_home_page(LoginStepdefs.java:49)\r\n\tat ✽.Then user will be on home page(login.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 25387100,
  "status": "passed"
});
formatter.before({
  "duration": 4220670100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "login Test",
  "description": "",
  "id": "jbk-offline-website;login-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enters \"prashant\" and \"uahuhj\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user will be on home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "prashant",
      "offset": 13
    },
    {
      "val": "uahuhj",
      "offset": 28
    }
  ],
  "location": "LoginStepdefs.user_enters_and(String,String)"
});
formatter.result({
  "duration": 316291200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.user_click_on_login_button()"
});
formatter.result({
  "duration": 65381300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.user_will_be_on_home_page()"
});
formatter.result({
  "duration": 5168700,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Dashboard]\u003e but was:\u003cJavaByKiran | [Log in]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.Stepdefs.LoginStepdefs.user_will_be_on_home_page(LoginStepdefs.java:49)\r\n\tat ✽.Then user will be on home page(login.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 22295100,
  "status": "passed"
});
});