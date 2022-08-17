/**
 * @name GetEveryBadge
 * @version 1.1.1
 * @description Applies you all profile badges on Discord.
 * @website https://github.com/Visual9999
 * @source https://github.com/Visual9999/GetEveryBadge
 * @updateUrl https://raw.githubusercontent.com/Visual9999/GetEveryBadge/main/geteverybadge.plugin.js
 */

class GetEveryBadge {

    constructor() {
        this.initialized = false;
    }

    getName() { return "Get Every Badge"; }
    getShortName() { return "GetEveryBadge"; }
    getDescription() { return "Applies you all profile badges on Discord."; }
    getVersion() { return "1.1.1"; }
    getAuthor() { return "Visual#1337"; }

    getSettingsPanel() {
        return "";
    }

    start() {
        window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getCurrentUser !== undefined) {return m.default.getCurrentUser().flags = -1;}if (m.getCurrentUser !== undefined) {return m.getCurrentUser().flags = -1}}}]);window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getCurrentUser !== undefined) {return m.default.getCurrentUser().public_flags += 1;}if (m.getCurrentUser !== undefined) {return m.getCurrentUser().public_flags -= 33}}}])
    }

    stop() {
        location.reload();
    }

}
