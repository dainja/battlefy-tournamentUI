export default class Stage {
    constructor(id) {
        this.id = id;
        this.matches = [];
    }

    async getStageData (){
        // Implement fetch like we do in Tournament.getTournamnetData.
        // get necessary stage data.
        // use url `https://dtmwra1jsgyb0.cloudfront.net/stages/${stage}`
    }
}