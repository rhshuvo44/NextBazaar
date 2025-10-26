import { execSync } from "child_process";

try {
  const output = execSync("git ls-files", { encoding: "utf-8" });
  const files = output
    .split("\n")
    .filter(f => /\.(jpg|jpeg|png)$/i.test(f))
    .filter(Boolean);

  const seen = new Map();
  const duplicates = [];

  for (const file of files) {
    const lower = file.toLowerCase();
    if (seen.has(lower)) {
      duplicates.push(file);
    } else {
      seen.set(lower, true);
    }
  }

  if (duplicates.length > 0) {
    console.log("⚠️ Case-sensitive duplicates found:");
    duplicates.forEach(f => console.log(" - " + f));
    process.exit(1);
  } else {
    console.log("✅ No case-sensitive duplicates found.");
  }
} catch (err) {
  console.error("❌ Error while checking:", err.message);
  process.exit(1);
}
