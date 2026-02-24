export enum ECommand {
	// Логин по логину и паролю
	auth = 'Auth',

	//  Логин по токену
	getUser = 'GetUser',

	//  Удаление куков по токену
	logout = 'Logout',

	// Добавление юзера
	addUser = 'AddUser',

	// Изменение данных юзеру от админа
	changeUser = 'ChangeUser',

	// Изменение пароля юзеру от админа
	changeUserPass = 'ChangeUser',

	// Изменение аватара от юзера себе
	changeUserAvatar = 'ChangeUser',

	// Изменение данных от юзера себе
	changeUserData = 'ChangeUser',

	// Получение всех пользователей
	allUsers = 'AllUsers',

	// Получение всех уровней доступа
	allAccess = 'AllAccess',

	// Добавление должности
	addWorkPos = 'AddWorkPosition',

	// Изменение должности
	changeWorkPos = 'ChangeWorkPosition',

	// Получение всех должностей
	allWorkPos = 'AllWorkPosition',

	// Добавление отдела
	addDept = 'AddDept',

	// Изменение отдела
	changeDept = 'ChangeDept',

	// Получение всех отделов
	allDept = 'AllDept',

	// Добавление категории
	addCategoryCert = 'AddCategoryCert',

	// Изменение категории
	changeCategoryCert = 'ChangeCategoryCert',

	// Получение всех категорий
	allCategoryCert = 'AllCategoryCert',

	// Получение всех статусов
	allStatusCert = 'AllStatusCert',

	// Добавление сертификата
	addCert = 'AddCert',

	// Изменение сертификата
	changeCert = 'ChangeCert',

	// Занос в архив
	archiveCert = 'ArchiveCert',

	// Получение всех сертификатов
	allCert = 'AllCert',

	// Запрос на документ
	docs = 'Docs',

	// Получение всех событий
	allEvents = 'AllEvents',

	// Получение уведомлений
	allNotif = 'AllNotif',

	// Чтение уведомлений
	notifRead = 'NotifRead'
}
