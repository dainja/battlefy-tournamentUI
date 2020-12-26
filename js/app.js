import Tournament from './battlefy/tournament.js';
import Stage from './battlefy/stage.js';

async function startApp() {
    var tournament = new Tournament("5fcd2b68b334977c353f96c5");

    await tournament.getTournamentData(true);

    console.log(tournament);
    var tournamentNameElement = document.getElementById("tournament-name");
    tournamentNameElement.textContent = tournament.name;

    var stageIds = tournament.stageIds;
    var stages = [];

    // loop array of stage IDs. ex ["asdasd", "asdokaosdk"];
    await stageIds.forEach(async stageId => {
        // create a Stage instance, using stageId.
        var stage = new Stage(stageId);
        // get stage data from battlefy API
        await stage.getStageData();
        // add stage to stages list.
        stages.push(stage);
    });

    console.log(stages);

};

startApp();