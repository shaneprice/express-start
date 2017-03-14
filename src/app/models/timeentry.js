// Example model


function TimeEntry (opts) {
  if(!opts) opts = {};
  this.title = opts.title || '';
  this.startTime = opts.startTime || '';
  this.endTime = opts.endTime || '';
}

module.exports = TimeEntry;

