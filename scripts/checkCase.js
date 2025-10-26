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
      const original = seen.get(lower);
      if (!duplicates.some(pair => pair[0] === original && pair[1] === file)) {
        // Add both the original and current file as a conflict pair
        duplicates.push([original, file]);
      }
    } else {
      seen.set(lower, file);
    }
  }

  if (duplicates.length > 0) {
    console.log("⚠️ Case-insensitive duplicates found (files that differ only by case):");
    duplicates.forEach(([original, duplicate]) => {
      console.log(` - "${original}" conflicts with "${duplicate}"`);
    });
    process.exit(1);
  } else {
    console.log("✅ No case-insensitive duplicates found (no files differ only by case).");
  }
} catch (err) {
  console.error("❌ Error while checking:", err.message);
  process.exit(1);
}
