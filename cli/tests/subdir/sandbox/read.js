// This example is meant to be run with cwd set to cli/tests/subdir/sandbox
// and with --allow-read=cli/tests/subdir/sandbox
// This demonstrates a bug where deno can read hello.txt even though its outside
// of the whitelist.
console.log(Deno.readTextFileSync("hello.txt"));
