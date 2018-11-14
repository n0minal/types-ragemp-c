interface GameUiMp {
	messages: GameUiMessagesMp;
}

interface GameUiMessagesMp {
	showShard(title: string, message: string, titleColor: number,  bgColor: number, time?: number): void
	showWeaponPurchased(title: string, weaponName: string, weaponHash: number, time?: number): void
	showPlane(title: string, planeName: string, planeHash: number, time?: number): void
	showMidsized(title: string, message: string, time?: number): void
	showMidsizedShard(title: string, message: string, bgColor: number, useDarkerShard: boolean, condensed: boolean, time?: number): void
}
