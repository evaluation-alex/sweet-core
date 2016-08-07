"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const unaryOperators_552 = { "+": true, "-": true, "!": true, "~": true, "++": true, "--": true, typeof: true, void: true, delete: true };
const binaryOperatorPrecedence_553 = { "*": 13, "/": 13, "%": 13, "+": 12, "-": 12, ">>": 11, "<<": 11, ">>>": 11, "<": 10, "<=": 10, ">": 10, ">=": 10, in: 10, instanceof: 10, "==": 9, "!=": 9, "===": 9, "!==": 9, "&": 8, "^": 7, "|": 6, "&&": 5, "||": 4 };
var operatorAssoc_554 = { "*": "left", "/": "left", "%": "left", "+": "left", "-": "left", ">>": "left", "<<": "left", ">>>": "left", "<": "left", "<=": "left", ">": "left", ">=": "left", in: "left", instanceof: "left", "==": "left", "!=": "left", "===": "left", "!==": "left", "&": "left", "^": "left", "|": "left", "&&": "left", "||": "left" };
function operatorLt_555(left_560, right_561, assoc_562) {
  if (assoc_562 === "left") {
    return left_560 < right_561;
  } else {
    return left_560 <= right_561;
  }
}
function getOperatorPrec_556(op_563) {
  return binaryOperatorPrecedence_553[op_563];
}
function getOperatorAssoc_557(op_564) {
  return operatorAssoc_554[op_564];
}
function isUnaryOperator_558(op_565) {
  return (op_565.match("punctuator") || op_565.match("identifier") || op_565.match("keyword")) && unaryOperators_552.hasOwnProperty(op_565.val());
}
function isOperator_559(op_566) {
  if (op_566.match("punctuator") || op_566.match("identifier") || op_566.match("keyword")) {
    return binaryOperatorPrecedence_553.hasOwnProperty(op_566) || unaryOperators_552.hasOwnProperty(op_566.val());
  }
  return false;
}
exports.operatorLt = operatorLt_555;
exports.getOperatorPrec = getOperatorPrec_556;
exports.getOperatorAssoc = getOperatorAssoc_557;
exports.isUnaryOperator = isUnaryOperator_558;
exports.isOperator = isOperator_559;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3N3ZWV0L29wZXJhdG9ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU0scUJBQXFCLEVBQUMsS0FBSyxJQUFOLEVBQVksS0FBSyxJQUFqQixFQUF1QixLQUFLLElBQTVCLEVBQWtDLEtBQUssSUFBdkMsRUFBNkMsTUFBTSxJQUFuRCxFQUF5RCxNQUFNLElBQS9ELEVBQXFFLFFBQVEsSUFBN0UsRUFBbUYsTUFBTSxJQUF6RixFQUErRixRQUFRLElBQXZHLEVBQTNCO0FBQ0EsTUFBTSwrQkFBK0IsRUFBQyxLQUFLLEVBQU4sRUFBVSxLQUFLLEVBQWYsRUFBbUIsS0FBSyxFQUF4QixFQUE0QixLQUFLLEVBQWpDLEVBQXFDLEtBQUssRUFBMUMsRUFBOEMsTUFBTSxFQUFwRCxFQUF3RCxNQUFNLEVBQTlELEVBQWtFLE9BQU8sRUFBekUsRUFBNkUsS0FBSyxFQUFsRixFQUFzRixNQUFNLEVBQTVGLEVBQWdHLEtBQUssRUFBckcsRUFBeUcsTUFBTSxFQUEvRyxFQUFtSCxJQUFJLEVBQXZILEVBQTJILFlBQVksRUFBdkksRUFBMkksTUFBTSxDQUFqSixFQUFvSixNQUFNLENBQTFKLEVBQTZKLE9BQU8sQ0FBcEssRUFBdUssT0FBTyxDQUE5SyxFQUFpTCxLQUFLLENBQXRMLEVBQXlMLEtBQUssQ0FBOUwsRUFBaU0sS0FBSyxDQUF0TSxFQUF5TSxNQUFNLENBQS9NLEVBQWtOLE1BQU0sQ0FBeE4sRUFBckM7QUFDQSxJQUFJLG9CQUFvQixFQUFDLEtBQUssTUFBTixFQUFjLEtBQUssTUFBbkIsRUFBMkIsS0FBSyxNQUFoQyxFQUF3QyxLQUFLLE1BQTdDLEVBQXFELEtBQUssTUFBMUQsRUFBa0UsTUFBTSxNQUF4RSxFQUFnRixNQUFNLE1BQXRGLEVBQThGLE9BQU8sTUFBckcsRUFBNkcsS0FBSyxNQUFsSCxFQUEwSCxNQUFNLE1BQWhJLEVBQXdJLEtBQUssTUFBN0ksRUFBcUosTUFBTSxNQUEzSixFQUFtSyxJQUFJLE1BQXZLLEVBQStLLFlBQVksTUFBM0wsRUFBbU0sTUFBTSxNQUF6TSxFQUFpTixNQUFNLE1BQXZOLEVBQStOLE9BQU8sTUFBdE8sRUFBOE8sT0FBTyxNQUFyUCxFQUE2UCxLQUFLLE1BQWxRLEVBQTBRLEtBQUssTUFBL1EsRUFBdVIsS0FBSyxNQUE1UixFQUFvUyxNQUFNLE1BQTFTLEVBQWtULE1BQU0sTUFBeFQsRUFBeEI7QUFDQSxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0MsU0FBbEMsRUFBNkMsU0FBN0MsRUFBd0Q7QUFDdEQsTUFBSSxjQUFjLE1BQWxCLEVBQTBCO0FBQ3hCLFdBQU8sV0FBVyxTQUFsQjtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU8sWUFBWSxTQUFuQjtBQUNEO0FBQ0Y7QUFDRCxTQUFTLG1CQUFULENBQTZCLE1BQTdCLEVBQXFDO0FBQ25DLFNBQU8sNkJBQTZCLE1BQTdCLENBQVA7QUFDRDtBQUNELFNBQVMsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0M7QUFDcEMsU0FBTyxrQkFBa0IsTUFBbEIsQ0FBUDtBQUNEO0FBQ0QsU0FBUyxtQkFBVCxDQUE2QixNQUE3QixFQUFxQztBQUNuQyxTQUFPLENBQUMsT0FBTyxLQUFQLENBQWEsWUFBYixLQUE4QixPQUFPLEtBQVAsQ0FBYSxZQUFiLENBQTlCLElBQTRELE9BQU8sS0FBUCxDQUFhLFNBQWIsQ0FBN0QsS0FBeUYsbUJBQW1CLGNBQW5CLENBQWtDLE9BQU8sR0FBUCxFQUFsQyxDQUFoRztBQUNEO0FBQ0QsU0FBUyxjQUFULENBQXdCLE1BQXhCLEVBQWdDO0FBQzlCLE1BQUksT0FBTyxLQUFQLENBQWEsWUFBYixLQUE4QixPQUFPLEtBQVAsQ0FBYSxZQUFiLENBQTlCLElBQTRELE9BQU8sS0FBUCxDQUFhLFNBQWIsQ0FBaEUsRUFBeUY7QUFDdkYsV0FBTyw2QkFBNkIsY0FBN0IsQ0FBNEMsTUFBNUMsS0FBdUQsbUJBQW1CLGNBQW5CLENBQWtDLE9BQU8sR0FBUCxFQUFsQyxDQUE5RDtBQUNEO0FBQ0QsU0FBTyxLQUFQO0FBQ0Q7UUFDeUIsVSxHQUFsQixjO1FBQ3VCLGUsR0FBdkIsbUI7UUFDd0IsZ0IsR0FBeEIsb0I7UUFDdUIsZSxHQUF2QixtQjtRQUNrQixVLEdBQWxCLGMiLCJmaWxlIjoib3BlcmF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdW5hcnlPcGVyYXRvcnNfNTUyID0ge1wiK1wiOiB0cnVlLCBcIi1cIjogdHJ1ZSwgXCIhXCI6IHRydWUsIFwiflwiOiB0cnVlLCBcIisrXCI6IHRydWUsIFwiLS1cIjogdHJ1ZSwgdHlwZW9mOiB0cnVlLCB2b2lkOiB0cnVlLCBkZWxldGU6IHRydWV9O1xuY29uc3QgYmluYXJ5T3BlcmF0b3JQcmVjZWRlbmNlXzU1MyA9IHtcIipcIjogMTMsIFwiL1wiOiAxMywgXCIlXCI6IDEzLCBcIitcIjogMTIsIFwiLVwiOiAxMiwgXCI+PlwiOiAxMSwgXCI8PFwiOiAxMSwgXCI+Pj5cIjogMTEsIFwiPFwiOiAxMCwgXCI8PVwiOiAxMCwgXCI+XCI6IDEwLCBcIj49XCI6IDEwLCBpbjogMTAsIGluc3RhbmNlb2Y6IDEwLCBcIj09XCI6IDksIFwiIT1cIjogOSwgXCI9PT1cIjogOSwgXCIhPT1cIjogOSwgXCImXCI6IDgsIFwiXlwiOiA3LCBcInxcIjogNiwgXCImJlwiOiA1LCBcInx8XCI6IDR9O1xudmFyIG9wZXJhdG9yQXNzb2NfNTU0ID0ge1wiKlwiOiBcImxlZnRcIiwgXCIvXCI6IFwibGVmdFwiLCBcIiVcIjogXCJsZWZ0XCIsIFwiK1wiOiBcImxlZnRcIiwgXCItXCI6IFwibGVmdFwiLCBcIj4+XCI6IFwibGVmdFwiLCBcIjw8XCI6IFwibGVmdFwiLCBcIj4+PlwiOiBcImxlZnRcIiwgXCI8XCI6IFwibGVmdFwiLCBcIjw9XCI6IFwibGVmdFwiLCBcIj5cIjogXCJsZWZ0XCIsIFwiPj1cIjogXCJsZWZ0XCIsIGluOiBcImxlZnRcIiwgaW5zdGFuY2VvZjogXCJsZWZ0XCIsIFwiPT1cIjogXCJsZWZ0XCIsIFwiIT1cIjogXCJsZWZ0XCIsIFwiPT09XCI6IFwibGVmdFwiLCBcIiE9PVwiOiBcImxlZnRcIiwgXCImXCI6IFwibGVmdFwiLCBcIl5cIjogXCJsZWZ0XCIsIFwifFwiOiBcImxlZnRcIiwgXCImJlwiOiBcImxlZnRcIiwgXCJ8fFwiOiBcImxlZnRcIn07XG5mdW5jdGlvbiBvcGVyYXRvckx0XzU1NShsZWZ0XzU2MCwgcmlnaHRfNTYxLCBhc3NvY181NjIpIHtcbiAgaWYgKGFzc29jXzU2MiA9PT0gXCJsZWZ0XCIpIHtcbiAgICByZXR1cm4gbGVmdF81NjAgPCByaWdodF81NjE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxlZnRfNTYwIDw9IHJpZ2h0XzU2MTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0T3BlcmF0b3JQcmVjXzU1NihvcF81NjMpIHtcbiAgcmV0dXJuIGJpbmFyeU9wZXJhdG9yUHJlY2VkZW5jZV81NTNbb3BfNTYzXTtcbn1cbmZ1bmN0aW9uIGdldE9wZXJhdG9yQXNzb2NfNTU3KG9wXzU2NCkge1xuICByZXR1cm4gb3BlcmF0b3JBc3NvY181NTRbb3BfNTY0XTtcbn1cbmZ1bmN0aW9uIGlzVW5hcnlPcGVyYXRvcl81NTgob3BfNTY1KSB7XG4gIHJldHVybiAob3BfNTY1Lm1hdGNoKFwicHVuY3R1YXRvclwiKSB8fCBvcF81NjUubWF0Y2goXCJpZGVudGlmaWVyXCIpIHx8IG9wXzU2NS5tYXRjaChcImtleXdvcmRcIikpICYmIHVuYXJ5T3BlcmF0b3JzXzU1Mi5oYXNPd25Qcm9wZXJ0eShvcF81NjUudmFsKCkpO1xufVxuZnVuY3Rpb24gaXNPcGVyYXRvcl81NTkob3BfNTY2KSB7XG4gIGlmIChvcF81NjYubWF0Y2goXCJwdW5jdHVhdG9yXCIpIHx8IG9wXzU2Ni5tYXRjaChcImlkZW50aWZpZXJcIikgfHwgb3BfNTY2Lm1hdGNoKFwia2V5d29yZFwiKSkge1xuICAgIHJldHVybiBiaW5hcnlPcGVyYXRvclByZWNlZGVuY2VfNTUzLmhhc093blByb3BlcnR5KG9wXzU2NikgfHwgdW5hcnlPcGVyYXRvcnNfNTUyLmhhc093blByb3BlcnR5KG9wXzU2Ni52YWwoKSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IHtvcGVyYXRvckx0XzU1NSBhcyBvcGVyYXRvckx0fTtcbmV4cG9ydCB7Z2V0T3BlcmF0b3JQcmVjXzU1NiBhcyBnZXRPcGVyYXRvclByZWN9O1xuZXhwb3J0IHtnZXRPcGVyYXRvckFzc29jXzU1NyBhcyBnZXRPcGVyYXRvckFzc29jfTtcbmV4cG9ydCB7aXNVbmFyeU9wZXJhdG9yXzU1OCBhcyBpc1VuYXJ5T3BlcmF0b3J9O1xuZXhwb3J0IHtpc09wZXJhdG9yXzU1OSBhcyBpc09wZXJhdG9yfSJdfQ==