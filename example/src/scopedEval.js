export function getScopedEval(scope) {
  return function (script) {
    const decs = [];
    Object.keys(scope).forEach((scopeVar) => {
      decs.push(`const ${scopeVar} = scope.${scopeVar};`);
    });
    return eval(decs.join('\n') + '\n' + script);
  };
}
