export default class Tournament {
    constructor(id) {
        this.id = id;
        this.name = "";
        this.checkInStartTime = "";
        this.gameName = "";
        this.startTime = "";
        this.stageIds = [];
    }

    async getTournamentData(debug) {
        if(!this.id) {
            console.error("tournament has no ID!");
            return;
        }

        var response = await fetch(`https://dtmwra1jsgyb0.cloudfront.net/tournaments/${this.id}`, {
                method: "GET",
                redirect: "follow"
            });

        var result = await response.json();

        if(debug) {
            console.log(result);
        }

        this.name = result.name;
        this.checkInStartTime = result.checkInStartTime;
        this.gameName = result.gameName;
        this.startTime = result.startTime;
        this.stageIds = result.stageIDs;
    }

    async getRounds(){
        if(!this.id) {
            console.error("tournament has no ID!");
            return;
        }

        var response = await fetch(`https://dtmwra1jsgyb0.cloudfront.net/rounds/${this.id}`, {
                method: "GET",
                redirect: "follow"
            });

        var result = await response.json();

        if(debug) {
            console.log(result);
        }

        this.rounds = result;
    }

    getRound(id) {
        var round = this.rounds.find(round => round.id == id);
        return round;
    }
}