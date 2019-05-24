import React from 'react';

export default class Profile extends React.Component {

    render() {
        return (
            <div>
			<h1>Мой профиль</h1>
			<b>Фамилия</b><p> Gamz</p>
			<b>Имя</b> <p>Grant</p>
			<b>e-mail</b> <p>gamz@rumbler.ru</p>
			<b>Телефон</b> <p>8(999)999-99-99</p>
			<b>О себе</b> <p>Average static man</p>					
			<Link className="side" to={ '../' }> Назад</Link>			
			</div>
        )
    }
}
