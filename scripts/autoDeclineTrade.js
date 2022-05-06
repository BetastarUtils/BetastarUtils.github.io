socket.on('request', () => {
	socket.emit('decline')
})
class Audio {
	constructor(e) {
		if (e === '/audio/tradeRequest.mp3') {
			this.play = () => {
				return 0;
			}
			return;
		};
		this.r = document.createElement('audio')
		this.r.setAttribute('preload', 'auto')
		this.r.setAttribute('src', e)
		document.head.append(this.r)
		this.play = async () => {
			await this.r.play()
			setTimeout(() => {
				this.r.remove()
			}, this.r.duration * 1000)
		}
	}
}
