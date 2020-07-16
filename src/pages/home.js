import React, { useEffect } from 'react';
import { api } from '../services/api'
// import { Container } from './styles';

//https://developer.riotgames.com/docs/lol#data-dragon_data-assets
//https://lolprofile.net/pt/summoner/br/Buscar%20Invocador
export default function Pages() {
	let token = "RGAPI-478c0511-e442-42e5-9c31-0a54242b1a53"
	useEffect(() => {
		async function getApiRiotGames(){
			const user = "Mata Comunistaa"
			let userWin = true

			const win = []
			const lose = []
			const response = await api.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${user}`,{
				headers:{
    				"Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
					"X-Riot-Token": token	
				}
			})

			const { accountId } = response.data

			const match = await api.get(`https://br1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}`,{
				headers:{
    				"Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
					"X-Riot-Token": token	
				}
			})

			const partidas = await api.get(`https://br1.api.riotgames.com/lol/match/v4/matches/2001154154`,{
				headers:{
    				"Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
					"X-Riot-Token": token	
				}
			})

			const getChampions = await api.get('http://ddragon.leagueoflegends.com/cdn/10.14.1/data/en_US/champion.json')
			const championDada = getChampions.data.data
			const keysChampions = Object.keys(getChampions.data.data)
			
			const arrSummoner = partidas.data.participantIdentities.map(player => {
				const { participantId } = player
				const { summonerName, summonerId, profileIcon } = player.player

				return {participantId, summonerName, summonerId, profileIcon}
			})

			partidas.data.participants.forEach(partida => {
				const { participantId, championId, stats: { win: vencedor } } = partida

				const { summonerName, summonerId, profileIcon } = arrSummoner.filter(summoner => summoner.participantId === participantId)[0]

				const champion = keysChampions.filter((champion) => parseInt(championDada[champion].key) === championId)[0]

				if(vencedor){
					win.push({...partida, summonerName, summonerId, profileIcon, championName: champion})
				}else{
					if(summonerName === user) userWin = false

					lose.push({...partida, summonerName, summonerId, profileIcon, championName: champion})
				}
			})

			console.log(win)
			console.log(lose)
			console.log(userWin)
			//console.log(match.data)
			//console.log(partidas.data)

			// console.log(champion)
		}

		getApiRiotGames()
	},[token])

	return (
		<h1>Home</h1>
	);
}
