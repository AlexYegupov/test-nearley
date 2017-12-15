// This is an example of how to use a nearley-made grammar.
var PROMPT = "> ";
var nearley = require("nearley");
var grammar = require("./grammar2.js");


console.log('Initial data:', grammar.ParserRules, grammar.ParserStart)
ans = new nearley.Parser(grammar.ParserRules, grammar.ParserStart).feed('3 * 2');
consoel.log('Result:', ans)

/* 
 * 
 * 
 * return
 * 
 * 
 * 
 * 
 * // This is where the action is.
 * function runmath(s) {
 *   console.log('s:', s)
 *   var ans;
 *   try {// We want to catch parse errors and die appropriately
 * 
 *     // Make a parser and feed the input
 *     console.log('DANO', grammar.ParserRules, grammar.ParserStart, s )
 *     ans = new nearley.Parser(grammar.ParserRules, grammar.ParserStart).feed(s);
 *     //console.log("parser table:", table);
 *     consoel.log('RR:', ans)
 *     
 *     // Check if there are any results
 *     if (ans.results.length) {
 *       //console.log('RRR:',ans)
 *       return ans.results[0].toString();
 *     } else {
 *       // This means the input is incomplete.
 *       var out = "Error: incomplete input, parse failed. :(";
 *       return out;
 *     }
 *   } catch(e) {
 *     console.log('error:', e)
 *     if (e.offset) {
 *       // Panic in style, by graphically pointing out the error location.
 *       var out = new Array(PROMPT.length + e.offset + 1).join("-") + "^  Error.";
 *       //                                  --------
 *       //                                         ^ This comes from nearley!
 *       return out;
 *     } else {
 *       console.log(e)
 *     }
 *   }
 * }
 * 
 * // node readline gunk. Nothing too exciting.
 * var readline = require('readline'),
 *     rl = readline.createInterface(process.stdin, process.stdout);
 * 
 * rl.setPrompt(PROMPT);
 * rl.prompt();
 * 
 * rl.on('line', function(line) {
 *   console.log(runmath(line));
 *   rl.prompt();
 * }).on('close', function() {
 *   console.log('\nBye.');
 *   process.exit(0);
 * });*/
