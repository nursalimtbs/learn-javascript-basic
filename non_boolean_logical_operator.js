console.info("Hello" || "");
console.info("" || []);
console.info(0 || 42);
console.info(null || "Default");
console.info(undefined || "Fallback");
console.info(false || true);


console.info("Hello" && "");
console.info("" && []);
console.info(0 && 42);
console.info(null && "Default");
console.info(undefined && "Fallback");
console.info(false && true);