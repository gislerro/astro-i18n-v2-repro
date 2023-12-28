import { defineAstroI18nConfig } from "astro-i18n"

export default defineAstroI18nConfig({
	primaryLocale: "en", // default app locale
	secondaryLocales: ["fr"], // other supported locales
	fallbackLocale: "en", // fallback locale (on missing translation)
	trailingSlash: "never", // "never" or "always"
	run: "server", // "client+server" or "server"
	showPrimaryLocale: false, // "/en/about" vs "/about"
	translationLoadingRules: [
		{
			"routes": ["^/admin.*"], // regex for all routes beginning with "/admin"
			"groups": ["^admin$"] // regex to load the "admin" group
		}
	],
	translationDirectory: {}, // translation directory names
	translations: {
		"common": {
			"en": {
				"hello": "Hello",
				"form": {
					// accessed with the "form.first_name" key :
					"first_name": "First name"
				}
			},
			"fr": {
				"hello": "Bonjour",
				"form": {
					"first_name": "Prénom"
				}
			}
		},
		"admin": {
			"en": {
				"how_are_you": "How are you ?"
			},
			"fr": {
				"how_are_you": "Comment allez vous ?"
			}
		},
		// routes are also a valid group, they will automatically load in the corresponding page :
		"/posts/[id]": {
			"en": {
				"bye": "Bye"
			},
			"fr": {
				"bye": "Au revoir"
			}
		}
	},
	routes: {}
})