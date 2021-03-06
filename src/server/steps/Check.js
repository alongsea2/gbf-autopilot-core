import Step from "./Step";

exports = module.exports = (worker, logger) => (selector, timeout) => {
  return Step(function Check() {
    logger.debug("Checking element:", selector);
    return worker.sendAction("element", {selector, scroll: false, retry: false}, timeout);
  });
};

exports["@require"] = ["worker", "logger"];
