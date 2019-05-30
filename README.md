# Insomnia Default Parameters

This is a plugin for [Insomnia](https://insomnia.rest) that allows users to set default
parameters for requests.

The code is heavily based on plugin `insomnia-plugin-default-headers`.

## Installation

Install the `insomnia-plugin-default-parameters` plugin from Preferences > Plugins.

## Usage

Parameters can be added by setting a `DEFAULT_PARAMETERS` environment variable.

```json
{
	"DEFAULT_PARAMETERS": {
		"lang": "en",
		"m": "22"
	}
}
```

