module.exports = function(context) {
  const parameters = context.request.getEnvironmentVariable('DEFAULT_PARAMETERS');

  if (!parameters) {
    return;
  }

  for (const name of Object.keys(parameters)) {
    const value = parameters[name];
    if (context.request.hasParameter(name)) {
      console.log(`[header] Skip setting default parameter ${name}. Already set to ${value}`);
      continue;
    }

    context.request.setParameter(name, value);
    console.log(`[header] Set default parameter ${name}: ${value}`);
  }
};
