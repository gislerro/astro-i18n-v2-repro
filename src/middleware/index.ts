import { sequence } from "astro/middleware"
import { useAstroI18n } from "astro-i18n"

const astroI18n = useAstroI18n(
	{
		primaryLocale: "en", // default app locale
		secondaryLocales: [], // other supported locales
		fallbackLocale: "en", // fallback locale (on missing translation)
		trailingSlash: "never", // "never" or "always"
		run: "client+server", //"client+server" or "server"
		showPrimaryLocale: false, // "/en/about" vs "/about"
		translationLoadingRules: [], // per page group loading
		translationDirectory: {}, // translation directory names
		translations: {}, // { [translation_group1]: { [locale1]: {}, ... } }
		routes: {}, // { [secondary_locale1]: { about: "about-translated", ... } }
	},
	undefined /* custom formatters */,
)

export const onRequest = sequence(astroI18n)