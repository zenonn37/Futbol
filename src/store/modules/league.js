import axios from 'axios'
import { api } from '../../api'

const state = {
    leagues: [],

}

const mutations = {
    set_league(state, league) {
        state.leagues = league
    },
    set_teams(state, teams) {

    },

}

const actions = {
    getcountry({ commit, dispatch }, payload) {
        new Promise((resolve, reject) => {
            axios.post(`${api}/country`, {
                country: payload.country,
                season: payload.season
            })
                .then(res => {
                    const result = res.data.body.api.leagues;
                    commit('set_league', result)
                    resolve();
                }).catch(err => {
                    reject();
                    console.log(err);

                })
        });
    },
    get_teams({ commit, dispatch }, id) {
        new Promise((resolve, reject) => {
            axios.get(`${api}/teams_league/${id}`)
                .then(res => {
                    const result = res.data.body.api.teams;
                    console.log(result);

                    commit('teams/SET_TEAMS', result, { root: true })
                    resolve();
                }).catch(err => {
                    reject();
                    console.log(err);

                })
        });
    }

}

const getters = {
    get_leagues(state) {
        return state.leagues
    },
    get_league: (state) => (id) => {
        const lid = parseInt(id)
        return state.leagues.find(league => league.league_id === lid)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}