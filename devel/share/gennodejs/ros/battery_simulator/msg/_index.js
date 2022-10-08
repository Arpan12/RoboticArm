
"use strict";

let battery_simResult = require('./battery_simResult.js');
let battery_simFeedback = require('./battery_simFeedback.js');
let battery_simAction = require('./battery_simAction.js');
let battery_simActionFeedback = require('./battery_simActionFeedback.js');
let battery_simActionGoal = require('./battery_simActionGoal.js');
let battery_simGoal = require('./battery_simGoal.js');
let battery_simActionResult = require('./battery_simActionResult.js');

module.exports = {
  battery_simResult: battery_simResult,
  battery_simFeedback: battery_simFeedback,
  battery_simAction: battery_simAction,
  battery_simActionFeedback: battery_simActionFeedback,
  battery_simActionGoal: battery_simActionGoal,
  battery_simGoal: battery_simGoal,
  battery_simActionResult: battery_simActionResult,
};
