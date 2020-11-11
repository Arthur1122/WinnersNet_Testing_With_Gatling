import io.gatling.core.Predef._
import io.gatling.http.Predef._

class winnersNet2 extends Simulation {

	val httpProtocol = http
		.baseUrl("https://winners.net")
		.inferHtmlResources()
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36")
		.silentResources

	val headers_2 = Map(
		"accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		"accept-encoding" -> "gzip, deflate, br",
		"accept-language" -> "ru-RU,ru;q=0.9,hy-AM;q=0.8,hy;q=0.7,en-US;q=0.6,en;q=0.5",
		"sec-fetch-dest" -> "document",
		"sec-fetch-mode" -> "navigate",
		"sec-fetch-site" -> "same-origin",
		"sec-fetch-user" -> "?1",
		"upgrade-insecure-requests" -> "1")

	val headers_5 = Map("Accept" -> "application/json, text/plain, */*")

	val headers_10 = Map("Origin" -> "https://winners.net")

	val headers_18 = Map(
		"accept" -> "*/*",
		"accept-encoding" -> "gzip, deflate, br",
		"accept-language" -> "ru-RU,ru;q=0.9,hy-AM;q=0.8,hy;q=0.7,en-US;q=0.6,en;q=0.5",
		"sec-fetch-dest" -> "script",
		"sec-fetch-mode" -> "no-cors",
		"sec-fetch-site" -> "cross-site")

	val headers_19 = Map(
		"accept" -> "*/*",
		"accept-encoding" -> "gzip, deflate, br",
		"accept-language" -> "ru-RU,ru;q=0.9,hy-AM;q=0.8,hy;q=0.7,en-US;q=0.6,en;q=0.5",
		"content-type" -> "text/plain",
		"origin" -> "https://winners.net",
		"sec-fetch-dest" -> "empty",
		"sec-fetch-mode" -> "cors",
		"sec-fetch-site" -> "cross-site")

	val headers_21 = Map(
		"Accept" -> "application/json, text/plain, */*",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "ru-RU,ru;q=0.9,hy-AM;q=0.8,hy;q=0.7,en-US;q=0.6,en;q=0.5",
		"Origin" -> "https://winners.net",
		"Sec-Fetch-Dest" -> "empty",
		"Sec-Fetch-Mode" -> "cors",
		"Sec-Fetch-Site" -> "same-site")

	val headers_23 = Map("Upgrade-Insecure-Requests" -> "1")

	val headers_24 = Map(
		"accept" -> "*/*",
		"accept-encoding" -> "gzip, deflate, br",
		"accept-language" -> "ru-RU,ru;q=0.9,hy-AM;q=0.8,hy;q=0.7,en-US;q=0.6,en;q=0.5",
		"content-type" -> "text/plain",
		"origin" -> "https://winners.net",
		"sec-fetch-dest" -> "empty",
		"sec-fetch-mode" -> "cors",
		"sec-fetch-site" -> "cross-site",
		"x-client-data" -> "CJe2yQEIpbbJAQjEtskBCKmdygEIlqzKAQjAuMoBCKvHygEI9sfKAQjpyMoBCLTLygEI29XKAQi12MoBCJSaywEImJrLAQjCmssBGIvBygE=")

	val headers_28 = Map(
		"accept" -> "application/signed-exchange;v=b3;q=0.9,*/*;q=0.8",
		"accept-encoding" -> "gzip, deflate, br",
		"accept-language" -> "ru-RU,ru;q=0.9,hy-AM;q=0.8,hy;q=0.7,en-US;q=0.6,en;q=0.5",
		"purpose" -> "prefetch",
		"sec-fetch-dest" -> "empty",
		"sec-fetch-mode" -> "no-cors",
		"sec-fetch-site" -> "same-origin")

	val headers_33 = Map(
		"accept" -> "*/*",
		"accept-encoding" -> "gzip, deflate, br",
		"accept-language" -> "ru-RU,ru;q=0.9,hy-AM;q=0.8,hy;q=0.7,en-US;q=0.6,en;q=0.5",
		"content-type" -> "text/plain; charset=UTF-8",
		"origin" -> "https://winners.net",
		"sec-fetch-dest" -> "empty",
		"sec-fetch-mode" -> "cors",
		"sec-fetch-site" -> "cross-site")

	val headers_35 = Map(
		"accept" -> "*/*",
		"accept-encoding" -> "gzip, deflate, br",
		"accept-language" -> "ru-RU,ru;q=0.9,hy-AM;q=0.8,hy;q=0.7,en-US;q=0.6,en;q=0.5",
		"sec-fetch-dest" -> "empty",
		"sec-fetch-mode" -> "cors",
		"sec-fetch-site" -> "same-origin")

	val headers_51 = Map(
		"accept" -> "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
		"accept-encoding" -> "gzip, deflate, br",
		"accept-language" -> "ru-RU,ru;q=0.9,hy-AM;q=0.8,hy;q=0.7,en-US;q=0.6,en;q=0.5",
		"sec-fetch-dest" -> "image",
		"sec-fetch-mode" -> "no-cors",
		"sec-fetch-site" -> "cross-site")

    val uri01 = "https://cdn-images.win.gg"
    val uri02 = "https://www.google-analytics.com"
    val uri03 = "https://extreme-ip-lookup.com/json"
    val uri04 = "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
    val uri05 = "https://api-bookmakers.winners.net"
    val uri06 = "https://stats.g.doubleclick.net/j/collect"
    val uri07 = "https://vars.hotjar.com/box-469cf41adb11dc78be68c1ae7f9457a4.html"
    val uri08 = "https://www.googletagmanager.com/gtm.js"
    val uri10 = "https://static.hotjar.com/c/hotjar-1904804.js"
    val uri11 = "https://fonts.gstatic.com/s/sourcesanspro/v14"
    val uri12 = "https://script.hotjar.com/modules.8d61e969c7deff2570c5.js"
    val uri13 = "https://fonts.googleapis.com/css"
    val uri14 = "https://in.hotjar.com/api/v2/client/sites/1904804/visit-data"

	val scn = scenario("winnersNet2")
		.exec(http("HomePage")
			.get("/_next/static/css/pages/review/%5BbookmakerId%5D/%5Bslug%5D.e3c32159.chunk.css")
			.resources(http("request_1")
			.get("/_next/static/chunks/pages/review/%5BbookmakerId%5D/%5Bslug%5D-3e37b1c3fd968d887a26.js")))
		.pause(10)
		.exec(http("request_2")
			.get("/?countries=5ede36d8f045090013da564a&sort=-reviews.overall.rating")
			.headers(headers_2)
			.check(status.in(200,304))
			.check(status.not(404))
			.resources(http("request_3")
			.get(uri04),
            http("request_4")
			.get(uri08 + "?id=GTM-WDQDS6S"),
            http("request_5")
			.get(uri03 + "/?key=7WBO8KojowFrKzmAQ04V")
			.headers(headers_5),
            http("request_6")
			.get(uri13 + "?family=Source+Sans+Pro:wght@400,600,700&display=swap"),
            http("request_7")
			.get("/_next/static/chunks/pages/%5BsportSlug%5D-b2402e256bfaa52cd0be.js"),
            http("request_8")
			.get("/_next/static/css/pages/choose-your-bookmaker.2bce2765.chunk.css"),
            http("request_9")
			.get("/_next/static/chunks/pages/choose-your-bookmaker-ed4f426ac5eaec714ccc.js"),
            http("request_10")
			.get(uri11 + "/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7l.woff2")
			.headers(headers_10),
            http("request_11")
			.get("/_next/static/chunks/75fc9c18.bc36a30a2a79bf55de7c.js"),
            http("request_12")
			.get(uri11 + "/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwlxdu.woff2")
			.headers(headers_10),
            http("request_13")
			.get(uri11 + "/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwlxdu.woff2")
			.headers(headers_10),
            http("request_14")
			.get("/_next/static/css/pages/analysis-and-predictions.2894cf07.chunk.css"),
            http("request_15")
			.get("/_next/static/chunks/908a9dee0684d74321668ef8d2898b1e0ce0f909.a402cf61a745549b6d5c.js"),
            http("request_16")
			.get("/_next/static/chunks/pages/analysis-and-predictions-13a4fb1974f51fd561fe.js"),
            http("request_17")
			.get(uri02 + "/analytics.js"),
            http("request_18")
			.get(uri10 + "?sv=7")
			.headers(headers_18),
            http("request_19")
			.post(uri02 + "/j/collect?v=1&_v=j87&a=918825923&t=pageview&_s=1&dl=https%3A%2F%2Fwinners.net%2F%3Fcountries%3D5ede36d8f045090013da564a%26sort%3D-reviews.overall.rating&ul=ru-ru&de=UTF-8&dt=Find%20the%20best%20betting%20sites%2C%20bonuses%20and%20features%20-%20Winners.net&sd=24-bit&sr=1366x768&vp=1499x246&je=0&_u=QACAAEABAAAAAC~&jid=1345390361&gjid=746902933&cid=522430586.1603262881&tid=UA-125662552-4&_gid=294781004.1604912242&_r=1&gtm=2wgas1WDQDS6S&cd1=Best%20Bookmakers&z=1815769613")
			.headers(headers_19),
            http("request_20")
			.get(uri12),
            http("request_21")
			.get(uri05 + "/tag-groups?slug=esports&slug=sports&slug=other-products&slug=countries&slug=languages&slug=currencies&slug=payments")
			.headers(headers_21),
            http("request_22")
			.get(uri01 + "/resize/w/36/h/28/format/png/type/progressive/fit/cover/path/tags/92c11a0e38426b9fd6a08ef48d31b6ae/12fefd5006a9a39d9358a4c1d9096e02/original.svg"),
            http("request_23")
			.get(uri07)
			.headers(headers_23),
            http("request_24")
			.post(uri06 + "?t=dc&aip=1&_r=3&v=1&_v=j87&tid=UA-125662552-4&cid=522430586.1603262881&jid=1345390361&gjid=746902933&_gid=294781004.1604912242&_u=QACAAEAAAAAAAC~&z=782340772")
			.headers(headers_24),
            http("request_25")
			.get("/_next/static/css/pages/choose-your-bookmaker.2bce2765.chunk.css")
				.check(status.in(200,304)),
            http("request_26")
			.get("/_next/static/chunks/pages/choose-your-bookmaker-ed4f426ac5eaec714ccc.js"),
            http("request_27")
			.get(uri05 + "/bookmakers/footer?sort=footerRank")
			.headers(headers_21),
            http("request_28")
			.get("/_next/data/7ef9fa2235754e72a240bf0c24441602afb44bff/index.json")
			.headers(headers_28),
            http("request_29")
			.get("/_next/data/7ef9fa2235754e72a240bf0c24441602afb44bff/best-sports-betting-sites.json")
			.headers(headers_28),
            http("request_30")
			.get("/_next/data/7ef9fa2235754e72a240bf0c24441602afb44bff/choose-your-bookmaker.json")
			.headers(headers_28),
            http("request_31")
			.get("/_next/data/7ef9fa2235754e72a240bf0c24441602afb44bff/bookmaker-comparison.json")
			.headers(headers_28),
            http("request_32")
			.get("/_next/data/7ef9fa2235754e72a240bf0c24441602afb44bff/analysis-and-predictions.json")
			.headers(headers_28),
            http("request_33")
			.post(uri14 + "?sv=7")
			.headers(headers_33)
			.body(RawFileBody("winners2package/winnersnet2/0033_request.txt")),
            http("request_34")
			.get(uri05 + "/bookmakers?filter[0][type]=countries&filter[0][values][0][id]=5ede36d8f045090013da564a&sort=-reviews.overall.rating&limit=60")
			.headers(headers_21),
            http("request_35")
			.get("/static/configs/manifest.webmanifest")
			.headers(headers_35)
			.check(status.is(404)),
            http("request_36")
			.get(uri05 + "/bookmakers/best?filter[0][type]=countries&filter[0][values][0][id]=5ede36d8f045090013da564a")
			.headers(headers_21),
            http("request_37")
			.get(uri01 + "/resize/w/120/h/30/format/png/type/progressive/fit/cover/path/bookmakers/836a99dc8ae4771f2cd396444e5b3269/465e05926ddf965450a0245fed305ae7/original.png"),
            http("request_38")
			.get(uri01 + "/resize/w/25/h/25/format/png/type/progressive/fit/cover/path/tags/0888825f6d42b938cc75c4e927291bbd/4e2856b2d837f32da2a85d8ae60230a4/original.png"),
            http("request_39")
			.get(uri01 + "/resize/w/25/h/25/format/png/type/progressive/fit/cover/path/tags/b1d6e0109fcb827c126f59f1f773a6bb/f7dcff06469722dfa7665ec1d21d4024/original.png"),
            http("request_40")
			.get(uri01 + "/resize/w/25/h/25/format/png/type/progressive/fit/cover/path/tags/f8cc985f506301d5d46d1909b70e783d/d94bce024d36f5bda37da5925da6bde7/original.png"),
            http("request_41")
			.get(uri01 + "/resize/w/25/h/25/format/png/type/progressive/fit/cover/path/tags/5931d4621e372f61c8399159e4243c56/d8f2fba42a7846e4474c10c9be6ed876/original.png"),
            http("request_42")
			.get(uri01 + "/resize/w/120/h/30/format/png/type/progressive/fit/cover/path/bookmakers/7e1d0cf95def726fd8b960cdaf1b2bae/a4941876a7b08d3c4b55864ec0966cb8/original.png"),
            http("request_43")
			.get(uri01 + "/resize/w/120/h/30/format/png/type/progressive/fit/cover/path/bookmakers/8ad9dfe22cd99ef9c85480d08a3ddb70/997b567668c27529861acd5becfbdf23/original.png"),
            http("request_44")
			.get(uri01 + "/resize/w/25/h/25/format/png/type/progressive/fit/cover/path/tags/db2af82b561e73195e15b6ac543f0a89/d8c1aae82fc51c1af6d551e8906df567/original.png"),
            http("request_45")
			.get(uri01 + "/resize/w/25/h/25/format/png/type/progressive/fit/cover/path/tags/c7902ab13356cf237f6e862b0d1a29b9/076320d75c4d46e57ae8f0da767ed09b/original.png"),
            http("request_46")
			.get(uri01 + "/resize/w/25/h/25/format/png/type/progressive/fit/cover/path/tags/d8117abef1febcfd98c33108aed5e9ba/1f75eb5d5420578a93be3414b7c773d6/original.png"),
            http("request_47")
			.get(uri01 + "/static/imgs/assets/Affiliates/quickCardBackground.png"))
			.silent)

		.pause(10)
		.exec(http("request_48")
			.get("/_next/data/7ef9fa2235754e72a240bf0c24441602afb44bff/choose-your-bookmaker.json")
			.resources(http("request_49")
			.get(uri10 + "?sv=7"),
            http("request_50")
			.get(uri03 + "/?key=7WBO8KojowFrKzmAQ04V")
			.headers(headers_5),
            http("request_51")
			.get(uri02 + "/collect?v=1&_v=j87&a=918825923&t=pageview&_s=1&dl=https%3A%2F%2Fwinners.net%2Fchoose-your-bookmaker&ul=ru-ru&de=UTF-8&dt=Find%20the%20best%20betting%20sites%2C%20bonuses%20and%20features%20-%20Winners.net&sd=24-bit&sr=1366x768&vp=1499x246&je=0&_u=SACAAEABAAAAAC~&jid=&gjid=&cid=522430586.1603262881&tid=UA-125662552-4&_gid=294781004.1604912242&gtm=2wgas1WDQDS6S&cd1=Chooser&z=726219747")
			.headers(headers_51),
            http("request_52")
			.post(uri14 + "?sv=7")
			.headers(headers_33)
			.body(RawFileBody("winners2package/winnersnet2/0052_request.txt")),
            http("request_53")
			.get(uri05 + "/bookmakers?limit=60")
			.headers(headers_21),
            http("request_54")
			.get(uri05 + "/bookmakers?filter[0][type]=countries&filter[0][values][0][id]=5ede36d8f045090013da564a&limit=60")
			.headers(headers_21),
            http("request_55")
			.get(uri02 + "/collect?v=1&_v=j87&a=918825923&t=pageview&_s=1&dl=https%3A%2F%2Fwinners.net%2Fchoose-your-bookmaker&ul=ru-ru&de=UTF-8&dt=Choose%20Your%20Bookmaker%20-%20Winners.net&sd=24-bit&sr=1366x768&vp=1499x246&je=0&_u=SACAAEABAAAAAC~&jid=&gjid=&cid=522430586.1603262881&tid=UA-125662552-4&_gid=294781004.1604912242&gtm=2wgas1WDQDS6S&cd1=Chooser&z=725740184")
			.headers(headers_51))
			.silent)
		.pause(1)
		.exec(http("request_56")
			.get(uri05 + "/bookmakers?filter[0][type]=countries&filter[0][values][0][id]=5ede36d8f045090013da564a&filter[2][type]=sports&filter[2][values][0][id]=__any__&limit=60")
			.headers(headers_21)
			.resources(http("request_57")
			.get(uri10 + "?sv=7"),
            http("request_58")
			.get(uri02 + "/collect?v=1&_v=j87&a=918825923&t=pageview&_s=1&dl=https%3A%2F%2Fwinners.net%2Fchoose-your-bookmaker&ul=ru-ru&de=UTF-8&dt=Choose%20Your%20Bookmaker%20-%20Winners.net&sd=24-bit&sr=1366x768&vp=1499x246&je=0&_u=SACAAEABAAAAAC~&jid=&gjid=&cid=522430586.1603262881&tid=UA-125662552-4&_gid=294781004.1604912242&gtm=2wgas1WDQDS6S&cd1=Chooser&z=1094936960")
			.headers(headers_51))
			.silent)
		.pause(2)
		.exec(http("ViewRecommendedBookmakersPage")
			.get(uri02 + "/collect?v=1&_v=j87&a=918825923&t=pageview&_s=1&dl=https%3A%2F%2Fwinners.net%2Fchoose-your-bookmaker&ul=ru-ru&de=UTF-8&dt=Choose%20Your%20Bookmaker%20-%20Winners.net&sd=24-bit&sr=1366x768&vp=1499x246&je=0&_u=SACAAEABAAAAAC~&jid=&gjid=&cid=522430586.1603262881&tid=UA-125662552-4&_gid=294781004.1604912242&gtm=2wgas1WDQDS6S&cd1=Chooser&z=1586360491")
			.headers(headers_51)
			.resources(http("request_60")
			.get(uri05 + "/bookmakers?filter[0][type]=countries&filter[0][values][0][id]=5ede36d8f045090013da564a&filter[2][type]=sports&filter[2][values][0][id]=5ef9f2bbbdb0620010edba07&limit=60")
			.headers(headers_21),
            http("request_61")
			.get(uri05 + "/bookmakers?filter[0][type]=countries&filter[0][values][0][id]=5ede36d8f045090013da564a&filter[2][type]=sports&filter[2][values][0][id]=5ef9f2bbbdb0620010edba07&filter[3][type]=payments&filter[3][values][0][id]=5ee767500496d00010e12ada&limit=60")
			.headers(headers_21),
            http("request_62")
			.get("/_next/static/css/pages/about-us.92c29fce.chunk.css"),
            http("request_63")
			.get("/_next/static/chunks/pages/about-us-c55f42b1394a30d7d097.js"),
            http("request_64")
			.get("/_next/static/css/pages/review/%5BbookmakerId%5D/%5Bslug%5D.e3c32159.chunk.css"),
            http("request_65")
			.get("/_next/static/chunks/pages/review/%5BbookmakerId%5D/%5Bslug%5D-3e37b1c3fd968d887a26.js"),
            http("request_66")
			.get("/_next/data/7ef9fa2235754e72a240bf0c24441602afb44bff/about-us.json")
			.headers(headers_28),
            http("request_67")
			.get("/_next/data/7ef9fa2235754e72a240bf0c24441602afb44bff/best-esports-betting-sites.json")
			.headers(headers_28)))
		.pause(1)
		.exec(http("request_68")
			.get("/_next/data/7ef9fa2235754e72a240bf0c24441602afb44bff/index.json")
			.resources(http("request_69")
			.get(uri02 + "/collect?v=1&_v=j87&a=918825923&t=pageview&_s=1&dl=https%3A%2F%2Fwinners.net%2Fchoose-your-bookmaker&ul=ru-ru&de=UTF-8&dt=Choose%20Your%20Bookmaker%20-%20Winners.net&sd=24-bit&sr=1366x768&vp=1499x246&je=0&_u=SACAAEABAAAAAC~&jid=&gjid=&cid=522430586.1603262881&tid=UA-125662552-4&_gid=294781004.1604912242&gtm=2wgas1WDQDS6S&cd1=Chooser&z=1953825067")
			.headers(headers_51),
            http("request_70")
			.get(uri10 + "?sv=7")
			.headers(headers_18),
            http("request_71")
			.get(uri03 + "/?key=7WBO8KojowFrKzmAQ04V")
			.headers(headers_5),
            http("request_72")
			.get(uri01 + "/resize/w/125/h/30/format/png/type/progressive/fit/cover/path/bookmakers/836a99dc8ae4771f2cd396444e5b3269/bc5fb73e044489247ebfeb8909942abe/original.png"),
            http("request_73")
			.get(uri02 + "/collect?v=1&_v=j87&a=918825923&t=pageview&_s=1&dl=https%3A%2F%2Fwinners.net%2F%3Fcountries%3D5ede36d8f045090013da564a%26products%3Dsports%26sports%3D5ef9f2bbbdb0620010edba07%26payments%3D5ee767500496d00010e12ada&ul=ru-ru&de=UTF-8&dt=Choose%20Your%20Bookmaker%20-%20Winners.net&sd=24-bit&sr=1366x768&vp=1499x246&je=0&_u=SACAAEABAAAAAC~&jid=&gjid=&cid=522430586.1603262881&tid=UA-125662552-4&_gid=294781004.1604912242&gtm=2wgas1WDQDS6S&cd1=Best%20Bookmakers&z=169475482")
			.headers(headers_51),
            http("request_74")
			.post(uri14 + "?sv=7")
			.headers(headers_33)
			.body(RawFileBody("winners2package/winnersnet2/0074_request.txt")),
            http("request_75")
			.get(uri05 + "/bookmakers/best?filter[0][type]=countries&filter[0][values][0][id]=5ede36d8f045090013da564a")
			.headers(headers_21),
            http("request_76")
			.get(uri05 + "/bookmakers?filter[0][type]=countries&filter[0][values][0][id]=5ede36d8f045090013da564a&filter[2][type]=sports&filter[2][values][0][id]=5ef9f2bbbdb0620010edba07&filter[3][type]=payments&filter[3][values][0][id]=5ee767500496d00010e12ada&sort=-reviews.overall.rating&limit=60")
			.headers(headers_21))
			.silent)
		.pause(2)
		.exec(http("request_77")
			.get("/_next/static/css/pages/review/%5BbookmakerId%5D/%5Bslug%5D.e3c32159.chunk.css")
			.resources(http("request_78")
			.get("/_next/static/chunks/pages/review/%5BbookmakerId%5D/%5Bslug%5D-3e37b1c3fd968d887a26.js")))
		.pause(2)
		.exec(http("FullReviewPage")
			.get("/_next/data/7ef9fa2235754e72a240bf0c24441602afb44bff/review/5ef5f576bdb0620010edb977/betway.json?bookmakerId=5ef5f576bdb0620010edb977&slug=betway")
			.headers(headers_35)
			.check(currentLocationRegex(".*slug=betway.*"))
			.resources(http("request_80")
			.get(uri10 + "?sv=7"),
            http("request_81")
			.get(uri03 + "/?key=7WBO8KojowFrKzmAQ04V")
			.headers(headers_5),
            http("request_82")
			.get(uri01 + "/resize/w/280/h/70/format/png/type/progressive/fit/cover/path/bookmakers/836a99dc8ae4771f2cd396444e5b3269/bc5fb73e044489247ebfeb8909942abe/original.png"),
            http("request_83")
			.get(uri02 + "/collect?v=1&_v=j87&a=918825923&t=pageview&_s=1&dl=https%3A%2F%2Fwinners.net%2Freview%2F5ef5f576bdb0620010edb977%2Fbetway&ul=ru-ru&de=UTF-8&dt=Find%20the%20best%20betting%20sites%2C%20bonuses%20and%20features%20-%20Winners.net&sd=24-bit&sr=1366x768&vp=1499x246&je=0&_u=SACAAEABAAAAAC~&jid=&gjid=&cid=522430586.1603262881&tid=UA-125662552-4&_gid=294781004.1604912242&gtm=2wgas1WDQDS6S&cd1=Review&z=1419188494")
			.headers(headers_51),
            http("request_84")
			.post(uri14 + "?sv=7")
			.headers(headers_33)
			.body(RawFileBody("winners2package/winnersnet2/0084_request.txt"))))
		.pause(30)

	setUp(scn.inject(atOnceUsers(75))).protocols(httpProtocol)
}