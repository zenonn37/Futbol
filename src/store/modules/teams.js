/* eslint-disable */

const state = {


    teams: [

    ]


}

const mutations = {

    SET_TEAMS(state, teams) {
        state.teams = teams;
    }

}


const getters = {
    TEAMS_ALL(state) {
        return state.teams
    },

    getTeamById: (state) => (id) => {
        console.log(id);
        //  console.log(state.teams);

        console.log(state.teams.find(team => team.team_id === id));

        return state.teams.find(team => team.team_id === id)

    }

}
const actions = {
    GET_TEAMS({ commit }, league) {

    }

}



export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}