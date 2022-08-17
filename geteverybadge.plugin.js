/**
 * @name GetEveryBadge
 * @version 1.1.3
 * @authorId 492278266065846273
 * @description Applies you all profile badges on Discord.
 * @website https://github.com/Visual9999
 * @authorLink https://github.com/Visual9999
 * @source https://github.com/Visual9999/GetEveryBadge
 * @updateUrl https://raw.githubusercontent.com/Visual9999/GetEveryBadge/main/geteverybadge.plugin.js
 */

module.exports = (_ => {
	const config = {
		"info": {
			"name": "GetEveryBadge",
			"author": "Visual#1337",
			"version": "1.1.3",
			"description": "Applies you all profile badges on Discord."
		},
		"changeLog": {
			"added": {
				"Embed JSON": "Code clean-up."
			}
		}
	};

return class {

    constructor() {
        this.initialized = false;
    }

    getName () {return config.info.name;}
	getAuthor () {return config.info.author;}
	getVersion () {return config.info.version;}
	getDescription () {return config.info.description;}

    getSettingsPanel() {
        return "";
    }

    start() {
        window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getCurrentUser !== undefined) {return m.default.getCurrentUser().flags = -1;}if (m.getCurrentUser !== undefined) {return m.getCurrentUser().flags = -1}}}]);window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getCurrentUser !== undefined) {return m.default.getCurrentUser().public_flags += 1;}if (m.getCurrentUser !== undefined) {return m.getCurrentUser().public_flags += 1}}}])
    }

    stop() {
        location.reload();
    }

}
