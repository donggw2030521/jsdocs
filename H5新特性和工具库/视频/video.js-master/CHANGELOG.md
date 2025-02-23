CHANGELOG
=========

## HEAD (Unreleased)
* @carpasse infer MIME types from file extensions in the HTML5 and Flash techs ([view](https://github.com/videojs/video.js/pull/1974))
* @mmcc updated the slider to allow for vertical orientation ([view](https://github.com/videojs/video.js/pull/1816))
* @dmlap removed an ie6 hack for flash object embedding ([view](https://github.com/videojs/video.js/pull/1946))
* @heff replaced Closure Compiler with Uglify for minification ([view](https://github.com/videojs/video.js/pull/1940))
* @OleLaursen added a Danish translation ([view](https://github.com/videojs/video.js/pull/1899))
* @dn5 Added new translations (Bosnian, Serbian, Croatian) ([view](https://github.com/videojs/video.js/pull/1897))
* @mmcc (and others) converted the whole project to use ES6, Babel and Browserify ([view](https://github.com/videojs/video.js/pull/1976))
* @heff converted all classes to use ES6 classes ([view](https://github.com/videojs/video.js/pull/1993))
* @mmcc added ES6 default args and template strings ([view](https://github.com/videojs/video.js/pull/2015))
* @dconnolly replaced JSON.parse with a safe non-eval JSON parse ([view](https://github.com/videojs/video.js/pull/2077))
* @mmcc added a new default skin, switched to SASS, modified the html ([view](https://github.com/videojs/video.js/pull/1999))
* @gkatsev removed event.isDefaultPrevented in favor of event.defaultPrevented ([view](https://github.com/videojs/video.js/pull/2081))
* @heff added and `extends` function for external subclassing ([view](https://github.com/videojs/video.js/pull/2078))
* @forbesjo added the `scrubbing` property ([view](https://github.com/videojs/video.js/pull/2080))
* @heff switched to border-box sizing for all player elements ([view](https://github.com/videojs/video.js/pull/2082))
* @forbesjo added a vjs-button class to button controls ([view](https://github.com/videojs/video.js/pull/2084))
* @bc-bbay Load plugins before controls ([view](https://github.com/videojs/video.js/pull/2094))
* @bc-bbay rename onEvent methods to handleEvent ([view](https://github.com/videojs/video.js/pull/2093))
* @dmlap added an error message if techOrder is not in options ([view](https://github.com/videojs/video.js/pull/2097))
* @dconnolly exported the missing videojs.plugin function ([view](https://github.com/videojs/video.js/pull/2103))
* @mmcc added back the captions settings styles ([view](https://github.com/videojs/video.js/pull/2112))
* @gkatsev updated the component.js styles to match the new style guide ([view](https://github.com/videojs/video.js/pull/2105))
* @gkatsev added error logging for bad JSON formatting ([view](https://github.com/videojs/video.js/pull/2113))
* @gkatsev added a sensible toJSON function ([view](https://github.com/videojs/video.js/pull/2114))
* @bc-bbay fixed instance where progress bars would go passed 100% ([view](https://github.com/videojs/video.js/pull/2040))
* @eXon began Tech 2.0 work, improved how tech events are handled by the player ([view](https://github.com/videojs/video.js/pull/2057))
* @gkatsev added get and set global options methods ([view](https://github.com/videojs/video.js/pull/2115))
* @heff added support for fluid widths, aspect ratios, and metadata defaults ([view](https://github.com/videojs/video.js/pull/1952))
* @heff reorganized all utility functions in the codebase ([view](https://github.com/videojs/video.js/pull/2139))
* @eXon made additional tech 2.0 improvements listed in #2126 ([view](https://github.com/videojs/video.js/pull/2166))
* @heff Cleaned up and documented src/js/video.js and DOM functions ([view](https://github.com/videojs/video.js/pull/2182))
* @mmcc Changed to pure CSS slider handles ([view](https://github.com/videojs/video.js/pull/2132))
* @mister-ben updated language support to handle language codes with regions ([view](https://github.com/videojs/video.js/pull/2177))
* @heff changed the 'ready' event to always be asynchronous  ([view](https://github.com/videojs/video.js/pull/2188))
* @heff fixed instances of tabIndex that did not have a capital I   ([view](https://github.com/videojs/video.js/pull/2204))
* @heff fixed a number of IE8 and Flash related issues  ([view](https://github.com/videojs/video.js/pull/2206))
* @heff Reverted .video-js inline-block style to fix Flash fullscreen  ([view](https://github.com/videojs/video.js/pull/2217))
* @mmcc switched to using button elements for button components ([view](https://github.com/videojs/video.js/pull/2209))
* @mmcc increased the size of the progress bar and handle on hover ([view](https://github.com/videojs/video.js/pull/2216))
* @mmcc moved the fonts into their own repo ([view](https://github.com/videojs/video.js/pull/2223))
* @mmcc deprecated the options() function and removed internal uses ([view](https://github.com/videojs/video.js/pull/2229))
* @carpasse enhanced events to allow passing a second data argument ([view](https://github.com/videojs/video.js/pull/2163))
* @bc-bbay made the duration display update itself on loadedmetadata ([view](https://github.com/videojs/video.js/pull/2169))
* @arwidt added Swedish and Finnish translations ([view](https://github.com/videojs/video.js/pull/2189))
* @heff moved all the CDN logic into videojs/cdn ([view](https://github.com/videojs/video.js/pull/2230))
* @mmcc fixed the progress handle transition jerkiness ([view](https://github.com/videojs/video.js/pull/2219))
* @dmlap added support for the seekable property ([view](https://github.com/videojs/video.js/pull/2208))
* @mmcc un-hid the current and remaining times by default ([view](https://github.com/videojs/video.js/pull/2241))
* @pavelhoral fixed a bug with user activity that caused the control bar to flicker ([view](https://github.com/videojs/video.js/pull/2299))
* @dmlap updated to videojs-swf@4.7.1 to fix a video dimensions issue on subsequent loads ([view](https://github.com/videojs/video.js/pull/2281))
* @mmcc added the vjs-big-play-centered class ([view](https://github.com/videojs/video.js/pull/2293))
* @thijstriemstra added a logged error when a plugin is missing ([view](https://github.com/videojs/video.js/pull/1931))
* @gkatsev fixed the texttrackchange event and text track display for non-native tracks ([view](https://github.com/videojs/video.js/pull/2215))
* @mischizzle fixed event.relatedTarget in Firefox ([view](https://github.com/videojs/video.js/pull/2025))
* @mboles updated JSDoc comments everywhere to prepare for new docs ([view](https://github.com/videojs/video.js/pull/2270))
* @mmcc added a currentTime tooltip to the progress handle ([view](https://github.com/videojs/video.js/pull/2255))
* @pavelhoral fixed subclassing without a constructor ([view](https://github.com/videojs/video.js/pull/2308))
* @dmlap fixed a vjs_getProperty error caused by a progress check before the swf was ready ([view](https://github.com/videojs/video.js/pull/2316))
* @dmlap exported the videojs.log function ([view](https://github.com/videojs/video.js/pull/2317))
* @gkatsev updated vttjs to fix a trailing comma JSON error ([view](https://github.com/videojs/video.js/pull/2331))
* @gkatsev exported the videojs.bind() function ([view](https://github.com/videojs/video.js/pull/2332))
* Insert cloned el back into DOM. Fixes #2214 ([view](https://github.com/videojs/video.js/pull/2334))
* @heff sped up testing ([view](https://github.com/videojs/video.js/pull/2254))
* pass fs state to player from enterFullscreen, split full-window styles into their own selector ([view](https://github.com/videojs/video.js/pull/2357))
* Fixed vertical option for volumeMenuButton ([view](https://github.com/videojs/video.js/pull/2352))
* @dmlap switched events to not bubble by default ([view](https://github.com/videojs/video.js/pull/2351))
* @dmlap export videojs.createTimeRange ([view](https://github.com/videojs/video.js/pull/2361))
* @dmlap export a basic played() on techs ([view](https://github.com/videojs/video.js/pull/2384))
* @dmlap use seekable on source handlers when defined ([view](https://github.com/videojs/video.js/pull/2376))
* @dmlap fire seeking in the flash tech, not the SWF ([view](https://github.com/videojs/video.js/pull/2372))
* @dmlap expose the xhr helper utility ([view](https://github.com/videojs/video.js/pull/2321))
* @misteroneill fixed internal extends usage and added a deprecation warning ([view](https://github.com/videojs/video.js/pull/2390))
* @eXon added the poster to the options the tech receives ([view](https://github.com/videojs/video.js/pull/2338))
* @eXon made sure the volume persists between tech changes ([view](https://github.com/videojs/video.js/pull/2340))
* @eXon added the language to the options the tech receives ([view](https://github.com/videojs/video.js/pull/2338))
* @mmcc Added &quot;inline&quot; option to MenuButton and updated VolumeMenuButton to be able to utilize it ([view](https://github.com/videojs/video.js/pull/2378))
* @misteroneill restore some properties on window.videojs. ([view](https://github.com/videojs/video.js/pull/2395))
* @misteroneill restore some 4.x utilities and remove deprecated functionality ([view](https://github.com/videojs/video.js/pull/2406))
* @heff use a synchronous ready() internally ([view](https://github.com/videojs/video.js/pull/2392))
* @nickygerritsen scrubbing() is a method, not a property ([view](https://github.com/videojs/video.js/pull/2411))
* @sirlancelot change &quot;video&quot; to &quot;media&quot; in error messages ([view](https://github.com/videojs/video.js/pull/2409))
* @nickygerritsen use the default seekable when a source handler is unset ([view](https://github.com/videojs/video.js/pull/2401))
* @gkatsev always use emulated TextTrackLists so tracks survive tech switches ([view](https://github.com/videojs/video.js/pull/2425))
* @misteroneill restore Html5.Events ([view](https://github.com/videojs/video.js/pull/2421))
* @misteroneill removed the deprecated Component init method ([view](https://github.com/videojs/video.js/pull/2427))
* @misteroneill restore videojs.formatTime ([view](https://github.com/videojs/video.js/pull/2420))
* @misteroneill include child components with &#x60;true&#x60; in options ([view](https://github.com/videojs/video.js/pull/2424))
* @misteroneill create video.novtt.js in dist builds ([view](https://github.com/videojs/video.js/pull/2447))
* @misteroneill pass vtt.js option to tech ([view](https://github.com/videojs/video.js/pull/2448))
* @forbesjo updated the sauce labs config and browser versions ([view](https://github.com/videojs/video.js/pull/2450))
* @mmcc made sure controls respect muted attribute ([view](https://github.com/videojs/video.js/pull/2408))
* @dmlap switched global options back to an object at videojs.options ([view](https://github.com/videojs/video.js/pull/2461))
* @ogun fixed a typo in the Turkish translation ([view](https://github.com/videojs/video.js/pull/2460))
* @gkatsev fixed text track errors on dispose and in cross-browser testing ([view](https://github.com/videojs/video.js/pull/2466))
* @mmcc added type=button to button components ([view](https://github.com/videojs/video.js/pull/2471))
* @mmcc Fixed IE by using setAttribute to set &#x27;type&#x27; property ([view](https://github.com/videojs/video.js/pull/2487))
* @misternoneill fixed vertical slider issues ([view](https://github.com/videojs/video.js/pull/2469))
* @gkatsev moved default and player dimensions to style els at the top of HEAD ([view](https://github.com/videojs/video.js/pull/2482))
* @gkatsev moved default and player dimensions to style els at the top of HEAD el ([view](https://github.com/videojs/video.js/pull/2482))
* @gkatsev removed non-default track auto-disabling ([view](https://github.com/videojs/video.js/pull/2475))
* @gkatsev exported event helpers on videojs object ([view](https://github.com/videojs/video.js/pull/2491))
* @nickygerritsen fixed texttrack handling in IE10 ([view](https://github.com/videojs/video.js/pull/2481))
* @gkatsev deep clone el for iOS to preserve tracks ([view](https://github.com/videojs/video.js/pull/2494))
* @forbesjo switched automated testing to BrowserStack ([view](https://github.com/videojs/video.js/pull/2492))
* @gkatsev fixed nativeControlsForTouch handling. Defaults to native controls on iphone and native android browsers. ([view](https://github.com/videojs/video.js/pull/2499))
* @heff fixed cross-platform track tests by switching to a fake tech ([view](https://github.com/videojs/video.js/pull/2496))
* @gkatsev improved tech controls listener handling. ([view](https://github.com/videojs/video.js/pull/2511))
* @dmlap move seek on replay into the flash tech ([view](https://github.com/videojs/video.js/pull/2527))
* @dmlap @gkatsev improve Flash tech error property and add an error setter to the base tech ([view](https://github.com/videojs/video.js/pull/2517))
* @dmlap update to videojs-swf 5.0.0-rc1 ([view](https://github.com/videojs/video.js/pull/2528))
* @dmlap expose start and end buffered times ([view](https://github.com/videojs/video.js/pull/2501))
* @heff fixed a number of console errors after testing ([view](https://github.com/videojs/video.js/pull/2513))
* @gkatsev made the sass files available via npm in src/css ([view](https://github.com/videojs/video.js/pull/2546))
* @heff removed playerOptions from plugin options because it created an inconsistency in plugin inits ([view](https://github.com/videojs/video.js/pull/2532))
* @heff added a default data attribute to fix the progress handle display in IE8 ([view](https://github.com/videojs/video.js/pull/2547))
* @heff added back the default cdn url for the swf ([view](https://github.com/videojs/video.js/pull/2533))
* @gkatsev fixed the default state of userActive ([view](https://github.com/videojs/video.js/pull/2557))
* @heff fixed event bubbling in IE8 ([view](https://github.com/videojs/video.js/pull/2563))
* @heff cleaned up internal duration handling ([view](https://github.com/videojs/video.js/pull/2552))
* @heff fixed the UI for live streams ([view](https://github.com/videojs/video.js/pull/2557))
* @gkatsev updated opacity of caption settings background color ([view](https://github.com/videojs/video.js/pull/2573))
* @gkatsev made all sass variables !default ([view](https://github.com/videojs/video.js/pull/2574))
* @heff fixed the inline volume control and made it the default ([view](https://github.com/videojs/video.js/pull/2553))
* @forbesjo fixed webkit deprecation warnings ([view](https://github.com/videojs/video.js/pull/2558))
* @forbesjo added Android and iOS browser testing ([view](https://github.com/videojs/video.js/pull/2538))
* @heff improved css selector strengths ([view](https://github.com/videojs/video.js/pull/2583))
* @heff moved scss vars to be private ([view](https://github.com/videojs/video.js/pull/2584))
* @heff added a fancy loading spinner ([view](https://github.com/videojs/video.js/pull/2582))
* @gkatsev added a mouse-hover time display to the progress bar ([view](https://github.com/videojs/video.js/pull/2569))
* @heff added an attributes argument to createEl() ([view](https://github.com/videojs/video.js/pull/2589))
* @heff made tech related functions private in the player ([view](https://github.com/videojs/video.js/pull/2590))
* @heff removed the loadedalldata event ([view](https://github.com/videojs/video.js/pull/2591))
* @dmlap switched to using raynos/xhr for requests ([view](https://github.com/videojs/video.js/pull/2594))

--------------------

## 4.12.5 (2015-03-17)
* Updated to videojs-swf v4.5.4 to fix a potential security issue ([view](https://github.com/videojs/video.js/pull/1955))

## 4.12.4 (2015-03-05)
* Randomized the Google Analytics calls to stay under the limit ([view](https://github.com/videojs/video.js/pull/1916))

## 4.12.3 (2015-02-28)
* @heff fixed setting the source to an empty string ([view](https://github.com/videojs/video.js/pull/1905))

## 4.12.2 (2015-02-27)
* @gkatsev fixed disabling of default text tracks ([view](https://github.com/videojs/video.js/pull/1892))

## 4.12.1 (2015-02-19)
* @gkatsev fixed the track list reference while switching techs that use emulated tracks ([view](https://github.com/videojs/video.js/pull/1874))
* @gkatsev fixed a Firefox error with the captions settings select menu options ([view](https://github.com/videojs/video.js/pull/1877))

## 4.12.0 (2015-02-17)
* @PeterDaveHello added a Traditional Chinese translation ([view](https://github.com/videojs/video.js/pull/1729))
* @mmcc updated the hide/show functions to use a class instead of inline styles ([view](https://github.com/videojs/video.js/pull/1681))
* @mister-ben added better handling of the additional videojs() arguments when the player is already initialized ([view](https://github.com/videojs/video.js/pull/1730))
* @anhskohbo added a Vietnamese translation ([view](https://github.com/videojs/video.js/pull/1734))
* @Sxmanek added a Czech translation ([view](https://github.com/videojs/video.js/pull/1739))
* @jcaron23 added the vjs-scrubbing CSS class and prevented menus from showing while scrubbing ([view](https://github.com/videojs/video.js/pull/1741))
* @dmlap fixed URL parsing in IE9 ([view](https://github.com/videojs/video.js/pull/1765))
* @gkatsev Fixed issue where ManualTimeUpdatesOff was not de-registering events ([view](https://github.com/videojs/video.js/pull/1793))
* @brycefisher Added a guide on player disposal ([view](https://github.com/videojs/video.js/pull/1803))
* @toniher added a Catalan translation ([view](https://github.com/videojs/video.js/pull/1794))
* @mmcc added a VERSION key to the videojs object ([view](https://github.com/videojs/video.js/pull/1798))
* @mmcc fixed an issue with text track hiding introduced in #1681 ([view](https://github.com/videojs/video.js/pull/1804))
* @dmlap exported video.js as a named AMD module ([view](https://github.com/videojs/video.js/pull/1844))
* @dmlap fixed poster hiding when the loadstart event does not fire ([view](https://github.com/videojs/video.js/pull/1834))
* @chikathreesix fixed an object delete error in Chrome ([view](https://github.com/videojs/video.js/pull/1858))
* @steverandy fixed an issue with scrolling over the player on touch devices ([view](https://github.com/videojs/video.js/pull/1809))
* @mmcc improved tap sensitivity ([view](https://github.com/videojs/video.js/pull/1830))
* @mister-ben added a vjs-ended class when playback reaches the end of the timeline ([view](https://github.com/videojs/video.js/pull/1857))
* @dmlap Add network and ready state properties ([view](https://github.com/videojs/video.js/pull/1854))
* @woollybogger exported the hasClass function ([view](https://github.com/videojs/video.js/pull/1839))
* @DevGavin fixed the Chinese translation ([view](https://github.com/videojs/video.js/pull/1841))
* @iSimonWeb added font-path variable ([view](https://github.com/videojs/video.js/pull/1847))
* @shoshomiga added a Bulgarian translation ([view](https://github.com/videojs/video.js/pull/1849))
* @ragecub3 added a Turkish translation ([view](https://github.com/videojs/video.js/pull/1853))
* @gkatsev greatly improved text track support and implemented vtt.js as the webvtt parser ([view](https://github.com/videojs/video.js/pull/1749))
* @gkatsev fixed captions showing by default in Chrome and Safari ([view](https://github.com/videojs/video.js/pull/1865))
* @mister-ben fixed a woff warning in Firefox ([view](https://github.com/videojs/video.js/pull/1870))

## 4.11.4 (2015-01-23)
* @heff exported missing source handler functions ([view](https://github.com/videojs/video.js/pull/1787))
* @heff fixed type support checking for an empty src string ([view](https://github.com/videojs/video.js/pull/1797))
* @carpasse fixed a bug in updating child indexes after removing components ([view](https://github.com/videojs/video.js/pull/1814))
* @dmlap fixed a bug where native controls would show after switching techs ([view](https://github.com/videojs/video.js/pull/1811))
* @H1D fixed an issue with file extension type detection ([view](https://github.com/videojs/video.js/pull/1818))
* @bclwhitaker updated to v4.5.3 of video-js-swf ([view](https://github.com/videojs/video.js/pull/1823))

## 4.11.3 (2014-12-19)
* @gdkraus fixed a bug where you could no longer tab-navigate passed a menu button ([view](https://github.com/videojs/video.js/pull/1760))
* @matteos exported the setSource functions so source handlers will work in the minified version ([view](https://github.com/videojs/video.js/pull/1753))
* @matteos fixed RTMP playback ([view](https://github.com/videojs/video.js/pull/1755))

## 4.11.2 (2014-12-17)
* @mmcc fixed a bug where the playback rate menu would not open ([view](https://github.com/videojs/video.js/pull/1716))
* @gkatsev fixed an issue with source handlers that caused subclasses of source handler classes to break ([view](https://github.com/videojs/video.js/pull/1746))

## 4.11.1 (2014-12-04)
* @heff fixed a code bug in track XHR requests ([view](https://github.com/videojs/video.js/pull/1715))

## 4.11.0 (2014-12-04)
* @rutkat updated sliders to use keydown instead of keyup for more responsive key control ([view](https://github.com/videojs/video.js/pull/1616))
* @toloudis fixed an issue with checking for an existing source on the video element ([view](https://github.com/videojs/video.js/pull/1651))
* @rafalwrzeszcz fixed the Flash object tag markup for strict XML ([view](https://github.com/videojs/video.js/pull/1702))
* @thijstriemstra fixed a number of typos in the docs ([view](https://github.com/videojs/video.js/pull/1704))
* @heff added the Source Handler interface for handling advanced formats including adaptive streaming ([view](https://github.com/videojs/video.js/pull/1560))
* @azawawi added an Arabic translation ([view](https://github.com/videojs/video.js/pull/1692))
* @mmcc added functions for better timeout and interval handling ([view](https://github.com/videojs/video.js/pull/1642))
* @mmcc fixed the vdata exception when you dispose a player with tracks ([view](https://github.com/videojs/video.js/pull/1710))
* @nemesreviz added a Hungarian translation ([view](https://github.com/videojs/video.js/pull/1711))
* @heff updated the SWF to the latest version ([view](https://github.com/videojs/video.js/pull/1714))

## 4.10.2 (2014-10-30)
* @heff fixed checking for child options in the parent options to allow for 'false' ([view](https://github.com/videojs/video.js/pull/1630))
* @heff fixed the VolumeMenuButton options to allow passing 'vertical' to the VolumeBar ([view](https://github.com/videojs/video.js/pull/1631))
* @mmcc fixed localization of captions/subtitles menu off buttons ([view](https://github.com/videojs/video.js/pull/1632))

## 4.10.1 (2014-10-29)
@heff removed his own stupid error [view](https://github.com/videojs/video.js/commit/a12dd770572a7f16e436e2332eba7ffbb1f1b9b9)

## 4.10.0 (2014-10-28)
* @aptx4869 fixed an issue where the native JSON parser wasn&#x27;t used ([view](https://github.com/videojs/video.js/pull/1565))
* @andekande improved the German translation ([view](https://github.com/videojs/video.js/pull/1555))
* @OlehTsvirko added a Ukrainian translation ([view](https://github.com/videojs/video.js/pull/1562))
* @OlehTsvirko added a Russian translation ([view](https://github.com/videojs/video.js/pull/1563))
* @thijstriemstra added a Dutch translation ([view](https://github.com/videojs/video.js/pull/1566))
* @heff updated the poster to use CSS styles to display; fixed the poster not showing if not originally set ([view](https://github.com/videojs/video.js/pull/1568))
* @mmcc fixed an issue where errors on source tags could get missed ([view](https://github.com/videojs/video.js/pull/1575))
* @heff enhanced the event listener API to allow for auto-cleanup of listeners on other componenets and elements ([view](https://github.com/videojs/video.js/pull/1588))
* @mmcc fixed an issue with the VolumeButton assuming it was vertical by default ([view](https://github.com/videojs/video.js/pull/1592))
* @DevGavin added a Simplified Chinese translation ([view](https://github.com/videojs/video.js/pull/1593))
* @heff Added the ability to set options for child components directly in the parent options ([view](https://github.com/videojs/video.js/pull/1599))
* @heff turned on the custom html controls for touch devices ([view](https://github.com/videojs/video.js/pull/1617))

## 4.9.1 (2014-10-15)
* Bumped to videojs-swf v4.5.1 to fix a data sanitization issue ([view](https://github.com/videojs/video.js/pull/1587))

## 4.9.0 (2014-09-30)
* @deedos added a Brazilian Portuguese translation ([view](https://github.com/videojs/video.js/pull/1520))
* @baloneysandwiches added a hasClass method ([view](https://github.com/videojs/video.js/pull/1464))
* @mynameisstephen fixed an issue where slider event listeners were not being cleaned up ([view](https://github.com/videojs/video.js/pull/1475))
* @alexrqs cleaned up the Spanish translation ([view](https://github.com/videojs/video.js/pull/1494))
* @t2y added a Japanese translation ([view](https://github.com/videojs/video.js/pull/1497))
* @chikathreesix fixed an issue where data-setup options could be missed ([view](https://github.com/videojs/video.js/pull/1514))
* @seniorflexdeveloper added new translations and translation updates ([view](https://github.com/videojs/video.js/pull/1530))
* @chikathreesix exported the videojs.Flash.embed method ([view](https://github.com/videojs/video.js/pull/1533))
* @doublex fixed an issue with IE7 backwards compatibility ([view](https://github.com/videojs/video.js/pull/1542))
* @mmcc made it possible to override the font-size of captions and subtitles ([view](https://github.com/videojs/video.js/pull/1547))
* @philipgiuliani added an Italian translation ([view](https://github.com/videojs/video.js/pull/1550))
* @twentyrogersc fixed the return value when setting the poster source ([view](https://github.com/videojs/video.js/pull/1552))
* @heff updated to swf v4.5.0 to fix event issues ([view](https://github.com/videojs/video.js/pull/1554))
* @rpless made the VolumeMenuButton volume more accesible via tab navigation ([view](https://github.com/videojs/video.js/pull/1519))
* @mmcc added support for audio tags (html5 audio only) ([view](https://github.com/videojs/video.js/pull/1540))

## 4.8.5 (2014-09-25)
* Updated to the latest version of the swf to fix HLS playback ([view](https://github.com/videojs/video.js/pull/1538))

## 4.8.4 (2014-09-23)
* @gkatsev fixed isFullscreen reporting on iOS devices ([view](https://github.com/videojs/video.js/pull/1511))

## 4.8.3 (2014-09-22)
* @heff updated to the latest version of the SWF to 4.4.4 ([view](https://github.com/videojs/video.js/pull/1526))

## 4.8.2 (2014-09-16)
* @gkatsev fixed an IE11 bug where pause was not fired when the video ends ([view](https://github.com/videojs/video.js/pull/1512))

## 4.8.1 (2014-09-05)
* @dmlap fixed an issue where an error could be fired after player disposal ([view](https://github.com/videojs/video.js/pull/1481))
* @dmlap fixed poster error handling ([view](https://github.com/videojs/video.js/pull/1482))
* @dmlap fixed an issue with languages and subclassing the player ([view](https://github.com/videojs/video.js/pull/1483))
* @mmcc fixed a few CSS issues with the poster and the error 'X' ([view](https://github.com/videojs/video.js/pull/1487))
* @MrVaykadji and @Calinou added a french translation ([view](https://github.com/videojs/video.js/pull/1467))
* @heff fixed an internal deprecation warning and missing deprecated functions ([view](https://github.com/videojs/video.js/pull/1488))

## 4.8.0 (2014-09-03)
* @andekande added a German translation ([view](https://github.com/videojs/video.js/pull/1426))
* @mattosborn fixed a bug where getting the video element src would overwrite it ([view](https://github.com/videojs/video.js/pull/1430))
* @songpete fixed a bug where keyboard events were bubbling and causing additional actions ([view](https://github.com/videojs/video.js/pull/1455))
* @knabar made the inactivity timeout configurable ([view](https://github.com/videojs/video.js/pull/1409))
* @seniorflexdeveloper added language files to the distribution for including specific languages ([view](https://github.com/videojs/video.js/pull/1453))
* @gkatsev improved handling of null and NaN dimension values ([view](https://github.com/videojs/video.js/pull/1449))
* @gkatsev fixed an issue where the controls would break if Flash was initialized too quickly ([view](https://github.com/videojs/video.js/pull/1470))
* @mmcc fixed an issue where if no playback tech was supported the error could not be caught ([view](https://github.com/videojs/video.js/pull/1473))

## 4.7.3 (2014-08-20)
* Added function for adding new language translations, updated docs, and fixed the notSupportedMessage translation ([view](https://github.com/videojs/video.js/pull/1427))
* Exposed the player.selectSource method to allow overriding the source selection order ([view](https://github.com/videojs/video.js/pull/1424))

## 4.7.2 (2014-08-14)
* Fixed a case where timeupdate events were not firing, and fixed and issue with the Flash player version ([view](https://github.com/videojs/video.js/pull/1417))

## 4.7.1 (2014-08-06)
* Fixed the broken bower.json config ([view](https://github.com/videojs/video.js/pull/1401))

## 4.7.0 (2014-08-05)
* Added cross-browser isArray for cross-frame support. fixes #1195 ([view](https://github.com/videojs/video.js/pull/1218))
* Fixed support for webvtt chapters. Fixes #676. ([view](https://github.com/videojs/video.js/pull/1221))
* Fixed issues around webvtt cue time parsing. Fixed #877, fixed #183. ([view](https://github.com/videojs/video.js/pull/1236))
* Fixed an IE11 issue where clicking on the video wouldn&#x27;t show the controls ([view](https://github.com/videojs/video.js/pull/1291))
* Added a composer.json for PHP packages ([view](https://github.com/videojs/video.js/pull/1241))
* Exposed the vertical option for slider controls ([view](https://github.com/videojs/video.js/pull/1303))
* Fixed an error when disposing a tech using manual timeupdates ([view](https://github.com/videojs/video.js/pull/1312))
* Exported missing Player API methods (remainingTime, supportsFullScreen, enterFullWindow, exitFullWindow, preload) ([view](https://github.com/videojs/video.js/pull/1328))
* Added a base for running saucelabs tests from grunt ([view](https://github.com/videojs/video.js/pull/1215))
* Added additional browsers for saucelabs testing ([view](https://github.com/videojs/video.js/pull/1216))
* Added support for listening to multiple events through a types array ([view](https://github.com/videojs/video.js/pull/1231))
* Exported the vertical option for the volume slider ([view](https://github.com/videojs/video.js/pull/1378))
* Fixed Component trigger function arguments and docs ([view](https://github.com/videojs/video.js/pull/1310))
* Now copying all attributes from the original video tag to the generated video element ([view](https://github.com/videojs/video.js/pull/1321))
* Added files to be ignored in the bower.json ([view](https://github.com/videojs/video.js/pull/1337))
* Fixed an error that could happen if Flash was diposed before the ready callback was fired ([view](https://github.com/videojs/video.js/pull/1340))
* The up and down arrows can now be used to control sliders in addition to left and right ([view](https://github.com/videojs/video.js/pull/1345))
* Added a player.currentType() function to get the MIME type of the current source ([view](https://github.com/videojs/video.js/pull/1320))
* Fixed a potential conflict with other event listener shims ([view](https://github.com/videojs/video.js/pull/1363))
* Added support for multiple time ranges in the load progress bar ([view](https://github.com/videojs/video.js/pull/1253))
* Added vjs-waiting and vjs-seeking css classnames and updated the spinner to use them ([view](https://github.com/videojs/video.js/pull/1351))
* Now restoring the original video tag attributes on a tech change to support webkit-playsinline ([view](https://github.com/videojs/video.js/pull/1369))
* Fixed an issue where the user was unable to scroll/zoom page if touching the video ([view](https://github.com/videojs/video.js/pull/1373))
* Added "sliding" class for when slider is sliding to help with handle styling ([view](https://github.com/videojs/video.js/pull/1385))

## 4.6.4 (2014-07-11)
* Fixed an issue where Flash autoplay would not show the controls ([view](https://github.com/videojs/video.js/pull/1343))

## 4.6.3 (2014-06-12)
* Updated to version 4.4.1 of the SWF ([view](https://github.com/videojs/video.js/pull/1285))
* Fixed a minification issue with the fullscreen event. fixes #1282 ([view](https://github.com/videojs/video.js/pull/1286))

## 4.6.2 (2014-06-10)
* Fixed an issue with the firstplay event not firing when autoplaying ([view](https://github.com/videojs/video.js/pull/1271))

## 4.6.1 (2014-05-20)
* Udpated playbackRate menu to work in minified version ([view](https://github.com/videojs/video.js/pull/1223))

## 4.6.0 (2014-05-20)
* Updated the UI to support live video ([view](https://github.com/videojs/video.js/pull/1121))
* The UI now resets after a source change ([view](https://github.com/videojs/video.js/pull/1124))
* Now assuming smart CSS defaults for sliders to prevent reflow on player init ([view](https://github.com/videojs/video.js/pull/1122))
* Fixed the title element placement in menus [[view](https://github.com/videojs/video.js/pull/1114)]
* Fixed title support for menu buttons ([view](https://github.com/videojs/video.js/pull/1128))
* Fixed extra mousemove events on Windows caused by certain apps, not users [[view](https://github.com/videojs/video.js/pull/1068)]
* Fixed error due to undefined tech when no source is supported [[view](https://github.com/videojs/video.js/pull/1172)]
* Fixed the progress bar not finishing when manual timeupdate events are used [[view](https://github.com/videojs/video.js/pull/1173)]
* Added a more informative and styled fallback message for non-html5 browsers [[view](https://github.com/videojs/video.js/pull/1181)]
* Added the option to provide an array of child components instead of an object [[view](https://github.com/videojs/video.js/pull/1093)]
* Fixed casing on webkitRequestFullscreen [[view](https://github.com/videojs/video.js/pull/1101)]
* Made tap events on mobile less sensitive to touch moves [[view](https://github.com/videojs/video.js/pull/1111)]
* Fixed the default flag for captions/subtitles tracks [[view](https://github.com/videojs/video.js/pull/1153)]
* Fixed compilation failures with LESS v1.7.0 and GRUNT v0.4.4 [[view](https://github.com/videojs/video.js/pull/1180)]
* Added better error handling across the library [[view](https://github.com/videojs/video.js/pull/1197)]
* Updated captions/subtiles file fetching to support cross-origin requests in older IE browsers [[view](https://github.com/videojs/video.js/pull/1095)]
* Added support for playback rate switching [[view](https://github.com/videojs/video.js/pull/1132)]
* Fixed an issue with the loadstart event order that caused the big play button to not hide [[view](https://github.com/videojs/video.js/pull/1209)]
* Modernized the fullscreen API and added support for IE11 [[view](https://github.com/videojs/video.js/pull/1205)]
* Added cross-browser testing with SauceLabs, and added Karma as the default test runner ([view](https://github.com/videojs/video.js/pull/1187))
* Fixed saucelabs integration to run on commits in TravisCI ([view](https://github.com/videojs/video.js/pull/1214))
* Added a clearer error message when a tech is undefined ([view](https://github.com/videojs/video.js/pull/1210))
* Added a cog icon to the font icons ([view](https://github.com/videojs/video.js/pull/1211))
* Added a player option to offset the subtitles/captions timing ([view](https://github.com/videojs/video.js/pull/1212))

## 4.5.2 (2014-04-12)
* Updated release versioning to include bower.json and component.json

## 4.5.1 (2014-03-27)
* Fixed a bug from the last release where canPlaySource was no longer exported

## 4.5.0 (2014-03-27)
* Added component(1) support ([view](https://github.com/videojs/video.js/pull/1032))
* Captions now move down when controls are hidden ([view](https://github.com/videojs/video.js/pull/1053))
* Added the .less source file to the distribution files ([view](https://github.com/videojs/video.js/pull/1056))
* Changed src() to return the current selected source ([view](https://github.com/videojs/video.js/pull/968))
* Added a grunt task for opening the next issue that needs addressing ([view](https://github.com/videojs/video.js/pull/1059))
* Fixed Android 4.0+ devices' check for HLS support ([view](https://github.com/videojs/video.js/pull/1084))

## 4.4.3 (2014-03-06)
* Fixed bugs in IE9 Windows 7N with no Media Player ([view](https://github.com/videojs/video.js/pull/1060))
* Fixed a bug with setPoster() in the minified version ([view](https://github.com/videojs/video.js/pull/1062))

## 4.4.2 (2014-02-24)
* Fixed module.exports in minified version ([view](https://github.com/videojs/video.js/pull/1038))

## 4.4.1 (2014-02-18)
* Added .npmignore so dist files wouldn't be ignored in packages

## 4.4.0 (2014-02-18)
* Made the poster updateable after initialization ([view](https://github.com/videojs/video.js/pull/838))
* Exported more textTrack functions ([view](https://github.com/videojs/video.js/pull/815))
* Moved player ID generation to support video tags with no IDs ([view](https://github.com/videojs/video.js/pull/845))
* Moved to using QUnit as a dependency ([view](https://github.com/videojs/video.js/pull/850))
* Added the util namespace for public utility functions ([view](https://github.com/videojs/video.js/pull/862))
* Fixed an issue with calling duration before Flash is loaded ([view](https://github.com/videojs/video.js/pull/861))
* Added player methods to externs so they can be overridden ([view](https://github.com/videojs/video.js/pull/878))
* Fixed html5 playback when switching between media techs ([view](https://github.com/videojs/video.js/pull/887))
* Fixed Firefox+Flash mousemove events so controls don't hide permanently ([view](https://github.com/videojs/video.js/pull/899))
* Fixed a test for touch detection ([view](https://github.com/videojs/video.js/pull/962))
* Updated the src file list for karma tests ([view](https://github.com/videojs/video.js/pull/948))
* Added more tests for API properties after minification ([view](https://github.com/videojs/video.js/pull/906))
* Updated projet to use npm version of videojs-swf ([view](https://github.com/videojs/video.js/pull/930))
* Added support for dist zipping on windows ([view](https://github.com/videojs/video.js/pull/944))
* Fixed iOS fullscreen issue ([view](https://github.com/videojs/video.js/pull/977))
* Fixed touch event bubbling ([view](https://github.com/videojs/video.js/pull/992))
* Fixed ARIA role attribute for button and slider ([view](https://github.com/videojs/video.js/pull/988))
* Fixed an issue where a component's dispose event would bubble up ([view](https://github.com/videojs/video.js/pull/981))
* Quieted down deprecation warnings ([view](https://github.com/videojs/video.js/pull/971))
* Updated the seek handle to contain the current time ([view](https://github.com/videojs/video.js/pull/902))
* Added requirejs and browserify support (UMD) ([view](https://github.com/videojs/video.js/pull/998))

## 4.3.0 (2013-11-04)
* Added Karma for cross-browser unit testing ([view](https://github.com/videojs/video.js/pull/714))
* Unmuting when the volume is changed ([view](https://github.com/videojs/video.js/pull/720))
* Fixed an accessibility issue with the big play button ([view](https://github.com/videojs/video.js/pull/777))
* Exported user activity methods ([view](https://github.com/videojs/video.js/pull/783))
* Added a classname to center the play button and new spinner options ([view](https://github.com/videojs/video.js/pull/784))
* Added API doc generation ([view](https://github.com/videojs/video.js/pull/801))
* Added support for codecs in Flash mime types ([view](https://github.com/videojs/video.js/pull/805))

## 4.2.2 (2013-10-15)
* Fixed a race condition that would cause videos to fail in Firefox ([view](https://github.com/videojs/video.js/pull/776))

## 4.2.1 (2013-09-09)
* Fixed an infinite loop caused by loading the library asynchronously ([view](https://github.com/videojs/video.js/pull/727))

## 4.2.0 (2013-09-04)
* Added LESS as a CSS preprocessor for the default skin ([view](https://github.com/videojs/video.js/pull/644))
* Exported MenuButtons for use in the API ([view](https://github.com/videojs/video.js/pull/648))
* Fixed ability to remove listeners added with one() ([view](https://github.com/videojs/video.js/pull/659))
* Updated buffered() to account for multiple loaded ranges ([view](https://github.com/videojs/video.js/pull/643))
* Exported createItems() for custom menus ([view](https://github.com/videojs/video.js/pull/654))
* Preventing media events from bubbling up the DOM ([view](https://github.com/videojs/video.js/pull/630))
* Major reworking of the control bar and many issues fixed ([view](https://github.com/videojs/video.js/pull/672))
* Fixed an issue with minifiying the code on Windows systems ([view](https://github.com/videojs/video.js/pull/683))
* Added support for RTMP streaming through Flash ([view](https://github.com/videojs/video.js/pull/605))
* Made tech.features available to external techs ([view](https://github.com/videojs/video.js/pull/705))
* Minor code improvements ([view](https://github.com/videojs/video.js/pull/706))
* Updated time formatting to support NaN and Infinity ([view](https://github.com/videojs/video.js/pull/627))
* Fixed an `undefined` error in cases where no tech is loaded ([view](https://github.com/videojs/video.js/pull/632))
* Exported addClass and removeClass for player components ([view](https://github.com/videojs/video.js/pull/661))
* Made the fallback message customizable ([view](https://github.com/videojs/video.js/pull/638))
* Fixed an issue with the loading spinner placement and rotation ([view](https://github.com/videojs/video.js/pull/694))
* Fixed an issue with fonts being flaky in IE8

## 4.1.0 (2013-06-28)
* Turned on method queuing for unready playback technologies (flash) [view](https://github.com/videojs/video.js/pull/553)
* Blocking user text selection on player components [view](https://github.com/videojs/video.js/pull/524)
* Exported requestFullScreen() and cancelFullScreen() in the minified version [view](https://github.com/videojs/video.js/pull/555)
* Exported the global players reference, videojs.players [view](https://github.com/videojs/video.js/pull/560)
* Added google analytics to the CDN version ([view](https://github.com/videojs/video.js/pull/568))
* Exported fadeIn/fadeOut for the Component API ([view](https://github.com/videojs/video.js/pull/581))
* Fixed an IE poster error when autoplaying ([view](https://github.com/videojs/video.js/pull/593))
* Exported bufferedPercent for the API ([view](https://github.com/videojs/video.js/pull/588))
* Augmented user agent detection, specifically for Android versions ([view](https://github.com/videojs/video.js/pull/470))
* Fixed IE9 canPlayType error ([view](https://github.com/videojs/video.js/pull/606))
* Fixed various issues with captions ([view](https://github.com/videojs/video.js/pull/609))

## 4.0.4 (2013-06-11)
* Added google analytics to current CDN version. ([view](https://github.com/videojs/video.js/pull/571))

## 4.0.3 (2013-05-28)
* Fixed an bug with exiting fullscreen. [view](https://github.com/videojs/video.js/pull/546)

## 4.0.2 (2013-05-23)
* Correct version number for CDN swf url. Minify CSS. [view](https://github.com/videojs/video.js/pull/535)

## 4.0.1 (2013-05-22)
* Fixed old IE font loading [view](https://github.com/videojs/video.js/pull/532)

## 4.0.0 (2013-05-09)
* Improved performance through an 18% size reduction using Google Closure Compiler in advanced mode
* Greater stability through an automated cross-browser/device test suite using TravisCI, Bunyip, and Browserstack.
* New plugin interface and plugin listing for extending Video.js
* New default skin design that uses font icons for greater customization
* Responsive design and retina display support
* Improved accessibility through better ARIA support
* Moved to Apache 2.0 license
* 100% JavaScript development tool set including Grunt
* Updated docs to use Github markdown
* Allow disabling of default components
* Duration is now setable (need ed for HLS m3u8 files)
* Event binders (on/off/one) now return the player instance
* Stopped player from going back to beginning on ended event
* Added support for percent width/height and fluid layouts
* Improved load order of elements to reduce reflow
* Changed addEvent function name to 'on'
* Removed conflicting array.indexOf function
* Added exitFullScreen to support BlackBerry devices (pull/143)

## 3.2.0 (2012-03-20)
* Updated docs with more options.
* Overhauled HTML5 Track support.
* Fixed Flash always autoplaying when setting source.
* Fixed localStorage context
* Updated 'fullscreenchange' event to be called even if the user presses escape to exit fullscreen.
* Automatically converting URsource URL to absolute for Flash fallback.
* Created new 'loadedalldata' event for when  the source is completely downloaded
* Improved player.destroy(). Now removes elements and references.
* Refactored API to be more immediately available.

### Patches
* 3.2.1 (2012-04-06) Fixed setting width/height with javascript options
* 3.2.2 (2012-05-02) Fixed error with multiple controls fading listeners
* 3.2.3 (2012-11-12) Fixed chrome spinner continuing on seek

## 3.1.0 (2012-01-30)
* Added CSS fix for Firefox 9 fullscreen (in the rare case that it's enabled)
* Replaced swfobject with custom embed to save file size.
* Added  flash iframe-mode, an experimental method for getting around flash reloading issues.
* Fixed issue with volume knob position. Improved controls fading.
* Fixed ian issue with triggering fullscreen a second time.
* Fixed issue with getting attributes in Firefox 3.0
* Escaping special characters in source URL for Flash
* Added a check for if Firefox is enabled which fixes a Firefox 9 issue
* Stopped spinner from showing on 'stalled' events since browsers sometimes don't show that they've recovered.
* Fixed CDN Version which was breaking dev.html
* Made full-window mode more independent
* Added rakefile for release generation

## 3.0.0 (2012-01-10)
* Same HTML/CSS Skin for both HTML5 and Flash video
* Super lightweight Flash fallback player for browsers that don’t support HTML5 video
* Free CDN hosting

### Patches
* 3.0.2 (2012-01-12) Started tracking changes with zenflow
* 3.0.3 (2012-01-12) Added line to docs to test zenflow
* 3.0.4 (2012-01-12) Fixing an undefined source when no sources exist on load
* 3.0.5 (2012-01-12) Removed deprecated event.layerX and layerY
* 3.0.6 (2012-01-12) Fixed wrong URL for CDN in docs
* 3.0.7 (2012-01-12) Fixed an ie8 breaking bug with the poster
* 3.0.8 (2012-01-23) Fixed issue with controls not hiding in IE due to no opacity support
