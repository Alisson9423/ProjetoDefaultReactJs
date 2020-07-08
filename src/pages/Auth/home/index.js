import React, { useState, useEffect, useCallback } from 'react';

import PostItem from './postItem'
import { api } from '../../../services/api'
import { ContainerHome } from './styles';
import CardReserva from '../../../components/CardReservas'
import CardFinalizada from '../../../components/CardReservas/finalizadas'
import CardCancelados from '../../../components/CardReservas/canceladas'

export default function Home() {
	const [toggle, setToggle] = useState(tabsItens)
	const [toggleCard, settoggleCard] = useState({})
	const [task, setTask] = useState([])

	const getpost = useCallback(async () => {
		const response = await api.get('https://jsonplaceholder.typicode.com/posts/1')
		setTask([response.data])
	}, [])


	useEffect(() => {
		getpost()
	}, [getpost])

	function toggleCards(click) {
		let newArr = toggle.map(item => {
			if (item.tab === click) {
				item.active = true
			} else {
				item.active = false
			}

			return item
		})

		setToggle(newArr)
	}

	return (
		<ContainerHome>
			<div className="container">
				<h1>Minhas Reservas</h1>

				<div className="tabs">
					{toggle.map((item, key) =>
						<span key={key} onClick={() => toggleCards(item.tab)} className={`${item.active ? 'active' : ''}`} >{item.title}</span>
					)}


					<div className="container-search">
						<input type="text" />
					</div>
				</div>

				<div className="container-cards">

					{tabsItens.map((item, key) => {
						switch (item.tab) {
							case 'ativa':
								return (
									<div key={key} className={`reserva ${item.active ? 'active' : ''}`}>
										<CardReserva />
									</div>
								)
							case 'finalizadas':
								return (
									<div key={key} className={`reserva ${item.active ? 'active' : ''}`}>
										<CardFinalizada />
									</div>
								)
							case 'canceladas':
								return (
									<div key={key} className={`reserva ${item.active ? 'active' : ''}`}>
										<CardCancelados />
										<CardCancelados />
									</div>
								)

							default:
								return <div />;
						}
					})}

				</div>
			</div>
		</ContainerHome>
	);
}

const tabsItens = [
	{
		active: true,
		title: 'Reservas Ativas',
		tab: 'ativa',
	},
	{
		active: false,
		title: 'Reservas Finalizadas',
		tab: 'finalizadas',
	},
	{
		active: false,
		title: 'Reservas Canceladas',
		tab: 'canceladas',
	}
]
