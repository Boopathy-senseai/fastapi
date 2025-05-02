// dangerfile.js

// Warn if no description is provided
if (!danger.github.pr.body || danger.github.pr.body.length < 10) {
    warn("Please provide a detailed PR description.");
  }
  
  // Fail if there are too many lines changed
  if (danger.github.pr.additions + danger.github.pr.deletions > 500) {
    fail("PR is too large. Try to break it down.");
  }
  
  // Warn if no reviewers
  if (danger.github.pr.requested_reviewers.length === 0) {
    warn("No reviewers assigned. Please request at least one.");
  }
  
  // Warn if no test files are changed
  const hasTests = danger.git.modified_files.some(f => f.includes("test"));
  if (!hasTests) {
    warn("No test files changed. Are you sure this PR doesn't need tests?");
  }
  