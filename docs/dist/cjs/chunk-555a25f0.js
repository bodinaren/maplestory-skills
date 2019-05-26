'use strict';

(function (Rank) {
    Rank[Rank["Basic"] = 1] = "Basic";
    Rank[Rank["Awakening"] = 2] = "Awakening";
})(exports.Rank || (exports.Rank = {}));

const MAX_POINTS_RANK_1 = 82;
const MAX_POINTS_RANK_2 = 15;

exports.MAX_POINTS_RANK_1 = MAX_POINTS_RANK_1;
exports.MAX_POINTS_RANK_2 = MAX_POINTS_RANK_2;
